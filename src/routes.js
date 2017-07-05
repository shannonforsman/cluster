import Home from './components/home/Home.vue';
import NewClimb from './components/climbs/NewClimb.vue';
import ClimbInfo from './components/climbs/ClimbInfo.vue';

export const routes = [
  { path: '/', redirect: '/climbs'},
  { path: '/climbs', component: Home },
  { path: '/climbs/new', component: NewClimb },
  { path: '/climbs/:id', component: ClimbInfo }
]
