import{_ as s,o as n,c as a,e}from"./app.1ae88e30.js";const b=JSON.parse('{"title":"初识TypeScript","description":"","frontmatter":{},"headers":[{"level":2,"title":"TS是什么？","slug":"ts是什么","link":"#ts是什么","children":[]},{"level":2,"title":"TS和JS的关系","slug":"ts和js的关系","link":"#ts和js的关系","children":[]},{"level":2,"title":"TS和JS的区别","slug":"ts和js的区别","link":"#ts和js的区别","children":[]},{"level":2,"title":"TypeScript的优缺点","slug":"typescript的优缺点","link":"#typescript的优缺点","children":[{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]}]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"监视编译和在node下运行typescript","slug":"监视编译和在node下运行typescript","link":"#监视编译和在node下运行typescript","children":[{"level":3,"title":"一、使用tsc -w进行随时热更新watch","slug":"一、使用tsc-w进行随时热更新watch","link":"#一、使用tsc-w进行随时热更新watch","children":[]},{"level":3,"title":"二、使用ts-node直接运行ts的node项目","slug":"二、使用ts-node直接运行ts的node项目","link":"#二、使用ts-node直接运行ts的node项目","children":[]}]}],"relativePath":"frontEnd/TypeScript/index.md","lastUpdated":1678527830000}'),l={name:"frontEnd/TypeScript/index.md"},t=e(`<h1 id="初识typescript" tabindex="-1">初识TypeScript <a class="header-anchor" href="#初识typescript" aria-hidden="true">#</a></h1><blockquote><p><a href="https://www.tslang.cn/docs/home.html" target="_blank" rel="noreferrer">TypeScript中文网</a></p></blockquote><h2 id="ts是什么" tabindex="-1">TS是什么？ <a class="header-anchor" href="#ts是什么" aria-hidden="true">#</a></h2><p><code>TS</code>：是<code>TypeScript</code>的简称，是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。</p><h2 id="ts和js的关系" tabindex="-1">TS和JS的关系 <a class="header-anchor" href="#ts和js的关系" aria-hidden="true">#</a></h2><p>对比于JS，TS是JS的<strong>超集</strong>，简单的说就是在 <strong>JavaScript</strong> 的基础上加入了类型系统，让每个参数都有明确的意义，从而带来了更加<strong>智能</strong>的提示。</p><p>相对于<strong>JS</strong>而言，<strong>TS</strong>属于<strong>强类型</strong>语言，所以对于项目而言，会使代码更加规范，从而解决了大型项目代码的复杂性，其次，浏览器是不识别<strong>TS</strong>的，所以在编译的时候，<strong>TS</strong>文件会先编译为<strong>JS</strong>文件。</p><h2 id="ts和js的区别" tabindex="-1">TS和JS的区别 <a class="header-anchor" href="#ts和js的区别" aria-hidden="true">#</a></h2><ul><li>JavaScript 属于动态编程语言，而ts 属于静态编程语言。 <ul><li>js：边解释边执行，错误只有在运行的时候才能发现</li><li>ts：先编译再执行，在写的时候就会发现错误了（ts不能直接执行，需要先编译成 js ）</li></ul></li><li>ts 完全支持 js ，可以直接转换</li><li>ts 有类型支持，有强大的代码类型提示</li></ul><h2 id="typescript的优缺点" tabindex="-1">TypeScript的优缺点 <a class="header-anchor" href="#typescript的优缺点" aria-hidden="true">#</a></h2><h3 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-hidden="true">#</a></h3><ul><li>增强代码的可维护性，尤其在大型项目的时候效果显著</li><li>友好地在编辑器里提示错误，编译阶段就能检查类型发现大部分错误</li><li>支持最新的JavaScript新特特性</li><li>周边生态繁荣，vue3已全面支持 typescript</li></ul><h3 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-hidden="true">#</a></h3><ul><li>需要一定的学习成本</li><li>和一些插件库的兼容并不是特别完美，如以前在 vue2 项目里使用 typescript就并不是那么顺畅</li><li>增加前期开发的成本，毕竟你需要写更多的代码（但是便于后期的维护）</li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 安装 typescript</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">typescript</span></span>
<span class="line"><span style="color:#FFCB6B;">//或者</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">typescript</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看版本</span></span>
<span class="line"><span style="color:#FFCB6B;">tsc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 编译</span></span>
<span class="line"><span style="color:#FFCB6B;">tsc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.ts</span></span>
<span class="line"><span style="color:#FFCB6B;">indexts</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.js</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>升成tsconfig.json 配置文件</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">tsc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--init</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>严格模式</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 在tsconfig.json中</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">strict</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">false</span><span style="color:#A6ACCD;">,  </span><span style="color:#676E95;font-style:italic;">// true为开启严格模式  false为关闭</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="监视编译和在node下运行typescript" tabindex="-1">监视编译和在node下运行typescript <a class="header-anchor" href="#监视编译和在node下运行typescript" aria-hidden="true">#</a></h2><h3 id="一、使用tsc-w进行随时热更新watch" tabindex="-1">一、使用tsc -w进行随时热更新watch <a class="header-anchor" href="#一、使用tsc-w进行随时热更新watch" aria-hidden="true">#</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">tsc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-w</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="二、使用ts-node直接运行ts的node项目" tabindex="-1">二、使用ts-node直接运行ts的node项目 <a class="header-anchor" href="#二、使用ts-node直接运行ts的node项目" aria-hidden="true">#</a></h3><p>首先全局安装ts-node</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ts-node</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>直接进行ts-node 启动文件名</p>`,27),p=[t];function r(i,o,c,d,h,y){return n(),a("div",null,p)}const C=s(l,[["render",r]]);export{b as __pageData,C as default};
