import Vue from 'vue'
import {
  Button, Form, Input, Loading, FormItem,
  Checkbox, Message, Container, Dropdown,
  DropdownMenu, DropdownItem, Header, Aside, Main, Menu, Submenu, MessageBox, MenuItem, Breadcrumb, BreadcrumbItem, Card, Upload, Tag, Dialog
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Loading)
Vue.use(Checkbox)
Vue.use(Container)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Upload)
Vue.use(Tag)
Vue.use(Dialog)
/* 不要use，use了每个页面都蹦 */
// Vue.use(Message)
// Vue.use(MessageBox)

Vue.prototype.$messgae = Message
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
