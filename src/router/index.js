import { createRouter, createWebHistory } from 'vue-router'
import TeamsList from '@/components/teams/TeamsList.vue'
import UsersList from '@/components/users/UsersList.vue'
import TeamMembers from '@/components/teams/TeamMembers.vue'
import NotFound from '@/components/nav/NotFound.vue'
import TeamsFooter from '@/components/teams/TeamsFooter.vue'
import UsersFooter from '@/components/users/UsersFooter.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      // name: 'teams-list',
      // component: TeamsList
      redirect: '/teams'
    },
    {
      path: '/teams',
      name: 'teams',
      // component: TeamsList, /* for single router */
      components: { default: TeamsList, footer: TeamsFooter }, //For Rendering Multiple Routes
      // alias: '/',
      children: [{ path: ':teamId', name: 'team-members', component: TeamMembers, props: true }]
    },
    {
      path: '/users',
      name: 'users-list',
      // component: UsersList
      components: {
        default: UsersList,
        footer: UsersFooter
      }
    },

    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active'
})

export default router
