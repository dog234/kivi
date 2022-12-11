import{_ as p,M as o,p as c,q as i,R as n,t as s,N as t,a1 as e}from"./framework-7e1a102e.js";const l={},u=e('<div class="custom-container tip"><p class="custom-container-title">开发入门</p><p>为了提高整体素质，以及使更多人能够学会<strong>开发自己想要的插件</strong>，这个栏目将以<strong>最最新手的标准</strong>教会你自定义自己的插件！</p></div><p>入门教程采取<a href="#">案例+分析</a>的教学模式，<strong>在实践中学习，快速成长。</strong></p><h2 id="前置知识" tabindex="-1"><a class="header-anchor" href="#前置知识" aria-hidden="true">#</a> 前置知识</h2><p>要想学习好编写插件，<strong>第一步</strong>应有</p><ul><li>基础的Javascript知识</li><li>理解npm模块并学会使用</li></ul><p><strong>⚠️注意</strong>：前置知识很重要！不牢固将影响插件的开发！</p><blockquote><p>接下来，将对前置知识进行&lt;透析&gt;</p></blockquote><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> Javascript</h3><hr><p>想必你已经知道，<a href="#">kivibot框架</a>基于<a href="#">node.js</a>，那node.js与js(Javascript)有什么区别呢？</p><ul><li>第一，node.js是平台，js是编程语言</li><li>第二，js只在浏览器运行，而node.js为js提供服务器平台，从而脱离浏览器。</li></ul><p><strong>了解区别后，我们接下来学习javascript这门编程语言：</strong><br></p>',12),r=n("strong",null,"基础开发",-1),d=n("strong",null,"下列教程",-1),k=n("br",null,null,-1),v={href:"https://zh.javascript.info/",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),g={href:"https://www.bilibili.com/video/BV1ux411d75J?p=1",target:"_blank",rel:"noopener noreferrer"},b=n("blockquote",null,[n("p",null,[s("并且你只需要了解：数据类型，变量，常量和函数(+箭头函数)的定义，if,while,switch等函数的使用，数组，对象的属性方法等，剩下的"),n("code",null,"必应/谷歌"),s("搜索即可。如果你不懂某些语法，可以查找英文意思。")])],-1),h=n("strong",null,"深入开发",-1),_={href:"https://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"},f=e('<blockquote><p>ES 指的是 ECMAScript，JavaScript 的语言标准。TypeScript 是 JavaScript 的一个超集，支持 ECMAScript 6 标准。</p></blockquote><p>请确保你掌握JavaScript基础知识后，再继续观看接下来的内容。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//巩固对象知识</span>\n<span class="token comment">//JavaScript 中的所有事物都是对象：字符串、数值、数组、函数...</span>\n<span class="token comment">//对象拥有`属性`和`方法`,访问对象需要用到`.`，下面演示String对象:</span>\n<span class="token keyword">var</span> a<span class="token operator">=</span><span class="token string">&#39;Hello Kivibot!&#39;</span>\n<span class="token comment">//那么a.length == 15，length即为a的属性</span>\n<span class="token comment">//那么a.slice(1) == &#39;ello Kivibot!&#39;，slice()即为a的方法/函数</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="npm-模块" tabindex="-1"><a class="header-anchor" href="#npm-模块" aria-hidden="true">#</a> npm 模块</h3><hr><p><a href="#npm%E6%A8%A1%E5%9D%97">npm（“Node 包管理器”）</a>是 JavaScript 运行时 Node.js 的默认<strong>程序包(模块)管理器</strong>。 <br>你可以把npm理解为一个存储很多模块(软件包)的仓库。</p>',6),x=n("p",null,[n("strong",null,"npm组成"),s("：")],-1),j={href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},y=n("li",null,"注册表（巨大的数据库）",-1),w=n("li",null,"命令行工具/终端",-1),q=n("p",null,[s("npm模块的实质是将代码"),n("code",null,"模块化"),s("，使用模块可以"),n("strong",null,"简化你的操作，直接实现某些功能。")],-1),A={href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},S=n("strong",null,"命令行工具/终端",-1),P=e(`<div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>npm i -D 吃饭
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>这里的<code>npm</code>是必须要带的，因为你使用的是npm管理器。</li><li><code>i</code>是install的缩写，意为安装。</li><li><code>-D</code>是指本地安装(默认，你也可以不输入)，<code>-g</code>是全局安装，正如你安装kivibot框架(模块)，其中的命令就包含了-g。</li></ul><p>输入后，npm模块会被安装在当前目录下的<code>node_modules</code>目录下，如Kivibot框架下就有该目录，里面有内置的模块，例如<code>oicq</code>,<code>axios</code>等。</p><p>最后就需要在js文件里引入(require)了,它通常放在文件的开头:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> eat <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;吃饭&quot;</span><span class="token punctuation">)</span>
<span class="token comment">//这只是CommonJS规范的引入方式,其他的可自行搜索</span>
<span class="token comment">//接下来便可以通过eat，来访问方法。</span>
eat<span class="token punctuation">.</span><span class="token function">do</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api-接口" tabindex="-1"><a class="header-anchor" href="#api-接口" aria-hidden="true">#</a> API(接口)</h3><hr><p><a href="#api%E6%8E%A5%E5%8F%A3">API</a>（Application Programming Interface, 应用程序编程接口）是一些<strong>预先定义</strong>的<code>函数</code>。</p><blockquote><p>例如你<strong>想要给</strong>viki送篮球，你必须<strong>先给</strong>小明送篮球，让小明把篮球给小蔡，<strong>最后</strong>小蔡把篮球给viki。而别人已经写好了<strong>连续送篮球</strong>的<code>函数</code>，你只需要调用这个<code>函数</code>，就可以直接把篮球送到viki手里，这就是API(接口)。</p></blockquote><p><strong>Kivibot就有很多的API，以便更快实现某功能：</strong></p>`,10),I={href:"https://beta.kivibot.com/api/plugin.html",target:"_blank",rel:"noopener noreferrer"},J={href:"https://oicqjs.github.io/oicq/",target:"_blank",rel:"noopener noreferrer"},E=n("p",null,[s("这时候解释一下，"),n("strong",null,"Kivibot是依靠Oicq API来编写的框架"),s("，意思是实现框架离不开Oicq，编写插件中同样可以使用Oicq API。"),n("strong",null,"请以官方API为主，Oicq API为辅。")],-1),K=n("h2",{id:"创建插件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#创建插件","aria-hidden":"true"},"#"),s(" 创建插件")],-1),N=n("br",null,null,-1),O={href:"https://beta.kivibot.com/intro.html",target:"_blank",rel:"noopener noreferrer"},C=e(`<h3 id="插件模版" tabindex="-1"><a class="header-anchor" href="#插件模版" aria-hidden="true">#</a> 插件模版</h3><hr><p>打开你部署框架的文件夹所在<code>终端</code>，输入:</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>kivi create
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),M=n("strong",null,"创建官方提供的(Js)插件模版，",-1),B=n("strong",null,"index.js文件",-1),V=n("br",null,null,-1),D={href:"https://beta.kivibot.com/api/plugin.html",target:"_blank",rel:"noopener noreferrer"},T=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> KiviPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@kivibot/core&#39;</span><span class="token punctuation">)</span><span class="token comment">//必须要引入的模块</span>

<span class="token keyword">const</span> plugin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KiviPlugin</span><span class="token punctuation">(</span><span class="token string">&#39;demo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;0.1.0&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enableGroups</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">123456</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">//生成plugin对象，请默认用plugin命名</span>

plugin<span class="token punctuation">.</span><span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">bot<span class="token punctuation">,</span> admins</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token comment">//(参数)=&gt;{内容} 为箭头函数</span>
<span class="token comment">//插件被启用后，将执行以下函数，插件功能务必写在plugin.onMounted()内</span>
  plugin<span class="token punctuation">.</span><span class="token function">onMessage</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      event<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token comment">//如果接受到消息为hello，回复world。注：这里的event.reply()函数会经常用到！可在接受消息后，在消息来源处直接回复。</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//后面的自行看KiviPlugin API了解</span>
  plugin<span class="token punctuation">.</span><span class="token function">onCmd</span><span class="token punctuation">(</span><span class="token string">&#39;/cmd&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> params<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  plugin<span class="token punctuation">.</span><span class="token function">onCmd</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;cmd1&#39;</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^cmd2</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> params<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&#39;cmd1 or /cmd2/i trigger!&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  plugin<span class="token punctuation">.</span><span class="token function">onAdminCmd</span><span class="token punctuation">(</span><span class="token string">&#39;/adminCmd&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> params<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  plugin<span class="token punctuation">.</span><span class="token function">onMatch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">morning</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span> <span class="token string">&#39;evening&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&#39;you too&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  plugin<span class="token punctuation">.</span><span class="token function">cron</span><span class="token punctuation">(</span><span class="token string">&#39;0,10,20,30,40,50 * * * * *&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">bot</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    bot<span class="token punctuation">.</span><span class="token function">sendPrivateMsg</span><span class="token punctuation">(</span>plugin<span class="token punctuation">.</span>mainAdmin<span class="token punctuation">,</span> <span class="token string">&#39;cron task trigger!&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  plugin<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;message.private&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&#39;Hi, I am KiviBot.&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">//接收私人消息(message.private)，也可以接受群组消息(message.group),更多可在API文档找到。</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> plugin <span class="token punctuation">}</span>
<span class="token comment">//导出plugin对象，请一定要导出！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="判断首字符" tabindex="-1"><a class="header-anchor" href="#判断首字符" aria-hidden="true">#</a> <em>判断首字符</em></h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>raw_message<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;点歌&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//执行代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发送图文" tabindex="-1"><a class="header-anchor" href="#发送图文" aria-hidden="true">#</a> <em>发送图文</em></h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span><span class="token punctuation">{</span>segment<span class="token punctuation">}</span><span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;oicq&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> img <span class="token operator">=</span>segment<span class="token punctuation">.</span><span class="token function">image</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> msg <span class="token operator">=</span><span class="token string">&#39;xxx&#39;</span>
event<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token punctuation">[</span>img<span class="token punctuation">,</span>msg<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function H(L,z){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,n("ul",null,[n("li",null,[s("如果你只是"),r,s("，你可以选择"),d,s(":"),k,n("a",v,[s("现代JavaScript教程"),t(a)]),s("（推荐） "),m,s("或"),n("a",g,[s("bilibili黑马程序员"),t(a)]),s("（视频）")])]),b,n("ul",null,[n("li",null,[h,s(":你可以学习"),n("a",_,[s("ES6入门教程"),t(a)]),s("，ES7，ES8，以及TypeScript编写插件。")])]),f,n("blockquote",null,[x,n("ul",null,[n("li",null,[n("a",j,[s("npm官网"),t(a)]),s("（发布和搜索模块的网站）")]),y,w])]),q,n("p",null,[s("例如我开发了一个“吃饭”模块并上传到了"),n("a",A,[s("npm官网"),t(a)]),s(",你若想要使用模块，需要用"),S,s(" 输入:")]),P,n("ul",null,[n("li",null,[n("a",I,[s("KiviPlugin API"),t(a)])]),n("li",null,[n("a",J,[s("Oicq API"),t(a)])])]),E,K,n("p",null,[s("接下来将带领你创建你的第一个插件，"),N,s(" 请"),n("strong",null,[s("确保已经安装好"),n("a",O,[s("Kivibot框架"),t(a)]),s("。")])]),C,n("p",null,[M,s(" 会在plugins > demo下生成"),B,s("，"),V,n("strong",null,[s("请先观看"),n("a",D,[s("Kivibot API"),t(a)]),s("再继续以下内容：（附有注释）")])]),T])}const G=p(l,[["render",H],["__file","index.html.vue"]]);export{G as default};
