import{_ as a,c as p,o as l,a4 as t}from"./chunks/framework.-JfgED0h.js";const o="/docs/assets/image-20230113144757856.OS1gjKwP.png",i="/docs/assets/image-20230113145158771.kXWijAUn.png",e="/docs/assets/image-20230113162746634.wEQsNKjU.png",r="/docs/assets/image-20230113162639630.baIZAFFU.png",c="/docs/assets/image-20230113165006550.CwuHLY8K.png",g="/docs/assets/image-20230113170841253.BUT6Rank.png",u="/docs/assets/image-20230113172313655.DWwp75Z4.png",d="/docs/assets/image-20230113172854016.CQndFZdX.png",m="/docs/assets/image-20230113172659269.kgvfEeog.png",b="/docs/assets/image-20230113173228232.CphcVAnC.png",h="/docs/assets/5476092184027471820.BE7nFBaI.png",n="/docs/assets/5476131363042106350.C5HxdOvf.png",S="/docs/assets/image-20230113214244144.DTpE8FK0.png",C="/docs/assets/5476132527053739812.ltzCoSTl.png",k="/docs/assets/5476136795009716233.kK4d4m7m.png",v="/docs/assets/5476140062137655294.CSgtl4WA.png",B="/docs/assets/image-20230114171304644.BwI7eILm.png",I="/docs/assets/image-20230114170610438.aQjqD8qa.png",q="/docs/assets/5476110655499014767.CiUXL2Bc.png",f="/docs/assets/image-20230114172442018.BDUJh1y9.png",_="/docs/assets/5476111977908542739.DZU-btAA.png",s="/docs/assets/image-20230114222245520.DYdbUeF5.png",y="/docs/assets/image-20230114221341811.BcpZs7_j.png",O="/docs/assets/2023-04-17-00-57-07.BZCAzIAw.png",x="/docs/assets/2023-04-17-00-59-19.BJI8dQy7.png",A="/docs/assets/2023-04-17-01-00-37.D-YPWLLg.png",w="/docs/assets/2023-04-17-01-00-52.DM5uh0j_.png",P="/docs/assets/2023-04-17-01-03-09.CmYt0Gll.png",j="/docs/assets/2023-04-17-01-07-48.CBsYEpbQ.png",E="/docs/assets/2023-04-17-01-12-33.C84GDViH.png",T="/docs/assets/2023-04-17-01-15-41.DjILL9VN.png",U="/docs/assets/5476123391444391895.BjBsD3ge.png",D="/docs/assets/image-20230115001439110.CHX6osK2.png",M="/docs/assets/image-20230115001950076.Chu2B3Od.png",N="/docs/assets/image-20230115002450993.BtwKDCcq.png",G="/docs/assets/image-20230115002743115.CXE8ya5f.png",F="/docs/assets/image-20230115003242549.D7dfywj2.png",J="/docs/assets/image-20230115003348288.DQuRqPdb.png",R="/docs/assets/image-20230115003704385.D615BYCE.png",L="/docs/assets/image-20230115003903302.DiO2zAxy.png",z="/docs/assets/image-20230129090835964.Iu7D08IC.png",K="/docs/assets/image-20230115064329460.CVXLrbPd.png",X="/docs/assets/image-20230115005159530.C8eQuIpG.png",V="/docs/assets/image-20230115005418900.hE8_b_xC.png",W="/docs/assets/image-20230115065247287.B3qUi7Ti.png",Q="/docs/assets/2023-04-17-01-23-59.CR26nCCP.png",Y="/docs/assets/2023-04-17-01-33-36.DkPOkBN0.png",Z="/docs/assets/2023-04-17-01-37-36.DeEnuZm5.png",H="/docs/assets/image-20230115222302753.DjS6Tc9N.png",$="/docs/assets/image-20230115224939131.CPFoYV7j.png",nn="/docs/assets/5476147717929442492.BomUVBaD.png",sn="/docs/assets/image-20230116000542905.CMTOuwa1.png",an="/docs/assets/5476149877408800750.Byll2DRc.png",pn="/docs/assets/5476150667204629878.BnhfOU3u.png",ln="/docs/assets/image-20230116004957697.p8jj2Rsl.png",tn="/docs/assets/image-20230116005530815.UFRI2_z1.png",on="/docs/assets/image-20230116011039611.DTYe0ZZH.png",en="/docs/assets/image-20230116010731914.CeUq8xgb.png",rn="/docs/assets/image-20230116011501201.DqBVoKI8.png",cn="/docs/assets/webzongjie.D1rfcsYc.png",In=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"backend/spring-boot/SpingBoot原理.md","filePath":"backend/spring-boot/SpingBoot原理.md"}'),gn={name:"backend/spring-boot/SpingBoot原理.md"},un=t('<h2 id="spingboot原理" tabindex="-1">SpingBoot原理 <a class="header-anchor" href="#spingboot原理" aria-label="Permalink to &quot;SpingBoot原理&quot;">​</a></h2><p>今日目标</p><ol><li>配置优先级：Springboot项目当中属性配置的常见方式以及配置的优先级 🍐</li><li>Bean的管理 🍐 ❤️</li><li>剖析Springboot的底层原理 🍐 🚀</li></ol><p>知识储备</p><ul><li>能够创建SpringBoot入门项目</li><li>能够在SpringBoot项目中书写请求、接受参数、返回响应</li><li>能够使用过滤器和拦截器拦截请求</li><li>能够在SpringBoot工程下进行事务管理</li><li>能够进行统一异常处理，并自定义异常</li></ul><p><a href="http://www.yangeit.cn:40121/down/Qm8KZLG9ldWM.zip" target="_blank" rel="noreferrer">今日初始代码下载open in new window</a>42kb</p><h2 id="_1-配置优先级-🚀" tabindex="-1">1. 配置优先级 🚀 <a class="header-anchor" href="#_1-配置优先级-🚀" aria-label="Permalink to &quot;1\\. 配置优先级 🚀&quot;">​</a></h2><p>配置优先级</p><p>SpringBoot项目当中支持的三类配置文件：</p><ul><li>application.properties</li><li>application.yml企业实用</li><li>application.yaml</li></ul><p><strong>配置文件优先级排名（从高到低）：</strong> 👇</p><ol><li>properties配置文件</li><li>yml配置文件</li><li>yaml配置文件</li></ol><p><strong>注意事项</strong> ⚠️：虽然springboot支持多种格式配置文件，但是在项目开发时，推荐统一使用一种格式的配置。yml是主流</p><ul><li><p>application.properties</p></li><li><p>application.yml</p></li><li><p>application.yaml</p></li></ul><p>我们启动SpringBoot程序，测试下三个配置文件中哪个Tomcat端口号生效：</p><ul><li>properties、yaml、yml三种配置文件同时存在</li></ul><p><img src="'+o+'" alt="image-20230113144757856"></p><blockquote><p>properties、yaml、yml三种配置文件，优先级最高的是properties 👈👈</p></blockquote><ul><li>yaml、yml两种配置文件同时存在</li></ul><p><img src="'+i+'" alt="image-20230113145158771"></p><p>在SpringBoot项目当中除了以上3种配置文件外，SpringBoot为了增强程序的扩展性，除了支持配置文件的配置方式以外，还支持另外两种常见 的配置方式🚀 🚀：</p><ol><li><p>Java系统属性配置开发人员偶尔用 （格式： -Dkey=value）</p></li><li><p>命令行参数测试人员常用 （格式：--key=value）</p></li></ol><p>其他2种配置方式演示操作，如下👇 👇</p><p><strong>其他2种配置方式演示操作</strong> 👇 👇</p><p>那在idea当中运行程序时，如何来指定Java系统属性和命令行参数呢？</p><ul><li>编辑启动程序的配置信息</li></ul><p><img src="'+e+'" alt="image-20230113162746634"></p><p><img src="'+r+'" alt="image-20230113162639630"></p><p>重启服务，同时配置Tomcat端口(三种配置文件、系统属性、命令行参数)，测试哪个Tomcat端口号生效：</p><p><img src="'+c+'" alt="image-20230113165006550"></p><p>删除命令行参数配置，重启SpringBoot服务：</p><p><img src="'+g+'" alt="image-20230113170841253"></p><blockquote><p>优先级： 命令行参数 &gt; 系统属性参数 &gt; properties参数 &gt; yml参数 &gt; yaml参数</p></blockquote><p>思考：如果项目已经打包上线了，这个时候我们又如何来设置Java系统属性和命令行参数呢？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>java -Dserver.port=9000 -jar XXXXX.jar --server.port=10010</span></span></code></pre></div><p>下面我们来演示下打包程序运行时指定Java系统属性和命令行参数：</p><ol><li>执行maven打包指令package，把项目打成jar文件</li><li>使用命令：java -jar 方式运行jar文件程序</li></ol><p>项目打包：</p><p><img src="'+u+'" alt="image-20230113172313655"></p><p><img src="'+d+'" alt="image-20230113172854016"></p><p>运行jar程序：</p><ul><li>同时设置Java系统属性和命令行参数</li></ul><p><img src="'+m+'" alt="image-20230113172659269"></p><ul><li>仅设置Java系统属性</li></ul><p><img src="'+b+'" alt="image-20230113173228232"></p><blockquote><p>注意事项：</p><ul><li>Springboot项目进行打包时，需要引入插件 spring-boot-maven-plugin (基于官网骨架创建项目，会自动添加该插件)</li></ul></blockquote><p>总结</p><p>在SpringBoot项目当中，常见的属性配置方式<strong>有5种(3配+2外)---优先级(从低到高)</strong>：</p><ul><li>application.yaml（忽略）</li><li>application.yml 企业实用</li><li>application.properties</li><li>java系统属性（-Dxxx=xxx）</li><li>命令行参数（--xxx=xxx）测试人员实用</li></ul><p>课堂作业</p><p>🚩 <strong>Spring Boot 中常用的配置文件类型是哪些？</strong></p><ul><li>A. .yml 或 .yaml</li><li>B. .properties</li><li>C. 两者都可以</li></ul><p>🚩 <strong>yml 和 properties 配置文件的语法有什么不同</strong></p><ul><li>A. yml 使用缩进表示层级关系，properties 使用冒号分隔键值对</li><li>B. yml 使用冒号分隔键值对，properties 使用等号</li><li>C. yml 和 properties 的语法是完全一样的</li></ul><p>🚩 <strong>资料中有一个jar包，jar的默认端口是8080，请在不修改源码的情况下，将端口临时改成8888运行</strong></p><p>点击查看答案解析</p><p>答案：C</p><p>解析：Spring Boot 支持 .properties 和 .yml（或 .yaml）两种类型的配置文件。在同一个项目中，你可以同时使用这两种类型的配置文件，优先级如下：命令行参数 &gt; .properties &gt; .yml。</p><hr><p>答案：A 解析：yml 使用缩进表示层级关系，不同层级之间的缩进必须保持一致。而 properties 使用冒号或等号分隔键值对，键和值之间必须用一个空格分隔。</p><h2 id="_2-bean管理-🍐" tabindex="-1">2. Bean管理 🍐 <a class="header-anchor" href="#_2-bean管理-🍐" aria-label="Permalink to &quot;2\\. Bean管理 🍐&quot;">​</a></h2><p>学习目标</p><p>主要学习IOC容器中Bean的其他使用细节，主要学习以下三方面：</p><ol><li>如何从<strong>IOC容器</strong>中手动的获取到bean对象</li><li>bean的<strong>作用域</strong>配置</li><li>管理<strong>第三方的bean</strong>对象</li></ol><p>已经学过的Spring注解</p><ul><li>控制反转(IOC) <ul><li>@Component <ul><li>@Controller</li><li>@Service</li><li>@Repository</li></ul></li></ul></li><li>依赖注入(DI) <ul><li>@Autowired</li></ul></li></ul><p><img src="'+h+`" alt=""></p><h3 id="_2-1-获取bean" tabindex="-1">2.1 获取Bean <a class="header-anchor" href="#_2-1-获取bean" aria-label="Permalink to &quot;2.1 获取Bean&quot;">​</a></h3><p>获取Bean</p><ol><li><strong>要获得Bean对象，先获得IOC容器</strong></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@SpringBootTest</span></span>
<span class="line"><span>class SpringbootWebConfig2ApplicationTests {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private ApplicationContext applicationContext; //IOC容器对象</span></span></code></pre></div><blockquote><p>默认情况下，SpringBoot项目在启动的时候会自动的创建IOC容器(也称为Spring容器)，并且在启动的过程当中会自动的将bean对象都创建好，存放在IOC容器当中。应用程序在运行时需要依赖什么bean对象，就直接进行依赖注入就可以了。</p></blockquote><ol start="2"><li><strong>通过容器获取Bean</strong></li></ol><blockquote><p>Spring容器中提供了一些方法，可以主动从IOC容器中获取到bean对象，下面介绍3种常用方式：</p></blockquote><ol><li>根据name获取bean --<code>Object getBean(String name)</code></li><li>根据类型获取bean --<code>&lt;T&gt; T getBean(Class&lt;T&gt; requiredType)</code></li><li>根据name获取bean（带类型转换）--<code>&lt;T&gt; T getBean(String name, Class&lt;T&gt; requiredType)</code></li></ol><p>点击查看获取Bean的代码</p><p>控制器：BookController</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class BookController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @RequestMapping(&quot;/books&quot;)</span></span>
<span class="line"><span>    public String list(){</span></span>
<span class="line"><span>        String  bookname=&quot;重生在黑马学java&quot;;</span></span>
<span class="line"><span>        System.out.println(bookname);</span></span>
<span class="line"><span>        return bookname;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>测试类：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@SpringBootTest</span></span>
<span class="line"><span>class SpringbootWebConfigApplicationTests {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private ApplicationContext applicationContext;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test(){</span></span>
<span class="line"><span>        System.out.println(&quot;test&quot;);</span></span>
<span class="line"><span>        //根据bean的名称获取</span></span>
<span class="line"><span>        BookController bookController = (BookController) applicationContext.getBean(&quot;bookController&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.out.println(bookController);</span></span>
<span class="line"><span>        //根据bean的类型获取</span></span>
<span class="line"><span>        BookController bookController2 =applicationContext.getBean(BookController.class);</span></span>
<span class="line"><span>        System.out.println(bookController2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //根据bean的名称 及 类型获取</span></span>
<span class="line"><span>        BookController bookController3 =applicationContext.getBean(&quot;bookController&quot;,BookController.class);</span></span>
<span class="line"><span>        System.out.println(bookController3);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>程序运行后控制台日志：</p><p><img src="`+n+'" alt="image-20230113211619818"></p><blockquote><p>问题：输出的bean对象地址值是一样的，说明IOC容器当中的bean对象有几个？</p><p>答案：只有一个。 （默认情况下，IOC中的bean对象是单例）</p><p>那么能不能将bean对象设置为非单例的(每次获取的bean都是一个新对象)？</p><p>可以，在下一个知识点(bean作用域)中讲解。</p></blockquote><p>注意事项：</p><ul><li>上述所说的 【Spring项目启动时，会把其中的bean都创建好】还会受到作用域及延迟初始化影响，这里主要针对于默认的单例非延迟加载的bean而言。</li></ul><h3 id="_2-2-bean作用域" tabindex="-1">2.2 Bean作用域 <a class="header-anchor" href="#_2-2-bean作用域" aria-label="Permalink to &quot;2.2 Bean作用域&quot;">​</a></h3><p>Bean作用域</p><blockquote><p>⚠️ IOC容器当中，默认bean对象是<strong>单例模式(只有一个实例对象)</strong></p><p>🎯 通过<strong>设置Bean的作用域</strong>见下图红色区域，来修改非单例模式 <img src="'+S+`" alt="image-20230113214244144"></p></blockquote><p>在Spring中支持五种作用域今天先尝前2种，后三种在web环境才生效：</p><table><thead><tr><th><strong>作用域</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>singleton默认</td><td>容器内同名称的bean只有一个实例（单例）（默认）</td></tr><tr><td>prototype</td><td>每次使用该bean时会创建新的实例（非单例）</td></tr><tr><td>request</td><td>每个请求范围内会创建新的实例（web环境中，了解）</td></tr><tr><td>session</td><td>每个会话范围内会创建新的实例（web环境中，了解）</td></tr><tr><td>application</td><td>每个应用范围内会创建新的实例（web环境中，了解）</td></tr></tbody></table><p><strong>1). 测试一</strong></p><ul><li>控制器</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class BookController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @RequestMapping(&quot;/books&quot;)</span></span>
<span class="line"><span>    public String list(){</span></span>
<span class="line"><span>        String  bookname=&quot;重生在黑马学java&quot;;</span></span>
<span class="line"><span>        System.out.println(bookname);</span></span>
<span class="line"><span>        return bookname;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>测试类（原来的代码）</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>@SpringBootTest</span></span>
<span class="line"><span>class SpringbootWebConfigApplicationTests {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private ApplicationContext applicationContext;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test(){</span></span>
<span class="line"><span>        System.out.println(&quot;test&quot;);</span></span>
<span class="line"><span>        //根据bean的名称获取</span></span>
<span class="line"><span>        BookController bookController = (BookController) applicationContext.getBean(&quot;bookController&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.out.println(bookController);</span></span>
<span class="line"><span>        //根据bean的类型获取</span></span>
<span class="line"><span>        BookController bookController2 =applicationContext.getBean(BookController.class);</span></span>
<span class="line"><span>        System.out.println(bookController2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //根据bean的名称 及 类型获取</span></span>
<span class="line"><span>        BookController bookController3 =applicationContext.getBean(&quot;bookController&quot;,BookController.class);</span></span>
<span class="line"><span>        System.out.println(bookController3);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重启SpringBoot服务，运行测试方法，查看控制台打印的日志：</p><p><img src="`+n+`" alt="image-20230113211619818"></p><blockquote><p>注意事项：</p><ul><li><p>IOC容器中的bean默认使用的作用域：singleton (单例)</p></li><li><p>默认singleton的bean，在容器启动时被创建，可以使用@Lazy注解来延迟初始化(延迟到第一次使用时)</p></li></ul></blockquote><p><strong>2). 测试二</strong></p><ul><li>控制器</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Scope(&quot;prototype&quot;) //prototype非单例</span></span>
<span class="line"><span>@RestController</span></span>
<span class="line"><span>public class BookController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @RequestMapping(&quot;/books&quot;)</span></span>
<span class="line"><span>    public String list(){</span></span>
<span class="line"><span>        String  bookname=&quot;重生在黑马学java&quot;;</span></span>
<span class="line"><span>        System.out.println(bookname);</span></span>
<span class="line"><span>        return bookname;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>测试类（原来的代码）</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>@SpringBootTest</span></span>
<span class="line"><span>class SpringbootWebConfigApplicationTests {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private ApplicationContext applicationContext;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test(){</span></span>
<span class="line"><span>        System.out.println(&quot;test&quot;);</span></span>
<span class="line"><span>        //根据bean的名称获取</span></span>
<span class="line"><span>        BookController bookController = (BookController) applicationContext.getBean(&quot;bookController&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.out.println(bookController);</span></span>
<span class="line"><span>        //根据bean的类型获取</span></span>
<span class="line"><span>        BookController bookController2 =applicationContext.getBean(BookController.class);</span></span>
<span class="line"><span>        System.out.println(bookController2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //根据bean的名称 及 类型获取</span></span>
<span class="line"><span>        BookController bookController3 =applicationContext.getBean(&quot;bookController&quot;,BookController.class);</span></span>
<span class="line"><span>        System.out.println(bookController3);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重启SpringBoot服务，运行测试方法，查看控制台打印的日志：</p><p><img src="`+C+'" alt="image-20230114001348839"></p><p>总结</p><ul><li>prototype的bean，每一次使用该bean的时候都会创建一个新的实例</li><li>实际开发当中，<strong>绝大部分的Bean是单例的</strong>，也就是说绝大部分Bean不需要配置scope属性</li></ul><h3 id="_2-3-第三方bean" tabindex="-1">2.3 第三方Bean <a class="header-anchor" href="#_2-3-第三方bean" aria-label="Permalink to &quot;2.3 第三方Bean&quot;">​</a></h3><p>第三方Bean</p><p>我们所配置的bean，像controller、service，dao三层体系下编写的类，这些类都是我们在项目当中<strong>自己定义的类(自定义类)</strong>。当我们要声明这些bean，也非常简单，我们只需要在类上加上@Component以及它的这三个衍生<strong>注解</strong>（@Controller、@Service、@Repository），就可以来声明这个bean对象了。</p><p>如果要管理的bean对象来自于第三方（不是自定义的,如jar包中的类），是无法用@Component 及衍生注解声明bean的，就需要用到 <strong>@Bean</strong> 注解。 如下图：👇 👇 <img src="'+k+`" alt=""></p><p>那怎么将这些<strong>三方的类的对象</strong>加入到IOC容器中尼？下面有2种解决方案 👇</p><p><strong>解决方案1：在配置类中定义@Bean标识的方法</strong> 企业实用</p><blockquote><p>准备工作，在pojo包下，创建一个Books的实体类，如下：</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class Books {</span></span>
<span class="line"><span>    String  name=&quot;凡人修仙传&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>如果需要定义第三方Bean时， 通常会单独定义一个配置类</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration //配置类  (在配置类当中对第三方bean进行集中的配置管理)</span></span>
<span class="line"><span>public class CommonConfig {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //声明第三方bean</span></span>
<span class="line"><span>    @Bean //将当前方法的返回值对象交给IOC容器管理, 成为IOC容器bean</span></span>
<span class="line"><span>          //通过@Bean注解的name/value属性指定bean名称, 如果未指定, 默认是方法名</span></span>
<span class="line"><span>    public JsonIOException jsonIOException(Books books){</span></span>
<span class="line"><span>        System.out.println(books.name);</span></span>
<span class="line"><span>        return new JsonIOException(&quot;json错误了&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重启服务，执行测试方法，查看控制台日志：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>com.google.gson.JsonIOException: json错误了</span></span></code></pre></div><p>在方法上加上一个@Bean注解，Spring 容器在启动的时候，它会自动的调用这个方法，并将方法的返回值声明为Spring容器当中的Bean对象。</p><p><strong>解决方案2：在启动类上添加@Bean标识的方法</strong> 不建议使用</p><p><img src="`+v+`" alt=""></p><p>重启服务，执行测试方法，查看控制台日志：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>com.google.gson.JsonIOException: json错误了</span></span></code></pre></div><blockquote><p><strong>说明：以上在启动类中声明第三方Bean的作法，不建议使用（项目中要保证启动类的纯粹性）</strong></p></blockquote><p>总结</p><p>注意事项 ：</p><ul><li>通过 <strong>@Bean</strong> 注解的name或value属性可以声明bean的名称，如果不指定，<strong>默认bean的名称就是方法名</strong>。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    //@Bean 默认名字 jsonIOException1</span></span>
<span class="line"><span>    //@Bean(&quot;jsonhh&quot;) 指定名字 jsonhh</span></span>
<span class="line"><span>    public JsonIOException jsonIOException1(){</span></span>
<span class="line"><span>        System.out.println(books.name+&quot;sds&quot;);</span></span>
<span class="line"><span>        return new JsonIOException(&quot;json错误了&quot;);</span></span>
<span class="line"><span>    }</span></span></code></pre></div><ul><li>如果第三方bean需要依赖其它bean对象，直接在bean定义方法中设置形参即可，容器会根据类型自动装配。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    @Bean //将当前方法的返回值对象交给IOC容器管理, 成为IOC容器bean</span></span>
<span class="line"><span>          //通过@Bean注解的name/value属性指定bean名称, 如果未指定, 默认是方法名</span></span>
<span class="line"><span>    public JsonIOException jsonIOException(Books books){</span></span>
<span class="line"><span>        System.out.println(books.name+&quot;sds&quot;);</span></span>
<span class="line"><span>        return new JsonIOException(&quot;json错误了&quot;);</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p><strong>关于@Bean大家只需要保持一个原则</strong>：</p><ul><li><p>如果是在项目当中我们自己定义的类，想将这些类交给IOC容器管理，我们直接使用 <strong>@Component</strong> 以及它的衍生注解来声明就可以。</p></li><li><p>如果这个类它不是我们自己定义的，而是引入的第三方依赖当中提供的类，而且我们还想将这个类交给IOC容器管理。此时我们就需要在配置类中定义一个方法，在方法上加上一个 <strong>@Bean</strong> 注解，通过这种方式来声明第三方的bean对象。</p></li></ul><p>课堂作业</p><p>🚩 流畅的回答下列面试题？</p><ol><li>Spring Bean默认作用域是单例还是多例？</li><li>简单的概述下Spring Bean的生命周期（可以查阅资料，自行整理答案）</li><li>@Bean注解的作用是什么，为什么要有这个注解？</li><li>@Bean修饰的方法，是将返回值注册到IOC容器中，请问是单例还是多例？</li></ol><h2 id="_3-springboot原理-🍐🚀" tabindex="-1">3. SpringBoot原理 🍐🚀 <a class="header-anchor" href="#_3-springboot原理-🍐🚀" aria-label="Permalink to &quot;3\\. SpringBoot原理 🍐🚀&quot;">​</a></h2><h3 id="_3-1-起步依赖-🍐" tabindex="-1">3.1 起步依赖 🍐 <a class="header-anchor" href="#_3-1-起步依赖-🍐" aria-label="Permalink to &quot;3.1 起步依赖 🍐&quot;">​</a></h3><p>SpringBoot原理概述和起步依赖</p><p>经过前面10多天课程的学习，大家也会发现基于SpringBoot进行web程序的开发是非常简单、非常高效的。使用若干注解即可</p><p>SpringBoot使我们能够集中精力地去关注业务功能的开发，而不用过多地关注框架本身的配置使用。而我们前面所讲解的都是面向应用层面的技术，接下来我们开始学习SpringBoot的原理，这部分内容<strong>偏向于底层的原理分析</strong>。 🍐 🚀</p><p>在剖析SpringBoot的原理之前，我们先来快速回顾一下我们前面所讲解的Spring家族的框架。</p><p><img src="`+B+'" alt="image-20230114171304644"></p><p>Spring是目前世界上最流行的Java框架，它可以帮助我们更加快速、更加容易的来构建Java项目。而在Spring家族当中提供了很多优秀的框架，而所有的框架都是基于一个基础框架的SpringFramework(也就是Spring框架)。而前面我们也提到，如果我们直接基于Spring框架进行项目的开发，会比较繁琐。</p><p><strong>这个繁琐主要体现在两个地方：</strong></p><ol><li>在pom.xml中依赖配置比较繁琐，在项目开发时，需要自己去找到对应的依赖，还需要找到依赖它所配套的依赖以及对应版本，否则就会出现<strong>版本冲突问题</strong>。</li><li>在使用Spring框架进行项目开发时，<strong>需要在Spring的配置文件中做大量的配置</strong>，这就造成Spring框架入门难度较大，学习成本较高。</li></ol><p><img src="'+I+'" alt="image-20230114170610438"></p><blockquote><p>基于Spring存在的问题，官方在Spring框架4.0版本之后， 又推出了一个全新的框架：<a href="https://spring.io/projects/spring-boot/" target="_blank" rel="noreferrer">SpringBootopen in new window</a> 点击进入官网</p><p>通过 SpringBoot来简化Spring框架的开发(是<strong>简化</strong>不是替代)。我们直接基于SpringBoot来构建Java项目，会让我们的项目开发更加简单，更加快捷。 <img src="'+q+'" alt=""></p></blockquote><p>SpringBoot能简化Spring开发尼？</p><p>SpringBoot框架之所以使用起来更简单更快捷，是因为SpringBoot框架底层提供了两个非常重要的功能：一个是起步依赖，一个是自动配置。</p><p><img src="'+f+'" alt="image-20230114172442018"></p><ul><li><p>通过SpringBoot所提供的起步依赖 ，就可以大大的简化pom文件当中依赖的配置 ，从而解决了Spring框架当中依赖配置繁琐的问题。</p></li><li><p>通过自动配置 的功能就可以大大的简化 框架在使用时bean的声明以及bean的配置 。我们只需要引入程序开发时所需要的起步依赖，项目开发时所用到常见的配置都已经有了，我们直接使用就可以了。</p></li></ul><p>3.1 起步依赖</p><ul><li><p><strong>起步依赖</strong>是Spring Boot为简化 Maven或Gradle项目构建配置而提供的一种依赖管理方式。👈</p></li><li><p><strong>起步依赖</strong>会自动导入 依赖的 jar 包和相关的默认配置，帮助开发者快速构建出可运行、独立的应用程序。</p></li><li><p>起步依赖的命名规则是 spring-boot-starter-* ，其中 <code>*</code> 是依赖的具体名字，如 spring-boot-starter-web 包含了构建 Web 应用所需的基本依赖。</p></li><li><p>Spring Boot 官方提供了大量的起步依赖，方便开发者快速集成常用的技术，如数据访问、消息队列、测试等。</p></li><li><p>起步依赖的原理是<strong>基于 Spring Boot 的自动化配置机制和Maven的依赖传递</strong> 👈</p></li></ul><p>⚠️<strong>使用和未使用SpringBoot的依赖对比</strong>左边未使用Boot👇</p><p><img src="'+_+'" alt="使用和未使用SpringBoot的依赖对比"></p><p>使用和未使用SpringBoot的依赖对比</p><blockquote><p>spring-webmvc依赖：这是Spring框架进行web程序开发所需要的依赖</p><p>servlet-api依赖：Servlet基础依赖</p><p>jackson-databind依赖：JSON处理工具包</p><p>如果要使用AOP，还需要引入aop依赖、aspect依赖</p><p><strong>项目中所引入的这些依赖，还需要保证版本匹配，否则就可能会出现版本冲突问题。</strong> 👈</p><p><strong>使用了SpringBoot只需要引入一个依赖就可以</strong> 👈</p></blockquote><h3 id="_3-2-自动配置" tabindex="-1">3.2 自动配置 <a class="header-anchor" href="#_3-2-自动配置" aria-label="Permalink to &quot;3.2 自动配置&quot;">​</a></h3><p>自动配置</p><p>目标🎯 ：<strong>理解自动配置的定义和作用</strong></p><ol><li>在当前项目中我们并<strong>没有声明Google提供的Gson这么一个bean对象</strong>，然而我们却可以通过<code>@Autowired</code>从Spring容器中<strong>注入bean对象</strong>，那么这个bean对象怎么来的？ ⁉️</li></ol><p><img src="'+s+'" alt="Gson对象自动注入"></p><p>Gson对象自动注入</p><p><strong>SpringBoot的自动配置</strong>就是当Spring容器启动后，一些配置类、bean对象就自动存入到了IOC容器中，不需要我们手动去声明 ，从而简化了开发，省去了繁琐的配置操作。</p><blockquote><p>比如：我们要进行<strong>事务管理、要进行AOP程序的开发</strong>，此时就不需要我们再去手动的声明这些bean对象了，我们直接使用就可以从而大大的简化程序的开发，省去了繁琐的配置操作。</p></blockquote><ol><li><p><strong>配置类</strong>@Configration注解修饰的类最终也是SpringIOC容器当中的一个bean对象</p></li><li><p>在IOC容器中除了我们自己定义的bean以外，还有很多<strong>配置类</strong>，<strong>这些配置类都是SpringBoot在启动的时候加载进来的配置类</strong>。这些配置类<strong>加载进来之后，它也会生成很多的bean对象</strong>。</p></li></ol><p><img src="'+y+`" alt="Gson对象是配置类加载进来的"></p><p>Gson对象是配置类加载进来的</p><blockquote><p>比如：配置类GsonAutoConfiguration里面有一个bean，bean的名字叫gson，它的类型是Gson。</p><p>com.google.gson.Gson是谷歌包中提供的用来处理JSON格式数据的。</p></blockquote><p>当我们想要使用这些配置类中生成的bean对象时，可以使用<code>@Autowired</code>就自动注入了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@SpringBootTest</span></span>
<span class="line"><span>public class AutoConfigurationTests {</span></span>
<span class="line"><span>// IOC容器中已经有了，因此直接注入即可使用</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private Gson gson;</span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testJson(){</span></span>
<span class="line"><span>        String json = gson.toJson(Result.success());</span></span>
<span class="line"><span>        System.out.println(json);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>添加断点，使用debug模式运行测试类程序：</p><p><img src="`+s+`" alt="image-20230114222245520"></p><p><strong>体验了SpringBoot的自动配置了，下面我们就来分析自动配置的原理</strong>🎯。</p><p>其实分析自动配置原理就是来<strong>解析在SpringBoot项目中，在引入依赖之后是如何将依赖jar包当中所定义的配置类以及bean加载到SpringIOC容器中的</strong>需要阅读源码来理解。</p><p>SpringBoot项目在启动时通过自动配置完成了bean对象的创建。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration(proxyBeanMethods = false)</span></span>
<span class="line"><span>@ConditionalOnClass(Gson.class)</span></span>
<span class="line"><span>@EnableConfigurationProperties(GsonProperties.class)</span></span>
<span class="line"><span>public class GsonAutoConfiguration {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Bean</span></span>
<span class="line"><span>@ConditionalOnMissingBean</span></span>
<span class="line"><span>public GsonBuilder gsonBuilder(List&lt;GsonBuilderCustomizer&gt; customizers) {</span></span>
<span class="line"><span>GsonBuilder builder = new GsonBuilder();</span></span>
<span class="line"><span>customizers.forEach((c) -&gt; c.customize(builder));</span></span>
<span class="line"><span>return builder;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Bean</span></span>
<span class="line"><span>@ConditionalOnMissingBean</span></span>
<span class="line"><span>public Gson gson(GsonBuilder gsonBuilder) {</span></span>
<span class="line"><span>return gsonBuilder.create();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>    // 省略</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>结论和下个学习目标</p><blockquote><p>从上述步骤可知，Gson对象是通过配置类的@Bean方式加入到IOC中的</p></blockquote><p>🎯<strong>接下来通过代码的方式演示如何加入第三方依赖中的Bean对象至IOC容器中</strong> 🎯</p><p><strong>步骤：</strong></p><ol><li><p>导入三方依赖运行</p></li><li><p>使用@ComponentScan组件扫描</p></li><li><p>使用@Import导入</p></li><li><p><strong>案例中引入进来的第三方依赖当中的bean以及配置类为什么没有生效？</strong></p></li></ol><ul><li>原因在我们之前讲解IOC的时候有提到过，在类上添加@Component注解来声明bean对象时，还需要保证@Component注解能被Spring的组件扫描到。</li><li>SpringBoot项目中的@SpringBootApplication注解，具有包扫描的作用，但是它只会扫描启动类所在的当前包以及子包。</li><li>当前包：com.itheima， 第三方依赖中提供的包：com.heihei（扫描不到）</li></ul><p><img src="`+O+'" alt=""><img src="'+x+'" alt=""></p><p><strong>那么如何解决以上问题的呢？</strong> 👇 👇</p><ul><li>方案1：@ComponentScan 组件扫描</li><li>方案2：@Import 导入（使用@Import导入的类会被Spring加载到IOC容器中）</li></ul><h5 id="方案一" tabindex="-1">方案一 <a class="header-anchor" href="#方案一" aria-label="Permalink to &quot;方案一&quot;">​</a></h5><p>@ComponentScan组件扫描</p><p><img src="'+A+'" alt=""></p><p>重新执行测试方法，控制台日志输出：</p><p><img src="'+w+'" alt=""></p><blockquote><p>大家可以想象一下，如果采用以上这种方式来完成自动配置，那我们进行项目开发时，当需要引入大量的第三方的依赖，就需要在启动类上配置N多要扫描的包，<strong>这种方式会很繁琐</strong>。而且这种大面积的扫描性能也比较低。</p><p><strong>缺点：</strong></p><ol><li>使用繁琐</li><li>性能低</li></ol><p>结论：SpringBoot中并没有采用以上这种方案(采用的是方案二)。</p></blockquote><h5 id="方案二" tabindex="-1">方案二 <a class="header-anchor" href="#方案二" aria-label="Permalink to &quot;方案二&quot;">​</a></h5><p>@Import导入</p><ul><li>导入形式主要有以下几种： <ol><li>导入普通类</li><li>导入配置类</li><li>导入ImportSelector接口实现类</li></ol></li></ul><h6 id="_1️⃣-使用-import导入普通类" tabindex="-1">1️⃣ 使用@Import导入普通类： <a class="header-anchor" href="#_1️⃣-使用-import导入普通类" aria-label="Permalink to &quot;1️⃣ 使用@Import导入普通类：&quot;">​</a></h6><p><img src="'+P+'" alt=""></p><h6 id="_2️⃣-使用-import导入配置类" tabindex="-1">2️⃣ 使用@Import导入配置类： <a class="header-anchor" href="#_2️⃣-使用-import导入配置类" aria-label="Permalink to &quot;2️⃣ 使用@Import导入配置类：&quot;">​</a></h6><p><img src="'+j+'" alt=""></p><h6 id="_3️⃣-使用-import导入importselector接口实现类" tabindex="-1">3️⃣ 使用@Import导入ImportSelector接口实现类： <a class="header-anchor" href="#_3️⃣-使用-import导入importselector接口实现类" aria-label="Permalink to &quot;3️⃣ 使用@Import导入ImportSelector接口实现类：&quot;">​</a></h6><p><img src="'+E+`" alt=""></p><p>我们使用@Import注解通过这三种方式都可以导入第三方依赖中所提供的bean或者是配置类。</p><p>思考：如果基于以上方式完成自动配置，当要引入一个第三方依赖时，是不是还要知道第三方依赖中有哪些配置类和哪些Bean对象？</p><ul><li>答案：是的。 （对程序员来讲，很不友好，而且比较繁琐）</li></ul><p>思考：当我们要使用第三方依赖，依赖中到底有哪些bean和配置类，谁最清楚？</p><ul><li>答案：第三方依赖自身最清楚。</li></ul><blockquote><p>结论：我们不用自己指定要导入哪些bean对象和配置类了，让第三方依赖它自己来指定。</p></blockquote><p>怎么让第三方依赖自己指定bean对象和配置类？</p><ul><li>比较常见的方案就是第三方依赖给我们提供一个注解，这个注解一般都以@EnableXxxx开头的注解，注解中封装的就是@Import注解</li></ul><h6 id="_4️⃣-使用第三方依赖提供的-enablexxxxx注解" tabindex="-1">4️⃣ 使用第三方依赖提供的 @EnableXxxxx注解 <a class="header-anchor" href="#_4️⃣-使用第三方依赖提供的-enablexxxxx注解" aria-label="Permalink to &quot;4️⃣ 使用第三方依赖提供的 @EnableXxxxx注解&quot;">​</a></h6><ul><li>第三方依赖中提供的注解</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span>@Target(ElementType.TYPE)</span></span>
<span class="line"><span>@Import(MyImportSelector.class)//指定要导入哪些bean对象或配置类</span></span>
<span class="line"><span>public @interface EnableHeaderConfig { </span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+T+'" alt=""></p><p>以上四种方式都可以完成导入操作，但是第4种方式会更方便更优雅，而这种方式也是SpringBoot当中所采用的方式。</p><h3 id="_3-3-跟踪源码" tabindex="-1">3.3 跟踪源码 <a class="header-anchor" href="#_3-3-跟踪源码" aria-label="Permalink to &quot;3.3 跟踪源码&quot;">​</a></h3><p>跟踪源码</p><p>前置知识</p><ol><li>理解<code>Gson对象</code>是由其配置类通过<code>@Bean</code>注解，进行自动配置的！</li><li>能听懂上述的4种导入三方Bean至IOC中的操作</li></ol><p>🎯<strong>那下面我们通过源码跟踪的形式来剖析下SpringBoot底层到底是如何完成自动配置的</strong>哪一种！。</p><p>源码跟踪技巧：</p><p>在跟踪框架源码的时候，一定要抓住关键点，找到核心流程。<strong>一定不要从头到尾一行代码去看</strong>，一个方法的去研究，一定要找到关键流程，抓住关键点，<strong>先在宏观上对整个流程或者整个原理有一个认识</strong>，有精力再去研究其中的细节。</p><p><strong>如何高效的看代码（idea标签）</strong> 👍</p><p><img src="'+U+'" alt="图解"></p><p>图解</p><ul><li><p><strong>标记书签</strong></p><ul><li>ctrl+f11 后按 0~9 a~z 提供了这么多的书签</li><li>设置0号标签 ctrl+f11后按0</li></ul></li><li><p><strong>快速跳转到标签</strong></p><ul><li>假设之前设置了0号标签</li><li>跳转到0号标签 ctrl+0</li></ul></li><li><p><strong>刪除标签</strong></p><ul><li>选择标签所在行按F11</li></ul></li></ul><p><strong>从启动类开始看！！</strong>✏️ 老弟！一步一步来！</p><p>要搞清楚SpringBoot的自动配置原理，要从<strong>SpringBoot启动类</strong>上使用的核心注解<code>@SpringBootApplication</code>开始分析：</p><p><img src="'+D+'" alt="image-20230115001439110"></p><p>在<code>@SpringBootApplication</code>注解中包含了：</p><ul><li>元注解（不再解释）</li><li><code>@SpringBootConfiguration</code></li><li><code>@EnableAutoConfiguration</code></li><li><code>@ComponentScan</code></li></ul><p>先来看第一个注解：<code>@SpringBootConfiguration</code></p><p><img src="'+M+'" alt="image-20230115001950076"></p><blockquote><p><code>@SpringBootConfiguration</code>注解上使用了<code>@Configuration</code>，表明SpringBoot启动类就是一个配置类。</p><p><code>@Indexed</code>注解，是用来加速应用启动的不用关心。</p></blockquote><p>接下来再先看<code>@ComponentScan</code>注解：</p><p><img src="'+N+'" alt="image-20230115002450993"></p><blockquote><p><code>@ComponentScan</code>注解是用来进行组件扫描的，扫描启动类所在的包及其子包下所有被<code>@Component</code>及其<code>衍生注解</code>声明的类。</p><p>SpringBoot启动类，之所以具备扫描包功能，就是因为包含了<code>@ComponentScan</code>注解。</p></blockquote><p>最后我们来看看<code>@EnableAutoConfiguration</code>注解（自动配置核心注解）：</p><p><img src="'+G+'" alt="image-20230115002743115"></p><blockquote><p>使用<code>@Import</code>注解，导入了实现<code>ImportSelector接口</code>的实现类。</p><p>AutoConfigurationImportSelector类是ImportSelector接口的实现类。</p><p><img src="'+F+'" alt="image-20230115003242549"></p><p>image-20230115003242549</p></blockquote><p>AutoConfigurationImportSelector类中重写了ImportSelector接口的selectImports()方法：</p><p><img src="'+J+'" alt="image-20230115003348288"></p><blockquote><p>selectImports()方法底层调用getAutoConfigurationEntry()方法，获取可自动配置的配置类信息集合</p></blockquote><p><img src="'+R+'" alt="image-20230115003704385"></p><blockquote><p>getAutoConfigurationEntry()方法通过调用getCandidateConfigurations(annotationMetadata, attributes)方法获取在配置文件中配置的所有自动配置类的集合</p></blockquote><p><img src="'+L+'" alt="image-20230115003903302"></p><blockquote><p>getCandidateConfigurations方法的功能：</p><p>获取所有基于META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports文件、META-INF/spring.factories文件中配置类的集合</p></blockquote><p>META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports文件和META-INF/spring.factories文件这两个文件在哪里呢？</p><ul><li>通常在引入的起步依赖中，都有包含以上两个文件</li></ul><p><img src="'+z+'" alt="image-20230129090835964"></p><p><img src="'+K+'" alt="image-20230115064329460"></p><p>在前面在给大家演示自动配置的时候，我们直接在测试类当中注入了一个叫gson的bean对象 ，进行JSON格式转换。虽然我们没有配置bean对象，但是我们是可以直接注入使用的。原因就是因为在自动配置类当中做了自动配置。到底是在哪个自动配置类当中做的自动配置呢？我们通过搜索来查询一下。</p><p>在META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports配置文件中指定了第三方依赖Gson的配置类：GsonAutoConfiguration</p><p><img src="'+X+'" alt="image-20230115005159530"></p><p>第三方依赖中提供的GsonAutoConfiguration类：</p><p><img src="'+V+'" alt="image-20230115005418900"></p><blockquote><p>在GsonAutoConfiguration类上，添加了注解@AutoConfiguration，通过查看源码，可以明确：GsonAutoConfiguration类是一个配置。</p><p><img src="'+W+'" alt="image-20230115065247287"></p><p>image-20230115065247287</p></blockquote><p>看到这里，大家就应该明白为什么可以完成自动配置了，原理就是在配置类中定义一个@Bean标识的方法，而Spring会自动调用配置类中使用@Bean标识的方法，并把方法的返回值注册到IOC容器中。</p><p>自动配置源码小结</p><p>自动配置原理源码入口就是@SpringBootApplication注解，在这个注解中封装了3个注解，分别是：</p><ul><li>1️⃣ @SpringBootConfiguration <ul><li>声明当前类是一个配置类</li></ul></li><li>2️⃣ @ComponentScan <ul><li>进行组件扫描（SpringBoot中默认扫描的是启动类所在的当前包及其子包）</li></ul></li><li>3️⃣ @EnableAutoConfiguration <ul><li>封装了4️⃣@Import注解（Import注解中指定了一个5️⃣ImportSelector接口的实现类） <ul><li>在实现类重写的selectImports()方法，读取当前项目下所有依赖jar包中6️⃣META-INF/spring.factories、META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports两个文件里面定义的配置类（配置类中定义了7️⃣@Bean注解标识的方法）。</li></ul></li></ul></li></ul><p>当SpringBoot程序启动时，就会加载配置文件当中所定义的配置类，并将这些配置类信息(类的全限定名)封装到String类型的数组中，最终通过@Import注解将这些配置类全部加载到Spring的IOC容器中，交给IOC容器管理。</p><p>作业</p><p>🚩 流畅的回答下述面试题（建议自己整理成文字）</p><ol><li>自行的跟踪自动配置的源码，简单的描述成文字并绘制成流程图 👍</li></ol><h3 id="_3-4-如何保障三方的bean是单例的" tabindex="-1">3.4 如何保障三方的Bean是单例的 <a class="header-anchor" href="#_3-4-如何保障三方的bean是单例的" aria-label="Permalink to &quot;3.4 如何保障三方的Bean是单例的&quot;">​</a></h3><p>问题 如果2个依赖都有相同的自动配置，会创建2个对象到IOC容器中吗？</p><ol><li>在<strong>META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports</strong>文件中定义的配置类非常多，而且每个配置类中又可以定义很多的bean，那这些bean都会注册到Spring的IOC容器中吗？（下图是配置多个出现的问题）</li></ol><p><img src="'+Q+'" alt=""></p><p>点击查看代码</p><p>答案：并不是。 在声明bean对象时，上面有加一个以@Conditional开头的注解，这种注解的作用就是按照条件进行装配，只有满足条件之后，才会将bean注册到Spring的IOC容器中</p><p>我们在跟踪SpringBoot自动配置的源码的时候，在自动配置类声明bean的时候，除了在方法上加了一个@Bean注解以外，还会经常用到一个注解，就是以Conditional开头的这一类的注解。以Conditional开头的这些注解都是条件装配的注解。下面我们就来介绍下条件装配注解。</p><p>@Conditional注解：</p><ul><li>作用：按照一定的条件进行判断，在满足给定条件后才会注册对应的bean对象到Spring的IOC容器中。</li><li>位置：方法、类</li><li>@Conditional本身是一个父注解，派生出大量的子注解： <ul><li>@ConditionalOnClass：判断环境中有对应字节码文件，才注册bean到IOC容器。</li><li>@ConditionalOnMissingBean：判断环境中没有对应的bean(类型或名称)，才注册bean到IOC容器。</li><li>@ConditionalOnProperty：判断配置文件中有对应属性和值，才注册bean到IOC容器。</li></ul></li></ul><p><img src="'+Y+'" alt=""><img src="'+Z+'" alt=""></p><p>自动配置原理总结：</p><p><img src="'+H+'" alt="image-20230115222302753"></p><blockquote><p>自动配置的核心就在1️⃣ @SpringBootApplication注解上，SpringBootApplication这个注解底层包含了3个注解，分别是：</p><ul><li><p>@SpringBootConfiguration</p></li><li><p>@ComponentScan</p></li><li><p>@EnableAutoConfiguration</p></li></ul><p>2️⃣ @EnableAutoConfiguration这个注解才是自动配置的核心。</p><ul><li>它封装了一个3️⃣ @Import注解，Import注解里面指定了一个5️⃣ ImportSelector接口的实现类。</li><li>在这个实现类中，重写了ImportSelector接口中的5️⃣ selectImports()方法。</li><li>而selectImports()方法中会去读取两份配置文件，并将配置文件中定义的配置类做为selectImports()方法的返回值返回，返回值代表的就是需要将哪些类交给Spring的IOC容器进行管理。</li><li>那么所有自动配置类的中声明的bean都会加载到Spring的IOC容器中吗? 其实并不会，因为这些配置类中在声明bean时，通常都会添加6️⃣ @Conditional开头的注解，这个注解就是进行条件装配。而Spring会根据Conditional注解有选择性的进行bean的创建。</li><li>@Enable 开头的注解底层，它就封装了一个注解 import 注解，它里面指定了一个类，是 ImportSelector 接口的实现类。在实现类当中，我们需要去实现 ImportSelector 接口当中的一个方法 selectImports 这个方法。这个方法的返回值代表的就是我需要将哪些类交给 spring 的 IOC容器进行管理。</li><li>此时它会去读取两份配置文件，一份儿是 spring.factories，另外一份儿是 autoConfiguration.imports。而在 autoConfiguration.imports 这份儿文件当中，它就会去配置大量的自动配置的类。</li><li>而前面我们也提到过这些所有的自动配置类当中，所有的 bean都会加载到 spring 的 IOC 容器当中吗？其实并不会，因为这些配置类当中，在声明 bean 的时候，通常会加上这么一类@Conditional 开头的注解。这个注解就是进行条件装配。所以SpringBoot非常的智能，它会根据 @Conditional 注解来进行条件装配。只有条件成立，它才会声明这个bean，才会将这个 bean 交给 IOC 容器管理。</li></ul></blockquote><h3 id="_3-5-自定义自定义起步依赖了解即可-🚀" tabindex="-1">3.5 自定义自定义起步依赖了解即可 🚀 <a class="header-anchor" href="#_3-5-自定义自定义起步依赖了解即可-🚀" aria-label="Permalink to &quot;3.5 自定义自定义起步依赖了解即可 🚀&quot;">​</a></h3><p>自定义自定义起步依赖</p><ol><li>实际的项目开发当中，并不是所有的第三方的技术官方都给我们提供了与SpringBoot整合的starter起步依赖</li><li>阿里云OSS对象存储服务，阿里云的官方没有提供对应的起步依赖</li><li>在SpringBoot项目中，一般都会将这些公共组件封装为SpringBoot当中的<strong>starter</strong>(起步依赖)</li></ol><p><img src="'+$+`" alt="image-20230115224939131"></p><blockquote><p>SpringBoot官方starter命名： spring-boot-starter-xxxx</p><p>第三组织提供的starter命名： xxxx-spring-boot-starter</p></blockquote><p><strong>在自定义一个起步依赖starter的时候，按照规范需要定义两个模块：</strong></p><ol><li><strong>starter模块</strong>（把程序开发所需要的依赖都定义在starter起步依赖中）</li><li><strong>autoconfigure模块</strong>（自动配置）</li></ol><p><a href="http://www.yangeit.cn:40121/down/lOdlErTG807J.zip" target="_blank" rel="noreferrer">起步依赖初始工程下载open in new window</a>工程大小：49Kb</p><p>之前阿里云OSS的使用：</p><ul><li>配置文件</li></ul><blockquote><p>springboot-autoconfiguration-test模块下</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>#配置阿里云OSS参数</span></span>
<span class="line"><span>aliyun:</span></span>
<span class="line"><span>  oss:</span></span>
<span class="line"><span>    endpoint: https://oss-cn-guangzhou.aliyuncs.com</span></span>
<span class="line"><span>    accessKeyId: LTAI5tGJKWuBifboPQrMQFze</span></span>
<span class="line"><span>    accessKeySecret: PghR2lcWRjJI4UupdqLtPVXCIz9INS</span></span>
<span class="line"><span>    bucketName: java76oss</span></span></code></pre></div><ul><li>AliOSSProperties类</li></ul><blockquote><p>aliyun-oss-spring-boot-autoconfigure模块下的oss包下</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>/*阿里云OSS相关配置*/</span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>@ConfigurationProperties(prefix = &quot;aliyun.oss&quot;)</span></span>
<span class="line"><span>public class AliOSSProperties {</span></span>
<span class="line"><span>    //区域</span></span>
<span class="line"><span>    private String endpoint;</span></span>
<span class="line"><span>    //身份ID</span></span>
<span class="line"><span>    private String accessKeyId ;</span></span>
<span class="line"><span>    //身份密钥</span></span>
<span class="line"><span>    private String accessKeySecret ;</span></span>
<span class="line"><span>    //存储空间</span></span>
<span class="line"><span>    private String bucketName;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>AliOSSUtils工具类</li></ul><blockquote><p>aliyun-oss-spring-boot-autoconfigure模块下的oss包下</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>import lombok.Data;</span></span>
<span class="line"><span>import org.springframework.web.multipart.MultipartFile;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.IOException;</span></span>
<span class="line"><span>import java.io.InputStream;</span></span>
<span class="line"><span>import java.util.UUID;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>public class AliOSSUtils {</span></span>
<span class="line"><span>    private AliOSSProperties aliOSSProperties;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 实现上传图片到OSS</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public String upload(MultipartFile multipartFile) throws IOException {</span></span>
<span class="line"><span>        // 获取上传的文件的输入流</span></span>
<span class="line"><span>        InputStream inputStream = multipartFile.getInputStream();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 避免文件覆盖</span></span>
<span class="line"><span>        String originalFilename = multipartFile.getOriginalFilename();</span></span>
<span class="line"><span>        String fileName = UUID.randomUUID().toString() + originalFilename.substring(originalFilename.lastIndexOf(&quot;.&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //上传文件到 OSS</span></span>
<span class="line"><span>        OSS ossClient = new OSSClientBuilder().build(aliOSSProperties.getEndpoint(),</span></span>
<span class="line"><span>                aliOSSProperties.getAccessKeyId(), aliOSSProperties.getAccessKeySecret());</span></span>
<span class="line"><span>        ossClient.putObject(aliOSSProperties.getBucketName(), fileName, inputStream);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //文件访问路径</span></span>
<span class="line"><span>        String url =aliOSSProperties.getEndpoint().split(&quot;//&quot;)[0] + &quot;//&quot; + aliOSSProperties.getBucketName() + &quot;.&quot; + aliOSSProperties.getEndpoint().split(&quot;//&quot;)[1] + &quot;/&quot; + fileName;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 关闭ossClient</span></span>
<span class="line"><span>        ossClient.shutdown();</span></span>
<span class="line"><span>        return url;// 把上传到oss的路径返回</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>自动配置类AliOSSAutoConfiguration</li></ul><blockquote><p>aliyun-oss-spring-boot-autoconfigure模块下的oss包下</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration//当前类为Spring配置类</span></span>
<span class="line"><span>@EnableConfigurationProperties(AliOSSProperties.class)//导入AliOSSProperties类，并交给SpringIOC管理</span></span>
<span class="line"><span>public class AliOSSAutoConfiguration {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //创建AliOSSUtils对象，并交给SpringIOC容器</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public AliOSSUtils aliOSSUtils(AliOSSProperties aliOSSProperties){</span></span>
<span class="line"><span>        AliOSSUtils aliOSSUtils = new AliOSSUtils();</span></span>
<span class="line"><span>        aliOSSUtils.setAliOSSProperties(aliOSSProperties);</span></span>
<span class="line"><span>        return aliOSSUtils;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>自定义起步依赖步骤提示</p><ul><li>第1步：创建自定义starter模块（进行依赖管理） <ul><li>把阿里云OSS所有的依赖统一管理起来</li></ul></li><li>第2步：创建autoconfigure模块 <ul><li>在starter中引入autoconfigure （我们使用时只需要引入starter起步依赖即可）</li></ul></li><li>第3步：在autoconfigure中完成自动配置 <ol><li>定义一个自动配置类，在自动配置类中将所要配置的bean都提前配置好</li><li>定义配置文件，把自动配置类的全类名定义在配置文件中</li></ol></li><li>第4步：测试 <ol><li>使用apifox上传文件试试</li></ol></li></ul><p>创建<code>aliyun-oss-spring-boot-starter</code>模块</p><p><img src="`+nn+`" alt="图解"></p><p>图解</p><p>删除pom.xml文件中多余的内容后的内容如下阴影部分等下要导入其他模块：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;</span></span>
<span class="line"><span>&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;</span></span>
<span class="line"><span>&lt;parent&gt;</span></span>
<span class="line"><span>&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>&lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;version&gt;2.7.3&lt;/version&gt;</span></span>
<span class="line"><span>&lt;relativePath/&gt; &lt;!-- lookup parent from repository --&gt;</span></span>
<span class="line"><span>&lt;/parent&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;groupId&gt;com.aliyun.oss&lt;/groupId&gt;</span></span>
<span class="line"><span>&lt;artifactId&gt;aliyun-oss-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;properties&gt;</span></span>
<span class="line"><span>&lt;java.version&gt;1.8&lt;/java.version&gt;</span></span>
<span class="line"><span>&lt;/properties&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;dependencies&gt;</span></span>
<span class="line"><span>&lt;!--引入autoconfigure模块--&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>&lt;artifactId&gt;spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;/dependencies&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/project&gt;</span></span></code></pre></div><p>创建<code>aliyun-oss-spring-boot-autoconfigure</code>模块</p><ol><li>创建完模块后，删除多余的文件，最终保留内容如下：</li></ol><p><img src="`+sn+`" alt="image-20230116000542905"></p><ol start="2"><li>删除pom.xml文件中多余的内容后,添加上传需要的其他依赖：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span> xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;</span></span>
<span class="line"><span>&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;</span></span>
<span class="line"><span>&lt;parent&gt;</span></span>
<span class="line"><span>&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>&lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;version&gt;2.7.3&lt;/version&gt;</span></span>
<span class="line"><span>&lt;relativePath/&gt; &lt;!-- lookup parent from repository --&gt;</span></span>
<span class="line"><span>&lt;/parent&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;groupId&gt;com.aliyun.oss&lt;/groupId&gt;</span></span>
<span class="line"><span>&lt;artifactId&gt;aliyun-oss-spring-boot-autoconfigure&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;properties&gt;</span></span>
<span class="line"><span>&lt;java.version&gt;1.8&lt;/java.version&gt;</span></span>
<span class="line"><span>&lt;/properties&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;dependencies&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>&lt;artifactId&gt;spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!--引入web起步依赖--&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>&lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!--Lombok--&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>&lt;groupId&gt;org.projectlombok&lt;/groupId&gt;</span></span>
<span class="line"><span>&lt;artifactId&gt;lombok&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!--阿里云OSS--&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>&lt;groupId&gt;com.aliyun.oss&lt;/groupId&gt;</span></span>
<span class="line"><span>&lt;artifactId&gt;aliyun-sdk-oss&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;version&gt;3.15.1&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>&lt;groupId&gt;javax.xml.bind&lt;/groupId&gt;</span></span>
<span class="line"><span>&lt;artifactId&gt;jaxb-api&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;version&gt;2.3.1&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>&lt;groupId&gt;javax.activation&lt;/groupId&gt;</span></span>
<span class="line"><span>&lt;artifactId&gt;activation&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;version&gt;1.1.1&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;!-- no more than 2.3.3--&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>&lt;groupId&gt;org.glassfish.jaxb&lt;/groupId&gt;</span></span>
<span class="line"><span>&lt;artifactId&gt;jaxb-runtime&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;version&gt;2.3.3&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;/dependencies&gt;</span></span>
<span class="line"><span>&lt;/project&gt;</span></span></code></pre></div><ol start="3"><li>将上诉素材中的AliOSSProperties和AliOSSUtils工具类 以及自动配置类AliOSSAutoConfiguration导入到包中 <img src="`+an+'" alt=""></li></ol><p>4.在<code>aliyun-oss-spring-boot-autoconfigure</code>模块中的<code>resources</code>下，新建自动配置文件：</p><ul><li><p>META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>com.aliyun.oss.AliOSSAutoConfiguration</span></span></code></pre></div><p><img src="'+pn+'" alt="步骤参考"></p><p>步骤参考</p></li></ul><p><strong>整体结构如下：</strong><img src="'+ln+'" alt="image-20230116004957697"></p><p>导入springboot-autoconfiguration-test工程测试工程</p><p><img src="'+tn+`" alt="PghR2lcWRjJI4UupdqLtPVXCIz9INS"></p><p>PghR2lcWRjJI4UupdqLtPVXCIz9INS</p><p><strong>测试前准备：</strong></p><h6 id="_1️⃣-在test工程中引入阿里云starter依赖" tabindex="-1">1️⃣ 在test工程中引入阿里云starter依赖 <a class="header-anchor" href="#_1️⃣-在test工程中引入阿里云starter依赖" aria-label="Permalink to &quot;1️⃣ 在test工程中引入阿里云starter依赖&quot;">​</a></h6><ul><li>通过依赖传递，会把autoconfigure依赖也引入了</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;!--引入阿里云OSS起步依赖--&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.aliyun.oss&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;aliyun-oss-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><h6 id="_2️⃣-在test工程中的application-yml文件中-配置阿里云oss配置参数信息-从以前的工程中拷贝即可" tabindex="-1">2️⃣ 在test工程中的application.yml文件中，配置阿里云OSS配置参数信息（从以前的工程中拷贝即可） <a class="header-anchor" href="#_2️⃣-在test工程中的application-yml文件中-配置阿里云oss配置参数信息-从以前的工程中拷贝即可" aria-label="Permalink to &quot;2️⃣ 在test工程中的application.yml文件中，配置阿里云OSS配置参数信息（从以前的工程中拷贝即可）&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>#配置阿里云OSS参数</span></span>
<span class="line"><span>aliyun:</span></span>
<span class="line"><span>  oss:</span></span>
<span class="line"><span>    endpoint: https://oss-cn-guangzhou.aliyuncs.com</span></span>
<span class="line"><span>    accessKeyId: LTAI5tGJKWuBifboPQrMQFze</span></span>
<span class="line"><span>    accessKeySecret: 在文章中有，找找，找不到问yange</span></span>
<span class="line"><span>    bucketName: java76oss</span></span></code></pre></div><h6 id="_3️⃣-在test工程中的uploadcontroller类编写代码" tabindex="-1">3️⃣ 在test工程中的UploadController类编写代码 <a class="header-anchor" href="#_3️⃣-在test工程中的uploadcontroller类编写代码" aria-label="Permalink to &quot;3️⃣ 在test工程中的UploadController类编写代码&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class UploadController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span> @Autowired</span></span>
<span class="line"><span> private AliOSSUtils aliOSSUtils;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> @PostMapping(&quot;/upload&quot;)</span></span>
<span class="line"><span> public String upload(MultipartFile image) throws Exception {</span></span>
<span class="line"><span>     //上传文件到阿里云 OSS</span></span>
<span class="line"><span>     String url = aliOSSUtils.upload(image);</span></span>
<span class="line"><span>     System.out.println(url);</span></span>
<span class="line"><span>     return url;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>编写完代码后，我们启动当前的SpringBoot测试工程：</p><ul><li>随着SpringBoot项目启动，自动配置会把AliOSSUtils的bean对象装配到IOC容器中</li></ul><p><img src="`+on+'" alt="image-20230116011039611"></p><p>用postman工具进行文件上传：</p><p><img src="'+en+'" alt="image-20230116010731914"></p><p>通过断点可以看到自动注入AliOSSUtils的bean对象：</p><p><img src="'+rn+'" alt="image-20230116011501201"></p><p>课堂作业</p><p>🚩 1. 下载起步依赖初始工程，完成起步依赖的定义，体会其流程，你就是这条该最靓的崽！</p><h2 id="_4-web后端开发总结" tabindex="-1">4. Web后端开发总结 <a class="header-anchor" href="#_4-web后端开发总结" aria-label="Permalink to &quot;4\\. Web后端开发总结&quot;">​</a></h2><p><img src="'+cn+'" alt="image-2023011601150"></p><p>课后作业</p><p>🚩 1. 将参考上图将你熟悉的、不熟悉的、忘记的、知识点进行分类并复盘，可以使用自己模板，也可以参考下面的模板</p><ul><li>前端 <ul><li>熟悉：</li><li>了解：</li><li>忘记：</li></ul></li><li>数据库 <ul><li>熟悉：</li><li>了解：</li><li>忘记：</li></ul></li><li>框架 <ul><li>熟悉：</li><li>了解：</li><li>忘记：</li></ul></li><li>服务器软件 <ul><li>熟悉：</li><li>了解：</li><li>忘记：</li></ul></li><li>web知识 <ul><li>熟悉：</li><li>了解：</li><li>忘记：</li></ul></li></ul><p><a href="http://www.yangeit.cn:21010/javaweb2023/day15.html#_3-%E7%A7%81%E6%9C%8D" target="_blank" rel="noreferrer">你想知道Maven仓库中收费的jar怎么管理吗？点击这里学习</a></p>',341),dn=[un];function mn(bn,hn,Sn,Cn,kn,vn){return l(),p("div",null,dn)}const qn=a(gn,[["render",mn]]);export{In as __pageData,qn as default};
