# vue-ghpages-blog
基于[vue-ghpages-blog](https://github.com/viko16/vue-ghpages-blog)进行一定的个性化改变

[![GitHub release][github-release-image]][github-release-url]
[![JavaScript Style Guide][standardjs-image]][standardjs-url]
[![Travis][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]

✏️ A blog based on GitHub Pages built with Vue.js 2 + webpack 3.

一个依赖 GitHub Pages，无需本地生成的静态博客，使用了 Vue.js 2 组件开发，webpack 3 打包。


## Features

- Vue 2 / Vue-router / axios
- webpack 3 / Babel 6 / Stylus
- using [TravisCI](https://travis-ci.org)
- Hosting on GitHub Pages
- SessionStorage cache


**Note:** `src/config.js` points the configurations of my personal blog. **If you fork this repository, modify it first.**  😳

```bash
# Install dependencies
npm install
# Develop with hot reload
npm run dev
# Lint and Test
npm test
```

## About My Workflow
- All the posts are stored in [viko16/writings](https://github.com/viko16/writings), while [`src/config.js`](src/config.js) points it.
- When I push the code to `develop` branch, [TravisCI](.travis.yml) will deploy `gh-pages` automatically.

## License

MIT © [viko16](https://github.com/viko16)
[gitter-image]: https://badges.gitter.im/viko16/vue-ghpages-blog.svg
[gitter-url]: https://gitter.im/viko16/vue-ghpages-blog?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[github-release-image]: https://img.shields.io/github/release/viko16/vue-ghpages-blog.svg?style=flat
[github-release-url]: https://github.com/viko16/vue-ghpages-blog/releases/latest
[standardjs-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standardjs-url]: http://standardjs.com/
[travis-image]: https://img.shields.io/travis/viko16/vue-ghpages-blog/develop.svg
[travis-url]: https://travis-ci.org/viko16/vue-ghpages-blog
[daviddm-image]: https://david-dm.org/viko16/vue-ghpages-blog.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/viko16/vue-ghpages-blog