import VueRouter from 'vue-router';

import home from './views/Home';
import employees from './views/Employees';

let routes= [
    {
        path: '/',
        component: home
    },
    {
        path: '/employees',
        component: employees
    },
    {
        path: '/contacts',
        component: require('./views/Contacts').default
    }

];

export default new VueRouter({
    routes,
    linkActiveClass: "is-active"
});

