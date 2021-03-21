import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import routes from 'virtual:generated-pages'

export const router = createRouter({
  routes,
  history: createWebHistory(),
})