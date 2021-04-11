module.exports = {
  title: 'My Space',
  description: 'stay hungry stay foolish',
  sidebar: 'auto',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文章收藏', link: '/fe/collect/' },
      {
        text: '前端知识',
        items: [
          { text: 'React', link: '/fe/react/' },
          { text: 'Node.js', link: '/fe/node/' },
          { text: 'css', link: '/fe/css/' },
          { text: '前端安全', link: '/fe/safe/' },
          { text: '前端工具', link: '/fe/tool/' },
          { text: '其他知识', link: '/fe/knowledge/' },
        ]
      },
      { text: '博客', link: '/blog/' },
      { text: 'My GitHub', link: 'https://github.com/TYRMars' },
    ]
  }
}