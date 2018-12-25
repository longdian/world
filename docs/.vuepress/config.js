module.exports = {
    title: 'never',
    description: '让我们一起构造宏伟蓝图',
    head: [
        ['link', { rel: 'icon', href: 'image/favicon.ico', title: 'ss'}],
        // 增加一个自定义的 favicon(网页标签的图标)
    ],
    markdowm: {
        lineNumber: true // 代码显示行号
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/'},
            { text: 'Guid', link: '/guide/'}
        ],
        sidebarDepth: 2, //e'b将同时提取markdown种h2 和 h3标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', //文档更新时间：每个文件Git最后提交的时间。
        sidebar: {
            '/guide/': genSidebarConfig('前端指南')
        }
    }
}

function genSidebarConfig (title) {
    return [
      {
        title,
        collapsable: false,
        children: [
          '',
          'js',
          'asp',
          'linux',
          'es6',
          'https'
        ]
      }
    ]
  }
  