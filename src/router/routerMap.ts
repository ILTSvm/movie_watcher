import { lazy } from 'react';
import withSuspense from './withSuspense/withSuspense';

const Home = withSuspense(lazy(() => import('../pages/Home')),()=>{return});
const Login = withSuspense(lazy(() => import('../pages/Login')),()=>{return});
const Movie = withSuspense(lazy(() => import('../pages/Movie')),()=>{return});



export default [
  {
    component: Home,
    exact: true,
    path: '/',
  },
  {
    component: Login,
    path: '/login',
  },
  {
    component: Movie,
    path: '/movie',
  },
];