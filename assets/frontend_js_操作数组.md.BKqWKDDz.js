import{_ as s,c as n,o as a,a4 as p}from"./chunks/framework.-JfgED0h.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/js/操作数组.md","filePath":"frontend/js/操作数组.md"}'),e={name:"frontend/js/操作数组.md"},l=p(`<h2 id="基础用法-只写参数必选值的用法" tabindex="-1">基础用法 只写参数必选值的用法 <a class="header-anchor" href="#基础用法-只写参数必选值的用法" aria-label="Permalink to &quot;基础用法 只写参数必选值的用法&quot;">​</a></h2><h2 id="数组去重方法" tabindex="-1">数组去重方法： <a class="header-anchor" href="#数组去重方法" aria-label="Permalink to &quot;数组去重方法：&quot;">​</a></h2><p><strong>sort 排序</strong></p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>const arr = [1, 2, 3, 4, 5, 6, 4, 3, 7, 1]</span></span>
<span class="line"><span>// 数组去重：</span></span>
<span class="line"><span>// 方法3： for + sort</span></span>
<span class="line"><span>const newArrFn = (arr) =&gt; {</span></span>
<span class="line"><span>  arr = arr.sort()</span></span>
<span class="line"><span>  let newArr = []</span></span>
<span class="line"><span>  for (let i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span>    arr[i] === arr[i - 1] ? newArr : newArr.push(arr[i])</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return newArr</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(newArrFn(arr)) /// [1, 2, 3, 4, 5, 6, 7]</span></span></code></pre></div><p><strong>Set</strong>:Set 函数可以接受一个数组（或类数组对象）作为参数来初始化，利用该特性也能做到给数组去重</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>const arr = [1, 2, 3, 4, 5, 6, 4, 3, 7, 1]</span></span>
<span class="line"><span>// 数组去重：</span></span>
<span class="line"><span>// 方法4： set</span></span>
<span class="line"><span>// .new Set方法，返回是一个类数组，需要结合 ...运算符，转成真实数组</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const setNewArr = (arr) =&gt; {</span></span>
<span class="line"><span>  return [...new Set(arr)]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(setNewArr(arr))</span></span></code></pre></div><p><strong>filter + indexOf</strong> indexOf，可以检测某一个元素在数组中出现的位置，找到返回该元素的下标，没找到返回 -1</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>const arr = [1, 2, 3, 4, 5, 6, 4, 3, 7, 1]</span></span>
<span class="line"><span>// 数组去重：</span></span>
<span class="line"><span>// 方法6 ：filter + findIndex</span></span>
<span class="line"><span>const newArrFn = (arr) =&gt; {</span></span>
<span class="line"><span>  // 利用indexOf检测元素在数组中第一次出现的位置是否和元素现在的位置相等，</span></span>
<span class="line"><span>  // 如果相等，说明数组中没有重复的</span></span>
<span class="line"><span>  return Array.prototype.filter.call(arr, (item, index) =&gt; {</span></span>
<span class="line"><span>    return arr.indexOf(item) === index</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(newArrFn(arr))</span></span></code></pre></div><p><strong>includes</strong> :利用 includes 检查新数组是否包含原数组的每一项。 如果不包含，就 push 进去</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>const arr = [1, 2, 3, 4, 5, 6, 4, 3, 7, 1]</span></span>
<span class="line"><span>// 数组去重：</span></span>
<span class="line"><span>// 方法7 ：for + includes</span></span>
<span class="line"><span>const newArrFn = (arr) =&gt; {</span></span>
<span class="line"><span>  // 利用includes 检查新数组是否包含原数组的每一项</span></span>
<span class="line"><span>  // 如果不包含，就push进去</span></span>
<span class="line"><span>  let newArr = []</span></span>
<span class="line"><span>  for (let i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span>    newArr.includes(arr[i]) ? newArr : newArr.push(arr[i])</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return newArr</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(newArrFn(arr))</span></span></code></pre></div><h2 id="reduce-方法" tabindex="-1">reduce 方法 <a class="header-anchor" href="#reduce-方法" aria-label="Permalink to &quot;reduce 方法&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 基本使用</span></span>
<span class="line"><span>const arr = [</span></span>
<span class="line"><span>  { price: 10, num: 1 },</span></span>
<span class="line"><span>  { price: 20, num: 5 },</span></span>
<span class="line"><span>  { price: 30, num: 10 },</span></span>
<span class="line"><span>  { price: 40, num: 15 },</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const newArr = arr.reduce((total, item) =&gt; {</span></span>
<span class="line"><span>  return (total += item.price * item.num)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(newArr) //结果1010</span></span></code></pre></div><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//将二维数组转化为一维</span></span>
<span class="line"><span>let arr = [</span></span>
<span class="line"><span>  [1, 2],</span></span>
<span class="line"><span>  [3, 4],</span></span>
<span class="line"><span>  [5, 6],</span></span>
<span class="line"><span>].reduce((total, item) =&gt; total.concat(), [])</span></span>
<span class="line"><span>console.log(arr) //结果就是[1,2,3,4,5,6]</span></span></code></pre></div><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 将多维数组转化为一维</span></span>
<span class="line"><span>const reduceSion = (arr) =&gt; {</span></span>
<span class="line"><span>  let newArr = arr.reduce(</span></span>
<span class="line"><span>    (total, item) =&gt;</span></span>
<span class="line"><span>      total.concat(Array.isArray(item) ? reduceSion(item) : item),</span></span>
<span class="line"><span>    []</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>  console.log(newArr)</span></span>
<span class="line"><span>  return newArr</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let arr = [</span></span>
<span class="line"><span>  [0, 1],</span></span>
<span class="line"><span>  [2, 3, [4, 5]],</span></span>
<span class="line"><span>  [6, [7, 8, 9, [10, 10]]],</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>reduceSion(arr) //结果:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]</span></span></code></pre></div><h2 id="map" tabindex="-1">map <a class="header-anchor" href="#map" aria-label="Permalink to &quot;map&quot;">​</a></h2><ol><li>map()不会对空数组进行检测</li><li>map()不会改变原始数组</li></ol><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>const arr = [1, 2, 3, 4, 5]</span></span>
<span class="line"><span>const newArr = arr.map((item) =&gt; {</span></span>
<span class="line"><span>  return item * 2</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(newArr) //结果:[ 2, 4, 6, 8, 10 ]</span></span></code></pre></div><h2 id="some-和-every" tabindex="-1">some 和 every <a class="header-anchor" href="#some-和-every" aria-label="Permalink to &quot;some 和 every&quot;">​</a></h2><ol><li>some 翻译为一些,every 翻译为每个，所以 some 方法 只要其中一个为 true 就会返回 true ，every 方法必须所有都返回 true 才会返回 true，哪怕有一个 false，就会返回 false</li></ol><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>const arr = [1, 2, 3, 4, 5, 6, 4, 3, 7, 1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// somes</span></span>
<span class="line"><span>const snewArr = arr.some((item) =&gt; {</span></span>
<span class="line"><span>  return item &gt; 6</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(snewArr) //遍历每一项 有一项满足条件就返回true，都不满足返回false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//every</span></span>
<span class="line"><span>const enewArr = arr.every((item) =&gt; {</span></span>
<span class="line"><span>  return item &gt; 6</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(enewArr) //发现有不满足这个条件的就返回false，都满足才返回true</span></span></code></pre></div><h2 id="splice" tabindex="-1">splice <a class="header-anchor" href="#splice" aria-label="Permalink to &quot;splice&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>const arr = [&#39;尖椒&#39;, &#39;炒蛋&#39;, &#39;番茄&#39;, &#39;炒蛋&#39;]</span></span>
<span class="line"><span>arr.splice(0, 1, &#39;葱花&#39;) //从索引0开始。删除一个元素，插入葱花</span></span>
<span class="line"><span>console.log(arr) //[&#39;葱花&#39;, &#39;炒蛋&#39;, &#39;番茄&#39;, &#39;炒蛋&#39;]</span></span></code></pre></div><h2 id="find-和-findindex" tabindex="-1">find 和 findIndex <a class="header-anchor" href="#find-和-findindex" aria-label="Permalink to &quot;find 和 findIndex&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>const arr = [&#39;尖椒&#39;, &#39;炒蛋&#39;, &#39;番茄&#39;, &#39;炒蛋&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// find 找第一个满足条件的数组成员 返回该元素 没有找到返回undefind</span></span>
<span class="line"><span>const newArr = arr.find((item) =&gt; {</span></span>
<span class="line"><span>  return item.indexOf(&#39;番茄&#39;) === 0</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(newArr) //结果：番茄</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//findIndex 找第一个满足条件的数组成员的位置(索引) 返回该索引 没有找到返回-1</span></span>
<span class="line"><span>const newArrs = arr.findIndex((item) =&gt; {</span></span>
<span class="line"><span>  return item === &#39;番茄&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(newArrs) //结果；返回索引 索引为2</span></span></code></pre></div><h2 id="filter" tabindex="-1">filter <a class="header-anchor" href="#filter" aria-label="Permalink to &quot;filter&quot;">​</a></h2><ol><li>过滤数组单元值，生成新数组</li></ol><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>const arr = [1, 2, 3, 4, 5]</span></span>
<span class="line"><span>const newArr = arr.filter((item) =&gt; {</span></span>
<span class="line"><span>  return item &gt; 3</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(newArr) //结果[4,5]</span></span></code></pre></div><h2 id="封装-map" tabindex="-1">封装 map <a class="header-anchor" href="#封装-map" aria-label="Permalink to &quot;封装 map&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>let arr = [1, 2, 3, 4, 5, 6]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Array.prototype.myMap = function (fn) {</span></span>
<span class="line"><span>  const arr = []</span></span>
<span class="line"><span>  for (let i = 0; i &lt; this.length; i++) {</span></span>
<span class="line"><span>    arr.push(fn(this[i], i, this))</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return arr</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const newArr = arr.myMap((item) =&gt; {</span></span>
<span class="line"><span>  return item &gt; 2</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(newArr) //结果：[ false, false, true, true, true, true ]</span></span></code></pre></div><h2 id="封装-reduce" tabindex="-1">封装 reduce <a class="header-anchor" href="#封装-reduce" aria-label="Permalink to &quot;封装 reduce&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>Array.prototype.myReduce = function (fn, ...item) {</span></span>
<span class="line"><span>  let total = item.length &gt; 0 ? item[0] : this[0]</span></span>
<span class="line"><span>  let index = item.length &gt; 0 ? 0 : 1</span></span>
<span class="line"><span>  for (let i = index; i &lt; this.length; i++) {</span></span>
<span class="line"><span>    total = fn(total, this[i], i, this)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return total</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const arr = [1, 2, 3, 4, 5, 6]</span></span>
<span class="line"><span>const newArr = arr.reduce((total, itam) =&gt; {</span></span>
<span class="line"><span>  return total + itam</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(newArr) //结果：21</span></span></code></pre></div><h2 id="封装-filter" tabindex="-1">封装 filter <a class="header-anchor" href="#封装-filter" aria-label="Permalink to &quot;封装 filter&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>Array.prototype.myFilter = function (fn) {</span></span>
<span class="line"><span>  let arr = []</span></span>
<span class="line"><span>  for (let i = 0; i &lt; this.length; i++) {</span></span>
<span class="line"><span>    if (fn(this[i], i, this)) {</span></span>
<span class="line"><span>      arr.push(this[i])</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return arr</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let arr1 = [&#39;西兰花&#39;, &#39;西瓜&#39;, &#39;花椒&#39;, &#39;剁椒&#39;]</span></span>
<span class="line"><span>let res = arr1.myFilter((item, index, arr) =&gt; {</span></span>
<span class="line"><span>  return item.indexOf(&#39;西&#39;) === 0</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(res)</span></span></code></pre></div>`,33),t=[l];function i(r,c,o,d,h,u){return a(),n("div",null,t)}const f=s(e,[["render",i]]);export{m as __pageData,f as default};
