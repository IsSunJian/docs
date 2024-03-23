import{_ as s,c as n,o as a,a4 as p}from"./chunks/framework.K9vKjHgL.js";const e="/docs/assets/image-20220823191003444.CbaNVMVq.png",l="/docs/assets/image-20220826165340157.D1DeuvPz.png",t="/docs/assets/image-20220826171454775.CsRwroUA.png",i="/docs/assets/image-20221203095553048.DQ8hjW8g.png",o="/docs/assets/image-20220826173003949.DaFvxwYl.png",c="/docs/assets/2022-09-29-00-15-46.BiIvBVL7.png",r="/docs/assets/image-20220826180550583.DaUsxX0K.png",u="/docs/assets/image-20221203122405075.d_WiatFK.png",g="/docs/assets/image-20220826181117898.CzuwQsv1.png",d="/docs/assets/image-20221203130726310.__p9OQQ7.png",m="/docs/assets/image-20221203131954932.CkPAktPX.png",h="/docs/assets/image-20221203161246168.D6HnzBdx.png",b="/docs/assets/image-20221203161004349.CCTIFTQj.png",q="/docs/assets/image-20221203160447953.Ba9VtZbE.png",v="/docs/assets/image-20221203162706175.E4oIxshO.png",C="/docs/assets/image-20221203164114083.D57P9gaB.png",k="/docs/assets/image-20221203164944144.DjH5kkmB.png",_="/docs/assets/image-20221203190218468.BHLNaHsO.png",S="/docs/assets/image-20221203191732601.C37PCVsc.png",y="/docs/assets/image-20221203191822996.DLEWaCxT.png",f="/docs/assets/image-20221203211640646.CE6l4ou3.png",P="/docs/assets/image-20221203212221939.BG09Pu6v.png",R="/docs/assets/image-20221203212024679.DPm_lKIz.png",x="/docs/assets/image-20220826194159343.BuAb3x5L.png",w="/docs/assets/image-20221203213120692.yUn1-OQ_.png",j="/docs/assets/image-20221203214600716.CdKAy2Qk.png",O="/docs/assets/image-20221203225623337.D31Jtyl6.png",E="/docs/assets/image-20221203230457901.GJgYrV8V.png",I="/docs/assets/image-20221203231803000.YUJktVCn.png",A="/docs/assets/image-20221204001520756.vGORwbR8.png",B="/docs/assets/image-20221203235715804.B41K1Fjx.png",T="/docs/assets/image-20221204002040184.DwE13jgx.png",D="/docs/assets/image-20221204002306288.DYEHmjvV.png",L="/docs/assets/image-20221204100656376.2C3Gwu2k.png",M="/docs/assets/image-20221204172339375.O3GbTHny.png",J="/docs/assets/image-20221204172705426.BZrT778S.png",H="/docs/assets/image-20221204174052622.DKDmP4Ii.png",U="/docs/assets/image-20221204174537686.C7Uh2Lrx.png",N="/docs/assets/image-20221204180946963.BaY-CNkz.png",G="/docs/assets/image-20221204180744084.BeqKcYkA.png",K="/docs/assets/image-20221204185928260.DO9MCRJY.png",W="/docs/assets/image-20221204182828547.BhxV1HaY.png",F="/docs/assets/image-20221204183044848.DsPLnr_g.png",V="/docs/assets/image-20221204184313822.ZRCbQEwY.png",X="/docs/assets/image-20221204190712411.DWyLgX_y.png",Q="/docs/assets/5490292823481652051.IeAuiCEB.png",Y="/docs/assets/image-20221204195812200.DbTvk5gO.png",z="/docs/assets/image-20221204201342490.lsBxpGMT.png",Z="/docs/assets/image-20221204204916033.B1Te2KZ_.png",$="/docs/assets/image-20221204212807207.CjcMt973.png",ss="/docs/assets/image-20221204213328034.BdyOiuWD.png",ns="/docs/assets/image-20221204213859112.xqEEshVT.png",as="/docs/assets/image-20221204223602694.ChmCoF8V.png",ps="/docs/assets/image-20221204223815554.ma5X3kJv.png",es="/docs/assets/image-20221204224643683.BI_1nN6R.png",ls="/docs/assets/image-20221204225437297.k8CBkZYd.png",ts="/docs/assets/image-20221204225815624.Dxmd14OZ.png",is="/docs/assets/image-20221204232501679.8zXTNRFp.png",os="/docs/assets/image-20221204233333606.DRltUMVu.png",cs="/docs/assets/image-20221204233637735.B_PtfZcr.png",_s=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"backend/spring-boot/SpringBootWeb请求响应.md","filePath":"backend/spring-boot/SpringBootWeb请求响应.md"}'),rs={name:"backend/spring-boot/SpringBootWeb请求响应.md"},us=p('<h2 id="springbootweb请求响应" tabindex="-1">SpringBootWeb请求响应 <a class="header-anchor" href="#springbootweb请求响应" aria-label="Permalink to &quot;SpringBootWeb请求响应&quot;">​</a></h2><h2 id="今日目标" tabindex="-1">今日目标 <a class="header-anchor" href="#今日目标" aria-label="Permalink to &quot;今日目标&quot;">​</a></h2><p>目标</p><ul><li>能够编写 SpringBoot 入门案例 ❤️</li><li>能够使用 PostMan/ApiFox 工具 发送请求 ❤️ ✏️</li><li>能够掌握普通类型参数传递</li><li>能够掌握 POJO 类型参数传递</li><li>能够掌握 json 数据参数、路径参数传递 ❤️ ✏️</li><li>能够掌握响应 json 数据 ❤️ ✏️</li><li>能够理解IOC和DI 🍐</li></ul><h2 id="前言-🍐" tabindex="-1">前言 🍐 <a class="header-anchor" href="#前言-🍐" aria-label="Permalink to &quot;前言 🍐&quot;">​</a></h2><p>在上一次的课程中，我们开发了springbootweb的入门程序。</p><p>需求</p><ol><li>基于SpringBoot的方式开发一个web应用，浏览器发起请求/hello后，给浏览器返回字符串 “Hello World ~”。</li></ol><p><img src="'+e+'" alt=""></p><p><strong>知识点：</strong></p><ol><li>🌍 浏览器发起<strong>请求</strong>，请求了我们的后端web服务器💻(也就是内置的<strong>Tomcat</strong>)</li><li><strong>请求</strong>会被部署在<strong>Tomcat</strong>中的Controller接收，然后Controller再给浏览器一个<strong>响应</strong>，响应一个字符串 “Hello World”。</li><li>请求响应的过程中是遵循HTTP协议的</li><li>在SpringBoot进行web程序开发时，它内置了一个核心的Servlet程序 <strong>DispatcherServlet</strong>，称之为 核心控制器 。 <strong>DispatcherServlet</strong> 负责<strong>接收页面发送的请求</strong>，然后根据执行的规则，将请求<strong>再转发</strong>给后面的<strong>请求处理器Controller</strong>，请求处理器处理完请求之后，最终再由<strong>DispatcherServlet</strong>给浏览器<strong>响应数据</strong>。<img src="'+l+'" alt="image-20220826165340157"></li><li>浏览器发送请求，会携带请求数据，包括：请求行、请求头。这些数据可以从HttpServletRequest对象中获取</li><li>而程序通过设置<strong>HttpServletResponse对象</strong>，通过服务器Tomcat给浏览器返回<strong>响应数据</strong></li></ol><p>那上述所描述的这种浏览器/服务器的架构模式呢，我们称之为：<strong>BS架构</strong>。</p><p><img src="'+t+'" alt="image-20220826171454775"></p><blockquote><ul><li>BS架构🌍：Browser/Server，浏览器/服务器架构模式。客户端只需要浏览器，应用程序的逻辑和数据都存储在服务端。</li><li><a href="https://blog.csdn.net/qq_51772871/article/details/124084967" target="_blank" rel="noreferrer">CS架构open in new window</a> ：Client-Server，服务器-客户机架构模式。</li></ul></blockquote><p>作业</p><ol><li>🚩 能够流畅的说出SpringBoot入门案例涉及的知识点</li><li>🚩 能够举例说明BS架构和CS架构的特点</li></ol><h2 id="_1-请求-🍐-❤️" tabindex="-1">1. 请求 🍐 ❤️ <a class="header-anchor" href="#_1-请求-🍐-❤️" aria-label="Permalink to &quot;1\\. 请求 🍐 ❤️&quot;">​</a></h2><p>本章节，我们主要讲解，如何接收页面传递过来的请求数据。</p><h3 id="_1-1-postman-✏️-🔧" tabindex="-1">1.1 Postman ✏️ 🔧 <a class="header-anchor" href="#_1-1-postman-✏️-🔧" aria-label="Permalink to &quot;1.1 Postman ✏️ 🔧&quot;">​</a></h3><p>问题</p><ol><li>Postman的作用是什么？</li></ol><p>点击查看</p><ol><li>常用于进行接口测试(如模拟发送get和post请求)</li></ol><p>之前我们课程中有提到当前最为主流的开发模式：前后端分离</p><p><img src="'+i+'" alt="image-20221203095553048"></p><p>知识点</p><ol><li><p>在<strong>前后端分离</strong>开发模式下，前端技术人员基于&quot;<strong>接口文档</strong>&quot;，开发前端程序 🌍；后端技术人员也基于&quot;接口文档&quot;，开发后端程序💻。</p></li><li><p>后端技术人员，在开发过程中，没有前端页面。需要通过Postman等工具模拟发送请求，测试接口，而避免书写的前端代码进行测试。</p></li></ol><h4 id="_1-1-1-介绍" tabindex="-1">1.1.1 介绍 <a class="header-anchor" href="#_1-1-1-介绍" aria-label="Permalink to &quot;1.1.1 介绍&quot;">​</a></h4><p><img src="'+o+'" alt="image-20220826173003949"></p><ul><li><p>Postman是一款功能强大的网页调试与发送网页HTTP请求的Chrome插件。</p><blockquote><p>Postman原是Chrome浏览器的插件，可以模拟浏览器向后端服务器发起任何形式(如:get、post)的HTTP请求</p><p>使用Postman还可以在发起请求时，携带一些请求参数、请求头等信息</p></blockquote></li><li><p>作用：常用于进行接口测试</p></li><li><p>特征</p><ul><li>简单</li><li>实用</li><li>美观</li><li>大方</li></ul></li></ul><p><strong>也可以使用 Apifox模拟发送请求，特点是：中文、微信登录</strong> 👍</p><blockquote><p>ApiFox 是一款模拟请求的软件，有：API 文档、API 调试、API Mock、API 自动化测试等功能，官网：<a href="https://www.apifox.cn/" target="_blank" rel="noreferrer">https://www.apifox.cn/open in new window</a> <a href="https://www.apifox.cn/help/" target="_blank" rel="noreferrer">Apifox 使用教程open in new window</a> <img src="'+c+'" alt=""></p></blockquote><hr><h3 id="_1-2-简单参数❤️" tabindex="-1">1.2 简单参数❤️ <a class="header-anchor" href="#_1-2-简单参数❤️" aria-label="Permalink to &quot;1.2 简单参数❤️&quot;">​</a></h3><p>14分钟简单参数 ：在向服务器发起请求时，向服务器传递的是一些普通的请求数据。</p><p><img src="'+r+`" alt="image-20220826180550583"></p><p>那么在后端程序中，如何接收传递过来的普通参数数据呢？</p><p>我们在这里讲解两种方式：</p><ol><li>原始方式 🚀</li><li>SpringBoot方式 ❤️</li></ol><h4 id="_1-2-1-原始方式" tabindex="-1">1.2.1 原始方式 <a class="header-anchor" href="#_1-2-1-原始方式" aria-label="Permalink to &quot;1.2.1 原始方式&quot;">​</a></h4><p>在原始的Web程序当中，需要通过Servlet中提供的API：<strong>HttpServletRequest</strong>（请求对象），获取请求的相关信息。比如获取请求参数：</p><blockquote><p>Tomcat接收到http请求时：把请求的相关信息封装到HttpServletRequest对象中</p></blockquote><p>在Controller中，我们要想获取Request对象，可以<strong>直接在方法的形参中声明 HttpServletRequest 对象</strong>。然后就可以通过该对象来获取请求信息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//根据指定的参数名获取请求参数的数据值</span></span>
<span class="line"><span>String  request.getParameter(&quot;参数名&quot;)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class RequestController {</span></span>
<span class="line"><span>    //原始方式</span></span>
<span class="line"><span>    @RequestMapping(&quot;/simpleParam&quot;)</span></span>
<span class="line"><span>    public String simpleParam(HttpServletRequest request){</span></span>
<span class="line"><span>        // http://localhost:8080/simpleParam?name=Tom&amp;age=10</span></span>
<span class="line"><span>        // 请求参数： name=Tom&amp;age=10   （有2个请求参数）</span></span>
<span class="line"><span>        // 第1个请求参数： name=Tom   参数名:name，参数值:Tom</span></span>
<span class="line"><span>        // 第2个请求参数： age=10     参数名:age , 参数值:10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        String name = request.getParameter(&quot;name&quot;);//name就是请求参数名</span></span>
<span class="line"><span>        String ageStr = request.getParameter(&quot;age&quot;);//age就是请求参数名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        int age = Integer.parseInt(ageStr);//需要手动进行类型转换</span></span>
<span class="line"><span>        System.out.println(name+&quot;  :  &quot;+age);</span></span>
<span class="line"><span>        return &quot;OK&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>以上这种方式，我们仅做<strong>了解</strong>。（在以后的开发中不会使用到）</p></blockquote><h4 id="_1-2-2-springboot方式-非常实用" tabindex="-1">1.2.2 SpringBoot方式 非常实用 <a class="header-anchor" href="#_1-2-2-springboot方式-非常实用" aria-label="Permalink to &quot;1.2.2 SpringBoot方式 非常实用&quot;">​</a></h4><p>在Springboot的环境中，对原始的API进行了封装，接收参数的形式更加简单。 如果是简单参数，<strong>参数名与形参变量名相同，定义同名的形参即可接收参数</strong>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class RequestController {</span></span>
<span class="line"><span>    // http://localhost:8080/simpleParam?name=Tom&amp;age=10</span></span>
<span class="line"><span>    // 第1个请求参数： name=Tom   参数名:name，参数值:Tom</span></span>
<span class="line"><span>    // 第2个请求参数： age=10     参数名:age , 参数值:10</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //springboot方式</span></span>
<span class="line"><span>    @RequestMapping(&quot;/simpleParam&quot;)</span></span>
<span class="line"><span>    public String simpleParam(String name , Integer age ){//形参名和请求参数名保持一致</span></span>
<span class="line"><span>        System.out.println(name+&quot;  :  &quot;+age);</span></span>
<span class="line"><span>        return &quot;OK&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>postman测试( GET 请求)：</strong></p><p><img src="`+u+'" alt="image-20221203122405075"></p><p><strong>postman测试( POST请求 )：</strong></p><p><img src="'+g+`" alt="image-20220826181117898"></p><p>结论</p><p>不论是GET请求还是POST请求，对于简单参数来讲，只要保证请求参数名和Controller方法中的形参名保持一致，就可以获取到请求参数中的数据值。</p><h4 id="_1-2-3-参数名不一致-⚠️" tabindex="-1">1.2.3 参数名不一致 ⚠️ <a class="header-anchor" href="#_1-2-3-参数名不一致-⚠️" aria-label="Permalink to &quot;1.2.3 参数名不一致 ⚠️&quot;">​</a></h4><p>问题</p><ol><li>如果方法形参名称与请求参数名称不一致，controller方法中的形参还能接收到请求参数值吗？</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class RequestController {</span></span>
<span class="line"><span>    // http://localhost:8080/simpleParam?name=Tom&amp;age=20</span></span>
<span class="line"><span>    // 请求参数名：name</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //springboot方式</span></span>
<span class="line"><span>    @RequestMapping(&quot;/simpleParam&quot;)</span></span>
<span class="line"><span>    public String simpleParam(String username , Integer age ){//请求参数名和形参名不相同</span></span>
<span class="line"><span>        System.out.println(username+&quot;  :  &quot;+age);</span></span>
<span class="line"><span>        return &quot;OK&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>点击查看解决方案</p><p><strong>运行没有报错</strong>。 controller方法中的username值为：null ，age值为20</p><ul><li>结论：对于简单参数来讲，请求参数名和controller方法中的形参名不一致时，无法接收到请求数据</li></ul><p><strong>解决方案</strong>：可以使用Spring提供的@RequestParam 注解完成映射</p><p>在方法形参前面加上 @RequestParam 然后通过value属性执行请求参数名，从而完成映射。代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class RequestController {</span></span>
<span class="line"><span>    // http://localhost:8080/simpleParam?name=Tom&amp;age=20</span></span>
<span class="line"><span>    // 请求参数名：name</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//springboot方式</span></span>
<span class="line"><span>@RequestMapping(&quot;/simpleParam&quot;)</span></span>
<span class="line"><span>public String simpleParam(@RequestParam(&quot;name&quot;) String username , Integer age ){</span></span>
<span class="line"><span>    System.out.println(username+&quot;  :  &quot;+age);</span></span>
<span class="line"><span>    return &quot;OK&quot;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p><strong>注意事项：</strong></p><p><strong>@RequestParam中的required属性默认为true</strong>（默认值也是true），代表该请求参数必须传递，如果不传递将报错</p><p><img src="`+d+`" alt="image-20221203130726310"></p><p>image-20221203130726310</p><p>如果该参数是<strong>可选的</strong>，可以将<strong>required属性设置为false</strong></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RequestMapping(&quot;/simpleParam&quot;)</span></span>
<span class="line"><span>public String simpleParam(@RequestParam(name = &quot;name&quot;, required = false) String username, Integer age){</span></span>
<span class="line"><span>System.out.println(username+ &quot;:&quot; + age);</span></span>
<span class="line"><span> return &quot;OK&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>作业</p><ol><li>🚩 在BookController书写一个方法接收如下请求，<code>http://localhost:8080/simpleParam?bookname=凡人修仙传&amp;count=1000</code>，并且将数据打印在控制台上</li></ol><h3 id="_1-3-实体参数🍐-🚀" tabindex="-1">1.3 实体参数🍐 🚀 <a class="header-anchor" href="#_1-3-实体参数🍐-🚀" aria-label="Permalink to &quot;1.3 实体参数🍐 🚀&quot;">​</a></h3><blockquote><p>在使用简单参数做为数据传递方式时，前端传递了多少个请求参数，后端controller方法中的形参就要书写多少个。如果请求参数比较多，通过上述的方式一个参数一个参数的接收，会比较繁琐。</p></blockquote><p>问题</p><ol><li>将多个参数数据封装到实体类对象中，需要遵循什么规则？</li></ol><p>点击查看答案</p><p><strong>请求参数名与实体类的属性名相同</strong><img src="`+m+`" alt="image-20221203131954932"></p><h4 id="_1-3-1-简单实体对象" tabindex="-1">1.3.1 简单实体对象 <a class="header-anchor" href="#_1-3-1-简单实体对象" aria-label="Permalink to &quot;1.3.1 简单实体对象&quot;">​</a></h4><p><strong>定义POJO实体类：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class User {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private Integer age;</span></span>
<span class="line"><span>//   自行补充getset方法</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String toString() {</span></span>
<span class="line"><span>        return &quot;User{&quot; +</span></span>
<span class="line"><span>                &quot;name=&#39;&quot; + name + &#39;\\&#39;&#39; +</span></span>
<span class="line"><span>                &quot;, age=&quot; + age +</span></span>
<span class="line"><span>                &#39;}&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>Controller方法：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class RequestController {</span></span>
<span class="line"><span>    //实体参数：简单实体对象</span></span>
<span class="line"><span>    @RequestMapping(&quot;/simplePojo&quot;)</span></span>
<span class="line"><span>    public String simplePojo(User user){</span></span>
<span class="line"><span>        System.out.println(user);</span></span>
<span class="line"><span>        return &quot;OK&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Postman测试：</p><ul><li>参数名和实体类属性名一致时</li></ul><p><img src="`+h+'" alt="image-20221203161246168"></p><ul><li>参数名和实体类属性名不一致时</li></ul><p><img src="'+b+'" alt="image-20221203161004349"></p><h4 id="_1-3-2-复杂实体对象" tabindex="-1">1.3.2 复杂实体对象 <a class="header-anchor" href="#_1-3-2-复杂实体对象" aria-label="Permalink to &quot;1.3.2 复杂实体对象&quot;">​</a></h4><p><strong>复杂实体对象指的是，在实体类中有一个或多个属性，也是实体对象类型的</strong>。如下：</p><ul><li>User类中有一个Address类型的属性（Address是一个实体类）</li></ul><p><img src="'+q+`" alt="image-20221203160447953"></p><p>复杂实体对象的封装，需要遵守如下规则：</p><ul><li><strong>请求参数名与形参对象属性名相同，按照对象层次结构关系即可接收嵌套实体类属性参数。</strong></li></ul><p>定义POJO实体类：</p><ul><li><strong>Address实体类</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class Address {</span></span>
<span class="line"><span>    private String province;</span></span>
<span class="line"><span>    private String city;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//   自行补充getset方法</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String toString() {</span></span>
<span class="line"><span>        return &quot;Address{&quot; +</span></span>
<span class="line"><span>                &quot;province=&#39;&quot; + province + &#39;\\&#39;&#39; +</span></span>
<span class="line"><span>                &quot;, city=&#39;&quot; + city + &#39;\\&#39;&#39; +</span></span>
<span class="line"><span>                &#39;}&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>User实体类</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class User {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private Integer age;</span></span>
<span class="line"><span>    private Address address; //地址对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//   自行补充getset方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String toString() {</span></span>
<span class="line"><span>        return &quot;User{&quot; +</span></span>
<span class="line"><span>                &quot;name=&#39;&quot; + name + &#39;\\&#39;&#39; +</span></span>
<span class="line"><span>                &quot;, age=&quot; + age +</span></span>
<span class="line"><span>                &quot;, address=&quot; + address +</span></span>
<span class="line"><span>                &#39;}&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>Controller方法：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class RequestController {</span></span>
<span class="line"><span>    //实体参数：复杂实体对象</span></span>
<span class="line"><span>    @RequestMapping(&quot;/complexPojo&quot;)</span></span>
<span class="line"><span>    public String complexPojo(User user){</span></span>
<span class="line"><span>        System.out.println(user);</span></span>
<span class="line"><span>        return &quot;OK&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Postman测试：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>localhost:8080/complexPojo?name=Tom&amp;age=10&amp;address.province=bj&amp;address.city=bj</span></span></code></pre></div><p><img src="`+v+'" alt="image-20221203162706175"></p><p>作业</p><ol><li>🚩 在BookController书写一个方法接收如下请求，<code>http://localhost:8080/simplePojo?bookname=凡人修仙传&amp;count=1000</code>，定义一个Book实体类，接收上述数据，并打印book对象的toString方法</li></ol><h3 id="_1-4-数组集合参数-❤️-✏️" tabindex="-1">1.4 数组集合参数 ❤️ ✏️ <a class="header-anchor" href="#_1-4-数组集合参数-❤️-✏️" aria-label="Permalink to &quot;1.4 数组集合参数 ❤️ ✏️&quot;">​</a></h3><blockquote><p>数组集合参数的使用场景：在HTML的表单中，有一个表单项是支持多选的(复选框)，可以提交选择的多个值。<img src="'+C+'" alt="image-20221203164114083"> 多个值是怎么提交的呢？其实多个值也是一个一个的提交。<img src="'+k+'" alt="image-20221203164944144"></p></blockquote><h4 id="_1-4-1-数组" tabindex="-1">1.4.1 数组 <a class="header-anchor" href="#_1-4-1-数组" aria-label="Permalink to &quot;1.4.1 数组&quot;">​</a></h4><p>数组参数 ：请求参数名与形参数组名称相同且请求参数为多个，定义数组类型形参即可接收参数</p><p><img src="'+_+`" alt="image-20221203190218468"></p><p>Controller方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class RequestController {</span></span>
<span class="line"><span>    //数组集合参数</span></span>
<span class="line"><span>    @RequestMapping(&quot;/arrayParam&quot;)</span></span>
<span class="line"><span>    public String arrayParam(String[] hobby){</span></span>
<span class="line"><span>        System.out.println(Arrays.toString(hobby));</span></span>
<span class="line"><span>        return &quot;OK&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Postman测试：</p><p>在前端请求时，有两种传递形式：</p><p><strong>方式一： xxxxxxxxxx?hobby=game&amp;hobby=java</strong></p><p><img src="`+S+'" alt="image-20221203191732601"></p><p><strong>方式二：xxxxxxxxxxxxx?hobby=game,java</strong> 开发实用</p><p><img src="'+y+'" alt="image-20221203191822996"></p><h4 id="_1-4-2-集合" tabindex="-1">1.4.2 集合 <a class="header-anchor" href="#_1-4-2-集合" aria-label="Permalink to &quot;1.4.2 集合&quot;">​</a></h4><p>集合参数 ：请求参数名与形参集合对象名相同且请求参数为多个，@RequestParam 绑定参数关系</p><blockquote><p>默认情况下，请求中参数名相同的多个值，是封装到数组。如果要封装到集合，要使用@RequestParam绑定参数关系</p></blockquote><p><img src="'+f+`" alt="image-20221203211640646"></p><p>Controller方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class RequestController {</span></span>
<span class="line"><span>    //数组集合参数</span></span>
<span class="line"><span>    @RequestMapping(&quot;/listParam&quot;)</span></span>
<span class="line"><span>    public String listParam(@RequestParam List&lt;String&gt; hobby){</span></span>
<span class="line"><span>        System.out.println(hobby);</span></span>
<span class="line"><span>        return &quot;OK&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Postman测试：</p><p><strong>方式一： xxxxxxxxxx?hobby=game&amp;hobby=java</strong></p><p><img src="`+P+'" alt="image-20221203212221939"></p><p><strong>方式二：xxxxxxxxxxxxx?hobby=game,java</strong> 开发实用</p><p><img src="'+R+'" alt="image-20221203212024679"></p><p>作业</p><ol><li>🚩 在BookController书写一个方法接收如下请求，<code>http://localhost:8080/arrayParam?bookname=凡人修仙传&amp;count=1000&amp;protagonist=韩立,南宫婉</code>，定义一个Book实体类，接收上述数据，并打印book对象的toString方法</li></ol><h3 id="_1-5-日期参数-✏️" tabindex="-1">1.5 日期参数 ✏️ <a class="header-anchor" href="#_1-5-日期参数-✏️" aria-label="Permalink to &quot;1.5 日期参数 ✏️&quot;">​</a></h3><blockquote><p>在一些特殊的需求中，可能会涉及到日期类型数据的封装。比如，如下需求：<img src="'+x+'" alt="image-20220826194159343"> 因为日期的格式多种多样（如：2022-12-12 10:05:45 、2022/12/12 10:05:45），那么对于日期类型的参数在进行封装的时候，需要通过@DateTimeFormat注解，以及其pattern属性来设置日期的格式。<img src="'+w+`" alt="image-20221203213120692"></p></blockquote><ul><li><strong>@DateTimeFormat</strong>注解的<strong>pattern属性</strong>中指定了哪种日期格式，前端的日期参数就必须按照指定的格式传递。</li><li>后端controller方法中，需要使用<strong>Date类型或LocalDateTime类型</strong>，来封装传递的参数。</li></ul><p>Controller方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class RequestController {</span></span>
<span class="line"><span>    //日期时间参数</span></span>
<span class="line"><span>   @RequestMapping(&quot;/dateParam&quot;)</span></span>
<span class="line"><span>    public String dateParam(@DateTimeFormat(pattern = &quot;yyyy-MM-dd HH:mm:ss&quot;) LocalDateTime updateTime){</span></span>
<span class="line"><span>        System.out.println(updateTime);</span></span>
<span class="line"><span>        return &quot;OK&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Postman测试：</p><p><img src="`+j+'" alt="image-20221203214600716"></p><p>作业</p><ol><li>🚩 在BookController书写一个方法接收如下请求，<code>http://localhost:8080/dateParam?bookname=凡人修仙传&amp;count=1000&amp;protagonist=韩立,南宫婉&amp;createTime=2022-12-12</code>，定义一个Book实体类，接收上述数据，并打印book对象的toString方法</li></ol><h3 id="_1-6-json参数-❤️-✏️" tabindex="-1">1.6 JSON参数 ❤️ ✏️ <a class="header-anchor" href="#_1-6-json参数-❤️-✏️" aria-label="Permalink to &quot;1.6 JSON参数 ❤️ ✏️&quot;">​</a></h3><blockquote><p>在前后端进行交互时，如果是比较复杂的参数，前后端通过会使用JSON格式的数据进行传输。 （JSON是开发中最常用的前后端数据交互方式 ）</p></blockquote><h4 id="_1️⃣-postman发送json格式数据" tabindex="-1">1️⃣ Postman发送JSON格式数据： <a class="header-anchor" href="#_1️⃣-postman发送json格式数据" aria-label="Permalink to &quot;1️⃣ Postman发送JSON格式数据：&quot;">​</a></h4><p><img src="'+O+`" alt="image-20221203225623337"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;韩立&quot;,</span></span>
<span class="line"><span>  &quot;age&quot;: 95,</span></span>
<span class="line"><span>  &quot;address&quot;: {</span></span>
<span class="line"><span>    &quot;province&quot;: &quot;湖南省&quot;,</span></span>
<span class="line"><span>    &quot;city&quot;: &quot;长沙市&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_2️⃣-服务端controller方法接收json格式数据" tabindex="-1">2️⃣ 服务端Controller方法接收JSON格式数据： <a class="header-anchor" href="#_2️⃣-服务端controller方法接收json格式数据" aria-label="Permalink to &quot;2️⃣ 服务端Controller方法接收JSON格式数据：&quot;">​</a></h4><ul><li>传递json格式的参数，在Controller中会使用实体类进行封装。</li><li>封装规则：<strong>JSON数据键名与形参对象属性名相同，定义POJO类型形参即可接收参数。需要使用 @RequestBody标识。</strong></li></ul><p><img src="`+E+`" alt="image-20221203230457901"></p><ul><li>@RequestBody注解 ：将JSON数据映射到形参的实体类对象中（JSON中的key和实体类中的属性名保持一致）</li></ul><p><strong>实体类：Address</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class Address {</span></span>
<span class="line"><span>    private String province;</span></span>
<span class="line"><span>    private String city;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>//省略GET , SET 方法</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>实体类：User</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class User {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private Integer age;</span></span>
<span class="line"><span>    private Address address;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //省略GET , SET 方法</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>Controller方法：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class RequestController {</span></span>
<span class="line"><span>    //JSON参数</span></span>
<span class="line"><span>    @RequestMapping(&quot;/jsonParam&quot;)</span></span>
<span class="line"><span>    public String jsonParam(@RequestBody User user){</span></span>
<span class="line"><span>        System.out.println(user);</span></span>
<span class="line"><span>        return &quot;OK&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Postman测试：</p><p><img src="`+I+`" alt="image-20221203231803000"></p><p>作业</p><ol><li>🚩 在BookController书写一个方法接收如下请求，<code>http://localhost:8080/jsonParam</code>，定义一个Book实体类，接收上述数据，并打印book对象的toString方法 参数格式：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;bookname&quot;: &quot;凡人修仙传&quot;,</span></span>
<span class="line"><span>    &quot;count&quot;: 1000,</span></span>
<span class="line"><span>    &quot;protagonist&quot;: [</span></span>
<span class="line"><span>        &quot;韩立&quot;,</span></span>
<span class="line"><span>        &quot;南宫婉&quot;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;createTime&quot;: &quot;2022-12-12&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>步骤提示💡：</p><ol><li>创建BookController,在类上添加注解</li><li>根据上述的json字符串，在pojo包中书写一个Book实体类</li><li>在BookController中书写一个方法接收json字符串，方法的返回值为Book</li><li>打印传过来的参数，并且修改bookname为计算机概念，返回book对象</li><li>启动postman 输入路径和参数，点击发送，观察idea控制台和postman的返回结果</li></ol><blockquote><p><a href="https://www.json.cn/" target="_blank" rel="noreferrer">在线Json转换网站open in new window</a></p></blockquote><h3 id="_1-7-路径参数-❤️-✏️" tabindex="-1">1.7 路径参数 ❤️ ✏️ <a class="header-anchor" href="#_1-7-路径参数-❤️-✏️" aria-label="Permalink to &quot;1.7 路径参数 ❤️ ✏️&quot;">​</a></h3><p>问题</p><ol><li>路径参数需要用到什么注解？需要遵循什么规则？</li></ol><p>点击查看</p><p>路径参数：</p><ul><li>前端：通过请求URL直接传递参数</li><li>后端：使用<code>{…}</code>来标识该路径参数，需要使用<code>@PathVariable</code>获取路径参数</li></ul><p><img src="`+A+'" alt="image-20221204001520756"></p><blockquote><p>传统的开发中请求参数是放在请求体(POST请求)传递或跟在URL后面通过<code>?key=value</code>的形式传递(GET请求)。<img src="'+B+`" alt="image-20221203235715804"> 在现在的开发中，经常还会直接在请求的URL中传递参数。例如：</p><p><a href="http://localhost:8080/user/1" target="_blank" rel="noreferrer">http://localhost:8080/user/1open in new window</a></p><p><a href="http://localhost:880/user/1/0" target="_blank" rel="noreferrer">http://localhost:880/user/1/0open in new window</a></p><p>上述的这种传递请求参数的形式呢，我们称之为：路径参数。</p></blockquote><p>学习路径参数，<strong>主要掌握在后端的controller方法中，如何接收路径参数</strong>。👈</p><p>Controller方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class RequestController {</span></span>
<span class="line"><span>    //路径参数</span></span>
<span class="line"><span>    @RequestMapping(&quot;/path/{id}&quot;)</span></span>
<span class="line"><span>    public String pathParam(@PathVariable Integer id){</span></span>
<span class="line"><span>        System.out.println(id);</span></span>
<span class="line"><span>        return &quot;OK&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Postman测试：</p><p><img src="`+T+`" alt="image-20221204002040184"></p><p>Controller方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class RequestController {</span></span>
<span class="line"><span>    //路径参数</span></span>
<span class="line"><span>    @RequestMapping(&quot;/path/{id}/{name}&quot;)</span></span>
<span class="line"><span>    public String pathParam2(@PathVariable Integer id, @PathVariable String name){</span></span>
<span class="line"><span>        System.out.println(id+ &quot; : &quot; +name);</span></span>
<span class="line"><span>        return &quot;OK&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Postman：</p><p><img src="`+D+'" alt="image-20221204002306288"></p><p>作业</p><ol><li>🚩 在BookController书写一个方法接收如下请求，<code>http://localhost:8080/books/110</code>，书写一个方法接收路径参数110，接收后打印在控制台</li></ol><p>步骤提示💡：</p><ol><li>在BookController中书写一个方法接收路径参数，无返回值</li><li>打印传过来的路径参数</li><li>启动postman 输入路径和参数，点击发送，观察idea控制台和postman的返回结果</li><li>思考：如果<code>{变量名}</code>和<code>形参中的参数名</code>不一样，会出现什么情况？ 使用代码尝试一下！</li></ol><h2 id="_2-响应-🍐" tabindex="-1">2. 响应 🍐 <a class="header-anchor" href="#_2-响应-🍐" aria-label="Permalink to &quot;2\\. 响应 🍐&quot;">​</a></h2><p>问题</p><ol><li>controller方法中的return的结果，怎么就可以响应给浏览器呢？</li></ol><p>点击查看</p><p>问题1：使用@ResponseBody注解</p><h3 id="_2-1-responsebody" tabindex="-1">2.1 @ResponseBody <a class="header-anchor" href="#_2-1-responsebody" aria-label="Permalink to &quot;2.1 @ResponseBody&quot;">​</a></h3><blockquote><p>在我们前面所编写的controller方法中，都已经设置了响应数据。</p></blockquote><p><img src="'+L+`" alt="image-20221204100656376"></p><p>@ResponseBody注解</p><ul><li>类型：方法注解、类注解</li><li>位置：书写在Controller方法上或类上</li><li>作用：将方法返回值直接响应给浏览器 <ul><li>如果返回值类型是实体对象/集合，将会转换为JSON格式后在响应给浏览器</li></ul></li></ul><p>问题</p><ol><li>我们所书写的Controller中，只在类上添加了@RestController注解、方法添加了@RequestMapping注解，并没有使用@ResponseBody注解，怎么给浏览器响应呢？</li></ol><p>点击查看</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class HelloController {</span></span>
<span class="line"><span>    @RequestMapping(&quot;/hello&quot;)</span></span>
<span class="line"><span>    public String hello(){</span></span>
<span class="line"><span>        System.out.println(&quot;Hello World ~&quot;);</span></span>
<span class="line"><span>        return &quot;Hello World ~&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>原因：在类上添加的@RestController注解，是一个组合注解。</p><ul><li>@RestController = @Controller + @ResponseBody 👈</li></ul><p>@RestController源码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Target({ElementType.TYPE})   //元注解（修饰注解的注解）</span></span>
<span class="line"><span>@Retention(RetentionPolicy.RUNTIME)  //元注解</span></span>
<span class="line"><span>@Documented    //元注解</span></span>
<span class="line"><span>@Controller   </span></span>
<span class="line"><span>@ResponseBody </span></span>
<span class="line"><span>public @interface RestController {</span></span>
<span class="line"><span>    @AliasFor(</span></span>
<span class="line"><span>        annotation = Controller.class</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    String value() default &quot;&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>结论：在类上添加@RestController就相当于添加了@ResponseBody注解。</p><ul><li>类上有@RestController注解或@ResponseBody注解时：表示当前类下所有的方法返回值做为响应数据 <ul><li>方法的返回值，如果是一个POJO对象或集合时，会先转换为JSON格式，在响应给浏览器</li></ul></li></ul><p>下面我们来测试下响应数据：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class ResponseController {</span></span>
<span class="line"><span>    //响应字符串</span></span>
<span class="line"><span>    @RequestMapping(&quot;/hello&quot;)</span></span>
<span class="line"><span>    public String hello(){</span></span>
<span class="line"><span>        System.out.println(&quot;Hello World ~&quot;);</span></span>
<span class="line"><span>        return &quot;Hello World ~&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //响应实体对象</span></span>
<span class="line"><span>    @RequestMapping(&quot;/getAddr&quot;)</span></span>
<span class="line"><span>    public Address getAddr(){</span></span>
<span class="line"><span>        Address addr = new Address();//创建实体类对象</span></span>
<span class="line"><span>        addr.setProvince(&quot;广东&quot;);</span></span>
<span class="line"><span>        addr.setCity(&quot;深圳&quot;);</span></span>
<span class="line"><span>        return addr;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //响应集合数据</span></span>
<span class="line"><span>    @RequestMapping(&quot;/listAddr&quot;)</span></span>
<span class="line"><span>    public List&lt;Address&gt; listAddr(){</span></span>
<span class="line"><span>        List&lt;Address&gt; list = new ArrayList&lt;&gt;();//集合对象</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Address addr = new Address();</span></span>
<span class="line"><span>        addr.setProvince(&quot;广东&quot;);</span></span>
<span class="line"><span>        addr.setCity(&quot;深圳&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Address addr2 = new Address();</span></span>
<span class="line"><span>        addr2.setProvince(&quot;陕西&quot;);</span></span>
<span class="line"><span>        addr2.setCity(&quot;西安&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        list.add(addr);</span></span>
<span class="line"><span>        list.add(addr2);</span></span>
<span class="line"><span>        return list;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在服务端响应了一个对象或者集合，那私前端获取到的数据是什么样子的呢？我们使用postman发送请求来测试下。测试效果如下：</p><p><img src="`+M+'" alt="image-20221204172339375"></p><p><img src="'+J+'" alt="image-20221204172705426"></p><h3 id="_2-2-统一响应结果-🍐-❤️" tabindex="-1">2.2 统一响应结果 🍐 ❤️ <a class="header-anchor" href="#_2-2-统一响应结果-🍐-❤️" aria-label="Permalink to &quot;2.2 统一响应结果 🍐 ❤️&quot;">​</a></h3><blockquote><p>问题：Controller方法中，返回值各种各样，没有任何的规范（如下图）<img src="'+H+'" alt="image-20221204174052622"></p></blockquote><p>如果我们开发一个大型项目，项目中controller方法将成千上万，使用上述方式将造成整个项目难以维护。那在真实的项目开发中是什么样子的呢？</p><p>在真实的项目开发中，无论是哪种方法，我们都会定义一个统一的返回结果。</p><p><strong>解决方案如下</strong>：</p><p><img src="'+U+`" alt="image-20221204174537686"></p><blockquote><p>前端：只需要按照统一格式的返回结果进行解析(仅一种解析方案)，就可以拿到数据。</p></blockquote><p>统一的返回结果使用类来描述，在这个结果中包含：</p><ul><li>响应状态码：当前请求是成功，还是失败</li><li>状态码信息：给页面的提示信息</li><li>返回的数据：给前端响应的数据（字符串、对象、集合）</li></ul><p>点击查看实体类Result以及测试代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class Result {</span></span>
<span class="line"><span>    private Integer code;//响应码，1 代表成功; 0 代表失败</span></span>
<span class="line"><span>    private String msg;  //响应码 描述字符串</span></span>
<span class="line"><span>    private Object data; //返回的数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Result() { }</span></span>
<span class="line"><span>    public Result(Integer code, String msg, Object data) {</span></span>
<span class="line"><span>        this.code = code;</span></span>
<span class="line"><span>        this.msg = msg;</span></span>
<span class="line"><span>        this.data = data;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Integer getCode() {</span></span>
<span class="line"><span>        return code;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setCode(Integer code) {</span></span>
<span class="line"><span>        this.code = code;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getMsg() {</span></span>
<span class="line"><span>        return msg;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setMsg(String msg) {</span></span>
<span class="line"><span>        this.msg = msg;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Object getData() {</span></span>
<span class="line"><span>        return data;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setData(Object data) {</span></span>
<span class="line"><span>        this.data = data;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //增删改 成功响应(不需要给前端返回数据)</span></span>
<span class="line"><span>    public static Result success(){</span></span>
<span class="line"><span>        return new Result(1,&quot;success&quot;,null);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //查询 成功响应(把查询结果做为返回数据响应给前端)</span></span>
<span class="line"><span>    public static Result success(Object data){</span></span>
<span class="line"><span>        return new Result(1,&quot;success&quot;,data);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //失败响应</span></span>
<span class="line"><span>    public static Result error(String msg){</span></span>
<span class="line"><span>        return new Result(0,msg,null);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>改造Controller：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class ResponseController { </span></span>
<span class="line"><span>    //响应统一格式的结果</span></span>
<span class="line"><span>    @RequestMapping(&quot;/hello&quot;)</span></span>
<span class="line"><span>    public Result hello(){</span></span>
<span class="line"><span>        System.out.println(&quot;Hello World ~&quot;);</span></span>
<span class="line"><span>        //return new Result(1,&quot;success&quot;,&quot;Hello World ~&quot;);</span></span>
<span class="line"><span>        return Result.success(&quot;Hello World ~&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //响应统一格式的结果</span></span>
<span class="line"><span>    @RequestMapping(&quot;/getAddr&quot;)</span></span>
<span class="line"><span>    public Result getAddr(){</span></span>
<span class="line"><span>        Address addr = new Address();</span></span>
<span class="line"><span>        addr.setProvince(&quot;广东&quot;);</span></span>
<span class="line"><span>        addr.setCity(&quot;深圳&quot;);</span></span>
<span class="line"><span>        return Result.success(addr);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //响应统一格式的结果</span></span>
<span class="line"><span>    @RequestMapping(&quot;/listAddr&quot;)</span></span>
<span class="line"><span>    public Result listAddr(){</span></span>
<span class="line"><span>        List&lt;Address&gt; list = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Address addr = new Address();</span></span>
<span class="line"><span>        addr.setProvince(&quot;广东&quot;);</span></span>
<span class="line"><span>        addr.setCity(&quot;深圳&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Address addr2 = new Address();</span></span>
<span class="line"><span>        addr2.setProvince(&quot;陕西&quot;);</span></span>
<span class="line"><span>        addr2.setCity(&quot;西安&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        list.add(addr);</span></span>
<span class="line"><span>        list.add(addr2);</span></span>
<span class="line"><span>        return Result.success(list);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>使用Postman测试：</p><p><img src="`+N+'" alt="image-20221204180946963"></p><p><img src="'+G+`" alt="image-20221204180744084"></p><p>作业</p><ol><li>🚩 在BookController书写一个方法接收如下请求，<code>http://localhost:8080/jsonParam</code>，定义一个Book实体类，接收上述数据， 并且将count修改为888，然后返回User对象的JSON字符串给浏览器.</li><li>🚩 在上一个需求前提下，将返回的数据使用Result对象封装后，再次返回给前端 请求参数格式：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;bookname&quot;: &quot;凡人修仙传&quot;,</span></span>
<span class="line"><span>    &quot;count&quot;: 1000,</span></span>
<span class="line"><span>    &quot;protagonist&quot;: [</span></span>
<span class="line"><span>        &quot;韩立&quot;,</span></span>
<span class="line"><span>        &quot;南宫婉&quot;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;createTime&quot;: &quot;2022-12-12&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>步骤提示💡：</p><ol><li>找到springboot-web-req-resp模块下的ResponseController，观察各个方法的返回值类型</li><li>导入Result统一结果类到pojo中</li><li>修改ResponseController各个方法的返回值为Result</li><li>启动postman 输入路径和参数，点击发送，观察idea控制台和postman的返回结果</li></ol><blockquote><p><a href="https://www.json.cn/" target="_blank" rel="noreferrer">在线Json转换网站open in new window</a></p></blockquote><h3 id="_2-3-案例-✏️-❤️" tabindex="-1">2.3 案例 ✏️ ❤️ <a class="header-anchor" href="#_2-3-案例-✏️-❤️" aria-label="Permalink to &quot;2.3 案例 ✏️ ❤️&quot;">​</a></h3><p>下面我们通过一个案例，来加强对请求响应的学习。🎯</p><h4 id="_2-3-1-需求说明" tabindex="-1">2.3.1 需求说明 <a class="header-anchor" href="#_2-3-1-需求说明" aria-label="Permalink to &quot;2.3.1 需求说明&quot;">​</a></h4><p>需求：加载并解析xml文件中的数据，完成数据处理，并在页面展示</p><p><img src="`+K+`" alt="image-20221204185928260"></p><ul><li>获取员工数据，返回统一响应结果，在页面渲染展示</li></ul><p>⚠️ 注意：数据为假数据</p><h4 id="_2-3-2-准备工作" tabindex="-1">2.3.2 准备工作 <a class="header-anchor" href="#_2-3-2-准备工作" aria-label="Permalink to &quot;2.3.2 准备工作&quot;">​</a></h4><p><strong>案例准备：</strong></p><ul><li><p>1️⃣ <strong>XML文件</strong></p><ul><li>已经准备好(emp.xml)，直接导入进来，放在 src/main/resources目录下</li></ul></li><li><p>2️⃣ <strong>工具类</strong></p><ul><li>已经准备好解析XML文件的工具类，无需自己实现</li><li>直接在创建一个包 com.itheima.utils ，然后将工具类拷贝进来</li></ul></li><li><p>3️⃣ <strong>前端页面资源</strong></p><ul><li>已经准备好，直接拷贝进来，放在src/main/resources下的static目录下</li></ul></li></ul><p>静态资源位置</p><p>Springboot项目的静态资源(html，css，js等前端资源)默认存放目录为：classpath:/static 、 classpath:/public、 classpath:/resources</p><blockquote><p>在SpringBoot项目中，静态资源默认可以存放的目录：</p><ul><li>classpath:/static/</li><li>classpath:/public/</li><li>classpath:/resources/</li><li>classpath:/META-INF/resources/</li></ul><p>classpath：</p><ul><li>代表的是类路径，在maven的项目中，其实指的就是 src/main/resources 或者 src/main/java，但是java目录是存放java代码的，所以相关的配置文件及静态资源文档，就放在 src/main/resources下。</li></ul></blockquote><p>点击查看XmlParserUtils.java代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>package com.itheima.utils;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.dom4j.Document;</span></span>
<span class="line"><span>import org.dom4j.Element;</span></span>
<span class="line"><span>import org.dom4j.io.SAXReader;</span></span>
<span class="line"><span>import java.io.File;</span></span>
<span class="line"><span>import java.lang.reflect.Constructor;</span></span>
<span class="line"><span>import java.lang.reflect.Field;</span></span>
<span class="line"><span>import java.util.ArrayList;</span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class XmlParserUtils {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static &lt;T&gt; List&lt;T&gt; parse(String file , Class&lt;T&gt; targetClass)  {</span></span>
<span class="line"><span>        ArrayList&lt;T&gt; list = new ArrayList&lt;T&gt;(); //封装解析出来的数据</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            //1.获取一个解析器对象</span></span>
<span class="line"><span>            SAXReader saxReader = new SAXReader();</span></span>
<span class="line"><span>            //2.利用解析器把xml文件加载到内存中,并返回一个文档对象</span></span>
<span class="line"><span>            Document document = saxReader.read(new File(file));</span></span>
<span class="line"><span>            //3.获取到根标签</span></span>
<span class="line"><span>            Element rootElement = document.getRootElement();</span></span>
<span class="line"><span>            //4.通过根标签来获取 user 标签</span></span>
<span class="line"><span>            List&lt;Element&gt; elements = rootElement.elements(&quot;emp&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //5.遍历集合,得到每一个 user 标签</span></span>
<span class="line"><span>            for (Element element : elements) {</span></span>
<span class="line"><span>                //获取 name 属性</span></span>
<span class="line"><span>                String name = element.element(&quot;name&quot;).getText();</span></span>
<span class="line"><span>                //获取 age 属性</span></span>
<span class="line"><span>                String age = element.element(&quot;age&quot;).getText();</span></span>
<span class="line"><span>                //获取 image 属性</span></span>
<span class="line"><span>                String image = element.element(&quot;image&quot;).getText();</span></span>
<span class="line"><span>                //获取 gender 属性</span></span>
<span class="line"><span>                String gender = element.element(&quot;gender&quot;).getText();</span></span>
<span class="line"><span>                //获取 job 属性</span></span>
<span class="line"><span>                String job = element.element(&quot;job&quot;).getText();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                //组装数据</span></span>
<span class="line"><span>                Constructor&lt;T&gt; constructor = targetClass.getDeclaredConstructor(String.class, Integer.class, String.class, String.class, String.class);</span></span>
<span class="line"><span>                constructor.setAccessible(true);</span></span>
<span class="line"><span>                T object = constructor.newInstance(name, Integer.parseInt(age), image, gender, job);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                list.add(object);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return list;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>点击查看emp.xml代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span></span>
<span class="line"><span>&lt;emps&gt;</span></span>
<span class="line"><span>    &lt;emp&gt;</span></span>
<span class="line"><span>        &lt;name&gt;金毛狮王&lt;/name&gt;</span></span>
<span class="line"><span>        &lt;age&gt;55&lt;/age&gt;</span></span>
<span class="line"><span>        &lt;image&gt;https://web-framework.oss-cn-hangzhou.aliyuncs.com/web/1.jpg&lt;/image&gt;</span></span>
<span class="line"><span>        &lt;!-- 1: 男, 2: 女 --&gt;</span></span>
<span class="line"><span>        &lt;gender&gt;1&lt;/gender&gt;</span></span>
<span class="line"><span>        &lt;!-- 1: 讲师, 2: 班主任 , 3: 就业指导 --&gt;</span></span>
<span class="line"><span>        &lt;job&gt;1&lt;/job&gt;</span></span>
<span class="line"><span>    &lt;/emp&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;emp&gt;</span></span>
<span class="line"><span>        &lt;name&gt;白眉鹰王&lt;/name&gt;</span></span>
<span class="line"><span>        &lt;age&gt;65&lt;/age&gt;</span></span>
<span class="line"><span>        &lt;image&gt;https://web-framework.oss-cn-hangzhou.aliyuncs.com/web/2.jpg&lt;/image&gt;</span></span>
<span class="line"><span>        &lt;gender&gt;1&lt;/gender&gt;</span></span>
<span class="line"><span>        &lt;job&gt;1&lt;/job&gt;</span></span>
<span class="line"><span>    &lt;/emp&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;emp&gt;</span></span>
<span class="line"><span>        &lt;name&gt;青翼蝠王&lt;/name&gt;</span></span>
<span class="line"><span>        &lt;age&gt;45&lt;/age&gt;</span></span>
<span class="line"><span>        &lt;image&gt;https://web-framework.oss-cn-hangzhou.aliyuncs.com/web/3.jpg&lt;/image&gt;</span></span>
<span class="line"><span>        &lt;gender&gt;1&lt;/gender&gt;</span></span>
<span class="line"><span>        &lt;job&gt;2&lt;/job&gt;</span></span>
<span class="line"><span>    &lt;/emp&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;emp&gt;</span></span>
<span class="line"><span>        &lt;name&gt;紫衫龙王&lt;/name&gt;</span></span>
<span class="line"><span>        &lt;age&gt;38&lt;/age&gt;</span></span>
<span class="line"><span>        &lt;image&gt;https://web-framework.oss-cn-hangzhou.aliyuncs.com/web/4.jpg&lt;/image&gt;</span></span>
<span class="line"><span>        &lt;gender&gt;2&lt;/gender&gt;</span></span>
<span class="line"><span>        &lt;job&gt;3&lt;/job&gt;</span></span>
<span class="line"><span>    &lt;/emp&gt;</span></span>
<span class="line"><span>&lt;/emps&gt;</span></span></code></pre></div><p>点击查看emp实体类代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>package com.itheima.pojo;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Emp {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private Integer age;</span></span>
<span class="line"><span>    private String image;</span></span>
<span class="line"><span>    private String gender;</span></span>
<span class="line"><span>    private String job;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Emp() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Emp(String name, Integer age, String image, String gender, String job) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>        this.age = age;</span></span>
<span class="line"><span>        this.image = image;</span></span>
<span class="line"><span>        this.gender = gender;</span></span>
<span class="line"><span>        this.job = job;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getName() {</span></span>
<span class="line"><span>        return name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setName(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Integer getAge() {</span></span>
<span class="line"><span>        return age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setAge(Integer age) {</span></span>
<span class="line"><span>        this.age = age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getImage() {</span></span>
<span class="line"><span>        return image;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setImage(String image) {</span></span>
<span class="line"><span>        this.image = image;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getGender() {</span></span>
<span class="line"><span>        return gender;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setGender(String gender) {</span></span>
<span class="line"><span>        this.gender = gender;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getJob() {</span></span>
<span class="line"><span>        return job;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setJob(String job) {</span></span>
<span class="line"><span>        this.job = job;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String toString() {</span></span>
<span class="line"><span>        return &quot;Emp{&quot; +</span></span>
<span class="line"><span>                &quot;name=&#39;&quot; + name + &#39;\\&#39;&#39; +</span></span>
<span class="line"><span>                &quot;, age=&quot; + age +</span></span>
<span class="line"><span>                &quot;, image=&#39;&quot; + image + &#39;\\&#39;&#39; +</span></span>
<span class="line"><span>                &quot;, gender=&#39;&quot; + gender + &#39;\\&#39;&#39; +</span></span>
<span class="line"><span>                &quot;, job=&#39;&quot; + job + &#39;\\&#39;&#39; +</span></span>
<span class="line"><span>                &#39;}&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_2-3-3-实现步骤" tabindex="-1">2.3.3 实现步骤 <a class="header-anchor" href="#_2-3-3-实现步骤" aria-label="Permalink to &quot;2.3.3 实现步骤&quot;">​</a></h4><ol><li><p>在pom.xml文件中引入dom4j的依赖，用于解析XML文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.dom4j&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;dom4j&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;2.1.3&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div></li><li><p>引入资料中提供的：解析XML的工具类XMLParserUtils、实体类Emp、XML文件emp.xml</p><p><img src="`+W+'" alt="image-20221204182828547"></p><p>image-20221204182828547</p></li><li><p>引入资料中提供的静态页面文件，放在resources下的static目录下</p><p><img src="'+F+'" alt="image-20221204183044848"></p><p>image-20221204183044848</p></li><li><p>创建EmpController类，编写Controller程序，处理请求，响应数据</p><p><img src="'+V+`" alt="image-20221204184313822"></p><p>image-20221204184313822</p></li></ol><h4 id="_2-3-4-代码实现和测试" tabindex="-1">2.3.4 代码实现和测试 <a class="header-anchor" href="#_2-3-4-代码实现和测试" aria-label="Permalink to &quot;2.3.4 代码实现和测试&quot;">​</a></h4><p>Contriller代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class EmpController {</span></span>
<span class="line"><span>    @RequestMapping(&quot;/listEmp&quot;)</span></span>
<span class="line"><span>    public Result list(){</span></span>
<span class="line"><span>        //1. 加载并解析emp.xml</span></span>
<span class="line"><span>        String file = this.getClass().getClassLoader().getResource(&quot;emp.xml&quot;).getFile();</span></span>
<span class="line"><span>        //System.out.println(file);</span></span>
<span class="line"><span>        List&lt;Emp&gt; empList = XmlParserUtils.parse(file, Emp.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //2. 对数据进行转换处理 - gender, job</span></span>
<span class="line"><span>        empList.stream().forEach(emp -&gt; {</span></span>
<span class="line"><span>            //处理 gender 1: 男, 2: 女</span></span>
<span class="line"><span>            String gender = emp.getGender();</span></span>
<span class="line"><span>            if(&quot;1&quot;.equals(gender)){</span></span>
<span class="line"><span>                emp.setGender(&quot;男&quot;);</span></span>
<span class="line"><span>            }else if(&quot;2&quot;.equals(gender)){</span></span>
<span class="line"><span>                emp.setGender(&quot;女&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //处理job - 1: 讲师, 2: 班主任 , 3: 就业指导</span></span>
<span class="line"><span>            String job = emp.getJob();</span></span>
<span class="line"><span>            if(&quot;1&quot;.equals(job)){</span></span>
<span class="line"><span>                emp.setJob(&quot;讲师&quot;);</span></span>
<span class="line"><span>            }else if(&quot;2&quot;.equals(job)){</span></span>
<span class="line"><span>                emp.setJob(&quot;班主任&quot;);</span></span>
<span class="line"><span>            }else if(&quot;3&quot;.equals(job)){</span></span>
<span class="line"><span>                emp.setJob(&quot;就业指导&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        //3. 响应数据</span></span>
<span class="line"><span>        return Result.success(empList);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>统一返回结果实体类：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class Result {</span></span>
<span class="line"><span>    private Integer code ;//1 成功 , 0 失败</span></span>
<span class="line"><span>    private String msg; //提示信息</span></span>
<span class="line"><span>    private Object data; //数据 date</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Result() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public Result(Integer code, String msg, Object data) {</span></span>
<span class="line"><span>        this.code = code;</span></span>
<span class="line"><span>        this.msg = msg;</span></span>
<span class="line"><span>        this.data = data;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public Integer getCode() {</span></span>
<span class="line"><span>        return code;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void setCode(Integer code) {</span></span>
<span class="line"><span>        this.code = code;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public String getMsg() {</span></span>
<span class="line"><span>        return msg;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void setMsg(String msg) {</span></span>
<span class="line"><span>        this.msg = msg;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public Object getData() {</span></span>
<span class="line"><span>        return data;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void setData(Object data) {</span></span>
<span class="line"><span>        this.data = data;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public static Result success(Object data){</span></span>
<span class="line"><span>        return new Result(1, &quot;success&quot;, data);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public static Result success(){</span></span>
<span class="line"><span>        return new Result(1, &quot;success&quot;, null);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public static Result error(String msg){</span></span>
<span class="line"><span>        return new Result(0, msg, null);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>技巧</p><ol><li>springboot项目的前端静态资源是放在 <code>resources</code> 下的<code>static</code>文件夹中</li><li><code>resources</code> 的资源经过编译后，在target文件下的clases文件夹中（常常说的classpath、类路径）</li></ol><p>作业</p><ol><li>🚩 独自完成上述案例。</li></ol><p>步骤提示💡：</p><ol><li>按照准备工作的提示，将文件导入进工程</li><li>书写Controller逻辑，并使用Postman测试接口</li><li>打开浏览器输入<code>http://localhost:8080/emp.html</code> 观察是否成功加载</li></ol><h4 id="_2-3-6-问题分析" tabindex="-1">2.3.6 问题分析 <a class="header-anchor" href="#_2-3-6-问题分析" aria-label="Permalink to &quot;2.3.6 问题分析&quot;">​</a></h4><p>上述案例的功能，我们虽然已经实现，但是呢，我们会发现案例中：<strong>解析XML数据，获取数据的代码，处理数据的逻辑的代码，给页面响应的代码全部都堆积在一起了，全部都写在controller方法中了。</strong> 耦合严重</p><p><img src="`+X+'" alt="image-20221204190712411"></p><p>当前程序的这个业务逻辑还是比较简单的，如果业务逻辑再稍微复杂一点，我们会看到Controller方法的代码量就很大了难以维护。</p><p>注意</p><ul><li><p>当我们要修改操作数据部分的代码，需要改动Controller</p></li><li><p>当我们要完善逻辑处理部分的代码，需要改动Controller</p></li><li><p>当我们需要修改数据响应的代码，还是需要改动Controller</p></li></ul><p>这样呢，就会造成我们整个工程代码的复用性比较差，而且代码难以维护。 那如何解决这个问题呢？其实在现在的开发中，有非常成熟的解决思路，那就是分层开发。</p><h2 id="_3-分层解耦" tabindex="-1">3. 分层解耦 <a class="header-anchor" href="#_3-分层解耦" aria-label="Permalink to &quot;3\\. 分层解耦&quot;">​</a></h2><h3 id="_3-1-三层架构-🍐" tabindex="-1">3.1 三层架构 🍐 <a class="header-anchor" href="#_3-1-三层架构-🍐" aria-label="Permalink to &quot;3.1 三层架构 🍐&quot;">​</a></h3><p>三层架构</p><p>单一职责原则: <strong>在进行程序设计以及程序开发时，尽可能让每一个接口、类、方法的职责更单一些。</strong></p><blockquote><p>单一职责原则：一个类或一个方法，就只做一件事情，只管一块功能。</p><p>这样就可以让类、接口、方法的复杂度更低，可读性更强，扩展性更好，也更利用后期的维护。</p></blockquote><p>我们之前开发的程序呢，并不满足单一职责原则。<a href="http://image.yangeit.cn/i/2023/06/14/image-20221204191650390.png" target="_blank" rel="noreferrer">点击查看之前的程序open in new window</a> 👈</p><hr><p><strong>上述案例的处理逻辑，从组成上看可以分为三个部分：</strong></p><ul><li><strong>数据访问</strong>：负责业务数据的维护操作，包括增、删、改、查等操作。</li><li><strong>逻辑处理</strong>：负责业务逻辑处理的代码。</li><li><strong>请求处理、响应数据</strong>：负责，接收页面的请求，给页面响应数据。</li></ul><p>如果你理解了单一职责原则和三层架构的好处，那么接下来，实操一波，<strong>将理论落地吧！！</strong><img src="'+Q+'" alt="image"></p><p>三层架构实操</p><p><strong>使用三层架构思想，来改造下之前的程序：</strong></p><ul><li>控制层包名：<code>xxxx.controller</code></li><li>业务逻辑层包名：<code>xxxx.service</code></li><li>数据访问层包名：<code>xxxx.dao</code></li></ul><p><img src="'+Y+`" alt="三层架构包结构"></p><p>三层架构包结构</p><p><strong>控制层：</strong> 接收前端发送的请求，对请求进行处理，并响应数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class EmpController {</span></span>
<span class="line"><span>    //业务层对象</span></span>
<span class="line"><span>    private EmpService empService = new EmpServiceA();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @RequestMapping(&quot;/listEmp&quot;)</span></span>
<span class="line"><span>    public Result list(){</span></span>
<span class="line"><span>        //1. 调用service层, 获取数据</span></span>
<span class="line"><span>        List&lt;Emp&gt; empList = empService.listEmp();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //3. 响应数据</span></span>
<span class="line"><span>        return Result.success(empList);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>业务逻辑层：</strong> 处理具体的业务逻辑</p><ul><li><strong>业务接口</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//业务逻辑接口（制定业务标准）</span></span>
<span class="line"><span>public interface EmpService {</span></span>
<span class="line"><span>    //获取员工列表</span></span>
<span class="line"><span>    public List&lt;Emp&gt; listEmp();</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>业务实现类</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//业务逻辑实现类（按照业务标准实现）</span></span>
<span class="line"><span>public class EmpServiceA implements EmpService {</span></span>
<span class="line"><span>    //dao层对象</span></span>
<span class="line"><span>    private EmpDao empDao = new EmpDaoA();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public List&lt;Emp&gt; listEmp() {</span></span>
<span class="line"><span>        //1. 调用dao, 获取数据</span></span>
<span class="line"><span>        List&lt;Emp&gt; empList = empDao.listEmp();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //2. 对数据进行转换处理 - gender, job</span></span>
<span class="line"><span>        empList.stream().forEach(emp -&gt; {</span></span>
<span class="line"><span>            //处理 gender 1: 男, 2: 女</span></span>
<span class="line"><span>            String gender = emp.getGender();</span></span>
<span class="line"><span>            if(&quot;1&quot;.equals(gender)){</span></span>
<span class="line"><span>                emp.setGender(&quot;男&quot;);</span></span>
<span class="line"><span>            }else if(&quot;2&quot;.equals(gender)){</span></span>
<span class="line"><span>                emp.setGender(&quot;女&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //处理job - 1: 讲师, 2: 班主任 , 3: 就业指导</span></span>
<span class="line"><span>            String job = emp.getJob();</span></span>
<span class="line"><span>            if(&quot;1&quot;.equals(job)){</span></span>
<span class="line"><span>                emp.setJob(&quot;讲师&quot;);</span></span>
<span class="line"><span>            }else if(&quot;2&quot;.equals(job)){</span></span>
<span class="line"><span>                emp.setJob(&quot;班主任&quot;);</span></span>
<span class="line"><span>            }else if(&quot;3&quot;.equals(job)){</span></span>
<span class="line"><span>                emp.setJob(&quot;就业指导&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        return empList;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>数据访问层：</strong> 负责数据的访问操作，包含数据的增、删、改、查</p><ul><li>数据访问接口</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//数据访问层接口（制定标准）</span></span>
<span class="line"><span>public interface EmpDao {</span></span>
<span class="line"><span>    //获取员工列表数据</span></span>
<span class="line"><span>    public List&lt;Emp&gt; listEmp();</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>数据访问实现类</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//数据访问实现类</span></span>
<span class="line"><span>public class EmpDaoA implements EmpDao {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public List&lt;Emp&gt; listEmp() {</span></span>
<span class="line"><span>        //1. 加载并解析emp.xml</span></span>
<span class="line"><span>        String file = this.getClass().getClassLoader().getResource(&quot;emp.xml&quot;).getFile();</span></span>
<span class="line"><span>        System.out.println(file);</span></span>
<span class="line"><span>        List&lt;Emp&gt; empList = XmlParserUtils.parse(file, Emp.class);</span></span>
<span class="line"><span>        return empList;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+z+'" alt="image-20221204201342490"></p><p>作业</p><ol><li>🚩 能够流畅的说出三层架构分为哪三层，以及每一层的作用，还有三层架构的好处</li></ol><h3 id="_3-2-分层解耦-🍐❤️" tabindex="-1">3.2 分层解耦 🍐❤️ <a class="header-anchor" href="#_3-2-分层解耦-🍐❤️" aria-label="Permalink to &quot;3.2 分层解耦 🍐❤️&quot;">​</a></h3><p>分层解耦</p><p>目标：解耦(解除耦合)</p><p><strong>如果你理解了左边的耦合问题以及解耦的意义，那么接下来学习如何解耦</strong> 👇</p><h4 id="解耦思路-👇" tabindex="-1">解耦思路 👇 <a class="header-anchor" href="#解耦思路-👇" aria-label="Permalink to &quot;解耦思路 👇&quot;">​</a></h4><p>之前我们在编写代码时，需要什么对象，就直接new一个就可以了。 这种做法呢，层与层之间代码就耦合了，当service层的实现变了之后， 我们还需要修改controller层的代码。</p><p><img src="'+Z+'" alt="image-20221204204916033"></p><p>**步骤：**👇</p><ul><li><p><strong>首先不能在EmpController中使用new对象。代码如图解：</strong><a href="http://image.yangeit.cn/i/2023/06/14/image-20221204205328069.png" target="_blank" rel="noreferrer">点击查看代码图解open in new window</a>👈</p></li><li><p>此时，就存在另一个问题了，不能new，就意味着没有业务层对象（程序运行就报错），怎么办呢？</p></li></ul><p><strong>解决思路</strong></p><ul><li>提供一个<strong>容器</strong>，容器中存储一些对象(例：EmpService对象)</li><li>controller程序<strong>自动从容器中获取</strong>EmpService类型的对象</li></ul><p>我们想要实现上述解耦操作，就涉及到Spring中的两个核心概念：❤️ ❤️</p><ul><li><p><strong>控制反转：</strong> Inversion Of Control，简称IOC。对象的创建控制权由程序自身转移到外部（容器），这种思想称为控制反转。</p><blockquote><p>对象的创建权由程序员主动创建转移到容器(由容器创建、管理对象)。这个容器称为：IOC容器或Spring容器</p></blockquote></li><li><p><strong>依赖注入：</strong> Dependency Injection，简称DI。容器为应用程序提供运行时，所依赖的资源，称之为依赖注入。</p><blockquote><p>程序运行时需要某个资源，此时容器就为其提供这个资源。</p><p>例：EmpController程序运行时需要EmpService对象，Spring容器就为其提供并注入EmpService对象</p></blockquote></li></ul><p>IOC容器中创建、管理的对象，称之为：bean对象</p><p>课堂作业</p><p>🚩 能够流利的说出软件设计原则，并且说出解耦的思路中涉及的2个概念</p><h3 id="_3-3-ioc-di入门-🍐" tabindex="-1">3.3 IOC&amp;DI入门 🍐 <a class="header-anchor" href="#_3-3-ioc-di入门-🍐" aria-label="Permalink to &quot;3.3 IOC&amp;DI入门 🍐&quot;">​</a></h3><p>IOC&amp;DI入门</p><p>任务：完成Controller层、Service层、Dao层的代码解耦</p><ul><li><p><strong>控制反转：</strong> Inversion Of Control，简称IOC。对象的创建控制权由程序自身转移到外部（容器），这种思想称为控制反转。</p><blockquote><p>对象的创建权由程序员主动创建转移到容器(由容器创建、管理对象)。这个容器称为：IOC容器或Spring容器</p></blockquote></li></ul><p><strong>注解：@Component</strong> 👈 ❤️</p><blockquote><p>IOC容器中创建、管理的对象，称之为：bean对象</p></blockquote><ul><li><p><strong>依赖注入：</strong> Dependency Injection，简称DI。容器为应用程序提供运行时，所依赖的资源，称之为依赖注入。</p><blockquote><p>程序运行时需要某个资源，此时容器就为其提供这个资源。</p><p>例：EmpController程序运行时需要EmpService对象，Spring容器就为其提供并注入EmpService对象</p></blockquote></li></ul><p><strong>注解： @Autowired</strong> 👈 ❤️</p><p>代码操作步骤</p><ol><li>删除Controller层、Service层中new对象的代码</li><li>Service层及Dao层的实现类，交给IOC容器管理</li><li>为Controller及Service注入运行时依赖的对象 <ul><li>Controller程序中注入依赖的Service层对象</li><li>Service程序中注入依赖的Dao层对象</li></ul></li></ol><p><a href="SpringBootWeb%E8%AF%B7%E6%B1%82%E5%93%8D%E5%BA%94/image01.png"></a></p><p><strong>第1步：删除Controller层、Service层中new对象的代码</strong></p><p><img src="'+$+`" alt="image-20221204212807207"></p><p>**Controller层代码：**👇</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class EmpController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired //运行时,从IOC容器中获取该类型对象,赋值给该变量</span></span>
<span class="line"><span>    private EmpService empService ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @RequestMapping(&quot;/listEmp&quot;)</span></span>
<span class="line"><span>    public Result list(){</span></span>
<span class="line"><span>        //1. 调用service, 获取数据</span></span>
<span class="line"><span>        List&lt;Emp&gt; empList = empService.listEmp();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //3. 响应数据</span></span>
<span class="line"><span>        return Result.success(empList);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>第2步：Service层及Dao层的实现类，交给IOC容器管理</strong></p><ul><li>使用Spring提供的注解：@Component ，就可以实现类交给IOC容器管理</li></ul><p><img src="`+ss+`" alt="image-20221204213328034"></p><p><strong>Service层代码：</strong> 👇</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Component //将当前对象交给IOC容器管理,成为IOC容器的bean</span></span>
<span class="line"><span>public class EmpServiceA implements EmpService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired //运行时,从IOC容器中获取该类型对象,赋值给该变量</span></span>
<span class="line"><span>    private EmpDao empDao ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public List&lt;Emp&gt; listEmp() {</span></span>
<span class="line"><span>        //1. 调用dao, 获取数据</span></span>
<span class="line"><span>        List&lt;Emp&gt; empList = empDao.listEmp();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //2. 对数据进行转换处理 - gender, job</span></span>
<span class="line"><span>        empList.stream().forEach(emp -&gt; {</span></span>
<span class="line"><span>            //处理 gender 1: 男, 2: 女</span></span>
<span class="line"><span>            String gender = emp.getGender();</span></span>
<span class="line"><span>            if(&quot;1&quot;.equals(gender)){</span></span>
<span class="line"><span>                emp.setGender(&quot;男&quot;);</span></span>
<span class="line"><span>            }else if(&quot;2&quot;.equals(gender)){</span></span>
<span class="line"><span>                emp.setGender(&quot;女&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //处理job - 1: 讲师, 2: 班主任 , 3: 就业指导</span></span>
<span class="line"><span>            String job = emp.getJob();</span></span>
<span class="line"><span>            if(&quot;1&quot;.equals(job)){</span></span>
<span class="line"><span>                emp.setJob(&quot;讲师&quot;);</span></span>
<span class="line"><span>            }else if(&quot;2&quot;.equals(job)){</span></span>
<span class="line"><span>                emp.setJob(&quot;班主任&quot;);</span></span>
<span class="line"><span>            }else if(&quot;3&quot;.equals(job)){</span></span>
<span class="line"><span>                emp.setJob(&quot;就业指导&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        return empList;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>第3步：为Controller及Service注入运行时依赖的对象</p><ul><li>使用Spring提供的注解：@Autowired ，就可以实现程序运行时IOC容器自动注入需要的依赖对象</li></ul><p><img src="`+ns+`" alt="image-20221204213859112"></p><p>**Dao层代码：**👇</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Component //将当前对象交给IOC容器管理,成为IOC容器的bean</span></span>
<span class="line"><span>public class EmpDaoA implements EmpDao {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public List&lt;Emp&gt; listEmp() {</span></span>
<span class="line"><span>        //1. 加载并解析emp.xml</span></span>
<span class="line"><span>        String file = this.getClass().getClassLoader().getResource(&quot;emp.xml&quot;).getFile();</span></span>
<span class="line"><span>        System.out.println(file);</span></span>
<span class="line"><span>        List&lt;Emp&gt; empList = XmlParserUtils.parse(file, Emp.class);</span></span>
<span class="line"><span>        return empList;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>作业</p><p>🚩 能说出<code>@Component</code>和<code>@Autowired</code>这2个注解的作用！</p><h3 id="_3-4-ioc详解-🍐" tabindex="-1">3.4 IOC详解 🍐 <a class="header-anchor" href="#_3-4-ioc详解-🍐" aria-label="Permalink to &quot;3.4 IOC详解 🍐&quot;">​</a></h3><p>IOC详解</p><p>目标：学习IOC控制反转和DI依赖注入的细节</p><p>前面我们提到<strong>IOC控制反转</strong>，就是将对象的控制权交给Spring的IOC容器，由IOC容器创建及管理对象。<strong>IOC容器创建的对象称为bean对象</strong>。</p><p>在之前的入门案例中，要把某个对象交给IOC容器管理，需要在类上添加一个注解：<code>@Component</code></p><p>而Spring框架为了更好的标识web应用程序开发当中，bean对象到底归属于哪一层，又提供了@Component的衍生注解：</p><ul><li><code>@Controller</code> （标注在控制层类上）</li><li><code>@Service</code> （标注在业务层类上）</li><li><code>@Repository</code> （标注在数据访问层类上）</li></ul><p><a href="http://image.yangeit.cn/i/2023/07/11/5490302461887385916.png" target="_blank" rel="noreferrer">点击查看代码图解open in new window</a> 👈</p><p>要把某个对象交给IOC容器管理，需要在对应的类上加上如下注解之一：</p><table><thead><tr><th>注解</th><th>说明</th><th>位置</th></tr></thead><tbody><tr><td>@Controller</td><td>@Component的衍生注解</td><td>标注在控制器类上</td></tr><tr><td>@Service</td><td>@Component的衍生注解</td><td>标注在业务类上</td></tr><tr><td>@Repository</td><td>@Component的衍生注解</td><td>标注在数据访问类上（由于与mybatis整合，用的少）</td></tr><tr><td>@Component</td><td>声明bean的基础注解</td><td>不属于以上三类时，用此注解</td></tr></tbody></table><p><a href="http://image.yangeit.cn/i/2023/06/14/image-20221204221320230.png" target="_blank" rel="noreferrer">1.点击查看注解源码open in new window</a> 👈</p><p>在IOC容器中，每一个Bean都有一个属于自己的名字，可以通过注解的value属性指定bean的名字。如果没有指定，默认为类名首字母小写。</p><p><a href="http://image.yangeit.cn/i/2023/06/14/image-20221204222650873.png" target="_blank" rel="noreferrer">2. 点击查看代码图解open in new window</a> 👈</p><blockquote><p>注意事项:</p><ul><li>声明bean的时候，可以通过value属性指定bean的名字，如果没有指定，默认为类名首字母小写。</li><li>使用以上四个注解都可以声明bean，但是在springboot集成web开发中，声明控制器bean只能用@Controller。</li></ul></blockquote><p>1.使用前面学习的四个注解声明的bean，一定会生效吗？</p><p>不一定。（原因：bean想要生效，还需要被组件扫描）</p><p>下面我们通过修改项目工程的目录结构，来测试bean对象是否生效：</p><p><img src="`+as+'" alt="image-20221204223602694"></p><p>运行程序后，报错：</p><p><img src="'+ps+'" alt="image-20221204223815554"></p><p>为什么没有找到bean对象呢？</p><ul><li>使用四大注解声明的bean，要想生效，还需要被组件扫描注解@ComponentScan扫描</li></ul><blockquote><p>@ComponentScan注解虽然没有显式配置，但是实际上已经包含在了引导类声明注解 @SpringBootApplication 中，<strong>默认扫描的范围是SpringBoot启动类所在包及其子包</strong>。</p><p><img src="'+es+'" alt="image-20221204224643683"></p><p>image-20221204224643683</p></blockquote><ul><li>解决方案：手动添加@ComponentScan注解，指定要扫描的包 （仅做了解，不推荐）</li></ul><p><img src="'+ls+'" alt="image-20221204225437297"></p><p>推荐做法（如下图）：</p><ul><li>将我们定义的controller，service，dao这些包呢，都放在引导类所在包com.itheima的子包下，这样我们定义的bean就会被自动的扫描到</li></ul><p><img src="'+ts+'" alt="image-20221204225815624"></p><p>课堂作业</p><p>🚩 1. 能流利的说出<code>@Component</code>的衍生注解的作用？以及默认Bean的名字是什么？</p><p>🚩 2. 使用<code>@Component</code>注解声明的bean，一定会生效吗？</p><h3 id="_3-5-di详解" tabindex="-1">3.5 DI详解 <a class="header-anchor" href="#_3-5-di详解" aria-label="Permalink to &quot;3.5 DI详解&quot;">​</a></h3><p>前言</p><p><strong>依赖注入</strong>，是指IOC容器要为应用程序去提供运行时所依赖的资源，而资源指的就是对象。</p><p>在入门程序案例中，我们使用了@Autowired这个注解，完成了依赖注入的操作，而这个Autowired翻译过来叫：自动装配。</p><p>@Autowired注解，默认是按照<strong>类型</strong>进行自动装配的（去IOC容器中找某个类型的对象，然后完成注入操作）</p><blockquote><p>入门程序举例：在EmpController运行的时候，就要到IOC容器当中去查找EmpService这个类型的对象，而我们的IOC容器中刚好有一个EmpService这个类型的对象，所以就找到了这个类型的对象完成注入操作。</p></blockquote><p>如何解决上述问题呢？Spring提供了以下几种解决方案：</p><ul><li>@Primary</li><li>@Qualifier</li><li>@Resource</li></ul><h4 id="_1️⃣-使用-primary注解-当存在多个相同类型的bean注入时-加上-primary注解-来确定默认的实现。" tabindex="-1">1️⃣ 使用@Primary注解：当存在多个相同类型的Bean注入时，加上@Primary注解，来确定默认的实现。 <a class="header-anchor" href="#_1️⃣-使用-primary注解-当存在多个相同类型的bean注入时-加上-primary注解-来确定默认的实现。" aria-label="Permalink to &quot;1️⃣ 使用@Primary注解：当存在多个相同类型的Bean注入时，加上@Primary注解，来确定默认的实现。&quot;">​</a></h4><p><img src="'+is+'" alt="image-20221204232501679"></p><h4 id="_2️⃣-使用-qualifier注解-指定当前要注入的bean对象。-在-qualifier的value属性中-指定注入的bean的名称。" tabindex="-1">2️⃣ 使用@Qualifier注解：指定当前要注入的bean对象。 在@Qualifier的value属性中，指定注入的bean的名称。 <a class="header-anchor" href="#_2️⃣-使用-qualifier注解-指定当前要注入的bean对象。-在-qualifier的value属性中-指定注入的bean的名称。" aria-label="Permalink to &quot;2️⃣ 使用@Qualifier注解：指定当前要注入的bean对象。 在@Qualifier的value属性中，指定注入的bean的名称。&quot;">​</a></h4><ul><li>@Qualifier注解不能单独使用，必须配合@Autowired使用</li></ul><p><img src="'+os+'" alt="image-20221204233333606"></p><h4 id="_3️⃣-使用-resource注解-是按照bean的名称进行注入。通过name属性指定要注入的bean的名称。" tabindex="-1">3️⃣ 使用@Resource注解：是按照bean的名称进行注入。通过name属性指定要注入的bean的名称。 <a class="header-anchor" href="#_3️⃣-使用-resource注解-是按照bean的名称进行注入。通过name属性指定要注入的bean的名称。" aria-label="Permalink to &quot;3️⃣ 使用@Resource注解：是按照bean的名称进行注入。通过name属性指定要注入的bean的名称。&quot;">​</a></h4><p><img src="'+cs+'" alt="image-20221204233637735"></p><blockquote><p>@Autowired 是spring框架提供的注解，而@Resource是JDK提供的注解</p></blockquote><blockquote><p>@Autowired 默认是按照类型注入，而@Resource是按照名称注入</p></blockquote><p>课堂作业</p><p>🚩 1. 请流利的说出 <code>@Autowird</code> 与 <code>@Resource</code>的区别</p>',391),gs=[us];function ds(ms,hs,bs,qs,vs,Cs){return a(),n("div",null,gs)}const Ss=s(rs,[["render",ds]]);export{_s as __pageData,Ss as default};
