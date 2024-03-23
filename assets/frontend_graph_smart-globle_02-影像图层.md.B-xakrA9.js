import{_ as a,c as s,o as n,a4 as e,bl as p,bm as l,bn as i}from"./chunks/framework.K9vKjHgL.js";const L=JSON.parse('{"title":"影像图层","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/graph/smart-globle/02-影像图层.md","filePath":"frontend/graph/smart-globle/02-影像图层.md"}'),r={name:"frontend/graph/smart-globle/02-影像图层.md"},t=e('<h1 id="影像图层" tabindex="-1">影像图层 <a class="header-anchor" href="#影像图层" aria-label="Permalink to &quot;影像图层&quot;">​</a></h1><h2 id="影像图层的应用" tabindex="-1">影像图层的应用 <a class="header-anchor" href="#影像图层的应用" aria-label="Permalink to &quot;影像图层的应用&quot;">​</a></h2><p>在<a href="http://sg.smartgis.cn/static/#!tutorials/getting-started.md" target="_blank" rel="noreferrer">上一节教程</a>中，我们整体介绍了SmartGloble，并创建了第一个app程序，我们在初始化二三维视图的时候，就默认加载了影像图层，其加载展示的数据是在线的google影像数据。那么影像图层具体是怎么应用的呢，影像图层是二三维视图中，最基础的组成部分，它使用分块分级调度的机制，可以加载海量的影像数据。影像图层分别支持二维和三维，为地图漫游提供基础的数据支撑。</p><h2 id="影像图层支持哪些" tabindex="-1">影像图层支持哪些 <a class="header-anchor" href="#影像图层支持哪些" aria-label="Permalink to &quot;影像图层支持哪些&quot;">​</a></h2><p>二维影像图层支持：</p><ul><li>sg.olimage.GeographicTileLayer</li><li>sg.olimage.WebMercatorTileLayer</li><li>sg.olimage.WmsTileLayer</li><li>sg.olimage.WmtsLayer</li><li>sg.olimage.OlLayer</li></ul><p>三维影像图层支持：</p><ul><li>sg.csimage.GeographicTileLayer</li><li>sg.csimage.WebMercatorTileLayer</li><li>sg.csimage.WmsTileLayer</li><li>sg.csimage.WmtsLayer</li><li>sg.csimage.CsLayer</li></ul><h2 id="geographictilelayer" tabindex="-1">GeographicTileLayer <a class="header-anchor" href="#geographictilelayer" aria-label="Permalink to &quot;GeographicTileLayer&quot;">​</a></h2><p>经纬度投影的影像瓦片，<strong>第0层是两张瓦片</strong>，如下所示分别是第0层的两张瓦片，展示全球，如果是这样类型的瓦片组织方式，请使用GeographicTileLayer</p><img src="'+p+'"><img src="'+l+`"><p>二维使用示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 创建二维影像图层</span></span>
<span class="line"><span>var olImageLayer = new sg.olimage.GeographicTileLayer({</span></span>
<span class="line"><span>    name: &#39;google影像&#39;,</span></span>
<span class="line"><span>    url: domain + &#39;/smartgis.service/image?source=google&amp;x={x}&amp;y={y}&amp;z={z}&#39;,</span></span>
<span class="line"><span>    maxZoom: 18</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 添加到二维视图，视图的创建请参考上一篇教程</span></span>
<span class="line"><span>olView.addLayer(olImageLayer);</span></span></code></pre></div><p>三维使用示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 创建三维影像图层</span></span>
<span class="line"><span>var csImageLayer = new sg.csimage.GeographicTileLayer({</span></span>
<span class="line"><span>    name: &#39;google影像&#39;,</span></span>
<span class="line"><span>    url: domain + &#39;/smartgis.service/image?source=google&amp;x={x}&amp;y={y}&amp;z={z}&#39;,</span></span>
<span class="line"><span>    maxZoom: 18</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 添加到三维视图，视图的创建请参考上一篇教程</span></span>
<span class="line"><span>csView.addLayer(csImageLayer);</span></span></code></pre></div><h2 id="webmercatortilelayer" tabindex="-1">WebMercatorTileLayer <a class="header-anchor" href="#webmercatortilelayer" aria-label="Permalink to &quot;WebMercatorTileLayer&quot;">​</a></h2><p>墨卡托投影的影像瓦片，<strong>第0层是一张瓦片</strong>，如下所示是第0层的一张瓦片，展示全球，如果是这样类型的瓦片组织方式，请使用WebMercatorTileLayer</p><img src="`+i+`"><p>二维使用示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 创建二维影像图层</span></span>
<span class="line"><span>var olImageLayer = new sg.olimage.GeographicTileLayer({</span></span>
<span class="line"><span>    name: &#39;google影像&#39;,</span></span>
<span class="line"><span>    url: domain + &#39;/smartgis.service/image?source=google&amp;x={x}&amp;y={y}&amp;z={z}&#39;,</span></span>
<span class="line"><span>    maxZoom: 18</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 添加到二维视图，视图的创建请参考上一篇教程</span></span>
<span class="line"><span>olView.addLayer(olImageLayer);</span></span></code></pre></div><p>三维使用示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 创建三维影像图层</span></span>
<span class="line"><span>var csImageLayer = new sg.csimage.GeographicTileLayer({</span></span>
<span class="line"><span>    name: &#39;google影像&#39;,</span></span>
<span class="line"><span>    url: domain + &#39;/smartgis.service/image?source=google&amp;x={x}&amp;y={y}&amp;z={z}&#39;,</span></span>
<span class="line"><span>    maxZoom: 18</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 添加到三维视图，视图的创建请参考上一篇教程</span></span>
<span class="line"><span>csView.addLayer(csImageLayer);</span></span></code></pre></div><h2 id="wmstilelayer" tabindex="-1">WmsTileLayer <a class="header-anchor" href="#wmstilelayer" aria-label="Permalink to &quot;WmsTileLayer&quot;">​</a></h2><p>支持标准的OGC WMS，具体请查阅api文档使用</p><h2 id="wmtslayer" tabindex="-1">WmtsLayer <a class="header-anchor" href="#wmtslayer" aria-label="Permalink to &quot;WmtsLayer&quot;">​</a></h2><p>支持标准的OGC WMTS，具体请查阅api文档使用</p><p>天地图提供全球的瓦片数据，可以使用WMTS访问。</p><p>二维使用示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 创建二维影像图层</span></span>
<span class="line"><span>var olImageLayer = new sg.olimage.WmtsLayer({</span></span>
<span class="line"><span>    name: &#39;tianditu&#39;,</span></span>
<span class="line"><span>    url: &#39;http://t0.tianditu.gov.cn/img_c/wmts?tk=&#39; + tk,</span></span>
<span class="line"><span>    layer: &#39;img&#39;,</span></span>
<span class="line"><span>    matrixSet: &#39;c&#39;,</span></span>
<span class="line"><span>    matrixIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],</span></span>
<span class="line"><span>    maxZoom: 21,</span></span>
<span class="line"><span>    extent: [-180, -90.0, 180.0, 90.0],</span></span>
<span class="line"><span>    format: &#39;tiles&#39;,</span></span>
<span class="line"><span>    style: &#39;default&#39;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 添加到二维视图，视图的创建请参考上一篇教程</span></span>
<span class="line"><span>olView.addLayer(olImageLayer);</span></span></code></pre></div><p>三维使用示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 创建三维影像图层</span></span>
<span class="line"><span>var csImageLayer = new sg.csimage.WmtsLayer({</span></span>
<span class="line"><span>    name: &#39;tianditu&#39;,</span></span>
<span class="line"><span>    url: &#39;http://t0.tianditu.gov.cn/img_c/wmts?tk=&#39; + tk,</span></span>
<span class="line"><span>    layer: &#39;img&#39;,</span></span>
<span class="line"><span>    matrixSet: &#39;c&#39;,</span></span>
<span class="line"><span>    matrixIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],</span></span>
<span class="line"><span>    maxZoom: 21,</span></span>
<span class="line"><span>    extent: [-180, -90.0, 180.0, 90.0],</span></span>
<span class="line"><span>    format: &#39;tiles&#39;,</span></span>
<span class="line"><span>    style: &#39;default&#39;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 添加到三维视图，视图的创建请参考上一篇教程</span></span>
<span class="line"><span>csView.addLayer(csImageLayer);</span></span></code></pre></div><h2 id="ollayer" tabindex="-1">OlLayer <a class="header-anchor" href="#ollayer" aria-label="Permalink to &quot;OlLayer&quot;">​</a></h2><p>二维影像图层，支持自定义的ol.layer，如果上述影像图层类型不能满足需求，则使用OlLayer，具体使用方式请参考api文档。</p><h2 id="cslayer" tabindex="-1">CsLayer <a class="header-anchor" href="#cslayer" aria-label="Permalink to &quot;CsLayer&quot;">​</a></h2><p>三维影像图层，支持自定义的Cesium.ImageryLayer，如果上述影像图层类型不能满足需求，则使用CsLayer，具体使用方式请参考api文档。</p>`,36),c=[t];function o(m,g,d,h,y,u){return n(),s("div",null,c)}const v=a(r,[["render",o]]);export{L as __pageData,v as default};
