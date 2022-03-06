require('./bootstrap');

// vue
import Vue from 'vue';
import VueRouter from 'vue-router';

// other js
import jquery from 'jquery';

// views
import Home from './views/Home';
import TagList from './views/TagList';
// import Trash from './views/Trash';

// components
import Head from './components/Head';

// regist components
Vue.component('main-head', Head);

window.$ = jquery;
window.Vue = Vue;
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/lv-todolist/public/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/lv-todolist/public/tag_list',
            name: 'tag_list',
            component: TagList,
        },
        // {
        //     path: '/lv-todolist/public/trash',
        //     name: 'trash',
        //     component: Trash,
        // },
    ],
});

const app = new Vue({
    el: '#app',
    router,
});