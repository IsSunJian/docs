import{_ as s,c as n,o as a,a4 as p,bu as e,bv as l,bw as c,bx as i}from"./chunks/framework.-JfgED0h.js";const y=JSON.parse('{"title":"与地图交互","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/graph/smart-globle/04-与地图交互.md","filePath":"frontend/graph/smart-globle/04-与地图交互.md"}'),t={name:"frontend/graph/smart-globle/04-与地图交互.md"},o=p(`<h1 id="与地图交互" tabindex="-1">与地图交互 <a class="header-anchor" href="#与地图交互" aria-label="Permalink to &quot;与地图交互&quot;">​</a></h1><h2 id="控制器" tabindex="-1">控制器 <a class="header-anchor" href="#控制器" aria-label="Permalink to &quot;控制器&quot;">​</a></h2><p>SmartGloble使用控制器来处理用户与地图的交互，核心类分别是<a href="http://sg.smartgis.cn/documents/module-olview.MouseEventHandler.html" target="_blank" rel="noreferrer">olview.MouseEventHandler</a>(二维)和<a href="http://sg.smartgis.cn/documents/module-csview.MouseEventHandler.html" target="_blank" rel="noreferrer">csview.MouseEventHander</a>。二维控制器和三维控制器在使用方式上基本相同，有一些细微的差别会在后续的<a href="http://sg.smartgis.cn/static/#!tutorials/handler-custom.md" target="_blank" rel="noreferrer">自定义控制器</a>教程中介绍，本节教程主要介绍SmartGloble自带的控制器，以及如何使用现有的控制器与地图交互。</p><h2 id="三维矢量控制器" tabindex="-1">三维矢量控制器 <a class="header-anchor" href="#三维矢量控制器" aria-label="Permalink to &quot;三维矢量控制器&quot;">​</a></h2><h3 id="添加绘制矢量控制器" tabindex="-1">添加绘制矢量控制器 <a class="header-anchor" href="#添加绘制矢量控制器" aria-label="Permalink to &quot;添加绘制矢量控制器&quot;">​</a></h3><p>我们还是以一个具体的示例来开始本教程，假设我现在需要在地图上绘制一些矢量符号，我需要绘制一些点来表示一些设备，然后在绘制一些线路来表示这些设备之间的联系，最后我还需要绘制一些面来表示这些设备覆盖的范围。</p><p>创建控制器代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 创建矢量图层，并添加到视图</span></span>
<span class="line"><span>var csVectorLayer = csView.addLayer(new sg.csvector.VectorLayer());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建一个绘制贴地点的控制器</span></span>
<span class="line"><span>var csDrawPoint = new sg.csvector.handler.DrawGroundPoint();</span></span>
<span class="line"><span>csDrawPoint.setVectorLayer(csVectorLayer); // 设置绘制的矢量属于哪个矢量图层</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建一个绘制贴地线的控制器</span></span>
<span class="line"><span>var csDrawPolyline = new sg.csvector.handler.DrawGroundPolyline();</span></span>
<span class="line"><span>csDrawPolyline.setVectorLayer(csVectorLayer);// 设置绘制的矢量属于哪个矢量图层</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建一个绘制贴地面的控制器</span></span>
<span class="line"><span>var csDrawPolygon = new sg.csvector.handler.DrawGroundPolygon();</span></span>
<span class="line"><span>csDrawPolygon.setVectorLayer(csVectorLayer);// 设置绘制的矢量属于哪个矢量图层</span></span></code></pre></div><p><strong>直接将所有的控制器添加到视图中，是会出现冲突的，因为地图在传递消息时，每个控制器对消息的处理逻辑是不同的。像我们这里，绘制点、线、面的逻辑是不一样的，同时响应三个控制器会出现绘制问题。实际使用中，用户也是需要在界面上分别选择进行哪个绘制操作。</strong></p><p>界面上的交互逻辑，需要用户自己去根据业务功能的需要处理，在本示例中，我会使用<a href="https://github.com/dataarts/dat.gui" target="_blank" rel="noreferrer">dat.gui</a>来处理简单的界面交互。注意引入dat.gui的库文件，SmartGloble很多示例里都用到了dat.gui库来显示简单的交互界面，请参考示例里的引入方式。</p><p>我们接着修改示例代码，在交互界面中选择当前视图中需要哪个控制器。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 为了方便界面交互，我们将控制器按顺序存放到一个数组</span></span>
<span class="line"><span>var csHandlers = [csDrawPoint,csDrawPolyline,csDrawPolygon];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义一个简单的交互界面</span></span>
<span class="line"><span>function Gui() {</span></span>
<span class="line"><span>    this._csDrawType = -1;</span></span>
<span class="line"><span>    ///////////////////////////////////////////////////////////////////////// gui</span></span>
<span class="line"><span>    this._gui = new dat.GUI({</span></span>
<span class="line"><span>        autoPlace: false</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    this._gui.show();</span></span>
<span class="line"><span>    this._gui.open();</span></span>
<span class="line"><span>    this._drag = new sg.utils.DragContainer({</span></span>
<span class="line"><span>        domElement: this._gui.domElement,</span></span>
<span class="line"><span>        x: 800,</span></span>
<span class="line"><span>        y: 0</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this._gui.add(this, &#39;_csDrawType&#39;, {</span></span>
<span class="line"><span>        &#39;绘制点&#39;: 0,</span></span>
<span class="line"><span>        &#39;绘制线&#39;: 1,</span></span>
<span class="line"><span>        &#39;绘制面&#39;: 2,</span></span>
<span class="line"><span>        &#39;取消绘制&#39;: -1</span></span>
<span class="line"><span>    }).name(&#39;绘制矢量&#39;).onFinishChange(function(value) {</span></span>
<span class="line"><span>        var index = parseInt(value);</span></span>
<span class="line"><span>        if(index === -1) {</span></span>
<span class="line"><span>            csView.removeHandlers(); //取消绘制，移除所有的控制器</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            csView.setHandlers(csHandlers[index]); // 根据选择的绘制内容，设置视图中的控制器</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var gui = new Gui(); // 显示交互界面</span></span></code></pre></div><p>默认的绘制线控制器和绘制面控制器，操作方式都是<strong>鼠标左键单击选择位置</strong>；<strong>鼠标左键双击结束当前矢量绘制</strong>，如果矢量顶点数量小于矢量最少顶点（线最少需要两个点，面最少需要三个点），则矢量不会绘制；<strong>鼠标右键单击会回退当前操作</strong>，如果回退到顶点数量为0，则取消当前矢量的绘制，可以继续重新绘制矢量。</p><img src="`+e+`"><h3 id="添加编辑矢量控制器" tabindex="-1">添加编辑矢量控制器 <a class="header-anchor" href="#添加编辑矢量控制器" aria-label="Permalink to &quot;添加编辑矢量控制器&quot;">​</a></h3><p>经过上一小节的教程，你一定可以在地图上绘制矢量了，万一用户操作失误，绘制了错误的矢量位置，那么就需要编辑矢量控制器来修改矢量的位置。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 创建一个编辑矢量的控制器</span></span>
<span class="line"><span>var csModifyVector = new sg.csvector.handler.ModifyVector();</span></span></code></pre></div><p>然后修改上面示例中交互界面的代码，增加编辑矢量的功能。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 为了方便界面交互，我们将控制器按顺序存放到一个数组</span></span>
<span class="line"><span>var csHandlers = [csDrawPoint,csDrawPolyline,csDrawPolygon,csModifyVector];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义一个简单的交互界面</span></span>
<span class="line"><span>function Gui() {</span></span>
<span class="line"><span>    this._csDrawType = -1;</span></span>
<span class="line"><span>    ///////////////////////////////////////////////////////////////////////// gui</span></span>
<span class="line"><span>    this._gui = new dat.GUI({</span></span>
<span class="line"><span>        autoPlace: false</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    this._gui.show();</span></span>
<span class="line"><span>    this._gui.open();</span></span>
<span class="line"><span>    this._drag = new sg.utils.DragContainer({</span></span>
<span class="line"><span>        domElement: this._gui.domElement,</span></span>
<span class="line"><span>        x: 800,</span></span>
<span class="line"><span>        y: 0</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this._gui.add(this, &#39;_csDrawType&#39;, {</span></span>
<span class="line"><span>        &#39;绘制点&#39;: 0,</span></span>
<span class="line"><span>        &#39;绘制线&#39;: 1,</span></span>
<span class="line"><span>        &#39;绘制面&#39;: 2,</span></span>
<span class="line"><span>        &#39;编辑矢量&#39;: 3,</span></span>
<span class="line"><span>        &#39;取消绘制&#39;: -1</span></span>
<span class="line"><span>    }).name(&#39;绘制矢量&#39;).onFinishChange(function(value) {</span></span>
<span class="line"><span>        var index = parseInt(value);</span></span>
<span class="line"><span>        if(index === -1) {</span></span>
<span class="line"><span>            csView.removeHandlers(); //取消绘制，移除所有的控制器</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            csView.setHandlers(csHandlers[index]); // 根据选择的绘制内容，设置视图中的控制器</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var gui = new Gui(); // 显示交互界面</span></span></code></pre></div><img src="`+l+`"><h3 id="添加选择矢量控制器" tabindex="-1">添加选择矢量控制器 <a class="header-anchor" href="#添加选择矢量控制器" aria-label="Permalink to &quot;添加选择矢量控制器&quot;">​</a></h3><p>有了绘制和编辑，你已经可以完成绘制的功能了。在实际业务场景应用中，我们使用最多的应该就是查询功能，可以通过属性查询，也可以通过鼠标选择来查询。</p><p>在本小节中，将介绍如何使用选择矢量控制器，通过鼠标来查询矢量信息，而在实际业务场景中，矢量是代表真实世界具体事物的符号，那么该矢量信息一般都具有一些属性信息，我们通过鼠标选择矢量，来获取该矢量所具有的事物属性。</p><p>为了方便直观的展示选择矢量控制器，我们在选择矢量控制器中，将所选中的矢量调整都调整一下边线颜色，当然在实际应用中需要更符合逻辑的展示，比如弹出窗口展示详细的属性信息。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 创建一个选择矢量的控制器</span></span>
<span class="line"><span>var csSelectVector = new sg.csvector.handler.SelectVector();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 监听选择矢量控制器的选中事件</span></span>
<span class="line"><span>csSelectVector.on(&#39;Selected&#39;, function (event) {</span></span>
<span class="line"><span>    if(event.vector) {</span></span>
<span class="line"><span>        event.vector.setStrokeColor(&#39;white&#39;); // 将选中的矢量边线颜色设置为白色</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>然后继续修改上面示例中交互界面的代码，增加选择矢量的功能。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 为了方便界面交互，我们将控制器按顺序存放到一个数组</span></span>
<span class="line"><span>var csHandlers = [csDrawPoint,csDrawPolyline,csDrawPolygon,csModifyVector,csSelectVector];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义一个简单的交互界面</span></span>
<span class="line"><span>function Gui() {</span></span>
<span class="line"><span>    this._csDrawType = -1;</span></span>
<span class="line"><span>    ///////////////////////////////////////////////////////////////////////// gui</span></span>
<span class="line"><span>    this._gui = new dat.GUI({</span></span>
<span class="line"><span>        autoPlace: false</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    this._gui.show();</span></span>
<span class="line"><span>    this._gui.open();</span></span>
<span class="line"><span>    this._drag = new sg.utils.DragContainer({</span></span>
<span class="line"><span>        domElement: this._gui.domElement,</span></span>
<span class="line"><span>        x: 800,</span></span>
<span class="line"><span>        y: 0</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this._gui.add(this, &#39;_csDrawType&#39;, {</span></span>
<span class="line"><span>        &#39;绘制点&#39;: 0,</span></span>
<span class="line"><span>        &#39;绘制线&#39;: 1,</span></span>
<span class="line"><span>        &#39;绘制面&#39;: 2,</span></span>
<span class="line"><span>        &#39;编辑矢量&#39;: 3,</span></span>
<span class="line"><span>        &#39;选择矢量&#39;: 4,</span></span>
<span class="line"><span>        &#39;取消绘制&#39;: -1</span></span>
<span class="line"><span>    }).name(&#39;绘制矢量&#39;).onFinishChange(function(value) {</span></span>
<span class="line"><span>        var index = parseInt(value);</span></span>
<span class="line"><span>        if(index === -1) {</span></span>
<span class="line"><span>            csView.removeHandlers(); //取消绘制，移除所有的控制器</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            csView.setHandlers(csHandlers[index]); // 根据选择的绘制内容，设置视图中的控制器</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var gui = new Gui(); // 显示交互界面</span></span></code></pre></div><img src="`+c+`"><p>可以从图中看到，选择矢量之后，矢量线的颜色都变成了白色，但是这样产生了一个问题，我多次选择之后，所有的矢量边线都变成了白色，更进一步的，我只想让当前选中的矢量显示白色的边线，那么我们继续完善一下选择控制器，在选中事件中，我们只让当前选中的矢量边线变成白色，上一次选中的矢量让它恢复原来的颜色。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 申明一个变量保存选中的矢量</span></span>
<span class="line"><span>var csSelectedVector = null;</span></span>
<span class="line"><span>// 申明一个变量保存选中的矢量原来的边线颜色</span></span>
<span class="line"><span>var csSelectedVectorOriginStrokeColor = null;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建一个选择矢量的控制器</span></span>
<span class="line"><span>var csSelectVector = new sg.csvector.handler.SelectVector();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 监听选择矢量控制器的选中事件</span></span>
<span class="line"><span>csSelectVector.on(&#39;Selected&#39;, function (event) {</span></span>
<span class="line"><span>    if(event.vector) {</span></span>
<span class="line"><span>        // 如果csSelectedVector跟当前选中的矢量不是同一个，那么改回原来的边线颜色,</span></span>
<span class="line"><span>        // 然后保存当前选中的矢量和其边线颜色，改变当前选中的矢量的边线颜色，</span></span>
<span class="line"><span>        if(csSelectedVector !== event.vector) {</span></span>
<span class="line"><span>            if(csSelectedVector) {</span></span>
<span class="line"><span>                csSelectedVector.setStrokeColor(csSelectedVectorOriginStrokeColor);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            csSelectedVector = event.vector;</span></span>
<span class="line"><span>            csSelectedVectorOriginStrokeColor = csSelectedVector.getStrokeColor();</span></span>
<span class="line"><span>            csSelectedVector.setStrokeColor(&#39;white&#39;); // 将选中的矢量边线颜色设置为白色</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        if(csSelectedVector) {</span></span>
<span class="line"><span>            csSelectedVector.setStrokeColor(csSelectedVectorOriginStrokeColor);</span></span>
<span class="line"><span>            csSelectedVector = null;</span></span>
<span class="line"><span>            csSelectedVectorOriginStrokeColor = null;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>});</span></span></code></pre></div><h3 id="完整代码" tabindex="-1">完整代码 <a class="header-anchor" href="#完整代码" aria-label="Permalink to &quot;完整代码&quot;">​</a></h3><p>三维矢量控制器的完整代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 创建矢量图层，并添加到视图</span></span>
<span class="line"><span>var csVectorLayer = csView.addLayer(new sg.csvector.VectorLayer());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建一个绘制贴地点的控制器</span></span>
<span class="line"><span>var csDrawPoint = new sg.csvector.handler.DrawGroundPoint();</span></span>
<span class="line"><span>csDrawPoint.setVectorLayer(csVectorLayer); // 设置绘制的矢量属于哪个矢量图层</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建一个绘制贴地线的控制器</span></span>
<span class="line"><span>var csDrawPolyline = new sg.csvector.handler.DrawGroundPolyline();</span></span>
<span class="line"><span>csDrawPolyline.setVectorLayer(csVectorLayer);// 设置绘制的矢量属于哪个矢量图层</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建一个绘制贴地面的控制器</span></span>
<span class="line"><span>var csDrawPolygon = new sg.csvector.handler.DrawGroundPolygon();</span></span>
<span class="line"><span>csDrawPolygon.setVectorLayer(csVectorLayer);// 设置绘制的矢量属于哪个矢量图层</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建一个编辑矢量的控制器</span></span>
<span class="line"><span>var csModifyVector = new sg.csvector.handler.ModifyVector();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 申明一个变量保存选中的矢量</span></span>
<span class="line"><span>var csSelectedVector = null;</span></span>
<span class="line"><span>// 申明一个变量保存选中的矢量原来的边线颜色</span></span>
<span class="line"><span>var csSelectedVectorOriginStrokeColor = null;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建一个选择矢量的控制器</span></span>
<span class="line"><span>var csSelectVector = new sg.csvector.handler.SelectVector();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 监听选择矢量控制器的选中事件</span></span>
<span class="line"><span>csSelectVector.on(&#39;Selected&#39;, function (event) {</span></span>
<span class="line"><span>    if(event.vector) {</span></span>
<span class="line"><span>        // 如果csSelectedVector跟当前选中的矢量不是同一个，那么改回原来的边线颜色,</span></span>
<span class="line"><span>        // 然后保存当前选中的矢量和其边线颜色，改变当前选中的矢量的边线颜色，</span></span>
<span class="line"><span>        if(csSelectedVector !== event.vector) {</span></span>
<span class="line"><span>            if(csSelectedVector) {</span></span>
<span class="line"><span>                csSelectedVector.setStrokeColor(csSelectedVectorOriginStrokeColor);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            csSelectedVector = event.vector;</span></span>
<span class="line"><span>            csSelectedVectorOriginStrokeColor = csSelectedVector.getStrokeColor();</span></span>
<span class="line"><span>            csSelectedVector.setStrokeColor(&#39;white&#39;); // 将选中的矢量边线颜色设置为白色</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        if(csSelectedVector) {</span></span>
<span class="line"><span>            csSelectedVector.setStrokeColor(csSelectedVectorOriginStrokeColor);</span></span>
<span class="line"><span>            csSelectedVector = null;</span></span>
<span class="line"><span>            csSelectedVectorOriginStrokeColor = null;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 为了方便界面交互，我们将控制器按顺序存放到一个数组</span></span>
<span class="line"><span>var csHandlers = [csDrawPoint,csDrawPolyline,csDrawPolygon,csModifyVector,csSelectVector];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义一个简单的交互界面</span></span>
<span class="line"><span>function Gui() {</span></span>
<span class="line"><span>    this._csDrawType = -1;</span></span>
<span class="line"><span>    ///////////////////////////////////////////////////////////////////////// gui</span></span>
<span class="line"><span>    this._gui = new dat.GUI({</span></span>
<span class="line"><span>        autoPlace: false</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    this._gui.show();</span></span>
<span class="line"><span>    this._gui.open();</span></span>
<span class="line"><span>    this._drag = new sg.utils.DragContainer({</span></span>
<span class="line"><span>        domElement: this._gui.domElement,</span></span>
<span class="line"><span>        x: 800,</span></span>
<span class="line"><span>        y: 0</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this._gui.add(this, &#39;_csDrawType&#39;, {</span></span>
<span class="line"><span>        &#39;绘制点&#39;: 0,</span></span>
<span class="line"><span>        &#39;绘制线&#39;: 1,</span></span>
<span class="line"><span>        &#39;绘制面&#39;: 2,</span></span>
<span class="line"><span>        &#39;编辑矢量&#39;: 3,</span></span>
<span class="line"><span>        &#39;选择矢量&#39;: 4,</span></span>
<span class="line"><span>        &#39;取消绘制&#39;: -1</span></span>
<span class="line"><span>    }).name(&#39;绘制矢量&#39;).onFinishChange(function(value) {</span></span>
<span class="line"><span>        var index = parseInt(value);</span></span>
<span class="line"><span>        if(index === -1) {</span></span>
<span class="line"><span>            csView.removeHandlers(); //取消绘制，移除所有的控制器</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            csView.setHandlers(csHandlers[index]); // 根据选择的绘制内容，设置视图中的控制器</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var gui = new Gui(); // 显示交互界面</span></span></code></pre></div><h2 id="二维矢量控制器" tabindex="-1">二维矢量控制器 <a class="header-anchor" href="#二维矢量控制器" aria-label="Permalink to &quot;二维矢量控制器&quot;">​</a></h2><p>二维里的控制器和三维的控制器基本类似，这里不在分段详细介绍，直接展示完整的示例代码。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 创建矢量图层，并添加到视图</span></span>
<span class="line"><span>var olVectorLayer = olView.addLayer(new sg.olvector.VectorLayer());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建一个绘制点的控制器</span></span>
<span class="line"><span>var olDrawPoint = new sg.olvector.handler.DrawPoint();</span></span>
<span class="line"><span>olDrawPoint.setVectorLayer(olVectorLayer); // 设置绘制的矢量属于哪个矢量图层</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建一个绘制线的控制器</span></span>
<span class="line"><span>var olDrawPolyline = new sg.olvector.handler.DrawPolyline();</span></span>
<span class="line"><span>olDrawPolyline.setVectorLayer(olVectorLayer);// 设置绘制的矢量属于哪个矢量图层</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建一个绘制面的控制器</span></span>
<span class="line"><span>var olDrawPolygon = new sg.olvector.handler.DrawPolygon();</span></span>
<span class="line"><span>olDrawPolygon.setVectorLayer(olVectorLayer);// 设置绘制的矢量属于哪个矢量图层</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建一个编辑矢量的控制器</span></span>
<span class="line"><span>var olModifyVector = new sg.olvector.handler.ModifyVector();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 申明一个变量保存选中的矢量</span></span>
<span class="line"><span>var olSelectedVector = null;</span></span>
<span class="line"><span>// 申明一个变量保存选中的矢量原来的边线颜色</span></span>
<span class="line"><span>var olSelectedVectorOriginStrokeColor = null;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建一个选择矢量的控制器</span></span>
<span class="line"><span>var olSelectVector = new sg.olvector.handler.SelectVector();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 监听选择矢量控制器的选中事件</span></span>
<span class="line"><span>olSelectVector.on(&#39;Selected&#39;, function (event) {</span></span>
<span class="line"><span>    if(event.vector) {</span></span>
<span class="line"><span>        // 如果olSelectedVector跟当前选中的矢量不是同一个，那么改回原来的边线颜色,</span></span>
<span class="line"><span>        // 然后保存当前选中的矢量和其边线颜色，改变当前选中的矢量的边线颜色，</span></span>
<span class="line"><span>        if(olSelectedVector !== event.vector) {</span></span>
<span class="line"><span>            if(olSelectedVector) {</span></span>
<span class="line"><span>                olSelectedVector.setStrokeColor(olSelectedVectorOriginStrokeColor);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            olSelectedVector = event.vector;</span></span>
<span class="line"><span>            olSelectedVectorOriginStrokeColor = olSelectedVector.getStrokeColor();</span></span>
<span class="line"><span>            olSelectedVector.setStrokeColor(&#39;white&#39;); // 将选中的矢量边线颜色设置为白色</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        if(olSelectedVector) {</span></span>
<span class="line"><span>            olSelectedVector.setStrokeColor(olSelectedVectorOriginStrokeColor);</span></span>
<span class="line"><span>            olSelectedVector = null;</span></span>
<span class="line"><span>            olSelectedVectorOriginStrokeColor = null;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 为了方便界面交互，我们将控制器按顺序存放到一个数组</span></span>
<span class="line"><span>var olHandlers = [olDrawPoint,olDrawPolyline,olDrawPolygon,olModifyVector,olSelectVector];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义一个简单的交互界面</span></span>
<span class="line"><span>function Gui() {</span></span>
<span class="line"><span>    this._olDrawType = -1;</span></span>
<span class="line"><span>    ///////////////////////////////////////////////////////////////////////// gui</span></span>
<span class="line"><span>    this._gui = new dat.GUI({</span></span>
<span class="line"><span>        autoPlace: false</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    this._gui.show();</span></span>
<span class="line"><span>    this._gui.open();</span></span>
<span class="line"><span>    this._drag = new sg.utils.DragContainer({</span></span>
<span class="line"><span>        domElement: this._gui.domElement,</span></span>
<span class="line"><span>        x: 800,</span></span>
<span class="line"><span>        y: 0</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this._gui.add(this, &#39;_olDrawType&#39;, {</span></span>
<span class="line"><span>        &#39;绘制点&#39;: 0,</span></span>
<span class="line"><span>        &#39;绘制线&#39;: 1,</span></span>
<span class="line"><span>        &#39;绘制面&#39;: 2,</span></span>
<span class="line"><span>        &#39;编辑矢量&#39;: 3,</span></span>
<span class="line"><span>        &#39;选择矢量&#39;: 4,</span></span>
<span class="line"><span>        &#39;取消绘制&#39;: -1</span></span>
<span class="line"><span>    }).name(&#39;绘制矢量&#39;).onFinishChange(function(value) {</span></span>
<span class="line"><span>        var index = parseInt(value);</span></span>
<span class="line"><span>        if(index === -1) {</span></span>
<span class="line"><span>            olView.removeHandlers(); //取消绘制，移除所有的控制器</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            olView.setHandlers(olHandlers[index]); // 根据选择的绘制内容，设置视图中的控制器</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var gui = new Gui(); // 显示交互界面</span></span></code></pre></div><img src="`+i+'">',37),r=[o];function d(h,g,u,v,w,V){return a(),n("div",null,r)}const m=s(t,[["render",d]]);export{y as __pageData,m as default};
