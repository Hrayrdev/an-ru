import {createRouter, createWebHistory} from 'vue-router'
import AnRu from "@/views/an-ru.vue";
import AccountSummary from "@/components/account/account-summary.vue";
import AccountProfile from "@/components/account/account-profile.vue";
import AccountRequestRealtor from "@/components/account/account-request-realtor.vue";
import AccountProfileTablet from "@/components/account/account-profile-tablet.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: AnRu,
        children: [
            {
                path: '/summary',
                name: 'summary',
                component: AccountSummary,
                children: []
            },
            {
                path: '/realtor-request',
                name: 'summary/realtor-request',
                component: AccountRequestRealtor
            },
            {
                path: '/profile',
                name: 'profile',
                component: AccountProfile
            },
        ]
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
