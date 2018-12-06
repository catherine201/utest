import asyncComponent from '../../components/asyncComponent';

const Children1 = asyncComponent(() => import('./component/children1'));
const Children2 = asyncComponent(() => import('./component/children2'));
const Children3 = asyncComponent(() => import('./component/children3'));

const routes = [
  {
    path: '/home/children1',
    component: Children1,
    auth: true
  },
  {
    path: '/home/children2',
    component: Children2,
    auth: true
  },
  {
    path: '/home/children3',
    component: Children3,
    auth: true
  }
];

export default routes;
