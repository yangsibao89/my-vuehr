//  export default xxx -> import xxxx
//  export xxx -> import { xxx }
import { getRequest } from './api'

export const initMenu = (router, store) => {
  if (store.state.routes.length > 0) {
    // 如果当前routes不为空，直接返回
    return
  }
  getRequest('/system/config/menu').then(data => {
    // 返回的是当前hr对应role的所有menu返回来的数据
    // console.log(data)
    if (data) {
      const fmtRoutes = formatRoutes(data)
      router.addRoutes(fmtRoutes)
      store.commit('initRoutes', fmtRoutes)
      /**
       * websocket用的，现在用不到
       */
      // store.dispatch('connect')
    }
  })
}

export const formatRoutes = (routes) => {
  const fmRoutes = []
  routes.forEach(route => {
    // 赋值表达式，将每个route赋值给一个对象
    let {
      path,
      component,
      name,
      meta,
      iconCls,
      children
    } = route
    if (children && children instanceof Array) {
      // 如果有子路径，再次格式化一下
      children = formatRoutes(children)
    }

    const fmRoute = {
      path: path,
      name: name,
      iconCls: iconCls,
      meta: meta,
      children: children,
      component (resolve) {
        // 这个特殊的 `require` 语法将会告诉 webpack自动将你的构建代码切割成多个包，这些包会通过 Ajax 请求加载
        // https://cn.vuejs.org/v2/guide/components-dynamic-async.html
        // https://webpack.js.org/api/module-methods/#require-amd-version
        // resovle是成功后的回调函数
        if (component.startsWith('Home')) {
          require(['../views/' + component + '.vue'], resolve)
        } else if (component.startsWith('Emp')) {
          require(['../views/emp/' + component + '.vue'], resolve)
        } else if (component.startsWith('Per')) {
          require(['../views/per/' + component + '.vue'], resolve)
        } else if (component.startsWith('Sal')) {
          require(['../views/sal/' + component + '.vue'], resolve)
        } else if (component.startsWith('Sta')) {
          require(['../views/sta/' + component + '.vue'], resolve)
        } else if (component.startsWith('Sys')) {
          require(['../views/sys/' + component + '.vue'], resolve)
        }
      }
    }
    fmRoutes.push(fmRoute)
  })
  return fmRoutes
}
