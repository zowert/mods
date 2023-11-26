import { createRouter, createWebHistory } from 'vue-router';
import GunPack from './pages/GunPack.vue';
import Revolver from './pages/Revolver.vue';
import Carabin from './pages/Carabin.vue';
import AllRedux from './pages/AllRedux.vue'
import SwarowskiRedux from './pages/Reduxes/SwarowskiRedux.vue'
import SwarowskiBang from './pages/Reduxes/SwarowskiBang.vue'
import swarowskivol2 from './pages/Reduxes/SwarowskiVol2.vue'
import Swarowski002 from './pages/Reduxes/Swarowski002.vue'
import Swarowski004 from './pages/Reduxes/Swarowski004.vue'
import HateFearless from './pages/Reduxes/HateFearless.vue'
import HateModsAurora from './pages/Reduxes/HateModsAurora.vue'
import HateLiberty from './pages/Reduxes/HateLiberty.vue'
import HateBloodstone from './pages/Reduxes/HateBloodstone.vue'
import CanadaRedux from './pages/CanadaRedux.vue'
import CanadaRedux1 from "./pages/Reduxes/CanadaRedux1.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AllRedux,
  },
  {
    path: '/gunpack',
    name: 'Gunpack',
    component: GunPack,
  },
  {
    path: '/all-redux',
    name: 'AllRedux',
    component: AllRedux,
  },
  {
    path: '/redux/swarowskiredux',
    name: 'swarowskiredux',
    component: SwarowskiRedux,
  },
  {
    path: '/redux/swarowskibang',
    name: 'swarowskibang',
    component: SwarowskiBang,
  },
  {
    path: '/redux/swarowski002',
    name: 'swarowski002',
    component: Swarowski002,
  },
  {
    path: '/redux/swarowski004',
    name: 'swarowski004',
    component: Swarowski004,
  },
  {
    path: '/redux/HateFearless',
    name: 'HateFearless',
    component: HateFearless,
  },
  {
    path: '/redux/HateModsAurora',
    name: 'HateModsAurora',
    component: HateModsAurora,
  },
  {
    path: '/redux/HateLiberty',
    name: 'HateLiberty',
    component: HateLiberty,
  },
  {
    path: '/redux/HateBloodstone',
    name: 'HateBloodstone',
    component: HateBloodstone,
  },
  {
    path: '/redux/swarowskivol2',
    name: 'swarowskivol2',
    component: swarowskivol2,
  },
  {
    path: '/revolver',
    name: 'revolver',
    component: Revolver,
  },
  {
    path: '/carabin',
    name: 'carabin',
    component: Carabin,
  },
  {
    path: '/canada-redux',
    name: 'CanadaRedux',
    component: CanadaRedux,
  },
  {
    path: '/redux/canada-redux-1',
    name: 'CanadaRedux1',
    component: CanadaRedux1,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
