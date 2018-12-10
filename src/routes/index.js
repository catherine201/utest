import asyncComponent from '../components/asyncComponent';
// import Demo from '../views/demo';

const Home = asyncComponent(() => import('../views/home'));
// const Game = asyncComponent(() => import('../views/game'));
// const Demo = asyncComponent(() => import('../views/demo'));
const Login = asyncComponent(() => import('../views/login'));
const NotFind = asyncComponent(() => import('../views/404'));

const routes = [
  {
    path: '/',
    // exact: true,
    component: Home,
    auth: true
  },
  {
    path: '/home',
    component: Home,
    auth: true
  },
  // {
  //   path: '/game',
  //   component: Game,
  //   auth: true
  // },
  // {
  //   path: '/demo',
  //   component: Demo,
  //   auth: true
  // },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/404',
    component: NotFind
  },
  {
    path: '*',
    component: Home,
    auth: true
  }
];

// const modulesContext = require.context('../views/', true, /route\.js$/);
// modulesContext.keys().forEach(element => {
//   console.log(element);
//   // console.log(modulesContext(element).default);
//   routes.push(...modulesContext(element).default);
// });

// console.log(routes);
export { routes };
