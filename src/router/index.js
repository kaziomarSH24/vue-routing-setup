import { createRouter, createWebHistory } from 'vue-router'
import TeamsList from '@/components/teams/TeamsList.vue'
import UsersList from '@/components/users/UsersList.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/teams',
      name: 'teams-list',
      component: TeamsList
    },
    {
      path: '/users',
      name: 'users-list',
      component: UsersList
    }
  ],
  linkActiveClass: 'active'
})

export default router
