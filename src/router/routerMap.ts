import { lazy } from 'react';
import withSuspense from './withSuspense/withSuspense';

const Home = withSuspense(lazy(() => import('../pages/Home')));
const Login = withSuspense(lazy(() => import('../pages/Login')));



export default [
  {
    component: Home,
    exact: true,
    path: '/',
  },
  {
    component: Login,
    path: '/login',
  }
];