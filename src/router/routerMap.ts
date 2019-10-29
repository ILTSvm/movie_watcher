import { lazy } from 'react';
import withSuspense from './withSuspense/withSuspense';

const Home = withSuspense(lazy(() => import('../pages/Home')),()=>{return});
const Login = withSuspense(lazy(() => import('../pages/Login')),()=>{return});



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