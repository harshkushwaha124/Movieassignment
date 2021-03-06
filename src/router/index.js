import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import Upcoming from '@/components/Upcoming'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    },

    {
      path: '/Upcoming',
      name: 'Upcoming',
      component: Upcoming
    },
  ]
})
