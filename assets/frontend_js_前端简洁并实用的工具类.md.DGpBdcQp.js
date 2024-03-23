import{_ as a,c as s,o as n,a4 as e}from"./chunks/framework.K9vKjHgL.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/js/前端简洁并实用的工具类.md","filePath":"frontend/js/前端简洁并实用的工具类.md"}'),p={name:"frontend/js/前端简洁并实用的工具类.md"},l=e(`<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>本文主要从日期,数组,对象,axios,promise和字符判断这几个方面讲工作中常用的一些函数进行了封装,确实可以在项目中直接引用,提高开发效率.</p><h2 id="_1-日期" tabindex="-1">1.日期 <a class="header-anchor" href="#_1-日期" aria-label="Permalink to &quot;1.日期&quot;">​</a></h2><p>日期在后台管理系统还是用的很多的,一般是作为数据存贮和管理的一个维度,所以就会涉及到很多对日期的处理</p><h3 id="_1-1-new-date转化为yyyy-mm-dd-hh-mm-ss" tabindex="-1">1.1 new Date转化为yyyy-MM-dd HH:mm:ss <a class="header-anchor" href="#_1-1-new-date转化为yyyy-mm-dd-hh-mm-ss" aria-label="Permalink to &quot;1.1 new Date转化为yyyy-MM-dd HH:mm:ss&quot;">​</a></h3><p>DatePicker日期选择器默认获取到的日期默认是Date对象,但是我们后台需要用到的是yyyy-MM-dd,所以需要我们进行转化</p><p>方法一:将Fri Mar 23 2018 12:19:48 GMT+0800 (国际时间)转化为dd-MM-yyyy HH:mm:ss</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>export const dateToFormat=(date)=&gt;{</span></span>
<span class="line"><span>    date.toLocaleString(&quot;en-US&quot;, { hour12: false }).replace(/\\b\\d\\b/g, &#39;0$&amp;&#39;).replace(new RegExp(&#39;/&#39;,&#39;gm&#39;),&#39;-&#39;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>方法二: 从element-UI的2.x版本提供了value-format属性,可以直接设置选择器返回的值</p><h3 id="_1-2-将yyyy-mm-dd转化为new-date" tabindex="-1">1.2 将yyyy-MM-dd转化为new Date() <a class="header-anchor" href="#_1-2-将yyyy-mm-dd转化为new-date" aria-label="Permalink to &quot;1.2 将yyyy-MM-dd转化为new Date()&quot;">​</a></h3><p>也就是转化为日期控件可以接受的类型 直接初始化</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>export const forMatToDate=(date)=&gt;</span></span>
<span class="line"><span>  return new Date(&#39;2018-04-16 19:43:00&#39;);</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="_1-3-获取当前的时间yyyy-mm-dd-hh-mm-ss" tabindex="-1">1.3 获取当前的时间yyyy-MM-dd HH:mm:ss <a class="header-anchor" href="#_1-3-获取当前的时间yyyy-mm-dd-hh-mm-ss" aria-label="Permalink to &quot;1.3 获取当前的时间yyyy-MM-dd HH:mm:ss&quot;">​</a></h3><p>没有满10就补0</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>export default const obtainDate=()=&gt;{</span></span>
<span class="line"><span> let date = new Date();</span></span>
<span class="line"><span>      let year = date.getFullYear();</span></span>
<span class="line"><span>      let month = date.getMonth() + 1;</span></span>
<span class="line"><span>      let day=date.getDate();</span></span>
<span class="line"><span>      let hours=date.getHours();</span></span>
<span class="line"><span>      let minu=date.getMinutes();</span></span>
<span class="line"><span>      let second=date.getSeconds();</span></span>
<span class="line"><span>      //判断是否满10</span></span>
<span class="line"><span>      let arr=[month,day,hours,minu,second];</span></span>
<span class="line"><span>      arr.forEach(item=&gt;{</span></span>
<span class="line"><span>        item&lt; 10?&quot;0&quot;+item:item;</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>      return year+&#39;-&#39;+arr[0]+&#39;-&#39;+arr[1]+&#39; &#39;+arr[2]+&#39;:&#39;+arr[3]+&#39;:&#39;+arr[4]      </span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_1-4-将时间戳转化为yyyy-mm-dd-hh-mm-ss" tabindex="-1">1.4 将时间戳转化为yyyy-MM-dd HH:mm:ss <a class="header-anchor" href="#_1-4-将时间戳转化为yyyy-mm-dd-hh-mm-ss" aria-label="Permalink to &quot;1.4 将时间戳转化为yyyy-MM-dd HH:mm:ss&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>export default const returnTimestamp=(strTime)=&gt;{</span></span>
<span class="line"><span>  let middleDate=new Date(strTime)</span></span>
<span class="line"><span>  return middleDate.toLocaleString(&#39;zh-CN&#39;,{hour12:false}).replace(/\\b\\d\\b/g, &#39;0$&amp;&#39;).replace(new RegExp(&#39;/&#39;,&#39;gm&#39;),&#39;-&#39;)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="_1-5-比较yyyy-mm-dd时间大小" tabindex="-1">1.5 比较yyyy-MM-dd时间大小 <a class="header-anchor" href="#_1-5-比较yyyy-mm-dd时间大小" aria-label="Permalink to &quot;1.5 比较yyyy-MM-dd时间大小&quot;">​</a></h3><p>如果单个比较会比较复杂,这里直接处理成Number比较</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>export default const compareTwo=(dateOne,dateTwo)=&gt;{</span></span>
<span class="line"><span>    return Number(dateOne.replace(/\\-/g,&quot;&quot;))&lt;Number(dateTwo.replace(/\\-/g,&quot;&quot;))</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_1-6-计算两个日期格式为-yyyy-mm-dd-相差几个月" tabindex="-1">1.6 计算两个日期格式为(yyyy-MM-dd)相差几个月 <a class="header-anchor" href="#_1-6-计算两个日期格式为-yyyy-mm-dd-相差几个月" aria-label="Permalink to &quot;1.6 计算两个日期格式为(yyyy-MM-dd)相差几个月&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>export default const disparityFewMonth = (dateOne, dateTwo) =&gt; {</span></span>
<span class="line"><span>    let datesOne = dateOne.split(&#39;-&#39;).map(item =&gt; Number(item));</span></span>
<span class="line"><span>    let datesTwo = dateTwo.split(&#39;-&#39;).map(item =&gt; Number(item));</span></span>
<span class="line"><span>    const diff = [0, 0, 0].map((value, index) =&gt; {</span></span>
<span class="line"><span>        return datesOne[index] - datesTwo[index]</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    return (diff[0] * 12 + diff[1]) + &#39;月&#39; + diff[2] + &#39;天&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_1-7-new-date对象可接受的参数" tabindex="-1">1.7 new Date对象可接受的参数 <a class="header-anchor" href="#_1-7-new-date对象可接受的参数" aria-label="Permalink to &quot;1.7 new Date对象可接受的参数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>1、new Date(&quot;month dd,yyyy hh:mm:ss&quot;); </span></span>
<span class="line"><span>2、new Date(&quot;month dd,yyyy&quot;); </span></span>
<span class="line"><span>3、new Date(yyyy,mth,dd,hh,mm,ss); 注意：这种方式下，必须传递整型；</span></span>
<span class="line"><span>4、new Date(yyyy,mth,dd); </span></span>
<span class="line"><span>5、new Date(ms); 注意：ms:是需要创建的时间和</span></span>
<span class="line"><span>6.new Date(yyyy-MM-dd hh:mm:ss)</span></span>
<span class="line"><span>GMT时间1970年1月1日之间相差的毫秒数；当前时间与GMT1970.1.1之间的毫秒数：var mills = new Date().getTime();</span></span>
<span class="line"><span>注意:mth:用整数表示月份，从0（1月）到11（12月）</span></span></code></pre></div><h2 id="_2-数组" tabindex="-1">2.数组 <a class="header-anchor" href="#_2-数组" aria-label="Permalink to &quot;2.数组&quot;">​</a></h2><h3 id="_2-1-检测是否是数组" tabindex="-1">2.1 检测是否是数组 <a class="header-anchor" href="#_2-1-检测是否是数组" aria-label="Permalink to &quot;2.1 检测是否是数组&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>export default const judgeArr=(arr)=&gt;{</span></span>
<span class="line"><span>        if(Array.isArray(arr)){</span></span>
<span class="line"><span>            return true;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="_2-2数组去重set方法" tabindex="-1">2.2数组去重set方法 <a class="header-anchor" href="#_2-2数组去重set方法" aria-label="Permalink to &quot;2.2数组去重set方法&quot;">​</a></h3><p>1.常见利用循环和indexOf(ES5的数组方法,可以返回值在数组中第一次出现的位置)这里就不再详写,这里介绍一种利用ES6的set实现去重.</p><p>2.set是新怎数据结构,似于数组，但它的一大特性就是所有元素都是唯一的.</p><p>3.set常见操作 大家可以参照下面这个:[新增数据结构Set的用法][3]</p><p>4.set去重代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>export const changeReArr=(arr)=&gt;{</span></span>
<span class="line"><span>    return Array.from(new Set([1,2,2,3,5,4,5]))//利用set将[1,2,2,3,5,4,5]转化成set数据,利用array from将set转化成数组类型</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>或者</span></span>
<span class="line"><span>export const changeReArr=(arr)=&gt;{</span></span>
<span class="line"><span>    return [...new Set([1,2,2,3,5,4,5])]//利用...扩展运算符将set中的值遍历出来重新定义一个数组,...是利用for...of遍历的</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Array.from可以把带有lenght属性类似数组的对象转换为数组，也可以把字符串等可以遍历的对象转换为数组，它接收2个参数，转换对象与回调函数,...和Array.from都是ES6的方法</p><h3 id="_2-3-纯数组排序" tabindex="-1">2.3 纯数组排序 <a class="header-anchor" href="#_2-3-纯数组排序" aria-label="Permalink to &quot;2.3 纯数组排序&quot;">​</a></h3><p>常见有冒泡和选择,这里我写一下利用sort排序</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span> export const orderArr=(arr)=&gt;{</span></span>
<span class="line"><span>        arr.sort((a,b)=&gt;{</span></span>
<span class="line"><span>            return a-b //将arr升序排列,如果是倒序return -(a-b)</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="_2-4-数组对象排序" tabindex="-1">2.4 数组对象排序 <a class="header-anchor" href="#_2-4-数组对象排序" aria-label="Permalink to &quot;2.4 数组对象排序&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>export const orderArr=(arr)=&gt;{</span></span>
<span class="line"><span>        arr.sort((a,b)=&gt;{</span></span>
<span class="line"><span>            let value1 = a[property];</span></span>
<span class="line"><span>            let value2 = b[property];</span></span>
<span class="line"><span>            return value1 - value2;//sort方法接收一个函数作为参数，这里嵌套一层函数用</span></span>
<span class="line"><span>            //来接收对象属性名，其他部分代码与正常使用sort方法相同</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="_2-5-数组中的最大值" tabindex="-1">2.5 数组中的最大值 <a class="header-anchor" href="#_2-5-数组中的最大值" aria-label="Permalink to &quot;2.5 数组中的最大值&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>export const maxArr=(arr)=&gt;{</span></span>
<span class="line"><span>    return Math.max(...arr)</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> 或者export const maxArr=(arr)=&gt;{</span></span>
<span class="line"><span>    return Math.max.apply(null,arr)</span></span>
<span class="line"><span> }</span></span></code></pre></div><h3 id="_2-6-数组的-短路运算-every和some" tabindex="-1">2.6 数组的&quot;短路运算&quot;every和some <a class="header-anchor" href="#_2-6-数组的-短路运算-every和some" aria-label="Permalink to &quot;2.6 数组的&quot;短路运算&quot;every和some&quot;">​</a></h3><p>数组短路运算这个名字是我自己加的,因为一般有这样一种需求,一个数组里面某个或者全部满足条件,就返回true</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>情况一:全部满足</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    export const allTrueArr=(arrs)=&gt;{</span></span>
<span class="line"><span>          return arr.every((arr)=&gt;{</span></span>
<span class="line"><span>             return arr&gt;20;//如果数组的每一项都满足则返回true,如果有一项不满足返回false,终止遍历</span></span>
<span class="line"><span>          })  </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>情况二:有一个满足</span></span>
<span class="line"><span>export default const OneTrueArr=(arrs)=&gt;{</span></span>
<span class="line"><span>      return arr.some((arr)=&gt;{</span></span>
<span class="line"><span>         return arr&gt;20;//如果数组有一项满足则返回true,终止遍历,每一项都不满足则返回false</span></span>
<span class="line"><span>      })  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>以上两种情景就和||和&amp;&amp;的短路运算很相似,所以我就起了一个名字叫短路运算,当然两种情况都可以通过遍历去判断每一项然后用break和return false 结束循环和函数.</p><h3 id="_2-7-数组过滤filter和处理map方法" tabindex="-1">2.7 数组过滤filter和处理map方法 <a class="header-anchor" href="#_2-7-数组过滤filter和处理map方法" aria-label="Permalink to &quot;2.7 数组过滤filter和处理map方法&quot;">​</a></h3><p>filter:过滤满足某一条件的数组值,并返回新数组</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>export const filterArr = (arr, operator, judgeVal) =&gt; {</span></span>
<span class="line"><span>      return arr.filter(item =&gt; {</span></span>
<span class="line"><span>        if (operator == &#39;&gt;&#39;) {</span></span>
<span class="line"><span>          return item &gt; judgeVal;</span></span>
<span class="line"><span>        } else if (operator == &#39;&lt;&#39;) {</span></span>
<span class="line"><span>          return item &gt; judgeVal;</span></span>
<span class="line"><span>        } else if (operator == &#39;==&#39;) {</span></span>
<span class="line"><span>          return item == judgeVal;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>map:对数组进行处理返回一个新数组</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>export const mapArr = (arr) =&gt; {</span></span>
<span class="line"><span>  return arr.map(item =&gt; item + 10;)//箭头函数的{}如果省略,则会默认返回,不用写return</span></span>
<span class="line"><span> }</span></span></code></pre></div><h2 id="_3-对象" tabindex="-1">3.对象 <a class="header-anchor" href="#_3-对象" aria-label="Permalink to &quot;3.对象&quot;">​</a></h2><h3 id="_3-1-对象遍历" tabindex="-1">3.1 对象遍历 <a class="header-anchor" href="#_3-1-对象遍历" aria-label="Permalink to &quot;3.1 对象遍历&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>export const traverseObj=(obj)=&gt;{</span></span>
<span class="line"><span>        for(let variable in obj){</span></span>
<span class="line"><span>        //For…in遍历对象包括所有继承的属性,所以如果</span></span>
<span class="line"><span>         //只是想使用对象本身的属性需要做一个判断</span></span>
<span class="line"><span>        if(obj.hasOwnProperty(variable)){</span></span>
<span class="line"><span>            console.log(variable,obj[variable])</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="_3-2-对象的数据属性" tabindex="-1">3.2 对象的数据属性 <a class="header-anchor" href="#_3-2-对象的数据属性" aria-label="Permalink to &quot;3.2 对象的数据属性&quot;">​</a></h3><p>1.对象属性分类:数据属性和访问器属性;</p><p>2.数据属性:包含数据值的位置,可读写,包含四个特性包含四个特性：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>configurable：表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或能否把属性修改为访问器属性，默认为true</span></span>
<span class="line"><span> enumerable:表示能否通过for-in循环返回属性</span></span>
<span class="line"><span> writable：表示能否修改属性的值</span></span>
<span class="line"><span> value：包含该属性的数据值。默认为undefined</span></span></code></pre></div><p>3.修改数据属性的默认特性,利用Object.defineProperty()</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span> export const modifyObjAttr=()=&gt;{</span></span>
<span class="line"><span>  let person={name:&#39;张三&#39;,age:30};</span></span>
<span class="line"><span>  Object.defineProperty(person,&#39;name&#39;,{</span></span>
<span class="line"><span>    writable:false,</span></span>
<span class="line"><span>    value:&#39;李四&#39;,</span></span>
<span class="line"><span>    configurable:false,//设置false就不能对该属性修改</span></span>
<span class="line"><span>    enumerable:false</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_3-3-对象的访问器属性" tabindex="-1">3.3 对象的访问器属性 <a class="header-anchor" href="#_3-3-对象的访问器属性" aria-label="Permalink to &quot;3.3 对象的访问器属性&quot;">​</a></h3><p>1.访问器属性的四个特性:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>configurable：表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或能否把属性修改为访问器属性，默认为false</span></span>
<span class="line"><span></span></span>
<span class="line"><span> enumerable:表示能否通过for-in循环返回属性,默认为false</span></span>
<span class="line"><span></span></span>
<span class="line"><span> Get：在读取属性时调用的函数,默认值为undefined</span></span>
<span class="line"><span></span></span>
<span class="line"><span> Set：在写入属性时调用的函数,默认值为undefined</span></span></code></pre></div><p>2.定义: 访问器属性只能通过要通过Object.defineProperty()这个方法来定义</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>export const defineObjAccess=()=&gt;{</span></span>
<span class="line"><span>let personAccess={</span></span>
<span class="line"><span>    _name:&#39;张三&#39;,//_表示是内部属性,只能通过对象的方法修改</span></span>
<span class="line"><span>    editor:1</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  Object.defineProperty(personAccess,&#39;name&#39;,{</span></span>
<span class="line"><span>    get:function(){</span></span>
<span class="line"><span>      return this._name;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    set:function(newName){</span></span>
<span class="line"><span>      if(newName!==this._name){</span></span>
<span class="line"><span>        this._name=newName;</span></span>
<span class="line"><span>        this.editor++;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //如果只定义了get方法则改对象只能读</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>vue中最核心的响应式原理的核心就是通过defineProperty来劫持数据的getters和setter属性来改变数据的</p><h2 id="_4-axios" tabindex="-1">4.axios <a class="header-anchor" href="#_4-axios" aria-label="Permalink to &quot;4.axios&quot;">​</a></h2><h3 id="_4-1-axios的get方法" tabindex="-1">4.1 axios的get方法 <a class="header-anchor" href="#_4-1-axios的get方法" aria-label="Permalink to &quot;4.1 axios的get方法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>export const getAjax= function (getUrl,getAjaxData) {</span></span>
<span class="line"><span>  return axios.get(getUrl, {</span></span>
<span class="line"><span>    params: {</span></span>
<span class="line"><span>      &#39;getAjaxDataObj1&#39;: getAjaxData.obj1,//obj1为getAjaxData的一个属性</span></span>
<span class="line"><span>      &#39;getAjaxDataObj2&#39;: getAjaxData.obj2</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }).then(data=&gt;{</span></span>
<span class="line"><span>      //成功返回</span></span>
<span class="line"><span>  }).catch(err=&gt;{</span></span>
<span class="line"><span>      //错误返回</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-2-axios的post方法" tabindex="-1">4.2 axios的post方法 <a class="header-anchor" href="#_4-2-axios的post方法" aria-label="Permalink to &quot;4.2 axios的post方法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>export const postAjax= function (getUrl,postAjaxData) {</span></span>
<span class="line"><span>  return axios.post(postUrl, {</span></span>
<span class="line"><span>      &#39;postAjaxDataObj1&#39;: postAjaxData.obj1,//obj1为postAjaxData的一个属性</span></span>
<span class="line"><span>      &#39;postAjaxDataObj2&#39;: postAjaxData.obj2</span></span>
<span class="line"><span>  }).then(data=&gt;{</span></span>
<span class="line"><span>      //成功返回</span></span>
<span class="line"><span>  }).catch(err=&gt;{</span></span>
<span class="line"><span>      //错误返回</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-3-axios的拦截器" tabindex="-1">4.3 axios的拦截器 <a class="header-anchor" href="#_4-3-axios的拦截器" aria-label="Permalink to &quot;4.3 axios的拦截器&quot;">​</a></h3><p>主要分为请求和响应两种拦截器,请求拦截一般就是配置对应的请求头信息(适用与常见请求方法,虽然ajax的get方法没有请求头,但是axios里面进行啦封装),响应一般就是对reponse进行拦截处理,如果返回结果为[]可以转化为0</p><p>1.请求拦截:将当前城市信息放入请求头中</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>axios.interceptors.request.use(config =&gt; {</span></span>
<span class="line"><span>  config.headers.cityCode = window.sessionStorage.cityCode //jsCookie.get(&#39;cityCode&#39;)</span></span>
<span class="line"><span>  return config</span></span>
<span class="line"><span>},</span></span></code></pre></div><p>2.响应拦截:处理reponse的结果</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>axios.interceptors.response.use((response) =&gt;{</span></span>
<span class="line"><span>  let data = response.data</span></span>
<span class="line"><span>  if(response.request.responseType === &#39;arraybuffer&#39;&amp;&amp;!data.length){</span></span>
<span class="line"><span>    reponse.date=0</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="_5-promise" tabindex="-1">5.promise <a class="header-anchor" href="#_5-promise" aria-label="Permalink to &quot;5.promise&quot;">​</a></h2><p>promise是一种封装未来值的易于复用的异步任务管理机制,主要解决地狱回调和控制异步的顺序</p><h3 id="_5-1-应用方法一" tabindex="-1">5.1 应用方法一 <a class="header-anchor" href="#_5-1-应用方法一" aria-label="Permalink to &quot;5.1 应用方法一&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>export const promiseDemo=()=&gt;{</span></span>
<span class="line"><span>new Promise((resolve,reject)=&gt;{</span></span>
<span class="line"><span>    resolve(()=&gt;{</span></span>
<span class="line"><span>        let a=1;</span></span>
<span class="line"><span>        return ++a;</span></span>
<span class="line"><span>    }).then((data)=&gt;{</span></span>
<span class="line"><span>        console.log(data)//data值为++a的值</span></span>
<span class="line"><span>    }).catch(()=&gt;{//错误执行这个</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_5-2-应用方法二" tabindex="-1">5.2 应用方法二 <a class="header-anchor" href="#_5-2-应用方法二" aria-label="Permalink to &quot;5.2 应用方法二&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>export const promiseDemo=()=&gt;{</span></span>
<span class="line"><span>Promise.resolve([1,2,3]).then((data)=&gt;{//直接初始化一个Promise并执行resolve方法</span></span>
<span class="line"><span>    console.log(data)//data值为[1,2,3]</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_6-文本框的判断" tabindex="-1">6.文本框的判断 <a class="header-anchor" href="#_6-文本框的判断" aria-label="Permalink to &quot;6.文本框的判断&quot;">​</a></h2><h3 id="_6-1-全部为数字" tabindex="-1">6.1 全部为数字 <a class="header-anchor" href="#_6-1-全部为数字" aria-label="Permalink to &quot;6.1 全部为数字&quot;">​</a></h3><p>方法一(最简单):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>export const judgeNum1=(num1)=&gt;{</span></span>
<span class="line"><span>    if(typeof num1==&#39;number&#39;){</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>方法二:isNaN</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>export const judgeNum1=(num1)=&gt;{</span></span>
<span class="line"><span>    if(!isNaN(num1)){</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注:当num1为[]（空数组）、“”（空字符串)和null会在过程中转换为数字类型的0,所以也会返回false,从而判断为数字,所以可以将用typeof将以上特殊情况剔除.</p><p>方法三:正则</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>export const judgeNum1=(num1)=&gt;{</span></span>
<span class="line"><span>  let reg=/^[0-9]*$/</span></span>
<span class="line"><span>  if(!reg.test(num1)){</span></span>
<span class="line"><span>    console.log(&#39;num1是0-9&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_6-2-只能为数字或字母" tabindex="-1">6.2 只能为数字或字母 <a class="header-anchor" href="#_6-2-只能为数字或字母" aria-label="Permalink to &quot;6.2 只能为数字或字母&quot;">​</a></h3><p>这个用正则判断 定义一个正则:let reg=/^[0-9a-zA-Z]*$/g</p><h3 id="_6-3-只能为数字-字母和英文逗号" tabindex="-1">6.3 只能为数字,字母和英文逗号 <a class="header-anchor" href="#_6-3-只能为数字-字母和英文逗号" aria-label="Permalink to &quot;6.3 只能为数字,字母和英文逗号&quot;">​</a></h3><p>因为存在输入多个编号,以英文逗号分隔的情况 定义一个正则:let reg=/^[0-9a-zA-Z,]*$/g</p><h3 id="_6-4-判断输入的位数不超过16位" tabindex="-1">6.4 判断输入的位数不超过16位 <a class="header-anchor" href="#_6-4-判断输入的位数不超过16位" aria-label="Permalink to &quot;6.4 判断输入的位数不超过16位&quot;">​</a></h3><p>直接利用字符串新加的length属性来判断</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>export const judgeNum1=(num1)=&gt;{</span></span>
<span class="line"><span>      if(num1.length&gt;16){</span></span>
<span class="line"><span>        console.log(&#39;num1超过16位&#39;)</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span> }</span></span></code></pre></div><h3 id="_6-5-去掉字符左右空格" tabindex="-1">6.5 去掉字符左右空格 <a class="header-anchor" href="#_6-5-去掉字符左右空格" aria-label="Permalink to &quot;6.5 去掉字符左右空格&quot;">​</a></h3><p>export const trimLeOrRi=(str)=&gt;{ //删除左右两端的空格  return str.replace(/(^\\s*)|(\\s*$)/g, &quot;&quot;); }</p><h2 id="结束" tabindex="-1">结束 <a class="header-anchor" href="#结束" aria-label="Permalink to &quot;结束&quot;">​</a></h2><p>很开心你还能看到这里,这些类可能你现在用不到,但可以先收藏着. 大家可以一起交流,下次项目开发直接拿过去用,现在3月项目比较赶,这个真的可以提高开发效率哦!祝大家新年快乐哒.</p><p>本文转自 <a href="https://juejin.cn/post/6844903591325466637" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903591325466637</a>，如有侵权，请联系删除。</p>`,103),t=[l];function i(o,c,r,d,h,u){return n(),s("div",null,t)}const y=a(p,[["render",i]]);export{m as __pageData,y as default};
