// server入口: 只需返回 App.vue 的实例
import Vue from 'vue'
import App from './App.vue'

export default function createApp () {
  const app = new Vue({
    render: h => h(App)
  })
  return app
}
