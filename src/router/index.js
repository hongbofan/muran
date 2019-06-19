import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 路由懒加载
const Home = (resolve) => {
    import('@/pages/Home/index').then((module) => {
        resolve(module)
    })
}
const School = (resolve) => {
    import('@/pages/schools/index').then((module) => {
        resolve(module)
    })
}
const Teacher = (resolve) => {
    import('@/pages/teachers/index').then((module) => {
        resolve(module)
    })
}
const Course = (resolve) => {
    import('@/pages/courses/index').then((module) => {
        resolve(module)
    })
}
const router=new Router({
    mode:'hash',
    routes:[{
        path: '/',
        name: 'Home',
        component:Home,
        meta: {
        keepAlive: true
        }
    },{
        path: '/teachers',
        name: 'teachers',
        component:Teacher,
        meta: {
            keepAlive: true
        }
    },{
        path: '/schools',
        name: 'schools',
        component:School,
        meta: {
            keepAlive: true
        }
    },{
        path: '/courses',
        name: 'courses',
        component:Course,
        meta: {
            keepAlive: true
        }
    },
    ]
})

export default router