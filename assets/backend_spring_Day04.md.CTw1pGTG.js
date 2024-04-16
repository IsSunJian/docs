import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.-JfgED0h.js";const e="/docs/assets/image-20220416200116744.unWPIhiJ.png",l="/docs/assets/image-20210804185234370.Ba0a2uhz.png",t="/docs/assets/image-20220416195947118.37BXEWCa.png",i="/docs/assets/2022-08-30-19-20-57.BWUOVUX9.png",o="/docs/assets/2022-08-30-19-22-25.cwO3c6gC.png",r="/docs/assets/image-20210804191218260.M5oe02HW.png",c="/docs/assets/image-20220416201635449.jDbLQXdl.png",u="/docs/assets/image-20210804193122709.BI2gWZby.png",d="/docs/assets/image-20210804193327981.De_vzfV4.png",g="/docs/assets/image-20210804194708518.DNi_rFGi.png",h="/docs/assets/image-20210804194952058.O_fyvYjM.png",q="/docs/assets/image-20210805150044862.CA0CKWvx.png",m="/docs/assets/image-20210805150206831.CYnyQTMA.png",b="/docs/assets/image-20210805150417692.C8MDXukm.png",v="/docs/assets/image-20220516144553940.BnVNiiw6.png",k="/docs/assets/image-20220416224341251.Cjlmbay4.png",C="/docs/assets/image-20210805102858905.3UP3jzhV.png",S="/docs/assets/image-20210805103041922.DyJ2c7zU.png",f="/docs/assets/image-20210805104824258.HgImqOoC.png",y="/docs/assets/image-20210805105056731.cLw1oGUI.png",M="/docs/assets/image-20210805105505625.4MtSh6YO.png",_="/docs/assets/image-20210805105825688.Dx545Eh-.png",P="/docs/assets/image-20210805105957957.DqQGBfNL.png",R="/docs/assets/image-20210805111544701.CYgwNMo0.png",x="/docs/assets/image-20210805111626095.CPUzbWG0.png",j="/docs/assets/2022-09-01-12-51-25.D6Jm3avk.png",B="/docs/assets/2022-09-01-12-53-06.CaOp2BXK.png",T="/docs/assets/image-20210805113333189.C3DGUHHw.png",E="/docs/assets/image-20210805132351738.CZ2KtmSH.png",N=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"backend/spring/Day04.md","filePath":"backend/spring/Day04.md"}'),w={name:"backend/spring/Day04.md"},O=p('<h2 id="_1-springmvc-简介" tabindex="-1">1.SpringMVC 简介 <a class="header-anchor" href="#_1-springmvc-简介" aria-label="Permalink to &quot;1.SpringMVC 简介&quot;">​</a></h2><h3 id="_1-1-springmvc-概述-🍐" tabindex="-1">1.1 SpringMVC 概述 🍐 <a class="header-anchor" href="#_1-1-springmvc-概述-🍐" aria-label="Permalink to &quot;1.1 SpringMVC 概述 🍐&quot;">​</a></h3><p>08 分钟</p><h4 id="_1-1-1-「springmvc-简介」核心问题-答案" tabindex="-1">1.1.1 「SpringMVC 简介」核心问题&amp;答案 <a class="header-anchor" href="#_1-1-1-「springmvc-简介」核心问题-答案" aria-label="Permalink to &quot;1.1.1 「SpringMVC 简介」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>为什么要学习 SpringMvc 而不继续使用 Servlet？</li></ol><p>点击查看</p><ul><li><p><strong>没有 SpringMvc 的 Javaweb 开发</strong><img src="'+e+'" alt="image-20220416200116744"></p><p><img src="'+l+'" alt="image-20210804185234370"></p><p>image-20210804185234370</p></li><li><p><strong>Springframework 架构图</strong><img src="'+t+`" alt="image-20220416200116744"></p></li><li><p><strong>SpringMVC 定义和特点</strong></p><ol><li>SpringMVC 是一种基于 Java 实现 MVC 模型的轻量级 Web 框架</li><li>优点</li></ol><ul><li>使用简单，开发便捷（相比于 Servlet）</li><li>灵活性强</li></ul></li></ul><h3 id="_1-2-入门案例【重点】-❤️-✏️" tabindex="-1">1.2 入门案例【重点】 ❤️ ✏️ <a class="header-anchor" href="#_1-2-入门案例【重点】-❤️-✏️" aria-label="Permalink to &quot;1.2 入门案例【重点】 ❤️ ✏️&quot;">​</a></h3><p>16 分钟</p><h4 id="_1-2-1-「入门案例」核心问题-答案" tabindex="-1">1.2.1 「入门案例」核心问题&amp;答案 <a class="header-anchor" href="#_1-2-1-「入门案例」核心问题-答案" aria-label="Permalink to &quot;1.2.1 「入门案例」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>在 Controller 中如何定义访问路径，如何响应数据？</li></ol><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//定义表现层控制器bean</span></span>
<span class="line"><span>@Controller</span></span>
<span class="line"><span>//@RequestMapping(&quot;/user&quot;)  //类前缀路径，如用户模块是/user   订单模块 /order  可以不写</span></span>
<span class="line"><span>@RequestMapping(&quot;/user&quot;)</span></span>
<span class="line"><span>public class UserController {</span></span>
<span class="line"><span>    //设置映射路径为/save，即外部访问路径</span></span>
<span class="line"><span>    @RequestMapping(&quot;/save&quot;)</span></span>
<span class="line"><span>    //设置当前操作返回结果为指定json数据（本质上是一个字符串信息）</span></span>
<span class="line"><span>    @ResponseBody</span></span>
<span class="line"><span>    public String save(){</span></span>
<span class="line"><span>        System.out.println(&quot;user save ...&quot;);</span></span>
<span class="line"><span>        return &quot;{&#39;info&#39;:&#39;springmvc&#39;}&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_1-2-2-实现步骤" tabindex="-1">1.2.2 实现步骤 <a class="header-anchor" href="#_1-2-2-实现步骤" aria-label="Permalink to &quot;1.2.2 实现步骤&quot;">​</a></h4><p>实现步骤</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>1 创建web工程（Maven结构）</span></span>
<span class="line"><span>2 设置tomcat服务器，加载web工程(tomcat插件）</span></span>
<span class="line"><span>3 导入坐标（SpringMVC+Servlet）</span></span>
<span class="line"><span>4 定义处理请求的功能类（UserController）</span></span>
<span class="line"><span>5 编写SpringMVC配置类，加载处理请求的Bean。</span></span>
<span class="line"><span>6 加载SpringMVC配置，并设置SpringMVC请求拦截的路径</span></span></code></pre></div><h4 id="_2-2-代码实现" tabindex="-1">2.2 代码实现 <a class="header-anchor" href="#_2-2-代码实现" aria-label="Permalink to &quot;2.2 代码实现&quot;">​</a></h4><h5 id="【第一步】创建-web-工程-maven-结构" tabindex="-1">【第一步】创建 web 工程（Maven 结构） <a class="header-anchor" href="#【第一步】创建-web-工程-maven-结构" aria-label="Permalink to &quot;【第一步】创建 web 工程（Maven 结构）&quot;">​</a></h5><p><img src="`+i+`" alt=""></p><h5 id="【第二步】设置-tomcat-服务器-加载-web-工程-tomcat-插件" tabindex="-1">【第二步】设置 tomcat 服务器，加载 web 工程(tomcat 插件） <a class="header-anchor" href="#【第二步】设置-tomcat-服务器-加载-web-工程-tomcat-插件" aria-label="Permalink to &quot;【第二步】设置 tomcat 服务器，加载 web 工程(tomcat 插件）&quot;">​</a></h5><blockquote><p>在 <code>&lt;/dependencies&gt;</code>下方导入插件配置</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>  &lt;build&gt;</span></span>
<span class="line"><span>    &lt;plugins&gt;</span></span>
<span class="line"><span>      &lt;plugin&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.apache.tomcat.maven&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;tomcat7-maven-plugin&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;2.1&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;configuration&gt;</span></span>
<span class="line"><span>&lt;!--          端口--&gt;</span></span>
<span class="line"><span>          &lt;port&gt;80&lt;/port&gt;</span></span>
<span class="line"><span>&lt;!--          项目的路径--&gt;</span></span>
<span class="line"><span>          &lt;path&gt;/&lt;/path&gt;</span></span>
<span class="line"><span>&lt;!--          设置编码格式为utf-8 解决get乱码--&gt;</span></span>
<span class="line"><span>          &lt;uriEncoding&gt;utf-8&lt;/uriEncoding&gt;</span></span>
<span class="line"><span>        &lt;/configuration&gt;</span></span>
<span class="line"><span>      &lt;/plugin&gt;</span></span>
<span class="line"><span>    &lt;/plugins&gt;</span></span>
<span class="line"><span>  &lt;/build&gt;</span></span></code></pre></div><h5 id="【第三步】导入坐标-springmvc-servlet" tabindex="-1">【第三步】导入坐标（SpringMVC+Servlet） <a class="header-anchor" href="#【第三步】导入坐标-springmvc-servlet" aria-label="Permalink to &quot;【第三步】导入坐标（SpringMVC+Servlet）&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;dependencies&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;javax.servlet&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;javax.servlet-api&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;3.1.0&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;scope&gt;provided&lt;/scope&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-webmvc&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;5.2.10.RELEASE&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;/dependencies&gt;</span></span></code></pre></div><p><strong>注意事项：</strong></p><ol><li>课程版本基于 Spring 主版本 5.2.10.RELEASE 制作</li><li>导入 spring-webmvc 坐标自动依赖 spring 相关坐标 👈</li></ol><p><img src="`+o+`" alt=""></p><h5 id="【第四步】定义处理请求的功能类-usercontroller" tabindex="-1">【第四步】定义处理请求的功能类（UserController） <a class="header-anchor" href="#【第四步】定义处理请求的功能类-usercontroller" aria-label="Permalink to &quot;【第四步】定义处理请求的功能类（UserController）&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//定义表现层控制器bean</span></span>
<span class="line"><span>@Controller</span></span>
<span class="line"><span>public class UserController {</span></span>
<span class="line"><span>    //设置映射路径为/save，即外部访问路径</span></span>
<span class="line"><span>    @RequestMapping(&quot;/save&quot;)</span></span>
<span class="line"><span>    //设置当前操作返回结果为指定json数据（本质上是一个字符串信息）</span></span>
<span class="line"><span>    @ResponseBody</span></span>
<span class="line"><span>    public String save(){</span></span>
<span class="line"><span>        System.out.println(&quot;user save ...&quot;);</span></span>
<span class="line"><span>        return &quot;{&#39;info&#39;:&#39;springmvc&#39;}&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>注意事项：</strong></p><p>对于 SpringMVC 而言，Controller 方法返回值默认表示要跳转的页面，没有对应的页面就会报错。如果不想跳转页面而是响应数据，那么就需要在方法上使用**@ResponseBody** 注解。</p><h5 id="【第五步】编写-springmvc-配置类-加载处理请求的-bean。" tabindex="-1">【第五步】编写 SpringMVC 配置类，加载处理请求的 Bean。 <a class="header-anchor" href="#【第五步】编写-springmvc-配置类-加载处理请求的-bean。" aria-label="Permalink to &quot;【第五步】编写 SpringMVC 配置类，加载处理请求的 Bean。&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//springmvc配置类，本质上还是一个spring配置类</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ComponentScan(&quot;com.itheima.controller&quot;)</span></span>
<span class="line"><span>public class SpringMvcConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="【第六步】加载-springmvc-配置-并设置-springmvc-请求拦截的路径-🍐" tabindex="-1">【第六步】加载 SpringMVC 配置，并设置 SpringMVC 请求拦截的路径 🍐 <a class="header-anchor" href="#【第六步】加载-springmvc-配置-并设置-springmvc-请求拦截的路径-🍐" aria-label="Permalink to &quot;【第六步】加载 SpringMVC 配置，并设置 SpringMVC 请求拦截的路径 🍐&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//web容器配置类</span></span>
<span class="line"><span>public class ServletContainersInitConfig extends AbstractDispatcherServletInitializer {</span></span>
<span class="line"><span>    //加载springmvc配置类，产生springmvc容器（本质还是spring容器）</span></span>
<span class="line"><span>    protected WebApplicationContext createServletApplicationContext() {</span></span>
<span class="line"><span>        //初始化WebApplicationContext对象</span></span>
<span class="line"><span>        AnnotationConfigWebApplicationContext ctx = new AnnotationConfigWebApplicationContext();</span></span>
<span class="line"><span>        //加载指定配置类</span></span>
<span class="line"><span>        ctx.register(SpringMvcConfig.class);</span></span>
<span class="line"><span>        return ctx;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //设置由springmvc控制器处理的请求映射路径</span></span>
<span class="line"><span>    protected String[] getServletMappings() {</span></span>
<span class="line"><span>        //将所有请求交给SpringMvc处理</span></span>
<span class="line"><span>        return new String[]{&quot;/&quot;};</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //加载spring配置类</span></span>
<span class="line"><span>    protected WebApplicationContext createRootApplicationContext() {</span></span>
<span class="line"><span>        //目前没有引入Spring配置信息，因此直接返回null</span></span>
<span class="line"><span>        return null;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="【第七步】运行结果" tabindex="-1">【第七步】运行结果 <a class="header-anchor" href="#【第七步】运行结果" aria-label="Permalink to &quot;【第七步】运行结果&quot;">​</a></h5><p><img src="`+r+'" alt="image-20210804191218260"></p><h4 id="_2-3-servlet-开发和-springmvc-开发对比" tabindex="-1">2.3 Servlet 开发和 SpringMvC 开发对比： <a class="header-anchor" href="#_2-3-servlet-开发和-springmvc-开发对比" aria-label="Permalink to &quot;2.3 Servlet 开发和 SpringMvC 开发对比：&quot;">​</a></h4><p>点击查看 Servlet 开发和 SpringMvC 开发对比</p><p><img src="'+c+`" alt="image-20220416201635449"></p><h4 id="_2-4-案例注解和类解析" tabindex="-1">2.4 案例注解和类解析 <a class="header-anchor" href="#_2-4-案例注解和类解析" aria-label="Permalink to &quot;2.4 案例注解和类解析&quot;">​</a></h4><h5 id="_2-4-1-controller-注解-❤️" tabindex="-1">2.4.1 @Controller 注解 ❤️ <a class="header-anchor" href="#_2-4-1-controller-注解-❤️" aria-label="Permalink to &quot;2.4.1 @Controller 注解 ❤️&quot;">​</a></h5><ul><li>名称：@Controller</li><li>类型：类注解</li><li>位置：SpringMVC 控制器类定义上方</li><li>作用：设定 SpringMVC 的核心控制器 bean 👈</li><li>范例</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Controller</span></span>
<span class="line"><span>public class UserController {</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_2-4-2-requestmapping-注解-❤️" tabindex="-1">2.4.2 @RequestMapping 注解 ❤️ <a class="header-anchor" href="#_2-4-2-requestmapping-注解-❤️" aria-label="Permalink to &quot;2.4.2 @RequestMapping 注解 ❤️&quot;">​</a></h5><ul><li>名称：@RequestMapping</li><li>类型：方法注解</li><li>位置：SpringMVC 控制器方法定义上方</li><li>作用：设置当前控制器方法请求访问路径 👈</li><li>范例</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RequestMapping(&quot;/save&quot;)</span></span>
<span class="line"><span>public void save(){</span></span>
<span class="line"><span>    System.out.println(&quot;user save ...&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>注意：其实@RequestMapping 注解还可以写到类上面，</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//定义表现层控制器bean</span></span>
<span class="line"><span>@Controller</span></span>
<span class="line"><span>//@RequestMapping(&quot;/user&quot;)  //类前缀路径，如用户模块是/user   订单模块 /order</span></span>
<span class="line"><span>@RequestMapping(&quot;/user&quot;)</span></span>
<span class="line"><span>public class UserController {</span></span>
<span class="line"><span>    //设置映射路径为/save，即外部访问路径</span></span>
<span class="line"><span>    @RequestMapping(&quot;/save&quot;)</span></span>
<span class="line"><span>    //设置当前操作返回结果为指定json数据（本质上是一个字符串信息）</span></span>
<span class="line"><span>    @ResponseBody</span></span>
<span class="line"><span>    public String save(){</span></span>
<span class="line"><span>        System.out.println(&quot;user save ...&quot;);</span></span>
<span class="line"><span>        return &quot;{&#39;info&#39;:&#39;springmvc&#39;}&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_2-4-3-responsebody-注解-❤️" tabindex="-1">2.4.3 @ResponseBody 注解 ❤️ <a class="header-anchor" href="#_2-4-3-responsebody-注解-❤️" aria-label="Permalink to &quot;2.4.3 @ResponseBody 注解 ❤️&quot;">​</a></h5><ul><li>名称：@ResponseBody</li><li>类型：方法注解</li><li>位置：SpringMVC 控制器方法定义上方</li><li>作用：设置当前控制器方法响应内容为当前返回值，无需解析 👈</li><li>范例</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RequestMapping(&quot;/save&quot;)</span></span>
<span class="line"><span>@ResponseBody</span></span>
<span class="line"><span>public String save(){</span></span>
<span class="line"><span>    System.out.println(&quot;user save ...&quot;);</span></span>
<span class="line"><span>    return &quot;{&#39;info&#39;:&#39;springmvc&#39;}&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_2-4-4-abstractdispatcherservletinitializer-类" tabindex="-1">2.4.4 AbstractDispatcherServletInitializer 类 <a class="header-anchor" href="#_2-4-4-abstractdispatcherservletinitializer-类" aria-label="Permalink to &quot;2.4.4 AbstractDispatcherServletInitializer 类&quot;">​</a></h5><ul><li><p>AbstractDispatcherServletInitializer 类是 SpringMVC 提供的快速初始化 Web3.0 容器的抽象类</p></li><li><p>AbstractDispatcherServletInitializer 提供三个接口方法供用户实现</p><ul><li>createServletApplicationContext()方法，创建 Servlet 容器时，加载 SpringMVC 对应的 bean 并放入 WebApplicationContext 对象范围中，而 WebApplicationContext 的作用范围为 ServletContext 范围，即整个 web 容器范围。</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//加载springmvc配置类，产生springmvc容器（本质还是spring容器）</span></span>
<span class="line"><span>protected WebApplicationContext createServletApplicationContext() {</span></span>
<span class="line"><span>    AnnotationConfigWebApplicationContext ctx = new AnnotationConfigWebApplicationContext();</span></span>
<span class="line"><span>    ctx.register(SpringMvcConfig.class);</span></span>
<span class="line"><span>    return ctx;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>getServletMappings()方法，设定 SpringMVC 对应的请求映射路径，设置为/表示拦截所有请求，任意请求都将转入到 SpringMVC 进行处理。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//设置由springmvc控制器处理的请求映射路径</span></span>
<span class="line"><span>protected String[] getServletMappings() {</span></span>
<span class="line"><span>    return new String[]{&quot;/&quot;};</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>createRootApplicationContext()方法，如果创建 Servlet 容器时需要加载非 SpringMVC 对应的 bean，使用当前方法进行，使用方式同 createServletApplicationContext()</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//加载spring配置类</span></span>
<span class="line"><span>protected WebApplicationContext createRootApplicationContext() {</span></span>
<span class="line"><span>    return null;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_2-5-入门程序开发总结-1-n-【理解】" tabindex="-1">2.5 入门程序开发总结(1+N)【理解】 <a class="header-anchor" href="#_2-5-入门程序开发总结-1-n-【理解】" aria-label="Permalink to &quot;2.5 入门程序开发总结(1+N)【理解】&quot;">​</a></h4><p>总结(1+N)</p><ul><li>一次性工作 <ul><li>创建工程，设置服务器，加载工程</li><li>导入坐标</li><li>创建 web 容器启动类，加载 SpringMVC 配置，并设置 SpringMVC 请求拦截路径</li><li>SpringMVC 核心配置类（设置配置类，扫描 controller 包，加载 Controller 控制器 bean）</li></ul></li><li>多次工作 <ul><li>定义处理请求的控制器类</li><li>定义处理请求的控制器方法，并配置映射路径（@RequestMapping）与返回 json 数据（@ResponseBody）</li></ul></li></ul><h3 id="入门案例-练习-✏️" tabindex="-1">入门案例 练习 ✏️ <a class="header-anchor" href="#入门案例-练习-✏️" aria-label="Permalink to &quot;入门案例 练习 ✏️&quot;">​</a></h3><p>10 分钟</p><h4 id="「入门案例-」目的" tabindex="-1">「入门案例 」目的 <a class="header-anchor" href="#「入门案例-」目的" aria-label="Permalink to &quot;「入门案例 」目的&quot;">​</a></h4><blockquote><p>能够编写 SpringMVC 入门案例</p></blockquote><h4 id="「入门案例-」需求-效果" tabindex="-1">「入门案例 」需求&amp;效果 <a class="header-anchor" href="#「入门案例-」需求-效果" aria-label="Permalink to &quot;「入门案例 」需求&amp;效果&quot;">​</a></h4><blockquote><p>tomcat 启动后，能正常访问</p></blockquote><h4 id="_1-3-2「入门案例」步鄹" tabindex="-1">1.3.2「入门案例」步鄹 <a class="header-anchor" href="#_1-3-2「入门案例」步鄹" aria-label="Permalink to &quot;1.3.2「入门案例」步鄹&quot;">​</a></h4><ul><li>在飞秋中下载 springmvc_01_quickstarttest 压缩包，放到你的工程中</li><li>导入到项目中</li><li>完成 UserController 中的代码</li><li>注意：导工程后，一定要做的三个步鄹 <ol><li>检查 Maven 仓库</li><li>检查 jdk-1.8</li><li>检查编译器版本-1.8</li></ol></li></ul><p>点击查看步鄹提示</p><ul><li>环境准备： <ul><li><ol><li>检查 pom 文件--打包方式 war，依赖 Servlet 和 springmvc，tomcat 插件上的项目路径和端口</li></ol></li><li><ol start="2"><li>配置 ServletContainersInitConfig--配置容器和路径</li></ol></li></ul></li><li>具体业务： <ul><li><ol><li>在 save 方法的 RequestMapping 上 加入路径 ，如 @RequestMapping(&quot;/save&quot;)</li></ol></li><li><ol start="2"><li>在 String save()上方加上@ResponseBody 注解，表明返回字符串数据到响应体中</li></ol></li><li><ol start="3"><li>在 UserController 类上加上注解@Controller 这样配合 SpringMvcConfig 的扫描后，Web 容器中就有 UserController 实例了。</li></ol></li><li><ol start="4"><li>右击运行 maventomcat ，访问 localhost/save 查看浏览器的结果和控制台的结果</li></ol></li></ul></li></ul><h3 id="_1-3-入门案例工作流程分析🍐" tabindex="-1">1.3 入门案例工作流程分析🍐 <a class="header-anchor" href="#_1-3-入门案例工作流程分析🍐" aria-label="Permalink to &quot;1.3 入门案例工作流程分析🍐&quot;">​</a></h3><p>6 分钟</p><h4 id="_1-3-1-启动服务器初始化过程" tabindex="-1">1.3.1 启动服务器初始化过程 <a class="header-anchor" href="#_1-3-1-启动服务器初始化过程" aria-label="Permalink to &quot;1.3.1 启动服务器初始化过程&quot;">​</a></h4><ol><li>服务器启动，执行 ServletContainersInitConfig 类，初始化 web 容器</li><li>执行 createServletApplicationContext 方法，创建了 WebApplicationContext 对象</li><li>加载 SpringMvcConfig 配置类</li><li>执行@ComponentScan 加载对应的 bean</li><li>加载 UserController，每个@RequestMapping 的名称对应一个具体的方法</li><li>执行 getServletMappings 方法，定义所有的请求都通过 SpringMVC</li></ol><p><img src="`+u+'" alt="image-20210804193122709"></p><h4 id="_1-3-2-单次请求过程" tabindex="-1">1.3.2 单次请求过程 <a class="header-anchor" href="#_1-3-2-单次请求过程" aria-label="Permalink to &quot;1.3.2 单次请求过程&quot;">​</a></h4><ol><li>发送请求 localhost/save</li><li>web 容器发现所有请求都经过 SpringMVC，将请求交给 SpringMVC 处理</li><li>解析请求路径/save</li><li>由/save 匹配执行对应的方法 save(）</li><li>执行 save()</li><li>检测到有@ResponseBody 直接将 save()方法的返回值作为响应求体返回给请求方</li></ol><p><img src="'+d+`" alt="image-20210804193327981"></p><p>掌握 2 步：</p><ol><li>将 springmvc 的容器，加载到 Servlet 容器中，并且分配哪些请求给 springmvc 容器处理，一般全部给：/</li><li>所有的请求已经交由吗 mvc 容器处理，那么就会根据 map（映射），不同的路径匹配相应的方法。如/save---&gt;save()方法</li></ol><h3 id="_1-4-bean-加载控制-🍐" tabindex="-1">1.4 Bean 加载控制 🍐 <a class="header-anchor" href="#_1-4-bean-加载控制-🍐" aria-label="Permalink to &quot;1.4 Bean 加载控制 🍐&quot;">​</a></h3><p>18 分钟</p><h4 id="_1-4-1-「bean-加载控制」核心问题-答案" tabindex="-1">1.4.1 「Bean 加载控制」核心问题&amp;答案 <a class="header-anchor" href="#_1-4-1-「bean-加载控制」核心问题-答案" aria-label="Permalink to &quot;1.4.1 「Bean 加载控制」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>因为功能不同，如何避免 Spring 错误的加载到 SpringMVC 的 bean？</li></ol><p>点击查看代码</p><ul><li>SpringMVC 相关 bean 加载控制 <ol><li>SpringMVC 加载的 bean 对应的包均在 com.itheima.controller 包内</li></ol></li><li>Spring 相关 bean 加载控制 <ol><li><strong>方式一</strong>：Spring 加载的 bean 设定扫描范围为 com.itheima，排除掉 controller 包内的 bean 🍐</li><li><strong>方式二</strong>：Spring 加载的 bean 设定扫描范围为精准范围，例如 service 包、dao 包等 🍐 ❤️ 简单实用</li><li><strong>方式三</strong>：不区分 Spring 与 SpringMVC 的环境，加载到同一个环境中</li></ol></li></ul><h4 id="_1-4-2-方式一代码实现" tabindex="-1">1.4.2 方式一代码实现 <a class="header-anchor" href="#_1-4-2-方式一代码实现" aria-label="Permalink to &quot;1.4.2 方式一代码实现&quot;">​</a></h4><p>点击查看代码</p><ul><li>名称：@ComponentScan</li><li>类型：类注解</li><li>范例</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ComponentScan(value = &quot;com.itheima&quot;,</span></span>
<span class="line"><span>               excludeFilters = @ComponentScan.Filter(</span></span>
<span class="line"><span>                   type = FilterType.ANNOTATION,</span></span>
<span class="line"><span>                   classes = Controller.class</span></span>
<span class="line"><span>               )</span></span>
<span class="line"><span>              )</span></span>
<span class="line"><span>public class SpringConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>属性 <ol><li>excludeFilters：排除扫描路径中加载的 bean，需要指定类别（type）与具体项（classes）</li><li>includeFilters：加载指定的 bean，需要指定类别（type）与具体项（classes）</li></ol></li></ul><h4 id="_1-4-3-bean-的加载格式" tabindex="-1">1.4.3 Bean 的加载格式 <a class="header-anchor" href="#_1-4-3-bean-的加载格式" aria-label="Permalink to &quot;1.4.3 Bean 的加载格式&quot;">​</a></h4><h4 id="bean-的加载标准格式-🍐-🚀" tabindex="-1">Bean 的加载标准格式 🍐 🚀 <a class="header-anchor" href="#bean-的加载标准格式-🍐-🚀" aria-label="Permalink to &quot;Bean 的加载标准格式 🍐 🚀&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class ServletContainersInitConfig extends AbstractDispatcherServletInitializer {</span></span>
<span class="line"><span>    protected WebApplicationContext createServletApplicationContext() {</span></span>
<span class="line"><span>        AnnotationConfigWebApplicationContext ctx = new AnnotationConfigWebApplicationContext();</span></span>
<span class="line"><span>        ctx.register(SpringMvcConfig.class);</span></span>
<span class="line"><span>        return ctx;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    protected WebApplicationContext createRootApplicationContext() {</span></span>
<span class="line"><span>        AnnotationConfigWebApplicationContext ctx = new AnnotationConfigWebApplicationContext();</span></span>
<span class="line"><span>        ctx.register(SpringConfig.class);</span></span>
<span class="line"><span>        return ctx;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    protected String[] getServletMappings() {</span></span>
<span class="line"><span>        return new String[]{&quot;/&quot;};</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="简化格式-🍐-❤️-简单实用" tabindex="-1">简化格式 🍐 ❤️ 简单实用 <a class="header-anchor" href="#简化格式-🍐-❤️-简单实用" aria-label="Permalink to &quot;简化格式 🍐 ❤️ 简单实用&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class ServletContainersInitConfig extends AbstractAnnotationConfigDispatcherServletInitializer{</span></span>
<span class="line"><span>    protected Class&lt;?&gt;[] getServletConfigClasses() {</span></span>
<span class="line"><span>        return new Class[]{SpringMvcConfig.class}</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    protected String[] getServletMappings() {</span></span>
<span class="line"><span>        return new String[]{&quot;/&quot;};</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    protected Class&lt;?&gt;[] getRootConfigClasses() {</span></span>
<span class="line"><span>        return new Class[]{SpringConfig.class};</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_1-5-postman【掌握】" tabindex="-1">1.5 PostMan【掌握】 <a class="header-anchor" href="#_1-5-postman【掌握】" aria-label="Permalink to &quot;1.5 PostMan【掌握】&quot;">​</a></h3><p>08 分钟</p><h4 id="_1-5-1-postman-介绍" tabindex="-1">1.5.1 PostMan 介绍 <a class="header-anchor" href="#_1-5-1-postman-介绍" aria-label="Permalink to &quot;1.5.1 PostMan 介绍&quot;">​</a></h4><ul><li><img src="`+g+'" alt="image-20210804194708518"> Postman 是一款功能强大的网页调试与发送网页 HTTP 请求的 Chrome 插件。</li><li>作用：常用于进行接口测试</li><li>特征 <ul><li>简单</li><li>实用</li><li>美观</li><li>大方</li></ul></li></ul><h4 id="_1-5-2-postman-安装和使用" tabindex="-1">1.5.2 PostMan 安装和使用 <a class="header-anchor" href="#_1-5-2-postman-安装和使用" aria-label="Permalink to &quot;1.5.2 PostMan 安装和使用&quot;">​</a></h4><p>安装和使用</p><h5 id="postman-安装" tabindex="-1">PostMan 安装 <a class="header-anchor" href="#postman-安装" aria-label="Permalink to &quot;PostMan 安装&quot;">​</a></h5><blockquote><p>双击资料中的“Postman-win64-8.3.1-Setup.exe”即可自动按照，打开之后需要注册，如果底部有如下链接，可以点击跳过注册</p></blockquote><p><img src="'+h+'" alt="image-20210804194952058"></p><h5 id="创建-workspace-工作空间" tabindex="-1">创建 WorkSpace 工作空间 <a class="header-anchor" href="#创建-workspace-工作空间" aria-label="Permalink to &quot;创建 WorkSpace 工作空间&quot;">​</a></h5><p><img src="'+q+'" alt="image-20210805150044862"></p><h5 id="发送请求获取-json-数据" tabindex="-1">发送请求获取 json 数据 <a class="header-anchor" href="#发送请求获取-json-数据" aria-label="Permalink to &quot;发送请求获取 json 数据&quot;">​</a></h5><p><img src="'+m+'" alt="image-20210805150206831"></p><h5 id="保存当前请求" tabindex="-1">保存当前请求 <a class="header-anchor" href="#保存当前请求" aria-label="Permalink to &quot;保存当前请求&quot;">​</a></h5><p><img src="'+b+'" alt="image-20210805150417692"></p><blockquote><p>注意：第一次请求需要创建一个新的目录，后面就不需要创建新目录，直接保存到已经创建好的目录即可。</p></blockquote><h3 id="_1-6-使用-apifox-导入已有的接口【重点】-❤️" tabindex="-1">1.6 使用 APIfox 导入已有的接口【重点】 ❤️ <a class="header-anchor" href="#_1-6-使用-apifox-导入已有的接口【重点】-❤️" aria-label="Permalink to &quot;1.6 使用 APIfox 导入已有的接口【重点】 ❤️&quot;">​</a></h3><p>点击查看教程</p><p><img src="'+v+`" alt="image-20220516144553940"></p><h2 id="_2-请求与响应" tabindex="-1">2. 请求与响应 <a class="header-anchor" href="#_2-请求与响应" aria-label="Permalink to &quot;2\\. 请求与响应&quot;">​</a></h2><h3 id="_2-1-请求映射路径-❤️" tabindex="-1">2.1 请求映射路径 ❤️ <a class="header-anchor" href="#_2-1-请求映射路径-❤️" aria-label="Permalink to &quot;2.1 请求映射路径 ❤️&quot;">​</a></h3><p>07 分钟</p><h4 id="_2-1-1-「请求映射路径」核心问题-答案" tabindex="-1">2.1.1 「请求映射路径」核心问题&amp;答案 <a class="header-anchor" href="#_2-1-1-「请求映射路径」核心问题-答案" aria-label="Permalink to &quot;2.1.1 「请求映射路径」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>@RequestMapping 注解注解可以写在哪？有什么作用？</li></ol><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//定义表现层控制器bean</span></span>
<span class="line"><span>@Controller</span></span>
<span class="line"><span>//@RequestMapping(&quot;/user&quot;)  //类前缀路径，如用户模块是/user   订单模块 /order  可以不写</span></span>
<span class="line"><span>@RequestMapping(&quot;/user&quot;)</span></span>
<span class="line"><span>public class UserController {</span></span>
<span class="line"><span>    //设置映射路径为/save，即外部访问路径</span></span>
<span class="line"><span>    @RequestMapping(&quot;/save&quot;)</span></span>
<span class="line"><span>    //设置当前操作返回结果为指定json数据（本质上是一个字符串信息）</span></span>
<span class="line"><span>    @ResponseBody</span></span>
<span class="line"><span>    public String save(){</span></span>
<span class="line"><span>        System.out.println(&quot;user save ...&quot;);</span></span>
<span class="line"><span>        return &quot;{&#39;info&#39;:&#39;springmvc&#39;}&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_2-1-2-requestmapping-注解-❤️" tabindex="-1">2.1.2 @RequestMapping 注解 ❤️ <a class="header-anchor" href="#_2-1-2-requestmapping-注解-❤️" aria-label="Permalink to &quot;2.1.2 @RequestMapping 注解 ❤️&quot;">​</a></h4><ul><li>名称：@RequestMapping</li><li>类型：<strong>方法注解 类注解</strong></li><li>位置：SpringMVC 控制器方法定义上方</li><li>作用：设置当前控制器方法请求访问路径，如果设置在类上统一设置当前控制器方法请求访问路径前缀</li></ul><p>点击查看范例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Controller</span></span>
<span class="line"><span>//类上方配置的请求映射与方法上面配置的请求映射连接在一起，形成完整的请求映射路径</span></span>
<span class="line"><span>@RequestMapping(&quot;/user&quot;)</span></span>
<span class="line"><span>public class UserController {</span></span>
<span class="line"><span>    //请求路径映射</span></span>
<span class="line"><span>    @RequestMapping(&quot;/save&quot;) //此时save方法的访问路径是：/user/save</span></span>
<span class="line"><span>    @ResponseBody</span></span>
<span class="line"><span>    public String save(){</span></span>
<span class="line"><span>        System.out.println(&quot;user save ...&quot;);</span></span>
<span class="line"><span>        return &quot;{&#39;module&#39;:&#39;user save&#39;}&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>实际开发的例子</strong>：</li></ul><p><img src="`+k+`" alt="image-20220416224341251"></p><h3 id="_2-2-请求参数" tabindex="-1">2.2 请求参数 <a class="header-anchor" href="#_2-2-请求参数" aria-label="Permalink to &quot;2.2 请求参数&quot;">​</a></h3><p>12 分钟</p><h4 id="_2-2-1-「请求参数」核心问题-答案" tabindex="-1">2.2.1 「请求参数」核心问题&amp;答案 <a class="header-anchor" href="#_2-2-1-「请求参数」核心问题-答案" aria-label="Permalink to &quot;2.2.1 「请求参数」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>如何解决 POST 请求中文乱码问题？</li></ol><p>点击查看代码</p><blockquote><p>在加载 SpringMVC 配置的配置类中指定字符过滤器。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span> //乱码处理  添加乱码处理过滤器，一次性代码</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    protected Filter[] getServletFilters() {</span></span>
<span class="line"><span>        CharacterEncodingFilter filter = new CharacterEncodingFilter();</span></span>
<span class="line"><span>        filter.setEncoding(&quot;UTF-8&quot;);</span></span>
<span class="line"><span>        return new Filter[]{filter};</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h4 id="_2-2-2-发送普通类型参数-🍐" tabindex="-1">2.2.2 发送普通类型参数 🍐 <a class="header-anchor" href="#_2-2-2-发送普通类型参数-🍐" aria-label="Permalink to &quot;2.2.2 发送普通类型参数 🍐&quot;">​</a></h4><h5 id="get-请求传递普通参数" tabindex="-1">GET 请求传递普通参数 <a class="header-anchor" href="#get-请求传递普通参数" aria-label="Permalink to &quot;GET 请求传递普通参数&quot;">​</a></h5><ul><li>普通参数：url 地址传参，地址参数名与形参变量名相同，定义形参即可接收参数 <img src="`+C+`" alt="image-20210805102858905"></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//普通参数：请求参数与形参名称对应即可完成参数传递</span></span>
<span class="line"><span>@RequestMapping(&quot;/commonParam&quot;)</span></span>
<span class="line"><span>@ResponseBody</span></span>
<span class="line"><span>public String commonParam(String name ,int age){</span></span>
<span class="line"><span>    System.out.println(&quot;普通参数传递 name ==&gt; &quot;+name);</span></span>
<span class="line"><span>    System.out.println(&quot;普通参数传递 age ==&gt; &quot;+age);</span></span>
<span class="line"><span>    return &quot;{&#39;module&#39;:&#39;common param&#39;}&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>问题：如果同学们传递的参数是中文试试，你们会发现接收到的参数出现了中文乱码问题。</li><li>原因：tomcat 8.5 版本之后 GET 请求就不再出现中文乱码问题，但是我们使用的是 tomcat7 插件，所以会出现 GET 请求中文乱码问题。</li><li>解决：在 pom.xml 添加 tomcat7 插件处配置 UTF-8 字符集，解决 GET 请求中文乱码问题。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;build&gt;</span></span>
<span class="line"><span>    &lt;plugins&gt;</span></span>
<span class="line"><span>      &lt;plugin&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.apache.tomcat.maven&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;tomcat7-maven-plugin&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;2.1&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;configuration&gt;</span></span>
<span class="line"><span>          &lt;port&gt;80&lt;/port&gt;&lt;!--tomcat端口号--&gt;</span></span>
<span class="line"><span>          &lt;path&gt;/&lt;/path&gt; &lt;!--虚拟目录--&gt;</span></span>
<span class="line"><span>          &lt;uriEncoding&gt;UTF-8&lt;/uriEncoding&gt;&lt;!--访问路径编解码字符集--&gt;</span></span>
<span class="line"><span>        &lt;/configuration&gt;</span></span>
<span class="line"><span>      &lt;/plugin&gt;</span></span>
<span class="line"><span>    &lt;/plugins&gt;</span></span>
<span class="line"><span>  &lt;/build&gt;</span></span></code></pre></div><h5 id="post-请求传递普通参数" tabindex="-1">POST 请求传递普通参数 <a class="header-anchor" href="#post-请求传递普通参数" aria-label="Permalink to &quot;POST 请求传递普通参数&quot;">​</a></h5><ul><li>普通参数：form 表单 post 请求传参，表单参数名与形参变量名相同，定义形参即可接收参数</li></ul><p><img src="`+S+`" alt="image-20210805103041922"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//普通参数：请求参数与形参名称对应即可完成参数传递</span></span>
<span class="line"><span>@RequestMapping(&quot;/commonParam&quot;)</span></span>
<span class="line"><span>@ResponseBody</span></span>
<span class="line"><span>public String commonParam(String name ,int age){</span></span>
<span class="line"><span>    System.out.println(&quot;普通参数传递 name ==&gt; &quot;+name);</span></span>
<span class="line"><span>    System.out.println(&quot;普通参数传递 age ==&gt; &quot;+age);</span></span>
<span class="line"><span>    return &quot;{&#39;module&#39;:&#39;common param&#39;}&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>问题：我们发现，POST 请求传递的参数如果包含中文那么就会出现中文乱码问题，说明我们之前配置的 tomcat 插件 uri 路径编解码字符集无法解决 POST 请求中文乱码问题。那么如何解决呢？</p><h5 id="post-请求中文乱码处理-❤️-👈" tabindex="-1">POST 请求中文乱码处理 ❤️ 👈 <a class="header-anchor" href="#post-请求中文乱码处理-❤️-👈" aria-label="Permalink to &quot;POST 请求中文乱码处理 ❤️ 👈&quot;">​</a></h5><blockquote><p>在加载 SpringMVC 配置的配置类中指定字符过滤器。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class ServletContainersInitConfig extends AbstractAnnotationConfigDispatcherServletInitializer {</span></span>
<span class="line"><span>    protected Class&lt;?&gt;[] getRootConfigClasses() {</span></span>
<span class="line"><span>        return new Class[0];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    protected Class&lt;?&gt;[] getServletConfigClasses() {</span></span>
<span class="line"><span>        return new Class[]{SpringMvcConfig.class};</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    protected String[] getServletMappings() {</span></span>
<span class="line"><span>        return new String[]{&quot;/&quot;};</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //乱码处理  添加乱码处理过滤器，一次性代码</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    protected Filter[] getServletFilters() {</span></span>
<span class="line"><span>        CharacterEncodingFilter filter = new CharacterEncodingFilter();</span></span>
<span class="line"><span>        filter.setEncoding(&quot;UTF-8&quot;);</span></span>
<span class="line"><span>        return new Filter[]{filter};</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-3-五种类型参数传递" tabindex="-1">2.3 五种类型参数传递 <a class="header-anchor" href="#_2-3-五种类型参数传递" aria-label="Permalink to &quot;2.3 五种类型参数传递&quot;">​</a></h3><p>12 分钟</p><h4 id="_2-3-1-「五种类型参数传递」核心问题-答案" tabindex="-1">2.3.1 「五种类型参数传递」核心问题&amp;答案 <a class="header-anchor" href="#_2-3-1-「五种类型参数传递」核心问题-答案" aria-label="Permalink to &quot;2.3.1 「五种类型参数传递」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>当请求参数名与形参变量名不同，该如何接收请求参数？</li></ol><p>点击查看代码</p><ul><li>使用@RequestParam(&quot;name&quot;)注解</li></ul><h4 id="_2-3-2-五种类型参数介绍" tabindex="-1">2.3.2 五种类型参数介绍 <a class="header-anchor" href="#_2-3-2-五种类型参数介绍" aria-label="Permalink to &quot;2.3.2 五种类型参数介绍&quot;">​</a></h4><p>类型如下：</p><ul><li>普通参数</li><li>POJO 类型参数</li><li>嵌套 POJO 类型参数</li><li>数组类型参数</li><li>集合类型参数</li></ul><h5 id="❤️-普通参数-🍐" tabindex="-1">❤️ 普通参数 🍐 <a class="header-anchor" href="#❤️-普通参数-🍐" aria-label="Permalink to &quot;❤️ 普通参数 🍐&quot;">​</a></h5><ul><li>普通参数：当请求参数名与形参变量名不同，使用@RequestParam 绑定参数关系 <img src="`+f+`" alt="image-20210805104824258"></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//普通参数：请求参数名与形参名不同时，使用@RequestParam注解关联请求参数名称与形参名称之间的关系</span></span>
<span class="line"><span>@RequestMapping(&quot;/commonParamDifferentName&quot;)</span></span>
<span class="line"><span>@ResponseBody</span></span>
<span class="line"><span>public String commonParamDifferentName(@RequestParam(&quot;name&quot;) String userName , int age){</span></span>
<span class="line"><span>    System.out.println(&quot;普通参数传递 userName ==&gt; &quot;+userName);</span></span>
<span class="line"><span>    System.out.println(&quot;普通参数传递 age ==&gt; &quot;+age);</span></span>
<span class="line"><span>    return &quot;{&#39;module&#39;:&#39;common param different name&#39;}&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>名称：@RequestParam</li><li>类型：形参注解</li><li>位置：SpringMVC 控制器方法形参定义前面</li><li>作用：绑定请求参数与处理器方法形参间的关系</li><li>参数： <ul><li>required：是否为必传参数</li><li>defaultValue：参数默认值</li></ul></li></ul><h5 id="pojo类型参数-🍐" tabindex="-1">POJO类型参数 🍐 <a class="header-anchor" href="#pojo类型参数-🍐" aria-label="Permalink to &quot;POJO类型参数 🍐&quot;">​</a></h5><ul><li>POJO 参数：请求参数名与形参对象属性名相同，定义 POJO 类型形参即可接收参数</li></ul><p><img src="`+y+`" alt="image-20210805105056731"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class User {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private int age;</span></span>
<span class="line"><span>    //同学们自己添加getter/setter/toString()方法</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//POJO参数：请求参数与形参对象中的属性对应即可完成参数传递</span></span>
<span class="line"><span>@RequestMapping(&quot;/pojoParam&quot;)</span></span>
<span class="line"><span>@ResponseBody</span></span>
<span class="line"><span>public String pojoParam(User user){</span></span>
<span class="line"><span>    System.out.println(&quot;pojo参数传递 user ==&gt; &quot;+user);</span></span>
<span class="line"><span>    return &quot;{&#39;module&#39;:&#39;pojo param&#39;}&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>注意事项：请求参数 key 的名称要和 POJO 中属性的名称一致，否则无法封装。</strong></p><h5 id="嵌套-pojo-类型参数" tabindex="-1">嵌套 POJO 类型参数 <a class="header-anchor" href="#嵌套-pojo-类型参数" aria-label="Permalink to &quot;嵌套 POJO 类型参数&quot;">​</a></h5><ul><li>POJO 对象中包含 POJO 对象</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class User {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private int age;</span></span>
<span class="line"><span>    private Address address;</span></span>
<span class="line"><span>    //同学们自己添加getter/setter/toString()方法</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public class Address {</span></span>
<span class="line"><span>    private String province;</span></span>
<span class="line"><span>    private String city;</span></span>
<span class="line"><span>    private Address address;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>嵌套 POJO 参数：请求参数名与形参对象属性名相同，按照对象层次结构关系即可接收嵌套 POJO 属性参数</li></ul><p><img src="`+M+`" alt="image-20210805105505625"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//嵌套POJO参数：嵌套属性按照层次结构设定名称即可完成参数传递</span></span>
<span class="line"><span>@RequestMapping(&quot;/pojoContainPojoParam&quot;)</span></span>
<span class="line"><span>@ResponseBody</span></span>
<span class="line"><span>public String pojoContainPojoParam(User user){</span></span>
<span class="line"><span>    System.out.println(&quot;pojo嵌套pojo参数传递 user ==&gt; &quot;+user);</span></span>
<span class="line"><span>    return &quot;{&#39;module&#39;:&#39;pojo contain pojo param&#39;}&quot;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;name&quot;: &quot;zhangsan&quot;,</span></span>
<span class="line"><span>    &quot;age&quot;: 12,</span></span>
<span class="line"><span>    &quot;address&quot;: {</span></span>
<span class="line"><span>        &quot;province&quot;: &quot;湖南&quot;,</span></span>
<span class="line"><span>        &quot;city&quot;: &quot;长沙&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>注意事项：请求参数 key 的名称要和 POJO 中属性的名称一致，否则无法封装。</strong></p><h5 id="数组类型参数" tabindex="-1">数组类型参数 <a class="header-anchor" href="#数组类型参数" aria-label="Permalink to &quot;数组类型参数&quot;">​</a></h5><ul><li>数组参数：请求参数名与形参对象属性名相同且请求参数为多个，定义数组类型即可接收参数</li></ul><p><img src="`+_+`" alt="image-20210805105825688"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//数组参数：同名请求参数可以直接映射到对应名称的形参数组对象中</span></span>
<span class="line"><span>@RequestMapping(&quot;/arrayParam&quot;)</span></span>
<span class="line"><span>@ResponseBody</span></span>
<span class="line"><span>public String arrayParam(String[] likes){</span></span>
<span class="line"><span>    System.out.println(&quot;数组参数传递 likes ==&gt; &quot;+ Arrays.toString(likes));</span></span>
<span class="line"><span>    return &quot;{&#39;module&#39;:&#39;array param&#39;}&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="集合类型参数" tabindex="-1">集合类型参数 <a class="header-anchor" href="#集合类型参数" aria-label="Permalink to &quot;集合类型参数&quot;">​</a></h5><ul><li>集合保存普通参数：请求参数名与形参集合对象名相同且请求参数为多个，@RequestParam 绑定参数关系</li></ul><p><img src="`+P+`" alt="image-20210805105957957"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//集合参数：同名请求参数可以使用@RequestParam注解映射到对应名称的集合对象中作为数据</span></span>
<span class="line"><span>@RequestMapping(&quot;/listParam&quot;)</span></span>
<span class="line"><span>@ResponseBody</span></span>
<span class="line"><span>public String listParam(@RequestParam List&lt;String&gt; likes){</span></span>
<span class="line"><span>    System.out.println(&quot;集合参数传递 likes ==&gt; &quot;+ likes);</span></span>
<span class="line"><span>    return &quot;{&#39;module&#39;:&#39;list param&#39;}&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-4-json-数据参数传递-❤️" tabindex="-1">2.4 json 数据参数传递 ❤️ <a class="header-anchor" href="#_2-4-json-数据参数传递-❤️" aria-label="Permalink to &quot;2.4 json 数据参数传递 ❤️&quot;">​</a></h3><p>10 分钟</p><h4 id="_2-4-1-「json-数据参数传递」核心问题-答案" tabindex="-1">2.4.1 「json 数据参数传递」核心问题&amp;答案 <a class="header-anchor" href="#_2-4-1-「json-数据参数传递」核心问题-答案" aria-label="Permalink to &quot;2.4.1 「json 数据参数传递」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>@EnableWebMvc 注解和@ResponseBody 注解有什么用？</li></ol><p>点击查看代码</p><ol><li>@EnableWebMvc：开启自动转换 json 数据的支持</li><li>@ResponseBody：表名返回结果在响应体中，常常返回 json 字符串需要配置此注解</li></ol><h4 id="_2-4-2-json-数据参数介绍" tabindex="-1">2.4.2 json 数据参数介绍 <a class="header-anchor" href="#_2-4-2-json-数据参数介绍" aria-label="Permalink to &quot;2.4.2 json 数据参数介绍&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>- json 普通数组：[&quot;&quot;,&quot;&quot;,&quot;&quot;,...]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- json 对象：{key:value,key:value,...}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- json 对象数组: [{key:value,...},{key:value,...}]</span></span></code></pre></div><p><strong>传递 json 普通数组</strong></p><p><strong>代码演示</strong></p><h5 id="_1️⃣-添加-json-数据转换相关坐标" tabindex="-1">1️⃣ 添加 json 数据转换相关坐标 <a class="header-anchor" href="#_1️⃣-添加-json-数据转换相关坐标" aria-label="Permalink to &quot;1️⃣ 添加 json 数据转换相关坐标&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.fasterxml.jackson.core&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;jackson-databind&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;2.9.0&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><h5 id="_2️⃣-设置发送-json-数据-请求-body-中添加-json-数据" tabindex="-1">2️⃣ 设置发送 json 数据（请求 body 中添加 json 数据） <a class="header-anchor" href="#_2️⃣-设置发送-json-数据-请求-body-中添加-json-数据" aria-label="Permalink to &quot;2️⃣ 设置发送 json 数据（请求 body 中添加 json 数据）&quot;">​</a></h5><h5 id="_3️⃣-开启自动转换-json-数据的支持" tabindex="-1">3️⃣ 开启自动转换 json 数据的支持 <a class="header-anchor" href="#_3️⃣-开启自动转换-json-数据的支持" aria-label="Permalink to &quot;3️⃣ 开启自动转换 json 数据的支持&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ComponentScan(&quot;com.itheima.controller&quot;)</span></span>
<span class="line"><span>//开启json数据类型自动转换</span></span>
<span class="line"><span>@EnableWebMvc</span></span>
<span class="line"><span>public class SpringMvcConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>注意事项：</strong></p><p>@EnableWebMvc 注解功能强大，该注解整合了多个功能，此处仅使用其中一部分功能，即 json 数据进行自动类型转换</p><h5 id="_4️⃣-在-controller-中编写方法接收-json-参数" tabindex="-1">4️⃣ 在 Controller 中编写方法接收 json 参数 <a class="header-anchor" href="#_4️⃣-在-controller-中编写方法接收-json-参数" aria-label="Permalink to &quot;4️⃣ 在 Controller 中编写方法接收 json 参数&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//集合参数：json格式</span></span>
<span class="line"><span>//1.开启json数据格式的自动转换，在配置类中开启@EnableWebMvc</span></span>
<span class="line"><span>//2.使用@RequestBody注解将外部传递的json数组数据映射到形参的集合对象中作为数据</span></span>
<span class="line"><span>@RequestMapping(&quot;/listParamForJson&quot;)</span></span>
<span class="line"><span>@ResponseBody</span></span>
<span class="line"><span>public String listParamForJson(@RequestBody List&lt;String&gt; likes){</span></span>
<span class="line"><span>    System.out.println(&quot;list common(json)参数传递 list ==&gt; &quot;+likes);</span></span>
<span class="line"><span>    return &quot;{&#39;module&#39;:&#39;list common for json param&#39;}&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>注解介绍：</strong> ❤️ 👈</p><h5 id="enablewebmvc-注解介绍-❤️" tabindex="-1">@EnableWebMvc 注解介绍 ❤️ <a class="header-anchor" href="#enablewebmvc-注解介绍-❤️" aria-label="Permalink to &quot;@EnableWebMvc 注解介绍 ❤️&quot;">​</a></h5><ul><li>名称：@EnableWebMvc</li><li>类型：<strong>配置类注解</strong></li><li>位置：SpringMVC 配置类定义上方</li><li>作用：开启 SpringMVC 多项辅助功能</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ComponentScan(&quot;com.itheima.controller&quot;)</span></span>
<span class="line"><span>@EnableWebMvc</span></span>
<span class="line"><span>public class SpringMvcConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="requestbody-注解介绍-❤️" tabindex="-1">@RequestBody 注解介绍 ❤️ <a class="header-anchor" href="#requestbody-注解介绍-❤️" aria-label="Permalink to &quot;@RequestBody 注解介绍 ❤️&quot;">​</a></h5><ul><li>名称：@RequestBody</li><li>类型：<strong>形参注解</strong></li><li>位置：SpringMVC 控制器方法形参定义前面</li><li>作用：将请求中请求体所包含的数据传递给请求参数，此注解一个处理器方法只能使用一次</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RequestMapping(&quot;/listParamForJson&quot;)</span></span>
<span class="line"><span>@ResponseBody</span></span>
<span class="line"><span>public String listParamForJson(@RequestBody List&lt;String&gt; likes){</span></span>
<span class="line"><span>    System.out.println(&quot;list common(json)参数传递 list ==&gt; &quot;+likes);</span></span>
<span class="line"><span>    return &quot;{&#39;module&#39;:&#39;list common for json param&#39;}&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>传递 json 对象</strong></p><p>说明</p><ul><li>POJO 参数：json 数据与形参对象属性名相同，定义 POJO 类型形参即可接收参数</li></ul><p><img src="`+R+`" alt="image-20210805111544701"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//POJO参数：json格式</span></span>
<span class="line"><span>//1.开启json数据格式的自动转换，在配置类中开启@EnableWebMvc</span></span>
<span class="line"><span>//2.使用@RequestBody注解将外部传递的json数据映射到形参的实体类对象中，要求属性名称一一对应</span></span>
<span class="line"><span>@RequestMapping(&quot;/pojoParamForJson&quot;)</span></span>
<span class="line"><span>@ResponseBody</span></span>
<span class="line"><span>public String pojoParamForJson(@RequestBody User user){</span></span>
<span class="line"><span>    System.out.println(&quot;pojo(json)参数传递 user ==&gt; &quot;+user);</span></span>
<span class="line"><span>    return &quot;{&#39;module&#39;:&#39;pojo for json param&#39;}&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>传递 json 对象数组</strong></p><p>说明</p><ul><li>POJO 集合参数：json 数组数据与集合泛型属性名相同，定义 List 类型形参即可接收参数</li></ul><p><img src="`+x+`" alt="image-20210805111626095"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//集合参数：json格式</span></span>
<span class="line"><span>//1.开启json数据格式的自动转换，在配置类中开启@EnableWebMvc</span></span>
<span class="line"><span>//2.使用@RequestBody注解将外部传递的json数组数据映射到形参的保存实体类对象的集合对象中，要求属性名称一一对应</span></span>
<span class="line"><span>@RequestMapping(&quot;/listPojoParamForJson&quot;)</span></span>
<span class="line"><span>@ResponseBody</span></span>
<span class="line"><span>public String listPojoParamForJson(@RequestBody List&lt;User&gt; list){</span></span>
<span class="line"><span>    System.out.println(&quot;list pojo(json)参数传递 list ==&gt; &quot;+list);</span></span>
<span class="line"><span>    return &quot;{&#39;module&#39;:&#39;list pojo for json param&#39;}&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>@RequestBody 与@RequestParam 区别</p><ul><li><p>区别</p><ul><li><p>@RequestParam 用于接收 url 地址传参，表单传参【application/x-www-form-urlencoded】</p></li><li><p>@RequestBody 用于接收 json 数据【application/json】</p></li></ul></li><li><p>应用</p><ul><li><p>后期开发中，发送 json 格式数据为主，@RequestBody 应用较广</p></li><li><p>如果发送非 json 格式数据，选用@RequestParam 接收请求参数</p></li></ul></li></ul><h3 id="_2-5-mvc参数类型练习-✏️" tabindex="-1">2.5 Mvc参数类型练习 ✏️ <a class="header-anchor" href="#_2-5-mvc参数类型练习-✏️" aria-label="Permalink to &quot;2.5 Mvc参数类型练习 ✏️&quot;">​</a></h3><p>10 分钟</p><h4 id="_2-5-0「springmvc-参数类型案例」目的" tabindex="-1">2.5.0「SpringMvc 参数类型案例」目的 <a class="header-anchor" href="#_2-5-0「springmvc-参数类型案例」目的" aria-label="Permalink to &quot;2.5.0「SpringMvc 参数类型案例」目的&quot;">​</a></h4><blockquote><ol><li>熟悉模拟请求软件（PostMan 或者 Apifox）的使用</li><li>熟悉各个类型的参数的传递和接受</li><li>掌握 get 和 post 中文乱码处理的</li></ol></blockquote><h4 id="_2-5-1「springmvc-参数类型案例」需求-效果" tabindex="-1">2.5.1「SpringMvc 参数类型案例」需求&amp;效果 <a class="header-anchor" href="#_2-5-1「springmvc-参数类型案例」需求-效果" aria-label="Permalink to &quot;2.5.1「SpringMvc 参数类型案例」需求&amp;效果&quot;">​</a></h4><blockquote><p>各个接口均测试成功</p></blockquote><h4 id="_2-5-2「springmvc-参数类型案例」步鄹" tabindex="-1">2.5.2「SpringMvc 参数类型案例」步鄹 <a class="header-anchor" href="#_2-5-2「springmvc-参数类型案例」步鄹" aria-label="Permalink to &quot;2.5.2「SpringMvc 参数类型案例」步鄹&quot;">​</a></h4><ul><li>在飞秋中下载 springmvc_04_request_paramtest 压缩包，放到你的工程中</li><li>导入到项目中</li><li>阅读 UserController 类的信息</li><li>注意：导工程后，一定要做的三个步鄹 <ol><li>检查 Maven 仓库</li><li>检查 jdk-1.8</li><li>检查编译器版本-1.8</li></ol></li></ul><p>点击查看需求描述</p><ul><li><p>练习目标：掌握 JSOn 数据传输，和响应 JSON 对象</p></li><li><p>完成请求路径，</p></li><li><p>接受 JSON 参数，</p></li><li><p>返回 JSON 对象的操作</p></li><li><p>需求 1：</p><ul><li><ol><li>在练习之前导入 webapp 下的 SpringMvc 接口.apifox.json 文件到 apixfox 中，准备模拟请求</li></ol></li><li><ol start="2"><li>结合 apixfox 将下述的所有接口测试一遍 如果请求失败，请修改代码</li></ol></li><li><ol start="3"><li>如果完成了，请求完成需求 2</li></ol></li></ul></li><li><p>需求 2：</p><ul><li><ol><li>书写一个 WeahterController，并且书写一个接受天气的方法 getWeather 参数为 WeatherBean，</li></ol></li><li><ol start="2"><li>方法路径：/jsonWeather 类路径：/weather</li></ol></li><li><ol start="3"><li>在 postman 或者 apifox 中，填充 webapp 路径下的数据.json 数据，复制，粘贴到 postman 或者 apifox 中以 json 格式传递过来</li></ol><ul><li>注意：post 请求，postman 或者 apifox 选择选择 body---raw（注意 json 要格式化一行），如果是 apifox 选择 body----json</li></ul></li><li><ol start="4"><li>在 getWeather 方法中，接受前端传过来的 json 字符串，自动转成 WeatherBean ，然后打印 WeatherBean</li></ol></li><li><ol start="5"><li>将 WeatherBean 中的 reason : 查询成功 修改成为 reason : 查询 OK ，返回给前端</li></ol></li><li><ol start="6"><li>在 postman 或者 apifox 中观察 返回数据是否为 json 数据 是否修改为 查询 OK。</li></ol></li></ul></li></ul><h4 id="_2-5-3-json-字符串转-java-类的插件" tabindex="-1">2.5.3 JSON 字符串转 Java 类的插件 <a class="header-anchor" href="#_2-5-3-json-字符串转-java-类的插件" aria-label="Permalink to &quot;2.5.3 JSON 字符串转 Java 类的插件&quot;">​</a></h4><p>点击查看代码</p><ul><li><p>安装 <img src="`+j+'" alt=""></p></li><li><p>使用</p></li><li><p>新建一个类，在空白处，右击，选择插件</p></li><li><p>将 json 字符串粘贴到空白处，点击生成 java 代码 <img src="'+B+`" alt=""></p></li></ul><h3 id="_2-6-日期类型参数传递-🍐" tabindex="-1">2.6 日期类型参数传递 🍐 <a class="header-anchor" href="#_2-6-日期类型参数传递-🍐" aria-label="Permalink to &quot;2.6 日期类型参数传递 🍐&quot;">​</a></h3><p>08 分钟</p><h4 id="_2-6-1-「日期类型参数」核心问题-答案" tabindex="-1">2.6.1 「日期类型参数」核心问题&amp;答案 <a class="header-anchor" href="#_2-6-1-「日期类型参数」核心问题-答案" aria-label="Permalink to &quot;2.6.1 「日期类型参数」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>@DateTimeFormat 注解的作用是什么？</li></ol><p>点击查看</p><ul><li><p>名称：@DateTimeFormat</p></li><li><p>类型：<strong>形参注解</strong></p></li><li><p>位置：SpringMVC 控制器方法形参前面</p></li><li><p>作用：设定日期时间型数据格式，默认格式 yyyy/MM/dd</p></li><li><p>属性：pattern：指定日期时间格式字符串</p></li><li><p>@DateTimeFormat 注解 <strong>其内部依赖 Converter 接口</strong></p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public interface Converter&lt;S, T&gt; {</span></span>
<span class="line"><span>    @Nullable</span></span>
<span class="line"><span>    T convert(S var1);</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>此接口其他作用</strong>： <ul><li>请求参数年龄数据（String→Integer）</li><li>json 数据转对象（json → POJO）</li><li>日期格式转换（String → Date）</li></ul></li></ul><p>点击查看代码演示</p><ul><li>日期类型数据基于系统不同格式也不尽相同 2088-08-18 2088/08/18 08/18/2088</li><li>接收形参时，根据不同的日期格式设置不同的接收方式</li></ul><p><img src="`+T+`" alt="image-20210805113333189"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//日期参数 http://localhost:80/dataParam?date=2088/08/08&amp;date1=2088-08-18&amp;date2=2088/08/28 8:08:08</span></span>
<span class="line"><span>//使用@DateTimeFormat注解设置日期类型数据格式，默认格式yyyy/MM/dd</span></span>
<span class="line"><span>@RequestMapping(&quot;/dataParam&quot;)</span></span>
<span class="line"><span>@ResponseBody</span></span>
<span class="line"><span>public String dataParam(Date date,</span></span>
<span class="line"><span>                  @DateTimeFormat(pattern=&quot;yyyy-MM-dd&quot;) Date date1,</span></span>
<span class="line"><span>                  @DateTimeFormat(pattern=&quot;yyyy/MM/dd HH:mm:ss&quot;) Date date2){</span></span>
<span class="line"><span>    System.out.println(&quot;参数传递 date ==&gt; &quot;+date);</span></span>
<span class="line"><span>    System.out.println(&quot;参数传递 date1(yyyy-MM-dd) ==&gt; &quot;+date1);</span></span>
<span class="line"><span>    System.out.println(&quot;参数传递 date2(yyyy/MM/dd HH:mm:ss) ==&gt; &quot;+date2);</span></span>
<span class="line"><span>    return &quot;{&#39;module&#39;:&#39;data param&#39;}&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-7-响应" tabindex="-1">2.7 响应 <a class="header-anchor" href="#_2-7-响应" aria-label="Permalink to &quot;2.7 响应&quot;">​</a></h3><p>10 分钟</p><h4 id="_2-7-1-「响应」核心问题-答案" tabindex="-1">2.7.1 「响应」核心问题&amp;答案 <a class="header-anchor" href="#_2-7-1-「响应」核心问题-答案" aria-label="Permalink to &quot;2.7.1 「响应」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>如何响应 json 数据？</li></ol><p>点击查看代码</p><ul><li>在类或者方法上添加 @ResponseBody 注解 并且保障</li><li>SpringMvcConfig 配置类上添加@EnableWebMvc 注解</li></ul><h4 id="json-数据-❤️" tabindex="-1">json 数据 ❤️ <a class="header-anchor" href="#json-数据-❤️" aria-label="Permalink to &quot;json 数据 ❤️&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//响应POJO对象</span></span>
<span class="line"><span>//返回值为实体类对象，设置返回值为实体类类型，即可实现返回对应对象的json数据，需要依赖@ResponseBody注解和@EnableWebMvc注解</span></span>
<span class="line"><span>@RequestMapping(&quot;/toJsonPOJO&quot;)</span></span>
<span class="line"><span>@ResponseBody</span></span>
<span class="line"><span>public User toJsonPOJO(){</span></span>
<span class="line"><span>    System.out.println(&quot;返回json对象数据&quot;);</span></span>
<span class="line"><span>    User user = new User();</span></span>
<span class="line"><span>    user.setName(&quot;itcast&quot;);</span></span>
<span class="line"><span>    user.setAge(15);</span></span>
<span class="line"><span>    return user;</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//响应POJO集合对象</span></span>
<span class="line"><span>//返回值为集合对象，设置返回值为集合类型，即可实现返回对应集合的json数组数据，需要依赖@ResponseBody注解和@EnableWebMvc注解</span></span>
<span class="line"><span>@RequestMapping(&quot;/toJsonList&quot;)</span></span>
<span class="line"><span>@ResponseBody</span></span>
<span class="line"><span>public List&lt;User&gt; toJsonList(){</span></span>
<span class="line"><span>    System.out.println(&quot;返回json集合数据&quot;);</span></span>
<span class="line"><span>    User user1 = new User();</span></span>
<span class="line"><span>    user1.setName(&quot;传智播客&quot;);</span></span>
<span class="line"><span>    user1.setAge(15);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    User user2 = new User();</span></span>
<span class="line"><span>    user2.setName(&quot;黑马程序员&quot;);</span></span>
<span class="line"><span>    user2.setAge(12);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    List&lt;User&gt; userList = new ArrayList&lt;User&gt;();</span></span>
<span class="line"><span>    userList.add(user1);</span></span>
<span class="line"><span>    userList.add(user2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return userList;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>注意：需要添加 jackson-databind 依赖以及在 SpringMvcConfig 配置类上添加@EnableWebMvc 注解</strong></p><h4 id="响应页面-🚀" tabindex="-1">响应页面 🚀 <a class="header-anchor" href="#响应页面-🚀" aria-label="Permalink to &quot;响应页面 🚀&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Controller</span></span>
<span class="line"><span>public class UserController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //响应页面/跳转页面</span></span>
<span class="line"><span>    //返回值为String类型，设置返回值为页面名称，即可实现页面跳转</span></span>
<span class="line"><span>    @RequestMapping(&quot;/toJumpPage&quot;)</span></span>
<span class="line"><span>    public String toJumpPage(){</span></span>
<span class="line"><span>        System.out.println(&quot;跳转页面&quot;);</span></span>
<span class="line"><span>        return &quot;page.jsp&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>    &lt;head&gt;</span></span>
<span class="line"><span>        &lt;title&gt;Title&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;/head&gt;</span></span>
<span class="line"><span>    &lt;body&gt;</span></span>
<span class="line"><span>        &lt;h2&gt;Hello Spring MVC!&lt;/h2&gt;</span></span>
<span class="line"><span>    &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h4 id="文本数据-🚀" tabindex="-1">文本数据 🚀 <a class="header-anchor" href="#文本数据-🚀" aria-label="Permalink to &quot;文本数据 🚀&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//响应文本数据</span></span>
<span class="line"><span>//返回值为String类型，设置返回值为任意字符串信息，即可实现返回指定字符串信息，需要依赖@ResponseBody注解</span></span>
<span class="line"><span>@RequestMapping(&quot;/toText&quot;)</span></span>
<span class="line"><span>@ResponseBody</span></span>
<span class="line"><span>public String toText(){</span></span>
<span class="line"><span>    System.out.println(&quot;返回纯文本数据&quot;);</span></span>
<span class="line"><span>    return &quot;response text&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-8-springmvc响应案例-✏️" tabindex="-1">2.8 SpringMvc响应案例 ✏️ <a class="header-anchor" href="#_2-8-springmvc响应案例-✏️" aria-label="Permalink to &quot;2.8 SpringMvc响应案例 ✏️&quot;">​</a></h3><p>10 分钟</p><h4 id="_2-8-0「springmvc-响应」目的" tabindex="-1">2.8.0「SpringMvc 响应」目的 <a class="header-anchor" href="#_2-8-0「springmvc-响应」目的" aria-label="Permalink to &quot;2.8.0「SpringMvc 响应」目的&quot;">​</a></h4><blockquote><p>熟悉对象自动转 json 和集合自动转 json</p></blockquote><h4 id="_2-8-1「springmvc-响应」需求-效果" tabindex="-1">2.8.1「SpringMvc 响应」需求&amp;效果 <a class="header-anchor" href="#_2-8-1「springmvc-响应」需求-效果" aria-label="Permalink to &quot;2.8.1「SpringMvc 响应」需求&amp;效果&quot;">​</a></h4><blockquote><p>需求 1 和需求 2</p></blockquote><h4 id="_2-8-2「springmvc-参数类型案例」步鄹" tabindex="-1">2.8.2「SpringMvc 参数类型案例」步鄹 <a class="header-anchor" href="#_2-8-2「springmvc-参数类型案例」步鄹" aria-label="Permalink to &quot;2.8.2「SpringMvc 参数类型案例」步鄹&quot;">​</a></h4><ul><li>在飞秋中下载 springmvc_04_request_paramtest 压缩包，放到你的工程中</li><li>导入到项目中</li><li>完成通知类中的代码</li><li>注意：导工程后，一定要做的三个步鄹 <ol><li>检查 Maven 仓库</li><li>检查 jdk-1.8</li><li>检查编译器版本-1.8</li></ol></li></ul><h2 id="_3-rest-风格" tabindex="-1">3. REST 风格 <a class="header-anchor" href="#_3-rest-风格" aria-label="Permalink to &quot;3\\. REST 风格&quot;">​</a></h2><h3 id="_3-1-rest-简介-🍐" tabindex="-1">3.1 REST 简介 🍐 <a class="header-anchor" href="#_3-1-rest-简介-🍐" aria-label="Permalink to &quot;3.1 REST 简介 🍐&quot;">​</a></h3><p>09 分钟</p><h4 id="_3-1-1-「rest-简介」核心问题-答案" tabindex="-1">3.1.1 「REST 简介」核心问题&amp;答案 <a class="header-anchor" href="#_3-1-1-「rest-简介」核心问题-答案" aria-label="Permalink to &quot;3.1.1 「REST 简介」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>Rest 风格使用了几种请求方式定义访问行为？</li></ol><p>点击查看</p><ul><li>行为：增删改查</li></ul><h4 id="rest-介绍" tabindex="-1">REST 介绍 <a class="header-anchor" href="#rest-介绍" aria-label="Permalink to &quot;REST 介绍&quot;">​</a></h4><ul><li>REST（Representational State Transfer），表现形式状态转换 <ul><li>传统风格资源描述形式 <ul><li><a href="http://localhost/user/getById?id=1" target="_blank" rel="noreferrer">http://localhost/user/getById?id=1open in new window</a></li><li><a href="http://localhost/user/saveUser" target="_blank" rel="noreferrer">http://localhost/user/saveUseropen in new window</a></li></ul></li><li>REST 风格描述形式 <ul><li><a href="http://localhost/user/1" target="_blank" rel="noreferrer">http://localhost/user/1open in new window</a> 👈</li><li><a href="http://localhost/user" target="_blank" rel="noreferrer">http://localhost/useropen in new window</a> 👈</li></ul></li></ul></li><li>优点： <ul><li>隐藏资源的访问行为，无法通过地址得知对资源是何种操作</li><li>书写简化</li></ul></li></ul><h4 id="restful-介绍" tabindex="-1">RESTful 介绍 <a class="header-anchor" href="#restful-介绍" aria-label="Permalink to &quot;RESTful 介绍&quot;">​</a></h4><ul><li>按照 REST 风格访问资源时使用<strong>行为动作</strong>区分对资源进行了何种操作 <ul><li><a href="http://localhost/users" target="_blank" rel="noreferrer">http://localhost/usersopen in new window</a> 查询全部用户信息 （查询） 👈</li><li><a href="http://localhost/users/1" target="_blank" rel="noreferrer">http://localhost/users/1open in new window</a> 查询指定用户信息（查询） 👈</li><li><a href="http://localhost/users" target="_blank" rel="noreferrer">http://localhost/usersopen in new window</a> 添加用户信息（新增/保存） 👈</li><li><a href="http://localhost/users" target="_blank" rel="noreferrer">http://localhost/usersopen in new window</a> 修改用户信息（修改/更新） 👈</li><li><a href="http://localhost/users/1" target="_blank" rel="noreferrer">http://localhost/users/1open in new window</a> 删除用户信息（删除） 👈</li></ul></li><li>根据 REST 风格对资源进行访问称为 RESTful</li></ul><h4 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h4><ul><li>上述行为是约定方式，约定不是规范，可以打破，<strong>所以称 REST 风格，而不是 REST 规范</strong> 👈 👈</li><li>描述模块的名称通常使用复数，也就是加 s 的格式描述，表示此类资源，而非单个资源，例如：users、books、accounts…… <ol><li>get post put delete</li><li>传参数的地方：请求行 请求体 响应数据：响应体</li></ol></li></ul><h3 id="_3-2-restful-入门案例" tabindex="-1">3.2 RESTful 入门案例 <a class="header-anchor" href="#_3-2-restful-入门案例" aria-label="Permalink to &quot;3.2 RESTful 入门案例&quot;">​</a></h3><p>11 分钟</p><h4 id="_3-2-1-「restful-入门案例」核心问题-答案" tabindex="-1">3.2.1 「RESTful 入门案例」核心问题&amp;答案 <a class="header-anchor" href="#_3-2-1-「restful-入门案例」核心问题-答案" aria-label="Permalink to &quot;3.2.1 「RESTful 入门案例」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>Rest 风格如何通过路径传递参数？</li></ol><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@PathVariable 介绍</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 名称：@PathVariable</span></span>
<span class="line"><span>- 类型：形参注解</span></span>
<span class="line"><span>- 位置：SpringMVC 控制器方法形参定义前面</span></span>
<span class="line"><span>- 作用：绑定路径参数与处理器方法形参间的关系，要求路径参数名与形参名一一对应</span></span>
<span class="line"><span>![image-20210805120253164](http://image.yangeit.cn/i/2023/06/15/image-20210805120253164.png)</span></span></code></pre></div><h4 id="_3-2-2-快速入门" tabindex="-1">3.2.2 快速入门 <a class="header-anchor" href="#_3-2-2-快速入门" aria-label="Permalink to &quot;3.2.2 快速入门&quot;">​</a></h4><blockquote><p>做法：在 Controller 中定义方法时设定&quot;http 请求动作(请求方式)&quot;和&quot;设定请求参数（路径变量）&quot;</p></blockquote><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Controller</span></span>
<span class="line"><span>public class UserController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //设置当前请求方法为POST，表示REST风格中的添加操作</span></span>
<span class="line"><span>    @RequestMapping(value = &quot;/users&quot;,method = RequestMethod.POST)</span></span>
<span class="line"><span>    @ResponseBody</span></span>
<span class="line"><span>    public String save(){</span></span>
<span class="line"><span>        System.out.println(&quot;user save...&quot;);</span></span>
<span class="line"><span>        return &quot;{&#39;module&#39;:&#39;user save&#39;}&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //设置当前请求方法为DELETE，表示REST风格中的删除操作</span></span>
<span class="line"><span>    //@PathVariable注解用于设置路径变量（路径参数），要求路径上设置对应的占位符，并且占位符名称与方法形参名称相同</span></span>
<span class="line"><span>    @RequestMapping(value = &quot;/users/{id}&quot;,method = RequestMethod.DELETE)</span></span>
<span class="line"><span>    @ResponseBody</span></span>
<span class="line"><span>    public String delete(@PathVariable Integer id){</span></span>
<span class="line"><span>        System.out.println(&quot;user delete...&quot; + id);</span></span>
<span class="line"><span>        return &quot;{&#39;module&#39;:&#39;user delete&#39;}&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //设置当前请求方法为PUT，表示REST风格中的修改操作</span></span>
<span class="line"><span>    @RequestMapping(value = &quot;/users&quot;,method = RequestMethod.PUT)</span></span>
<span class="line"><span>    @ResponseBody</span></span>
<span class="line"><span>    public String update(@RequestBody User user){</span></span>
<span class="line"><span>        System.out.println(&quot;user update...&quot;+user);</span></span>
<span class="line"><span>        return &quot;{&#39;module&#39;:&#39;user update&#39;}&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //设置当前请求方法为GET，表示REST风格中的查询操作</span></span>
<span class="line"><span>    //@PathVariable注解用于设置路径变量（路径参数），要求路径上设置对应的占位符，并且占位符名称与方法形参名称相同</span></span>
<span class="line"><span>    @RequestMapping(value = &quot;/users/{id}&quot; ,method = RequestMethod.GET)</span></span>
<span class="line"><span>    @ResponseBody</span></span>
<span class="line"><span>    public String getById(@PathVariable Integer id){</span></span>
<span class="line"><span>        System.out.println(&quot;user getById...&quot;+id);</span></span>
<span class="line"><span>        return &quot;{&#39;module&#39;:&#39;user getById&#39;}&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //设置当前请求方法为GET，表示REST风格中的查询操作</span></span>
<span class="line"><span>    @RequestMapping(value = &quot;/users&quot;,method = RequestMethod.GET)</span></span>
<span class="line"><span>    @ResponseBody</span></span>
<span class="line"><span>    public String getAll(){</span></span>
<span class="line"><span>        System.out.println(&quot;user getAll...&quot;);</span></span>
<span class="line"><span>        return &quot;{&#39;module&#39;:&#39;user getAll&#39;}&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>@RequestBody、@RequestParam、@PathVariable 区别和应用</p><p>❤️ ❤️ 🍐</p><ul><li>区别 <ul><li>@RequestParam 用于接收 url 地址传参或表单传参</li><li>@RequestBody 用于接收 json 数据</li><li>@PathVariable 用于接收路径参数，使用{参数名称}描述路径参数</li></ul></li><li>应用 <ul><li>后期开发中，发送请求参数超过 1 个时，以 json 格式为主，@RequestBody 应用较广</li><li>如果发送非 json 格式数据，选用@RequestParam 接收请求参数</li><li>采用 RESTful 进行开发，当参数数量较少时，例如 1 个，可以采用@PathVariable 接收请求路径变量，通常用于传递 id 值</li></ul></li></ul><h3 id="_3-3-rest-快速开发-❤️" tabindex="-1">3.3 REST 快速开发 ❤️ <a class="header-anchor" href="#_3-3-rest-快速开发-❤️" aria-label="Permalink to &quot;3.3 REST 快速开发 ❤️&quot;">​</a></h3><p>08 分钟</p><p>代码中的问题</p><p><img src="`+E+`" alt="image-20210805132351738"></p><blockquote><p>以上截图中的代码和我们之前写的 UserController 中的方法类似，其中图中两个方法都有三处是有问题的，可以进行优化。存在的问题如下：</p></blockquote><ul><li><p><strong>问题 1</strong>：每个方法的@RequestMapping 注解中都定义了访问路径/books，重复性太高。</p></li><li><p><strong>问题 2</strong>：每个方法的@RequestMapping 注解中都要使用 method 属性定义请求方式，重复性太高。</p></li><li><p><strong>问题 3</strong>：每个方法响应 json 都需要加上@ResponseBody 注解，重复性太高。</p></li></ul><h4 id="_3-3-2-rest-快速开发" tabindex="-1">3.3.2 Rest 快速开发 <a class="header-anchor" href="#_3-3-2-rest-快速开发" aria-label="Permalink to &quot;3.3.2 Rest 快速开发&quot;">​</a></h4><blockquote><p>解决以上三个问题</p></blockquote><p><strong>解决问题 1</strong>：在 Controller 类上使用@RequestMapping 定义共同的访问路径。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Controller</span></span>
<span class="line"><span>@RequestMapping(&quot;/books&quot;)</span></span>
<span class="line"><span>public class BookController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @RequestMapping(method = RequestMethod.POST)</span></span>
<span class="line"><span>    public String save(@RequestBody Book book){</span></span>
<span class="line"><span>        System.out.println(&quot;book save...&quot; + book);</span></span>
<span class="line"><span>        return &quot;{&#39;module&#39;:&#39;book save&#39;}&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @RequestMapping(value = &quot;/{id}&quot; ,method = RequestMethod.DELETE)</span></span>
<span class="line"><span>    public String delete(@PathVariable Integer id){</span></span>
<span class="line"><span>        System.out.println(&quot;book delete...&quot; + id);</span></span>
<span class="line"><span>        return &quot;{&#39;module&#39;:&#39;book delete&#39;}&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @RequestMapping(method = RequestMethod.PUT)</span></span>
<span class="line"><span>    public String update(@RequestBody Book book){</span></span>
<span class="line"><span>        System.out.println(&quot;book update...&quot;+book);</span></span>
<span class="line"><span>        return &quot;{&#39;module&#39;:&#39;book update&#39;}&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @RequestMapping(value = &quot;/{id}&quot; ,method = RequestMethod.GET)</span></span>
<span class="line"><span>    public String getById(@PathVariable Integer id){</span></span>
<span class="line"><span>        System.out.println(&quot;book getById...&quot;+id);</span></span>
<span class="line"><span>        return &quot;{&#39;module&#39;:&#39;book getById&#39;}&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @RequestMapping(method = RequestMethod.GET)</span></span>
<span class="line"><span>    public String getAll(){</span></span>
<span class="line"><span>        System.out.println(&quot;book getAll...&quot;);</span></span>
<span class="line"><span>        return &quot;{&#39;module&#39;:&#39;book getAll&#39;}&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>解决问题 2</strong>：使用@GetMapping @PostMapping @PutMapping @DeleteMapping 代替@RequestMapping(<a href="http://method%3Drequestmethod.xxx/" target="_blank" rel="noreferrer">method=RequestMethod.XXXopen in new window</a>)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Controller</span></span>
<span class="line"><span>@RequestMapping(&quot;/books&quot;)</span></span>
<span class="line"><span>public class BookController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//    @RequestMapping( method = RequestMethod.POST)</span></span>
<span class="line"><span>    @PostMapping//使用@PostMapping简化Post请求方法对应的映射配置</span></span>
<span class="line"><span>    public String save(@RequestBody Book book){</span></span>
<span class="line"><span>        System.out.println(&quot;book save...&quot; + book);</span></span>
<span class="line"><span>        return &quot;{&#39;module&#39;:&#39;book save&#39;}&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//    @RequestMapping(value = &quot;/{id}&quot; ,method = RequestMethod.DELETE)</span></span>
<span class="line"><span>    @DeleteMapping(&quot;/{id}&quot;)  //使用@DeleteMapping简化DELETE请求方法对应的映射配置</span></span>
<span class="line"><span>    public String delete(@PathVariable Integer id){</span></span>
<span class="line"><span>        System.out.println(&quot;book delete...&quot; + id);</span></span>
<span class="line"><span>        return &quot;{&#39;module&#39;:&#39;book delete&#39;}&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//    @RequestMapping(method = RequestMethod.PUT)</span></span>
<span class="line"><span>    @PutMapping   //使用@PutMapping简化Put请求方法对应的映射配置</span></span>
<span class="line"><span>    public String update(@RequestBody Book book){</span></span>
<span class="line"><span>        System.out.println(&quot;book update...&quot;+book);</span></span>
<span class="line"><span>        return &quot;{&#39;module&#39;:&#39;book update&#39;}&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//    @RequestMapping(value = &quot;/{id}&quot; ,method = RequestMethod.GET)</span></span>
<span class="line"><span>    @GetMapping(&quot;/{id}&quot;)    //使用@GetMapping简化GET请求方法对应的映射配置</span></span>
<span class="line"><span>    public String getById(@PathVariable Integer id){</span></span>
<span class="line"><span>        System.out.println(&quot;book getById...&quot;+id);</span></span>
<span class="line"><span>        return &quot;{&#39;module&#39;:&#39;book getById&#39;}&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//    @RequestMapping(method = RequestMethod.GET)</span></span>
<span class="line"><span>    @GetMapping      //使用@GetMapping简化GET请求方法对应的映射配置</span></span>
<span class="line"><span>    public String getAll(){</span></span>
<span class="line"><span>        System.out.println(&quot;book getAll...&quot;);</span></span>
<span class="line"><span>        return &quot;{&#39;module&#39;:&#39;book getAll&#39;}&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>名称：@GetMapping @PostMapping @PutMapping @DeleteMapping</li><li>类型：方法注解</li><li>位置：基于 SpringMVC 的 RESTful 开发控制器方法定义上方</li><li>作用：设置当前控制器方法请求访问路径与请求动作，每种对应一个请求动作，例如@GetMapping 对应 GET 请求</li><li>属性： value（默认）：请求访问路径</li></ul><p><strong>解决问题 3</strong>：在 Controller 类上使用@RestController 注解，等同于@Controller 与@ResponseBody 两个注解组合功能</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController     //使用@RestController注解替换@Controller与@ResponseBody注解，简化书写</span></span>
<span class="line"><span>@RequestMapping(&quot;/books&quot;)</span></span>
<span class="line"><span>public class BookController {</span></span>
<span class="line"><span>    //方法省略了没写</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>名称：@RestController</li><li>类型：类注解</li><li>位置：基于 SpringMVC 的 RESTful 开发控制器类定义上方</li><li>作用：设置当前控制器类为 RESTful 风格，等同于@Controller 与@ResponseBody 两个注解组合功能</li></ul><h3 id="_3-4-案例-基于-restful-页面数据交互-✏️" tabindex="-1">3.4 案例：基于 RESTful 页面数据交互 ✏️ <a class="header-anchor" href="#_3-4-案例-基于-restful-页面数据交互-✏️" aria-label="Permalink to &quot;3.4 案例：基于 RESTful 页面数据交互 ✏️&quot;">​</a></h3><p>10+16 分钟</p><h4 id="案例效果" tabindex="-1">案例效果 <a class="header-anchor" href="#案例效果" aria-label="Permalink to &quot;案例效果&quot;">​</a></h4><h5 id="_1️⃣-环境准备" tabindex="-1">1️⃣ 环境准备 <a class="header-anchor" href="#_1️⃣-环境准备" aria-label="Permalink to &quot;1️⃣ 环境准备&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//POJO实体类</span></span>
<span class="line"><span>public class Book {</span></span>
<span class="line"><span>    private Integer id;</span></span>
<span class="line"><span>    private String type;</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private String description;</span></span>
<span class="line"><span>    //同学们自己重写getter、setter、toString()方法...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//SpringMVC容器初始化类</span></span>
<span class="line"><span>public class ServletContainersInitConfig extends AbstractAnnotationConfigDispatcherServletInitializer {</span></span>
<span class="line"><span>    protected Class&lt;?&gt;[] getRootConfigClasses() {</span></span>
<span class="line"><span>        return new Class[0];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    protected Class&lt;?&gt;[] getServletConfigClasses() {</span></span>
<span class="line"><span>        return new Class[]{SpringMvcConfig.class};</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    protected String[] getServletMappings() {</span></span>
<span class="line"><span>        return new String[]{&quot;/&quot;};</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //乱码处理</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    protected Filter[] getServletFilters() {</span></span>
<span class="line"><span>        CharacterEncodingFilter filter = new CharacterEncodingFilter();</span></span>
<span class="line"><span>        filter.setEncoding(&quot;UTF-8&quot;);</span></span>
<span class="line"><span>        return new Filter[]{filter};</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//SpringMVC配置类</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ComponentScan({&quot;com.itheima.controller&quot;,&quot;com.itheima.config&quot;})</span></span>
<span class="line"><span>@EnableWebMvc</span></span>
<span class="line"><span>public class SpringMvcConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_2️⃣-制作-springmvc-控制器-并通过-postman-apifox-测试接口功能" tabindex="-1">2️⃣ 制作 SpringMVC 控制器，并通过 PostMan/Apifox 测试接口功能 <a class="header-anchor" href="#_2️⃣-制作-springmvc-控制器-并通过-postman-apifox-测试接口功能" aria-label="Permalink to &quot;2️⃣ 制作 SpringMVC 控制器，并通过 PostMan/Apifox 测试接口功能&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/books&quot;)</span></span>
<span class="line"><span>public class BookController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PostMapping</span></span>
<span class="line"><span>    public String save(@RequestBody Book book){</span></span>
<span class="line"><span>        System.out.println(&quot;book save ==&gt; &quot;+ book);</span></span>
<span class="line"><span>        return &quot;{&#39;module&#39;:&#39;book save success&#39;}&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping</span></span>
<span class="line"><span>    public List&lt;Book&gt; getAll(){</span></span>
<span class="line"><span>        System.out.println(&quot;book getAll is running ...&quot;);</span></span>
<span class="line"><span>        List&lt;Book&gt; bookList = new ArrayList&lt;Book&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Book book1 = new Book();</span></span>
<span class="line"><span>        book1.setType(&quot;计算机&quot;);</span></span>
<span class="line"><span>        book1.setName(&quot;SpringMVC入门教程&quot;);</span></span>
<span class="line"><span>        book1.setDescription(&quot;小试牛刀&quot;);</span></span>
<span class="line"><span>        bookList.add(book1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Book book2 = new Book();</span></span>
<span class="line"><span>        book2.setType(&quot;计算机&quot;);</span></span>
<span class="line"><span>        book2.setName(&quot;SpringMVC实战教程&quot;);</span></span>
<span class="line"><span>        book2.setDescription(&quot;一代宗师&quot;);</span></span>
<span class="line"><span>        bookList.add(book2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Book book3 = new Book();</span></span>
<span class="line"><span>        book3.setType(&quot;计算机丛书&quot;);</span></span>
<span class="line"><span>        book3.setName(&quot;SpringMVC实战教程进阶&quot;);</span></span>
<span class="line"><span>        book3.setDescription(&quot;一代宗师呕心创作&quot;);</span></span>
<span class="line"><span>        bookList.add(book3);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return bookList;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_3️⃣-配置前端资源-设置对静态资源的访问放行" tabindex="-1">3️⃣ 配置前端资源，设置对静态资源的访问放行 <a class="header-anchor" href="#_3️⃣-配置前端资源-设置对静态资源的访问放行" aria-label="Permalink to &quot;3️⃣ 配置前端资源，设置对静态资源的访问放行&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class SpringMvcSupport extends WebMvcConfigurationSupport {</span></span>
<span class="line"><span>    //设置静态资源访问过滤，当前类需要设置为配置类，并被扫描加载</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    protected void addResourceHandlers(ResourceHandlerRegistry registry) {</span></span>
<span class="line"><span>        //当访问/pages/????时候，从/pages目录下查找内容</span></span>
<span class="line"><span>        registry.addResourceHandler(&quot;/pages/**&quot;)</span></span>
<span class="line"><span>            .addResourceLocations(&quot;/pages/&quot;);</span></span>
<span class="line"><span>        registry.addResourceHandler(&quot;/js/**&quot;)</span></span>
<span class="line"><span>            .addResourceLocations(&quot;/js/&quot;);</span></span>
<span class="line"><span>        registry.addResourceHandler(&quot;/css/**&quot;)</span></span>
<span class="line"><span>            .addResourceLocations(&quot;/css/&quot;);</span></span>
<span class="line"><span>        registry.addResourceHandler(&quot;/plugins/**&quot;)</span></span>
<span class="line"><span>            .addResourceLocations(&quot;/plugins/&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_4️⃣-前端页面通过异步提交访问后台控制器" tabindex="-1">4️⃣ 前端页面通过异步提交访问后台控制器 <a class="header-anchor" href="#_4️⃣-前端页面通过异步提交访问后台控制器" aria-label="Permalink to &quot;4️⃣ 前端页面通过异步提交访问后台控制器&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//添加</span></span>
<span class="line"><span>saveBook () {</span></span>
<span class="line"><span>    axios.post(&quot;/books&quot;,this.formData).then((res)=&gt;{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>//主页列表查询</span></span>
<span class="line"><span>getAll() {</span></span>
<span class="line"><span>    axios.get(&quot;/books&quot;).then((res)=&gt;{</span></span>
<span class="line"><span>        this.dataList = res.data;</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>},</span></span></code></pre></div><h2 id="_3-5-restful-练习✏️" tabindex="-1">3.5 RESTful 练习✏️ <a class="header-anchor" href="#_3-5-restful-练习✏️" aria-label="Permalink to &quot;3.5 RESTful 练习✏️&quot;">​</a></h2><p>10 分钟</p><h4 id="_3-5-0「restful-」目的" tabindex="-1">3.5.0「RESTful 」目的 <a class="header-anchor" href="#_3-5-0「restful-」目的" aria-label="Permalink to &quot;3.5.0「RESTful 」目的&quot;">​</a></h4><blockquote><p>熟悉 RESTfu 开发注解以及静态资源放行</p></blockquote><h4 id="_3-5-1「restful」需求-效果" tabindex="-1">3.5.1「RESTful」需求&amp;效果 <a class="header-anchor" href="#_3-5-1「restful」需求-效果" aria-label="Permalink to &quot;3.5.1「RESTful」需求&amp;效果&quot;">​</a></h4><blockquote><p>能够对接前后端资源</p></blockquote><h4 id="_3-5-2「restful」步鄹" tabindex="-1">3.5.2「RESTful」步鄹 <a class="header-anchor" href="#_3-5-2「restful」步鄹" aria-label="Permalink to &quot;3.5.2「RESTful」步鄹&quot;">​</a></h4><ul><li>在飞秋中下载 springmvc_07_rest_casetest 压缩包，放到你的工程中</li><li>导入到项目中</li><li>完成 BookController 中的代码和检查其他类中的 TODO，补充对应的代码</li><li>注意：导工程后，一定要做的三个步鄹 <ol><li>检查 Maven 仓库</li><li>检查 jdk-1.8</li><li>检查编译器版本-1.8</li></ol></li></ul>`,343),A=[O];function V(I,W,J,U,D,F){return n(),a("div",null,A)}const G=s(w,[["render",V]]);export{N as __pageData,G as default};
