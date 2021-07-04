module.exports = {
  title: 'My Space',
  description: 'stay hungry stay foolish',
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    sidebar: 'auto',
    nav: [
      { text: '主页', link: '/' },
      { text: '文章收藏', link: '/fe/collect/' },
      {
        text: '前端知识',
        items: [
          { text: 'React', link: '/fe/react/' },
          { text: 'TypeScript', link: '/fe/ts/' },
          { text: 'Node.js', link: '/fe/node/' },
          { text: 'CSS', link: '/fe/css/' },
          { text: '前端安全', link: '/fe/safe/' }, 
          { text: '前端工具', link: '/fe/tool/' },
          { text: '前端性能优化', link: '/fe/performance/' },
          { text: '图形学', link: '/fe/draw/'},
          { text: '数据结构', link: '/fe/data/' },
          { text: 'RxJS', link: '/fe/rxjs/' },
          { text: '其他知识', link: '/fe/knowledge/' },
        ]
      },
      { text: '博客', link: '/blog/' },
      { text: 'My GitHub', link: 'https://github.com/TYRMars' },
    ]
  }
}