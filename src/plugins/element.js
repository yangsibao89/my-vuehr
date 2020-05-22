import Vue from 'vue'
import {
  Button, Form, Input, Loading, FormItem,
  Checkbox, Message, Container, Dropdown,
  DropdownMenu, DropdownItem, Header, Aside, Main, Menu, Submenu, MessageBox,
  MenuItem, Breadcrumb, BreadcrumbItem, Card, Upload,
  Tag, Dialog, Col, Row, Select, RadioGroup, Radio, Popover,
  Tree, DatePicker, Table, TableColumn, Pagination, Option, Tabs,
  TabPane, Collapse, CollapseItem, Icon, Switch
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
Vue.use(Col)
Vue.use(Row)
Vue.use(Select)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Popover)
Vue.use(Tree)
Vue.use(Icon)
Vue.use(DatePicker)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Option)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Switch)

/* 不要use，use了每个页面都蹦 */
// Vue.use(Message)
// Vue.use(MessageBox)

Vue.prototype.$messgae = Message
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
