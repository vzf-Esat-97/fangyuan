import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Register from '@/components/Register'
import FirstPage from '@/components/FirstPage/FirstPage'
import FirstPage1 from '@/components/FirstPage/FirstPage1'
import FirstPage2 from '@/components/FirstPage/FirstPage2'
import FirstPage3 from '@/components/FirstPage/FirstPage3'
import FirstPage4 from '@/components/FirstPage/FirstPage4'
import TwoPage from '@/components/FirstPage/TwoPage/TwoPage'
import GrandsonPage from '@/components/FirstPage/TwoPage/OthersPages/GrandsonPage'

Vue.use(Router)
Router.prototype.goBack = function () {
    this.isBack = true
    window.history.go(-1)
}
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Register',
            component: Register,
        },
        {
            path: '/HomePage',
            name: 'HomePage',
            component: HomePage,
            children: [
                {
                    path: '/',
                    name: 'FirstPage4',
                    component: FirstPage4,
                    children: [
                        {
                            path: '/',
                            name: 'TwoPage',
                            component: TwoPage,
                            children: [
                                {
                                    path: '/',
                                    name: 'GrandsonPage',
                                    component: GrandsonPage
                                }
                            ]
                        }
                    ]
                },
                {
                    path: '/FirstPage1',
                    name: 'FirstPage1',
                    component: FirstPage1,
                },
                {
                    path: '/FirstPage2',
                    name: 'FirstPage2',
                    component: FirstPage2,
                },
                {
                    path: '/FirstPage3',
                    name: 'FirstPage3',
                    component: FirstPage3,
                }
            ]
        }
    ]
})
