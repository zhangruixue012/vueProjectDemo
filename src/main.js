// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
import router from './router'
import axiosUtil from './utils/axios'
import Vuex from 'vuex'
import iView from 'iView'
import 'iview/dist/styles/iview.css'
import './theme/demo.css'


Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.use(iView);
Vue.use(Vuex);

Vue.prototype.$http = axiosUtil;

const i18n = new VueI18n({
	locale: 'en-US',    // 语言标识
	//this.$i18n.locale // 通过切换locale的值来实现语言切换
	messages: {
		'zh-CN': require('./assets/lang/zh'),   // 中文语言包
		'en-US': require('./assets/lang/en')    // 英文语言包
	}
});


new Vue({
	el: '#app',
	i18n,
	router,
	template: '<App/>',
	components: { App }
});
