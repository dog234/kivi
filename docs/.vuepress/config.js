import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'


export default {
    head: [['link', { rel: 'icon', href: './images/dimo.png' }]],//网站图标
    base:'/',
    title: "插件官网 1.0.0",
    description:'Kivibot插件官网，丰富的插件内容与开发技巧，助力开发者成长！',
    theme: defaultTheme({//设置主题
      logo: '/images/logo.png',
      navbar: [
        // NavbarItem
        {
          text: '开发文档',
          link: 'https://beta.kivibot.com/develop/prerequisite.html',
        },
        // NavbarGroup
        {
          text: '官方Q群',
          link:'https://qm.qq.com/cgi-bin/qm/qr?k=jgfQoTN27sWSkHnoIjSw2hHdi3sdBsC1&jump_from=webapi&authKey=774yOQdROLh8HjFnJNpIiElkZE+p3J37aHXTnaCcrRXBGH0n2rt8INktbU6Cm8Qa'
        },
        // 字符串 - 页面文件路径
        {
          text:"Kivibot",
          link:'https://beta.kivibot.com/intro.html'
        },
      ],
      sidebar: [
        {
          text: '关于网站',
          link: '/',
          active: '/'
        },{
          text: '插件列表',
          link: '/new/',
        },
        {
          text: '开发入门',
          link: '/skill/',
        },
        {
          text: '发布插件',
          link: '/push/',
        },
        {
          text: '框架API',
          link: '/api/',
        },
      ],
    }),
    plugins: [
      searchPlugin({
        locales: {
          '/': {
            placeholder: 'Search',
          },
        },
      }),
    ],
  }
