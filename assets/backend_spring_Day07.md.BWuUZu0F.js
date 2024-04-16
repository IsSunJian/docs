import{_ as a,c as s,o as n,a4 as p}from"./chunks/framework.-JfgED0h.js";const t="/docs/assets/image-20210811205020792.DlNcSDnx.png",l="/docs/assets/2022-09-04-22-54-07.DFhlXpop.png",e="/docs/assets/image-20210811184326884.CCDdTkRf.png",i="/docs/assets/image-20220420092450843.YMOGP3d6.png",o="/docs/assets/image-20210811183956586.DSKL5-2P.png",r="/docs/assets/image-20210811184126747.TK9xHzoj.png",c="/docs/assets/image-20210811184424903.UXUOjfp8.png",g="/docs/assets/2022-09-05-00-03-50.jfXDMtIr.png",d="/docs/assets/2022-09-05-00-04-38.Cf2L2lR_.png",u="/docs/assets/2022-09-05-00-06-50.D-UZYRLE.png",h="/docs/assets/2022-09-05-00-10-18.BErh3IWN.png",m="/docs/assets/2022-09-05-00-11-13.BSyQR8hS.png",b="/docs/assets/2022-09-04-20-52-23.Bp8KUurw.png",v="/docs/assets/image-20210811211456419.C4lk2oEz.png",f="/docs/assets/image-20210811211507840.BpM1-DlV.png",k="/docs/assets/image-20210811211516197.dz2S45oX.png",q="/docs/assets/image-20210811211525671.CjIKrXkh.png",_="/docs/assets/image-20210811211548589.BzYTg8vs.png",y="/docs/assets/image-20210811211556445.DZjVD02Y.png",S="/docs/assets/image-20210811195722156.DP5KA0h-.png",C="/docs/assets/image-20210811195801430.Cwn9Yk7k.png",B="/docs/assets/image-20210811195823054.NKcIgEXQ.png",x="/docs/assets/image-20210811195844691.DmCsX_-4.png",I="/docs/assets/image-20210815102251887.CylzIGY6.png",P="/docs/assets/image-20210811195942997.DdlQaoDi.png",j="/docs/assets/image-20210811200002937.BH0ueCZV.png",w="/docs/assets/image-20210811200030710.E3Sbr1Ov.png",M="/docs/assets/image-20210811200354075.CrT8umIP.png",D="/docs/assets/image-20210811200516648.C4QtVETr.png",T="/docs/assets/2022-09-04-23-25-03.Cq_5w8WF.png",A="/docs/assets/image-20210811200628431.5Ts0YS5-.png",J="/docs/assets/image-20210811200723514.Fl1jEIGb.png",V="/docs/assets/image-20210811200833143.CtW6dsKD.png",L="/docs/assets/image-20210811201314649.jkRSRMya.png",U="/docs/assets/image-20210811201328652.CEroQrDL.png",O="/docs/assets/2022-09-04-23-46-22.DRx539-7.png",W=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"backend/spring/Day07.md","filePath":"backend/spring/Day07.md"}'),$={name:"backend/spring/Day07.md"},E=p('<h2 id="_1-springboot-简介" tabindex="-1">1.SpringBoot 简介 <a class="header-anchor" href="#_1-springboot-简介" aria-label="Permalink to &quot;1.SpringBoot 简介&quot;">​</a></h2><ul><li>SpringBoot 是由 Pivotal 团队提供的全新框架，其设计目的是用来简化 Spring 应用的初始搭建以及开发过程</li></ul><p>点击查看原生开发 SpringMVC 程序过程</p><p><img src="'+t+'" alt="image-20210811205020792"><img src="'+l+'" alt=""></p><h3 id="_1-1-入门案例" tabindex="-1">1.1 入门案例 <a class="header-anchor" href="#_1-1-入门案例" aria-label="Permalink to &quot;1.1 入门案例&quot;">​</a></h3><p>15 分钟</p><h4 id="_1-1-1-「入门案例」核心问题-答案" tabindex="-1">1.1.1 「入门案例」核心问题&amp;答案 <a class="header-anchor" href="#_1-1-1-「入门案例」核心问题-答案" aria-label="Permalink to &quot;1.1.1 「入门案例」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>Spring 程序与 SpringBoot 程序对比有何区别？</li><li>基于 idea 开发 SpringBoot 程序需要联网吗？JDK 一般设置哪个版本？</li></ol><p>点击查看代码</p><ul><li>Spring 程序与 SpringBoot 程序对比</li></ul><p><img src="'+e+'" alt="image-20210811184326884"></p><p><strong>注意事项：</strong></p><ul><li>基于 idea 开发 SpringBoot 程序需要确保联网且能够加载到程序框架结构 <ul><li>如果没网就会显示下列对话框：</li></ul></li></ul><p><img src="'+i+'" alt="image-20220420092450843"></p><ul><li>JDK 使用 1.8</li></ul><h4 id="_1-1-2-入门案例开发步骤" tabindex="-1">1.1.2 入门案例开发步骤 <a class="header-anchor" href="#_1-1-2-入门案例开发步骤" aria-label="Permalink to &quot;1.1.2 入门案例开发步骤&quot;">​</a></h4><h5 id="_2️⃣-选择当前模块需要使用的技术集" tabindex="-1">2️⃣ 选择当前模块需要使用的技术集 <a class="header-anchor" href="#_2️⃣-选择当前模块需要使用的技术集" aria-label="Permalink to &quot;2️⃣ 选择当前模块需要使用的技术集&quot;">​</a></h5><p><img src="'+o+`" alt="image-20210811183956586"></p><h5 id="_3️⃣-开发控制器类" tabindex="-1">3️⃣ 开发控制器类 <a class="header-anchor" href="#_3️⃣-开发控制器类" aria-label="Permalink to &quot;3️⃣ 开发控制器类&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/books&quot;)</span></span>
<span class="line"><span>public class BookController {</span></span>
<span class="line"><span>    @GetMapping(&quot;/{id}&quot;)</span></span>
<span class="line"><span>    public String getById(@PathVariable Integer id) {</span></span>
<span class="line"><span>        System.out.println(&quot;id ==&gt; &quot; + id);</span></span>
<span class="line"><span>        return &quot;hello , spring boot! &quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_4️⃣-运行自动生成的-application-类" tabindex="-1">4️⃣ 运行自动生成的 Application 类 <a class="header-anchor" href="#_4️⃣-运行自动生成的-application-类" aria-label="Permalink to &quot;4️⃣ 运行自动生成的 Application 类&quot;">​</a></h5><ul><li><p>下图表示已经启动了</p><p><img src="`+r+`" alt="image-20210811184126747"></p><p>image-20210811184126747</p></li><li><p>最简 SpringBoot 程序所包含的基础文件</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;</span></span>
<span class="line"><span>    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;</span></span>
<span class="line"><span>  &lt;!-- 强大的父工程 --&gt;</span></span>
<span class="line"><span>    &lt;parent&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;2.5.0&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/parent&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;groupId&gt;com.itheima&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;springboot-01-quickstart&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;dependencies&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;/dependencies&gt;</span></span>
<span class="line"><span>&lt;/project&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@SpringBootApplication</span></span>
<span class="line"><span>public class Application {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        SpringApplication.run(Application.class, args);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_1-1-3-基于-springboot-官网创建项目" tabindex="-1">1.1.3 基于 SpringBoot 官网创建项目 <a class="header-anchor" href="#_1-1-3-基于-springboot-官网创建项目" aria-label="Permalink to &quot;1.1.3 基于 SpringBoot 官网创建项目&quot;">​</a></h4><p>6 分钟</p><p>点击查看步鄹</p><p><img src="`+c+'" alt="image-20210811184424903"></p><ul><li>官网：<a href="https://spring.io/projects" target="_blank" rel="noreferrer">https://spring.io/projectsopen in new window</a></li></ul><h3 id="_1-2-springboot-入门案例-练习-✏️" tabindex="-1">1.2 SpringBoot 入门案例 练习 ✏️ <a class="header-anchor" href="#_1-2-springboot-入门案例-练习-✏️" aria-label="Permalink to &quot;1.2 SpringBoot 入门案例 练习 ✏️&quot;">​</a></h3><p>10 分钟</p><h4 id="_1-2-0「springboot-入门案例」目的" tabindex="-1">1.2.0「SpringBoot 入门案例」目的 <a class="header-anchor" href="#_1-2-0「springboot-入门案例」目的" aria-label="Permalink to &quot;1.2.0「SpringBoot 入门案例」目的&quot;">​</a></h4><blockquote><p>熟悉 idea 创建 SpringBoot 入门案例</p></blockquote><h4 id="_1-2-1「springboot-入门案例」需求-效果" tabindex="-1">1.2.1「SpringBoot 入门案例」需求&amp;效果 <a class="header-anchor" href="#_1-2-1「springboot-入门案例」需求-效果" aria-label="Permalink to &quot;1.2.1「SpringBoot 入门案例」需求&amp;效果&quot;">​</a></h4><blockquote><p>在 controller 中创建一个接口，启动服务器，正常访问</p></blockquote><h4 id="_1-2-2「springboot-入门案例」步鄹" tabindex="-1">1.2.2「SpringBoot 入门案例」步鄹 <a class="header-anchor" href="#_1-2-2「springboot-入门案例」步鄹" aria-label="Permalink to &quot;1.2.2「SpringBoot 入门案例」步鄹&quot;">​</a></h4><ul><li>参考 1.1.2 入门案例开发步骤</li></ul><p>点击查看代码</p><ol><li>新建模块，选择左边的 spring Initializer，点击下一步，配置 Jar 包，Maven JDK1.8 点击 next <img src="'+g+'" alt=""></li><li>选择左边的 Web，中间勾选 SpringWeb，然后在右上角点击 Springboot2.5.0（如果没有，选择一个后面去 pom 中修改） ，点击 Next <img src="'+d+'" alt=""></li><li>检查路径中没有双斜杠（注意路径一般为单斜杠），然后点击 Next <img src="'+u+'" alt=""></li><li>完成创建后，删除你不认识的文件，如：.mvn <a href="http://help.md/" target="_blank" rel="noreferrer">help.mdopen in new window</a> 等，就留下 src 包和 pom.xml 文件 <img src="'+h+'" alt=""></li><li>需要删除 pom 文件中，name 和 description 的属性,让 maven 工程的名字和文件夹的文字一致，方便阅读 <img src="'+m+`" alt=""></li><li>创建 controller 包，在 controller 中，创建 BookController 类，书写下面的代码：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/books&quot;)</span></span>
<span class="line"><span>public class BookController {</span></span>
<span class="line"><span>    @GetMapping(&quot;/{id}&quot;)</span></span>
<span class="line"><span>    public String getById(@PathVariable Integer id){</span></span>
<span class="line"><span>        System.out.println(&quot;id ==&gt; &quot;+id);</span></span>
<span class="line"><span>        return &quot;hello , spring boot!&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="7"><li>点开 Application 文件，运行 main 方法，观察控制台的输出情况</li><li>使用 postman 访问：localhost:8080/books/8 观察浏览器和控制台的输出</li></ol><p>🎉 恭喜你，你已经成功掌握 SpringBoot 项目的创建，并运行成功了，接下来可以就 CV 接口吧！！</p><ul><li>注意：也可以使用官网生成项目，地址：<a href="https://spring.io/projects" target="_blank" rel="noreferrer">https://spring.io/projectsopen in new window</a></li><li>选择第一个项目 Springboot 即可，然后拉到最后点击快速创建，跳出一个页面，制定 JDK 版本，以及一些配置信息，就可以点击生成。</li></ul><h4 id="_1-2-3-springboot-项目快速启动步鄹" tabindex="-1">1.2.3 SpringBoot 项目快速启动步鄹 <a class="header-anchor" href="#_1-2-3-springboot-项目快速启动步鄹" aria-label="Permalink to &quot;1.2.3 SpringBoot 项目快速启动步鄹&quot;">​</a></h4><p>点击查看项目快速启动步鄹</p><h5 id="_1️⃣-对-springboot-项目打包-执行-maven-构建指令-package" tabindex="-1">1️⃣ 对 SpringBoot 项目打包（执行 Maven 构建指令 package） <a class="header-anchor" href="#_1️⃣-对-springboot-项目打包-执行-maven-构建指令-package" aria-label="Permalink to &quot;1️⃣ 对 SpringBoot 项目打包（执行 Maven 构建指令 package）&quot;">​</a></h5><h5 id="_2️⃣-执行启动指令" tabindex="-1">2️⃣ 执行启动指令 <a class="header-anchor" href="#_2️⃣-执行启动指令" aria-label="Permalink to &quot;2️⃣ 执行启动指令&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>java -jar springboot_01_quickstart.jar# 项目的名称根据实际情况修改</span></span></code></pre></div><p><strong>注意事项：</strong></p><p><strong>jar 支持命令行启动需要依赖 maven 插件支持，请确认打包时是否具有 SpringBoot 对应的 maven 插件。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;build&gt;</span></span>
<span class="line"><span>    &lt;plugins&gt;</span></span>
<span class="line"><span>        &lt;plugin&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;/plugin&gt;</span></span>
<span class="line"><span>    &lt;/plugins&gt;</span></span>
<span class="line"><span>&lt;/build&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; 使用java -jar 指令，记得要安装jdk和配置环境变量</span></span></code></pre></div><h3 id="_1-3-springboot-概述-❤️" tabindex="-1">1.3 SpringBoot 概述 ❤️ <a class="header-anchor" href="#_1-3-springboot-概述-❤️" aria-label="Permalink to &quot;1.3 SpringBoot 概述 ❤️&quot;">​</a></h3><h4 id="_1-3-1-「springboot-概述」核心问题-答案" tabindex="-1">1.3.1 「SpringBoot 概述」核心问题&amp;答案 <a class="header-anchor" href="#_1-3-1-「springboot-概述」核心问题-答案" aria-label="Permalink to &quot;1.3.1 「SpringBoot 概述」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>学习了 SpringBoot 入门案例之后，感觉对比 SpringMVC 哪一个更加方便简洁？</li></ol><p>点击查看代码</p><ul><li>SpringBoot 是由 Pivotal 团队提供的全新框架，其设计目的是用来<strong>简化</strong>Spring 应用的<strong>初始搭建</strong>以及<strong>开发过程</strong></li><li>Spring 程序缺点 <ul><li>配置繁琐</li><li>依赖设置繁琐</li></ul></li><li>SpringBoot 程序优点 <ul><li>自动配置</li><li>起步依赖（简化依赖配置）</li><li>辅助功能（内置服务器，……）</li></ul></li></ul><h4 id="_1-3-2-起步依赖" tabindex="-1">1.3.2 起步依赖 <a class="header-anchor" href="#_1-3-2-起步依赖" aria-label="Permalink to &quot;1.3.2 起步依赖&quot;">​</a></h4><ul><li>starter是 SpringBoot 中常见项目名称，定义了当前项目使用的所有项目坐标，以达到减少依赖配置的目的</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;</span></span>
<span class="line"><span>    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;</span></span>
<span class="line"><span>    &lt;parent&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;2.5.0&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/parent&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.itheima&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;springboot-01-quickstart&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;dependencies&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;/dependencies&gt;</span></span>
<span class="line"><span>&lt;/project&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot;</span></span>
<span class="line"><span>         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;</span></span>
<span class="line"><span>         xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&gt;</span></span>
<span class="line"><span>    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-boot-dependencies&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;2.5.0&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;packaging&gt;pom&lt;/packaging&gt;</span></span>
<span class="line"><span>    &lt;properties&gt;</span></span>
<span class="line"><span>        &lt;servlet-api.version&gt;4.0.1&lt;/servlet-api.version&gt;</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>    &lt;/properties&gt;</span></span>
<span class="line"><span>&lt;/project&gt;</span></span></code></pre></div><p><strong>parent</strong></p><ul><li>所有 SpringBoot 项目要继承的项目，定义了若干个坐标版本号（依赖管理，而非依赖），以达到减少依赖冲突的目的</li><li>spring-boot-starter-parent（2.5.0）与 spring-boot-starter-parent（2.4.6）共计 57 处坐标版本不同</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot;</span></span>
<span class="line"><span>         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;</span></span>
<span class="line"><span>         xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&gt;</span></span>
<span class="line"><span>    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;</span></span>
<span class="line"><span>    &lt;parent&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-boot-dependencies&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;2.5.0&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/parent&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;packaging&gt;pom&lt;/packaging&gt;</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>&lt;/project&gt;</span></span></code></pre></div><p>实际开发技巧</p><ul><li>使用任意坐标时，仅书写 GAV 中的 G 和 A，V 由 SpringBoot 提供</li><li>如发生坐标错误，再指定 version（要小心版本冲突）</li></ul><p>点击查看代码</p><p><img src="`+b+`" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;junit&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;junit&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;\${junit.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;javax.servlet&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;javax.servlet-api&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;\${servlet-api.version}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;</span></span>
<span class="line"><span>    &lt;parent&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;2.5.0&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/parent&gt;</span></span>
<span class="line"><span>    &lt;dependencies&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;scope&gt;test&lt;/scope&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;/dependencies&gt;</span></span>
<span class="line"><span>&lt;/project&gt;</span></span></code></pre></div><h4 id="_1-3-3-辅助功能-使用-jetty-服务器" tabindex="-1">1.3.3 辅助功能(使用 jetty 服务器) <a class="header-anchor" href="#_1-3-3-辅助功能-使用-jetty-服务器" aria-label="Permalink to &quot;1.3.3 辅助功能(使用 jetty 服务器)&quot;">​</a></h4><p><strong>SpringBoot 程序启动和更换为 jetty 服务器</strong></p><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@SpringBootApplication</span></span>
<span class="line"><span>public class Springboot01QuickstartApplication {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        SpringApplication.run(Springboot01QuickstartApplication.class, args);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><p>SpringBoot 在创建项目时，采用 jar 的打包方式</p></li><li><p>SpringBoot 的引导类是项目的入口，运行 main 方法就可以启动项目</p></li><li><p>使用 maven 依赖管理变更起步依赖项</p></li><li><p>Jetty 比 Tomcat 更轻量级，可扩展性更强（相较于 Tomcat），谷歌应用引擎（GAE）已经全面切换为 Jetty</p><blockquote><p>Jetty 是一个开源的 servlet 容器，它为基于 Java 的 web 容器，例如 JSP 和 servlet 提供运行环境。Jetty 是使用 Java 语言编写的，它的 API 以一组 JAR 包的形式发布。开发人员可以将 Jetty 容器实例化成一个对象，可以迅速为一些独立运行（stand-alone）的 Java 应用提供网络和 web 连接。</p></blockquote></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;dependencies&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;!--web起步依赖环境中，排除Tomcat起步依赖--&gt;</span></span>
<span class="line"><span>        &lt;exclusions&gt;</span></span>
<span class="line"><span>            &lt;exclusion&gt;</span></span>
<span class="line"><span>                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>                &lt;artifactId&gt;spring-boot-starter-tomcat&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;/exclusion&gt;</span></span>
<span class="line"><span>        &lt;/exclusions&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;!--添加Jetty起步依赖，版本由SpringBoot的starter控制--&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-boot-starter-jetty&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;/dependencies&gt;</span></span></code></pre></div><h2 id="_2-基础配置" tabindex="-1">2.基础配置 <a class="header-anchor" href="#_2-基础配置" aria-label="Permalink to &quot;2.基础配置&quot;">​</a></h2><h3 id="_2-1-配置文件格式" tabindex="-1">2.1 配置文件格式 <a class="header-anchor" href="#_2-1-配置文件格式" aria-label="Permalink to &quot;2.1 配置文件格式&quot;">​</a></h3><h4 id="_2-1-1-「配置文件格式」核心问题-答案" tabindex="-1">2.1.1 「配置文件格式」核心问题&amp;答案 <a class="header-anchor" href="#_2-1-1-「配置文件格式」核心问题-答案" aria-label="Permalink to &quot;2.1.1 「配置文件格式」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li><p>修改服务器端口，怎么修改？如：8080 改成 80</p></li><li><p>框架常见的配置文件有哪几种形式？</p></li></ol><p>点击查看</p><p>SpringBoot 提供了多种属性配置方式</p><ul><li><p>application.properties</p></li><li><p>application.yml</p></li><li><p>application.yaml</p></li></ul><h4 id="_2-1-2-配置文件-自动提示功能消失解决方案-✏️" tabindex="-1">2.1.2 配置文件 自动提示功能消失解决方案 ✏️ <a class="header-anchor" href="#_2-1-2-配置文件-自动提示功能消失解决方案-✏️" aria-label="Permalink to &quot;2.1.2 配置文件 自动提示功能消失解决方案 ✏️&quot;">​</a></h4><p>点击查看操作步骤：</p><p><img src="`+v+'" alt="image-20210811211456419"></p><p><img src="'+f+'" alt="image-20210811211507840"></p><p><img src="'+k+'" alt="image-20210811211516197"></p><p><img src="'+q+'" alt="image-20210811211525671"></p><p><img src="'+_+'" alt="image-20210811211548589"></p><p><img src="'+y+'" alt="image-20210811211556445"></p><h4 id="_2-1-3-springboot-配置文件加载顺序-了解-🚀" tabindex="-1">2.1.3 SpringBoot 配置文件加载顺序（了解） 🚀 <a class="header-anchor" href="#_2-1-3-springboot-配置文件加载顺序-了解-🚀" aria-label="Permalink to &quot;2.1.3 SpringBoot 配置文件加载顺序（了解） 🚀&quot;">​</a></h4><ul><li>application.<strong>properties</strong> &gt; application.<strong>yml</strong> &gt; application.<strong>yaml</strong></li></ul><p><strong>注意事项：</strong></p><ol><li><strong>SpringBoot 核心配置文件名为 application</strong></li><li><strong>SpringBoot 内置属性过多，且所有属性集中在一起修改，在使用时，通过提示键+关键字修改属性</strong></li></ol><h3 id="_2-2-yaml" tabindex="-1">2.2 yaml <a class="header-anchor" href="#_2-2-yaml" aria-label="Permalink to &quot;2.2 yaml&quot;">​</a></h3><h4 id="_2-2-1-「yaml」核心问题-答案" tabindex="-1">2.2.1 「yaml」核心问题&amp;答案 <a class="header-anchor" href="#_2-2-1-「yaml」核心问题-答案" aria-label="Permalink to &quot;2.2.1 「yaml」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>什么是 yaml，和 properties 有什么区别？</li></ol><p>点击查看代码</p><ul><li>YAML（YAML Ain&#39;t Markup Language），一种数据序列化格式</li><li>优点： <ul><li>容易阅读</li><li>容易与脚本语言交互</li><li>以数据为核心，重数据轻格式</li></ul></li><li>YAML 文件扩展名 <ul><li>.yml（主流）</li><li>.yaml</li></ul></li></ul><h4 id="_2-2-2-yaml-语法规则" tabindex="-1">2.2.2 yaml 语法规则 <a class="header-anchor" href="#_2-2-2-yaml-语法规则" aria-label="Permalink to &quot;2.2.2 yaml 语法规则&quot;">​</a></h4><p>语法规则</p><ul><li>大小写敏感</li><li>属性层级关系使用多行描述，每行结尾使用冒号结束</li><li>使用缩进表示层级关系，同层级左侧对齐，只允许使用空格（不允许使用 Tab 键）</li><li><code>属性值前面添加空格（属性名与属性值之间使用冒号+空格作为分隔）</code></li><li>#表示注释</li><li>核心规则：<strong>数据前面要加空格与冒号隔开</strong></li></ul><h4 id="_2-2-3-yaml-数组数据" tabindex="-1">2.2.3 yaml 数组数据 <a class="header-anchor" href="#_2-2-3-yaml-数组数据" aria-label="Permalink to &quot;2.2.3 yaml 数组数据&quot;">​</a></h4><ul><li>数组数据在数据书写位置的下方使用减号作为数据开始符号，每行书写一个数据，减号与数据间空格分隔</li></ul><p>点击查看代码</p><p><img src="'+S+'" alt="image-20210811195722156"></p><h4 id="_2-2-4-yaml-数据读取" tabindex="-1">2.2.4 yaml 数据读取 <a class="header-anchor" href="#_2-2-4-yaml-数据读取" aria-label="Permalink to &quot;2.2.4 yaml 数据读取&quot;">​</a></h4><p>11 分钟</p><p>点击查看代码</p><ul><li><code>使用@Value 读取单个数据，属性名引用方式：${一级属性名.二级属性名……}</code></li></ul><p><img src="'+C+'" alt="image-20210811195801430"></p><ul><li>封装全部数据到 Environment 对象</li></ul><p><img src="'+B+`" alt="image-20210811195823054"></p><ul><li><strong>自定义对象封装指定数据【常用】</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class Enterprise {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private Integer age;</span></span>
<span class="line"><span>    private String tel;</span></span>
<span class="line"><span>    private String[] subject;</span></span>
<span class="line"><span>    //自行添加getter、setter、toString()等方法</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+x+'" alt="image-20210811195844691"></p><ul><li>自定义对象封装数据警告解决方案</li></ul><p><img src="'+I+`" alt="image-20210815102251887"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-boot-configuration-processor&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;optional&gt;true&lt;/optional&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><h3 id="_2-3-多环境开发配置" tabindex="-1">2.3 多环境开发配置 <a class="header-anchor" href="#_2-3-多环境开发配置" aria-label="Permalink to &quot;2.3 多环境开发配置&quot;">​</a></h3><p>8 分钟</p><h4 id="_2-3-1-「多环境开发配置」核心问题-答案" tabindex="-1">2.3.1 「多环境开发配置」核心问题&amp;答案 <a class="header-anchor" href="#_2-3-1-「多环境开发配置」核心问题-答案" aria-label="Permalink to &quot;2.3.1 「多环境开发配置」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>在实际开发中，项目的开发环境、测试环境、生产环境的配置信息是否会一致？</li></ol><p>点击查看代码</p><ul><li>在实际开发中，项目的开发环境、测试环境、生产环境的配置信息不一致，按需配置</li></ul><h4 id="_2-3-2-多环境启动配置-❤️" tabindex="-1">2.3.2 多环境启动配置 ❤️ <a class="header-anchor" href="#_2-3-2-多环境启动配置-❤️" aria-label="Permalink to &quot;2.3.2 多环境启动配置 ❤️&quot;">​</a></h4><h5 id="yaml-文件多环境启动-❤️" tabindex="-1"><strong>yaml 文件多环境启动</strong> ❤️ <a class="header-anchor" href="#yaml-文件多环境启动-❤️" aria-label="Permalink to &quot;**yaml 文件多环境启动** ❤️&quot;">​</a></h5><p><img src="`+P+'" alt="image-20210811195942997"></p><p><img src="'+j+'" alt="image-20210811200002937"></p><p><img src="'+w+`" alt="image-20210811200030710"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>#设置启用的环境</span></span>
<span class="line"><span>spring:</span></span>
<span class="line"><span>  profiles:</span></span>
<span class="line"><span>    active: dev</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>#开发（推荐格式）</span></span>
<span class="line"><span>spring:</span></span>
<span class="line"><span>  config:</span></span>
<span class="line"><span>    activate:</span></span>
<span class="line"><span>      on-profile: dev</span></span>
<span class="line"><span>server:</span></span>
<span class="line"><span>  port: 80</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>#生产（过时格式）</span></span>
<span class="line"><span>spring:</span></span>
<span class="line"><span>  profiles: pro</span></span>
<span class="line"><span>server:</span></span>
<span class="line"><span>  port: 81</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>#测试</span></span>
<span class="line"><span>spring:</span></span>
<span class="line"><span>  profiles: test</span></span>
<span class="line"><span>server:</span></span>
<span class="line"><span>  port: 82</span></span>
<span class="line"><span>---</span></span></code></pre></div><h5 id="properties-文件多环境启动-🚀" tabindex="-1"><strong>properties 文件多环境启动</strong> 🚀 <a class="header-anchor" href="#properties-文件多环境启动-🚀" aria-label="Permalink to &quot;**properties 文件多环境启动** 🚀&quot;">​</a></h5><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>#主启动配置文件 application.properties</span></span>
<span class="line"><span>spring.profiles.active=pro</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>#环境分类配置文件 application-pro.properties</span></span>
<span class="line"><span>server.port=80</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>#环境分类配置文件 application-dev.properties</span></span>
<span class="line"><span>server.port=81</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>#环境分类配置文件application-test.properties</span></span>
<span class="line"><span>server.port=82</span></span></code></pre></div><h4 id="_2-3-3-多环境启动命令格式-✏️" tabindex="-1">2.3.3 多环境启动命令格式 ✏️ <a class="header-anchor" href="#_2-3-3-多环境启动命令格式-✏️" aria-label="Permalink to &quot;2.3.3 多环境启动命令格式 ✏️&quot;">​</a></h4><p>8 分钟</p><blockquote><p>思考：如果前端工程师需要使用后台的接口，而 Java 程序员服务器没有启动，可以正常工作吗？ 需要将 java 源码拷贝给前端吗？</p></blockquote><ul><li>带参数启动 SpringBoot</li></ul><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span># 配置当前环境</span></span>
<span class="line"><span>java –jar springboot.jar --spring.profiles.active=test</span></span>
<span class="line"><span># 配置端口为88</span></span>
<span class="line"><span>java –jar springboot.jar --server.port=88</span></span>
<span class="line"><span># 配置端口和当前环境</span></span>
<span class="line"><span>java –jar springboot.jar --server.port=88 --spring.profiles.active=test</span></span></code></pre></div><ul><li><p>参数加载优先顺序</p><ul><li>参看文档：<a href="https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html" target="_blank" rel="noreferrer">https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-external-configopen in new window</a></li></ul></li></ul><p><img src="`+M+`" alt="image-20210811200354075"></p><h4 id="_2-3-4-多环境开发控制-🚀-🚀" tabindex="-1">2.3.4 多环境开发控制 🚀 🚀 <a class="header-anchor" href="#_2-3-4-多环境开发控制-🚀-🚀" aria-label="Permalink to &quot;2.3.4 多环境开发控制 🚀 🚀&quot;">​</a></h4><p>9 分钟</p><p><strong>Maven 与 SpringBoot 多环境兼容（步骤）</strong></p><h5 id="_1️⃣-maven-中设置多环境属性" tabindex="-1">1️⃣ Maven 中设置多环境属性 <a class="header-anchor" href="#_1️⃣-maven-中设置多环境属性" aria-label="Permalink to &quot;1️⃣ Maven 中设置多环境属性&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;profiles&gt;</span></span>
<span class="line"><span>    &lt;profile&gt;</span></span>
<span class="line"><span>        &lt;id&gt;dev_env&lt;/id&gt;</span></span>
<span class="line"><span>        &lt;properties&gt;</span></span>
<span class="line"><span>            &lt;profile.active&gt;dev&lt;/profile.active&gt;</span></span>
<span class="line"><span>        &lt;/properties&gt;</span></span>
<span class="line"><span>        &lt;activation&gt;</span></span>
<span class="line"><span>            &lt;activeByDefault&gt;true&lt;/activeByDefault&gt;</span></span>
<span class="line"><span>        &lt;/activation&gt;</span></span>
<span class="line"><span>    &lt;/profile&gt;</span></span>
<span class="line"><span>    &lt;profile&gt;</span></span>
<span class="line"><span>        &lt;id&gt;pro_env&lt;/id&gt;</span></span>
<span class="line"><span>        &lt;properties&gt;</span></span>
<span class="line"><span>            &lt;profile.active&gt;pro&lt;/profile.active&gt;</span></span>
<span class="line"><span>        &lt;/properties&gt;</span></span>
<span class="line"><span>    &lt;/profile&gt;</span></span>
<span class="line"><span>    &lt;profile&gt;</span></span>
<span class="line"><span>        &lt;id&gt;test_env&lt;/id&gt;</span></span>
<span class="line"><span>        &lt;properties&gt;</span></span>
<span class="line"><span>            &lt;profile.active&gt;test&lt;/profile.active&gt;</span></span>
<span class="line"><span>        &lt;/properties&gt;</span></span>
<span class="line"><span>    &lt;/profile&gt;</span></span>
<span class="line"><span>&lt;/profiles&gt;</span></span></code></pre></div><h5 id="_2️⃣-springboot-中引用-maven-属性" tabindex="-1">2️⃣ SpringBoot 中引用 Maven 属性 <a class="header-anchor" href="#_2️⃣-springboot-中引用-maven-属性" aria-label="Permalink to &quot;2️⃣ SpringBoot 中引用 Maven 属性&quot;">​</a></h5><p><img src="`+D+`" alt="image-20210811200516648"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>#设置启用的环境</span></span>
<span class="line"><span>spring:</span></span>
<span class="line"><span>  profiles:</span></span>
<span class="line"><span>    active: \${profile.active}</span></span>
<span class="line"><span># 下面省略配置的环境</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>  &lt;profiles&gt;</span></span>
<span class="line"><span>        &lt;!--开发环境--&gt;</span></span>
<span class="line"><span>        &lt;profile&gt;</span></span>
<span class="line"><span>            &lt;id&gt;dev&lt;/id&gt;</span></span>
<span class="line"><span>            &lt;properties&gt;</span></span>
<span class="line"><span>                &lt;profile.active&gt;dev&lt;/profile.active&gt;</span></span>
<span class="line"><span>            &lt;/properties&gt;</span></span>
<span class="line"><span>            &lt;!--表示该环境激活了--&gt;</span></span>
<span class="line"><span>            &lt;activation&gt;</span></span>
<span class="line"><span>                &lt;activeByDefault&gt;true&lt;/activeByDefault&gt;</span></span>
<span class="line"><span>            &lt;/activation&gt;</span></span>
<span class="line"><span>        &lt;/profile&gt;</span></span></code></pre></div><h5 id="_3️⃣-执行-maven-打包指令" tabindex="-1">3️⃣ 执行 Maven 打包指令 <a class="header-anchor" href="#_3️⃣-执行-maven-打包指令" aria-label="Permalink to &quot;3️⃣ 执行 Maven 打包指令&quot;">​</a></h5><ul><li>Maven 指令执行完毕后，生成了对应的包，其中类参与编译，但是配置文件并没有编译，而是复制到包中</li></ul><p><img src="`+T+`" alt=""></p><ul><li>解决思路：对于源码中非 java 类的操作要求加载 Maven 对应的属性，解析\${}占位符</li></ul><h5 id="_4️⃣-对资源文件开启对默认占位符的解析" tabindex="-1">4️⃣ 对资源文件开启对默认占位符的解析 <a class="header-anchor" href="#_4️⃣-对资源文件开启对默认占位符的解析" aria-label="Permalink to &quot;4️⃣ 对资源文件开启对默认占位符的解析&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;build&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;plugins&gt;</span></span>
<span class="line"><span>        &lt;plugin&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;maven-resources-plugin&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;configuration&gt;</span></span>
<span class="line"><span>            &lt;!-- 修改插件的配置信息 识别占位符\${} --&gt;</span></span>
<span class="line"><span>                &lt;encoding&gt;utf-8&lt;/encoding&gt;</span></span>
<span class="line"><span>                &lt;useDefaultDelimiters&gt;true&lt;/useDefaultDelimiters&gt;</span></span>
<span class="line"><span>            &lt;/configuration&gt;</span></span>
<span class="line"><span>        &lt;/plugin&gt;</span></span>
<span class="line"><span>    &lt;/plugins&gt;</span></span>
<span class="line"><span>&lt;/build&gt;</span></span></code></pre></div><ul><li>Maven 打包加载到属性，打包顺利通过</li></ul><p><img src="`+A+'" alt="image-20210811200628431"></p><h3 id="_2-4-配置文件分类" tabindex="-1">2.4 配置文件分类 <a class="header-anchor" href="#_2-4-配置文件分类" aria-label="Permalink to &quot;2.4 配置文件分类&quot;">​</a></h3><p>9 分钟</p><h4 id="_2-4-1-「配置文件分类」核心问题-答案" tabindex="-1">2.4.1 「配置文件分类」核心问题&amp;答案 <a class="header-anchor" href="#_2-4-1-「配置文件分类」核心问题-答案" aria-label="Permalink to &quot;2.4.1 「配置文件分类」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>SpringBoot 的配置文件哪种优先级最高</li></ol><p>点击查看代码</p><p><img src="'+J+'" alt="image-20210811200723514"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>java –jar springboot.jar --spring.profiles.active=test --server.port=85 --server.servlet.context-path=/heima --server.tomcat.connection-timeout=-1 ... ...</span></span></code></pre></div><blockquote><p>思考: 这么长的配置，不好记，有么有更好的方式？</p></blockquote><ul><li><p>SpringBoot 中 4 级配置文件</p><p>1 级： file ：config/application.yml <strong>【最高】</strong></p><p>2 级： file ：application.yml</p><p>3 级：classpath：config/application.yml</p><p>4 级：classpath：application.yml <strong>【最低】</strong></p></li><li><p>作用：</p><p>1 级与 2 级留做<strong>系统打包后</strong>设置通用属性</p><p>3 级与 4 级用于<strong>系统开发阶段</strong>设置通用属性</p></li></ul><h2 id="_3-整合第三方技术-❤️" tabindex="-1">3.整合第三方技术 ❤️ <a class="header-anchor" href="#_3-整合第三方技术-❤️" aria-label="Permalink to &quot;3.整合第三方技术 ❤️&quot;">​</a></h2><h3 id="_3-1-整合-junit-✏️" tabindex="-1">3.1 整合 JUnit ✏️ <a class="header-anchor" href="#_3-1-整合-junit-✏️" aria-label="Permalink to &quot;3.1 整合 JUnit ✏️&quot;">​</a></h3><p>10 分钟</p><h4 id="_3-1-1-「junit」核心问题-答案" tabindex="-1">3.1.1 「JUnit」核心问题&amp;答案 <a class="header-anchor" href="#_3-1-1-「junit」核心问题-答案" aria-label="Permalink to &quot;3.1.1 「JUnit」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>回忆一下 Spring 整合 JUnit 的步骤？</li></ol><p>点击查看</p><p><img src="'+V+`" alt="image-20210811200833143"></p><h4 id="_3-1-2-springboot-整合-junit" tabindex="-1">3.1.2 SpringBoot 整合 JUnit <a class="header-anchor" href="#_3-1-2-springboot-整合-junit" aria-label="Permalink to &quot;3.1.2 SpringBoot 整合 JUnit&quot;">​</a></h4><h5 id="_1️⃣-添加整合-junit-起步依赖-可以直接勾选" tabindex="-1">1️⃣ 添加整合 junit 起步依赖(可以直接勾选) <a class="header-anchor" href="#_1️⃣-添加整合-junit-起步依赖-可以直接勾选" aria-label="Permalink to &quot;1️⃣ 添加整合 junit 起步依赖(可以直接勾选)&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;!-- 添加起步依赖 --&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;scope&gt;test&lt;/scope&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><h5 id="_2️⃣-编写测试类-默认自动生成了一个" tabindex="-1">2️⃣ 编写测试类，默认自动生成了一个 <a class="header-anchor" href="#_2️⃣-编写测试类-默认自动生成了一个" aria-label="Permalink to &quot;2️⃣ 编写测试类，默认自动生成了一个&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@SpringBootTest</span></span>
<span class="line"><span>class Springboot07JunitApplicationTests {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private BookService bookService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testSave() {</span></span>
<span class="line"><span>        bookService.save();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_3-2-基于-boot-实现-ssm-整合-✏️-✏️" tabindex="-1">3.2 基于 boot 实现 SSM 整合 ✏️ ✏️ <a class="header-anchor" href="#_3-2-基于-boot-实现-ssm-整合-✏️-✏️" aria-label="Permalink to &quot;3.2 基于 boot 实现 SSM 整合 ✏️ ✏️&quot;">​</a></h3><p>17 分钟</p><h4 id="_3-2-1-「基于-springboot-实现-ssm-整合」核心问题-答案" tabindex="-1">3.2.1 「基于 SpringBoot 实现 SSM 整合」核心问题&amp;答案 <a class="header-anchor" href="#_3-2-1-「基于-springboot-实现-ssm-整合」核心问题-答案" aria-label="Permalink to &quot;3.2.1 「基于 SpringBoot 实现 SSM 整合」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>回忆一下 Spring 整合 MyBatis 的核心思想？</li></ol><p>点击查看 Spring 整合 MyBatis</p><ul><li>SpringConfig <ul><li>导入 JdbcConfig</li><li>导入 MyBatisConfig</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ComponentScan(&quot;com.itheima&quot;)</span></span>
<span class="line"><span>@PropertySource(&quot;classpath:jdbc.properties&quot;)</span></span>
<span class="line"><span>@Import({JdbcConfig.class, MyBatisConfig.class})</span></span>
<span class="line"><span>public class SpringConfig {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>JDBCConfig <ul><li>定义数据源（加载 properties 配置项：driver、url、username、password）</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>#jdbc.properties</span></span>
<span class="line"><span>jdbc.driver=com.mysql.jdbc.Driver</span></span>
<span class="line"><span>jdbc.url=jdbc:mysql://localhost:3306/spring_db</span></span>
<span class="line"><span>jdbc.username=root</span></span>
<span class="line"><span>jdbc.password=itheima</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class JdbcConfig {</span></span>
<span class="line"><span>    @Value(&quot;\${jdbc.driver}&quot;)</span></span>
<span class="line"><span>    private String driver;</span></span>
<span class="line"><span>    @Value(&quot;\${jdbc.url}&quot;)</span></span>
<span class="line"><span>    private String url;</span></span>
<span class="line"><span>    @Value(&quot;\${jdbc.username}&quot;)</span></span>
<span class="line"><span>    private String userName;</span></span>
<span class="line"><span>    @Value(&quot;\${jdbc.password}&quot;)</span></span>
<span class="line"><span>    private String password;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public DataSource getDataSource() {</span></span>
<span class="line"><span>        DruidDataSource ds = new DruidDataSource();</span></span>
<span class="line"><span>        ds.setDriverClassName(driver);</span></span>
<span class="line"><span>        ds.setUrl(url);</span></span>
<span class="line"><span>        ds.setUsername(userName);</span></span>
<span class="line"><span>        ds.setPassword(password);</span></span>
<span class="line"><span>        return ds;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>MyBatisConfig <ul><li>定义 SqlSessionFactoryBean</li><li>定义映射配置</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Bean</span></span>
<span class="line"><span>public SqlSessionFactoryBean getSqlSessionFactoryBean(DataSource dataSource) {</span></span>
<span class="line"><span>    SqlSessionFactoryBean ssfb = new SqlSessionFactoryBean();</span></span>
<span class="line"><span>    ssfb.setTypeAliasesPackage(&quot;com.itheima.domain&quot;);</span></span>
<span class="line"><span>    ssfb.setDataSource(dataSource);</span></span>
<span class="line"><span>    return ssfb;</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Bean</span></span>
<span class="line"><span>public MapperScannerConfigurer getMapperScannerConfigurer() {</span></span>
<span class="line"><span>    MapperScannerConfigurer msc = new MapperScannerConfigurer();</span></span>
<span class="line"><span>    msc.setBasePackage(&quot;com.itheima.dao&quot;);</span></span>
<span class="line"><span>    return msc;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_3-2-2-springboot-整合-mybatis" tabindex="-1">3.2.2 SpringBoot 整合 MyBatis <a class="header-anchor" href="#_3-2-2-springboot-整合-mybatis" aria-label="Permalink to &quot;3.2.2 SpringBoot 整合 MyBatis&quot;">​</a></h4><ul><li>SpringBoot 整合 Spring（不存在）</li><li>SpringBoot 整合 SpringMVC（不存在）</li><li>SpringBoot 整合 MyBatis（主要）</li></ul><h5 id="_1️⃣-创建新模块-选择-spring-初始化-并配置模块相关基础信息" tabindex="-1">1️⃣ 创建新模块，选择 Spring 初始化，并配置模块相关基础信息 <a class="header-anchor" href="#_1️⃣-创建新模块-选择-spring-初始化-并配置模块相关基础信息" aria-label="Permalink to &quot;1️⃣ 创建新模块，选择 Spring 初始化，并配置模块相关基础信息&quot;">​</a></h5><p><img src="`+L+'" alt="image-20210811201314649"></p><h5 id="_2️⃣-选择当前模块需要使用的技术集-mybatis、mysql" tabindex="-1">2️⃣ 选择当前模块需要使用的技术集（MyBatis、MySQL） <a class="header-anchor" href="#_2️⃣-选择当前模块需要使用的技术集-mybatis、mysql" aria-label="Permalink to &quot;2️⃣ 选择当前模块需要使用的技术集（MyBatis、MySQL）&quot;">​</a></h5><p><img src="'+U+`" alt="image-20210811201328652"></p><p>也可以在 pom 中加载配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>      &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>      &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>      &lt;version&gt;2.2.0&lt;/version&gt;</span></span>
<span class="line"><span>   &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   &lt;dependency&gt;</span></span>
<span class="line"><span>      &lt;groupId&gt;mysql&lt;/groupId&gt;</span></span>
<span class="line"><span>      &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;</span></span>
<span class="line"><span>      &lt;scope&gt;runtime&lt;/scope&gt;</span></span>
<span class="line"><span>   &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   &lt;dependency&gt;</span></span>
<span class="line"><span>      &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span>      &lt;artifactId&gt;druid&lt;/artifactId&gt;</span></span>
<span class="line"><span>      &lt;version&gt;1.1.16&lt;/version&gt;</span></span>
<span class="line"><span>   &lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;/dependencies&gt;</span></span></code></pre></div><h5 id="_3️⃣-设置数据源参数" tabindex="-1">3️⃣ 设置数据源参数 <a class="header-anchor" href="#_3️⃣-设置数据源参数" aria-label="Permalink to &quot;3️⃣ 设置数据源参数&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>  datasource:</span></span>
<span class="line"><span>    driver-class-name: com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span>    url: jdbc:mysql://localhost:3306/ssm_db?serverTimezone=UTC</span></span>
<span class="line"><span>    username: root</span></span>
<span class="line"><span>    password: root</span></span>
<span class="line"><span>    type: com.alibaba.druid.pool.DruidDataSource</span></span></code></pre></div><p>注意事项：</p><ol><li>SpringBoot 版本低于 2.4.3(不含)，Mysql 驱动版本大于 8.0 时，需要在 url 连接串中配置时区，或在 MySQL 数据库端配置时区解决此问题</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>jdbc:mysql://localhost:3306/ssm_db?serverTimezone=UTC</span></span></code></pre></div><h5 id="_4️⃣-定义数据层接口与映射配置-❤️" tabindex="-1">4️⃣ 定义数据层接口与映射配置 ❤️ <a class="header-anchor" href="#_4️⃣-定义数据层接口与映射配置-❤️" aria-label="Permalink to &quot;4️⃣ 定义数据层接口与映射配置 ❤️&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Mapper</span></span>
<span class="line"><span>public interface UserDao {</span></span>
<span class="line"><span>    @Select(&quot;select * from tbl_book where id=#{id}&quot;)</span></span>
<span class="line"><span>    Book getById(Integer id);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_5️⃣-测试类中注入-dao-接口-测试功能" tabindex="-1">5️⃣ 测试类中注入 dao 接口，测试功能 <a class="header-anchor" href="#_5️⃣-测试类中注入-dao-接口-测试功能" aria-label="Permalink to &quot;5️⃣ 测试类中注入 dao 接口，测试功能&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@SpringBootTest</span></span>
<span class="line"><span>class Springboot08MybatisApplicationTests {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private BookDao bookDao;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testGetById() {</span></span>
<span class="line"><span>        Book book = bookDao.getById(1);</span></span>
<span class="line"><span>        System.out.println(book);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_3-2-3-案例-springboot-实现-ssm-整合" tabindex="-1">3.2.3 案例-SpringBoot 实现 ssm 整合 <a class="header-anchor" href="#_3-2-3-案例-springboot-实现-ssm-整合" aria-label="Permalink to &quot;3.2.3 案例-SpringBoot 实现 ssm 整合&quot;">​</a></h4><h5 id="_1️⃣-创建-springboot-工程-添加-druid-依赖" tabindex="-1">1️⃣ <strong>创建 SpringBoot 工程，添加 druid 依赖</strong> <a class="header-anchor" href="#_1️⃣-创建-springboot-工程-添加-druid-依赖" aria-label="Permalink to &quot;1️⃣ **创建 SpringBoot 工程，添加 druid 依赖**&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;!-- todo 1 添加druid连接池依赖--&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;druid&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;1.2.6&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><h5 id="_2️⃣-复制-springmvc-11-page-工程各种资源-主-java-类、页面、测试类" tabindex="-1">2️⃣ <strong>复制 springmvc_11_page 工程各种资源(主 java 类、页面、测试类)</strong> <a class="header-anchor" href="#_2️⃣-复制-springmvc-11-page-工程各种资源-主-java-类、页面、测试类" aria-label="Permalink to &quot;2️⃣ **复制 springmvc\\_11\\_page 工程各种资源(主 java 类、页面、测试类)**&quot;">​</a></h5><p><img src="`+O+`" alt=""></p><blockquote><p>注意：webapp中的静态资源拷贝到resource的static文件夹中</p></blockquote><h5 id="_3️⃣-删除-config-包中的所有配置-在-bookdao-接口上加-mapper-注解" tabindex="-1">3️⃣ <strong>删除 config 包中的所有配置，在 BookDao 接口上加@Mapper 注解</strong> <a class="header-anchor" href="#_3️⃣-删除-config-包中的所有配置-在-bookdao-接口上加-mapper-注解" aria-label="Permalink to &quot;3️⃣ **删除 config 包中的所有配置，在 BookDao 接口上加@Mapper 注解**&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//todo 3 在BookDao接口上加@Mapper注解，让SpringBoot给接口创建代理对象</span></span>
<span class="line"><span>@Mapper</span></span>
<span class="line"><span>public interface BookDao {</span></span>
<span class="line"><span>    //...</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_4️⃣-将-application-properties-修改成-application-yml-配置端口号和连接参数" tabindex="-1">4️⃣ <strong>将 application.properties 修改成 application.yml，配置端口号和连接参数</strong> <a class="header-anchor" href="#_4️⃣-将-application-properties-修改成-application-yml-配置端口号和连接参数" aria-label="Permalink to &quot;4️⃣ **将 application.properties 修改成 application.yml，配置端口号和连接参数**&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>server:</span></span>
<span class="line"><span>  port: 80</span></span>
<span class="line"><span># todo 4 配置数据库连接参数</span></span>
<span class="line"><span>spring:</span></span>
<span class="line"><span>  datasource:</span></span>
<span class="line"><span>    driver-class-name: com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span>    url: jdbc:mysql://localhost:3306/ssm_db</span></span>
<span class="line"><span>    username: root</span></span>
<span class="line"><span>    password: root</span></span>
<span class="line"><span>    type: com.alibaba.druid.pool.DruidDataSource</span></span></code></pre></div><h5 id="_5️⃣-修改-bookservicetest-配置类-进行配置" tabindex="-1">5️⃣ <strong>修改 BookServiceTest 配置类，进行配置</strong> <a class="header-anchor" href="#_5️⃣-修改-bookservicetest-配置类-进行配置" aria-label="Permalink to &quot;5️⃣ **修改 BookServiceTest 配置类，进行配置**&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// todo 5 修改单元测试类，添加@SpringBootTest主键，修复@Test注解导包</span></span>
<span class="line"><span>@SpringBootTest</span></span>
<span class="line"><span>public class BookServiceTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private BookService bookService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testGetById(){</span></span>
<span class="line"><span>        Book book = bookService.getById(2); //传递参数1会抛出异常</span></span>
<span class="line"><span>        System.out.println(book);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testGetAll(){</span></span>
<span class="line"><span>        List&lt;Book&gt; all = bookService.getAll();</span></span>
<span class="line"><span>        System.out.println(all);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_6️⃣-在-static-目录中提供-index-html-页面-跳转到-pages-books-html" tabindex="-1">6️⃣ <strong>在 static 目录中提供 index.html 页面，跳转到&quot;pages/books.html&quot;</strong> <a class="header-anchor" href="#_6️⃣-在-static-目录中提供-index-html-页面-跳转到-pages-books-html" aria-label="Permalink to &quot;6️⃣ **在 static 目录中提供 index.html 页面，跳转到&quot;pages/books.html&quot;**&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  location.href = &quot;pages/books.html&quot;;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p><strong>最后：运行引导类即可访问</strong></p>`,236),N=[E];function R(F,X,G,K,Q,Y){return n(),s("div",null,N)}const H=a($,[["render",R]]);export{W as __pageData,H as default};
