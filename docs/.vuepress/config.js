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
          { text: 'JavaScript', link: '/fe/javascript/' },
          { text: 'CSS', link: '/fe/css/' },
          { text: 'React', link: '/fe/react/' },
          { text: 'TypeScript', link: '/fe/ts/' },
          { text: 'Node.js', link: '/fe/node/' },
          { text: '安全', link: '/fe/safe/' }, 
          { text: '基础建设', link: '/fe/tool/' },
          { text: '性能优化', link: '/fe/performance/' },
          { text: '状态管理', link: '/fe/rxjs/' },
          { text: '图形学', link: '/fe/draw/'},
          { text: '数据结构', link: '/fe/data/' },
          { text: '探索学习', link: '/fe/knowledge/' },
        ]
      },
      { text: '博客', link: '/blog/' },
      { text: 'My GitHub', link: 'https://github.com/TYRMars' },
    ]
  }
}