import { createRouter, createWebHistory } from 'vue-router'
import TeamsList from '@/components/teams/TeamsList.vue'
import UsersList from '@/components/users/UsersList.vue'
import TeamMembers from '@/components/teams/TeamMembers.vue'
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
    },
    {
      path: '/teams/:teamId',
      component: TeamMembers,
      props: true
    }
  ],
  linkActiveClass: 'active'
})

export default router
