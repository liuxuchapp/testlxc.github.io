import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import config from '@/config'
const title = config.title

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'PageView',
      component: resolve => require(['@/view/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        }, {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/view/HomePage'], resolve),
          meta: {
            title: title + '-首页'
          }
        }, {
          path: '/software',
          name: 'software',
          component: resolve => require(['@/view/Software'], resolve),
          meta: {
            title: title + '-软件产品'
          },
          children: [
            {
              path: '/software',
              redirect: '/software/smartTown'
            },
            {
              path: '/software/smartTown',
              name: 'software',
              component: resolve => require(['@/view/Software_smartTown'], resolve),
              meta: {
                title: '软件产品丨Tessai资管后台'
              }
            },
            {
              path: '/software/bigData',
              name: 'software',
              component: resolve => require(['@/view/Software_bigData'], resolve),
              meta: {
                title: '软件产品丨Tessai资管客户端'
              }
            }
          ]
        }, {
          path: '/service',
          name: 'service',
          component: resolve => require(['@/view/Service'], resolve),
          meta: {
            title: title + '-相关服务'
          }
        }, {
          path: '/newsinformation',
          name: 'newsinformation',
          component: resolve => require(['@/view/NewsInformation'], resolve),
          meta: {
            title: title + '-新闻动态'
          }
        }, {
          path: '/newsinformationdetail',
          name: 'newsinformationdetail',
          component: resolve => require(['@/view/NewsInformationDetail'], resolve),
          meta: {
            title: title + '-新闻详情'
          }
        }, {
          path: '/companyintroduction',
          name: 'companyintroduction',
          component: resolve => require(['@/view/CompanyIntroduction'], resolve),
          meta: {
            title: title + '-公司介绍'
          }
        }, {
          path: '/jobchance',
          name: 'jobchance',
          component: resolve => require(['@/view/JobChance'], resolve),
          meta: {
            title: title + '-工作机会'
          }
        }, {
          path: '/contactus',
          name: 'contactus',
          component: resolve => require(['@/view/ContactUs'], resolve),
          meta: {
            title: title + '-联系我们'
          }
        },
        {
          path: '/servicedetail',
          name: 'servicedetail',
          component: resolve => require(['@/view/ServiceDetail'],resolve),
          meta: {
            title: title + '-相关服务'
          }
        }
      ]
    }
  ]
})
