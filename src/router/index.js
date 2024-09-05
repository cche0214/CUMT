import Vue from 'vue'
import VueRouter from "vue-router";

import LayOut from '@/views/LayOut.vue'
import ArticleDetail from '@/views/ArticleDetail.vue';
import WebHome from '@/views/WebHome.vue';
import WebView from '@/views/WebView.vue';
import WebStory from '@/views/WebStory.vue';
import WebNew from '@/views/WebNew.vue';
import WebExperience from '@/views/WebExperience.vue';
import WebMessage from '@/views/WebMessage.vue';
import WebAbout from '@/views/WebAbout.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path:'/',component:LayOut,redirect:'/home',
      children:[
        {path:'/home',component:WebHome},
        {path:'/view',component:WebView},
        {path:'/story',component:WebStory},
        {path:'/new',component:WebNew},
        {path:'/experience',component:WebExperience},
        {path:'/about',component:WebAbout},
        {path:'/message',component:WebMessage}
      ]
    },
    {path:'/detail',component:ArticleDetail},
  ]
});

export default router