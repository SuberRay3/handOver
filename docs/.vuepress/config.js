module.exports = {
  title: '雷的交接文档',
  head: [
    ['link', { rel: 'icon', href: '/mylogo.png' }]
  ],
  markdown: {
    lineNumbers: true,
    externalLinks: { 
      target: '_blank', 
      rel: 'noopener noreferrer' 
    }
  },
  themeConfig: {
    lastUpdated: '上次更新',
    nav: [
      { text: '禅道', link: 'http://zentao.infisa.com.cn/zentaopms/www/index.php?m=user&f=login&referer=L3plbnRhb3Btcy93d3cvaW5kZXgucGhw' },
      { text: '工作邮箱', link: 'https://qiye.163.com/login/' },
      { text: 'GitLab', link: 'http://192.168.1.62:9999/users/sign_in' },
      { text: 'JenKins', link: 'http://192.168.1.162:8080' }
    ],
    sidebar: [
      {
        title: '概览',
        path: '/content/'
      },
      {
        title: '慢病 V1.0',
        path: '/content/chronicV1/'
      },
      {
        title: '慢病 V2.0',
        path: '/content/chronicV2/',
        collapsable: false,
        children: [
          {
            title: '慢病 PC 端',
            path: '/content/chronicV2/pc'
          },
          {
            title: '慢病 Mobile 端',
            path: '/content/chronicV2/mobile',
          }
        ]
      },
      {
        title: '肾内科',
        path: '/content/snk/',
        collapsable: false,
        children: [
          {
            title: '出入院登记',
            path: '/content/snk/admission'
          },
          {
            title: '病理平台',
            path: '/content/snk/pathoy',
          }
        ]
      },
      {
        title: '智能诊断',
        path: '/content/iDiag/'
      },
      {
        title: '关于打包',
        path: '/content/package/',
        collapsable: false,
        children: [
          {
            title: 'PC 端打包',
            path: '/content/package/pc'
          },
          {
            title: 'Mobile 端打包',
            path: '/content/package/mobile',
          }
        ]
      }
    ]
  }
}