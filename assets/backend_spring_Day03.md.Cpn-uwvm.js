import{_ as s,c as n,o as p,a4 as l}from"./chunks/framework.K9vKjHgL.js";const e="/docs/assets/image-20210730144903209.DPSmKwTG.png",i="/docs/assets/image-20220513203556476.Cf1zcAMm.png",t="/docs/assets/image-20210730150138448.xZHeAumi.png",o="/docs/assets/image-20210730154740528.117TjTx6.png",c="/docs/assets/image-20210730151347354.DD6CjFe0.png",r="/docs/assets/image-20210730152631741.CT7wwYRD.png",u="/docs/assets/image-20220513210229992.nCTF6cxN.png",d="/docs/assets/image-20220415225440393.CL6cvCGR.png",h="/docs/assets/image-20220416113412950.ByC_UZEt.png",g="/docs/assets/image-20220415230440122.BBzUUHov.png",a="/docs/assets/image-20210730164219555.B88HA7fg.png",b="/docs/assets/image-20210801190820853.DEPibtoF.png",m="/docs/assets/image-20210801192453227.D5nHJ3Xo.png",v="/docs/assets/image-20210802151553053.M6yD1kk6.png",q="/docs/assets/image-20220416003934031.jFTk41Gh.png",f="/docs/assets/image-20210802153216460.CH8h0pyG.png",k="/docs/assets/image-20210802153014296.DdS1s94H.png",w=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"backend/spring/Day03.md","filePath":"backend/spring/Day03.md"}'),P={name:"backend/spring/Day03.md"},S=l('<h2 id="_1-aop" tabindex="-1">1. AOP <a class="header-anchor" href="#_1-aop" aria-label="Permalink to &quot;1\\. AOP&quot;">​</a></h2><h3 id="_1-1-aop-简介【理解】" tabindex="-1">1.1 AOP 简介【理解】 <a class="header-anchor" href="#_1-1-aop-简介【理解】" aria-label="Permalink to &quot;1.1 AOP 简介【理解】&quot;">​</a></h3><p>15 分钟</p><h4 id="_1-1-1「aop-简介」核心问题-答案" tabindex="-1">1.1.1「AOP 简介」核心问题&amp;答案 <a class="header-anchor" href="#_1-1-1「aop-简介」核心问题-答案" aria-label="Permalink to &quot;1.1.1「AOP 简介」核心问题&amp;答案&quot;">​</a></h4><p>AOP 的作用是什么？</p><p>点击查看作用</p><ul><li><p>AOP(Aspect Oriented Programming)面向切面编程，一种编程范式，指导开发者如何组织程序结构</p></li><li><p>OOP(Object Oriented Programming)面向对象编程----<strong>定义类，定义方法，开发功能</strong></p></li><li><p>作用：在<strong>不惊动原始设计</strong>的基础上为其进行<strong>功能增强</strong>。 简单的说就是在不改变方法源代码的基础上对方法进行功能增强。</p></li><li><p>Spring 理念：无入侵式/无侵入式增强</p></li></ul><p>AOP 核心概念有哪些？</p><p>点击查看核心概念</p><ul><li>连接点（JoinPoint）：正在执行的方法，例如：update()、delete()、select()等都是连接点。</li><li>切入点（Pointcut）：进行功能增强了的方法，例如:update()、delete()方法，select()方法没有被增强所以不是切入点，但是是连接点。 <ul><li>在 SpringAOP 中，一个切入点可以只描述一个具体方法，也可以匹配多个方法 <ul><li><strong>一个具体方法</strong>：com.itheima.dao 包下的 BookDao 接口中的无形参无返回值的 save 方法</li><li><strong>匹配多个方法</strong>：所有的 save 方法，所有的 get 开头的方法，所有以 Dao 结尾的接口中的任意方法，所有带有一个参数的方法</li></ul></li></ul></li><li>通知（Advice）：在切入点前后执行的操作，也就是增强的共性功能 <ul><li>在 SpringAOP 中，功能最终以方法的形式呈现</li></ul></li><li>通知类：通知方法所在的类叫做通知类</li><li>**切面（Aspect）：**描述通知(<strong>共性功能</strong>)与切入点（<strong>需要增强的方法</strong>）的对应关系，也就是哪些通知方法对应哪些切入点方法。<img src="'+e+'" alt=""></li></ul><p>提问：查看下列图片，回答问题</p><p>点击查看图片</p><ul><li><p>下列哪个是目标对象，哪个是代理对象？</p><p><img src="'+i+`" alt="image-20220513203556476"></p><p>image-20220513203556476</p></li></ul><h3 id="_1-2-aop-入门案例【重点】" tabindex="-1">1.2 AOP 入门案例【重点】 <a class="header-anchor" href="#_1-2-aop-入门案例【重点】" aria-label="Permalink to &quot;1.2 AOP 入门案例【重点】&quot;">​</a></h3><p>12 分钟</p><h4 id="_1-2-1-「入门案例」核心问题-答案" tabindex="-1">1.2.1 「入门案例」核心问题&amp;答案 <a class="header-anchor" href="#_1-2-1-「入门案例」核心问题-答案" aria-label="Permalink to &quot;1.2.1 「入门案例」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>在通知方法中如何定义切入点表达式？</li><li>如何配置切面？</li><li>在配置类上如何开启 AOP 注解功能？</li></ol><h4 id="_1-2-2-aop-入门案例思路分析" tabindex="-1">1.2.2 AOP 入门案例思路分析 <a class="header-anchor" href="#_1-2-2-aop-入门案例思路分析" aria-label="Permalink to &quot;1.2.2 AOP 入门案例思路分析&quot;">​</a></h4><p>点击查看思路分析</p><ul><li>案例设定：测定接口执行效率</li><li>简化设定：在接口执行前输出当前系统时间</li><li>开发模式：XML or <strong>注解</strong></li><li>思路分析： <ol><li>导入坐标（pom.xml）</li><li>制作连接点方法（原始操作，dao 接口与实现类）</li><li>制作共性功能（通知类与通知）</li><li>定义切入点</li><li>绑定切入点与通知关系（切面）</li></ol></li></ul><h4 id="_1-2-3-aop-入门案例实现" tabindex="-1">1.2.3 AOP 入门案例实现 <a class="header-anchor" href="#_1-2-3-aop-入门案例实现" aria-label="Permalink to &quot;1.2.3 AOP 入门案例实现&quot;">​</a></h4><p>步鄹</p><h5 id="【第一步】导入-aop-相关坐标" tabindex="-1">【第一步】导入 Aop 相关坐标 <a class="header-anchor" href="#【第一步】导入-aop-相关坐标" aria-label="Permalink to &quot;【第一步】导入 Aop 相关坐标&quot;">​</a></h5><h5 id="【第二步】定义-dao-接口与实现类" tabindex="-1">【第二步】定义 dao 接口与实现类 <a class="header-anchor" href="#【第二步】定义-dao-接口与实现类" aria-label="Permalink to &quot;【第二步】定义 dao 接口与实现类&quot;">​</a></h5><h5 id="【第三步】定义通知类-制作通知方法" tabindex="-1">【第三步】定义通知类，制作通知方法 <a class="header-anchor" href="#【第三步】定义通知类-制作通知方法" aria-label="Permalink to &quot;【第三步】定义通知类，制作通知方法&quot;">​</a></h5><h5 id="【第四步】定义切入点表达式、配置切面-绑定切入点与通知关系" tabindex="-1">【第四步】定义切入点表达式、配置切面(绑定切入点与通知关系) <a class="header-anchor" href="#【第四步】定义切入点表达式、配置切面-绑定切入点与通知关系" aria-label="Permalink to &quot;【第四步】定义切入点表达式、配置切面(绑定切入点与通知关系)&quot;">​</a></h5><h5 id="【第五步】在配置类中进行-spring-注解包扫描和开启-aop-功能" tabindex="-1">【第五步】在配置类中进行 Spring 注解包扫描和开启 AOP 功能 <a class="header-anchor" href="#【第五步】在配置类中进行-spring-注解包扫描和开启-aop-功能" aria-label="Permalink to &quot;【第五步】在配置类中进行 Spring 注解包扫描和开启 AOP 功能&quot;">​</a></h5><h5 id="【第一步】导入-aop-相关坐标-1" tabindex="-1">【第一步】导入 Aop 相关坐标 <a class="header-anchor" href="#【第一步】导入-aop-相关坐标-1" aria-label="Permalink to &quot;【第一步】导入 Aop 相关坐标&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;dependencies&gt;</span></span>
<span class="line"><span>    &lt;!--spring核心依赖，会将spring-aop传递进来--&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-context&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;5.2.10.RELEASE&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;!--切入点表达式依赖，目的是找到切入点方法，也就是找到要增强的方法--&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.aspectj&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;aspectjweaver&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;1.9.4&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;/dependencies&gt;</span></span></code></pre></div><p><img src="`+t+`" alt="image-20210730150138448"></p><h5 id="【第二步】定义-dao-接口与实现类-1" tabindex="-1">【第二步】定义 dao 接口与实现类 <a class="header-anchor" href="#【第二步】定义-dao-接口与实现类-1" aria-label="Permalink to &quot;【第二步】定义 dao 接口与实现类&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 定义接口</span></span>
<span class="line"><span>public interface BookDao {</span></span>
<span class="line"><span>    public void save();</span></span>
<span class="line"><span>    public void update();</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 定义实现类,添加注解@Repository(持久层)</span></span>
<span class="line"><span>@Repository</span></span>
<span class="line"><span>public class BookDaoImpl implements BookDao {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void save() {</span></span>
<span class="line"><span>        System.out.println(System.currentTimeMillis());</span></span>
<span class="line"><span>        System.out.println(&quot;book dao save ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void update(){</span></span>
<span class="line"><span>        System.out.println(&quot;book dao update ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="【第三步】定义通知类-制作通知方法-1" tabindex="-1">【第三步】定义通知类，制作通知方法 <a class="header-anchor" href="#【第三步】定义通知类-制作通知方法-1" aria-label="Permalink to &quot;【第三步】定义通知类，制作通知方法&quot;">​</a></h5><blockquote><p>建立 aop 包，在包中定义 MyAdvice 通知类</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//通知类必须配置成Spring管理的bean</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class MyAdvice {</span></span>
<span class="line"><span>    public void method(){</span></span>
<span class="line"><span>        System.out.println(System.currentTimeMillis());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="【第四步】定义切入点表达式、配置切面-绑定切入点与通知关系-1" tabindex="-1">【第四步】定义切入点表达式、配置切面(绑定切入点与通知关系) <a class="header-anchor" href="#【第四步】定义切入点表达式、配置切面-绑定切入点与通知关系-1" aria-label="Permalink to &quot;【第四步】定义切入点表达式、配置切面(绑定切入点与通知关系)&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//通知类必须配置成Spring管理的bean</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>//设置当前类为切面类类</span></span>
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>public class MyAdvice {</span></span>
<span class="line"><span>    //设置切入点，@Pointcut注解要求配置在方法上方</span></span>
<span class="line"><span>    @Pointcut(&quot;execution(void com.itheima.dao.BookDao.update())&quot;)</span></span>
<span class="line"><span>    private void pt(){}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //设置在切入点pt()的前面运行当前操作(前置通知)</span></span>
<span class="line"><span>    @Before(&quot;pt()&quot;)</span></span>
<span class="line"><span>    public void method(){</span></span>
<span class="line"><span>        System.out.println(System.currentTimeMillis());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+o+`" alt="image-20210730154740528"></p><h5 id="【第五步】在配置类中进行-spring-注解包扫描和开启-aop-功能-1" tabindex="-1">【第五步】在配置类中进行 Spring 注解包扫描和开启 AOP 功能 <a class="header-anchor" href="#【第五步】在配置类中进行-spring-注解包扫描和开启-aop-功能-1" aria-label="Permalink to &quot;【第五步】在配置类中进行 Spring 注解包扫描和开启 AOP 功能&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ComponentScan(&quot;com.itheima&quot;)</span></span>
<span class="line"><span>//开启注解开发AOP功能</span></span>
<span class="line"><span>@EnableAspectJAutoProxy</span></span>
<span class="line"><span>public class SpringConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="测试类和运行结果" tabindex="-1">测试类和运行结果 <a class="header-anchor" href="#测试类和运行结果" aria-label="Permalink to &quot;测试类和运行结果&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class App {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        ApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);</span></span>
<span class="line"><span>        BookDao bookDao = ctx.getBean(BookDao.class);</span></span>
<span class="line"><span>        bookDao.update();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+c+`" alt="image-20210730151347354"></p><h3 id="_1-3-aop-入门案例-练习-✏️" tabindex="-1">1.3 AOP 入门案例 练习 ✏️ <a class="header-anchor" href="#_1-3-aop-入门案例-练习-✏️" aria-label="Permalink to &quot;1.3 AOP 入门案例 练习 ✏️&quot;">​</a></h3><p>10 分钟</p><h4 id="_1-3-0「aop-入门案例-」目的" tabindex="-1">1.3.0「AOP 入门案例 」目的 <a class="header-anchor" href="#_1-3-0「aop-入门案例-」目的" aria-label="Permalink to &quot;1.3.0「AOP 入门案例 」目的&quot;">​</a></h4><blockquote><p>熟悉接入点、切入点、切面描述、通知方法、通知类的定义和使用</p></blockquote><h4 id="_1-3-1「aop-入门案例-」需求-效果" tabindex="-1">1.3.1「AOP 入门案例 」需求&amp;效果 <a class="header-anchor" href="#_1-3-1「aop-入门案例-」需求-效果" aria-label="Permalink to &quot;1.3.1「AOP 入门案例 」需求&amp;效果&quot;">​</a></h4><blockquote><p>测定接口执行效率</p></blockquote><h4 id="_1-3-2「aop-入门案例-」步鄹" tabindex="-1">1.3.2「AOP 入门案例 」步鄹 <a class="header-anchor" href="#_1-3-2「aop-入门案例-」步鄹" aria-label="Permalink to &quot;1.3.2「AOP 入门案例 」步鄹&quot;">​</a></h4><ul><li>在飞秋中下载 spring_18_aop_quickstarttest 压缩包，放到你的工程中</li><li>导入到项目中</li><li>完成通知类中的代码</li><li>注意：导工程后，一定要做的三个步鄹 <ol><li>检查 Maven 仓库</li><li>检查 jdk-1.8</li><li>检查编译器版本-1.8</li></ol></li></ul><h3 id="_1-4-aop-工作流程-🍐" tabindex="-1">1.4 AOP 工作流程 🍐 <a class="header-anchor" href="#_1-4-aop-工作流程-🍐" aria-label="Permalink to &quot;1.4 AOP 工作流程 🍐&quot;">​</a></h3><p>7 分钟</p><h3 id="_1-4-1-「aop-工作流程」核心问题-答案" tabindex="-1">1.4.1 「AOP 工作流程」核心问题&amp;答案 <a class="header-anchor" href="#_1-4-1-「aop-工作流程」核心问题-答案" aria-label="Permalink to &quot;1.4.1 「AOP 工作流程」核心问题&amp;答案&quot;">​</a></h3><p>问题</p><ol><li>什么是目标对象？什么是代理对象？</li></ol><p>点击查看</p><ul><li>目标对象（Target） ：被代理的对象，也叫原始对象，该对象中的方法没有任何功能增强。</li><li>代理对象（Proxy） ：代理后生成的对象，由 Spring 帮我们创建代理对象。</li></ul><h4 id="_1-4-2-aop-工作流程" tabindex="-1">1.4.2 AOP 工作流程 <a class="header-anchor" href="#_1-4-2-aop-工作流程" aria-label="Permalink to &quot;1.4.2 AOP 工作流程&quot;">​</a></h4><p>点击查看代码</p><ol><li>Spring 容器启动</li><li>读取所有切面配置中的切入点</li><li>初始化 bean，判定 bean 对应的类中的方法是否匹配到任意切入点 <ul><li>匹配失败，创建原始对象</li><li>匹配成功，创建原始对象（目标对象）的代理对象</li></ul></li><li>获取 bean 执行方法 <ul><li>获取的 bean 是原始对象时，调用方法并执行，完成操作</li><li>获取的 bean 是代理对象时，根据代理对象的运行模式运行原始方法与增强的内容，完成操作</li></ul></li></ol><h4 id="_1-4-3-在测试类中验证代理对象" tabindex="-1">1.4.3 在测试类中验证代理对象 <a class="header-anchor" href="#_1-4-3-在测试类中验证代理对象" aria-label="Permalink to &quot;1.4.3 在测试类中验证代理对象&quot;">​</a></h4><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class App {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        ApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);</span></span>
<span class="line"><span>        BookDao bookDao = ctx.getBean(BookDao.class);</span></span>
<span class="line"><span>        bookDao.update();</span></span>
<span class="line"><span>//打印对象的类名</span></span>
<span class="line"><span>        System.out.println(bookDao.getClass());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+r+'" alt="image-20210730152631741"></p><p>提问：查看下列图片，加深代理对象和目标对象的理解</p><p>点击查看图片</p><p><img src="'+u+'" alt="image-20220513210229992"></p><h3 id="_1-5-aop-切入点表达式-🍐" tabindex="-1">1.5 AOP 切入点表达式 🍐 <a class="header-anchor" href="#_1-5-aop-切入点表达式-🍐" aria-label="Permalink to &quot;1.5 AOP 切入点表达式 🍐&quot;">​</a></h3><p>19 分钟</p><h3 id="_1-5-1-「aop-切入点表达式」核心问题-答案" tabindex="-1">1.5.1 「AOP 切入点表达式」核心问题&amp;答案 <a class="header-anchor" href="#_1-5-1-「aop-切入点表达式」核心问题-答案" aria-label="Permalink to &quot;1.5.1 「AOP 切入点表达式」核心问题&amp;答案&quot;">​</a></h3><p>问题</p><ol><li>在切入点表达式中如何简化包名和参数类型书写？</li></ol><p>点击查看代码</p><ul><li>使用通配符</li></ul><h4 id="_1-5-2-语法格式" tabindex="-1">1.5.2 语法格式 <a class="header-anchor" href="#_1-5-2-语法格式" aria-label="Permalink to &quot;1.5.2 语法格式&quot;">​</a></h4><ul><li><p>切入点：要进行增强的方法</p></li><li><p>切入点表达式：要进行增强的方法的描述方式</p></li></ul><p>点击查看描述方式</p><ul><li>描述方式一：执行 com.itheima.dao 包下的 BookDao 接口中的无参数 update 方法</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>execution(void com.itheima.dao.BookDao.update())</span></span></code></pre></div><ul><li>描述方式二：执行 com.itheima.dao.impl 包下的 BookDaoImpl 类中的无参数 update 方法</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>execution(void com.itheima.dao.impl.BookDaoImpl.update())</span></span></code></pre></div><ul><li>切入点表达式标准格式：动作关键字(访问修饰符 返回值 包名.类/接口名.方法名(参数) 异常名）</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>execution(public User com.itheima.service.UserService.findById(int))</span></span></code></pre></div><ul><li>动作关键字：描述切入点的行为动作，例如 execution 表示执行到指定切入点</li><li>访问修饰符：public，private 等，可以省略</li><li>返回值：写返回值类型</li><li>包名：多级包使用点连接</li><li>类/接口名：</li><li>方法名：</li><li>参数：直接写参数的类型，多个类型用逗号隔开</li><li>异常名：方法定义中抛出指定异常，可以省略</li></ul><h4 id="_1-5-3-通配符" tabindex="-1">1.5.3 通配符 <a class="header-anchor" href="#_1-5-3-通配符" aria-label="Permalink to &quot;1.5.3 通配符&quot;">​</a></h4><blockquote><p>目的：可以使用通配符描述切入点，快速描述。</p></blockquote><p>点击查看描述方式</p><ul><li>*单个独立的任意符号，可以独立出现，也可以作为前缀或者后缀的匹配符出现</li></ul><blockquote><p>匹配 com.itheima 包下的任意包中的 UserService 类或接口中所有 find 开头的带有一个参数的方法</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>execution（public * com.itheima.*.UserService.find*(*))</span></span></code></pre></div><ul><li>.. ：多个连续的任意符号，可以独立出现，常用于简化包名与参数的书写</li></ul><blockquote><p>匹配 com 包下的任意包中的 UserService 类或接口中所有名称为 findById 的方法</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>execution（public User com..UserService.findById(..))</span></span></code></pre></div><ul><li>+：专用于匹配子类类型</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>execution(* *..*Service+.*(..))</span></span></code></pre></div><h4 id="_1-5-4-书写技巧" tabindex="-1">1.5.4 书写技巧 <a class="header-anchor" href="#_1-5-4-书写技巧" aria-label="Permalink to &quot;1.5.4 书写技巧&quot;">​</a></h4><p>点击查看书写技巧</p><p><img src="'+d+'" alt=""></p><p><strong>不要死记，不要死记，慢慢体会，慢慢体会</strong></p><ul><li><p>技巧说明：</p></li><li><p>从方法到返回值 <img src="'+h+'" alt="image-20220416113412950"></p></li><li><p>以后在开发过程中，命名一定要规范，方便写切入点表达式子</p><ol><li>如查询：以 find 开头或者 query 开头 ，如 queryxxx()</li><li>如获得单个，getxxx</li><li>如保存：saveXXX</li><li>如更新：updateXXX</li><li>如删除：deleteXXX</li></ol></li></ul><p>提问：查看下列图片，回答问题</p><p>点击查看图片</p><p><img src="'+g+`" alt="image-20220415230440122"></p><h3 id="_1-6-aop-通知类型" tabindex="-1">1.6 AOP 通知类型 <a class="header-anchor" href="#_1-6-aop-通知类型" aria-label="Permalink to &quot;1.6 AOP 通知类型&quot;">​</a></h3><p>19 分钟</p><h4 id="_1-6-1-「通知类型」核心问题-答案" tabindex="-1">1.6.1 「通知类型」核心问题&amp;答案 <a class="header-anchor" href="#_1-6-1-「通知类型」核心问题-答案" aria-label="Permalink to &quot;1.6.1 「通知类型」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>通知类型中哪种通知最重要,能实现其他类型的通知</li></ol><p>点击查看</p><ul><li><strong>环绕通知(重点)：</strong> 手动调用切入点方法并对其进行增强的通知方式。</li></ul><h4 id="_1-6-2-aop-通知分类" tabindex="-1">1.6.2 AOP 通知分类 <a class="header-anchor" href="#_1-6-2-aop-通知分类" aria-label="Permalink to &quot;1.6.2 AOP 通知分类&quot;">​</a></h4><p>点击查看通知分类</p><ul><li>AOP 通知描述了抽取的共性功能，根据共性功能抽取的位置不同，最终运行代码时要将其加入到合理的位置</li><li>AOP 通知共分为 5 种类型 <ul><li>前置通知：在切入点方法执行之前执行</li><li>后置通知：在切入点方法执行之后执行，无论切入点方法内部是否出现异常，后置通知都会执行。</li><li>**环绕通知(重点)：**手动调用切入点方法并对其进行增强的通知方式。 👈</li><li>返回后通知(了解)：在切入点方法执行之后执行，如果切入点方法内部出现异常将不会执行。</li><li>抛出异常后通知(了解)：在切入点方法执行之后执行，只有当切入点方法内部出现异常之后才执行。</li></ul></li></ul><h4 id="_1-6-3-aop-通知详解" tabindex="-1">1.6.3 AOP 通知详解 <a class="header-anchor" href="#_1-6-3-aop-通知详解" aria-label="Permalink to &quot;1.6.3 AOP 通知详解&quot;">​</a></h4><h5 id="_1️⃣-前置通知-🚀" tabindex="-1">1️⃣ 前置通知 🚀 <a class="header-anchor" href="#_1️⃣-前置通知-🚀" aria-label="Permalink to &quot;1️⃣ 前置通知 🚀&quot;">​</a></h5><ul><li>名称：@Before （了解）</li><li>类型：<strong>方法注解</strong></li><li>位置：通知方法定义上方</li><li>作用：设置当前通知方法与切入点之间的绑定关系，当前通知方法在原始切入点方法前运行</li><li>范例：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Before(&quot;pt()&quot;)</span></span>
<span class="line"><span>public void before() {</span></span>
<span class="line"><span>    System.out.println(&quot;before advice ...&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_2️⃣-后置通知-🚀" tabindex="-1">2️⃣ 后置通知 🚀 <a class="header-anchor" href="#_2️⃣-后置通知-🚀" aria-label="Permalink to &quot;2️⃣ 后置通知 🚀&quot;">​</a></h5><ul><li>名称：@After （了解）</li><li>类型：方法注解</li><li>位置：通知方法定义上方</li><li>作用：设置当前通知方法与切入点之间的绑定关系，当前通知方法在原始切入点方法后运行</li><li>范例：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@After(&quot;pt()&quot;)</span></span>
<span class="line"><span>public void after() {</span></span>
<span class="line"><span>    System.out.println(&quot;after advice ...&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_3️⃣-返回后通知-🚀" tabindex="-1">3️⃣ 返回后通知 🚀 <a class="header-anchor" href="#_3️⃣-返回后通知-🚀" aria-label="Permalink to &quot;3️⃣ 返回后通知 🚀&quot;">​</a></h5><ul><li>名称：@AfterReturning（了解）</li><li>类型：<strong>方法注解</strong></li><li>位置：通知方法定义上方</li><li>作用：设置当前通知方法与切入点之间的绑定关系，当前通知方法在原始切入点方法正常执行完毕后运行</li><li>范例：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@AfterReturning(&quot;pt()&quot;)</span></span>
<span class="line"><span>public void afterReturning() {</span></span>
<span class="line"><span>    System.out.println(&quot;afterReturning advice ...&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_4️⃣-抛出异常后通知-🚀" tabindex="-1">4️⃣ 抛出异常后通知 🚀 <a class="header-anchor" href="#_4️⃣-抛出异常后通知-🚀" aria-label="Permalink to &quot;4️⃣ 抛出异常后通知 🚀&quot;">​</a></h5><ul><li>名称：@AfterThrowing（了解）</li><li>类型：<strong>方法注解</strong></li><li>位置：通知方法定义上方</li><li>作用：设置当前通知方法与切入点之间的绑定关系，当前通知方法在原始切入点方法运行抛出异常后执行</li><li>范例：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@AfterThrowing(&quot;pt()&quot;)</span></span>
<span class="line"><span>public void afterThrowing() {</span></span>
<span class="line"><span>    System.out.println(&quot;afterThrowing advice ...&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_5️⃣-环绕通知【重点】-❤️-👈" tabindex="-1">5️⃣ 环绕通知【重点】 ❤️ 👈 <a class="header-anchor" href="#_5️⃣-环绕通知【重点】-❤️-👈" aria-label="Permalink to &quot;5️⃣ 环绕通知【重点】 ❤️ 👈&quot;">​</a></h5><ul><li>名称：@Around（重点，常用）</li><li>类型：<strong>方法注解</strong></li><li>位置：通知方法定义上方</li><li>作用：设置当前通知方法与切入点之间的绑定关系，当前通知方法在原始切入点方法前后运行</li><li>范例：：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Around(&quot;pt()&quot;)</span></span>
<span class="line"><span>public Object around(ProceedingJoinPoint pjp) throws Throwable {</span></span>
<span class="line"><span>    System.out.println(&quot;around before advice ...&quot;);</span></span>
<span class="line"><span>    Object ret = pjp.proceed();</span></span>
<span class="line"><span>    System.out.println(&quot;around after advice ...&quot;);</span></span>
<span class="line"><span>    return ret;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>环绕通知注意事项</strong></p><ol><li>环绕通知方法形参必须是 ProceedingJoinPoint，表示正在执行的连接点，使用该对象的 proceed()方法表示对原始对象方法进行调用，返回值为原始对象方法的返回值。 👈</li><li>环绕通知方法的返回值建议写成 Object 类型，用于将原始对象方法的返回值进行返回，哪里使用代理对象就返回到哪里。</li></ol><h2 id="_2-aop-案例" tabindex="-1">2. AOP 案例 <a class="header-anchor" href="#_2-aop-案例" aria-label="Permalink to &quot;2\\. AOP 案例&quot;">​</a></h2><h3 id="_2-1-案例-测量业务层接口万次执行效率" tabindex="-1">2.1 案例-测量业务层接口万次执行效率 <a class="header-anchor" href="#_2-1-案例-测量业务层接口万次执行效率" aria-label="Permalink to &quot;2.1 案例-测量业务层接口万次执行效率&quot;">​</a></h3><p>16 分钟</p><h4 id="_2-1-1-需求和分析" tabindex="-1">2.1.1 需求和分析 <a class="header-anchor" href="#_2-1-1-需求和分析" aria-label="Permalink to &quot;2.1.1 需求和分析&quot;">​</a></h4><p>提示</p><ul><li><p>需求：任意业务层接口执行均可显示其执行效率（执行时长）</p></li><li><p>分析：</p><p>1️⃣ 业务功能：业务层接口执行前后分别记录时间，求差值得到执行效率 👈</p><p>2️⃣ 通知类型选择前后均可以增强的类型——环绕通知 👈</p></li></ul><p><a href="Day03/image-2.png"></a></p><h4 id="_2-1-2-代码实现" tabindex="-1">2.1.2 代码实现 <a class="header-anchor" href="#_2-1-2-代码实现" aria-label="Permalink to &quot;2.1.2 代码实现&quot;">​</a></h4><p>相关信息</p><h5 id="【前置工作】环境准备" tabindex="-1">【前置工作】环境准备 <a class="header-anchor" href="#【前置工作】环境准备" aria-label="Permalink to &quot;【前置工作】环境准备&quot;">​</a></h5><h5 id="【第一步】编写通知类" tabindex="-1">【第一步】编写通知类 <a class="header-anchor" href="#【第一步】编写通知类" aria-label="Permalink to &quot;【第一步】编写通知类&quot;">​</a></h5><h5 id="【第二步】在-springconfig-配置类上开启-aop-注解功能" tabindex="-1">【第二步】在 SpringConfig 配置类上开启 AOP 注解功能 <a class="header-anchor" href="#【第二步】在-springconfig-配置类上开启-aop-注解功能" aria-label="Permalink to &quot;【第二步】在 SpringConfig 配置类上开启 AOP 注解功能&quot;">​</a></h5><h5 id="【第三步】运行测试类-查看结果" tabindex="-1">【第三步】运行测试类，查看结果 <a class="header-anchor" href="#【第三步】运行测试类-查看结果" aria-label="Permalink to &quot;【第三步】运行测试类，查看结果&quot;">​</a></h5><h5 id="【前置工作】环境准备-1" tabindex="-1">【前置工作】环境准备 <a class="header-anchor" href="#【前置工作】环境准备-1" aria-label="Permalink to &quot;【前置工作】环境准备&quot;">​</a></h5><ol><li>Spring 整合 mybatis 对 spring_db 数据库中的 Account 进行 CRUD 操作</li><li>Spring 整合 Junit 测试 CRUD 是否 OK。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RunWith(SpringJUnit4ClassRunner.class)</span></span>
<span class="line"><span>@ContextConfiguration(classes = SpringConfig.class)</span></span>
<span class="line"><span>public class AccountServiceTestCase {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private AccountService accountService;</span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testFindById(){</span></span>
<span class="line"><span>        Account ac = accountService.findById(2);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testFindAll(){</span></span>
<span class="line"><span>        List&lt;Account&gt; all = accountService.findAll();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="3"><li>在 pom.xml 中添加 aspectjweaver 切入点表达式依赖【不可重复导入】</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;!--切入点表达式依赖，目的是找到切入点方法，也就是找到要增强的方法--&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.aspectj&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;aspectjweaver&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;1.9.4&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><h5 id="【第一步】编写通知类-1" tabindex="-1">【第一步】编写通知类 <a class="header-anchor" href="#【第一步】编写通知类-1" aria-label="Permalink to &quot;【第一步】编写通知类&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//通知类必须配置成Spring管理的bean</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>//设置当前类为切面类类</span></span>
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>public class ProjectAdvice {</span></span>
<span class="line"><span>    //匹配业务层的所有方法</span></span>
<span class="line"><span>    @Pointcut(&quot;execution(* com.itheima.service.*Service.*(..))&quot;)</span></span>
<span class="line"><span>    private void servicePt(){}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //设置环绕通知，在原始操作的运行前后记录执行时间</span></span>
<span class="line"><span>    @Around(&quot;ProjectAdvice.servicePt()&quot;) //本类类名可以省略不写</span></span>
<span class="line"><span>    public void runSpeed(ProceedingJoinPoint pjp) throws Throwable {</span></span>
<span class="line"><span>        //获取执行的签名对象</span></span>
<span class="line"><span>        Signature signature = pjp.getSignature();</span></span>
<span class="line"><span>        //获取接口/类全限定名</span></span>
<span class="line"><span>        String className = signature.getDeclaringTypeName();</span></span>
<span class="line"><span>        //获取方法名</span></span>
<span class="line"><span>        String methodName = signature.getName();</span></span>
<span class="line"><span>        //记录开始时间</span></span>
<span class="line"><span>        long start = System.currentTimeMillis();</span></span>
<span class="line"><span>        //执行万次操作</span></span>
<span class="line"><span>        for (int i = 0; i &lt; 10000; i++) {</span></span>
<span class="line"><span>           pjp.proceed();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //记录结束时间</span></span>
<span class="line"><span>        long end = System.currentTimeMillis();</span></span>
<span class="line"><span>        //打印执行结果</span></span>
<span class="line"><span>        System.out.println(&quot;万次执行：&quot;+ className+&quot;.&quot;+methodName+&quot;----&gt;&quot; +(end-start) + &quot;ms&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="【第二步】在-springconfig-配置类上开启-aop-注解功能-1" tabindex="-1">【第二步】在 SpringConfig 配置类上开启 AOP 注解功能 <a class="header-anchor" href="#【第二步】在-springconfig-配置类上开启-aop-注解功能-1" aria-label="Permalink to &quot;【第二步】在 SpringConfig 配置类上开启 AOP 注解功能&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ComponentScan(&quot;com.itheima&quot;)</span></span>
<span class="line"><span>@PropertySource(&quot;classpath:jdbc.properties&quot;)</span></span>
<span class="line"><span>@Import({JdbcConfig.class,MybatisConfig.class})</span></span>
<span class="line"><span>@EnableAspectJAutoProxy //开启AOP注解功能</span></span>
<span class="line"><span>public class SpringConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="【第三步】运行测试类-查看结果-1" tabindex="-1">【第三步】运行测试类，查看结果 <a class="header-anchor" href="#【第三步】运行测试类-查看结果-1" aria-label="Permalink to &quot;【第三步】运行测试类，查看结果&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RunWith(SpringJUnit4ClassRunner.class)</span></span>
<span class="line"><span>@ContextConfiguration(classes = SpringConfig.class)</span></span>
<span class="line"><span>public class AccountServiceTestCase {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private AccountService accountService;</span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testFindById(){</span></span>
<span class="line"><span>        Account account = accountService.findById(2);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testFindAll(){</span></span>
<span class="line"><span>        List&lt;Account&gt; list = accountService.findAll();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+a+'" alt="image-20210730164219555"></p><h3 id="_2-2-测量业务层接口万次执行效率-✏️" tabindex="-1">2.2 测量业务层接口万次执行效率 ✏️ <a class="header-anchor" href="#_2-2-测量业务层接口万次执行效率-✏️" aria-label="Permalink to &quot;2.2 测量业务层接口万次执行效率 ✏️&quot;">​</a></h3><p>10 分钟</p><h4 id="_2-2-0「测量业务层接口万次执行效率-」目的" tabindex="-1">2.2.0「测量业务层接口万次执行效率 」目的 <a class="header-anchor" href="#_2-2-0「测量业务层接口万次执行效率-」目的" aria-label="Permalink to &quot;2.2.0「测量业务层接口万次执行效率 」目的&quot;">​</a></h4><blockquote><p>熟悉环绕通知</p></blockquote><h4 id="_2-2-1「测量业务层接口万次执行效率」需求-效果" tabindex="-1">2.2.1「测量业务层接口万次执行效率」需求&amp;效果 <a class="header-anchor" href="#_2-2-1「测量业务层接口万次执行效率」需求-效果" aria-label="Permalink to &quot;2.2.1「测量业务层接口万次执行效率」需求&amp;效果&quot;">​</a></h4><p><img src="'+a+`" alt="image-20210730164219555"></p><h4 id="_2-2-2「测量业务层接口万次执行效率」步鄹" tabindex="-1">2.2.2「测量业务层接口万次执行效率」步鄹 <a class="header-anchor" href="#_2-2-2「测量业务层接口万次执行效率」步鄹" aria-label="Permalink to &quot;2.2.2「测量业务层接口万次执行效率」步鄹&quot;">​</a></h4><p>说明</p><ul><li>在飞秋中下载 spring_21_case_interface_run_speedtest 压缩包，放到你的工程中</li><li>导入到项目中</li><li>完成通知类中的代码</li><li>启动类为 AccountServiceTestCase，类中有详细说明</li><li>注意：导工程后，一定要做的三个步鄹 <ol><li>检查 Maven 仓库</li><li>检查 jdk-1.8</li><li>检查编译器版本-1.8</li></ol></li></ul><p>点击查看练习步鄹说明</p><ul><li><p>需求 1：任意业务层接口执行均可显示其执行效率（执行时长）</p></li><li><p>练习目标：主要练习环绕通知形参调用（pjp.proceed()) 以及拦截的类和方法名的获取</p><ol><li>执行 testFindById 方法，测试执行 1 次耗时多少</li><li>执行 testFindAll 方法，测试执行 10000 次耗时多少</li></ol></li><li><p>步鄹：</p><ol><li><p>导入项目，检查 pom 依赖和 maven 仓库</p></li><li><p>修改数据库密码和数据库名字</p></li><li><p>检查数据库中是否有对应的表格和数据量</p></li><li><p>配置类 SpringConfig 中检查是否有开启 AOP 注解开发 @EnableAspectJAutoProxy</p></li><li><p>在 AOP 类中 ProjectAdvice 中检查 通知方法和环绕通知注解 @Around</p></li><li><p>检查切入点表达式是否匹配 测试类中执行的方法</p><ul><li>execution(* com.itheima.service.*Service.*(..)</li></ul></li></ol></li><li><p>需求 2：在上一个需求上，完成打印输入参数</p><ul><li>如：accountService.findById(2);这里查询了 id 为 2 的参数，在增强的方法中，输入参数 2</li><li>格式：执行：com.itheima.service.AccountService.findById 参数：[2]----&gt;465ms</li></ul></li><li><p>练习目标：主要练习环绕通知形参调用,获得原有方法输入的参数</p><ul><li>Object[] args = pjp.getArgs();</li></ul></li><li><p>如果你完成了上述第一个需求，恭喜你，你掌握了重点内容（3 分之一）环绕通知</p></li><li><p>如果你完成了上述的第二个需求，恭喜你，你准备掌握了重点内容（3 分之一）环绕通知获得参数</p></li></ul><h3 id="_2-3-aop-切入点数据获取" tabindex="-1">2.3 AOP 切入点数据获取 <a class="header-anchor" href="#_2-3-aop-切入点数据获取" aria-label="Permalink to &quot;2.3 AOP 切入点数据获取&quot;">​</a></h3><p>15 分钟</p><h3 id="_2-3-1-「切入点数据获取」核心问题-答案" tabindex="-1">2.3.1 「切入点数据获取」核心问题&amp;答案 <a class="header-anchor" href="#_2-3-1-「切入点数据获取」核心问题-答案" aria-label="Permalink to &quot;2.3.1 「切入点数据获取」核心问题&amp;答案&quot;">​</a></h3><p>问题</p><ol><li>在环绕通知中可以获取到哪些数据？</li></ol><p>点击查看代码</p><ul><li>获取参数</li><li>获取返回值</li><li>获取异常</li></ul><h4 id="_2-1-获取参数" tabindex="-1">2.1 获取参数 <a class="header-anchor" href="#_2-1-获取参数" aria-label="Permalink to &quot;2.1 获取参数&quot;">​</a></h4><blockquote><p>说明：在前置通知和环绕通知中都可以获取到连接点方法的参数们</p></blockquote><ul><li>JoinPoint 对象描述了连接点方法的运行状态，可以获取到原始方法的调用参数</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Before(&quot;pt()&quot;)</span></span>
<span class="line"><span>public void before(JoinPoint jp) {</span></span>
<span class="line"><span>    Object[] args = jp.getArgs(); //获取连接点方法的参数们</span></span>
<span class="line"><span>    System.out.println(Arrays.toString(args));</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>ProccedJointPoint 是 JoinPoint 的子类 👈</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Around(&quot;pt()&quot;)</span></span>
<span class="line"><span>public Object around(ProceedingJoinPoint pjp) throws Throwable {</span></span>
<span class="line"><span>    Object[] args = pjp.getArgs(); //获取连接点方法的参数们</span></span>
<span class="line"><span>    System.out.println(Arrays.toString(args));</span></span>
<span class="line"><span>    Object ret = pjp.proceed();</span></span>
<span class="line"><span>    return ret;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_2-2-获取返回值-❤️" tabindex="-1">2.2 获取返回值 ❤️ <a class="header-anchor" href="#_2-2-获取返回值-❤️" aria-label="Permalink to &quot;2.2 获取返回值 ❤️&quot;">​</a></h4><blockquote><p>说明：在返回后通知和环绕通知中都可以获取到连接点方法的返回值</p></blockquote><ul><li>抛出异常后通知可以获取切入点方法中出现的异常信息，使用形参可以接收对应的异常对象</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@AfterReturning(value = &quot;pt()&quot;,returning = &quot;ret&quot;)</span></span>
<span class="line"><span>public void afterReturning(String ret) { //变量名要和returning=&quot;ret&quot;的属性值一致</span></span>
<span class="line"><span>    System.out.println(&quot;afterReturning advice ...&quot;+ret);</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>环绕通知中可以手工书写对原始方法的调用，得到的结果即为原始方法的返回值 👈</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Around(&quot;pt()&quot;)</span></span>
<span class="line"><span>public Object around(ProceedingJoinPoint pjp) throws Throwable {</span></span>
<span class="line"><span>    // 手动调用连接点方法，返回值就是连接点方法的返回值</span></span>
<span class="line"><span>    Object ret = pjp.proceed();</span></span>
<span class="line"><span>    return ret;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_2-3-获取异常-🚀" tabindex="-1">2.3 获取异常 🚀 <a class="header-anchor" href="#_2-3-获取异常-🚀" aria-label="Permalink to &quot;2.3 获取异常 🚀&quot;">​</a></h4><blockquote><p>说明：在抛出异常后通知和环绕通知中都可以获取到连接点方法中出现的异常</p></blockquote><ul><li>抛出异常后通知可以获取切入点方法中出现的异常信息，使用形参可以接收对应的异常对象</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@AfterThrowing(value = &quot;pt()&quot;,throwing = &quot;t&quot;)</span></span>
<span class="line"><span>public void afterThrowing(Throwable t) {//变量名要和throwing = &quot;t&quot;的属性值一致</span></span>
<span class="line"><span>    System.out.println(&quot;afterThrowing advice ...&quot;+ t);</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>抛出异常后通知可以获取切入点方法运行的异常信息，使用形参可以接收运行时抛出的异常对象</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Around(&quot;pt()&quot;)</span></span>
<span class="line"><span>public Object around(ProceedingJoinPoint pjp)  {</span></span>
<span class="line"><span>    Object ret = null;</span></span>
<span class="line"><span>    //此处需要try...catch处理，catch中捕获到的异常就是连接点方法中抛出的异常</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        ret = pjp.proceed();</span></span>
<span class="line"><span>    } catch (Throwable t) {</span></span>
<span class="line"><span>        t.printStackTrace();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return ret;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-4-案例-百度网盘密码数据兼容处理" tabindex="-1">2.4 案例-百度网盘密码数据兼容处理 <a class="header-anchor" href="#_2-4-案例-百度网盘密码数据兼容处理" aria-label="Permalink to &quot;2.4 案例-百度网盘密码数据兼容处理&quot;">​</a></h3><p>11 分钟</p><h4 id="_2-4-1-需求和分析" tabindex="-1">2.4.1 需求和分析 <a class="header-anchor" href="#_2-4-1-需求和分析" aria-label="Permalink to &quot;2.4.1 需求和分析&quot;">​</a></h4><p>需求和分析</p><ul><li>需求：对百度网盘分享链接输入密码时尾部多输入的空格做兼容处理</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>链接：https://pan.baidu.com/s/12tMJaOlabADUXhu8VgwMzw?pwd=hztj</span></span>
<span class="line"><span>提取码：hztj</span></span>
<span class="line"><span>复制这段内容后打开百度网盘手机 App，操作更方便哦</span></span></code></pre></div><ul><li>分析：</li></ul><p><a href="Day03/image-3.png"></a></p><p>①：在业务方法执行之前对所有的输入参数进行格式处理——trim()</p><p>②：使用处理后的参数调用原始方法——环绕通知中存在对原始方法的调用</p><p><a href="Day03/iamge-1.png"></a></p><h4 id="_2-4-2-代码实现" tabindex="-1">2.4.2 代码实现 <a class="header-anchor" href="#_2-4-2-代码实现" aria-label="Permalink to &quot;2.4.2 代码实现&quot;">​</a></h4><h5 id="【前置工作】环境准备-2" tabindex="-1">【前置工作】环境准备 <a class="header-anchor" href="#【前置工作】环境准备-2" aria-label="Permalink to &quot;【前置工作】环境准备&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//-------------service层代码-----------------------</span></span>
<span class="line"><span>public interface ResourcesService {</span></span>
<span class="line"><span>    public boolean openURL(String url ,String password);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class ResourcesServiceImpl implements ResourcesService {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private ResourcesDao resourcesDao;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public boolean openURL(String url, String password) {</span></span>
<span class="line"><span>        return resourcesDao.readResources(url,password);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//-------------dao层代码-----------------------</span></span>
<span class="line"><span>public interface ResourcesDao {</span></span>
<span class="line"><span>    boolean readResources(String url, String password);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@Repository</span></span>
<span class="line"><span>public class ResourcesDaoImpl implements ResourcesDao {</span></span>
<span class="line"><span>    public boolean readResources(String url, String password) {</span></span>
<span class="line"><span>        System.out.println(password.length());</span></span>
<span class="line"><span>        //模拟校验</span></span>
<span class="line"><span>        return password.equals(&quot;root&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="【第一步】编写通知类-2" tabindex="-1">【第一步】编写通知类 <a class="header-anchor" href="#【第一步】编写通知类-2" aria-label="Permalink to &quot;【第一步】编写通知类&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>public class DataAdvice {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Pointcut(&quot;execution(boolean com.itheima.service.*Service.*(*,*))&quot;)</span></span>
<span class="line"><span>    private void servicePt(){}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Around(&quot;DataAdvice.servicePt()&quot;)</span></span>
<span class="line"><span>    public Object trimStr(ProceedingJoinPoint pjp) throws Throwable {</span></span>
<span class="line"><span>        Object[] args = pjp.getArgs();</span></span>
<span class="line"><span>        for (int i = 0; i &lt; args.length; i++) {</span></span>
<span class="line"><span>            //判断参数是不是字符串</span></span>
<span class="line"><span>            if(args[i].getClass().equals(String.class)){</span></span>
<span class="line"><span>                args[i] = args[i].toString().trim();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        Object ret = pjp.proceed(args);</span></span>
<span class="line"><span>        return ret;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="【第二步】在-springconfig-配置类上开启-aop-注解功能-2" tabindex="-1">【第二步】在 SpringConfig 配置类上开启 AOP 注解功能 <a class="header-anchor" href="#【第二步】在-springconfig-配置类上开启-aop-注解功能-2" aria-label="Permalink to &quot;【第二步】在 SpringConfig 配置类上开启 AOP 注解功能&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ComponentScan(&quot;com.itheima&quot;)</span></span>
<span class="line"><span>@EnableAspectJAutoProxy</span></span>
<span class="line"><span>public class SpringConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="【第三步】运行测试类-查看结果-2" tabindex="-1">【第三步】运行测试类，查看结果 <a class="header-anchor" href="#【第三步】运行测试类-查看结果-2" aria-label="Permalink to &quot;【第三步】运行测试类，查看结果&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class App {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        ApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);</span></span>
<span class="line"><span>        ResourcesService resourcesService = ctx.getBean(ResourcesService.class);</span></span>
<span class="line"><span>        boolean flag = resourcesService.openURL(&quot;http://pan.baidu.com/haha&quot;, &quot;root &quot;);</span></span>
<span class="line"><span>        System.out.println(flag);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-5-aop-开发总结" tabindex="-1">2.5 AOP 开发总结 <a class="header-anchor" href="#_2-5-aop-开发总结" aria-label="Permalink to &quot;2.5 AOP 开发总结&quot;">​</a></h3><p>7 分钟</p><h4 id="_2-5-1-aop-的核心概念-🍐" tabindex="-1">2.5.1 AOP 的核心概念 🍐 <a class="header-anchor" href="#_2-5-1-aop-的核心概念-🍐" aria-label="Permalink to &quot;2.5.1 AOP 的核心概念 🍐&quot;">​</a></h4><p>提示</p><ul><li>概念：AOP(Aspect Oriented Programming)面向切面编程，一种编程范式</li><li>作用：在不惊动原始设计的基础上为方法进行功能增强</li><li>核心概念 <ul><li>代理（Proxy）：SpringAOP 的核心本质是采用代理模式实现的 ❤️</li><li>连接点（JoinPoint）： 在 SpringAOP 中，理解为任意方法的执行</li><li>切入点（Pointcut）：匹配连接点的式子，也是具有共性功能的方法描述</li><li>通知（Advice）：若干个方法的共性功能，在切入点处执行，最终体现为一个方法</li><li>切面（Aspect）：描述通知与切入点的对应关系 ❤️</li><li>目标对象（Target）：被代理的原始对象成为目标对象 ❤️</li></ul></li></ul><h4 id="_2-5-2-切入点表达式语法" tabindex="-1">2.5.2 切入点表达式语法 <a class="header-anchor" href="#_2-5-2-切入点表达式语法" aria-label="Permalink to &quot;2.5.2 切入点表达式语法&quot;">​</a></h4><p>点击查看切入点表达式语法</p><ul><li><p>切入点表达式标准格式：动作关键字(访问修饰符 返回值 包名.类/接口名.方法名（参数）异常名)</p><ul><li>execution(* com.itheima.service.*Service.*(..))</li></ul></li><li><p>切入点表达式描述通配符：</p><ul><li>作用：用于快速描述，范围描述</li><li>*：匹配任意符号（常用）</li><li>.. ：匹配多个连续的任意符号（常用）</li><li>+：匹配子类类型</li></ul></li><li><p>切入点表达式书写技巧</p><ol><li>按标准规范开发</li><li>查询操作的返回值建议使用*匹配</li><li>减少使用..的形式描述包</li><li>对接口进行描述，使用*表示模块名，例如 UserService 的匹配描述为*Service</li><li>方法名书写保留动词，例如 get，使用*表示名词，例如 getById 匹配描述为 getBy*</li><li>参数根据实际情况灵活调整</li></ol></li></ul><blockquote><p>1.表达式：读的方式从后往前读取，在路径上不要使用.. ❤️</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Pointcut(&quot;execution(* com.itheima.dao.BookDao.findName(..))&quot;)</span></span>
<span class="line"><span> private void pt(){}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Around(&quot;pt()&quot;)</span></span>
<span class="line"><span>public Object around(ProceedingJoinPoint pjp) {</span></span>
<span class="line"><span>    Object[] args = pjp.getArgs();</span></span>
<span class="line"><span>    System.out.println(Arrays.toString(args));</span></span>
<span class="line"><span>    args[0] = 666;</span></span>
<span class="line"><span>    Object ret = null;</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        ret = pjp.proceed(args);</span></span>
<span class="line"><span>    } catch (Throwable t) {</span></span>
<span class="line"><span>        t.printStackTrace();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return ret;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_4-3-五种通知类型" tabindex="-1">4.3 五种通知类型 <a class="header-anchor" href="#_4-3-五种通知类型" aria-label="Permalink to &quot;4.3 五种通知类型&quot;">​</a></h4><p>点击查看五种通知类型</p><ul><li>前置通知</li><li>后置通知</li><li>环绕通知 👈 ❤️ <ul><li>环绕通知依赖形参 ProceedingJoinPoint 才能实现对原始方法的调用</li><li>环绕通知可以隔离原始方法的调用执行</li><li>环绕通知返回值设置为 Object 类型</li><li>环绕通知中可以对原始方法调用过程中出现的异常进行处理</li></ul></li><li>返回后通知</li><li>抛出异常后通知</li></ul><p>注意</p><p>Aop 建议在岗位级别比较高的时候使用，如果只是公司的小工程师，建议先咨询主管。</p><h2 id="_3-spring-事务管理" tabindex="-1">3.Spring 事务管理 <a class="header-anchor" href="#_3-spring-事务管理" aria-label="Permalink to &quot;3.Spring 事务管理&quot;">​</a></h2><h3 id="_3-1-spring-事务简介【重点】" tabindex="-1">3.1 Spring 事务简介【重点】 <a class="header-anchor" href="#_3-1-spring-事务简介【重点】" aria-label="Permalink to &quot;3.1 Spring 事务简介【重点】&quot;">​</a></h3><p>13 分钟</p><h4 id="_3-1-1-「-spring-事务简介」核心问题-答案" tabindex="-1">3.1.1 「 Spring 事务简介」核心问题&amp;答案 <a class="header-anchor" href="#_3-1-1-「-spring-事务简介」核心问题-答案" aria-label="Permalink to &quot;3.1.1 「 Spring 事务简介」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>Spring 提供的事务管理是数据层的事务还是业务层的事务?</li></ol><p>点击查看</p><ul><li>事务作用：在数据层保障一系列的数据库操作同成功同失败</li><li>Spring 事务作用：在数据层或**<strong>业务层</strong>**保障一系列的数据库操作同成功同失败 <img src="`+b+`" alt="image-20210801190820853"></li></ul><h4 id="_3-1-2-需求和分析" tabindex="-1">3.1.2 需求和分析 <a class="header-anchor" href="#_3-1-2-需求和分析" aria-label="Permalink to &quot;3.1.2 需求和分析&quot;">​</a></h4><p>提示</p><ul><li><p>需求：实现任意两个账户间转账操作</p></li><li><p>需求微缩：A 账户减钱，B 账户加钱</p></li><li><p>分析：</p><p>①：数据层提供基础操作，指定账户减钱（outMoney），指定账户加钱（inMoney）</p><p>②：业务层提供转账操作（transfer），调用减钱与加钱的操作</p><p>③：提供 2 个账号和操作金额执行转账操作</p><p>④：基于 Spring 整合 MyBatis 环境搭建上述操作</p></li><li><p>结果分析：</p><p>①：程序正常执行时，账户金额 A 减 B 加，没有问题</p><p>②：程序出现异常后，转账失败，但是异常之前操作成功，异常之后操作失败，整体业务失败</p></li></ul><h4 id="_3-1-3-代码实现" tabindex="-1">3.1.3 代码实现 <a class="header-anchor" href="#_3-1-3-代码实现" aria-label="Permalink to &quot;3.1.3 代码实现&quot;">​</a></h4><h5 id="【前置工作】环境准备-3" tabindex="-1">【前置工作】环境准备 <a class="header-anchor" href="#【前置工作】环境准备-3" aria-label="Permalink to &quot;【前置工作】环境准备&quot;">​</a></h5><blockquote><p>Spring 整合 Mybatis 相关代码(依赖、JdbcConfig、MybatisConfig、SpringConfig)省略。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public interface AccountDao {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Update(&quot;update tbl_account set money = money + #{money} where name = #{name}&quot;)</span></span>
<span class="line"><span>    void inMoney(@Param(&quot;name&quot;) String name, @Param(&quot;money&quot;) Double money);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Update(&quot;update tbl_account set money = money - #{money} where name = #{name}&quot;)</span></span>
<span class="line"><span>    void outMoney(@Param(&quot;name&quot;) String name, @Param(&quot;money&quot;) Double money);</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public interface AccountService {</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 转账操作</span></span>
<span class="line"><span>     * @param out 传出方</span></span>
<span class="line"><span>     * @param in 转入方</span></span>
<span class="line"><span>     * @param money 金额</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public void transfer(String out,String in ,Double money) ;</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Service</span></span>
<span class="line"><span>public class AccountServiceImpl implements AccountService {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private AccountDao accountDao;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void transfer(String out,String in ,Double money) {</span></span>
<span class="line"><span>        accountDao.outMoney(out,money);</span></span>
<span class="line"><span>        int i = 1/0;</span></span>
<span class="line"><span>        accountDao.inMoney(in,money);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="【第一步】在业务层接口上添加-spring-事务管理" tabindex="-1">【第一步】在业务层接口上添加 Spring 事务管理 <a class="header-anchor" href="#【第一步】在业务层接口上添加-spring-事务管理" aria-label="Permalink to &quot;【第一步】在业务层接口上添加 Spring 事务管理&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public interface AccountService {</span></span>
<span class="line"><span>    //配置当前接口方法具有事务</span></span>
<span class="line"><span>    @Transactional</span></span>
<span class="line"><span>    public void transfer(String out,String in ,Double money) ;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><p>注意事项</p><ol><li>Spring 注解式事务通常添加在业务层接口中而不会添加到业务层实现类中，降低耦合</li><li>注解式事务可以添加到业务方法上表示当前方法开启事务，也可以添加到接口上表示当前接口所有方法开启事务</li></ol></li></ul><h5 id="【第二步】设置事务管理器-将事务管理器添加到-ioc-容器中" tabindex="-1">【第二步】设置事务管理器(将事务管理器添加到 IOC 容器中) <a class="header-anchor" href="#【第二步】设置事务管理器-将事务管理器添加到-ioc-容器中" aria-label="Permalink to &quot;【第二步】设置事务管理器(将事务管理器添加到 IOC 容器中)&quot;">​</a></h5><blockquote><p>说明：可以在 JdbcConfig 中配置事务管理器</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//配置事务管理器，mybatis使用的是jdbc事务</span></span>
<span class="line"><span>@Bean</span></span>
<span class="line"><span>public PlatformTransactionManager transactionManager(DataSource dataSource){</span></span>
<span class="line"><span>    DataSourceTransactionManager dtm = new DataSourceTransactionManager();</span></span>
<span class="line"><span>    transactionManager.setDataSource(dataSource);</span></span>
<span class="line"><span>    return transactionManager;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><p>注意事项</p><ol><li>事务管理器要根据实现技术进行选择</li><li>MyBatis 框架使用的是 JDBC 事务 ❤️</li></ol></li></ul><h5 id="【第三步】开启注解式事务驱动" tabindex="-1">【第三步】开启注解式事务驱动 <a class="header-anchor" href="#【第三步】开启注解式事务驱动" aria-label="Permalink to &quot;【第三步】开启注解式事务驱动&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ComponentScan(&quot;com.itheima&quot;)</span></span>
<span class="line"><span>@PropertySource(&quot;classpath:jdbc.properties&quot;)</span></span>
<span class="line"><span>@Import({JdbcConfig.class,MybatisConfig.class})</span></span>
<span class="line"><span>//开启注解式事务驱动</span></span>
<span class="line"><span>@EnableTransactionManagement</span></span>
<span class="line"><span>public class SpringConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="【第四步】运行测试类-查看结果" tabindex="-1">【第四步】运行测试类，查看结果 <a class="header-anchor" href="#【第四步】运行测试类-查看结果" aria-label="Permalink to &quot;【第四步】运行测试类，查看结果&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RunWith(SpringJUnit4ClassRunner.class)</span></span>
<span class="line"><span>@ContextConfiguration(classes = SpringConfig.class)</span></span>
<span class="line"><span>public class AccountServiceTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Autowired</span></span>
<span class="line"><span>private AccountService accountService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Test</span></span>
<span class="line"><span>public void testTransfer() throws IOException {</span></span>
<span class="line"><span>    accountService.transfer(&quot;Tom&quot;,&quot;Jerry&quot;,100D);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_3-2-spring-事务角色【理解】" tabindex="-1">3.2 Spring 事务角色【理解】 <a class="header-anchor" href="#_3-2-spring-事务角色【理解】" aria-label="Permalink to &quot;3.2 Spring 事务角色【理解】&quot;">​</a></h3><p>5 分钟</p><h4 id="_3-2-1-「spring-事务角色」核心问题-答案" tabindex="-1">3.2.1 「Spring 事务角色」核心问题&amp;答案 <a class="header-anchor" href="#_3-2-1-「spring-事务角色」核心问题-答案" aria-label="Permalink to &quot;3.2.1 「Spring 事务角色」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>什么是事务管理员，什么是事务协调员？</li></ol><p>点击查看</p><ul><li>事务管理员：发起事务方，在 Spring 中通常指代业务层开启事务的方法</li><li>事务协调员：加入事务方，在 Spring 中通常指代数据层方法，也可以是业务层方法 <img src="`+m+'" alt="image-20210801192453227"></li></ul><h3 id="_3-3-spring-事务相关配置" tabindex="-1">3.3 Spring 事务相关配置 <a class="header-anchor" href="#_3-3-spring-事务相关配置" aria-label="Permalink to &quot;3.3 Spring 事务相关配置&quot;">​</a></h3><p>19 分钟</p><h4 id="_3-3-1-「spring-事务相关配置」核心问题-答案" tabindex="-1">3.3.1 「Spring 事务相关配置」核心问题&amp;答案 <a class="header-anchor" href="#_3-3-1-「spring-事务相关配置」核心问题-答案" aria-label="Permalink to &quot;3.3.1 「Spring 事务相关配置」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>什么样的异常，Spring 事务默认是不进行回滚的？</li></ol><p>点击查看</p><blockquote><p>说明：对于 RuntimeException 类型异常或者 Error 错误，Spring 事务能够进行回滚操作。但是对于编译器异常，Spring 事务是不进行回滚的 ，所以需要使用 rollbackFor 来设置要回滚的异常。相当于打个补丁，不影响原有异常的回滚操作.</p></blockquote><p><img src="'+v+'" alt="image-20210802151553053"></p><h4 id="_3-3-1-案例-转账业务追加日志" tabindex="-1">3.3.1 案例：转账业务追加日志 <a class="header-anchor" href="#_3-3-1-案例-转账业务追加日志" aria-label="Permalink to &quot;3.3.1 案例：转账业务追加日志&quot;">​</a></h4><p>点击查看图示</p><p><img src="'+q+'" alt="image-20220416003934031"></p><h5 id="需求和分析" tabindex="-1">需求和分析 <a class="header-anchor" href="#需求和分析" aria-label="Permalink to &quot;需求和分析&quot;">​</a></h5><p>点击查看</p><ul><li><p>需求：实现任意两个账户间转账操作，并对每次转账操作在数据库进行留痕</p></li><li><p>需求微缩：A 账户减钱，B 账户加钱，数据库记录日志</p></li><li><p>分析：</p><p>①：基于转账操作案例添加日志模块，实现数据库中记录日志</p><p>②：业务层转账操作（transfer），调用减钱、加钱与记录日志功能</p></li><li><p>实现效果预期： 无论转账操作是否成功，均进行转账操作的日志留痕</p></li><li><p>存在的问题： 日志的记录与转账操作隶属同一个事务，同成功同失败</p></li><li><p>实现效果预期改进： 无论转账操作是否成功，日志必须保留</p></li><li><p>事务传播行为：事务协调员对事务管理员所携带事务的处理态度</p></li></ul><p><img src="'+f+`" alt="image-20210802153216460"></p><h5 id="代码实现" tabindex="-1">代码实现 <a class="header-anchor" href="#代码实现" aria-label="Permalink to &quot;代码实现&quot;">​</a></h5><p>步鄹</p><ul><li>【准备工作】环境整备</li><li>【第一步】在 AccountServiceImpl 中调用 logService 中添加日志的方法</li><li>【第二步】在 LogService 的 log()方法上设置事务的传播行为</li><li>【第三步】运行测试类，查看结果</li></ul><h5 id="【准备工作】环境整备" tabindex="-1">【准备工作】环境整备 <a class="header-anchor" href="#【准备工作】环境整备" aria-label="Permalink to &quot;【准备工作】环境整备&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>USE spring_db;</span></span>
<span class="line"><span>CREATE TABLE tbl_log(</span></span>
<span class="line"><span>id INT PRIMARY KEY AUTO_INCREMENT,</span></span>
<span class="line"><span>info VARCHAR(255),</span></span>
<span class="line"><span>createDate DATE</span></span>
<span class="line"><span>);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public interface LogService {</span></span>
<span class="line"><span>    //propagation设置事务属性：传播行为设置为当前操作需要新事务</span></span>
<span class="line"><span>    @Transactional</span></span>
<span class="line"><span>    void log(String out, String in, Double money);</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Service</span></span>
<span class="line"><span>public class LogServiceImpl implements LogService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private LogDao logDao;</span></span>
<span class="line"><span>    public void log(String out,String in,Double money ) {</span></span>
<span class="line"><span>        logDao.log(&quot;转账操作由&quot;+out+&quot;到&quot;+in+&quot;,金额：&quot;+money);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public interface LogDao {</span></span>
<span class="line"><span>    @Insert(&quot;insert into tbl_log (info,createDate) values(#{info},now())&quot;)</span></span>
<span class="line"><span>    void log(String info);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="【第一步】在-accountserviceimpl-中调用-logservice-中添加日志的方法" tabindex="-1">【第一步】在 AccountServiceImpl 中调用 logService 中添加日志的方法 <a class="header-anchor" href="#【第一步】在-accountserviceimpl-中调用-logservice-中添加日志的方法" aria-label="Permalink to &quot;【第一步】在 AccountServiceImpl 中调用 logService 中添加日志的方法&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Service</span></span>
<span class="line"><span>public class AccountServiceImpl implements AccountService {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private AccountDao accountDao;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private LogService logService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void transfer(String out,String in ,Double money) {</span></span>
<span class="line"><span>        try{</span></span>
<span class="line"><span>            accountDao.outMoney(out,money);</span></span>
<span class="line"><span>            int i = 1/0;</span></span>
<span class="line"><span>            accountDao.inMoney(in,money);</span></span>
<span class="line"><span>        }finally {</span></span>
<span class="line"><span>            logService.log(out,in,money);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="【第二步】在-logservice-的-log-方法上设置事务的传播行为" tabindex="-1">【第二步】在 LogService 的 log()方法上设置事务的传播行为 <a class="header-anchor" href="#【第二步】在-logservice-的-log-方法上设置事务的传播行为" aria-label="Permalink to &quot;【第二步】在 LogService 的 log()方法上设置事务的传播行为&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public interface LogService {</span></span>
<span class="line"><span>    //propagation设置事务属性：传播行为设置为当前操作需要新事务</span></span>
<span class="line"><span>    @Transactional(propagation = Propagation.REQUIRES_NEW)</span></span>
<span class="line"><span>    void log(String out, String in, Double money);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="【第三步】运行测试类-查看结果-3" tabindex="-1">【第三步】运行测试类，查看结果 <a class="header-anchor" href="#【第三步】运行测试类-查看结果-3" aria-label="Permalink to &quot;【第三步】运行测试类，查看结果&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RunWith(SpringJUnit4ClassRunner.class)</span></span>
<span class="line"><span>@ContextConfiguration(classes = SpringConfig.class)</span></span>
<span class="line"><span>public class AccountServiceTest {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private AccountService accountService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testTransfer() throws IOException {</span></span>
<span class="line"><span>        accountService.transfer(&quot;Tom&quot;,&quot;Jerry&quot;,50D);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_3-3-2-事务传播行为" tabindex="-1">3.3.2 事务传播行为 <a class="header-anchor" href="#_3-3-2-事务传播行为" aria-label="Permalink to &quot;3.3.2 事务传播行为&quot;">​</a></h4><blockquote><p>事务传播行为：事务协调员对事务管理员所携带事务的处理态度</p></blockquote><p>点击查看</p><p><img src="`+k+'" alt="image-20210802153014296"></p><h3 id="_3-4-事务传播行为练习-✏️" tabindex="-1">3.4 事务传播行为练习 ✏️ <a class="header-anchor" href="#_3-4-事务传播行为练习-✏️" aria-label="Permalink to &quot;3.4 事务传播行为练习 ✏️&quot;">​</a></h3><p>10 分钟</p><h4 id="_3-4-0「事务传播行为-」目的" tabindex="-1">3.4.0「事务传播行为 」目的 <a class="header-anchor" href="#_3-4-0「事务传播行为-」目的" aria-label="Permalink to &quot;3.4.0「事务传播行为 」目的&quot;">​</a></h4><blockquote><p>事务传播行为中的 REQUIRES_NEW 开启一个新的事物</p></blockquote><h4 id="_3-4-1「事务传播行为」需求-效果" tabindex="-1">3.4.1「事务传播行为」需求&amp;效果 <a class="header-anchor" href="#_3-4-1「事务传播行为」需求-效果" aria-label="Permalink to &quot;3.4.1「事务传播行为」需求&amp;效果&quot;">​</a></h4><blockquote><p>转账过程中出现了异常，日志也进行了记录</p></blockquote><h4 id="_3-4-2「事务传播行为」步鄹" tabindex="-1">3.4.2「事务传播行为」步鄹 <a class="header-anchor" href="#_3-4-2「事务传播行为」步鄹" aria-label="Permalink to &quot;3.4.2「事务传播行为」步鄹&quot;">​</a></h4><ul><li>在飞秋中下载 spring_25_case_transfer_logtest 压缩包，放到你的工程中</li><li>导入到项目中</li><li>启动类为 AccountServiceTest，类中有详细说明</li><li>思考 AccountService 和 LogService 添加什么注解配置事物，并且思考要配置何种传播属性</li><li>注意：导工程后，一定要做的三个步鄹 <ol><li>检查 Maven 仓库</li><li>检查 jdk-1.8</li><li>检查编译器版本-1.8</li></ol></li></ul><p>记忆小技巧</p><ul><li><p>Spring 容器和 bean 的注解 ：ccip abs</p></li><li><p>aop 的注解：CAPA E</p></li></ul>',309),y=[S];function _(A,C,x,O,D,T){return p(),n("div",null,y)}const R=s(P,[["render",_]]);export{w as __pageData,R as default};
