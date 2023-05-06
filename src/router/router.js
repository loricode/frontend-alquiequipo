import * as VueRouter from 'vue-router';

import Login from '../components/seguridad/login/Login.vue';
import Home from '../components/home/Home.vue';
import Dashboard from '../components/dashboard/Dashboard.vue';
import ConsultaEquipos from '../components/equipos/ConsultaEquipos.vue';
import MantEquipos from '../components/equipos/MantEquipos.vue';

const routes = [
  { path: '/', component: Login },
  { path:'/home', component: Home },
  { path: '/dashboard', component: Dashboard,
    children:[{
    path: 'consulta',
    component: ConsultaEquipos
  },
  {
    path: 'gestion',
    component: MantEquipos
  }] }
]

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router;
