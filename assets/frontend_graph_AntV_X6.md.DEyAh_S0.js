import{_ as s,c as n,o as a,a4 as p}from"./chunks/framework.K9vKjHgL.js";const b=JSON.parse('{"title":"AntV X6 技术分享","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/graph/AntV_X6.md","filePath":"frontend/graph/AntV_X6.md"}'),e={name:"frontend/graph/AntV_X6.md"},l=p(`<h1 id="antv-x6-技术分享" tabindex="-1">AntV X6 技术分享 <a class="header-anchor" href="#antv-x6-技术分享" aria-label="Permalink to &quot;AntV X6 技术分享&quot;">​</a></h1><h3 id="一、本文目的" tabindex="-1">一、本文目的 <a class="header-anchor" href="#一、本文目的" aria-label="Permalink to &quot;一、本文目的&quot;">​</a></h3><p>对 AntV x6 知识点的一个总结，也为其他开发同学提供一个说明文档。</p><h3 id="二、知识要点" tabindex="-1">二、知识要点 <a class="header-anchor" href="#二、知识要点" aria-label="Permalink to &quot;二、知识要点&quot;">​</a></h3><h4 id="_1、简介" tabindex="-1">1、简介 <a class="header-anchor" href="#_1、简介" aria-label="Permalink to &quot;1、简介&quot;">​</a></h4><p>X6 是 AntV 旗下的图编辑引擎，提供了一系列开箱即用的交互组件和简单易用的节点定制能力，方便我们快速搭建流程图、DAG 图、ER 图等图应用。</p><h4 id="_2、安装" tabindex="-1">2、安装 <a class="header-anchor" href="#_2、安装" aria-label="Permalink to &quot;2、安装&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>npm i @antv/x6 -S</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn add @antv/6</span></span></code></pre></div><h4 id="_3、实例代码" tabindex="-1">3、实例代码 <a class="header-anchor" href="#_3、实例代码" aria-label="Permalink to &quot;3、实例代码&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>import { Graph } from &#39;@antv/x6&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const graph = new Graph({</span></span>
<span class="line"><span>  container: document.getElementById(&#39;container&#39;),</span></span>
<span class="line"><span>  width: 800,</span></span>
<span class="line"><span>  height: 600,</span></span>
<span class="line"><span>});</span></span></code></pre></div><h4 id="_4、画布-graph" tabindex="-1">4、画布 Graph <a class="header-anchor" href="#_4、画布-graph" aria-label="Permalink to &quot;4、画布 Graph&quot;">​</a></h4><p>在 X6 中，Graph 是图的载体，它包含了图上的所有元素（节点、边等），同时挂载了图的相关操作（如交互监听、元素操作、渲染等）。</p><h5 id="a-常用的方法" tabindex="-1">a. 常用的方法： <a class="header-anchor" href="#a-常用的方法" aria-label="Permalink to &quot;a. 常用的方法：&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>graph.dispose() // 销毁画布</span></span>
<span class="line"><span>graph.centerContent() //内容居中,画布内容中心与视口中心对齐</span></span>
<span class="line"><span>graph.zoom() // 获取缩放级别</span></span>
<span class="line"><span>graph.zoom(0.2) // 在原来缩放级别上增加 0.2</span></span>
<span class="line"><span>graph.zoom(-0.2) // 在原来缩放级别上减少 0.2</span></span>
<span class="line"><span>graph.getCells() // 返回画布中所有节点和边</span></span>
<span class="line"><span>graph.getNodes() // 返回画布中所有节点</span></span>
<span class="line"><span>graph.getEdges() // 返回画布中所有边</span></span>
<span class="line"><span>graph.toJSON() // 导出图中的节点和边</span></span>
<span class="line"><span>graph.fromJSON() // 反序列化 按照指定的 JSON 数据渲染节点和边。</span></span>
<span class="line"><span>graph.clearCells() // 清空画布</span></span>
<span class="line"><span>graph.resetCells() // 清空画布并添加用指定的节点/边</span></span>
<span class="line"><span>graph.getCellById() 根据节点/边的 ID 获取节点/边。</span></span></code></pre></div><h5 id="b-画布反序列化" tabindex="-1">b. 画布反序列化 <a class="header-anchor" href="#b-画布反序列化" aria-label="Permalink to &quot;b. 画布反序列化&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>const data = {</span></span>
<span class="line"><span>  // 节点</span></span>
<span class="line"><span>  nodes: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      id: &#39;node1&#39;,</span></span>
<span class="line"><span>      x: 40,</span></span>
<span class="line"><span>      y: 40,</span></span>
<span class="line"><span>      width: 80,</span></span>
<span class="line"><span>      height: 40,</span></span>
<span class="line"><span>      label: &#39;Hello&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      id: &#39;node2&#39;,</span></span>
<span class="line"><span>      x: 160,</span></span>
<span class="line"><span>      y: 180,</span></span>
<span class="line"><span>      width: 80,</span></span>
<span class="line"><span>      height: 40,</span></span>
<span class="line"><span>      label: &#39;World&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  // 边</span></span>
<span class="line"><span>  edges: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      source: &#39;node1&#39;,</span></span>
<span class="line"><span>      target: &#39;node2&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  graph.fromJSON(data)</span></span></code></pre></div><h4 id="_5、节点-node" tabindex="-1">5、节点 Node <a class="header-anchor" href="#_5、节点-node" aria-label="Permalink to &quot;5、节点 Node&quot;">​</a></h4><p>Node 是所有节点的基类，继承自 <a href="https://x6.antv.vision/zh/docs/api/model/cell" target="_blank" rel="noreferrer">Cell</a>，并定义了节点的通用属性和方法。</p><h5 id="a-常用方法" tabindex="-1">a. 常用方法： <a class="header-anchor" href="#a-常用方法" aria-label="Permalink to &quot;a. 常用方法：&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>node.isNode() // 判断是不是节点</span></span>
<span class="line"><span>node.getBBox() // 获取节点的包围盒</span></span>
<span class="line"><span>node.size() // 获取节点大小</span></span>
<span class="line"><span>node.resize() // 改变节点大小</span></span>
<span class="line"><span>node.scale() // 缩放节点</span></span>
<span class="line"><span>node.position() // 获取节点位置</span></span>
<span class="line"><span>node.position(30, 30) // 设置节点位置</span></span></code></pre></div><h5 id="b-创建内置节点" tabindex="-1">b. 创建内置节点 <a class="header-anchor" href="#b-创建内置节点" aria-label="Permalink to &quot;b. 创建内置节点&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 方式一：构造函数</span></span>
<span class="line"><span>import { Shape } from &#39;@antv/x6&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建节点</span></span>
<span class="line"><span>const rect = new Shape.Rect({</span></span>
<span class="line"><span>  x: 100,</span></span>
<span class="line"><span>  y: 200,</span></span>
<span class="line"><span>  width: 80,</span></span>
<span class="line"><span>  height: 40,</span></span>
<span class="line"><span>  angle: 30,</span></span>
<span class="line"><span>  attrs: {</span></span>
<span class="line"><span>    body: {</span></span>
<span class="line"><span>      fill: &#39;blue&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    label: {</span></span>
<span class="line"><span>      text: &#39;Hello&#39;,</span></span>
<span class="line"><span>      fill: &#39;white&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>graph.addNode(rect)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 方式二：graph.addNode</span></span>
<span class="line"><span>const rect = graph.addNode({</span></span>
<span class="line"><span>  shape: &#39;rect&#39;, // 指定使用何种图形，默认值为 &#39;rect&#39;</span></span>
<span class="line"><span>  x: 100,</span></span>
<span class="line"><span>  y: 200,</span></span>
<span class="line"><span>  width: 80,</span></span>
<span class="line"><span>  height: 40,</span></span>
<span class="line"><span>  angle: 30,</span></span>
<span class="line"><span>  attrs: {</span></span>
<span class="line"><span>    body: {</span></span>
<span class="line"><span>      fill: &#39;blue&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    label: {</span></span>
<span class="line"><span>      text: &#39;Hello&#39;,</span></span>
<span class="line"><span>      fill: &#39;white&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 方式三：graph.createNode</span></span>
<span class="line"><span>const node = graph.createNode({</span></span>
<span class="line"><span>  width: 75,</span></span>
<span class="line"><span>  height: 38,</span></span>
<span class="line"><span>  shape: &#39;html&#39;,</span></span>
<span class="line"><span>  attrs: {</span></span>
<span class="line"><span>    label: {</span></span>
<span class="line"><span>      text: &#39;开始&#39;, // 文本</span></span>
<span class="line"><span>      style: {</span></span>
<span class="line"><span>        visibility: &#39;hidden&#39;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  ports: {</span></span>
<span class="line"><span>    groups,</span></span>
<span class="line"><span>    items: startGroupItems</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  type: &#39;start&#39;,</span></span>
<span class="line"><span>  nodeDescription: &#39;开始节点描述&#39;,</span></span>
<span class="line"><span>  html: &#39;start-html&#39;,</span></span>
<span class="line"><span>  ...startNodeSetting</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>this.dnd.start(node, e);</span></span></code></pre></div><h5 id="c-注册自定义-html-节点" tabindex="-1">c. 注册自定义 HTML 节点 <a class="header-anchor" href="#c-注册自定义-html-节点" aria-label="Permalink to &quot;c. 注册自定义 HTML 节点&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>  registerHTMLComponent() {</span></span>
<span class="line"><span>    const startHtml = \`</span></span>
<span class="line"><span>        &lt;div class=&quot;custom-node-wrap&quot;&gt;</span></span>
<span class="line"><span>          &lt;div class=&quot;custom-node start-node&quot;&gt;</span></span>
<span class="line"><span>            &lt;svg class=&quot;icon&quot; aria-hidden=&quot;true&quot; class=&quot;custom-node-body-img&quot;&gt;</span></span>
<span class="line"><span>              &lt;use xlink:href=&quot;#iconkaishi&quot;&gt;&lt;/use&gt;</span></span>
<span class="line"><span>            &lt;/svg&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;text&quot;&gt;开始&lt;/div&gt;</span></span>
<span class="line"><span>          &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        \`;</span></span>
<span class="line"><span>    const approvalHtml = \`</span></span>
<span class="line"><span>        &lt;div class=&quot;custom-node-wrap&quot;&gt;</span></span>
<span class="line"><span>          &lt;div class=&quot;custom-node approval-node&quot;&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;custom-node-header approval-node-header&quot;&gt;</span></span>
<span class="line"><span>              &lt;div class=&quot;custom-node-header-name approval-node-name&quot;&gt;审批节点&lt;/div&gt;</span></span>
<span class="line"><span>              &lt;i class=&quot;custom-node-header-icon iconfont iconshenpi&quot;&gt;&lt;/i&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;custom-node-body&quot;&gt;</span></span>
<span class="line"><span>              &lt;img class=&quot;custom-node-body-img&quot; src=&quot;/static/images/avatar.png&quot;/&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        \`;</span></span>
<span class="line"><span>    const aggregationHtml = \`</span></span>
<span class="line"><span>        &lt;div class=&quot;custom-node-wrap&quot;&gt;</span></span>
<span class="line"><span>          &lt;div class=&quot;custom-node aggregation-node&quot;&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;custom-node-body aggregation-node-body&quot;&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;custom-node-body-user aggregation-node-name&quot;&gt;聚合节点&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;svg class=&quot;icon&quot; aria-hidden=&quot;true&quot; class=&quot;custom-node-body-img&quot;&gt;</span></span>
<span class="line"><span>              &lt;use xlink:href=&quot;#iconjuhejiedian&quot;&gt;&lt;/use&gt;</span></span>
<span class="line"><span>            &lt;/svg&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>          &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        \`;</span></span>
<span class="line"><span>    const endHtml = \`</span></span>
<span class="line"><span>        &lt;div class=&quot;custom-node-wrap&quot;&gt;</span></span>
<span class="line"><span>          &lt;div class=&quot;custom-node end-node&quot;&gt;</span></span>
<span class="line"><span>            &lt;svg class=&quot;icon&quot; aria-hidden=&quot;true&quot; class=&quot;custom-node-body-img&quot;&gt;</span></span>
<span class="line"><span>              &lt;use xlink:href=&quot;#iconjieshu&quot;&gt;&lt;/use&gt;</span></span>
<span class="line"><span>            &lt;/svg&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;text&quot;&gt;结束&lt;/div&gt;</span></span>
<span class="line"><span>          &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        \`;</span></span>
<span class="line"><span>    const branchHtml = \`</span></span>
<span class="line"><span>            &lt;div class=&quot;branch-node-wrap&quot;&gt;</span></span>
<span class="line"><span>             &lt;div class=&quot;branch-node&quot;&gt;</span></span>
<span class="line"><span>               &lt;svg fill=&quot;#fff&quot; width=&quot;110&quot; height=&quot;54&quot; version=&quot;1.1&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt;</span></span>
<span class="line"><span>                 &lt;polygon points=&quot;0,27 55,0 110,27 55,54&quot;/&gt;</span></span>
<span class="line"><span>                 &lt;g&gt;</span></span>
<span class="line"><span>                   &lt;path d=&quot;M110,27 L55,54 Z&quot; stroke=&quot;rgba(0, 0, 0, 0.1)&quot; stroke-width=&quot;2&quot; transform=&quot;translate(0, -1)&quot;&gt;&lt;/path&gt;</span></span>
<span class="line"><span>                   &lt;path d=&quot;M55,54 L0,27 Z&quot; stroke=&quot;rgba(0, 0, 0, 0.1)&quot; stroke-width=&quot;2&quot; transform=&quot;translate(0, -1)&quot;&gt;&lt;/path&gt;</span></span>
<span class="line"><span>                 &lt;/g&gt;</span></span>
<span class="line"><span>                 &lt;use width=&quot;18px&quot; height=&quot;18px&quot; x=&quot;30&quot; y=&quot;18&quot; xlink:href=&quot;#iconfenzhijiedian-yuanxing&quot;&gt;&lt;/use&gt;</span></span>
<span class="line"><span>               &lt;/svg&gt;</span></span>
<span class="line"><span>             &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        \`;</span></span>
<span class="line"><span>    Graph.registerHTMLComponent(&#39;start-html&#39;, startHtml, true);</span></span>
<span class="line"><span>    Graph.registerHTMLComponent(&#39;approval-html&#39;, approvalHtml, true);</span></span>
<span class="line"><span>    Graph.registerHTMLComponent(&#39;aggregation-html&#39;, aggregationHtml, true);</span></span>
<span class="line"><span>    Graph.registerHTMLComponent(&#39;end-html&#39;, endHtml, true);</span></span>
<span class="line"><span>    Graph.registerHTMLComponent(&#39;branch-html&#39;, branchHtml, true);</span></span>
<span class="line"><span>  }</span></span></code></pre></div><h5 id="d-渲染-vue-节点" tabindex="-1">d. 渲染 Vue 节点 <a class="header-anchor" href="#d-渲染-vue-节点" aria-label="Permalink to &quot;d. 渲染 Vue 节点&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>npm install @antv/x6-vue-shape</span></span>
<span class="line"><span>在 vue2 下还需要安装 @vue/composition-api</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { Graph } from &#39;@antv/x6&#39;</span></span>
<span class="line"><span>import &#39;@antv/x6-vue-shape&#39;</span></span>
<span class="line"><span>import ServiceNode from &#39;./service-node.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Graph.registerVueComponent(</span></span>
<span class="line"><span>  &#39;service-node&#39;,</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    template: &#39;&lt;service-node&gt;&lt;/service-node&gt;&#39;,</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>      ServiceNode</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  true</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const graph = new Graph({</span></span>
<span class="line"><span>  container: document.getElementById(&#39;graph&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const node1 = graph.addNode({</span></span>
<span class="line"><span>  shape: &quot;vue-shape&quot;,</span></span>
<span class="line"><span>  x: 300,</span></span>
<span class="line"><span>  y: 250,</span></span>
<span class="line"><span>  component: &quot;service-node&quot;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const node2 = graph.addNode({</span></span>
<span class="line"><span>  shape: &quot;vue-shape&quot;,</span></span>
<span class="line"><span>  x: 300,</span></span>
<span class="line"><span>  y: 550,</span></span>
<span class="line"><span>  component: &quot;service-node&quot;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>graph.addEdge({</span></span>
<span class="line"><span>  source: node1,</span></span>
<span class="line"><span>  target: node2,</span></span>
<span class="line"><span>  vertices: [</span></span>
<span class="line"><span>    { x: 300, y: 250 },</span></span>
<span class="line"><span>    { x: 300, y: 550 }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>});</span></span></code></pre></div><h4 id="_6、边-edge" tabindex="-1">6、边 Edge <a class="header-anchor" href="#_6、边-edge" aria-label="Permalink to &quot;6、边 Edge&quot;">​</a></h4><p>Edge 是边的基类，继承自 <a href="https://x6.antv.vision/zh/docs/api/model/cell" target="_blank" rel="noreferrer">Cell</a>，并定义了边的通用属性和方法。</p><h5 id="a-连接到画布上的点" tabindex="-1">a. 连接到画布上的点 <a class="header-anchor" href="#a-连接到画布上的点" aria-label="Permalink to &quot;a. 连接到画布上的点&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>const edge = new Shape.Edge({</span></span>
<span class="line"><span>  source: { x: 40, y: 40 },</span></span>
<span class="line"><span>  target: { x: 180, y: 80 },</span></span>
<span class="line"><span>})</span></span></code></pre></div><h5 id="b-连接到节点-边" tabindex="-1">b. 连接到节点/边 <a class="header-anchor" href="#b-连接到节点-边" aria-label="Permalink to &quot;b. 连接到节点/边&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>const edge = new Shape.Edge({</span></span>
<span class="line"><span>  source: { cell: &#39;source-cell-id&#39; },</span></span>
<span class="line"><span>  target: { cell: &#39;target-cell-id&#39; },</span></span>
<span class="line"><span>})</span></span></code></pre></div><h5 id="c-连接到节点上的链接桩" tabindex="-1">c. 连接到节点上的链接桩 <a class="header-anchor" href="#c-连接到节点上的链接桩" aria-label="Permalink to &quot;c. 连接到节点上的链接桩&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>const edge = new Shape.Edge({</span></span>
<span class="line"><span>  source: { cell: &#39;source-cell-id&#39;, port: &#39;port-id&#39; },</span></span>
<span class="line"><span>  target: { cell: &#39;target-cell-id&#39;, port: &#39;port-id&#39; },</span></span>
<span class="line"><span>})</span></span></code></pre></div><h5 id="d-连接到节点上的某个元素" tabindex="-1">d. 连接到节点上的某个元素 <a class="header-anchor" href="#d-连接到节点上的某个元素" aria-label="Permalink to &quot;d. 连接到节点上的某个元素&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>const edge = new Shape.Edge({</span></span>
<span class="line"><span>  source: { cell: &#39;source-cell-id&#39;, selector: &#39;some-selector&#39; },</span></span>
<span class="line"><span>  target: { cell: &#39;target-cell-id&#39;, selector: &#39;some-selector&#39; },</span></span>
<span class="line"><span>})</span></span></code></pre></div><h5 id="e-自定义边" tabindex="-1">e. 自定义边： <a class="header-anchor" href="#e-自定义边" aria-label="Permalink to &quot;e. 自定义边：&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>import { Shape } from &#39;@antv/x6&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export class TreeEdge extends Shape.Edge {</span></span>
<span class="line"><span>// ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>TreeEdge.config({</span></span>
<span class="line"><span>  zIndex: 1</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Edge.registry.register(&#39;tree-edge&#39;, TreeEdge, true);</span></span></code></pre></div><h5 id="f-常用的方法有" tabindex="-1">f. 常用的方法有 <a class="header-anchor" href="#f-常用的方法有" aria-label="Permalink to &quot;f. 常用的方法有&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>edge.isEdge() // 判断是不是边</span></span>
<span class="line"><span>edge.getBBox() // 返回边的包围盒</span></span>
<span class="line"><span>edge.getSource() // 获取边的起始节点/起始点信息</span></span>
<span class="line"><span>edge.getTarget() // 获取边的终止节点/终止点信息</span></span></code></pre></div><h5 id="g-箭头" tabindex="-1">g. 箭头 <a class="header-anchor" href="#g-箭头" aria-label="Permalink to &quot;g. 箭头&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 内置箭头：https://x6.antv.vision/zh/docs/tutorial/intermediate/marker#%E5%86%85%E7%BD%AE%E7%AE%AD%E5%A4%B4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const markers = [</span></span>
<span class="line"><span>  [&#39;block&#39;, { size: 6 }],</span></span>
<span class="line"><span>  [&#39;classic&#39;, { size: 6 }],</span></span>
<span class="line"><span>  [&#39;diamond&#39;, { size: 8 }],</span></span>
<span class="line"><span>  [&#39;circle&#39;, { size: 6 }],</span></span>
<span class="line"><span>  [&#39;circlePlus&#39;, { size: 6 }],</span></span>
<span class="line"><span>  [&#39;ellipse&#39;, { rx: 6, ry: 4 }],</span></span>
<span class="line"><span>  [&#39;cross&#39;, { size: 8, offset: 1 }],</span></span>
<span class="line"><span>  [&#39;async&#39;, { size: 8, offset: 1 }],</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>markers.forEach(([marker, args], i) =&gt; {</span></span>
<span class="line"><span>  graph.addEdge({</span></span>
<span class="line"><span>    sourcePoint: [220, 30 + i * 40],</span></span>
<span class="line"><span>    targetPoint: [500, 30 + i * 40],</span></span>
<span class="line"><span>    label: marker,</span></span>
<span class="line"><span>    attrs: {</span></span>
<span class="line"><span>      line: {</span></span>
<span class="line"><span>        sourceMarker: {</span></span>
<span class="line"><span>          args,</span></span>
<span class="line"><span>          name: marker,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        targetMarker: {</span></span>
<span class="line"><span>          args,</span></span>
<span class="line"><span>          name: marker,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        strokeWidth: 1,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>})</span></span></code></pre></div><h4 id="_7、基类-cell" tabindex="-1">7、基类 cell <a class="header-anchor" href="#_7、基类-cell" aria-label="Permalink to &quot;7、基类 cell&quot;">​</a></h4><p>Cell 是 <a href="https://x6.antv.vision/zh/docs/api/model/node" target="_blank" rel="noreferrer">Node</a> 和 <a href="https://x6.antv.vision/zh/docs/api/model/edge" target="_blank" rel="noreferrer">Edge</a> 的基类，包含节点和边的通用属性和方法定义，如属性样式、可见性、业务数据等，并且在实例化、样式定制、默认选项、自定义选项等方面具有相同的行为。</p><h5 id="a-常用的方法有" tabindex="-1">a. 常用的方法有： <a class="header-anchor" href="#a-常用的方法有" aria-label="Permalink to &quot;a. 常用的方法有：&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>cell.isNode() // 监测是否是Node实例</span></span>
<span class="line"><span>cell.isEdge() // 监测是否是Edge实例</span></span>
<span class="line"><span>cell.attr() // 获取全部属性值</span></span>
<span class="line"><span>cell.attr(&#39;body/fill&#39;)  // 获取某一属性值</span></span>
<span class="line"><span>cell.attr(&#39;body/fill&#39;, &#39;#f5f5f5&#39;) // 设置某一属性值</span></span>
<span class="line"><span>cell.getProp().type // 获取指定的属性值。</span></span>
<span class="line"><span>cell.setProp(&#39;name&#39;, val); // 设置属性</span></span>
<span class="line"><span>cell.removeProp(&#39;zIndex&#39;); // 删除单个属性</span></span></code></pre></div><h4 id="_8、辅助工具" tabindex="-1">8、辅助工具 <a class="header-anchor" href="#_8、辅助工具" aria-label="Permalink to &quot;8、辅助工具&quot;">​</a></h4><h5 id="a-自定义-tooltip-弹框" tabindex="-1">a. 自定义 tooltip 弹框 <a class="header-anchor" href="#a-自定义-tooltip-弹框" aria-label="Permalink to &quot;a. 自定义 tooltip 弹框&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>import { ToolsView, Graph } from &#39;@antv/x6&#39;;</span></span>
<span class="line"><span>import insertCss from &#39;insert-css&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>insertCss(\`</span></span>
<span class="line"><span>  .inner-box {</span></span>
<span class="line"><span>    box-sizing: border-box;</span></span>
<span class="line"><span>    width: 590px;</span></span>
<span class="line"><span>    z-index: 2;</span></span>
<span class="line"><span>    max-height: 175px;</span></span>
<span class="line"><span>    padding: 20px;</span></span>
<span class="line"><span>    color: rgba(255, 255, 255, 65);</span></span>
<span class="line"><span>    background-color: rgba(36, 40, 52, 1);</span></span>
<span class="line"><span>    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.5);</span></span>
<span class="line"><span>    border: 1px solid rgba(255, 255, 255, 0.2);</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    display: none;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  .inner-box::before {</span></span>
<span class="line"><span>    width: 0;</span></span>
<span class="line"><span>    height: 0;</span></span>
<span class="line"><span>    content: &#39;&#39;;</span></span>
<span class="line"><span>    border-left: 7px solid transparent;</span></span>
<span class="line"><span>    border-right: 7px solid transparent;</span></span>
<span class="line"><span>    border-bottom: 10px solid rgba(255, 255, 255, 0.2);</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    top: -10px;</span></span>
<span class="line"><span>    left: 49px;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  .inner-box::after {</span></span>
<span class="line"><span>    width: 0;</span></span>
<span class="line"><span>    height: 0;</span></span>
<span class="line"><span>    content: &#39;&#39;;</span></span>
<span class="line"><span>    border-left: 6px solid transparent;</span></span>
<span class="line"><span>    border-right: 6px solid transparent;</span></span>
<span class="line"><span>    border-bottom: 8px solid rgba(36, 40, 52, 1);</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    top: -8px;</span></span>
<span class="line"><span>    left: 50px;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  .inner-box-main-title {</span></span>
<span class="line"><span>    font-size: 18px;</span></span>
<span class="line"><span>    font-weight: 600;</span></span>
<span class="line"><span>    color: rgba(65, 133, 255, 100);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  .inner-box-main-text {</span></span>
<span class="line"><span>    font-size: 12px;</span></span>
<span class="line"><span>    line-height: 20px;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export class TooltipTool extends ToolsView.ToolItem {</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    const dom = \`</span></span>
<span class="line"><span>    &lt;div class=&quot;inner-box-main&quot;&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;inner-box-main-title&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;p class=&quot;inner-box-main-text&quot;&gt;&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    \`;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.knob = ToolsView.createElement(&#39;div&#39;, false);</span></span>
<span class="line"><span>    this.knob.setAttribute(&#39;class&#39;, &#39;inner-box&#39;);</span></span>
<span class="line"><span>    this.knob.innerHTML = dom;</span></span>
<span class="line"><span>    this.container.appendChild(this.knob);</span></span>
<span class="line"><span>    this.updatePosition();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return this;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  updatePosition() {</span></span>
<span class="line"><span>    const cell = this.cell;</span></span>
<span class="line"><span>    const { position, name, description } = cell.getProp();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (description &amp;&amp; name) {</span></span>
<span class="line"><span>      const style = this.knob.style;</span></span>
<span class="line"><span>      style.display = &#39;block&#39;;</span></span>
<span class="line"><span>      style.left = \`\${position.x}px\`;</span></span>
<span class="line"><span>      style.top = \`\${position.y + 70}px\`;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      this.knob.querySelector(&#39;.inner-box-main-title&#39;).innerHTML = name;</span></span>
<span class="line"><span>      this.knob.querySelector(&#39;.inner-box-main-text&#39;).innerHTML = description;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TooltipTool.config({</span></span>
<span class="line"><span>  tagName: &#39;div&#39;,</span></span>
<span class="line"><span>  isSVGElement: false</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Graph.registerNodeTool(&#39;tooltip&#39;, TooltipTool, true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 页面实例化</span></span>
<span class="line"><span>new TooltipTool()</span></span>
<span class="line"><span>cell.addTools([{ name: &#39;tooltip&#39; }]); // 添加tooltip</span></span>
<span class="line"><span>cell.removeTools(); // 删除tooltip</span></span></code></pre></div><h3 id="三、参考阅读" tabindex="-1">三、参考阅读 <a class="header-anchor" href="#三、参考阅读" aria-label="Permalink to &quot;三、参考阅读&quot;">​</a></h3><h5 id="官网" tabindex="-1"><a href="https://x6.antv.vision/zh" target="_blank" rel="noreferrer">官网</a> <a class="header-anchor" href="#官网" aria-label="Permalink to &quot;[官网](https://x6.antv.vision/zh)&quot;">​</a></h5><h5 id="github" tabindex="-1"><a href="https://github.com/antvis/X6" target="_blank" rel="noreferrer">github</a> <a class="header-anchor" href="#github" aria-label="Permalink to &quot;[github](https://github.com/antvis/X6)&quot;">​</a></h5><h5 id="国内镜像" tabindex="-1"><a href="https://antv-x6.gitee.io/zh" target="_blank" rel="noreferrer">国内镜像</a> <a class="header-anchor" href="#国内镜像" aria-label="Permalink to &quot;[国内镜像](https://antv-x6.gitee.io/zh)&quot;">​</a></h5><h5 id="布局" tabindex="-1"><a href="https://x6.antv.vision/zh/docs/tutorial/advanced/layout" target="_blank" rel="noreferrer">布局</a> <a class="header-anchor" href="#布局" aria-label="Permalink to &quot;[布局](https://x6.antv.vision/zh/docs/tutorial/advanced/layout)&quot;">​</a></h5>`,54),t=[l];function i(o,c,r,d,h,u){return a(),n("div",null,t)}const m=s(e,[["render",i]]);export{b as __pageData,m as default};
