import Vue from 'vue';
import VueRouter from 'vue-router';
import FindingView from '../views/FindingView.vue';
import LoginView from '../views/LoginView.vue';
import MainView from '../views/MainView.vue';
import ScheduleView from '../views/ScheduleView.vue';
import CalendarView from '../views/CalendarView.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
    path: '/',
    redirect: '/findng',
    },
    {
    path : '/main',
    component:MainView,
    },
    {
    path: '/finding',
    component:FindingView,
    },
    {
    path:'/login',
    component:LoginView,
    },
    {
    path:'/schedule',
    component:ScheduleView,
    },
    {
      path: '/calendar',
      component: CalendarView,
    },
    // path: '/news',
     // component: NewsView,
]
})