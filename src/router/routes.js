import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

export default routes