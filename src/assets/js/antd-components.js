import Vue from 'vue';

// 按需导入antd组件
import {
    Button,
    Tag,
    Select,
    Icon,
    Avatar,
    Layout,
    Menu,
    Message,
    FormModel,
    Input,
    Carousel,
    Modal,
    Popconfirm,
    Form
} from "ant-design-vue";


// 对组件进行全局注册
Vue.use(Button);
Vue.use(Tag);
Vue.use(Select);
Vue.use(Icon);
Vue.use(FormModel);
Vue.use(Input);
Vue.use(Avatar);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Carousel);
// Vue.use(Message);
Vue.use(Modal);
Vue.use(Popconfirm);
Vue.use(Form);