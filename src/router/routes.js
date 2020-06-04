import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/:username/live',
        name: 'Live',
        component: Home,
        props: true
    },
    {
        path: '/*',
        redirect: {
            name: 'Home'
        }
    }
]

export default routes