import PizzaQueue from './components/PizzaQueue';
import Login from './components/Login';

const routes = [
  {
    component: PizzaQueue,
    href: '/',
    redirectTo: '/login',
    // onEnter: (navigateTo, state) => {
    //   if (true) {
    //     navigateTo('/login');
    //   }
    // },
  },
  {
    component: Login,
    href: '/login',
  },
];

export default routes;
