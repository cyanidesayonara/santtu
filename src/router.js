import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

import BlogEntries from './blogs/index.json';

const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`./blogs/${section}/${child.id}.md`)
  }))
  return {
    path: `/blog/${section}`,
    name: section,
    component: () => import('./views/Blog.vue'),
    children
  }
})

const routes = [
  {
    path: "/",
    name: "index",
    component: () =>
      import(/* webpackChunkName: "portfolio-en" */ "./views/PortfolioEn.vue"),
    meta: {
      title: "Portfolio in English",
    },
  },
  {
    path: "/en",
    name: "portfolio-en",
    component: () =>
    import(/* webpackChunkName: "portfolio-en" */ "./views/PortfolioEn.vue"),
    meta: {
      title: "Portfolio in English",
    },
  },
  {
    path: "/fi",
    name: "portfolio-fi",
    component: () =>
      import(/* webpackChunkName: "portfolio-fi" */ "./views/Portfolio.vue"),
    meta: {
      title: "Portfolio suomeksi",
    },
  },
  {
    path: '/blog',
    name: 'home',
    component: Home
  },
  ...blogRoutes
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...routes]
})
