export default {
    router: {
      linkActiveClass: 'active',
      extendRoutes(routes, resolve) {
        //   清空nuxt基于pages默认生成的路由规则数组
        routes.splice(0)
        routes.push(...[
            {
                path: '/',
                component: resolve(__dirname, 'pages/layout'),
                children: [
                    {
                        name: 'home',
                        path: '',
                        component: resolve(__dirname, 'pages/home')
                    },
                    {
                        name: 'login',
                        path: '/login',
                        component: resolve(__dirname, 'pages/login')
                    },
                    {
                        name: 'register',
                        path: '/register',
                        component: resolve(__dirname, 'pages/login')
                    },
                    {
                        name: 'profile',
                        path: '/profile/:username',
                        component: resolve(__dirname, 'pages/profile')
                    },
                    {
                        name: 'settings',
                        path: '/settings',
                        component: resolve(__dirname, 'pages/settings')
                    },
                    {
                        path: '/editor',
                        name: 'editor',
                        component: resolve(__dirname, 'pages/editor')
                      },
                      {
                        path: '/article/:slug',
                        name: 'article',
                        component: resolve(__dirname, 'pages/article')
                      }
                ]
            }
        ])
      }
    },
    plugins: [
        '~/plugins/request.js',
        '~/plugins/dayjs.js',
    ]
  }