import {createRouter, createWebHashHistory} from 'vue-router';
import {isLoginedUser} from "@/utils/token.js";
import {showMessage} from "@/utils/message.js";

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/main/MainView.vue')
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () => import('../views/admin/Admin.vue'),
        children: [
            {
                path: '/admin',
                name: 'AdminIndex',
                component: () => import('../views/admin/index/AdminIndex.vue'),
            },
            {
                path: '/admin/alumnus',
                name: 'AdminAlumnus',
                component: () => import('../views/admin/alumnus/Alumnus.vue'),
            },
            {
                path: '/admin/alumnus/add',
                name: 'AdminAlumnusAdd',
                component: () => import('../views/admin/alumnus/AlumnusAdd.vue'),
            },
            {
                path: '/admin/user/profile',
                name: 'AdminUserProfile',
                component: () => import('../views/admin/settings/Profile.vue'),
            },
            {
                path: '/admin/user/change-avatar',
                name: 'AdminUserChangeAvatar',
                component: () => import('../views/admin/settings/ChangeAvatar.vue'),
            },
            {
                path: '/admin/user/change-password',
                name: 'AdminUserChangePassword',
                component: () => import('../views/admin/settings/ChangePassword.vue'),
            },
            {
                path: '/admin/users/list',
                name: 'AdminUsersList',
                component: () => import('../views/admin/users/Users.vue'),
            },
            {
                path: '/admin/roles/list',
                name: 'AdminRolesList',
                component: () => import('../views/admin/users/Roles.vue'),
            },
            {
                path: '/admin/users/add',
                name: 'AdminUsersAdd',
                component: () => import('../views/admin/users/UserAdd.vue'),
            },
        ]
    },
    {
        path: '/auth/login',
        name: 'AuthLogin',
        component: () => import('../views/auth/Login.vue'),
    },
    {
        path: '/forbidden',
        name: 'Forbidden',
        component: () => import('../views/error/403.vue'),
    },
    {
        path: '/error',
        name: 'serverError',
        component: () => import('../views/error/500.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: () => import('../views/error/404.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});


// 路由拦截器
router.beforeEach((to, from, next) => {
    if (to.path.startsWith('/admin')) {
        if (isLoginedUser()) {
            next()
        }else {
            next('/auth/login')
        }
    }else {
        next()
    }
})


// router.beforeEach((to, from, next) => {
//     // 如果用户已经登录
//     if (isLoginedUser()) {
//         // 如果用户访问登录页面
//         if (to.path === '/auth/login') {
//             showMessage('warning', '您已经处于登陆状态')
//             // 跳转到首页
//             next('/')
//         } else {
//             // 否则放行
//             next()
//         }
//     } else {
//         if (to.path === '/auth/login') {
//             next()
//         } else {
//             next('/auth/login')
//         }
//     }
// })


export default router
