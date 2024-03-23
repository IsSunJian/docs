import{_ as n,c as s,o as a,a4 as p}from"./chunks/framework.K9vKjHgL.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/js/实用工具.md","filePath":"frontend/js/实用工具.md"}'),l={name:"frontend/js/实用工具.md"},e=p(`<h2 id="原型链继承" tabindex="-1">原型链继承 <a class="header-anchor" href="#原型链继承" aria-label="Permalink to &quot;原型链继承&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 将子类的原型对象 设置为 父类的实例对象  父类的原型对象</span></span>
<span class="line"><span>//缺点：只能实现方法的继承</span></span>
<span class="line"><span>function Dog(name) {</span></span>
<span class="line"><span>  this.name = name</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Cat(name) {</span></span>
<span class="line"><span>  this.name = name</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Animal() {}</span></span>
<span class="line"><span>Animal.prototype.fun = function () {</span></span>
<span class="line"><span>  console.log(&#39;跳&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Dog.prototype = new Animal()</span></span>
<span class="line"><span>Cat.prototype = new Animal()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const dog = new Dog(&#39;狗子&#39;)</span></span>
<span class="line"><span>const cat = new Cat(&#39;猫子&#39;)</span></span>
<span class="line"><span>console.log(dog)</span></span>
<span class="line"><span>console.log(cat)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dog.run() //结果：Animal { name: &#39;狗子&#39;}</span></span>
<span class="line"><span>cat.run() //结果：Animal { name: &#39;猫子&#39;}</span></span></code></pre></div><h2 id="借用构造函数继承" tabindex="-1">借用构造函数继承 <a class="header-anchor" href="#借用构造函数继承" aria-label="Permalink to &quot;借用构造函数继承&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//实现方式：把父类构造函数内部的this改成子类构造函数内部的this 通过call()或apply()方法改变this</span></span>
<span class="line"><span>//缺点：只能实现属性的继承</span></span>
<span class="line"><span>function Animal(name) {</span></span>
<span class="line"><span>  this.name = name</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Cat(name) {</span></span>
<span class="line"><span>  // Animal.apply(this,[name])</span></span>
<span class="line"><span>  Animal.call(this, name)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const cat = new Cat()</span></span>
<span class="line"><span>console.log(cat) //结果:Cat { name: &#39;猫子&#39;}</span></span></code></pre></div><h2 id="组合式继承" tabindex="-1">组合式继承 <a class="header-anchor" href="#组合式继承" aria-label="Permalink to &quot;组合式继承&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 把原型链继承和借用构造函数继承组合在一起</span></span>
<span class="line"><span>//缺点：属性继承了两次</span></span>
<span class="line"><span>function Animal(name) {</span></span>
<span class="line"><span>  this.name = name</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Animal.prototype.run = function () {</span></span>
<span class="line"><span>  console.log(&#39;跳&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Cat(name) {</span></span>
<span class="line"><span>  Animal.call(this, name) //借用构造函数继承</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Cat.prototype = new Animal() //原型链继承</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const cat = new Cat(&#39;猫子&#39;)</span></span>
<span class="line"><span>console.log(cat) //结果:Animal { name: &#39;猫子&#39; }</span></span>
<span class="line"><span>cat.run() //跳</span></span></code></pre></div><h2 id="寄生组合继承" tabindex="-1">寄生组合继承 <a class="header-anchor" href="#寄生组合继承" aria-label="Permalink to &quot;寄生组合继承&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//使用借用构造函数继承属性和原型链继承去继承方法 使用原型链继承的时候用Object.create()创建一个对象 ，让这个新的对象他的原型对象变成要继承的构造函数的prototype</span></span>
<span class="line"><span>function Animal(name){</span></span>
<span class="line"><span>    this.name = name</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Animal.prototype.run = function({console.log(&#39;跳&#39;)})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Cat(name){</span></span>
<span class="line"><span>    Animal.call(this,name)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Cat.prototype = Object.create(Animal.prototype)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const cat = new Cat() //Animal { name: &#39;猫子&#39;, age: 6 }</span></span>
<span class="line"><span>cat.run() //跳</span></span></code></pre></div><h2 id="深拷贝" tabindex="-1">深拷贝 <a class="header-anchor" href="#深拷贝" aria-label="Permalink to &quot;深拷贝&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>const obj = {</span></span>
<span class="line"><span>  id: 1,</span></span>
<span class="line"><span>  name: &#39;andy&#39;,</span></span>
<span class="line"><span>  msg: {</span></span>
<span class="line"><span>    age: 21,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  arr: [1, 2, 3],</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const o = {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function deepCopy(newobj, oldobj) {</span></span>
<span class="line"><span>  for (let k in oldobj) {</span></span>
<span class="line"><span>    let item = oldobj[k]</span></span>
<span class="line"><span>    if (item instanceof Array) {</span></span>
<span class="line"><span>      newobj[k] = []</span></span>
<span class="line"><span>      deepCopy(newobj[k], item)</span></span>
<span class="line"><span>    } else if (item instanceof Object) {</span></span>
<span class="line"><span>      newobj[k] = {}</span></span>
<span class="line"><span>      deepCopy(newobj[k], item)</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      newobj[k] = item</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>deepCopy(o, obj)</span></span>
<span class="line"><span>o.msg.age = 210</span></span>
<span class="line"><span>o.arr = [10, 20, 30]</span></span>
<span class="line"><span>console.log(o)</span></span>
<span class="line"><span>console.log(obj)</span></span></code></pre></div>`,10),i=[e];function c(t,o,r,d,m,h){return a(),s("div",null,i)}const b=n(l,[["render",c]]);export{g as __pageData,b as default};
