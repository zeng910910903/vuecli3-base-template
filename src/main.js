import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import "bootstrap/dist/css/bootstrap.css"
// 引入 Bootstrap & jQuery
import 'bootstrap';
import "@/styles/custom-bootstrap.scss"
import "jquery"
// 引入 vue-meta
import VueMeta from "vue-meta"
Vue.use(VueMeta)

// 引入进度条组件
import VueProgressBar from "vue-progressbar";

Vue.use(VueProgressBar, {
	color: "rgb(143, 255, 199)",
	failedColor: "red",
	height: "2px",
});

// 引入toast组件
// github：https://github.com/shakee93/vue-toasted
import Toasted from "vue-toasted";
Vue.use(Toasted, {
	position: "top-center",
	duration: 2000,
	iconPack: "custom-class",
});

// 引入 fontawesome 字体
// website: https://fontawesome.com/icons?d=gallery&m=free
// format：<i class="fa fa-times"></i>
// 常用：
// 感叹号：fa fa-exclamation
// 错误： fa fa-times
import "font-awesome/css/font-awesome.min.css";

// 自定义全局组件
import IconSvg from '@/components/common/IconSvg.vue';
Vue.component('icon-svg', IconSvg);


// import { setRemInit } from "@/utils/rem";
// setRemInit(); //进行初始化立即运行

Vue.config.productionTip = false

// 配置每个页面的meta标签
router.beforeEach((to, from, next) => {
	if (to.meta.metaInfo) store.commit("CHANGE_META_INFO", to.meta.metaInfo);
	next();
});

const vm = new Vue({
	router,
	data() {
		return {
			title: "云于天",
			titleTemplate: "%s | 构建商家与消费者共赢的智慧生活圈",
			keywords: "餐饮,管理,智能",
			description: "构建商家与消费者共赢的智慧生活圈",
		};
	},
	metaInfo() {
		return {
			title: this.$store.state.metaInfo.title,
			meta: [
				{
					name: "keywords",
					content: this.$store.state.metaInfo.keywords,
				},
				{
					name: "description",
					content: this.$store.state.metaInfo.description,
				},
			],
		};
	},
	store,
	render: (h) => h(App),
	...App,
}).$mount("#app");

export default vm;