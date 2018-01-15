// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'
import iView from 'iView'
import 'iview/dist/styles/iview.css'
import './theme/demo.css'


Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.use(iView);

const i18n = new VueI18n({
	locale: 'zh-CN',    // 语言标识
	//this.$i18n.locale // 通过切换locale的值来实现语言切换
	messages: {
		'zh-CN': require('./common/lang/zh'),   // 中文语言包
		'en-US': require('./common/lang/en')    // 英文语言包
	}
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
    i18n,
  router,
  template: '<App/>',
  components: { App }
})
