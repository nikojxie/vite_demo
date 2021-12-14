import { createApp } from 'vue'
// import Antd from "ant-design-vue";
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// import "ant-design-vue/dist/antd.css";
import api from "./api/index";
import dayjs from 'dayjs'

// import VueMarkdownEditor from '@kangc/v-md-editor';
// import '@kangc/v-md-editor/lib/style/base-editor.css';
// import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
// import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// import Prism from 'prismjs';
// VueMarkdownEditor.use(vuepressTheme, {
//     Prism,
// });


import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js';
VMdPreview.use(githubTheme, {
    Hljs: hljs,
});

const app = createApp(App)
app.use(router).use(store)
// app.use(VueMarkdownEditor)
app.use(VMdPreview)
app.config.globalProperties.$api = api
app.config.globalProperties.$dayjs = {
    format(date,formatter = 'YYYY-MM-DD'){
        return dayjs(date).format(formatter)
    }
}
app.mount('#app')