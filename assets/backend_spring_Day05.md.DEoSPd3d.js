import{_ as a,c as n,o as p,a4 as l}from"./chunks/framework.-JfgED0h.js";const e="/docs/assets/image-20220418221028512.DL9sjtcF.png",i="/docs/assets/image-20210805164125741.DPZcqRRr.png",t="/docs/assets/image-20210805165801606.CDD9yF82.png",o="/docs/assets/2022-09-01-19-43-31.Cvz2apvG.png",c="/docs/assets/2022-09-01-21-54-27._sfsyBXp.png",r="/docs/assets/2022-09-01-22-03-57.BxK5zDrN.png",d="/docs/assets/image-20210805172011686.BBN1y8bd.png",u="/docs/assets/2022-09-01-20-07-12.BdWB5kMG.png",h="/docs/assets/image-20210805171924452.jfgwm0Bx.png",g="/docs/assets/image-20210805173815730.Blmz4VkW.png",b="/docs/assets/2022-09-01-22-29-11.Cp1GdZNX.png",s="/docs/assets/2022-09-01-22-36-35.BZhVPAMY.png",k="/docs/assets/image-20210805175445422.BdBREnXk.png",m="/docs/assets/image-20210805175539717.B8QkvKLc.png",q="/docs/assets/image-20210805180846313.APn4_4Qj.png",v="/docs/assets/image-20210805181537718.DbfP-2gU.png",P=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"backend/spring/Day05.md","filePath":"backend/spring/Day05.md"}'),f={name:"backend/spring/Day05.md"},y=l('<h2 id="_1-ssm-整合【重点】❤️" tabindex="-1">1. SSM 整合【重点】❤️ <a class="header-anchor" href="#_1-ssm-整合【重点】❤️" aria-label="Permalink to &quot;1\\. SSM 整合【重点】❤️&quot;">​</a></h2><h3 id="_1-1-ssm-整合配置" tabindex="-1">1.1 SSM 整合配置 <a class="header-anchor" href="#_1-1-ssm-整合配置" aria-label="Permalink to &quot;1.1 SSM 整合配置&quot;">​</a></h3><p>16 分钟</p><h4 id="_1-1-1-「ssm-整合配置」核心问题-答案" tabindex="-1">1.1.1 「SSM 整合配置」核心问题&amp;答案 <a class="header-anchor" href="#_1-1-1-「ssm-整合配置」核心问题-答案" aria-label="Permalink to &quot;1.1.1 「SSM 整合配置」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>请描述<strong>SSM 整合流程</strong>中各个配置类的作用？</li></ol><p>点击查看答案</p><ol><li>创建工程</li><li>SSM 整合 <ul><li>Spring <ul><li>SpringConfig</li></ul></li><li>MyBatis <ul><li>MybatisConfig</li><li>JdbcConfig</li><li>jdbc.properties</li></ul></li><li>SpringMVC <ul><li>ServletConfig</li><li>SpringMvcConfig</li></ul></li></ul></li><li>功能模块 <ul><li>表与实体类</li><li>dao（接口+自动代理）</li><li>service（接口+实现类） <ul><li>业务层接口测试（整合 JUnit）</li></ul></li><li>controller <ul><li>表现层接口测试（PostMan 或者 Apifox）</li></ul></li></ul></li></ol><p><img src="'+e+'" alt="image-20220418221028512"></p><h4 id="_1-2-2-ssm-整合配置" tabindex="-1">1.2.2 SSM 整合配置 <a class="header-anchor" href="#_1-2-2-ssm-整合配置" aria-label="Permalink to &quot;1.2.2 SSM 整合配置&quot;">​</a></h4><h5 id="创建工程-添加依赖和插件" tabindex="-1">创建工程，添加依赖和插件 <a class="header-anchor" href="#创建工程-添加依赖和插件" aria-label="Permalink to &quot;创建工程，添加依赖和插件&quot;">​</a></h5><p>点击查看代码</p><ul><li><strong>创建工程</strong></li></ul><p><img src="'+i+`" alt="image-20220418221028512"></p><ul><li><strong>添加依赖</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;dependencies&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-webmvc&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;5.2.10.RELEASE&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-jdbc&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;5.2.10.RELEASE&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-test&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;5.2.10.RELEASE&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.mybatis&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;mybatis&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;3.5.6&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.mybatis&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;mybatis-spring&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;1.3.0&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;mysql&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;5.1.47&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;druid&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;1.1.16&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;junit&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;junit&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;4.12&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;scope&gt;test&lt;/scope&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;javax.servlet&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;javax.servlet-api&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;3.1.0&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;scope&gt;provided&lt;/scope&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;com.fasterxml.jackson.core&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;jackson-databind&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;2.9.0&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;/dependencies&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;build&gt;</span></span>
<span class="line"><span>    &lt;plugins&gt;</span></span>
<span class="line"><span>        &lt;plugin&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.apache.tomcat.maven&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;tomcat7-maven-plugin&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;2.1&lt;/version&gt;</span></span>
<span class="line"><span>            &lt;configuration&gt;</span></span>
<span class="line"><span>                &lt;port&gt;80&lt;/port&gt;</span></span>
<span class="line"><span>                &lt;path&gt;/&lt;/path&gt;</span></span>
<span class="line"><span>            &lt;/configuration&gt;</span></span>
<span class="line"><span>        &lt;/plugin&gt;</span></span>
<span class="line"><span>    &lt;/plugins&gt;</span></span>
<span class="line"><span>&lt;/build&gt;</span></span></code></pre></div><h5 id="spring-整合-mybatis" tabindex="-1">Spring 整合 Mybatis <a class="header-anchor" href="#spring-整合-mybatis" aria-label="Permalink to &quot;Spring 整合 Mybatis&quot;">​</a></h5><h5 id="_1️⃣-创建数据库和表" tabindex="-1">1️⃣ 创建数据库和表 <a class="header-anchor" href="#_1️⃣-创建数据库和表" aria-label="Permalink to &quot;1️⃣ 创建数据库和表&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 创建ssm_db数据库</span></span>
<span class="line"><span>CREATE DATABASE IF NOT EXISTS ssm_db CHARACTER SET utf8;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 使用ssm_db数据库</span></span>
<span class="line"><span>USE ssm_db;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 创建tbl_book表</span></span>
<span class="line"><span>CREATE TABLE tbl_book(</span></span>
<span class="line"><span>    id INT PRIMARY KEY AUTO_INCREMENT, -- 图书编号</span></span>
<span class="line"><span>    TYPE VARCHAR(100), -- 图书类型</span></span>
<span class="line"><span>    NAME VARCHAR(100), -- 图书名称</span></span>
<span class="line"><span>    description VARCHAR(100) -- 图书描述</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>-- 添加初始化数据</span></span>
<span class="line"><span>INSERT INTO tbl_book VALUES(NULL,&#39;计算机理论&#39;,&#39;Spring实战 第5版&#39;,&#39;Spring入门经典教材，深入理解Spring原理技术内幕&#39;);</span></span>
<span class="line"><span>INSERT INTO tbl_book VALUES(NULL,&#39;计算机理论&#39;,&#39;Spring 5核心原理与30个类手写实战&#39;,&#39;十年沉淀之作,手写Spring精华思想&#39;);</span></span>
<span class="line"><span>INSERT INTO tbl_book VALUES(NULL,&#39;计算机理论&#39;,&#39;Spring 5设计模式&#39;,&#39;深入Spring源码剖析,Spring源码蕴含的10大设计模式&#39;);</span></span>
<span class="line"><span>INSERT INTO tbl_book VALUES(NULL,&#39;市场营销&#39;,&#39;直播就该这么做:主播高效沟通实战指南&#39;,&#39;李子柒、李佳琦、薇娅成长为网红的秘密都在书中&#39;);</span></span>
<span class="line"><span>INSERT INTO tbl_book VALUES(NULL,&#39;市场营销&#39;,&#39;直播销讲实战一本通&#39;,&#39;和秋叶一起学系列网络营销书籍&#39;);</span></span>
<span class="line"><span>INSERT INTO tbl_book VALUES(NULL,&#39;市场营销&#39;,&#39;直播带货:淘宝、天猫直播从新手到高手&#39;,&#39;一本教你如何玩转直播的书,10堂课轻松实现带货月入3W+&#39;);</span></span></code></pre></div><h5 id="_2️⃣-jdbc-properties-属性文件" tabindex="-1">2️⃣ jdbc.properties 属性文件 <a class="header-anchor" href="#_2️⃣-jdbc-properties-属性文件" aria-label="Permalink to &quot;2️⃣ jdbc.properties 属性文件&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>jdbc.driver=com.mysql.jdbc.Driver</span></span>
<span class="line"><span>jdbc.url=jdbc:mysql://localhost:3306/ssm_db</span></span>
<span class="line"><span>jdbc.username=root</span></span>
<span class="line"><span>jdbc.password=root</span></span></code></pre></div><h5 id="_3️⃣-jdbcconfig-配置类" tabindex="-1">3️⃣ JdbcConfig 配置类 <a class="header-anchor" href="#_3️⃣-jdbcconfig-配置类" aria-label="Permalink to &quot;3️⃣ JdbcConfig 配置类&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class JdbcConfig {</span></span>
<span class="line"><span>    @Value(&quot;\${jdbc.driver}&quot;)</span></span>
<span class="line"><span>    private String driver;</span></span>
<span class="line"><span>    @Value(&quot;\${jdbc.url}&quot;)</span></span>
<span class="line"><span>    private String url;</span></span>
<span class="line"><span>    @Value(&quot;\${jdbc.username}&quot;)</span></span>
<span class="line"><span>    private String username;</span></span>
<span class="line"><span>    @Value(&quot;\${jdbc.password}&quot;)</span></span>
<span class="line"><span>    private String password;</span></span>
<span class="line"><span>//配置连接池</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public DataSource dataSource(){</span></span>
<span class="line"><span>        DruidDataSource dataSource = new DruidDataSource();</span></span>
<span class="line"><span>        dataSource.setDriverClassName(driver);</span></span>
<span class="line"><span>        dataSource.setUrl(url);</span></span>
<span class="line"><span>        dataSource.setUsername(username);</span></span>
<span class="line"><span>        dataSource.setPassword(password);</span></span>
<span class="line"><span>        return dataSource;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>//Spring事务管理需要的平台事务管理器对象</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public PlatformTransactionManager transactionManager(DataSource dataSource){</span></span>
<span class="line"><span>        DataSourceTransactionManager ds = new DataSourceTransactionManager();</span></span>
<span class="line"><span>        ds.setDataSource(dataSource);</span></span>
<span class="line"><span>        return ds;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_4️⃣-mybatisconfig-配置类" tabindex="-1">4️⃣ MybatisConfig 配置类 <a class="header-anchor" href="#_4️⃣-mybatisconfig-配置类" aria-label="Permalink to &quot;4️⃣ MybatisConfig 配置类&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class MyBatisConfig {</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public SqlSessionFactoryBean sqlSessionFactory(DataSource dataSource){</span></span>
<span class="line"><span>        SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();</span></span>
<span class="line"><span>        factoryBean.setDataSource(dataSource);</span></span>
<span class="line"><span>        factoryBean.setTypeAliasesPackage(&quot;com.itheima.domain&quot;);</span></span>
<span class="line"><span>        return factoryBean;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public MapperScannerConfigurer mapperScannerConfigurer(){</span></span>
<span class="line"><span>        MapperScannerConfigurer msc = new MapperScannerConfigurer();</span></span>
<span class="line"><span>        msc.setBasePackage(&quot;com.itheima.dao&quot;);</span></span>
<span class="line"><span>        return msc;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_5️⃣-springconfig-配置类" tabindex="-1">5️⃣ SpringConfig 配置类 <a class="header-anchor" href="#_5️⃣-springconfig-配置类" aria-label="Permalink to &quot;5️⃣ SpringConfig 配置类&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ComponentScan({&quot;com.itheima.service&quot;})</span></span>
<span class="line"><span>@PropertySource(&quot;classpath:jdbc.properties&quot;)</span></span>
<span class="line"><span>@Import({JdbcConfig.class,MyBatisConfig.class})</span></span>
<span class="line"><span>@EnableTransactionManagement //开启Spring事务管理</span></span>
<span class="line"><span>public class SpringConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="spring-整合-springmvc" tabindex="-1">Spring 整合 SpringMVC <a class="header-anchor" href="#spring-整合-springmvc" aria-label="Permalink to &quot;Spring 整合 SpringMVC&quot;">​</a></h5><h5 id="_6️⃣-springmvcconfig-配置类" tabindex="-1">6️⃣ SpringMvcConfig 配置类 <a class="header-anchor" href="#_6️⃣-springmvcconfig-配置类" aria-label="Permalink to &quot;6️⃣ SpringMvcConfig 配置类&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ComponentScan(&quot;com.itheima.controller&quot;)</span></span>
<span class="line"><span>@EnableWebMvc</span></span>
<span class="line"><span>public class SpringMvcConfig {</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_7️⃣-servletconfig-配置类-加载-springmvcconfig-和-springconfig-配置类" tabindex="-1">7️⃣ ServletConfig 配置类，加载 SpringMvcConfig 和 SpringConfig 配置类 <a class="header-anchor" href="#_7️⃣-servletconfig-配置类-加载-springmvcconfig-和-springconfig-配置类" aria-label="Permalink to &quot;7️⃣ ServletConfig 配置类，加载 SpringMvcConfig 和 SpringConfig 配置类&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class ServletConfig extends AbstractAnnotationConfigDispatcherServletInitializer {</span></span>
<span class="line"><span>    protected Class&lt;?&gt;[] getRootConfigClasses() {</span></span>
<span class="line"><span>        return new Class[]{SpringConfig.class};</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    protected Class&lt;?&gt;[] getServletConfigClasses() {</span></span>
<span class="line"><span>        return new Class[]{SpringMvcConfig.class};</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    protected String[] getServletMappings() {</span></span>
<span class="line"><span>        return new String[]{&quot;/&quot;};</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_1-2-功能模块开发" tabindex="-1">1.2 功能模块开发 <a class="header-anchor" href="#_1-2-功能模块开发" aria-label="Permalink to &quot;1.2 功能模块开发&quot;">​</a></h3><p>16 分钟</p><h5 id="_1️⃣-数据层开发-bookdao" tabindex="-1">1️⃣ 数据层开发(BookDao) <a class="header-anchor" href="#_1️⃣-数据层开发-bookdao" aria-label="Permalink to &quot;1️⃣ 数据层开发(BookDao)&quot;">​</a></h5><blockquote><p>实体类和 Dao 接口</p></blockquote><ul><li>Book 实体类</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class Book {</span></span>
<span class="line"><span>    private Integer id;</span></span>
<span class="line"><span>    private String type;</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private String description;</span></span>
<span class="line"><span>    //同学们自己添加getter、setter、toString()方法</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>BookDao 接口</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public interface BookDao {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //@Insert(&quot;insert into tbl_book values(null,#{type},#{name},#{description})&quot;)</span></span>
<span class="line"><span>    @Insert(&quot;insert into tbl_book (type,name,description) values(#{type},#{name},#{description})&quot;)</span></span>
<span class="line"><span>    public int save(Book book);  //返回值表示影响的行数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Update(&quot;update tbl_book set type = #{type}, name = #{name}, description = #{description} where id = #{id}&quot;)</span></span>
<span class="line"><span>    public int update(Book book);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Delete(&quot;delete from tbl_book where id = #{id}&quot;)</span></span>
<span class="line"><span>    public int delete(Integer id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Select(&quot;select * from tbl_book where id = #{id}&quot;)</span></span>
<span class="line"><span>    public Book getById(Integer id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Select(&quot;select * from tbl_book&quot;)</span></span>
<span class="line"><span>    public List&lt;Book&gt; getAll();</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_2️⃣-业务层开发-bookservice-bookserviceimpl" tabindex="-1">2️⃣ 业务层开发(BookService/BookServiceImpl) <a class="header-anchor" href="#_2️⃣-业务层开发-bookservice-bookserviceimpl" aria-label="Permalink to &quot;2️⃣ 业务层开发(BookService/BookServiceImpl)&quot;">​</a></h5><blockquote><p>业务层接口和业务层实现类</p></blockquote><ul><li>BookService 接口</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Transactional //表示所有方法进行事务管理</span></span>
<span class="line"><span>public interface BookService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 保存</span></span>
<span class="line"><span>     * @param book</span></span>
<span class="line"><span>     * @return</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public boolean save(Book book);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 修改</span></span>
<span class="line"><span>     * @param book</span></span>
<span class="line"><span>     * @return</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public boolean update(Book book);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 按id删除</span></span>
<span class="line"><span>     * @param id</span></span>
<span class="line"><span>     * @return</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public boolean delete(Integer id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 按id查询</span></span>
<span class="line"><span>     * @param id</span></span>
<span class="line"><span>     * @return</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public Book getById(Integer id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 查询全部</span></span>
<span class="line"><span>     * @return</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public List&lt;Book&gt; getAll();</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>BookServiceImpl 实现类</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Service</span></span>
<span class="line"><span>public class BookServiceImpl implements BookService {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private BookDao bookDao;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public boolean save(Book book) {</span></span>
<span class="line"><span>        bookDao.save(book);</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public boolean update(Book book) {</span></span>
<span class="line"><span>        bookDao.update(book);</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public boolean delete(Integer id) {</span></span>
<span class="line"><span>        bookDao.delete(id);</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Book getById(Integer id) {</span></span>
<span class="line"><span>        return bookDao.getById(id);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public List&lt;Book&gt; getAll() {</span></span>
<span class="line"><span>        return bookDao.getAll();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_3️⃣-表现层开发-bookcontroller" tabindex="-1">3️⃣ 表现层开发(BookController) <a class="header-anchor" href="#_3️⃣-表现层开发-bookcontroller" aria-label="Permalink to &quot;3️⃣ 表现层开发(BookController)&quot;">​</a></h5><blockquote><p>实体类和 Dao 接口</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/books&quot;)</span></span>
<span class="line"><span>public class BookController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private BookService bookService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PostMapping</span></span>
<span class="line"><span>    public boolean save(@RequestBody Book book) {</span></span>
<span class="line"><span>        return bookService.save(book);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PutMapping</span></span>
<span class="line"><span>    public boolean update(@RequestBody Book book) {</span></span>
<span class="line"><span>        return bookService.update(book);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @DeleteMapping(&quot;/{id}&quot;)</span></span>
<span class="line"><span>    public boolean delete(@PathVariable Integer id) {</span></span>
<span class="line"><span>        return bookService.delete(id);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping(&quot;/{id}&quot;)</span></span>
<span class="line"><span>    public Book getById(@PathVariable Integer id) {</span></span>
<span class="line"><span>        return bookService.getById(id);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping</span></span>
<span class="line"><span>    public List&lt;Book&gt; getAll() {</span></span>
<span class="line"><span>        return bookService.getAll();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_4️⃣-spring-整合-junit-测试业务层方法" tabindex="-1">4️⃣ Spring 整合 Junit 测试业务层方法 <a class="header-anchor" href="#_4️⃣-spring-整合-junit-测试业务层方法" aria-label="Permalink to &quot;4️⃣ Spring 整合 Junit 测试业务层方法&quot;">​</a></h5><blockquote><p>业务层方法测试不需要启动 tomcat 服务器进行测试，主要测试业务逻辑是否正常</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RunWith(SpringJUnit4ClassRunner.class)</span></span>
<span class="line"><span>@ContextConfiguration(classes = SpringConfig.class)</span></span>
<span class="line"><span>public class BookServiceTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private BookService bookService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testGetById(){</span></span>
<span class="line"><span>        Book book = bookService.getById(1);</span></span>
<span class="line"><span>        System.out.println(book);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testGetAll(){</span></span>
<span class="line"><span>        List&lt;Book&gt; all = bookService.getAll();</span></span>
<span class="line"><span>        System.out.println(all);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_5️⃣-postman-apifox-测试表现层接口" tabindex="-1">5️⃣ postman/Apifox 测试表现层接口 <a class="header-anchor" href="#_5️⃣-postman-apifox-测试表现层接口" aria-label="Permalink to &quot;5️⃣ postman/Apifox 测试表现层接口&quot;">​</a></h5><ul><li>测试保存图书</li></ul><p><img src="`+t+'" alt="image-20210805165801606"></p><blockquote><p>这里就以保存图书为例，其他接口同学们自己测试</p></blockquote><h3 id="_1-3-ssm-整合-练习-✏️" tabindex="-1">1.3 SSM 整合 练习 ✏️ <a class="header-anchor" href="#_1-3-ssm-整合-练习-✏️" aria-label="Permalink to &quot;1.3 SSM 整合 练习 ✏️&quot;">​</a></h3><p>10 分钟</p><h4 id="_1-3-0「ssm-整合」目的" tabindex="-1">1.3.0「SSM 整合」目的 <a class="header-anchor" href="#_1-3-0「ssm-整合」目的" aria-label="Permalink to &quot;1.3.0「SSM 整合」目的&quot;">​</a></h4><blockquote><p>熟悉 SSM 整合功能模块类</p></blockquote><h4 id="_1-3-1「ssm-整合」需求-效果" tabindex="-1">1.3.1「SSM 整合」需求&amp;效果 <a class="header-anchor" href="#_1-3-1「ssm-整合」需求-效果" aria-label="Permalink to &quot;1.3.1「SSM 整合」需求&amp;效果&quot;">​</a></h4><blockquote><p>能够正常查询数据以及添加数据到数据库</p></blockquote><h4 id="_1-3-2「ssm-整合」步鄹" tabindex="-1">1.3.2「SSM 整合」步鄹 <a class="header-anchor" href="#_1-3-2「ssm-整合」步鄹" aria-label="Permalink to &quot;1.3.2「SSM 整合」步鄹&quot;">​</a></h4><ul><li>在飞秋中下载 springmvc_08_ssmtest 压缩包，放到你的工程中</li><li>导入到项目中</li><li>完成通知类中的代码</li><li>注意：导工程后，一定要做的三个步鄹 <ol><li>检查 Maven 仓库</li><li>检查 jdk-1.8</li><li>检查编译器版本-1.8</li></ol></li></ul><p>点击查看详细步鄹</p><ol><li>导入 springmvc_08_ssmtest 模块，检查 maven 仓库和 pom 文件，以及检查 tomcat 插件路径</li><li>完成数据库初始的导入，数据在：<a href="http://xn--q8qs0pxzebwfoxc.md/" target="_blank" rel="noreferrer">数据库准备.mdopen in new window</a> 文件中，导入 Navicat 后，修改 jdbc.properties 中数据库的名字和密码</li><li>首先从配置类开始，依次完成 config 类中的 todo 任务，每个类在头部有详细介绍</li><li>完成配置类的任务后，接下来检查 service 和 dao 代码和提示</li><li>此时可以进行 service 测试，在 BookServiceTest 测试内中，测试 mybatis 是否能链接 mysql</li><li>检查 Controller 的配置和路径</li><li>测试完成后，启动 tomcat，开始 postman 接口测试，测试前可阅读：postman 测试接口文档（里面有详细的路径和参数，方便测试）</li><li>如果在 postman 或者 apifox 中测试各个接口均通过，恭喜你，成为初级 javaweb 开发工程师</li></ol><p><strong>可以参考序号，依次对每个文件检查和配置</strong><img src="'+o+'" alt=""></p><h2 id="_2-表现层与前端传输协议" tabindex="-1">2.表现层与前端传输协议 <a class="header-anchor" href="#_2-表现层与前端传输协议" aria-label="Permalink to &quot;2.表现层与前端传输协议&quot;">​</a></h2><h3 id="_2-1-表现层数据封装【重点】❤️-🍐" tabindex="-1">2.1 表现层数据封装【重点】❤️ 🍐 <a class="header-anchor" href="#_2-1-表现层数据封装【重点】❤️-🍐" aria-label="Permalink to &quot;2.1 表现层数据封装【重点】❤️ 🍐&quot;">​</a></h3><h4 id="_2-1-1-「表现层数据封装」核心问题-答案" tabindex="-1">2.1.1 「表现层数据封装」核心问题&amp;答案 <a class="header-anchor" href="#_2-1-1-「表现层数据封装」核心问题-答案" aria-label="Permalink to &quot;2.1.1 「表现层数据封装」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><p>目前我们表现层响应给客户端的数据有哪几种？</p><p>点击查看代码</p><p><img src="'+c+'" alt=""></p><blockquote><p>问题：出现了三种格式的响应结果，极其不利于前端解析，对于团队协作极为不利。</p></blockquote><blockquote><p>解决方案：需要统一的前后端传输格式</p></blockquote><p>点击查看实际开发中的统一格式案例</p><p><strong>下列是天气，头条新闻，笑话大全 3 个项目的返回数据，请观察有什么共性！！！</strong></p><p><img src="'+r+`" alt=""></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7B7F8B;">//天气接口数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">    &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E1F1;">reason</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F286C4;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;"> &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">查询成功</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">    &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E1F1;">result</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F286C4;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">        &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E1F1;">city</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F286C4;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;"> &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">苏州</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">        &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E1F1;">realtime</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F286C4;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">            &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E1F1;">temperature</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F286C4;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;"> &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">4</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">            &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E1F1;">humidity</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F286C4;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;"> &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">82</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">            &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E1F1;">info</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F286C4;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;"> &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">阴</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">            &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E1F1;">wid</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F286C4;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;"> &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">02</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">            &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E1F1;">direct</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F286C4;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;"> &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">西北风</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">            &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E1F1;">power</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F286C4;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;"> &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">3级</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">            &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E1F1;">aqi</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F286C4;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;"> &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">80</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">    &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E1F1;">error_code</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E2F2;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F286C4;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">}</span></span></code></pre></div><h4 id="_2-1-2-解决方案" tabindex="-1">2.1.2 解决方案 <a class="header-anchor" href="#_2-1-2-解决方案" aria-label="Permalink to &quot;2.1.2 解决方案&quot;">​</a></h4><p><a href="Day05/Snipaste_2023-07-31_00-41-14.png"></a></p><h5 id="result-类封装统一的响应结果" tabindex="-1">Result 类封装统一的响应结果 <a class="header-anchor" href="#result-类封装统一的响应结果" aria-label="Permalink to &quot;Result 类封装统一的响应结果&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>public class Result {</span></span>
<span class="line"><span>    //描述统一格式中的数据</span></span>
<span class="line"><span>    private Object data;</span></span>
<span class="line"><span>    //描述统一格式中的编码，用于区分操作，可以简化配置0或1表示成功失败</span></span>
<span class="line"><span>    private Integer code;</span></span>
<span class="line"><span>    //描述统一格式中的消息，可选属性</span></span>
<span class="line"><span>    private String msg;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Result() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public Result(Integer code,Object data) {</span></span>
<span class="line"><span>        this.data = data;</span></span>
<span class="line"><span>        this.code = code;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public Result(Integer code, Object data, String msg) {</span></span>
<span class="line"><span>        this.data = data;</span></span>
<span class="line"><span>        this.code = code;</span></span>
<span class="line"><span>        this.msg = msg;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>     //同学们自己添加getter、setter、toString()方法</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>注意事项：</strong></p><p>Result 类中的字段并不是固定的，可以根据需要自行增减</p><h5 id="code-类封装统一的响应码" tabindex="-1">Code 类封装统一的响应码 <a class="header-anchor" href="#code-类封装统一的响应码" aria-label="Permalink to &quot;Code 类封装统一的响应码&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//状态码</span></span>
<span class="line"><span>public class Code {</span></span>
<span class="line"><span>    public static final Integer SAVE_OK = 20011;</span></span>
<span class="line"><span>    public static final Integer DELETE_OK = 20021;</span></span>
<span class="line"><span>    public static final Integer UPDATE_OK = 20031;</span></span>
<span class="line"><span>    public static final Integer GET_OK = 20041;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static final Integer SAVE_ERR = 20010;</span></span>
<span class="line"><span>    public static final Integer DELETE_ERR = 20020;</span></span>
<span class="line"><span>    public static final Integer UPDATE_ERR = 20030;</span></span>
<span class="line"><span>    public static final Integer GET_ERR = 20040;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>注意事项：</strong></p><p>Code 类的常量设计也不是固定的，可以根据需要自行增减，例如将查询再进行细分为 GET_OK，GET_ALL_OK，GET_PAGE_OK</p><ol><li>统一返回值格式，有利于前后端交互</li><li>当后端项目和前端项目完成后，要进行联合调试，说的就是这个数据对接</li></ol><h5 id="表现层数据封装返回统一的-result-对象" tabindex="-1">表现层数据封装返回统一的 Result 对象 <a class="header-anchor" href="#表现层数据封装返回统一的-result-对象" aria-label="Permalink to &quot;表现层数据封装返回统一的 Result 对象&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/books&quot;)</span></span>
<span class="line"><span>public class BookController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private BookService bookService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PostMapping</span></span>
<span class="line"><span>    public Result save(@RequestBody Book book) {</span></span>
<span class="line"><span>        boolean flag = bookService.save(book);</span></span>
<span class="line"><span>        return new Result(flag ? Code.SAVE_OK:Code.SAVE_ERR,flag);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PutMapping</span></span>
<span class="line"><span>    public Result update(@RequestBody Book book) {</span></span>
<span class="line"><span>        boolean flag = bookService.update(book);</span></span>
<span class="line"><span>        return new Result(flag ? Code.UPDATE_OK:Code.UPDATE_ERR,flag);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @DeleteMapping(&quot;/{id}&quot;)</span></span>
<span class="line"><span>    public Result delete(@PathVariable Integer id) {</span></span>
<span class="line"><span>        boolean flag = bookService.delete(id);</span></span>
<span class="line"><span>        return new Result(flag ? Code.DELETE_OK:Code.DELETE_ERR,flag);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping(&quot;/{id}&quot;)</span></span>
<span class="line"><span>    public Result getById(@PathVariable Integer id) {</span></span>
<span class="line"><span>        Book book = bookService.getById(id);</span></span>
<span class="line"><span>        Integer code = book != null ? Code.GET_OK : Code.GET_ERR;</span></span>
<span class="line"><span>        String msg = book != null ? &quot;&quot; : &quot;数据查询失败，请重试！&quot;;</span></span>
<span class="line"><span>        return new Result(code,book,msg);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping</span></span>
<span class="line"><span>    public Result getAll() {</span></span>
<span class="line"><span>        List&lt;Book&gt; bookList = bookService.getAll();</span></span>
<span class="line"><span>        Integer code = bookList != null ? Code.GET_OK : Code.GET_ERR;</span></span>
<span class="line"><span>        String msg = bookList != null ? &quot;&quot; : &quot;数据查询失败，请重试！&quot;;</span></span>
<span class="line"><span>        return new Result(code,bookList,msg);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_3-异常处理" tabindex="-1">3.异常处理 <a class="header-anchor" href="#_3-异常处理" aria-label="Permalink to &quot;3.异常处理&quot;">​</a></h2><h3 id="_3-1-异常处理器【重点】❤️-🍐" tabindex="-1">3.1 异常处理器【重点】❤️ 🍐 <a class="header-anchor" href="#_3-1-异常处理器【重点】❤️-🍐" aria-label="Permalink to &quot;3.1 异常处理器【重点】❤️ 🍐&quot;">​</a></h3><h4 id="_3-1-1-「异常处理器」核心问题-答案" tabindex="-1">3.1.1 「异常处理器」核心问题&amp;答案 <a class="header-anchor" href="#_3-1-1-「异常处理器」核心问题-答案" aria-label="Permalink to &quot;3.1.1 「异常处理器」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>项目各个个层级均可能出现异常，异常处理代码书写在哪一层？</li></ol><p>点击查看答案</p><ul><li><p>异常介绍：</p><ul><li>程序开发过程中<strong>不可避免</strong>的会遇到异常现象，我们<strong>不能让用户看到这样的页面数据</strong> 👈 👈 <img src="`+d+'" alt=""></li></ul></li><li><p>出现异常现象的常见位置与常见诱因如下：</p><ul><li>框架内部抛出的异常：因使用不合规导致</li><li>数据层抛出的异常：因外部服务器故障导致（例如：服务器访问超时）</li><li>业务层抛出的异常：因业务逻辑书写错误导致（例如：遍历业务书写操作，导致索引异常等）</li><li>表现层抛出的异常：因数据收集、校验等规则导致（例如：不匹配的数据类型间导致异常）</li><li>工具类抛出的异常：因工具类书写不严谨不够健壮导致（例如：必要释放的连接长期未释放等）</li></ul></li><li><p>springmvc 中异常在控制层进行统一处理 👈 👈 👈</p></li></ul><p><img src="'+u+`" alt=""></p><h4 id="_3-1-2-编写异常处理器" tabindex="-1">3.1.2 编写异常处理器 <a class="header-anchor" href="#_3-1-2-编写异常处理器" aria-label="Permalink to &quot;3.1.2 编写异常处理器&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestControllerAdvice  //用于标识当前类为REST风格对应的异常处理器</span></span>
<span class="line"><span>public class ProjectExceptionAdvice {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //统一处理所有的Exception异常</span></span>
<span class="line"><span>    @ExceptionHandler(Exception.class)</span></span>
<span class="line"><span>    public Result doOtherException(Exception ex){</span></span>
<span class="line"><span>        return new Result(666,null);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>使用异常处理器之后的效果</strong></p><p><img src="`+h+`" alt="image-20210805171924452"></p><h5 id="_3-1-3-异常处理器注解" tabindex="-1">3.1.3 异常处理器注解 <a class="header-anchor" href="#_3-1-3-异常处理器注解" aria-label="Permalink to &quot;3.1.3 异常处理器注解&quot;">​</a></h5><p>异常处理器注解</p><ul><li><p><strong>@RestControllerAdvice 注解介绍</strong></p><ul><li>名称：@RestControllerAdvice</li><li>类型：<strong>类注解</strong></li><li>位置：Rest 风格开发的控制器增强类定义上方</li><li>作用：为 Rest 风格开发的控制器类做增强</li><li>说明：此注解自带@ResponseBody 注解与@Component 注解，具备对应的功能</li></ul></li><li><p><strong>@ExceptionHandler 注解介绍</strong></p><ul><li>名称：@ExceptionHandler</li><li>类型：<strong>方法注解</strong></li><li>位置：专用于异常处理的控制器方法上方</li><li>作用：设置指定异常的处理方案，功能等同于控制器方法，出现异常后终止原始控制器执行，并转入当前方法执行</li><li>说明：此类方法可以根据处理的异常不同，制作多个方法分别处理对应的异常</li></ul></li></ul><h3 id="_3-2-异常处理器项目异常处理方案【理解】" tabindex="-1">3.2 异常处理器项目异常处理方案【理解】 <a class="header-anchor" href="#_3-2-异常处理器项目异常处理方案【理解】" aria-label="Permalink to &quot;3.2 异常处理器项目异常处理方案【理解】&quot;">​</a></h3><p>21 分钟</p><h4 id="_3-2-1-「异常处理器」核心问题-答案" tabindex="-1">3.2.1 「异常处理器」核心问题&amp;答案 <a class="header-anchor" href="#_3-2-1-「异常处理器」核心问题-答案" aria-label="Permalink to &quot;3.2.1 「异常处理器」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>请说出项目异常的常见分类以及项目异常处理方案</li></ol><p>点击查看答案</p><h5 id="_1️⃣-项目异常分类" tabindex="-1">1️⃣ 项目异常分类 <a class="header-anchor" href="#_1️⃣-项目异常分类" aria-label="Permalink to &quot;1️⃣ 项目异常分类&quot;">​</a></h5><ul><li><strong>业务异常（BusinessException）</strong><ul><li>规范的用户行为产生的异常</li><li>不规范的用户行为操作产生的异常</li></ul></li><li><strong>系统异常（SystemException）</strong><ul><li>项目运行过程中可预计且无法避免的异常</li></ul></li><li><strong>其他异常（Exception）</strong><ul><li>编程人员未预期到的异常</li></ul></li></ul><h5 id="_2️⃣-项目异常处理方案" tabindex="-1">2️⃣ 项目异常处理方案 <a class="header-anchor" href="#_2️⃣-项目异常处理方案" aria-label="Permalink to &quot;2️⃣ 项目异常处理方案&quot;">​</a></h5><ul><li>业务异常（BusinessException） <ul><li><strong>发送对应消息传递给用户，提醒规范操作</strong></li></ul></li><li>系统异常（SystemException） <ul><li><strong>发送固定消息传递给用户，安抚用户</strong></li><li>发送特定消息给运维人员，提醒维护</li><li>记录日志</li></ul></li><li>其他异常（Exception） <ul><li><strong>发送固定消息传递给用户，安抚用户</strong></li><li>发送特定消息给编程人员，提醒维护（纳入预期范围内）</li><li>记录日志</li></ul></li></ul><h4 id="_3-2-2-项目异常处理代码实现" tabindex="-1">3.2.2 项目异常处理代码实现 <a class="header-anchor" href="#_3-2-2-项目异常处理代码实现" aria-label="Permalink to &quot;3.2.2 项目异常处理代码实现&quot;">​</a></h4><h5 id="_1️⃣-根据异常分类自定义异常类" tabindex="-1">1️⃣ 根据异常分类自定义异常类 <a class="header-anchor" href="#_1️⃣-根据异常分类自定义异常类" aria-label="Permalink to &quot;1️⃣ 根据异常分类自定义异常类&quot;">​</a></h5><blockquote><p>包路径：com.xxx.exception</p></blockquote><h6 id="自定义项目系统级异常-🍐" tabindex="-1">自定义项目系统级异常 🍐 <a class="header-anchor" href="#自定义项目系统级异常-🍐" aria-label="Permalink to &quot;自定义项目系统级异常 🍐&quot;">​</a></h6><blockquote><p>思考⚠️：为什么没有msg属性？</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//自定义异常处理器，用于封装异常信息，对异常进行分类</span></span>
<span class="line"><span>public class SystemException extends RuntimeException{</span></span>
<span class="line"><span>    private Integer code;</span></span>
<span class="line"><span>    public Integer getCode() {</span></span>
<span class="line"><span>        return code;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void setCode(Integer code) {</span></span>
<span class="line"><span>        this.code = code;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public SystemException(Integer code, String message) {</span></span>
<span class="line"><span>        super(message);</span></span>
<span class="line"><span>        this.code = code;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public SystemException(Integer code, String message, Throwable cause) {</span></span>
<span class="line"><span>        super(message, cause);</span></span>
<span class="line"><span>        this.code = code;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h6 id="自定义项目业务级异常-🍐" tabindex="-1">自定义项目业务级异常 🍐 <a class="header-anchor" href="#自定义项目业务级异常-🍐" aria-label="Permalink to &quot;自定义项目业务级异常 🍐&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//自定义异常处理器，用于封装异常信息，对异常进行分类</span></span>
<span class="line"><span>public class BusinessException extends RuntimeException{</span></span>
<span class="line"><span>    private Integer code;</span></span>
<span class="line"><span>    public Integer getCode() {</span></span>
<span class="line"><span>        return code;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void setCode(Integer code) {</span></span>
<span class="line"><span>        this.code = code;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public BusinessException(Integer code, String message) {</span></span>
<span class="line"><span>        super(message);</span></span>
<span class="line"><span>        this.code = code;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public BusinessException(Integer code,String message,Throwable cause) {</span></span>
<span class="line"><span>        super(message, cause);</span></span>
<span class="line"><span>        this.code = code;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_2️⃣-自定义异常编码-持续补充" tabindex="-1">2️⃣ 自定义异常编码（持续补充） <a class="header-anchor" href="#_2️⃣-自定义异常编码-持续补充" aria-label="Permalink to &quot;2️⃣ 自定义异常编码（持续补充）&quot;">​</a></h5><blockquote><p>包路径：com.xxx.controller</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class Code {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//之前其他状态码省略没写，以下是新补充的状态码，可以根据需要自己补充</span></span>
<span class="line"><span>    public static final Integer SYSTEM_ERR = 50001;</span></span>
<span class="line"><span>    public static final Integer SYSTEM_TIMEOUT_ERR = 50002;</span></span>
<span class="line"><span>    public static final Integer SYSTEM_UNKNOW_ERR = 59999;</span></span>
<span class="line"><span>    public static final Integer BUSINESS_ERR = 60002;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_3️⃣-触发自定义异常" tabindex="-1">3️⃣ 触发自定义异常 <a class="header-anchor" href="#_3️⃣-触发自定义异常" aria-label="Permalink to &quot;3️⃣ 触发自定义异常&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Service</span></span>
<span class="line"><span>public class BookServiceImpl implements BookService {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private BookDao bookDao;</span></span>
<span class="line"><span>//在getById演示触发异常，其他方法省略没有写进来</span></span>
<span class="line"><span>    public Book getById(Integer id) {</span></span>
<span class="line"><span>        //模拟业务异常，包装成自定义异常</span></span>
<span class="line"><span>        if(id &lt;0){</span></span>
<span class="line"><span>            throw new BusinessException(Code.BUSINESS_ERR,&quot;请不要使用你的技术挑战我的耐性!&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_4️⃣-在异常通知类中拦截并处理异常" tabindex="-1">4️⃣ 在异常通知类中拦截并处理异常 <a class="header-anchor" href="#_4️⃣-在异常通知类中拦截并处理异常" aria-label="Permalink to &quot;4️⃣ 在异常通知类中拦截并处理异常&quot;">​</a></h5><blockquote><p>包路径：com.xxx.controller</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestControllerAdvice //用于标识当前类为REST风格对应的异常处理器</span></span>
<span class="line"><span>public class ProjectExceptionAdvice {</span></span>
<span class="line"><span>    //@ExceptionHandler用于设置当前处理器类对应的异常类型</span></span>
<span class="line"><span>    @ExceptionHandler(SystemException.class)</span></span>
<span class="line"><span>    public Result doSystemException(SystemException ex){</span></span>
<span class="line"><span>        //记录日志</span></span>
<span class="line"><span>        //发送消息给运维</span></span>
<span class="line"><span>        //发送邮件给开发人员,ex对象发送给开发人员</span></span>
<span class="line"><span>        return new Result(ex.getCode(),null,ex.getMessage());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ExceptionHandler(BusinessException.class)</span></span>
<span class="line"><span>    public Result doBusinessException(BusinessException ex){</span></span>
<span class="line"><span>        return new Result(ex.getCode(),null,ex.getMessage());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //除了自定义的异常处理器，保留对Exception类型的异常处理，用于处理非预期的异常</span></span>
<span class="line"><span>    @ExceptionHandler(Exception.class)</span></span>
<span class="line"><span>    public Result doOtherException(Exception ex){</span></span>
<span class="line"><span>        //记录日志</span></span>
<span class="line"><span>        //发送消息给运维</span></span>
<span class="line"><span>        //发送邮件给开发人员,ex对象发送给开发人员</span></span>
<span class="line"><span>        return new Result(Code.SYSTEM_UNKNOW_ERR,null,&quot;系统繁忙，请稍后再试！&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>测试：在 postman 中发送请求访问 getById 方法，传递参数-1，得到以下结果：</p><p><img src="`+g+`" alt="image-20210805173815730"></p><h3 id="_3-3-异常处理器和前端后协议统一练习-✏️" tabindex="-1">3.3 异常处理器和前端后协议统一练习 ✏️ <a class="header-anchor" href="#_3-3-异常处理器和前端后协议统一练习-✏️" aria-label="Permalink to &quot;3.3 异常处理器和前端后协议统一练习 ✏️&quot;">​</a></h3><p>15 分钟</p><h4 id="_3-3-0「异常处理器和前端后协议统一」目的" tabindex="-1">3.3.0「异常处理器和前端后协议统一」目的 <a class="header-anchor" href="#_3-3-0「异常处理器和前端后协议统一」目的" aria-label="Permalink to &quot;3.3.0「异常处理器和前端后协议统一」目的&quot;">​</a></h4><blockquote><p>熟悉异常处理器和前端后协议统一的使用</p></blockquote><h4 id="_3-3-1「异常处理器和前端后协议统一」需求-效果" tabindex="-1">3.3.1「异常处理器和前端后协议统一」需求&amp;效果 <a class="header-anchor" href="#_3-3-1「异常处理器和前端后协议统一」需求-效果" aria-label="Permalink to &quot;3.3.1「异常处理器和前端后协议统一」需求&amp;效果&quot;">​</a></h4><blockquote><p>需求：完成需求 2 和需求 3 效果：当出现异常的时候，返回安抚信息给前端接口</p></blockquote><h4 id="_3-3-2「异常处理器和前端后协议统一」步鄹" tabindex="-1">3.3.2「异常处理器和前端后协议统一」步鄹 <a class="header-anchor" href="#_3-3-2「异常处理器和前端后协议统一」步鄹" aria-label="Permalink to &quot;3.3.2「异常处理器和前端后协议统一」步鄹&quot;">​</a></h4><p>点击查看需求 2 说明（统一前端后的数据格式）</p><blockquote><p>可以参考 2.1.2</p></blockquote><ul><li><p>需求 2（理解）：</p><ul><li><p>统一前端后的数据格式:</p><ol><li>因为是表现层数据,所以写在 controller 包中</li><li>新建 Reslut 统一的结果类</li><li>定义 code 码</li><li>在 Controller 中修改返回值类型为 Reslut</li></ol></li><li><p>通过处理，数据返回格式为，如查询单个:</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;data&quot;: {</span></span>
<span class="line"><span>    &quot;id&quot;: 9,</span></span>
<span class="line"><span>    &quot;type&quot;: &quot;小说&quot;,</span></span>
<span class="line"><span>    &quot;name&quot;: &quot;凡人修仙传&quot;,</span></span>
<span class="line"><span>    &quot;description&quot;: &quot;仙侠小说第一，非常好看，讲述的是无名小卒韩立的故事&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;code&quot;: 20041,</span></span>
<span class="line"><span>  &quot;msg&quot;: &quot;查询成功&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ul><blockquote><p>恭喜你,已经完成前后端响应数据格式的统一，往中级工程师迈进一步 🎉</p></blockquote><p>点击查看需求 3 说明（设置统一的异常处理）</p><ul><li>需求 3： <ul><li>设置统一的异常处理，无论何种异常，绝不给用户返回 500 错误页面 <ol><li>在业务层添加业务处理类 ProjectExceptionAdvice，并且标识当前类为 REST 风格对应的异常@RestControllerAdvice</li><li>定义一个方法用来接收所有并且，并且添加注解标示： <ul><li>@ExceptionHandler(Exception.class)并在形参中添加接收异常(Exception ex){</li><li>接着在方法体中进行统一的返回</li></ul></li><li>在处理方法中，返回 return new Result(Code.SAVE_ERR,null,Code.SAVE_ERR_MSG); 告知用户</li><li>在业务层搞一个 除 0 异常，int count=1/0;</li><li>在 postman/apifox 测试异常 ,观察返回值</li></ol></li></ul></li></ul><blockquote><p>恭喜你,已经完成统一的异常处理，往中级工程师再进一步 🎉 🎉</p></blockquote><p>点击查看需求 4 (完成各种异常的定义和处理(在第三个需求上进行开发))</p><ul><li>需求 4： <ul><li>完成各种异常的定义和处理(在第三个需求上进行开发) <ol><li>在 com.itheima 包中定义 exception 包，在包中定义自定义异常 BusinessException SystemException</li><li>在业务层抛多个自定义异常 如 throw new BusinessException(&quot;666&quot;,&quot;参数错误，请重试&quot;);</li><li>在 ProjectExceptionAdvice 定义多个方法接收自定异常，并返回 Reslut</li><li>在 postman 测试异常 ,观察返回值</li></ol></li></ul></li></ul><p><img src="`+b+'" alt=""></p><blockquote><p>恭喜你,已经完成统一的异常处理，往中级工程师再迈出一大步 🎉 🎉 🎉</p></blockquote><h2 id="_4-ssm-整合页面开发【重点】🍐" tabindex="-1">4.SSM 整合页面开发【重点】🍐 <a class="header-anchor" href="#_4-ssm-整合页面开发【重点】🍐" aria-label="Permalink to &quot;4.SSM 整合页面开发【重点】🍐&quot;">​</a></h2><h3 id="_4-1-准备工作" tabindex="-1">4.1 准备工作 <a class="header-anchor" href="#_4-1-准备工作" aria-label="Permalink to &quot;4.1 准备工作&quot;">​</a></h3><blockquote><p>为了确保静态资源能够被访问到，需要设置静态资源过滤</p></blockquote><p><img src="'+s+`" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class SpringMvcSupport extends WebMvcConfigurationSupport {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    protected void addResourceHandlers(ResourceHandlerRegistry registry) {</span></span>
<span class="line"><span>        registry.addResourceHandler(&quot;/pages/**&quot;)</span></span>
<span class="line"><span>            .addResourceLocations(&quot;/pages/&quot;);</span></span>
<span class="line"><span>        registry.addResourceHandler(&quot;/css/**&quot;)</span></span>
<span class="line"><span>            .addResourceLocations(&quot;/css/&quot;);</span></span>
<span class="line"><span>        registry.addResourceHandler(&quot;/js/**&quot;)</span></span>
<span class="line"><span>            .addResourceLocations(&quot;/js/&quot;);</span></span>
<span class="line"><span>        registry.addResourceHandler(&quot;/plugins/**&quot;)</span></span>
<span class="line"><span>            .addResourceLocations(&quot;/plugins/&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-2-列表查询功能" tabindex="-1">4.2 列表查询功能 <a class="header-anchor" href="#_4-2-列表查询功能" aria-label="Permalink to &quot;4.2 列表查询功能&quot;">​</a></h3><ul><li>前端代码</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//列表</span></span>
<span class="line"><span>getAll() {</span></span>
<span class="line"><span>    //发送ajax请求</span></span>
<span class="line"><span>    axios.get(&quot;/books&quot;).then((res)=&gt;{</span></span>
<span class="line"><span>        this.dataList = res.data.data;</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-3-添加功能" tabindex="-1">4.3 添加功能 <a class="header-anchor" href="#_4-3-添加功能" aria-label="Permalink to &quot;4.3 添加功能&quot;">​</a></h3><ul><li>后台代码改进</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Service</span></span>
<span class="line"><span>public class BookServiceImpl implements BookService {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private BookDao bookDao;</span></span>
<span class="line"><span>//增删改的方法判断了影响的行数是否大于0，而不是固定返回true</span></span>
<span class="line"><span>    public boolean save(Book book) {</span></span>
<span class="line"><span>        return bookDao.save(book) &gt; 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>//增删改的方法判断了影响的行数是否大于0，而不是固定返回true</span></span>
<span class="line"><span>    public boolean update(Book book) {</span></span>
<span class="line"><span>        return bookDao.update(book) &gt; 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>//增删改的方法判断了影响的行数是否大于0，而不是固定返回true</span></span>
<span class="line"><span>    public boolean delete(Integer id) {</span></span>
<span class="line"><span>        return bookDao.delete(id) &gt; 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Book getById(Integer id) {</span></span>
<span class="line"><span>        if(id &lt; 0){</span></span>
<span class="line"><span>            throw new BusinessException(Code.BUSINESS_ERR,&quot;请不要使用你的技术挑战我的耐性!&quot;);</span></span>
<span class="line"><span>            return bookDao.getById(id);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public List&lt;Book&gt; getAll() {</span></span>
<span class="line"><span>        return bookDao.getAll();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>前端代码（前端代码）</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>//弹出添加窗口</span></span>
<span class="line"><span>handleCreate() {</span></span>
<span class="line"><span>    this.dialogFormVisible = true;</span></span>
<span class="line"><span>    this.resetForm();</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>//重置表单</span></span>
<span class="line"><span>resetForm() {</span></span>
<span class="line"><span>    this.formData = {};</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>//添加</span></span>
<span class="line"><span>handleAdd () {</span></span>
<span class="line"><span>    //发送ajax请求</span></span>
<span class="line"><span>    axios.post(&quot;/books&quot;,this.formData).then((res)=&gt;{</span></span>
<span class="line"><span>        console.log(res.data);</span></span>
<span class="line"><span>        //如果操作成功，关闭弹层，显示数据</span></span>
<span class="line"><span>        if(res.data.code == 20011){</span></span>
<span class="line"><span>            this.dialogFormVisible = false;</span></span>
<span class="line"><span>            this.$message.success(&quot;添加成功&quot;);</span></span>
<span class="line"><span>        }else if(res.data.code == 20010){</span></span>
<span class="line"><span>            this.$message.error(&quot;添加失败&quot;);</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>            this.$message.error(res.data.msg);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }).finally(()=&gt;{</span></span>
<span class="line"><span>        this.getAll();</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>},</span></span></code></pre></div><h3 id="_4-4-修改功能" tabindex="-1">4.4 修改功能 <a class="header-anchor" href="#_4-4-修改功能" aria-label="Permalink to &quot;4.4 修改功能&quot;">​</a></h3><ul><li>显示弹出框查询图书信息 （前端代码）</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//弹出编辑窗口</span></span>
<span class="line"><span>handleUpdate(row) {</span></span>
<span class="line"><span>    // console.log(row);   //row.id 查询条件</span></span>
<span class="line"><span>    //查询数据，根据id查询</span></span>
<span class="line"><span>    axios.get(&quot;/books/&quot;+row.id).then((res)=&gt;{</span></span>
<span class="line"><span>        // console.log(res.data.data);</span></span>
<span class="line"><span>        if(res.data.code == 20041){</span></span>
<span class="line"><span>            //展示弹层，加载数据</span></span>
<span class="line"><span>            this.formData = res.data.data;</span></span>
<span class="line"><span>            this.dialogFormVisible4Edit = true;</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>            this.$message.error(res.data.msg);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>保存修改后的图书信息（前端代码）</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//编辑</span></span>
<span class="line"><span>handleEdit() {</span></span>
<span class="line"><span>    //发送ajax请求</span></span>
<span class="line"><span>    axios.put(&quot;/books&quot;,this.formData).then((res)=&gt;{</span></span>
<span class="line"><span>        //如果操作成功，关闭弹层，显示数据</span></span>
<span class="line"><span>        if(res.data.code == 20031){</span></span>
<span class="line"><span>            this.dialogFormVisible4Edit = false;</span></span>
<span class="line"><span>            this.$message.success(&quot;修改成功&quot;);</span></span>
<span class="line"><span>        }else if(res.data.code == 20030){</span></span>
<span class="line"><span>            this.$message.error(&quot;修改失败&quot;);</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>            this.$message.error(res.data.msg);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }).finally(()=&gt;{</span></span>
<span class="line"><span>        this.getAll();</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-5-删除功能" tabindex="-1">4.5 删除功能 <a class="header-anchor" href="#_4-5-删除功能" aria-label="Permalink to &quot;4.5 删除功能&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>// 删除</span></span>
<span class="line"><span>handleDelete(row) {</span></span>
<span class="line"><span>    //1.弹出提示框</span></span>
<span class="line"><span>    this.$confirm(&quot;此操作永久删除当前数据，是否继续？&quot;,&quot;提示&quot;,{</span></span>
<span class="line"><span>        type:&#39;info&#39;</span></span>
<span class="line"><span>    }).then(()=&gt;{</span></span>
<span class="line"><span>        //2.做删除业务</span></span>
<span class="line"><span>        axios.delete(&quot;/books/&quot;+row.id).then((res)=&gt;{</span></span>
<span class="line"><span>            if(res.data.code == 20021){</span></span>
<span class="line"><span>                this.$message.success(&quot;删除成功&quot;);</span></span>
<span class="line"><span>            }else{</span></span>
<span class="line"><span>                this.$message.error(&quot;删除失败&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }).finally(()=&gt;{</span></span>
<span class="line"><span>            this.getAll();</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }).catch(()=&gt;{</span></span>
<span class="line"><span>        //3.取消删除</span></span>
<span class="line"><span>        this.$message.info(&quot;取消删除操作&quot;);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-6-整合页面开发-练习-✏️" tabindex="-1">4.6 整合页面开发 练习 ✏️ <a class="header-anchor" href="#_4-6-整合页面开发-练习-✏️" aria-label="Permalink to &quot;4.6 整合页面开发 练习 ✏️&quot;">​</a></h3><p>10 分钟</p><h4 id="_4-6-0「整合页面开发」目的" tabindex="-1">4.6.0「整合页面开发」目的 <a class="header-anchor" href="#_4-6-0「整合页面开发」目的" aria-label="Permalink to &quot;4.6.0「整合页面开发」目的&quot;">​</a></h4><blockquote><p>熟悉前端代码调试和 postman/apifox 软件联合使用</p></blockquote><h4 id="_4-6-1「整合页面开发」需求-效果" tabindex="-1">4.6.1「整合页面开发」需求&amp;效果 <a class="header-anchor" href="#_4-6-1「整合页面开发」需求-效果" aria-label="Permalink to &quot;4.6.1「整合页面开发」需求&amp;效果&quot;">​</a></h4><blockquote><p>前端页面能够正常进行增删改查操作</p></blockquote><h4 id="_4-6-2「整合页面开发」步鄹" tabindex="-1">4.6.2「整合页面开发」步鄹 <a class="header-anchor" href="#_4-6-2「整合页面开发」步鄹" aria-label="Permalink to &quot;4.6.2「整合页面开发」步鄹&quot;">​</a></h4><ul><li>在飞秋中下载 springmvc_11_pagetest 压缩包，放到你的工程中</li><li>导入到项目中</li><li>完成 webapp 中 pages 的 books.html 中的增删改查 js 代码</li><li>注意：导工程后，一定要做的三个步鄹 <ol><li>检查 Maven 仓库</li><li>检查 jdk-1.8</li><li>检查编译器版本-1.8</li></ol></li></ul><p>点击查看需求 5</p><ul><li><p>需求 5：</p><ul><li><p>完成前端页面的导入，前后台协议联调（前后端能正常交互）</p><ol><li><p>导入素材到 webapp 中，接着添加过滤器 SpringMvcSupport 需要加载到 mvc 的容器 <img src="`+s+`" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span> @Configuration</span></span>
<span class="line"><span> public class SpringMvcSupport extends WebMvcConfigurationSupport {</span></span>
<span class="line"><span>     @Override</span></span>
<span class="line"><span>     protected void addResourceHandlers(ResourceHandlerRegistry registry) {</span></span>
<span class="line"><span>         registry.addResourceHandler(&quot;/pages/**&quot;)</span></span>
<span class="line"><span>             .addResourceLocations(&quot;/pages/&quot;);</span></span>
<span class="line"><span>         registry.addResourceHandler(&quot;/css/**&quot;)</span></span>
<span class="line"><span>             .addResourceLocations(&quot;/css/&quot;);</span></span>
<span class="line"><span>         registry.addResourceHandler(&quot;/js/**&quot;)</span></span>
<span class="line"><span>             .addResourceLocations(&quot;/js/&quot;);</span></span>
<span class="line"><span>         registry.addResourceHandler(&quot;/plugins/**&quot;)</span></span>
<span class="line"><span>             .addResourceLocations(&quot;/plugins/&quot;);</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span> }</span></span></code></pre></div></li><li><p>使用 postman 或 apifox 测通增删改查接口</p></li><li><p>完成 webapp 中 pages 的 books.html 中的增删改查 js 代码</p><ol><li>列表 查询所有</li><li>添加，添加小说</li><li>修改，先查（回显数据--需要小说的 id）---&gt;修改</li><li>删除，删除小说（通过 id）</li></ol></li></ol></li></ul></li></ul><p>注意：联调是后端调后端的，前端改前端的，本次练习主要修改后端的 Reslut 进行匹配</p><h2 id="_5-拦截器【理解】" tabindex="-1">5. 拦截器【理解】 <a class="header-anchor" href="#_5-拦截器【理解】" aria-label="Permalink to &quot;5\\. 拦截器【理解】&quot;">​</a></h2><h3 id="_5-1-拦截器简介-🍐" tabindex="-1">5.1 拦截器简介 🍐 <a class="header-anchor" href="#_5-1-拦截器简介-🍐" aria-label="Permalink to &quot;5.1 拦截器简介 🍐&quot;">​</a></h3><h4 id="_5-1-1-「拦截器」核心问题-答案" tabindex="-1">5.1.1 「拦截器」核心问题&amp;答案 <a class="header-anchor" href="#_5-1-1-「拦截器」核心问题-答案" aria-label="Permalink to &quot;5.1.1 「拦截器」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>拦截器拦截的对象是谁？</li><li>拦截器和过滤器有什么区别？</li></ol><p>点击查看答案</p><p><img src="`+k+'" alt="image-20210805175445422"></p><ul><li><p>拦截器（Interceptor）是一种<strong>动态拦截方法调用</strong>的机制，在 SpringMVC 中动态拦截控制器方法的执行 👈</p></li><li><p>作用：</p><ol><li>在指定的方法调用前后执行预先设定的代码</li><li>阻止原始方法的执行</li><li>总结：增强</li></ol></li><li><p>核心原理：AOP 思想 👈</p></li><li><p>拦截器和过滤器的区别 🍐</p><ul><li>归属不同：<strong>Filter 属于 Servlet 技术，Interceptor 属于 SpringMVC 技术</strong></li><li>拦截内容不同：Filter 对所有访问进行增强，Interceptor 仅针对 SpringMVC 的访问进行增强</li></ul></li></ul><p><img src="'+m+`" alt="image-20210805175539717"></p><h3 id="_5-2-拦截器入门案例-✏️" tabindex="-1">5.2 拦截器入门案例 ✏️ <a class="header-anchor" href="#_5-2-拦截器入门案例-✏️" aria-label="Permalink to &quot;5.2 拦截器入门案例 ✏️&quot;">​</a></h3><h4 id="_5-2-1-「拦截器入门案例」核心问题-答案" tabindex="-1">5.2.1 「拦截器入门案例」核心问题&amp;答案 <a class="header-anchor" href="#_5-2-1-「拦截器入门案例」核心问题-答案" aria-label="Permalink to &quot;5.2.1 「拦截器入门案例」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>定义拦截器需要实现什么接口？</li></ol><p>点击查看答案</p><ul><li>实现 HandlerInterceptor 接口即可</li></ul><h4 id="_5-2-2-拦截器代码实现" tabindex="-1">5.2.2 拦截器代码实现 <a class="header-anchor" href="#_5-2-2-拦截器代码实现" aria-label="Permalink to &quot;5.2.2 拦截器代码实现&quot;">​</a></h4><h5 id="【第一步】定义拦截器" tabindex="-1">【第一步】定义拦截器 <a class="header-anchor" href="#【第一步】定义拦截器" aria-label="Permalink to &quot;【第一步】定义拦截器&quot;">​</a></h5><blockquote><p>做法：定义一个类，实现 HandlerInterceptor 接口即可 包名：com.xxx.controller.interceptor</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Component //注意当前类必须受Spring容器控制</span></span>
<span class="line"><span>//定义拦截器类，实现HandlerInterceptor接口</span></span>
<span class="line"><span>public class ProjectInterceptor implements HandlerInterceptor {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    //原始方法调用前执行的内容</span></span>
<span class="line"><span>    //返回值类型可以拦截控制的执行，true放行，false终止</span></span>
<span class="line"><span>    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {</span></span>
<span class="line"><span>        System.out.println(&quot;preHandle...&quot;+contentType);</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    //原始方法调用后执行的内容</span></span>
<span class="line"><span>    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {</span></span>
<span class="line"><span>        System.out.println(&quot;postHandle...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    //原始方法调用完成后执行的内容</span></span>
<span class="line"><span>    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {</span></span>
<span class="line"><span>        System.out.println(&quot;afterCompletion...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="【第二步】配置加载拦截器" tabindex="-1">【第二步】配置加载拦截器 <a class="header-anchor" href="#【第二步】配置加载拦截器" aria-label="Permalink to &quot;【第二步】配置加载拦截器&quot;">​</a></h5><p>方式 1:继承 WebMvcConfigurationSupport 类，覆写 addInterceptors 方法 👈 简单实用</p><blockquote><p>包名：com.xxx.config</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class SpringMvcSupport extends WebMvcConfigurationSupport {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private ProjectInterceptor projectInterceptor;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    protected void addInterceptors(InterceptorRegistry registry) {</span></span>
<span class="line"><span>        //配置拦截器</span></span>
<span class="line"><span>        registry.addInterceptor(projectInterceptor)</span></span>
<span class="line"><span>            .addPathPatterns(&quot;/books&quot;,&quot;/books/*&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>方式 2:使用标准接口 WebMvcConfigurer 简化开发（注意：侵入式较强）【选用】 🚀</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ComponentScan({&quot;com.itheima.controller&quot;})</span></span>
<span class="line"><span>@EnableWebMvc</span></span>
<span class="line"><span>//实现WebMvcConfigurer接口可以简化开发，但具有一定的侵入性</span></span>
<span class="line"><span>public class SpringMvcConfig implements WebMvcConfigurer {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private ProjectInterceptor projectInterceptor;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void addInterceptors(InterceptorRegistry registry) {</span></span>
<span class="line"><span>        //配置多拦截器</span></span>
<span class="line"><span>        registry.addInterceptor(projectInterceptor)</span></span>
<span class="line"><span>            .addPathPatterns(&quot;/books&quot;,&quot;/books/*&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_5-2-拦截器流程分析" tabindex="-1">5.2 拦截器流程分析 <a class="header-anchor" href="#_5-2-拦截器流程分析" aria-label="Permalink to &quot;5.2 拦截器流程分析&quot;">​</a></h4><p><img src="`+q+`" alt="image-20210805180846313"></p><h3 id="_5-3-拦截器参数" tabindex="-1">5.3 拦截器参数 <a class="header-anchor" href="#_5-3-拦截器参数" aria-label="Permalink to &quot;5.3 拦截器参数&quot;">​</a></h3><h4 id="_5-3-1-「拦截器参数」核心问题-答案" tabindex="-1">5.3.1 「拦截器参数」核心问题&amp;答案 <a class="header-anchor" href="#_5-3-1-「拦截器参数」核心问题-答案" aria-label="Permalink to &quot;5.3.1 「拦截器参数」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>preHandle()返回值具体的含义？</li></ol><p>点击查看答案</p><ul><li>false：拦截</li><li>true：放行</li></ul><h4 id="_5-3-2-前置处理-prehandle【重要】❤️" tabindex="-1">5.3.2 前置处理 preHandle【重要】❤️ <a class="header-anchor" href="#_5-3-2-前置处理-prehandle【重要】❤️" aria-label="Permalink to &quot;5.3.2 前置处理 preHandle【重要】❤️&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//原始方法调用前执行的内容</span></span>
<span class="line"><span>//返回值类型可以拦截控制的执行，true放行，false终止</span></span>
<span class="line"><span>public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {</span></span>
<span class="line"><span>    System.out.println(&quot;preHandle...&quot;+contentType);</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><p>参数</p><ol><li>request:请求对象</li><li>response:响应对象</li><li>handler:被调用的处理器对象，本质上是一个方法对象，对反射技术中的 Method 对象进行了再包装</li></ol></li><li><p>返回值 返回值为 false，被拦截的处理器将不执行。</p></li></ul><h4 id="_5-3-3-后置处理-posthandle-🚀" tabindex="-1">5.3.3 后置处理 postHandle 🚀 <a class="header-anchor" href="#_5-3-3-后置处理-posthandle-🚀" aria-label="Permalink to &quot;5.3.3 后置处理 postHandle 🚀&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//原始方法调用后执行的内容</span></span>
<span class="line"><span>public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {</span></span>
<span class="line"><span>    System.out.println(&quot;postHandle...&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>参数 modelAndView：如果处理器执行完成具有返回结果，可以读取到对应数据与页面信息，并进行跳转</li></ul><blockquote><p>注意：如果处理器方法出现异常了，该方法不会执行 👈</p></blockquote><h4 id="_5-3-4-完成后处理-aftercompletion-🚀" tabindex="-1">5.3.4 完成后处理 afterCompletion 🚀 <a class="header-anchor" href="#_5-3-4-完成后处理-aftercompletion-🚀" aria-label="Permalink to &quot;5.3.4 完成后处理 afterCompletion 🚀&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//原始方法调用完成后执行的内容</span></span>
<span class="line"><span>public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {</span></span>
<span class="line"><span>    System.out.println(&quot;afterCompletion...&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>参数 ex:如果处理器执行过程中出现异常对象，可以针对异常情况进行单独处理</li></ul><blockquote><p>注意：无论处理器方法内部是否出现异常，该方法都会执行。</p></blockquote><h3 id="_5-4-拦截器链配置【了解】-🍐-🚀" tabindex="-1">5.4 拦截器链配置【了解】 🍐 🚀 <a class="header-anchor" href="#_5-4-拦截器链配置【了解】-🍐-🚀" aria-label="Permalink to &quot;5.4 拦截器链配置【了解】 🍐 🚀&quot;">​</a></h3><h4 id="_5-4-1-「拦截器链」核心问题-答案" tabindex="-1">5.4.1 「拦截器链」核心问题&amp;答案 <a class="header-anchor" href="#_5-4-1-「拦截器链」核心问题-答案" aria-label="Permalink to &quot;5.4.1 「拦截器链」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>什么是拦截器链？</li></ol><p>点击查看答案</p><ul><li><p><strong>拦截器链</strong>：拦截器可以配置多个，形成链条</p></li><li><p>多个拦截器工作流程分析</p><ul><li>当配置多个拦截器时，形成拦截器链</li><li>拦截器链的运行顺序参照拦截器添加顺序为准</li><li>当拦截器中出现对原始处理器的拦截，后面的拦截器均终止运行</li><li>当拦截器运行中断，仅运行配置在前面的拦截器的 afterCompletion 操作</li></ul></li></ul><p><img src="`+v+`" alt="image-20210805181537718"></p><h4 id="_5-4-2-多个拦截器配置" tabindex="-1">5.4.2 多个拦截器配置 <a class="header-anchor" href="#_5-4-2-多个拦截器配置" aria-label="Permalink to &quot;5.4.2 多个拦截器配置&quot;">​</a></h4><ul><li>定义第二个拦截器</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class ProjectInterceptor2 implements HandlerInterceptor {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {</span></span>
<span class="line"><span>        System.out.println(&quot;preHandle...222&quot;);</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {</span></span>
<span class="line"><span>        System.out.println(&quot;postHandle...222&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {</span></span>
<span class="line"><span>        System.out.println(&quot;afterCompletion...222&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>配置第二个拦截器</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@ComponentScan({&quot;com.itheima.controller&quot;})</span></span>
<span class="line"><span>@EnableWebMvc</span></span>
<span class="line"><span>//实现WebMvcConfigurer接口可以简化开发，但具有一定的侵入性</span></span>
<span class="line"><span>public class SpringMvcConfig implements WebMvcConfigurer {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private ProjectInterceptor projectInterceptor;</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private ProjectInterceptor2 projectInterceptor2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void addInterceptors(InterceptorRegistry registry) {</span></span>
<span class="line"><span>        //配置多拦截器</span></span>
<span class="line"><span>        registry.addInterceptor(projectInterceptor)</span></span>
<span class="line"><span>            .addPathPatterns(&quot;/books&quot;,&quot;/books/*&quot;);</span></span>
<span class="line"><span>        registry.addInterceptor(projectInterceptor2)</span></span>
<span class="line"><span>            .addPathPatterns(&quot;/books&quot;,&quot;/books/*&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,241),C=[y];function E(S,_,x,I,R,F){return p(),n("div",null,C)}const M=a(f,[["render",E]]);export{P as __pageData,M as default};
