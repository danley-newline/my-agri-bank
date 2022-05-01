import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from '../views/HomePage.vue'
import ArticlePage from '../views/ArticlesPage.vue'
Vue.use(VueRouter);

const routes = [
    {path:'/', component:HomePage, name:'home-page'},
    {path:'/agribank-home', component:ArticlePage, name:'article-page'},
    
];

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
