---
home: true
heroImage: /image/hero.png
actionText: Get Started →
actionLink: /guide/
footer: MIT Licensed | Copyright © 2018-present Evan You
---

<div class="features">
  <div class="feature">
    <h2>简单</h2>
    <p>以标记为中心的项目结构的最小设置有助于您专注于写作。</p>
  </div>
  <div class="feature">
    <h2>Vue-Powered</h2>
    <p>享受Vue + webpack的开发体验，在markdown中使用Vue组件，并使用Vue开发自定义主题。</p>
  </div>
  <div class="feature">
    <h2>高性能</h2>
    <p>VuePress为每个页面生成预渲染的静态HTML，并在加载页面后作为SPA运行。</p>
  </div>
</div>

### 简单步骤

``` bash
# install 安装依赖
yarn global add vuepress # OR npm install -g vuepress

# create a markdown file  创建一个md文件
echo '# Hello VuePress' > README.md

# start writing 启动
vuepress dev
 
# build to static files  打包
vuepress build
```

::: warning COMPATIBILITY NOTE
VuePress requires Node.js >= 8.
:::
