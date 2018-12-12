const path = require('path');

module.exports = {
  theme: './theme/index.js',
  title: 'TITLE',
  description: 'logo_description',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/blog/'
      },
      {
        text: '项目',
        link: '/project/',
      },
      {
        text: '关于我',
        link: '/about/'
      }
    ]
  },
  base: '/blog/',
  dest: path.join(__filename, '../../../../blog'),
  // plugins: [
  //   ['@vuepress/blog', { postsDir: path.join(__filename, '../../posts')}]
  // ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment');
          moment.locale(lang);
          return moment(timestamp).fromNow();
        }
      }
    ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        
      }
    }
  }
}