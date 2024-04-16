import{_ as a,c as s,o as n,a4 as p}from"./chunks/framework.-JfgED0h.js";const e="/docs/assets/2022-08-28-17-13-53.B09JSzp9.png",l="/docs/assets/2022-08-28-17-16-53.CZ5wUO-w.png",t="/docs/assets/image-20220513095535207.CvEmz5_H.png",i="/docs/assets/image-20220513095432857.FXzwiCTG.png",o="/docs/assets/image-20220513095400015.B7gGW0H1.png",c="/docs/assets/image-20210730101826913.Dhu33gjE.png",r="/docs/assets/image-20210730102053281.CLkipH5t.png",u="/docs/assets/image-20220413191026729.B_JuF1E8.png",d="/docs/assets/image-20210730102842030.gRp7vK1M.png",g="/docs/assets/image-20210730103438742.0PVXD54v.png",h="/docs/assets/image-20210730103701525.2YcE0cyZ.png",b="/docs/assets/image-20210730104835746.BAXiIS1E.png",m="/docs/assets/image-20210803192052811.C-61Qlz5.png",q="/docs/assets/image-20220413201252862.NZph-0NS.png",v="/docs/assets/image-20220414180852105.WYN_bbYX.png",k="/docs/assets/image-20210730113548708.BKQ_l13h.png",y="/docs/assets/image-20210730114303147.Cjsqk5KS.png",f="/docs/assets/image-20210730114342060.DCyWR6NZ.png",C="/docs/assets/image-20210730114356175.3PPsKn8C.png",S="/docs/assets/image-20200831155517797.DhFfgSqZ.png",R=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"backend/spring/Day02.md","filePath":"backend/spring/Day02.md"}'),_={name:"backend/spring/Day02.md"},x=p('<h2 id="_1-第三方资源配置管理" tabindex="-1">1. 第三方资源配置管理 <a class="header-anchor" href="#_1-第三方资源配置管理" aria-label="Permalink to &quot;1\\. 第三方资源配置管理&quot;">​</a></h2><p>说明</p><p>以管理 DataSource 连接池对象为例讲解第三方资源配置管理</p><ul><li><p>数据库连接池</p><ol><li>概念：其实就是一个<strong>容器(集合)</strong>，存放数据库连接的容器。 <ul><li>当系统初始化好后，容器被创建，容器中会申请一些连接对象，</li><li>当用户来访问数据库时，从容器中获取连接对象，</li><li>用户访问完之后，会将连接对象归还给容器。</li></ul></li><li>好处：</li></ol><ul><li>节约资源</li><li>用户访问高效</li></ul></li></ul><p>点击查看连接池图解</p><p><img src="'+e+'" alt=""><img src="'+l+`" alt=""></p><h3 id="_1-1-管理-datasource-连接池对象" tabindex="-1">1.1 管理 DataSource 连接池对象 <a class="header-anchor" href="#_1-1-管理-datasource-连接池对象" aria-label="Permalink to &quot;1.1 管理 DataSource 连接池对象&quot;">​</a></h3><p>15 分钟</p><h4 id="_1-1-1「管理-datasource」核心问题-答案" tabindex="-1">1.1.1「管理 DataSource」核心问题&amp;答案 <a class="header-anchor" href="#_1-1-1「管理-datasource」核心问题-答案" aria-label="Permalink to &quot;1.1.1「管理 DataSource」核心问题&amp;答案&quot;">​</a></h4><p>问题：<strong>DataSource 是接口还是类？</strong></p><p>点击查看答案</p><ol><li>DataSource 是接口</li><li>com.alibaba.druid.pool.DruidDataSource 是具体的实现类</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;bean id=&quot;dataSource&quot; class=&quot;com.alibaba.druid.pool.DruidDataSource&quot;&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;driverClassName&quot; value=&quot;com.mysql.jdbc.Driver&quot;/&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;url&quot; value=&quot;jdbc:mysql://localhost:3306/spring_db&quot;/&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;username&quot; value=&quot;root&quot;/&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;password&quot; value=&quot;root&quot;/&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span></code></pre></div><h4 id="_1-1-2-管理-druid-连接池【重点】" tabindex="-1">1.1.2 管理 Druid 连接池【重点】 <a class="header-anchor" href="#_1-1-2-管理-druid-连接池【重点】" aria-label="Permalink to &quot;1.1.2 管理 Druid 连接池【重点】&quot;">​</a></h4><p>提示</p><ul><li>【起 步】数据库准备</li><li>【第一步】添加 Druid 连接池依赖</li><li>【第二步】配置 DruidDataSource 连接池 Bean 对象</li><li>【第三步】在测试类中从 IOC 容器中获取连接池对象并打印</li></ul><h5 id="_1️⃣-数据库准备" tabindex="-1">1️⃣ 数据库准备 <a class="header-anchor" href="#_1️⃣-数据库准备" aria-label="Permalink to &quot;1️⃣ 数据库准备&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>create database if not exists spring_db character set utf8;</span></span>
<span class="line"><span>use spring_db;</span></span>
<span class="line"><span>create table if not exists tbl_account(</span></span>
<span class="line"><span>    id int primary key auto_increment,</span></span>
<span class="line"><span>    name varchar(20),</span></span>
<span class="line"><span>    money double</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>insert into tbl_account values(null,&#39;Tom&#39;,1000);</span></span>
<span class="line"><span>insert into tbl_account values(null,&#39;Jerry&#39;,1000);</span></span></code></pre></div><h5 id="_2️⃣-添加-druid-连接池依赖" tabindex="-1">2️⃣ 添加 Druid 连接池依赖 <a class="header-anchor" href="#_2️⃣-添加-druid-连接池依赖" aria-label="Permalink to &quot;2️⃣ 添加 Druid 连接池依赖&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;!--      springcontext依赖--&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-context&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;5.2.10.RELEASE&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;!--        阿里巴巴德鲁伊连接池--&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;druid&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;1.1.16&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;!--        数据库驱动--&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;mysql&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;5.1.47&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><blockquote><p>注意：除了添加以上两个依赖之外，别忘了添加 spring-context 依赖。</p></blockquote><h5 id="_3️⃣-配置-druiddatasource-连接池-bean-对象" tabindex="-1">3️⃣ 配置 DruidDataSource 连接池 Bean 对象 <a class="header-anchor" href="#_3️⃣-配置-druiddatasource-连接池-bean-对象" aria-label="Permalink to &quot;3️⃣ 配置 DruidDataSource 连接池 Bean 对象&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;bean id=&quot;dataSource&quot; class=&quot;com.alibaba.druid.pool.DruidDataSource&quot;&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;driverClassName&quot; value=&quot;com.mysql.jdbc.Driver&quot;/&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;url&quot; value=&quot;jdbc:mysql://localhost:3306/spring_db&quot;/&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;username&quot; value=&quot;root&quot;/&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;password&quot; value=&quot;root&quot;/&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span></code></pre></div><h5 id="_4️⃣-在测试类中从-ioc-容器中获取连接池对象并打印" tabindex="-1">4️⃣ 在测试类中从 IOC 容器中获取连接池对象并打印 <a class="header-anchor" href="#_4️⃣-在测试类中从-ioc-容器中获取连接池对象并打印" aria-label="Permalink to &quot;4️⃣ 在测试类中从 IOC 容器中获取连接池对象并打印&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class App {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        ApplicationContext ctx = new ClassPathXmlApplicationContext(&quot;applicationContext.xml&quot;);</span></span>
<span class="line"><span>       //从容器中获得DataSource实例对象</span></span>
<span class="line"><span>        DataSource dataSource = (DataSource) ctx.getBean(&quot;dataSource&quot;);</span></span>
<span class="line"><span>        System.out.println(dataSource);</span></span>
<span class="line"><span>        //获得链接，开始查询</span></span>
<span class="line"><span>        Connection connection = dataSource.getConnection();</span></span>
<span class="line"><span>        System.out.println(connection);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Statement statement = connection.createStatement();</span></span>
<span class="line"><span>        ResultSet resultSet = statement.executeQuery(&quot;select * from tb_brand&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        while (resultSet.next()){</span></span>
<span class="line"><span>            System.out.println(resultSet.getString(&quot;brand_name&quot;));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_1-1-3-管理-c3p0-连接池【了解】" tabindex="-1">1.1.3 管理 c3p0 连接池【了解】 <a class="header-anchor" href="#_1-1-3-管理-c3p0-连接池【了解】" aria-label="Permalink to &quot;1.1.3 管理 c3p0 连接池【了解】&quot;">​</a></h4><p>相关信息</p><p><strong>C3P0</strong> 是一个开源的 JDBC 连接池，它实现了数据源和 JNDI 绑定，支持 JDBC3 规范和 JDBC2 的标准扩展。目前使用它的开源项目有 Hibernate、Spring 等。</p><ul><li>c3p0 连接池是全自动化操作，相比于 dbcp 可以自动回收空闲连接，此外还能自动连接。</li><li>C3P0 <strong>功能简单易用，稳定性好</strong>这是它的优点，但是性能上的缺点却让它彻底被打入冷宫。</li><li><strong>C3P0 的性能很差</strong>，差到即便是同时代的产品相比它也是垫底的，更不用和 Druid 等相比了。正常来讲，有问题很正常，改就是了，但 <strong>c3p0 最致命的问题就是架构设计过于复杂</strong>，让重构变成了一项不可能完成的任务。随着国内互联网大潮的涌起，性能有硬伤的 <strong>c3p0 彻底的退出了历史舞台</strong>。</li></ul><h5 id="_1️⃣-添加-c3p0-连接池依赖" tabindex="-1">1️⃣ 添加 c3p0 连接池依赖 <a class="header-anchor" href="#_1️⃣-添加-c3p0-连接池依赖" aria-label="Permalink to &quot;1️⃣ 添加 c3p0 连接池依赖&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;c3p0&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;c3p0&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;0.9.1.2&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><h5 id="_2️⃣-配置-c3p0-连接池-bean-对象" tabindex="-1">2️⃣ 配置 c3p0 连接池 Bean 对象 <a class="header-anchor" href="#_2️⃣-配置-c3p0-连接池-bean-对象" aria-label="Permalink to &quot;2️⃣ 配置 c3p0 连接池 Bean 对象&quot;">​</a></h5><blockquote><p>maxPoolSize 最大连接数</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;bean id=&quot;dataSource&quot; class=&quot;com.mchange.v2.c3p0.ComboPooledDataSource&quot;&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;driverClass&quot; value=&quot;com.mysql.jdbc.Driver&quot;/&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;jdbcUrl&quot; value=&quot;jdbc:mysql://localhost:3306/spring_db&quot;/&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;user&quot; value=&quot;root&quot;/&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;password&quot; value=&quot;root&quot;/&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;maxPoolSize&quot; value=&quot;1000&quot;/&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span></code></pre></div><blockquote><p>同一个 Spring 容器中不能有两个 id=&quot;dataSource&quot;的连接池。（回顾按类型装配的特征）</p></blockquote><h5 id="_3️⃣-在测试类中从-ioc-容器中获取连接池对象并打印" tabindex="-1">3️⃣ 在测试类中从 IOC 容器中获取连接池对象并打印 <a class="header-anchor" href="#_3️⃣-在测试类中从-ioc-容器中获取连接池对象并打印" aria-label="Permalink to &quot;3️⃣ 在测试类中从 IOC 容器中获取连接池对象并打印&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class App {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        ApplicationContext ctx = new ClassPathXmlApplicationContext(&quot;applicationContext.xml&quot;);</span></span>
<span class="line"><span>        DataSource dataSource = (DataSource) ctx.getBean(&quot;dataSource&quot;);</span></span>
<span class="line"><span>        System.out.println(dataSource);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>思考题：</p><p>Druid 配置的数据源（DataSource），用构造注入还是 setter 注入？</p><p><img src="`+t+'" alt="image-20220513095535207"><img src="'+i+'" alt="image-20220513095432857"></p><p>随着 applicationContext.xml 配置文件越来越大，密码和用户名等信息写在里面，为了提高维护性，可以将数据库的配置信息放在专门的文件中，如 jdbc.properties</p><p><img src="'+o+`" alt="image-20220513095400015"></p><h3 id="_1-2-加载-properties-属性文件【重点】" tabindex="-1">1.2 加载 properties 属性文件【重点】 <a class="header-anchor" href="#_1-2-加载-properties-属性文件【重点】" aria-label="Permalink to &quot;1.2 加载 properties 属性文件【重点】&quot;">​</a></h3><p>目的</p><p>将数据库的连接参数抽取到一个单独的文件中，与 Spring 配置文件解耦。</p><h4 id="_1-2-1-「加载-properties」核心问题-答案-🍐" tabindex="-1">1.2.1 「加载 properties」核心问题&amp;答案 🍐 <a class="header-anchor" href="#_1-2-1-「加载-properties」核心问题-答案-🍐" aria-label="Permalink to &quot;1.2.1 「加载 properties」核心问题&amp;答案 🍐&quot;">​</a></h4><p>注意</p><p>问题：<strong>如何解决使用 EL 表达式读取属性文件中的值结果读取到了系统属性问题？</strong></p><p>点击查看答案</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;!--classpath*:*.properties  ：  设置加载当前工程类路径和当前工程所依赖的所有jar包中的所有properties文件--&gt;</span></span>
<span class="line"><span>&lt;context:property-placeholder location=&quot;classpath*:*.properties&quot; system-properties-mode=&quot;NEVER&quot;/&gt;</span></span></code></pre></div><h4 id="_1-2-2-基本用法" tabindex="-1">1.2.2 基本用法 <a class="header-anchor" href="#_1-2-2-基本用法" aria-label="Permalink to &quot;1.2.2 基本用法&quot;">​</a></h4><h5 id="_1️⃣-【第一步】编写-jdbc-properties-属性文件" tabindex="-1">1️⃣ 【第一步】编写 jdbc.properties 属性文件 <a class="header-anchor" href="#_1️⃣-【第一步】编写-jdbc-properties-属性文件" aria-label="Permalink to &quot;1️⃣ 【第一步】编写 jdbc.properties 属性文件&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>jdbc.driver=com.mysql.jdbc.Driver</span></span>
<span class="line"><span>jdbc.url=jdbc:mysql://127.0.0.1:3306/spring_db</span></span>
<span class="line"><span>jdbc.username=root</span></span>
<span class="line"><span>jdbc.password=root</span></span></code></pre></div><h5 id="_2️⃣-【第二步】在-applicationcontext-xml-中开启开启-context-命名空间-加载-jdbc-properties-属性文件" tabindex="-1">2️⃣ 【第二步】在 applicationContext.xml 中开启开启 context 命名空间，加载 jdbc.properties 属性文件 <a class="header-anchor" href="#_2️⃣-【第二步】在-applicationcontext-xml-中开启开启-context-命名空间-加载-jdbc-properties-属性文件" aria-label="Permalink to &quot;2️⃣ 【第二步】在 applicationContext.xml 中开启开启 context 命名空间，加载 jdbc.properties 属性文件&quot;">​</a></h5><p><img src="`+c+`" alt="image-20210730101826913"></p><p>源码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;</span></span>
<span class="line"><span>       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>       xmlns:context=&quot;http://www.springframework.org/schema/context&quot;</span></span>
<span class="line"><span>       xsi:schemaLocation=&quot;</span></span>
<span class="line"><span>            http://www.springframework.org/schema/beans</span></span>
<span class="line"><span>            http://www.springframework.org/schema/beans/spring-beans.xsd</span></span>
<span class="line"><span>            http://www.springframework.org/schema/context</span></span>
<span class="line"><span>            http://www.springframework.org/schema/context/spring-context.xsd</span></span>
<span class="line"><span>            &quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/beans&gt;</span></span></code></pre></div><p>小技巧：如果同学们觉得上述复制粘贴方式不好改或者容易改错，其实 idea 是有提示功能的，注意不要选错就行了。有些版本的 idea 没有这个提示，那么就按照上面复制粘贴的方式改，改完之后可以做成 live template 模板，后期直接用</p><p><img src="`+r+`" alt="image-20210730102053281"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;!--classpath*:*.properties  ：  设置加载当前工程类路径和当前工程所依赖的所有jar包中的所有properties文件--&gt;</span></span>
<span class="line"><span>&lt;context:property-placeholder location=&quot;jdbc.properties&quot; system-properties-mode=&quot;NEVER&quot;/&gt;</span></span></code></pre></div><h5 id="_3️⃣-【第三步】在配置连接池-bean-的地方使用-el-表达式获取-jdbc-properties-属性文件中的值" tabindex="-1">3️⃣ 【第三步】在配置连接池 Bean 的地方使用 EL 表达式获取 jdbc.properties 属性文件中的值 <a class="header-anchor" href="#_3️⃣-【第三步】在配置连接池-bean-的地方使用-el-表达式获取-jdbc-properties-属性文件中的值" aria-label="Permalink to &quot;3️⃣ 【第三步】在配置连接池 Bean 的地方使用 EL 表达式获取 jdbc.properties 属性文件中的值&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>&lt;!--    3.使用属性占位符\${}读取properties文件中的属性--&gt;</span></span>
<span class="line"><span>&lt;!--    说明：idea自动识别\${}加载的属性值，需要手工点击才可以查阅原始书写格式--&gt;</span></span>
<span class="line"><span>&lt;bean class=&quot;com.alibaba.druid.pool.DruidDataSource&quot;&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;driverClassName&quot; value=&quot;\${jdbc.driver}&quot;/&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;url&quot; value=&quot;\${jdbc.url}&quot;/&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;username&quot; value=&quot;\${jdbc.username}&quot;/&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;password&quot; value=&quot;\${jdbc.password}&quot;/&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span></code></pre></div><blockquote><p>配置完成之后，运行之前的获取 Druid 连接池代码，可以获取到连接池对象就表示配置成功。</p></blockquote><h4 id="_1-2-3-配置不加载系统属性" tabindex="-1">1.2.3 配置不加载系统属性 <a class="header-anchor" href="#_1-2-3-配置不加载系统属性" aria-label="Permalink to &quot;1.2.3 配置不加载系统属性&quot;">​</a></h4><p>问题</p><p>如果属性文件中配置的不是 jdbc.username，而是 username=root666，那么使用\${username}获取到的不是 root666，而是计算机的名称。</p><p>原因</p><p>系统属性的优先级比我们属性文件中的高，替换了我们的 username=root666。</p><p>解决方案</p><ul><li><p>解决 1：换一个名称，例如不叫 username，叫 jdbc.username。</p></li><li><p>解决 2：使用**system-properties-mode=&quot;NEVER&quot;**属性表示不使用系统属性。</p></li></ul><p>点击查看详情</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>加载</span></span>
<span class="line"><span>&lt;context:property-placeholder location=&quot;jdbc.properties&quot; system-properties-mode=&quot;NEVER&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>加载类路径所有的</span></span>
<span class="line"><span>&lt;context:property-placeholder location=&quot;classpath*:*.properties&quot; system-properties-mode=&quot;NEVER&quot;/&gt;</span></span></code></pre></div><p>为什么不在 xml 文件中书写密码和用户名信息等数据库链接信息，而写在 properties 中？</p><ol><li>方便管理，未来可能有很多 propertis 文件，每个文件配置对应的信息，如 jdbc.properties，druid.properties, logback.properties 👈</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>    使用前缀进行区分，如下述的：jdbc和logback</span></span>
<span class="line"><span>    jdbc.properties</span></span>
<span class="line"><span>    jdbc.driver=com.mysql.jdbc.Driver</span></span>
<span class="line"><span>    jdbc.url=jdbc:mysql://127.0.0.1:3306/db1?useSSL=false</span></span>
<span class="line"><span>    jdbc.username=root</span></span>
<span class="line"><span>    jdbc.password=root</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    logback.properties</span></span>
<span class="line"><span>    logback.driver=com.mysql.jdbc.Driver</span></span>
<span class="line"><span>    logback.url=jdbc:mysql://127.0.0.1:3306/db1?useSSL=false</span></span>
<span class="line"><span>    logback.username=root</span></span>
<span class="line"><span>    logback.password=win10139741</span></span></code></pre></div><ol start="2"><li>实际开发中使用第三方框架，第三方框架提供了对应的.properties 文件</li></ol><h4 id="_1-3-4-加载-properties-文件写法-了解" tabindex="-1">1.3.4 加载 properties 文件写法[了解] <a class="header-anchor" href="#_1-3-4-加载-properties-文件写法-了解" aria-label="Permalink to &quot;1.3.4 加载 properties 文件写法\\[了解\\]&quot;">​</a></h4><p>点击查看详情</p><ul><li>不加载系统属性</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;context:property-placeholder location=&quot;jdbc.properties&quot; system-properties-mode=&quot;NEVER&quot;/&gt;</span></span></code></pre></div><ul><li>加载多个 properties 文件</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;context:property-placeholder location=&quot;jdbc.properties,msg.properties&quot;/&gt;</span></span></code></pre></div><ul><li>加载所有 properties 文件</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;context:property-placeholder location=&quot;*.properties&quot;/&gt;</span></span></code></pre></div><ul><li>加载 properties 文件**<strong>标准格式</strong>**</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;context:property-placeholder location=&quot;classpath:*.properties&quot;/&gt;</span></span></code></pre></div><ul><li><strong>加载 properties 文件标准格式【常用】</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;context:property-placeholder location=&quot;classpath*:*.properties&quot;/&gt;</span></span></code></pre></div><h3 id="_1-3-连接池练习-✏️" tabindex="-1">1.3 连接池练习 ✏️ <a class="header-anchor" href="#_1-3-连接池练习-✏️" aria-label="Permalink to &quot;1.3 连接池练习 ✏️&quot;">​</a></h3><p>10 分钟</p><h4 id="_1-3-0「连接池练习」目的" tabindex="-1">1.3.0「连接池练习」目的 <a class="header-anchor" href="#_1-3-0「连接池练习」目的" aria-label="Permalink to &quot;1.3.0「连接池练习」目的&quot;">​</a></h4><blockquote><p>熟悉数据库连接池的使用以及配置第三方 Bean</p></blockquote><h4 id="_1-3-1「连接池练习」需求-效果" tabindex="-1">1.3.1「连接池练习」需求&amp;效果 <a class="header-anchor" href="#_1-3-1「连接池练习」需求-效果" aria-label="Permalink to &quot;1.3.1「连接池练习」需求&amp;效果&quot;">​</a></h4><blockquote><p>打印连接池对象</p></blockquote><h4 id="_1-3-2「连接池练习」步鄹" tabindex="-1">1.3.2「连接池练习」步鄹 <a class="header-anchor" href="#_1-3-2「连接池练习」步鄹" aria-label="Permalink to &quot;1.3.2「连接池练习」步鄹&quot;">​</a></h4><p>步鄹提示</p><ol><li>参考 1.1.2 1.1.2 管理 Druid 连接池【重点】</li><li>创建 jdbc.properties,将链接信息存入</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    jdbc.driver=com.mysql.jdbc.Driver</span></span>
<span class="line"><span>    jdbc.url=jdbc:mysql://127.0.0.1:3306/db1?useSSL=false</span></span>
<span class="line"><span>    jdbc.username=root</span></span>
<span class="line"><span>    jdbc.password=root</span></span></code></pre></div><ol start="3"><li>加载 properties 进入容器，使用 el 表达式获取值</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;</span></span>
<span class="line"><span>       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>       xmlns:context=&quot;http://www.springframework.org/schema/context&quot;</span></span>
<span class="line"><span>       xsi:schemaLocation=&quot;</span></span>
<span class="line"><span>            http://www.springframework.org/schema/beans</span></span>
<span class="line"><span>            http://www.springframework.org/schema/beans/spring-beans.xsd</span></span>
<span class="line"><span>            http://www.springframework.org/schema/context</span></span>
<span class="line"><span>            http://www.springframework.org/schema/context/spring-context.xsd</span></span>
<span class="line"><span>            &quot;&gt;</span></span>
<span class="line"><span>   &lt;!--classpath*:*.properties  ：  设置加载当前工程类路径和当前工程所依赖的所有jar包中的所有properties文件--&gt;</span></span>
<span class="line"><span>    &lt;context:property-placeholder location=&quot;jdbc.properties&quot; system-properties-mode=&quot;NEVER&quot;/&gt;</span></span>
<span class="line"><span>    &lt;!--    3.使用属性占位符\${}读取properties文件中的属性--&gt;</span></span>
<span class="line"><span>    &lt;!--    说明：idea自动识别\${}加载的属性值，需要手工点击才可以查阅原始书写格式--&gt;</span></span>
<span class="line"><span>    &lt;bean class=&quot;com.alibaba.druid.pool.DruidDataSource&quot;&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;driverClassName&quot; value=&quot;\${jdbc.driver}&quot;/&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;url&quot; value=&quot;\${jdbc.url}&quot;/&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;username&quot; value=&quot;\${jdbc.username}&quot;/&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;password&quot; value=&quot;\${jdbc.password}&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/bean&gt;</span></span>
<span class="line"><span>&lt;/beans&gt;</span></span></code></pre></div><ol start="4"><li>在 main 方法中打印对象</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class App {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        ApplicationContext ctx = new ClassPathXmlApplicationContext(&quot;applicationContext.xml&quot;);</span></span>
<span class="line"><span>        DataSource dataSource = (DataSource) ctx.getBean(&quot;dataSource&quot;);</span></span>
<span class="line"><span>        System.out.println(dataSource);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_2-spring-容器" tabindex="-1">2. Spring 容器 <a class="header-anchor" href="#_2-spring-容器" aria-label="Permalink to &quot;2\\. Spring 容器&quot;">​</a></h2><h3 id="_2-1-spring-核心容器介绍" tabindex="-1">2.1 Spring 核心容器介绍 <a class="header-anchor" href="#_2-1-spring-核心容器介绍" aria-label="Permalink to &quot;2.1 Spring 核心容器介绍&quot;">​</a></h3><p>15 分钟</p><h4 id="_2-1-1「spring-核心容器」核心问题-答案" tabindex="-1">2.1.1「Spring 核心容器」核心问题&amp;答案 <a class="header-anchor" href="#_2-1-1「spring-核心容器」核心问题-答案" aria-label="Permalink to &quot;2.1.1「Spring 核心容器」核心问题&amp;答案&quot;">​</a></h4><p><strong>创建容器有几种方式？</strong></p><ul><li>方式一：类路径加载配置文件</li><li>方式二：文件路径加载配置文件</li></ul><h4 id="_2-1-2-创建容器的方式" tabindex="-1">2.1.2 创建容器的方式 <a class="header-anchor" href="#_2-1-2-创建容器的方式" aria-label="Permalink to &quot;2.1.2 创建容器的方式&quot;">​</a></h4><p>点击查看创建容器的方式</p><ul><li>方式一：类路径加载配置文件</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>ApplicationContext ctx = new ClassPathXmlApplicationContext(&quot;applicationContext.xml&quot;);</span></span></code></pre></div><ul><li>方式二：文件路径加载配置文件</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>ApplicationContext ctx = new FileSystemXmlApplicationContext(&quot;D:\\\\applicationContext.xml&quot;);</span></span></code></pre></div><ul><li>加载多个配置文件</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>ApplicationContext ctx = new ClassPathXmlApplicationContext(&quot;bean1.xml&quot;, &quot;bean2.xml&quot;);</span></span></code></pre></div><h4 id="_2-1-3-获取-bean-对象的方式" tabindex="-1">2.1.3 获取 bean 对象的方式 <a class="header-anchor" href="#_2-1-3-获取-bean-对象的方式" aria-label="Permalink to &quot;2.1.3 获取 bean 对象的方式&quot;">​</a></h4><p>点击查看创建容器的方式</p><ul><li>方式一：使用 bean 名称获取</li></ul><blockquote><p>弊端：需要自己强制类型转换</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>BookDao bookDao = (BookDao) ctx.getBean(&quot;bookDao&quot;);</span></span></code></pre></div><ul><li>方式二：使用 bean 名称获取并指定类型</li></ul><blockquote><p>弊端：暂无，推荐使用</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>BookDao bookDao = ctx.getBean(&quot;bookDao&quot;, BookDao.class);</span></span></code></pre></div><ul><li>方式三：使用 bean 类型获取</li></ul><blockquote><p>弊端：如果 IOC 容器中同类型的 Bean 对象有多个，此处获取会报错</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>BookDao bookDao = ctx.getBean(BookDao.class);</span></span></code></pre></div><p><img src="`+u+'" alt="image-20220413191026729"></p><h3 id="_2-2-容器类层次结构" tabindex="-1">2.2 容器类层次结构 <a class="header-anchor" href="#_2-2-容器类层次结构" aria-label="Permalink to &quot;2.2 容器类层次结构&quot;">​</a></h3><p><img src="'+d+`" alt="image-20210730102842030"></p><h3 id="_2-3-beanfactory-🚀" tabindex="-1">2.3 BeanFactory 🚀 <a class="header-anchor" href="#_2-3-beanfactory-🚀" aria-label="Permalink to &quot;2.3 BeanFactory 🚀&quot;">​</a></h3><ul><li>类路径加载配置文件</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>Resource resources = new ClassPathResource(&quot;applicationContext.xml&quot;);</span></span>
<span class="line"><span>BeanFactory bf = new XmlBeanFactory(resources);</span></span>
<span class="line"><span>BookDao bookDao = bf.getBean(&quot;bookDao&quot;, BookDao.class);</span></span>
<span class="line"><span>bookDao.save();</span></span></code></pre></div><p>总结</p><ul><li>BeanFactory 创建完毕后，所有的 Bean 均为延迟加载 ，也就是说我们调用 getBean()方法获取 Bean 对象时才创建 Bean 对象并返回给我们 👈</li><li>lazy-init=&quot;false&quot; 立退加载， 表示 spring 启动时，立刻进行实例化（lazy-init 设置只对 scope 属性为<strong>singleton</strong>的 bean 起作用）</li><li>lazy-init=&quot;true&quot;&gt; 延迟加载 ,设置为 lazy 的 bean 将不会在 ApplicationContext 启动时提前被实例化，而是在第一次向容器通过 getBean 索取 bean 时实例化的</li></ul><h3 id="_2-4-spring-核心容器总结" tabindex="-1">2.4 Spring 核心容器总结 <a class="header-anchor" href="#_2-4-spring-核心容器总结" aria-label="Permalink to &quot;2.4 Spring 核心容器总结&quot;">​</a></h3><p>5 分钟</p><p>点击查看总结</p><h4 id="_1️⃣-容器相关" tabindex="-1">1️⃣ 容器相关 <a class="header-anchor" href="#_1️⃣-容器相关" aria-label="Permalink to &quot;1️⃣ 容器相关&quot;">​</a></h4><ul><li>BeanFactory 是 IoC 容器的顶层接口，初始化 BeanFactory 对象时，加载的 bean 延迟加载 👈</li><li>ApplicationContext 接口是 Spring 容器的核心接口，初始化时 bean 立即加载</li><li>ApplicationContext 接口提供基础的 bean 操作相关方法，通过其他接口扩展其功能</li><li>ApplicationContext 接口常用初始化类 <ul><li><strong><strong>ClassPathXmlApplicationContext(常用)</strong></strong></li><li>FileSystemXmlApplicationContext</li></ul></li></ul><h4 id="_2️⃣bean-相关" tabindex="-1">2️⃣bean 相关 <a class="header-anchor" href="#_2️⃣bean-相关" aria-label="Permalink to &quot;2️⃣bean 相关&quot;">​</a></h4><p><img src="`+g+'" alt="image-20210730103438742"></p><h4 id="_3️⃣-依赖注入相关" tabindex="-1">3️⃣ 依赖注入相关 <a class="header-anchor" href="#_3️⃣-依赖注入相关" aria-label="Permalink to &quot;3️⃣ 依赖注入相关&quot;">​</a></h4><p><img src="'+h+`" alt="image-20210730103701525"></p><h2 id="_3-spring-注解开发" tabindex="-1">3.Spring 注解开发 <a class="header-anchor" href="#_3-spring-注解开发" aria-label="Permalink to &quot;3.Spring 注解开发&quot;">​</a></h2><h3 id="_3-1-注解开发定义-bean-对象" tabindex="-1">3.1 注解开发定义 Bean 对象 <a class="header-anchor" href="#_3-1-注解开发定义-bean-对象" aria-label="Permalink to &quot;3.1 注解开发定义 Bean 对象&quot;">​</a></h3><p>目的</p><p>xml 配置 Bean 对象有些繁琐，使用注解简化 Bean 对象的定义</p><h4 id="_3-1-1「注解开发定义-bean-对象」核心问题-答案" tabindex="-1">3.1.1「注解开发定义 Bean 对象」核心问题&amp;答案 <a class="header-anchor" href="#_3-1-1「注解开发定义-bean-对象」核心问题-答案" aria-label="Permalink to &quot;3.1.1「注解开发定义 Bean 对象」核心问题&amp;答案&quot;">​</a></h4><p>@Component 注解和@Controller、@Service、@Repository 三个衍生注解有什么区别？</p><p>点击查看答案</p><ul><li>Spring 提供**<code>@Component</code>**注解的三个衍生注解 👈 <ul><li><strong><code>@Controller</code></strong>：用于表现层 bean 定义</li><li><strong><code>@Service</code></strong>：用于业务层 bean 定义</li><li><code>@Repository</code>：用于数据层 bean 定义</li></ul></li></ul><h4 id="_3-1-2-基本使用" tabindex="-1">3.1.2 基本使用 <a class="header-anchor" href="#_3-1-2-基本使用" aria-label="Permalink to &quot;3.1.2 基本使用&quot;">​</a></h4><p>提示</p><ul><li>【第一步】在 applicationContext.xml 中开启 Spring 注解包扫描</li><li>【第二步】在类上使用@Component 注解定义 Bean。</li><li>【第三步】在测试类中获取 Bean 对象</li></ul><h5 id="_1️⃣-在-applicationcontext-xml-中开启-spring-注解包扫描" tabindex="-1">1️⃣ 在 applicationContext.xml 中开启 Spring 注解包扫描 <a class="header-anchor" href="#_1️⃣-在-applicationcontext-xml-中开启-spring-注解包扫描" aria-label="Permalink to &quot;1️⃣ 在 applicationContext.xml 中开启 Spring 注解包扫描&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;</span></span>
<span class="line"><span>       xmlns:context=&quot;http://www.springframework.org/schema/context&quot;</span></span>
<span class="line"><span>       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>       xsi:schemaLocation=&quot;</span></span>
<span class="line"><span>        http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd</span></span>
<span class="line"><span>        http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd&quot;&gt;</span></span>
<span class="line"><span> &lt;!--扫描com.itheima包及其子包下的类中注解--&gt;</span></span>
<span class="line"><span>    &lt;context:component-scan base-package=&quot;com.itheima&quot;/&gt;</span></span>
<span class="line"><span>&lt;/beans&gt;</span></span></code></pre></div><h5 id="_2️⃣-在类上使用-component-注解定义-bean。" tabindex="-1">2️⃣ 在类上使用@Component 注解定义 Bean。 <a class="header-anchor" href="#_2️⃣-在类上使用-component-注解定义-bean。" aria-label="Permalink to &quot;2️⃣ 在类上使用@Component 注解定义 Bean。&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//@Component定义bean</span></span>
<span class="line"><span>@Component(&quot;bookDao&quot;)</span></span>
<span class="line"><span>public class BookDaoImpl implements BookDao {</span></span>
<span class="line"><span>    public void save() {</span></span>
<span class="line"><span>        System.out.println(&quot;book dao save ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class BookServiceImpl implements BookService {</span></span>
<span class="line"><span>    private BookDao bookDao;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setBookDao(BookDao bookDao) {</span></span>
<span class="line"><span>        this.bookDao = bookDao;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void save() {</span></span>
<span class="line"><span>        System.out.println(&quot;book service save ...&quot;);</span></span>
<span class="line"><span>        bookDao.save();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>补充说明：如果@Component 注解没有使用参数指定 Bean 的名称，那么类名首字母小写就是 Bean 在 IOC 容器中的默认名称。例如：BookServiceImpl 对象在 IOC 容器中的名称是 bookServiceImpl。</p></blockquote><h5 id="_3️⃣-在测试类中获取-bean-对象" tabindex="-1">3️⃣ 在测试类中获取 Bean 对象 <a class="header-anchor" href="#_3️⃣-在测试类中获取-bean-对象" aria-label="Permalink to &quot;3️⃣ 在测试类中获取 Bean 对象&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class AppForAnnotation {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        ApplicationContext ctx = new ClassPathXmlApplicationContext(&quot;applicationContext.xml&quot;);</span></span>
<span class="line"><span>        BookDao bookDao = (BookDao) ctx.getBean(&quot;bookDao&quot;);</span></span>
<span class="line"><span>        System.out.println(bookDao);</span></span>
<span class="line"><span>        //按类型获取bean</span></span>
<span class="line"><span>        BookService bookService = ctx.getBean(BookService.class);</span></span>
<span class="line"><span>        System.out.println(bookService);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>注意：在测试类中不要调用 bookService 的 save 方法，因为还没有给 BookServiceImpl 中的 bookDao 赋值，调用 bookService 的 save 方法会出现空指针异常。</p></blockquote><p><strong>运行结果</strong><img src="`+b+`" alt="image-20210730104835746"></p><h4 id="_3-1-3-component-三个衍生注解【掌握】-🍐" tabindex="-1">3.1.3 @Component 三个衍生注解【掌握】 🍐 <a class="header-anchor" href="#_3-1-3-component-三个衍生注解【掌握】-🍐" aria-label="Permalink to &quot;3.1.3 @Component 三个衍生注解【掌握】 🍐&quot;">​</a></h4><ul><li>Spring 提供**<code>@Component</code>**注解的三个衍生注解 <ul><li><strong><code>@Controller</code></strong>：用于表现层 bean 定义</li><li><strong><code>@Service</code></strong>：用于业务层 bean 定义</li><li><strong><code>@Repository</code></strong>：用于数据层 bean 定义</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Repository(&quot;bookDao&quot;)</span></span>
<span class="line"><span>public class BookDaoImpl implements BookDao {</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class BookServiceImpl implements BookService {</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_3-2-纯注解开发模式-🍐-✏️" tabindex="-1">3.2 纯注解开发模式 🍐 ✏️ <a class="header-anchor" href="#_3-2-纯注解开发模式-🍐-✏️" aria-label="Permalink to &quot;3.2 纯注解开发模式 🍐 ✏️&quot;">​</a></h3><h4 id="_3-2-1「纯注解开发模式」核心问题-答案" tabindex="-1">3.2.1「纯注解开发模式」核心问题&amp;答案 <a class="header-anchor" href="#_3-2-1「纯注解开发模式」核心问题-答案" aria-label="Permalink to &quot;3.2.1「纯注解开发模式」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>配置类上使用什么注解表示该类是一个配置类？</li><li>配置类上使用什么注解进行 Spring 注解包扫描？</li></ol><h4 id="_3-2-2-纯注解开发模式介绍" tabindex="-1">3.2.2 纯注解开发模式介绍 <a class="header-anchor" href="#_3-2-2-纯注解开发模式介绍" aria-label="Permalink to &quot;3.2.2 纯注解开发模式介绍&quot;">​</a></h4><p>介绍</p><ul><li>Spring3.0 开启了纯注解开发模式，使用 Java 类替代配置文件，开启了 Spring 快速开发赛道 👈</li><li>Java 类代替 Spring 核心配置文件 <img src="`+m+`" alt="image-20210803192052811"><ul><li><strong>@Configuration</strong>注解用于设定当前类为配置类</li><li><strong>@ComponentScan</strong>注解用于设定扫描路径，此注解只能添加一次，多个数据请用数组格式</li></ul></li></ul><h4 id="_3-2-3-代码演示" tabindex="-1">3.2.3 代码演示 <a class="header-anchor" href="#_3-2-3-代码演示" aria-label="Permalink to &quot;3.2.3 代码演示&quot;">​</a></h4><h5 id="_1️⃣-【第一步】定义配置类代替配置文件" tabindex="-1">1️⃣ <strong>【第一步】定义配置类代替配置文件</strong> <a class="header-anchor" href="#_1️⃣-【第一步】定义配置类代替配置文件" aria-label="Permalink to &quot;1️⃣ **【第一步】定义配置类代替配置文件**&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//声明当前类为Spring配置类</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>//Spring注解扫描，相当于&lt;context:component-scan base-package=&quot;com.itheima&quot;/&gt;</span></span>
<span class="line"><span>@ComponentScan(&quot;com.itheima&quot;)</span></span>
<span class="line"><span>//设置bean扫描路径，多个路径书写为字符串数组格式</span></span>
<span class="line"><span>//@ComponentScan({&quot;com.itheima.service&quot;,&quot;com.itheima.dao&quot;})</span></span>
<span class="line"><span>public class SpringConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_2️⃣-【第二步】在测试类中加载配置类-获取-bean-对象并使用" tabindex="-1">2️⃣ <strong>【第二步】在测试类中加载配置类，获取 Bean 对象并使用</strong> <a class="header-anchor" href="#_2️⃣-【第二步】在测试类中加载配置类-获取-bean-对象并使用" aria-label="Permalink to &quot;2️⃣ **【第二步】在测试类中加载配置类，获取 Bean 对象并使用**&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class AppForAnnotation {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        //AnnotationConfigApplicationContext加载Spring配置类初始化Spring容器</span></span>
<span class="line"><span>        ApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);</span></span>
<span class="line"><span>        BookDao bookDao = (BookDao) ctx.getBean(&quot;bookDao&quot;);</span></span>
<span class="line"><span>        System.out.println(bookDao);</span></span>
<span class="line"><span>        //按类型获取bean</span></span>
<span class="line"><span>        BookService bookService = ctx.getBean(BookService.class);</span></span>
<span class="line"><span>        System.out.println(bookService);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_3-3-注解开发-bean-作用范围和生命周期管理" tabindex="-1">3.3 注解开发 Bean 作用范围和生命周期管理 <a class="header-anchor" href="#_3-3-注解开发-bean-作用范围和生命周期管理" aria-label="Permalink to &quot;3.3 注解开发 Bean 作用范围和生命周期管理&quot;">​</a></h3><h4 id="_3-3-1-「注解开发-bean-作用范围和生命周期管理」核心问题-答案" tabindex="-1">3.3.1 「注解开发 Bean 作用范围和生命周期管理」核心问题&amp;答案 <a class="header-anchor" href="#_3-3-1-「注解开发-bean-作用范围和生命周期管理」核心问题-答案" aria-label="Permalink to &quot;3.3.1 「注解开发 Bean 作用范围和生命周期管理」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>类上使用什么注解定义 bean 作用范围？</li><li>类上使用什么注解定义 定义 bean 生命周期？</li></ol><p>点击查看答案</p><ul><li>使用 <strong>@Scope</strong> 定义 bean 作用范围 👈</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Repository</span></span>
<span class="line"><span>@Scope(&quot;singleton&quot;)</span></span>
<span class="line"><span>public class BookDaoImpl implements BookDao {</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_3-3-2-bean-生命周期注解配置" tabindex="-1">3.3.2 bean 生命周期注解配置 <a class="header-anchor" href="#_3-3-2-bean-生命周期注解配置" aria-label="Permalink to &quot;3.3.2 bean 生命周期注解配置&quot;">​</a></h4><blockquote><p>使用@PostConstruct、@PreDestroy 定义 bean 生命周期</p></blockquote><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Repository</span></span>
<span class="line"><span>@Scope(&quot;singleton&quot;)</span></span>
<span class="line"><span>public class BookDaoImpl implements BookDao {</span></span>
<span class="line"><span>    public BookDaoImpl() {</span></span>
<span class="line"><span>        System.out.println(&quot;book dao constructor ...&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PostConstruct</span></span>
<span class="line"><span>    public void init(){</span></span>
<span class="line"><span>        System.out.println(&quot;book init ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @PreDestroy</span></span>
<span class="line"><span>    public void destroy(){</span></span>
<span class="line"><span>        System.out.println(&quot;book destory ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>注意：@PostConstruct 和@PreDestroy 注解是 jdk 中提供的注解，从 jdk9 开始，jdk 中的 javax.annotation 包被移除了，也就是说这两个注解就用不了了，可以额外导入一下依赖解决这个问题。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;javax.annotation&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;javax.annotation-api&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;1.3.2&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><ol><li>实际开发使用 JDK8 即可，安全。 👈</li><li>理解这句话：因为 Spring 不会破坏原型 bean,因此代码中的任何@PreDestroy 挂钩永远不会被容器调用</li></ol><h3 id="_3-4-注解开发依赖注入-🍐" tabindex="-1">3.4 注解开发依赖注入 🍐 <a class="header-anchor" href="#_3-4-注解开发依赖注入-🍐" aria-label="Permalink to &quot;3.4 注解开发依赖注入 🍐&quot;">​</a></h3><h4 id="_3-4-1-「注解开发依赖注入」核心问题-答案" tabindex="-1">3.4.1 「注解开发依赖注入」核心问题&amp;答案 <a class="header-anchor" href="#_3-4-1-「注解开发依赖注入」核心问题-答案" aria-label="Permalink to &quot;3.4.1 「注解开发依赖注入」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>请描述@Autowired 注解是如何进行自动装配的？</li><li>请描述@Qualifier 注解的作用</li></ol><p>点击查看答案</p><ul><li>@Autowired：注入引用类型，自动装配模式，默认按类型装配 👈</li><li>@Qualifier：自动装配 bean 时按 bean 名称装配 👈</li></ul><h4 id="_3-4-2-使用-autowired-注解开启自动装配模式-按类型" tabindex="-1">3.4.2 使用@Autowired 注解开启自动装配模式（按类型） <a class="header-anchor" href="#_3-4-2-使用-autowired-注解开启自动装配模式-按类型" aria-label="Permalink to &quot;3.4.2 使用@Autowired 注解开启自动装配模式（按类型）&quot;">​</a></h4><blockquote><p>@Autowired：注入引用类型，自动装配模式，默认按类型装配</p></blockquote><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Service</span></span>
<span class="line"><span>public class BookServiceImpl implements BookService {</span></span>
<span class="line"><span>    //@Autowired：注入引用类型，自动装配模式，默认按类型装配</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private BookDao bookDao;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void save() {</span></span>
<span class="line"><span>        System.out.println(&quot;book service save ...&quot;);</span></span>
<span class="line"><span>        bookDao.save();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>说明：不管是使用配置文件还是配置类，都必须进行对应的 Spring 注解包扫描才可以使用。@Autowired 默认按照类型自动装配，如果 IOC 容器中同类的 Bean 有多个，那么默认按照变量名和 Bean 的名称匹配，建议使用@Qualifier 注解指定要装配的 bean 名称</p></blockquote><p><strong>注意：自动装配基于反射设计创建对象并暴力反射对应属性为私有属性初始化数据，因此无需提供 setter 方法。</strong></p><p>联想：xml 的自动注入：autowire=&quot;byType&quot;</p><h4 id="_3-4-3-使用-qualifier-注解指定要装配的-bean-名称" tabindex="-1">3.4.3 使用@Qualifier 注解指定要装配的 bean 名称 <a class="header-anchor" href="#_3-4-3-使用-qualifier-注解指定要装配的-bean-名称" aria-label="Permalink to &quot;3.4.3 使用@Qualifier 注解指定要装配的 bean 名称&quot;">​</a></h4><blockquote><p>目的：解决 IOC 容器中同类型 Bean 有多个装配哪一个的问题</p></blockquote><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Service</span></span>
<span class="line"><span>public class BookServiceImpl implements BookService {</span></span>
<span class="line"><span>    //@Autowired：注入引用类型，自动装配模式，默认按类型装配</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    //@Qualifier：自动装配bean时按bean名称装配</span></span>
<span class="line"><span>    @Qualifier(&quot;bookDao&quot;)</span></span>
<span class="line"><span>    private BookDao bookDao;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void save() {</span></span>
<span class="line"><span>        System.out.println(&quot;book service save ...&quot;);</span></span>
<span class="line"><span>        bookDao.save();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>注意：@Qualifier 注解无法单独使用，必须配合@Autowired 注解使用</strong></p><h4 id="_3-4-4-使用-value-实现简单类型注入" tabindex="-1">3.4.4 使用@Value 实现简单类型注入 <a class="header-anchor" href="#_3-4-4-使用-value-实现简单类型注入" aria-label="Permalink to &quot;3.4.4 使用@Value 实现简单类型注入&quot;">​</a></h4><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Repository(&quot;bookDao&quot;)</span></span>
<span class="line"><span>public class BookDaoImpl implements BookDao {</span></span>
<span class="line"><span>    //@Value：注入简单类型（无需提供set方法）</span></span>
<span class="line"><span>    @Value(&quot;\${name}&quot;)</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void save() {</span></span>
<span class="line"><span>        System.out.println(&quot;book dao save ...&quot; + name);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>以上@Value 注解中使用\${name}从属性文件中读取 name 值，那么就需要在配置类或者配置文件中加载属性文件。 👈</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ComponentScan(&quot;com.itheima&quot;)</span></span>
<span class="line"><span>//@PropertySource加载properties配置文件</span></span>
<span class="line"><span>@PropertySource({&quot;classpath:jdbc.properties&quot;}) //{}可以省略不写</span></span>
<span class="line"><span>public class SpringConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注意：可以使用下述配置吗？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ComponentScan(&quot;com.itheima&quot;)</span></span>
<span class="line"><span>//@PropertySource加载properties配置文件</span></span>
<span class="line"><span>@PropertySource({&quot;classpath:*.properties&quot;})</span></span>
<span class="line"><span>public class SpringConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+q+'" alt="image-20220413201252862"></p><p><strong>注意：@PropertySource()中加载多文件请使用数组格式配置，不允许使用通配符\\*</strong></p><ol><li>@PropertySource()中加载多文件请使用数组格式配置，不允许使用通配符*</li><li>@Value(&quot;${name}&quot;) private String name;</li><li>//@Autowired：注入引用类型，自动装配模式，默认按类型装配 @Autowired private BookDao bookDao;</li></ol><h3 id="_3-5-注解开发管理第三方-bean-🍐" tabindex="-1">3.5 注解开发管理第三方 Bean 🍐 <a class="header-anchor" href="#_3-5-注解开发管理第三方-bean-🍐" aria-label="Permalink to &quot;3.5 注解开发管理第三方 Bean 🍐&quot;">​</a></h3><h4 id="_3-5-1-「注解开发管理第三方-bean」核心问题-答案" tabindex="-1">3.5.1 「注解开发管理第三方 Bean」核心问题&amp;答案 <a class="header-anchor" href="#_3-5-1-「注解开发管理第三方-bean」核心问题-答案" aria-label="Permalink to &quot;3.5.1 「注解开发管理第三方 Bean」核心问题&amp;答案&quot;">​</a></h4><p>第三方 Bean 配置注解是什么？</p><p>点击查看答案</p><ul><li>@Bean：表示当前方法的返回值是一个 bean 对象，添加到 IOC 容器中 👈</li></ul><p><img src="'+v+`" alt="image-20220414180852105"></p><h4 id="_3-5-2-「解开发管理第三方-bean」步鄹" tabindex="-1">3.5.2 「解开发管理第三方 Bean」步鄹 <a class="header-anchor" href="#_3-5-2-「解开发管理第三方-bean」步鄹" aria-label="Permalink to &quot;3.5.2 「解开发管理第三方 Bean」步鄹&quot;">​</a></h4><h5 id="_1️⃣-【第一步】单独定义配置类" tabindex="-1">1️⃣ <strong>【第一步】单独定义配置类</strong> <a class="header-anchor" href="#_1️⃣-【第一步】单独定义配置类" aria-label="Permalink to &quot;1️⃣ **【第一步】单独定义配置类**&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class JdbcConfig {</span></span>
<span class="line"><span>    //@Bean：表示当前方法的返回值是一个bean对象，添加到IOC容器中</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public DataSource dataSource(){</span></span>
<span class="line"><span>        DruidDataSource ds = new DruidDataSource();</span></span>
<span class="line"><span>        ds.setDriverClassName(&quot;com.mysql.jdbc.Driver&quot;);</span></span>
<span class="line"><span>        ds.setUrl(&quot;jdbc:mysql://localhost:3306/spring_db&quot;);</span></span>
<span class="line"><span>        ds.setUsername(&quot;root&quot;);</span></span>
<span class="line"><span>        ds.setPassword(&quot;root&quot;);</span></span>
<span class="line"><span>        return ds;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_2️⃣-【第二步】将独立的配置类加入核心配置" tabindex="-1">2️⃣ <strong>【第二步】将独立的配置类加入核心配置</strong> <a class="header-anchor" href="#_2️⃣-【第二步】将独立的配置类加入核心配置" aria-label="Permalink to &quot;2️⃣ **【第二步】将独立的配置类加入核心配置**&quot;">​</a></h5><ul><li>方式 1：@Import 注解导入式 👈</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ComponentScan(&quot;com.itheima&quot;)</span></span>
<span class="line"><span>//@Import:导入配置信息</span></span>
<span class="line"><span>@Import({JdbcConfig.class})</span></span>
<span class="line"><span>public class SpringConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>方式 2：@ComponentScan 扫描式 🚀</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ComponentScan({&quot;com.itheima.config&quot;,&quot;com.itheima.service&quot;,&quot;com.itheima.dao&quot;})  //只要com.itheima.config包扫到了就行，三个包可以合并写成com.itheima</span></span>
<span class="line"><span>public class SpringConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_3-6-注解开发为第三方-bean-注入资源-🍐" tabindex="-1">3.6 注解开发为第三方 Bean 注入资源 🍐 <a class="header-anchor" href="#_3-6-注解开发为第三方-bean-注入资源-🍐" aria-label="Permalink to &quot;3.6 注解开发为第三方 Bean 注入资源 🍐&quot;">​</a></h3><h4 id="_3-6-1-「注解开发为第三方-bean-注入资源」核心问题-答案" tabindex="-1">3.6.1 「注解开发为第三方 Bean 注入资源」核心问题&amp;答案 <a class="header-anchor" href="#_3-6-1-「注解开发为第三方-bean-注入资源」核心问题-答案" aria-label="Permalink to &quot;3.6.1 「注解开发为第三方 Bean 注入资源」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>配置类中如何注入简单类型数据，如何注入引用类型数据？</li></ol><p>点击查看答案</p><ul><li>@Value(&quot;xxx&quot;) 注入简单类型 👈</li><li>引用类型注入只需要为 bean 定义方法设置形参即可，容器会根据类型自动装配对象</li></ul><h4 id="_3-6-2-简单类型依赖注入" tabindex="-1">3.6.2 简单类型依赖注入 <a class="header-anchor" href="#_3-6-2-简单类型依赖注入" aria-label="Permalink to &quot;3.6.2 简单类型依赖注入&quot;">​</a></h4><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class JdbcConfig {</span></span>
<span class="line"><span>    //1.定义一个方法获得要管理的对象</span></span>
<span class="line"><span>    @Value(&quot;com.mysql.jdbc.Driver&quot;)</span></span>
<span class="line"><span>    private String driver;</span></span>
<span class="line"><span>    @Value(&quot;jdbc:mysql://localhost:3306/spring_db&quot;)</span></span>
<span class="line"><span>    private String url;</span></span>
<span class="line"><span>    @Value(&quot;root&quot;)</span></span>
<span class="line"><span>    private String userName;</span></span>
<span class="line"><span>    @Value(&quot;root&quot;)</span></span>
<span class="line"><span>    private String password;</span></span>
<span class="line"><span>    //2.@Bean：表示当前方法的返回值是一个bean对象，添加到IOC容器中</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public DataSource dataSource(){</span></span>
<span class="line"><span>        DruidDataSource ds = new DruidDataSource();</span></span>
<span class="line"><span>        ds.setDriverClassName(driver);</span></span>
<span class="line"><span>        ds.setUrl(url);</span></span>
<span class="line"><span>        ds.setUsername(userName);</span></span>
<span class="line"><span>        ds.setPassword(password);</span></span>
<span class="line"><span>        return ds;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>说明：如果@Value()中使用了 EL 表达式读取 properties 属性文件中的内容，那么就需要加载 properties 属性文件。</p></blockquote><h4 id="_3-6-3-引用类型依赖注入" tabindex="-1">3.6.3 引用类型依赖注入 <a class="header-anchor" href="#_3-6-3-引用类型依赖注入" aria-label="Permalink to &quot;3.6.3 引用类型依赖注入&quot;">​</a></h4><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//Spring会自动从IOC容器中找到BookDao对象赋值给参数bookDao变量，如果没有就会报错。</span></span>
<span class="line"><span>@Bean</span></span>
<span class="line"><span>public DataSource dataSource(BookDao bookDao){</span></span>
<span class="line"><span>    System.out.println(bookDao);</span></span>
<span class="line"><span>    DruidDataSource ds = new DruidDataSource();</span></span>
<span class="line"><span>    ds.setDriverClassName(driver);</span></span>
<span class="line"><span>    ds.setUrl(url);</span></span>
<span class="line"><span>    ds.setUsername(userName);</span></span>
<span class="line"><span>    ds.setPassword(password);</span></span>
<span class="line"><span>    return ds;</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>说明：引用类型注入只需要为 bean 定义方法设置形参即可，容器会根据类型自动装配对象</p></blockquote><h3 id="_3-7-第三方-bean-注入练习-✏️" tabindex="-1">3.7 第三方 Bean 注入练习 ✏️ <a class="header-anchor" href="#_3-7-第三方-bean-注入练习-✏️" aria-label="Permalink to &quot;3.7 第三方 Bean 注入练习 ✏️&quot;">​</a></h3><p>10 分钟</p><h4 id="_3-7-0「第三方-bean-注入」目的" tabindex="-1">3.7 .0「第三方 Bean 注入」目的 <a class="header-anchor" href="#_3-7-0「第三方-bean-注入」目的" aria-label="Permalink to &quot;3.7 .0「第三方 Bean 注入」目的&quot;">​</a></h4><blockquote><p>熟悉第三方 Bean 注入到 IoC 容器中</p></blockquote><h4 id="_3-7-1「第三方-bean-注入」需求-效果" tabindex="-1">3.7 .1「第三方 Bean 注入」需求&amp;效果 <a class="header-anchor" href="#_3-7-1「第三方-bean-注入」需求-效果" aria-label="Permalink to &quot;3.7 .1「第三方 Bean 注入」需求&amp;效果&quot;">​</a></h4><blockquote><p>从 Ioc 容器中，按类型获取 Bean 并且打印在控制台</p></blockquote><h4 id="_3-7-2「第三方-bean-注入」步鄹" tabindex="-1">3.7 .2「第三方 Bean 注入」步鄹 <a class="header-anchor" href="#_3-7-2「第三方-bean-注入」步鄹" aria-label="Permalink to &quot;3.7 .2「第三方 Bean 注入」步鄹&quot;">​</a></h4><ul><li>下载飞秋的 spring02-共享资料中的 spring_14_annotation_third_bean_managertest 压缩包</li><li>导入到项目中</li><li>查看项目中的 todo 提示</li><li>然后配置加载 DataSource，最后运行 app 主类，将数据库中的数据打印在控制台</li><li>截图发到飞秋群中</li></ul><h3 id="_3-8-注解开发总结" tabindex="-1">3.8 注解开发总结 <a class="header-anchor" href="#_3-8-注解开发总结" aria-label="Permalink to &quot;3.8 注解开发总结&quot;">​</a></h3><p><img src="`+k+'" alt="image-20210730113548708"></p><h2 id="_4-spring-整合其他技术" tabindex="-1">4. Spring 整合其他技术 <a class="header-anchor" href="#_4-spring-整合其他技术" aria-label="Permalink to &quot;4\\. Spring 整合其他技术&quot;">​</a></h2><h3 id="_4-1-spring-整合-mybatis-❤️-✏️" tabindex="-1">4.1 Spring 整合 mybatis ❤️ ✏️ <a class="header-anchor" href="#_4-1-spring-整合-mybatis-❤️-✏️" aria-label="Permalink to &quot;4.1 Spring 整合 mybatis ❤️ ✏️&quot;">​</a></h3><p>7 分钟</p><h4 id="_4-1-1-「spring-整合-mybatis」核心问题-答案" tabindex="-1">4.1.1 「Spring 整合 mybatis」核心问题&amp;答案 <a class="header-anchor" href="#_4-1-1-「spring-整合-mybatis」核心问题-答案" aria-label="Permalink to &quot;4.1.1 「Spring 整合 mybatis」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>Mybatis 进行数据层操作的核心对象是谁？</li><li>Spring 整合 mybatis 需要管理配置哪两个 Bean，这两个 Bean 作用分别是什么？</li></ol><h4 id="_4-1-2-mybatis-程序核心对象分析" tabindex="-1">4.1.2 MyBatis 程序核心对象分析 <a class="header-anchor" href="#_4-1-2-mybatis-程序核心对象分析" aria-label="Permalink to &quot;4.1.2 MyBatis 程序核心对象分析&quot;">​</a></h4><p>点击查看MyBatis 程序核心对象分析</p><p><img src="'+y+'" alt="image-20210730114303147"></p><p>整合 MyBatis 思路</p><ul><li>使用 SqlSessionFactoryBean 封装 SqlSessionFactory 需要的环境信息</li></ul><p><img src="'+f+'" alt="image-20210730114342060"></p><ul><li>使用 MapperScannerConfigurer 加载 Dao 接口，创建代理对象保存到 IOC 容器中</li></ul><p><img src="'+C+`" alt="image-20210730114356175"></p><h4 id="_4-1-2-代码实现" tabindex="-1">4.1.2 代码实现 <a class="header-anchor" href="#_4-1-2-代码实现" aria-label="Permalink to &quot;4.1.2 代码实现&quot;">​</a></h4><h5 id="【前置工作】" tabindex="-1">【前置工作】 <a class="header-anchor" href="#【前置工作】" aria-label="Permalink to &quot;【前置工作】&quot;">​</a></h5><ol><li>准备数据库数据和创建 domain 下的 Account 类</li><li>在 pom.xml 中添加 spring-context、druid、mybatis、mysql-connector-java 等基础依赖。</li><li>准备 service 和 dao 层基础代码</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>DROP TABLE IF EXISTS \`account\`;</span></span>
<span class="line"><span>CREATE TABLE \`account\` (</span></span>
<span class="line"><span>  \`id\` int(11) NOT NULL AUTO_INCREMENT,</span></span>
<span class="line"><span>  \`name\` varchar(10) DEFAULT NULL,</span></span>
<span class="line"><span>  \`money\` double(10,2) DEFAULT NULL,</span></span>
<span class="line"><span>  PRIMARY KEY (\`id\`)</span></span>
<span class="line"><span>) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- ----------------------------</span></span>
<span class="line"><span>-- Records of account</span></span>
<span class="line"><span>-- ----------------------------</span></span>
<span class="line"><span>INSERT INTO \`account\` VALUES (&#39;1&#39;, &#39;张三&#39;, &#39;2000.00&#39;);</span></span>
<span class="line"><span>INSERT INTO \`account\` VALUES (&#39;2&#39;, &#39;李四&#39;, &#39;6000.00&#39;);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// domain包下</span></span>
<span class="line"><span>public class Account implements Serializable {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Integer id;</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private Double money;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Integer getId() {</span></span>
<span class="line"><span>        return id;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setId(Integer id) {</span></span>
<span class="line"><span>        this.id = id;</span></span>
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
<span class="line"><span>    public Double getMoney() {</span></span>
<span class="line"><span>        return money;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setMoney(Double money) {</span></span>
<span class="line"><span>        this.money = money;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String toString() {</span></span>
<span class="line"><span>        return &quot;Account{&quot; +</span></span>
<span class="line"><span>                &quot;id=&quot; + id +</span></span>
<span class="line"><span>                &quot;, name=&#39;&quot; + name + &#39;\\&#39;&#39; +</span></span>
<span class="line"><span>                &quot;, money=&quot; + money +</span></span>
<span class="line"><span>                &#39;}&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// service包下</span></span>
<span class="line"><span>public interface AccountService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void save(Account account);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void delete(Integer id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void update(Account account);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    List&lt;Account&gt; findAll();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Account findById(Integer id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// service/impl包下</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class AccountServiceImpl implements AccountService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private AccountDao accountDao;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void save(Account account) {</span></span>
<span class="line"><span>        accountDao.save(account);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void update(Account account){</span></span>
<span class="line"><span>        accountDao.update(account);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void delete(Integer id) {</span></span>
<span class="line"><span>        accountDao.delete(id);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Account findById(Integer id) {</span></span>
<span class="line"><span>        return accountDao.findById(id);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public List&lt;Account&gt; findAll() {</span></span>
<span class="line"><span>        return accountDao.findAll();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// dao包下</span></span>
<span class="line"><span>public interface AccountDao {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Insert(&quot;insert into tbl_account(name,money)values(#{name},#{money})&quot;)</span></span>
<span class="line"><span>    void save(Account account);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Delete(&quot;delete from tbl_account where id = #{id} &quot;)</span></span>
<span class="line"><span>    void delete(Integer id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Update(&quot;update tbl_account set name = #{name} , money = #{money} where id = #{id} &quot;)</span></span>
<span class="line"><span>    void update(Account account);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Select(&quot;select * from tbl_account&quot;)</span></span>
<span class="line"><span>    List&lt;Account&gt; findAll();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Select(&quot;select * from tbl_account where id = #{id} &quot;)</span></span>
<span class="line"><span>    Account findById(Integer id);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="【第一步】导入-spring-整合-mybatis-依赖" tabindex="-1"><strong>【第一步】导入 Spring 整合 Mybatis 依赖</strong> <a class="header-anchor" href="#【第一步】导入-spring-整合-mybatis-依赖" aria-label="Permalink to &quot;**【第一步】导入 Spring 整合 Mybatis 依赖**&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;!-- 连接池 --&gt;</span></span>
<span class="line"><span> &lt;dependency&gt;</span></span>
<span class="line"><span>      &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span>      &lt;artifactId&gt;druid&lt;/artifactId&gt;</span></span>
<span class="line"><span>      &lt;version&gt;1.1.16&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;!-- mybaits --&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>      &lt;groupId&gt;org.mybatis&lt;/groupId&gt;</span></span>
<span class="line"><span>      &lt;artifactId&gt;mybatis&lt;/artifactId&gt;</span></span>
<span class="line"><span>      &lt;version&gt;3.5.6&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;!-- mysql驱动 --&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>      &lt;groupId&gt;mysql&lt;/groupId&gt;</span></span>
<span class="line"><span>      &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;</span></span>
<span class="line"><span>      &lt;version&gt;5.1.47&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;!--spring操作jdbc的依赖 --&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-jdbc&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;5.2.10.RELEASE&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;!--spring操作mybaits的依赖  注意版本不要改--&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.mybatis&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;mybatis-spring&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;1.3.0&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><h5 id="【第二步】创建-jdbcconfig-配置-datasource-数据源" tabindex="-1"><strong>【第二步】创建 JdbcConfig 配置 DataSource 数据源</strong> <a class="header-anchor" href="#【第二步】创建-jdbcconfig-配置-datasource-数据源" aria-label="Permalink to &quot;**【第二步】创建 JdbcConfig 配置 DataSource 数据源**&quot;">​</a></h5><ul><li>properties 文件中配置数据源信息</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>jdbc.driver=com.mysql.jdbc.Driver</span></span>
<span class="line"><span>jdbc.url=jdbc:mysql://localhost:3306/spring_db?useSSL=false</span></span>
<span class="line"><span>jdbc.username=root</span></span>
<span class="line"><span>jdbc.password=root</span></span></code></pre></div><ul><li>JdbcConfig 配置 DataSource</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class JdbcConfig {</span></span>
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
<span class="line"><span>    public DataSource dataSource(){</span></span>
<span class="line"><span>        DruidDataSource ds = new DruidDataSource();</span></span>
<span class="line"><span>        ds.setDriverClassName(driver);</span></span>
<span class="line"><span>        ds.setUrl(url);</span></span>
<span class="line"><span>        ds.setUsername(userName);</span></span>
<span class="line"><span>        ds.setPassword(password);</span></span>
<span class="line"><span>        return ds;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="【第三步】创建-mybatisconfig-整合-mybatis" tabindex="-1"><strong>【第三步】创建 MybatisConfig 整合 mybatis</strong> <a class="header-anchor" href="#【第三步】创建-mybatisconfig-整合-mybatis" aria-label="Permalink to &quot;**【第三步】创建 MybatisConfig 整合 mybatis**&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class MybatisConfig {</span></span>
<span class="line"><span>    //定义bean，SqlSessionFactoryBean，用于产生SqlSessionFactory对象</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public SqlSessionFactoryBean sqlSessionFactory(DataSource dataSource){</span></span>
<span class="line"><span>        SqlSessionFactoryBean ssfb = new SqlSessionFactoryBean();</span></span>
<span class="line"><span>        ssfb.setTypeAliasesPackage(&quot;com.itheima.domain&quot;);</span></span>
<span class="line"><span>        ssfb.setDataSource(dataSource);</span></span>
<span class="line"><span>        return ssfb;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //定义bean，返回MapperScannerConfigurer对象</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public MapperScannerConfigurer mapperScannerConfigurer(){</span></span>
<span class="line"><span>        MapperScannerConfigurer msc = new MapperScannerConfigurer();</span></span>
<span class="line"><span>        msc.setBasePackage(&quot;com.itheima.dao&quot;);</span></span>
<span class="line"><span>        return msc;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="【第四步】创建-springconfig-主配置类进行包扫描和加载其他配置类" tabindex="-1"><strong>【第四步】创建 SpringConfig 主配置类进行包扫描和加载其他配置类</strong> <a class="header-anchor" href="#【第四步】创建-springconfig-主配置类进行包扫描和加载其他配置类" aria-label="Permalink to &quot;**【第四步】创建 SpringConfig 主配置类进行包扫描和加载其他配置类**&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ComponentScan(&quot;com.itheima&quot;)</span></span>
<span class="line"><span>//@PropertySource：加载类路径jdbc.properties文件</span></span>
<span class="line"><span>@PropertySource(&quot;classpath:jdbc.properties&quot;)</span></span>
<span class="line"><span>@Import({JdbcConfig.class,MybatisConfig.class})</span></span>
<span class="line"><span>public class SpringConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="【第五步】定义测试类进行测试" tabindex="-1"><strong>【第五步】定义测试类进行测试</strong> <a class="header-anchor" href="#【第五步】定义测试类进行测试" aria-label="Permalink to &quot;**【第五步】定义测试类进行测试**&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class App {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        ApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        AccountService accountService = ctx.getBean(AccountService.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Account ac = accountService.findById(1);</span></span>
<span class="line"><span>        System.out.println(ac);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-2-spring-整合-junit-单元测试❤️-✏️" tabindex="-1">4.2 Spring 整合 Junit 单元测试❤️ ✏️ <a class="header-anchor" href="#_4-2-spring-整合-junit-单元测试❤️-✏️" aria-label="Permalink to &quot;4.2 Spring 整合 Junit 单元测试❤️ ✏️&quot;">​</a></h3><h4 id="_4-2-1-「spring-整合-junit-单元测试」核心问题-答案" tabindex="-1">4.2.1 「Spring 整合 Junit 单元测试」核心问题&amp;答案 <a class="header-anchor" href="#_4-2-1-「spring-整合-junit-单元测试」核心问题-答案" aria-label="Permalink to &quot;4.2.1 「Spring 整合 Junit 单元测试」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>Spring 整合 Junit 的两个注解作用分别是什么？</li></ol><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//使用Spring整合Junit专用的类加载器</span></span>
<span class="line"><span>@RunWith(SpringJUnit4ClassRunner.class)</span></span>
<span class="line"><span>//【加载配置文件或者配置类</span></span>
<span class="line"><span>@ContextConfiguration(classes = {SpringConfig.class}) //加载配置类</span></span></code></pre></div><h4 id="【第一步】导入整合的依赖坐标-spring-test" tabindex="-1">【第一步】导入整合的依赖坐标 spring-test <a class="header-anchor" href="#【第一步】导入整合的依赖坐标-spring-test" aria-label="Permalink to &quot;【第一步】导入整合的依赖坐标 spring-test&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;!--junit--&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;junit&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;junit&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;4.12&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;!--spring整合junit--&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>  &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>
<span class="line"><span>  &lt;artifactId&gt;spring-test&lt;/artifactId&gt;</span></span>
<span class="line"><span>  &lt;version&gt;5.1.9.RELEASE&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><h4 id="【第三步】使用-spring-整合-junit-专用的类加载器以及加载配置文件或者配置类" tabindex="-1">【第三步】使用 Spring 整合 Junit 专用的类加载器以及加载配置文件或者配置类 <a class="header-anchor" href="#【第三步】使用-spring-整合-junit-专用的类加载器以及加载配置文件或者配置类" aria-label="Permalink to &quot;【第三步】使用 Spring 整合 Junit 专用的类加载器以及加载配置文件或者配置类&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//【第二步】使用Spring整合Junit专用的类加载器</span></span>
<span class="line"><span>@RunWith(SpringJUnit4ClassRunner.class)</span></span>
<span class="line"><span>//【第三步】加载配置文件或者配置类</span></span>
<span class="line"><span>@ContextConfiguration(classes = {SpringConfiguration.class}) //加载配置类</span></span>
<span class="line"><span>//@ContextConfiguration(locations={&quot;classpath:applicationContext.xml&quot;})//加载配置文件</span></span>
<span class="line"><span>public class AccountServiceTest {</span></span>
<span class="line"><span>    //支持自动装配注入bean</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private AccountService accountService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testFindById(){</span></span>
<span class="line"><span>        System.out.println(accountService.findById(1));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testFindAll(){</span></span>
<span class="line"><span>        System.out.println(accountService.findAll());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>注意：junit 的依赖至少要是 4.12 版本,可以是 4.13 等版本,否则出现如下异常：</strong></p><p><img src="`+S+'" alt="image-20200831155517797"></p>',306),D=[x];function B(w,P,I,j,A,E){return n(),s("div",null,D)}const L=a(_,[["render",B]]);export{R as __pageData,L as default};
