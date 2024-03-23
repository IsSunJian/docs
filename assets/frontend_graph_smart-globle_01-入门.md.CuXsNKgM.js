import{_ as s,c as a,o as n,a4 as p,bj as l,bk as e}from"./chunks/framework.K9vKjHgL.js";const b=JSON.parse('{"title":"开始SmartGloble","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/graph/smart-globle/01-入门.md","filePath":"frontend/graph/smart-globle/01-入门.md"}'),t={name:"frontend/graph/smart-globle/01-入门.md"},i=p('<h1 id="开始smartgloble" tabindex="-1">开始SmartGloble <a class="header-anchor" href="#开始smartgloble" aria-label="Permalink to &quot;开始SmartGloble&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p><strong>SmartGloble</strong> 是一个基于javascript的浏览器端的二三维一体化数字地球平台。</p><img src="'+l+`"><h2 id="开发包介绍" tabindex="-1">开发包介绍 <a class="header-anchor" href="#开发包介绍" aria-label="Permalink to &quot;开发包介绍&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>+ documents</span></span>
<span class="line"><span>+ examples</span></span>
<span class="line"><span>+ smartgloble</span></span>
<span class="line"><span>+ static</span></span>
<span class="line"><span>- index.html</span></span></code></pre></div><p><strong>documents</strong>是SmartGloble的api文档目录</p><p><strong>examples</strong>是所有的示例所在目录</p><p><strong>smartgloble</strong>是SmartGloble的开发包，开发自己的app应用时，需要引入</p><p><strong>static</strong>是网站的静态资源，包括教程、链接之类的内容</p><h2 id="开发环境推荐" tabindex="-1">开发环境推荐 <a class="header-anchor" href="#开发环境推荐" aria-label="Permalink to &quot;开发环境推荐&quot;">​</a></h2><ul><li><p>开发工具推荐VSCode</p></li><li><p>插件推荐安装LiveServer（支持热更新的web调试服务器）</p></li><li><p>插件推荐安装Beautify（代码美化，帮助您快速格式化代码）</p></li></ul><h2 id="第一个程序" tabindex="-1">第一个程序 <a class="header-anchor" href="#第一个程序" aria-label="Permalink to &quot;第一个程序&quot;">​</a></h2><p>代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;!DOCTYPE HTML&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;utf-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot;</span></span>
<span class="line"><span>        content=&quot;width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Smart Globle&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;link rel=&quot;stylesheet&quot; href=&quot;../smartgloble/lib/SmartCesium/Widgets/widgets.css&quot; type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>    &lt;link rel=&quot;stylesheet&quot; href=&quot;../smartgloble/lib/openlayers/ol.css&quot; type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>    &lt;link rel=&quot;stylesheet&quot; href=&quot;../smartgloble/smartgloble.css&quot; type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;../smartgloble/lib/SmartCesium/Cesium.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;../smartgloble/lib/openlayers/ol.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;../smartgloble/smartgloble.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>        html {</span></span>
<span class="line"><span>            height: 100%;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        body {</span></span>
<span class="line"><span>            height: 100%;</span></span>
<span class="line"><span>            width: 100%;</span></span>
<span class="line"><span>            margin: 0;</span></span>
<span class="line"><span>            overflow: hidden;</span></span>
<span class="line"><span>            padding: 0;</span></span>
<span class="line"><span>            background: #000;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .fullWindow {</span></span>
<span class="line"><span>            position: relative;</span></span>
<span class="line"><span>            top: 0;</span></span>
<span class="line"><span>            left: 0%;</span></span>
<span class="line"><span>            height: 100%;</span></span>
<span class="line"><span>            width: 100%;</span></span>
<span class="line"><span>            margin: 0;</span></span>
<span class="line"><span>            overflow: hidden;</span></span>
<span class="line"><span>            padding: 0;</span></span>
<span class="line"><span>            font-family: sans-serif;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .white {</span></span>
<span class="line"><span>            background: url(./image/map-background.jpg) repeat;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;widget&quot; class=&quot;fullWindow&quot;&gt;</span></span>
<span class="line"><span>        &lt;div id=&quot;map2d&quot; class=&quot;white&quot; style=&quot;position: absolute; width: 50%; height: 100%;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div id=&quot;map3d&quot; style=&quot;position: absolute; width: 50%; height: 100%; right: 0;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        var defaultOlImageLayer = new sg.olimage.WebMercatorTileLayer({</span></span>
<span class="line"><span>            name: &#39;google影像&#39;,</span></span>
<span class="line"><span>            url: &#39;https://mt0.google.cn/vt/lyrs=s&amp;hl=zh-CN&amp;gl=cn&amp;x={x}&amp;y={y}&amp;z={z}&#39;</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        var defaultCsImageLayer = new sg.csimage.WebMercatorTileLayer({</span></span>
<span class="line"><span>            name: &#39;google影像&#39;,</span></span>
<span class="line"><span>            url: &#39;https://mt0.google.cn/vt/lyrs=s&amp;hl=zh-CN&amp;gl=cn&amp;x={x}&amp;y={y}&amp;z={z}&#39;</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        window.csView = new sg.csview.View({</span></span>
<span class="line"><span>            target: &#39;map3d&#39;,</span></span>
<span class="line"><span>            layers: defaultCsImageLayer</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        window.olView = new sg.olview.View({</span></span>
<span class="line"><span>            target: &#39;map2d&#39;,</span></span>
<span class="line"><span>            layers: [defaultOlImageLayer]</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        csView.on(&#39;Loaded&#39;, load);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        function load() {</span></span>
<span class="line"><span>            var olcs_camera = new sg.olcs.Camera(csView.getViewer().scene, olView.getMap());</span></span>
<span class="line"><span>            olcs_camera.activate();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            console.log(sg.Version);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h2 id="代码分析" tabindex="-1">代码分析 <a class="header-anchor" href="#代码分析" aria-label="Permalink to &quot;代码分析&quot;">​</a></h2><ol><li>在HTML的head标签内包含smartgloble的所需的css和js库</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;link rel=&quot;stylesheet&quot; href=&quot;../smartgloble/lib/SmartCesium/Widgets/widgets.css&quot; type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>&lt;link rel=&quot;stylesheet&quot; href=&quot;../smartgloble/lib/openlayers/ol.css&quot; type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>&lt;link rel=&quot;stylesheet&quot; href=&quot;../smartgloble/smartgloble.css&quot; type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;../smartgloble/lib/SmartCesium/Cesium.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;../smartgloble/lib/openlayers/ol.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;../smartgloble/smartgloble.js&quot;&gt;&lt;/script&gt;</span></span></code></pre></div><ol><li>设置网页全局样式</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>html {</span></span>
<span class="line"><span>    height: 100%;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>body {</span></span>
<span class="line"><span>    height: 100%;</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    margin: 0;</span></span>
<span class="line"><span>    overflow: hidden;</span></span>
<span class="line"><span>    padding: 0;</span></span>
<span class="line"><span>    background: #000;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.fullWindow {</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    top: 0;</span></span>
<span class="line"><span>    left: 0%;</span></span>
<span class="line"><span>    height: 100%;</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    margin: 0;</span></span>
<span class="line"><span>    overflow: hidden;</span></span>
<span class="line"><span>    padding: 0;</span></span>
<span class="line"><span>    font-family: sans-serif;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.white {</span></span>
<span class="line"><span>    background: url(./image/map-background.jpg) repeat;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><ol><li>分别创建一个HTML标签去承载二维视图和三维视图</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;div id=&quot;widget&quot; class=&quot;fullWindow&quot;&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;map2d&quot; class=&quot;white&quot; style=&quot;position: absolute; width: 50%; height: 100%;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;map3d&quot; style=&quot;position: absolute; width: 50%; height: 100%; right: 0;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><ol><li>分别构建二维视图和三维视图，并添加一个影像图层</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>var defaultOlImageLayer = new sg.olimage.WebMercatorTileLayer({</span></span>
<span class="line"><span>    name: &#39;google影像&#39;,</span></span>
<span class="line"><span>    url: &#39;https://mt0.google.cn/vt/lyrs=s&amp;hl=zh-CN&amp;gl=cn&amp;x={x}&amp;y={y}&amp;z={z}&#39;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>var defaultCsImageLayer = new sg.csimage.WebMercatorTileLayer({</span></span>
<span class="line"><span>    name: &#39;google影像&#39;,</span></span>
<span class="line"><span>    url: &#39;https://mt0.google.cn/vt/lyrs=s&amp;hl=zh-CN&amp;gl=cn&amp;x={x}&amp;y={y}&amp;z={z}&#39;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.csView = new sg.csview.View({</span></span>
<span class="line"><span>    target: &#39;map3d&#39;,</span></span>
<span class="line"><span>    layers: defaultCsImageLayer</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.olView = new sg.olview.View({</span></span>
<span class="line"><span>    target: &#39;map2d&#39;,</span></span>
<span class="line"><span>    layers: [defaultOlImageLayer]</span></span>
<span class="line"><span>});</span></span></code></pre></div><ol><li>添加三维视图初始化完成事件，并在三维视图初始化完成之后，绑定二三维视图联动</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>csView.on(&#39;Loaded&#39;, load);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function load() {</span></span>
<span class="line"><span>    var olcs_camera = new sg.olcs.Camera(csView.getViewer().scene, olView.getMap());</span></span>
<span class="line"><span>    olcs_camera.activate();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    console.log(sg.Version);</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol><li>在Web服务器中访问(推荐直接在VSCode里打开LiveServer)，就可以看到二维地图和三维地球了，享受您的SmartGloble开发之旅吧！</li></ol><img src="`+e+'">',28),o=[i];function c(r,g,d,u,m,h){return n(),a("div",null,o)}const v=s(t,[["render",c]]);export{b as __pageData,v as default};
