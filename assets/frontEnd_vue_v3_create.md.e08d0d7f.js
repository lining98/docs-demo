import{_ as s,o as a,c as e,e as n}from"./app.1ae88e30.js";const l="/docs/assets/name.73949f73.png",t="/docs/assets/framework.17bc7a31.png",p="/docs/assets/variant.5238608d.png",i="/docs/assets/run.21a668eb.png",r="/docs/assets/mljg.284b4ed8.png",f=JSON.parse('{"title":"创建Vue3项目","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. 使用vue-cli创建","slug":"_1-使用vue-cli创建","link":"#_1-使用vue-cli创建","children":[]},{"level":2,"title":"2. 使用vite创建(推荐)","slug":"_2-使用vite创建-推荐","link":"#_2-使用vite创建-推荐","children":[]}],"relativePath":"frontEnd/vue/v3/create.md","lastUpdated":1678932158000}'),o={name:"frontEnd/vue/v3/create.md"},c=n(`<h1 id="创建vue3项目" tabindex="-1">创建Vue3项目 <a class="header-anchor" href="#创建vue3项目" aria-hidden="true">#</a></h1><h2 id="_1-使用vue-cli创建" tabindex="-1">1. 使用vue-cli创建 <a class="header-anchor" href="#_1-使用vue-cli创建" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">## 安装或者升级</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@vue/cli</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 保证 vue cli 版本在 4.5.0 以上</span></span>
<span class="line"><span style="color:#FFCB6B;">vue</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 创建项目</span></span>
<span class="line"><span style="color:#FFCB6B;">vue</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">my-project</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>然后的步骤</p><ul><li>Please pick a preset - 选择 Manually select features</li><li>Check the features needed for your project - 选择上 TypeScript ，特别注意点空格是选择，点回车是下一步</li><li>Choose a version of Vue.js that you want to start the project with - 选择 3.x (Preview)</li><li>Use class-style component syntax - 直接回车</li><li>Use Babel alongside TypeScript - 直接回车</li><li>Pick a linter / formatter config - 直接回车</li><li>Use history mode for router? - 直接回车</li><li>Pick a linter / formatter config - 直接回车</li><li>Pick additional lint features - 直接回车</li><li>Where do you prefer placing config for Babel, ESLint, etc.? - 直接回车</li><li>Save this as a preset for future projects? - 直接回车</li></ul><h2 id="_2-使用vite创建-推荐" tabindex="-1">2. 使用vite创建(推荐) <a class="header-anchor" href="#_2-使用vite创建-推荐" aria-hidden="true">#</a></h2><p>vite的优势</p><ul><li>冷服务 默认的构建目标浏览器是能 在 script 标签上支持原生 ESM 和 原生 ESM 动态导入</li><li>HMR 速度快到惊人的 模块热更新（HMR）</li><li>Rollup打包 它使用 Rollup 打包你的代码，并且它是预配置的 并且支持大部分rollup插件</li></ul><p>使用vite初始化一个项目</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># npm</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vite@latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># yarn</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vite</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>这两种使用vite创建vue3项目的步骤一样</p><p>(1).运行命令 输入项目名称 <img src="`+l+'" alt="img"></p><p>(2). 构建的项目模板 <img src="'+t+'" alt="img"></p><p>(3).选择语言 <img src="'+p+'" alt="img"></p><p>(4).切换目录，安装包，运行项目 <img src="'+i+'" alt="img"></p><p>(5).项目的目录结构 <img src="'+r+'" alt="img"></p>',16),d=[c];function u(m,y,h,v,_,b){return a(),e("div",null,d)}const g=s(o,[["render",u]]);export{f as __pageData,g as default};
