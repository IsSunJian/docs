import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.-JfgED0h.js";const e="/docs/assets/128b21c4c02c47cba07d8c767a179c4c.DxGj4FKF.png",l="/docs/assets/360e32270d3c4b3dbe937412ad8565bd.CqPdU7ON.png",t="/docs/assets/e8d8e16566594dcfa71cdb344ae5649b.MhlGEz8v.png",i="/docs/assets/a99b0f64db6b4df49e436373f18da996.Cllz-95p.png",o="/docs/assets/cb68e6617dd0438ba7141975a17256ed.DW80cBTC.png",c="/docs/assets/46345e01169a4f7db34a269495533290.5Z9IlDAW.png",r="/docs/assets/a6596958334e4804955b41cf59dc3d22.DUYQi2pE.png",u="/docs/assets/9ec8dff0c8634fc4bca4ce5e70f44f90.CXLLdkh2.png",d="/docs/assets/1b2f8505266b4ffe96a02cd37a20929a.cw4p22vu.png",g="/docs/assets/766a84311476486094a14be51f8a0c28.BYWowJ6s.png",m="/docs/assets/369081530b6e4eae97c28d49cd3c4619.CaQz2rOy.png",h="/docs/assets/acf4cf7935ee41ae8ab0abd93bb16b59.BjeA-4aE.png",q="/docs/assets/93680e4514e1467ba7947d3f4697c09f.Cm8MexOI.png",A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"home/MyBatis-du1.md","filePath":"home/MyBatis-du1.md"}'),b={name:"home/MyBatis-du1.md"},v=p('<h2 id="一、mybatis概述" tabindex="-1">一、MyBatis概述 <a class="header-anchor" href="#一、mybatis概述" aria-label="Permalink to &quot;一、MyBatis概述&quot;">​</a></h2><h2 id="_1-1-框架-framework" tabindex="-1">1.1 框架 framework <a class="header-anchor" href="#_1-1-框架-framework" aria-label="Permalink to &quot;1.1 框架 framework&quot;">​</a></h2><p><img src="'+e+'" alt="在这里插入图片描述"></p><h2 id="_1-2-mybatis和jdbc的关系" tabindex="-1">1.2 MyBatis和JDBC的关系 <a class="header-anchor" href="#_1-2-mybatis和jdbc的关系" aria-label="Permalink to &quot;1.2 MyBatis和JDBC的关系&quot;">​</a></h2><p>MyBatis是增强版的jdbc，把一些功能通过反射封装好了</p><h2 id="_1-3-jdbc不足" tabindex="-1">1.3 JDBC不足 <a class="header-anchor" href="#_1-3-jdbc不足" aria-label="Permalink to &quot;1.3 JDBC不足&quot;">​</a></h2><ul><li>sql<strong>语句写死</strong>，如果拓展功能，可能整个sql语句作废</li><li><strong>set操作繁琐</strong>，如果sql语句有一百个?可能要写一百个set</li></ul><h2 id="_1-4-了解mybatis" tabindex="-1">1.4 了解MyBatis <a class="header-anchor" href="#_1-4-了解mybatis" aria-label="Permalink to &quot;1.4 了解MyBatis&quot;">​</a></h2><ul><li>MyBatis是对jdbc的封装</li><li>MyBatis之前叫做ibatis，后来才改名</li><li>MyBatis是持久层框架</li></ul><h2 id="_1-5-了解orm" tabindex="-1">1.5 了解ORM <a class="header-anchor" href="#_1-5-了解orm" aria-label="Permalink to &quot;1.5 了解ORM&quot;">​</a></h2><ul><li><strong>O</strong>（Object）：JVM中的java对象</li><li><strong>R</strong>（Relational）：关系型数据库</li><li><strong>M</strong>（Mapping）：映射</li><li><strong>什么是</strong>ORM？：JavaBean与数据表记录的互相映射</li><li><img src="'+l+'" alt="在这里插入图片描述"></li></ul><h2 id="二、mybatis入门程序" tabindex="-1">二、MyBatis入门程序 <a class="header-anchor" href="#二、mybatis入门程序" aria-label="Permalink to &quot;二、MyBatis入门程序&quot;">​</a></h2><h2 id="_2-1-建数据库表" tabindex="-1">2.1 建数据库表 <a class="header-anchor" href="#_2-1-建数据库表" aria-label="Permalink to &quot;2.1 建数据库表&quot;">​</a></h2><p><img src="'+t+'" alt="在这里插入图片描述"> 添加两条字段 <img src="'+i+`" alt="在这里插入图片描述"></p><h2 id="_2-2-加载mybatis的五个步骤" tabindex="-1">2.2 加载mybatis的五个步骤 <a class="header-anchor" href="#_2-2-加载mybatis的五个步骤" aria-label="Permalink to &quot;2.2 加载mybatis的五个步骤&quot;">​</a></h2><ol><li>配置Maven环境，打包方式设置为jar，加载MyBatis，MySQL</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;packaging&gt;jar&lt;/packaging&gt;</span></span>
<span class="line"><span>&lt;dependencies&gt;</span></span>
<span class="line"><span>        &lt;!--  MyBatis  --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.mybatis&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;mybatis&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;3.5.11&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;!--  MySQL  --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;mysql&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;8.0.30&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;/dependencies&gt;</span></span></code></pre></div><ol start="2"><li>新建，编辑mybatis-config.xml文件（放入resources文件夹）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span></span>
<span class="line"><span>&lt;!DOCTYPE configuration</span></span>
<span class="line"><span>        PUBLIC &quot;-//mybatis.org//DTD Config 3.0//EN&quot;</span></span>
<span class="line"><span>        &quot;http://mybatis.org/dtd/mybatis-3-config.dtd&quot;&gt;</span></span>
<span class="line"><span>&lt;configuration&gt;</span></span>
<span class="line"><span>    &lt;environments default=&quot;development&quot;&gt;</span></span>
<span class="line"><span>        &lt;environment id=&quot;development&quot;&gt;</span></span>
<span class="line"><span>            &lt;transactionManager type=&quot;JDBC&quot;/&gt;</span></span>
<span class="line"><span>            &lt;dataSource type=&quot;POOLED&quot;&gt;</span></span>
<span class="line"><span>                &lt;property name=&quot;driver&quot; value=&quot;com.mysql.cj.jdbc.Driver&quot;/&gt;</span></span>
<span class="line"><span>                &lt;property name=&quot;url&quot; value=&quot;jdbc:mysql://localhost:3306/powernode&quot;/&gt;</span></span>
<span class="line"><span>                &lt;property name=&quot;username&quot; value=&quot;xxxx&quot;/&gt;</span></span>
<span class="line"><span>                &lt;property name=&quot;password&quot; value=&quot;xxxx&quot;/&gt;</span></span>
<span class="line"><span>            &lt;/dataSource&gt;</span></span>
<span class="line"><span>        &lt;/environment&gt;</span></span>
<span class="line"><span>    &lt;/environments&gt;</span></span>
<span class="line"><span>    &lt;mappers&gt;</span></span>
<span class="line"><span>        &lt;mapper resource=&quot;CarMapper.xml&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/mappers&gt;</span></span>
<span class="line"><span>&lt;/configuration&gt;</span></span></code></pre></div><ol start="3"><li>新建，配置xxxMapper.xml文件</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span></span>
<span class="line"><span>&lt;!DOCTYPE mapper</span></span>
<span class="line"><span>        PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span></span>
<span class="line"><span>        &quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;</span></span>
<span class="line"><span>&lt;mapper namespace=&quot;org.mybatis.example.BlogMapper&quot;&gt;</span></span>
<span class="line"><span>    &lt;insert id=&quot;&quot;&gt;</span></span>
<span class="line"><span>        insert into t_car(id,car_num,brand,guide_price,produce_time,car_type)</span></span>
<span class="line"><span>        values (null,1003,&quot;面包车&quot;,13.00,&quot;2020-10-13&quot;,&quot;飞行汽车&quot;)</span></span>
<span class="line"><span>    &lt;/insert&gt;</span></span>
<span class="line"><span>&lt;/mapper&gt;</span></span></code></pre></div><ol start="4"><li><p>在xxxMapper中编写sql代码（在3中已完成）</p></li><li><p>把xxxMapper.txt文件路径放入mybatis-config.txt中（在2中已完成）</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;mappers&gt;</span></span>
<span class="line"><span>        &lt;mapper resource=&quot;CarMapper.xml&quot;/&gt;</span></span>
<span class="line"><span>&lt;/mappers&gt;</span></span></code></pre></div><h2 id="_2-3-mybatis中的事务" tabindex="-1">2.3 MyBatis中的事务 <a class="header-anchor" href="#_2-3-mybatis中的事务" aria-label="Permalink to &quot;2.3 MyBatis中的事务&quot;">​</a></h2><p>在mybatis-config.xml中有一行为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;transactionManager type=&quot;JDBC&quot;/&gt;</span></span></code></pre></div><p>type类型可以写成两种，一种是JDBC另一种是MANAGED（不区分大小写）</p><ul><li><strong>JDBC</strong>：交给JDBC处理事务（默认false，表示开启事务，需要手动提交）</li><li><strong>MANAGED</strong>：有用到spring框架时设置为此，表交给框架处理事务，如果没有用到框架设置为此类型，则没有人处理事务，会自动提交</li></ul><p>注意事项：</p><ul><li>SqlSessionFactory.openSession()默认开启事务</li></ul><h2 id="_2-4-编写mybatis代码" tabindex="-1">2.4 编写MyBatis代码 <a class="header-anchor" href="#_2-4-编写mybatis代码" aria-label="Permalink to &quot;2.4 编写MyBatis代码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>   SqlSession sqlSession = null;</span></span>
<span class="line"><span>   try {</span></span>
<span class="line"><span>       SqlSessionFactoryBuilder sqlSessionFactoryBuilder = new SqlSessionFactoryBuilder();</span></span>
<span class="line"><span>       SqlSessionFactory sqlSessionFactory = sqlSessionFactoryBuilder.build(Resources.getResourceAsReader(&quot;mybatis-config.xml&quot;));</span></span>
<span class="line"><span>       sqlSession = sqlSessionFactory.openSession();</span></span>
<span class="line"><span>       int count = sqlSession.insert(&quot;insertCar&quot;);</span></span>
<span class="line"><span>       System.out.println(&quot;新增了记录&quot;+count);</span></span>
<span class="line"><span>       //提交事务</span></span>
<span class="line"><span>       sqlSession.commit();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   } catch (Exception e) {</span></span>
<span class="line"><span>       if (sqlSession != null) {</span></span>
<span class="line"><span>           sqlSession.rollback();</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>       e.printStackTrace();</span></span>
<span class="line"><span>   }finally {</span></span>
<span class="line"><span>       if (sqlSession != null) {</span></span>
<span class="line"><span>           sqlSession.close();</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>   }</span></span></code></pre></div><h2 id="_2-5-在mybatis中引入junit" tabindex="-1">2.5 在MyBatis中引入JUnit <a class="header-anchor" href="#_2-5-在mybatis中引入junit" aria-label="Permalink to &quot;2.5 在MyBatis中引入JUnit&quot;">​</a></h2><p>在maven中添加<a href="https://so.csdn.net/so/search?q=junit%E4%BE%9D%E8%B5%96&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">junit依赖</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;junit&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;junit&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;4.13.2&lt;/version&gt;</span></span>
<span class="line"><span>            &lt;scope&gt;test&lt;/scope&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span></code></pre></div><p>新建test包，以及创建CarMapperTest类 <img src="`+o+`" alt="在这里插入图片描述"> 在新建的类中编写MyBatis代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>public class CarMapperTest {</span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void insertCar(){</span></span>
<span class="line"><span>        SqlSession sqlSession = null;</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            SqlSessionFactoryBuilder sqlSessionFactoryBuilder = new SqlSessionFactoryBuilder();</span></span>
<span class="line"><span>            SqlSessionFactory sqlSessionFactory = sqlSessionFactoryBuilder.build(Resources.getResourceAsReader(&quot;mybatis-config.xml&quot;));</span></span>
<span class="line"><span>            sqlSession = sqlSessionFactory.openSession();</span></span>
<span class="line"><span>            int count = sqlSession.insert(&quot;insertCar&quot;);</span></span>
<span class="line"><span>            System.out.println(&quot;新增了记录&quot;+count);</span></span>
<span class="line"><span>            //提交事务</span></span>
<span class="line"><span>            sqlSession.commit();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            if (sqlSession != null) {</span></span>
<span class="line"><span>                sqlSession.rollback();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }finally {</span></span>
<span class="line"><span>            if (sqlSession != null) {</span></span>
<span class="line"><span>                sqlSession.close();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>运行，测试一下，绿色就是没问题 <img src="`+c+`" alt="在这里插入图片描述"> junit小知识点：</p><ul><li>断言测试方法：Assert.assertEquals(期望值，实际值)；</li></ul><h2 id="_2-6-mybatis集成日志组件" tabindex="-1">2.6 MyBatis集成日志组件 <a class="header-anchor" href="#_2-6-mybatis集成日志组件" aria-label="Permalink to &quot;2.6 MyBatis集成日志组件&quot;">​</a></h2><ul><li><strong>SLF4J</strong>（<strong>沙拉疯</strong>）：logback就是继承沙拉疯实现的</li><li><strong>LOG4J</strong>：</li><li><strong>LOG4J2</strong>：</li><li><strong>STDOUT_LOGGING：MyBatis</strong>内部实现的日志组件，</li></ul><p><a href="https://so.csdn.net/so/search?q=logback&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">logback</a>、log4j、log4j2是同一个作者编写的</p><p>若使用STDOUT_LOGGING，需要在mybatis-config.xml里添加配置文件 注意：settings标签必须添加在configuration下面</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;configuration&gt;</span></span>
<span class="line"><span>    &lt;settings&gt;</span></span>
<span class="line"><span>        &lt;setting name=&quot;logImpl&quot; value=&quot;STDOUT_LOGGING&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/settings&gt;</span></span>
<span class="line"><span>&lt;/configuration&gt;</span></span></code></pre></div><p>这边不使用STDOUT_LOGGING日志组件，我们使用最常用的logback组件 配置步骤：</p><ol><li>在maven中添加logback的依赖</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;ch.qos.logback&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;logback-classic&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;1.2.11&lt;/version&gt;</span></span>
<span class="line"><span>            &lt;scope&gt;test&lt;/scope&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span></code></pre></div><ol start="2"><li>在mybatis-config.xml中删除日志设置（除了STDOUT_LOGGING自带日志组件外，其他组件不需要写日志设置）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;!-- 删除这些 --&gt;</span></span>
<span class="line"><span>    &lt;settings&gt;</span></span>
<span class="line"><span>        &lt;setting name=&quot;logImpl&quot; value=&quot;STDOUT_LOGGING&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/settings&gt;</span></span></code></pre></div><ol start="3"><li>写配置文件（名字必须为logback.xml或logback-test.xml） 必须放在resources目录下</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 配置文件修改时重新加载，默认true --&gt;</span></span>
<span class="line"><span>&lt;configuration debug=&quot;false&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 控制台输出 --&gt;</span></span>
<span class="line"><span>    &lt;appender name=&quot;STDOUT&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;</span></span>
<span class="line"><span>        &lt;encoder class=&quot;ch.qos.logback.classic.encoder.PatternLayoutEncoder&quot; charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>            &lt;!-- 输出日志记录格式 --&gt;</span></span>
<span class="line"><span>            &lt;pattern&gt;[%thread] %-5level %logger{50} - %msg%n&lt;/pattern&gt;</span></span>
<span class="line"><span>        &lt;/encoder&gt;</span></span>
<span class="line"><span>    &lt;/appender&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!--    mybatis log configure--&gt;</span></span>
<span class="line"><span>    &lt;logger name=&quot;com.apache.ibatis&quot; level=&quot;TRACE&quot;/&gt;</span></span>
<span class="line"><span>    &lt;logger name=&quot;java.sql.Connection&quot; level=&quot;DEBUG&quot;/&gt;</span></span>
<span class="line"><span>    &lt;logger name=&quot;java.sql.Statement&quot; level=&quot;DEBUG&quot;/&gt;</span></span>
<span class="line"><span>    &lt;logger name=&quot;java.sql.PreparedStatement&quot; level=&quot;DEBUG&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 日志输出级别,LOGBACK日志级别包括五个：TRACE &lt; DEBUG &lt; INFO &lt; WARN &lt; ERROR--&gt;</span></span>
<span class="line"><span>    &lt;root level=&quot;DEBUG&quot;&gt;</span></span>
<span class="line"><span>        &lt;appender-ref ref=&quot;STDOUT&quot;/&gt;</span></span>
<span class="line"><span>        &lt;appender-ref ref=&quot;FILE&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/root&gt;</span></span>
<span class="line"><span>&lt;/configuration&gt;</span></span></code></pre></div><ol start="4"><li>运行测试</li></ol><h2 id="_2-7-mybatis工具类的编写" tabindex="-1">2.7 MyBatis工具类的编写 <a class="header-anchor" href="#_2-7-mybatis工具类的编写" aria-label="Permalink to &quot;2.7 MyBatis工具类的编写&quot;">​</a></h2><p>在编写代码中，每次都通过SqlSessionFactoryBuilder三步骤获取session太麻烦，我们编写一个工具类get会比较方便点</p><ol><li>新建类utils.SqlSessionUtil <img src="`+r+`" alt="在这里插入图片描述"></li><li>编写代码</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class SqlSessionUtilTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 测试工具类</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void openSessionTest(){</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        int count = session.insert(&quot;insertCar&quot;);</span></span>
<span class="line"><span>        System.out.println(count);</span></span>
<span class="line"><span>        session.commit();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        session.close();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="3"><li>运行测试（数据库正常添加，完成）</li></ol><h2 id="三、使用mybatis完成crud" tabindex="-1">三、使用MyBatis完成CRUD <a class="header-anchor" href="#三、使用mybatis完成crud" aria-label="Permalink to &quot;三、使用MyBatis完成CRUD&quot;">​</a></h2><h2 id="_3-1-实现insert新增" tabindex="-1">3.1 实现Insert新增 <a class="header-anchor" href="#_3-1-实现insert新增" aria-label="Permalink to &quot;3.1 实现Insert新增&quot;">​</a></h2><h3 id="_1-1-mybatis中完成map集合传参" tabindex="-1">1.1 MyBatis中完成Map集合传参 <a class="header-anchor" href="#_1-1-mybatis中完成map集合传参" aria-label="Permalink to &quot;1.1 MyBatis中完成Map集合传参&quot;">​</a></h3><p>第一个入门程序已完成，现在我们来做MyBatis的CRUD操作 入门程序有个问题：实战的时候新增数据表行数据不可能是固定值 回顾：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;mapper namespace=&quot;org.mybatis.example.BlogMapper&quot;&gt;</span></span>
<span class="line"><span>    &lt;insert id=&quot;insertCar&quot;&gt;</span></span>
<span class="line"><span>        insert into t_car(id,car_num,brand,guide_price,produce_time,car_type)</span></span>
<span class="line"><span>        values (null,1003,&quot;面包车&quot;,13.00,&quot;2020-10-13&quot;,&quot;飞行汽车&quot;)</span></span>
<span class="line"><span>    &lt;/insert&gt;</span></span>
<span class="line"><span>&lt;/mapper&gt;</span></span></code></pre></div><ol><li>继续完善这个程序，新建一个模块叫CRUD，如图，把模块1的一些文件拷贝过来，maven依赖引用 <img src="`+u+`" alt="在这里插入图片描述"></li><li>修改CarMapper.xml文件，加上占位符 在MyBatis中占位符为#{}，对应JDBC的?</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;insert id=&quot;insertCar&quot;&gt;</span></span>
<span class="line"><span>        insert into t_car(id,car_num,brand,guide_price,produce_time,car_type)</span></span>
<span class="line"><span>        values (null,#{},#{},#{},#{},#{})</span></span>
<span class="line"><span>    &lt;/insert&gt;</span></span></code></pre></div><ol start="3"><li>编写测试代码</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class CarMapperTest {</span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void insertCar(){</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        Map&lt;String,Object&gt; map = new HashMap&lt;&gt;();</span></span>
<span class="line"><span>        map.put(&quot;carNum&quot;,&quot;1004&quot;);</span></span>
<span class="line"><span>        map.put(&quot;brand&quot;,&quot;比亚迪汉&quot;);</span></span>
<span class="line"><span>        map.put(&quot;guidePrice&quot;,160.00);</span></span>
<span class="line"><span>        map.put(&quot;produceTime&quot;,&quot;2022-06-08&quot;);</span></span>
<span class="line"><span>        map.put(&quot;carType&quot;,&quot;新能源汽车&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        int count= session.insert(&quot;insertCar&quot;, map);</span></span>
<span class="line"><span>        System.out.println(&quot;新增的条目：&quot;+count);</span></span>
<span class="line"><span>        session.commit();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        session.close();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="4"><li>修改mapper文件中的占位符#{}（大括号中间填入map.get(key)里面的key）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;mapper namespace=&quot;org.mybatis.example.BlogMapper&quot;&gt;</span></span>
<span class="line"><span>    &lt;insert id=&quot;insertCar&quot;&gt;</span></span>
<span class="line"><span>        insert into t_car(id,car_num,brand,guide_price,produce_time,car_type)</span></span>
<span class="line"><span>        values (null,#{carNum},#{brand},#{guidePrice},#{produceTime},#{carType})</span></span>
<span class="line"><span>    &lt;/insert&gt;</span></span>
<span class="line"><span>&lt;/mapper&gt;</span></span></code></pre></div><ol start="5"><li>测试，完成</li></ol><h3 id="_1-2-mybatis中通过pojo类完成传参" tabindex="-1">1.2 MyBatis中通过POJO类完成传参 <a class="header-anchor" href="#_1-2-mybatis中通过pojo类完成传参" aria-label="Permalink to &quot;1.2 MyBatis中通过POJO类完成传参&quot;">​</a></h3><ol><li>新建POJO包、类（pojo.Car）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>public class Car {</span></span>
<span class="line"><span>    private Long id;</span></span>
<span class="line"><span>    private String carNum;</span></span>
<span class="line"><span>    private String brand;</span></span>
<span class="line"><span>    private Double guidePrice;</span></span>
<span class="line"><span>    private String produceTime;</span></span>
<span class="line"><span>    private String carType;</span></span>
<span class="line"><span>    //此处忽略构造方法、getting setting方法</span></span>
<span class="line"><span>    .....</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="2"><li>编写测试代码</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void insertCar(){</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Car car = new Car(null,&quot;1005&quot;,&quot;比亚迪秦&quot;,30.0,&quot;2020-10-20&quot;,&quot;新能源&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        int count= session.insert(&quot;insertCar&quot;, car);</span></span>
<span class="line"><span>        System.out.println(&quot;新增的条目：&quot;+count);</span></span>
<span class="line"><span>        session.commit();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        session.close();</span></span>
<span class="line"><span>    }</span></span></code></pre></div><ol start="3"><li>编辑mapper文件</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;mapper namespace=&quot;org.mybatis.example.BlogMapper&quot;&gt;</span></span>
<span class="line"><span>    &lt;insert id=&quot;insertCar&quot;&gt;</span></span>
<span class="line"><span>        insert into t_car(id,car_num,brand,guide_price,produce_time,car_type)</span></span>
<span class="line"><span>        values (null,#{carNum},#{brand},#{guidePrice},#{produceTime},#{carType})</span></span>
<span class="line"><span>    &lt;/insert&gt;</span></span>
<span class="line"><span>&lt;/mapper&gt;</span></span></code></pre></div><ol start="4"><li>运行测试方法，总结： mapper文件中填写的#{carType})，MyBatis会通过反射机制查找getCarType()方法得到值</li></ol><h2 id="_3-3-实现delete删除" tabindex="-1">3.3 实现Delete删除 <a class="header-anchor" href="#_3-3-实现delete删除" aria-label="Permalink to &quot;3.3 实现Delete删除&quot;">​</a></h2><ol><li>新增Mapper删除</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;delete id=&quot;deleteById&quot;&gt;</span></span>
<span class="line"><span>        delete from t_car where id = #{id}</span></span>
<span class="line"><span>    &lt;/delete&gt;</span></span></code></pre></div><ol start="2"><li>编写测试方法</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void deleteById(){</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        session.delete(&quot;deleteById&quot;,17);</span></span>
<span class="line"><span>        session.commit();</span></span>
<span class="line"><span>        session.close();</span></span>
<span class="line"><span>    }</span></span></code></pre></div><ol start="3"><li>注意事项 当参数只有一个时，参数名可以随意，但是尽量做到见名知意</li></ol><h2 id="_3-4-实现update修改" tabindex="-1">3.4 实现update修改 <a class="header-anchor" href="#_3-4-实现update修改" aria-label="Permalink to &quot;3.4 实现update修改&quot;">​</a></h2><ol><li>编写mapper</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;update id=&quot;updateById&quot;&gt;</span></span>
<span class="line"><span>        update t_car</span></span>
<span class="line"><span>          set car_num=#{carNum},brand=#{brand},guide_price=#{guidePrice},produce_time=#{produceTime},car_type=#{carType}</span></span>
<span class="line"><span>        where id=#{id}</span></span>
<span class="line"><span>    &lt;/update&gt;</span></span></code></pre></div><ol start="2"><li>编写测试类</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testUpdateById(){</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        Car car = new Car(3L,&quot;5123&quot;,&quot;哈哈车&quot;,1.5,&quot;2011-01-04&quot;,&quot;新技术&quot;);</span></span>
<span class="line"><span>        int count = session.update(&quot;updateById&quot;, car);</span></span>
<span class="line"><span>        System.out.println(count);</span></span>
<span class="line"><span>        session.commit();</span></span>
<span class="line"><span>        session.close();</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h2 id="_3-5-实现select查询" tabindex="-1">3.5 实现select查询 <a class="header-anchor" href="#_3-5-实现select查询" aria-label="Permalink to &quot;3.5 实现select查询&quot;">​</a></h2><h3 id="_1-1-selectone查询一个" tabindex="-1">1.1 selectOne查询一个 <a class="header-anchor" href="#_1-1-selectone查询一个" aria-label="Permalink to &quot;1.1 selectOne查询一个&quot;">​</a></h3><ol><li>编写Mapper文件</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;select id=&quot;selectOneById&quot; resultType=&quot;com.powernode.mybatis.pojo.Car&quot;&gt;</span></span>
<span class="line"><span>        select car_num as carNum,</span></span>
<span class="line"><span>               brand,guide_price as guidePrice,</span></span>
<span class="line"><span>               guide_price as guidePrice,</span></span>
<span class="line"><span>               produce_time as produceTime,</span></span>
<span class="line"><span>               car_type as carType</span></span>
<span class="line"><span>        from t_car</span></span>
<span class="line"><span>        where id = #{id}</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span></code></pre></div><ol start="2"><li>编写测试方法</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void selectOneById(){</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        Car car = session.selectOne(&quot;selectOneById&quot;,16L);</span></span>
<span class="line"><span>        System.out.println(car);</span></span>
<span class="line"><span>        session.close();</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>注意事项：</p><ul><li>Mapper配置文件里<strong>要增加</strong>：resultType=“com.powernode.mybatis.pojo.Car”，<strong>指定查询出来是什么类</strong>，MyBatis会自动转换成该类</li><li>guide_price as guidePrice，取别名是为了让pojo类<strong>属性</strong>和<strong>查询结果对应上</strong>，<strong>符合ORM</strong></li></ul><h3 id="_1-2-selectlist查询所有-返回一个集合" tabindex="-1">1.2 selectList查询所有，返回一个集合 <a class="header-anchor" href="#_1-2-selectlist查询所有-返回一个集合" aria-label="Permalink to &quot;1.2 selectList查询所有，返回一个集合&quot;">​</a></h3><ol><li>编写Mapper配置文件</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;select id=&quot;selectAll&quot; resultType=&quot;com.powernode.mybatis.pojo.Car&quot;&gt;</span></span>
<span class="line"><span>        select car_num as carNum,</span></span>
<span class="line"><span>               brand,guide_price as guidePrice,</span></span>
<span class="line"><span>               guide_price as guidePrice,</span></span>
<span class="line"><span>               produce_time as produceTime,</span></span>
<span class="line"><span>               car_type as carType</span></span>
<span class="line"><span>        from t_car</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span></code></pre></div><ol start="2"><li>编写测试代码</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void selectAll(){</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        List&lt;Car&gt; cars = session.selectList(&quot;selectAll&quot;);</span></span>
<span class="line"><span>        cars.forEach( car -&gt; System.out.println(car));</span></span>
<span class="line"><span>        session.close();</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h2 id="_3-6-mapper映射文件的namespace" tabindex="-1">3.6 Mapper映射文件的namespace <a class="header-anchor" href="#_3-6-mapper映射文件的namespace" aria-label="Permalink to &quot;3.6 Mapper映射文件的namespace&quot;">​</a></h2><p>在mapper.xml文件中有一个namespasce，这个属性是用来指定命名空间的，用来防止id重复 在java程序中的写法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>        List&lt;Car&gt; cars = session.selectList(&quot;namespace.selectAll&quot;);</span></span></code></pre></div><p>这样写才是严谨、完整的</p><h2 id="四、mybatis核心配置文件详解" tabindex="-1">四、MyBatis核心配置文件详解 <a class="header-anchor" href="#四、mybatis核心配置文件详解" aria-label="Permalink to &quot;四、MyBatis核心配置文件详解&quot;">​</a></h2><h2 id="_4-1-environment标签" tabindex="-1">4.1 environment标签 <a class="header-anchor" href="#_4-1-environment标签" aria-label="Permalink to &quot;4.1 environment标签&quot;">​</a></h2><p>一个environment对应一个SqlSessionFactory 一个SqlSessionFactory对应一个数据库</p><ol><li>多环境下，配置文件这样写（两个environment）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;environments default=&quot;development&quot;&gt;</span></span>
<span class="line"><span>        &lt;!-- 一个environment对应一个数据库 --&gt;</span></span>
<span class="line"><span>        &lt;environment id=&quot;development&quot;&gt;</span></span>
<span class="line"><span>            &lt;transactionManager type=&quot;JDBC&quot;/&gt;</span></span>
<span class="line"><span>            &lt;dataSource type=&quot;POOLED&quot;&gt;</span></span>
<span class="line"><span>                &lt;property name=&quot;driver&quot; value=&quot;com.mysql.cj.jdbc.Driver&quot;/&gt;</span></span>
<span class="line"><span>                &lt;property name=&quot;url&quot; value=&quot;jdbc:mysql://localhost:3306/powernode&quot;/&gt;</span></span>
<span class="line"><span>                &lt;property name=&quot;username&quot; value=&quot;root&quot;/&gt;</span></span>
<span class="line"><span>                &lt;property name=&quot;password&quot; value=&quot;root&quot;/&gt;</span></span>
<span class="line"><span>            &lt;/dataSource&gt;</span></span>
<span class="line"><span>        &lt;/environment&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;environment id=&quot;development2&quot;&gt;</span></span>
<span class="line"><span>            &lt;transactionManager type=&quot;JDBC&quot;/&gt;</span></span>
<span class="line"><span>            &lt;dataSource type=&quot;POOLED&quot;&gt;</span></span>
<span class="line"><span>                &lt;property name=&quot;driver&quot; value=&quot;com.mysql.cj.jdbc.Driver&quot;/&gt;</span></span>
<span class="line"><span>                &lt;property name=&quot;url&quot; value=&quot;jdbc:mysql://localhost:3306/powernode2&quot;/&gt;</span></span>
<span class="line"><span>                &lt;property name=&quot;username&quot; value=&quot;root&quot;/&gt;</span></span>
<span class="line"><span>                &lt;property name=&quot;password&quot; value=&quot;root&quot;/&gt;</span></span>
<span class="line"><span>            &lt;/dataSource&gt;</span></span>
<span class="line"><span>        &lt;/environment&gt;</span></span>
<span class="line"><span>    &lt;/environments&gt;</span></span></code></pre></div><ol start="2"><li>写测试方法</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class testConfiguration {</span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testEnvironment() throws IOException {</span></span>
<span class="line"><span>        SqlSessionFactoryBuilder sessionFactoryBuilder = new SqlSessionFactoryBuilder();</span></span>
<span class="line"><span>        SqlSessionFactory sessionFactory = sessionFactoryBuilder.build(Resources.getResourceAsStream(&quot;mybatis-config.xml&quot;), &quot;development2&quot;);</span></span>
<span class="line"><span>        SqlSession session = sessionFactory.openSession();</span></span>
<span class="line"><span>        int count = session.insert(&quot;insertCar&quot;);</span></span>
<span class="line"><span>        System.out.println(count);</span></span>
<span class="line"><span>        session.commit();</span></span>
<span class="line"><span>        session.close();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_4-2-transactionmanager标签" tabindex="-1">4.2 transactionManager标签 <a class="header-anchor" href="#_4-2-transactionmanager标签" aria-label="Permalink to &quot;4.2 transactionManager标签&quot;">​</a></h2><p>在mybatis-config.xml配置文件中，有<strong>transactionManager</strong>子标签，表示设置MyBatis的事务管理器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;transactionManager type=&quot;JDBC&quot;/&gt;</span></span></code></pre></div><p>MyBatis中有两个事务管理器</p><ul><li><strong>JDBC</strong>：交给原生JDBC管理setAutoComit(false);需要手动comit()提交</li><li><strong>MANAGED</strong>：交给JEE处理，一般由JEE框架处理，如Spring</li></ul><p>MyBatis底层有一个Transaction接口，实现两个事务</p><ul><li>如果type=“<strong>JDBC</strong>”，那么底层会实例化<strong>JdbcTransaciton</strong>对象</li><li>如果type=“<strong>MANAGED</strong>”，那么底层会实例化<strong>ManagedTransaciton</strong></li></ul><h2 id="_4-3-datasource标签" tabindex="-1">4.3 dataSource标签 <a class="header-anchor" href="#_4-3-datasource标签" aria-label="Permalink to &quot;4.3 dataSource标签&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;dataSource type=&quot;POOLED&quot;&gt;</span></span>
<span class="line"><span>.......</span></span>
<span class="line"><span>&lt;/dataSource&gt;</span></span></code></pre></div><p>问：这个标签有啥用 答：dataSource表示数据源，用来获取Connection对象</p><p>它的type属性可以填写三个值：</p><ul><li><strong>UNPOOLED</strong>：不使用数据库连接池，每次获取Connection都要创建一个新对象</li><li><strong>POOLED</strong>：使用MyBatis自带的连接池</li><li><strong>JNDI</strong>：连接第三方的数据源（如果自己手写框架也可以用这个）</li></ul><h3 id="_3-1-type属性详解" tabindex="-1">3.1 type属性详解 <a class="header-anchor" href="#_3-1-type属性详解" aria-label="Permalink to &quot;3.1 type属性详解&quot;">​</a></h3><p>不同类型的数据源下有不同的属性，比如</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;dataSource type=&quot;POOLED&quot;&gt;</span></span>
<span class="line"><span>....</span></span>
<span class="line"><span>&lt;properties/&gt;</span></span>
<span class="line"><span>....</span></span>
<span class="line"><span>&lt;/dataSource&gt;</span></span></code></pre></div><p>和</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;dataSource type=&quot;JNDI&quot;&gt;</span></span>
<span class="line"><span>....</span></span>
<span class="line"><span>&lt;properties/&gt;</span></span>
<span class="line"><span>....</span></span>
<span class="line"><span>&lt;/dataSource&gt;</span></span></code></pre></div><p>的</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;properties/&gt;</span></span></code></pre></div><p>数量、内容是不一样的，具体需要看官方文档 <strong>JDNI</strong>是：java命名目录接口，Tomcat服务器实现了这个规范 假如需要用第三方数据源，Tomcat中实现了这个数据源，则在properties中填写对应的数据，要和tomat对应上</p><h3 id="_3-2-pooled和unpooled的区别" tabindex="-1">3.2 pooled和unpooled的区别 <a class="header-anchor" href="#_3-2-pooled和unpooled的区别" aria-label="Permalink to &quot;3.2 pooled和unpooled的区别&quot;">​</a></h3><ol><li>unpooled表示<strong>不使用连接池</strong>，每次请求过来都会创建一个Connection</li><li>pooled表示<strong>使用MyBatis自带的连接池</strong>：请求过来会先从连接池获取Connection对象</li></ol><p><strong>问</strong>：使用连接池有什么好处？ <strong>答</strong>： 3. 迟内的Connection数量是固定的，比如池子大小是5，如果5个连接都被占用，第6个要获取连接就先等待，<strong>数量固定</strong> 4. 假如有人一直F5刷新，没有用连接池的话，就会一直创建Connection对象，如果实例化对象过多，可能会导致服务器宕机，<strong>数量固定</strong> 5. 有新请求，第一反应去池中查找，可以<strong>增加效率</strong></p><h3 id="_3-3-配置具体的数据库连接池参数" tabindex="-1">3.3 配置具体的数据库连接池参数 <a class="header-anchor" href="#_3-3-配置具体的数据库连接池参数" aria-label="Permalink to &quot;3.3 配置具体的数据库连接池参数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;!--连接池最大连接数，默认：10--&gt;</span></span>
<span class="line"><span>&lt;property name=&quot;poolMaximumActiveConnections &quot; value=&quot;10&quot;/&gt;</span></span>
<span class="line"><span>&lt;!--可以同时存在的最大空闲连接数，空闲太多则真正关闭一些Connection--&gt;</span></span>
<span class="line"><span>&lt;property name=&quot;poolMaximumIdleConnections &quot; value=&quot;5&quot;/&gt;</span></span>
<span class="line"><span>&lt;!--超时强制关闭时间，默认20000--&gt;</span></span>
<span class="line"><span>&lt;property name=&quot;poolMaximumCheckoutTime &quot; value=&quot;20000&quot;/&gt;</span></span>
<span class="line"><span>&lt;!--如果连接花费时间很长，连接池会隔断时间尝试重新连接并打印日志--&gt;</span></span>
<span class="line"><span>&lt;property name=&quot;poolTimeToWait &quot; value=&quot;2000&quot;/&gt;</span></span></code></pre></div><h2 id="_4-4-properties标签" tabindex="-1">4.4 properties标签 <a class="header-anchor" href="#_4-4-properties标签" aria-label="Permalink to &quot;4.4 properties标签&quot;">​</a></h2><h3 id="_1-第一种写法-写在配置文件内" tabindex="-1">1. <strong>第一种写法</strong>（写在配置文件内） <a class="header-anchor" href="#_1-第一种写法-写在配置文件内" aria-label="Permalink to &quot;1\\. **第一种写法**（写在配置文件内）&quot;">​</a></h3><p>在configuration标签下有一个properties子标签，是用来设置变量的</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;property name=&quot;key&quot; value=&quot;value&quot;/&gt;</span></span></code></pre></div><p>这样写相当于往map集合里放入一个key，可以通过key拿到value，在mybatis-config.xml的其他地方，可以写成\${key}获取到value</p><h3 id="_2-第二种写法-外部文件-相对路径" tabindex="-1">2. 第二种写法（外部文件-相对路径） <a class="header-anchor" href="#_2-第二种写法-外部文件-相对路径" aria-label="Permalink to &quot;2\\. 第二种写法（外部文件-相对路径）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;properties resource=&quot;jdbc.properties&quot;/&gt;</span></span></code></pre></div><p>然后在外部新建一个jdbc.properties，如（等号左边是key右边是value）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>driver=com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span>url=jdbc:mysql://localhost:3306/powernode</span></span>
<span class="line"><span>username=root</span></span>
<span class="line"><span>password=root</span></span></code></pre></div><h3 id="_3-第三种写法-外部文件-绝对路径" tabindex="-1">3. 第三种写法（外部文件-绝对路径） <a class="header-anchor" href="#_3-第三种写法-外部文件-绝对路径" aria-label="Permalink to &quot;3\\. 第三种写法（外部文件-绝对路径）&quot;">​</a></h3><p>不推荐这种写法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;properties url=&quot;file:///D://jdbc.properties&quot;/&gt;</span></span></code></pre></div><h2 id="五、在web中应用mybatis-使用mvc架构模式" tabindex="-1">五、在Web中应用MyBatis（使用MVC架构模式） <a class="header-anchor" href="#五、在web中应用mybatis-使用mvc架构模式" aria-label="Permalink to &quot;五、在Web中应用MyBatis（使用MVC架构模式）&quot;">​</a></h2><h2 id="_5-1-环境搭建" tabindex="-1">5.1 环境搭建 <a class="header-anchor" href="#_5-1-环境搭建" aria-label="Permalink to &quot;5.1 环境搭建&quot;">​</a></h2><p>建立如下数据库： <img src="`+d+'" alt="在这里插入图片描述"></p><h2 id="_5-2-idea环境搭建" tabindex="-1">5.2 idea环境搭建 <a class="header-anchor" href="#_5-2-idea环境搭建" aria-label="Permalink to &quot;5.2 idea环境搭建&quot;">​</a></h2><h3 id="_1-idea新建一个maven项目-create-from-archetype勾选上-选择如图所示webapp" tabindex="-1">1. idea新建一个maven项目，Create from archetype勾选上，选择如图所示webapp <a class="header-anchor" href="#_1-idea新建一个maven项目-create-from-archetype勾选上-选择如图所示webapp" aria-label="Permalink to &quot;1\\. idea新建一个maven项目，Create from archetype勾选上，选择如图所示webapp&quot;">​</a></h3><p><img src="'+g+`" alt="在这里插入图片描述"></p><h3 id="_2-maven依赖配置好" tabindex="-1">2. maven依赖配置好 <a class="header-anchor" href="#_2-maven依赖配置好" aria-label="Permalink to &quot;2\\. maven依赖配置好&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span> &lt;dependencies&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>      &lt;groupId&gt;mysql&lt;/groupId&gt;</span></span>
<span class="line"><span>      &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;</span></span>
<span class="line"><span>      &lt;version&gt;8.0.30&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>      &lt;groupId&gt;servletapi&lt;/groupId&gt;</span></span>
<span class="line"><span>      &lt;artifactId&gt;servletapi&lt;/artifactId&gt;</span></span>
<span class="line"><span>      &lt;version&gt;2.4-20040521&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>      &lt;groupId&gt;ch.qos.logback&lt;/groupId&gt;</span></span>
<span class="line"><span>      &lt;artifactId&gt;logback-classic&lt;/artifactId&gt;</span></span>
<span class="line"><span>      &lt;version&gt;1.2.11&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>      &lt;groupId&gt;org.mybatis&lt;/groupId&gt;</span></span>
<span class="line"><span>      &lt;artifactId&gt;mybatis&lt;/artifactId&gt;</span></span>
<span class="line"><span>      &lt;version&gt;3.5.11&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>      &lt;groupId&gt;junit&lt;/groupId&gt;</span></span>
<span class="line"><span>      &lt;artifactId&gt;junit&lt;/artifactId&gt;</span></span>
<span class="line"><span>      &lt;version&gt;4.11&lt;/version&gt;</span></span>
<span class="line"><span>      &lt;scope&gt;test&lt;/scope&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;/dependencies&gt;</span></span></code></pre></div><h3 id="_3-修改web-xml配置文件" tabindex="-1">3. 修改web.xml配置文件 <a class="header-anchor" href="#_3-修改web-xml配置文件" aria-label="Permalink to &quot;3\\. 修改web.xml配置文件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;web-app xmlns=&quot;http://xmlns.jcp.org/xml/ns/javaee&quot;</span></span>
<span class="line"><span>         xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>         xsi:schemaLocation=&quot;http://xmlns.jcp.org/xml/ns/javaee</span></span>
<span class="line"><span>                      http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd&quot;</span></span>
<span class="line"><span>         version=&quot;3.1&quot;</span></span>
<span class="line"><span>         metadata-complete=&quot;true&quot;&gt;</span></span>
<span class="line"><span>&lt;/web-app&gt;</span></span></code></pre></div><h3 id="_4-编写mybatis-config-xml配置文件" tabindex="-1">4. 编写mybatis-config.xml配置文件 <a class="header-anchor" href="#_4-编写mybatis-config-xml配置文件" aria-label="Permalink to &quot;4\\. 编写mybatis-config.xml配置文件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span></span>
<span class="line"><span>&lt;!DOCTYPE configuration</span></span>
<span class="line"><span>        PUBLIC &quot;-//mybatis.org//DTD Config 3.0//EN&quot;</span></span>
<span class="line"><span>        &quot;http://mybatis.org/dtd/mybatis-3-config.dtd&quot;&gt;</span></span>
<span class="line"><span>&lt;configuration&gt;</span></span>
<span class="line"><span>    &lt;properties resource=&quot;jdbc.properties&quot;/&gt;</span></span>
<span class="line"><span>    &lt;environments default=&quot;development&quot;&gt;</span></span>
<span class="line"><span>        &lt;!-- 一个environment对应一个数据库 --&gt;</span></span>
<span class="line"><span>        &lt;environment id=&quot;development&quot;&gt;</span></span>
<span class="line"><span>            &lt;transactionManager type=&quot;JDBC&quot;/&gt;</span></span>
<span class="line"><span>            &lt;dataSource type=&quot;POOLED&quot;&gt;</span></span>
<span class="line"><span>                &lt;property name=&quot;driver&quot; value=&quot;\${driver}&quot;/&gt;</span></span>
<span class="line"><span>                &lt;property name=&quot;url&quot; value=&quot;\${url}&quot;/&gt;</span></span>
<span class="line"><span>                &lt;property name=&quot;username&quot; value=&quot;\${username}&quot;/&gt;</span></span>
<span class="line"><span>                &lt;property name=&quot;password&quot; value=&quot;\${password}&quot;/&gt;</span></span>
<span class="line"><span>            &lt;/dataSource&gt;</span></span>
<span class="line"><span>        &lt;/environment&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;environment id=&quot;development2&quot;&gt;</span></span>
<span class="line"><span>            &lt;transactionManager type=&quot;JDBC&quot;/&gt;</span></span>
<span class="line"><span>            &lt;dataSource type=&quot;POOLED&quot;&gt;</span></span>
<span class="line"><span>                &lt;property name=&quot;driver&quot; value=&quot;com.mysql.cj.jdbc.Driver&quot;/&gt;</span></span>
<span class="line"><span>                &lt;property name=&quot;url&quot; value=&quot;jdbc:mysql://localhost:3306/powernode2&quot;/&gt;</span></span>
<span class="line"><span>                &lt;property name=&quot;username&quot; value=&quot;root&quot;/&gt;</span></span>
<span class="line"><span>                &lt;property name=&quot;password&quot; value=&quot;root&quot;/&gt;</span></span>
<span class="line"><span>            &lt;/dataSource&gt;</span></span>
<span class="line"><span>        &lt;/environment&gt;</span></span>
<span class="line"><span>    &lt;/environments&gt;</span></span>
<span class="line"><span>    &lt;mappers&gt;</span></span>
<span class="line"><span>        &lt;mapper resource=&quot;ActMapper.xml&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/mappers&gt;</span></span>
<span class="line"><span>&lt;/configuration&gt;</span></span></code></pre></div><h3 id="_5-在resources目录下新建、编辑jdbc-properties文件" tabindex="-1">5. 在resources目录下新建、编辑jdbc.properties文件 <a class="header-anchor" href="#_5-在resources目录下新建、编辑jdbc-properties文件" aria-label="Permalink to &quot;5\\. 在resources目录下新建、编辑jdbc.properties文件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>driver=com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span>url=jdbc:mysql://localhost:3306/powernode</span></span>
<span class="line"><span>username=root</span></span>
<span class="line"><span>password=root</span></span></code></pre></div><h3 id="_6-在resources目录下新建、编写mapper文件" tabindex="-1">6. 在resources目录下新建、编写Mapper文件 <a class="header-anchor" href="#_6-在resources目录下新建、编写mapper文件" aria-label="Permalink to &quot;6\\. 在resources目录下新建、编写Mapper文件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span></span>
<span class="line"><span>&lt;!DOCTYPE mapper</span></span>
<span class="line"><span>        PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span></span>
<span class="line"><span>        &quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;</span></span>
<span class="line"><span>&lt;mapper namespace=&quot;account&quot;&gt;</span></span>
<span class="line"><span>    &lt;insert id=&quot;insertAct&quot;&gt;</span></span>
<span class="line"><span>        insert into t_act(id,name,balance)</span></span>
<span class="line"><span>        values (null,#{name},#{balance})</span></span>
<span class="line"><span>    &lt;/insert&gt;</span></span>
<span class="line"><span>&lt;/mapper&gt;</span></span></code></pre></div><h3 id="_7-在resources目录下新建、编写logback-xml配置文件" tabindex="-1">7. 在resources目录下新建、编写logback.xml配置文件 <a class="header-anchor" href="#_7-在resources目录下新建、编写logback-xml配置文件" aria-label="Permalink to &quot;7\\. 在resources目录下新建、编写logback.xml配置文件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 配置文件修改时重新加载，默认true --&gt;</span></span>
<span class="line"><span>&lt;configuration debug=&quot;false&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 控制台输出 --&gt;</span></span>
<span class="line"><span>    &lt;appender name=&quot;STDOUT&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;</span></span>
<span class="line"><span>        &lt;encoder class=&quot;ch.qos.logback.classic.encoder.PatternLayoutEncoder&quot; charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>            &lt;!-- 输出日志记录格式 --&gt;</span></span>
<span class="line"><span>            &lt;pattern&gt;{%thread} %-5level %logger{50} - %msg%n&lt;/pattern&gt;</span></span>
<span class="line"><span>        &lt;/encoder&gt;</span></span>
<span class="line"><span>    &lt;/appender&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!--    mybatis log configure--&gt;</span></span>
<span class="line"><span>    &lt;logger name=&quot;com.apache.ibatis&quot; level=&quot;TRACE&quot;/&gt;</span></span>
<span class="line"><span>    &lt;logger name=&quot;java.sql.Connection&quot; level=&quot;DEBUG&quot;/&gt;</span></span>
<span class="line"><span>    &lt;logger name=&quot;java.sql.Statement&quot; level=&quot;DEBUG&quot;/&gt;</span></span>
<span class="line"><span>    &lt;logger name=&quot;java.sql.PreparedStatement&quot; level=&quot;DEBUG&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 日志输出级别,LOGBACK日志级别包括五个：TRACE &lt; DEBUG &lt; INFO &lt; WARN &lt; ERROR--&gt;</span></span>
<span class="line"><span>    &lt;root level=&quot;DEBUG&quot;&gt;</span></span>
<span class="line"><span>        &lt;appender-ref ref=&quot;STDOUT&quot;/&gt;</span></span>
<span class="line"><span>        &lt;appender-ref ref=&quot;FILE&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/root&gt;</span></span>
<span class="line"><span>&lt;/configuration&gt;</span></span></code></pre></div><h3 id="_8-新建pojo类-放到com-powernode-bank-pojo包中" tabindex="-1">8. 新建pojo类，放到com.powernode.bank.pojo包中 <a class="header-anchor" href="#_8-新建pojo类-放到com-powernode-bank-pojo包中" aria-label="Permalink to &quot;8\\. 新建pojo类，放到com.powernode.bank.pojo包中&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class Account {</span></span>
<span class="line"><span>    private Long id;</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private Double balance;</span></span>
<span class="line"><span>......</span></span>
<span class="line"><span>//此处省略构造方法、getting setting toString方法，请自行创建</span></span></code></pre></div><h3 id="_9-新建dao-servce-utils-web-并在utils中新建sqlsessionutil类" tabindex="-1">9. 新建dao, servce, utils, web，并在utils中新建SqlSessionUtil类 <a class="header-anchor" href="#_9-新建dao-servce-utils-web-并在utils中新建sqlsessionutil类" aria-label="Permalink to &quot;9\\. 新建dao, servce, utils, web，并在utils中新建SqlSessionUtil类&quot;">​</a></h3><p><img src="`+m+`" alt="在这里插入图片描述"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>package com.powpernode.bank.utils;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.apache.ibatis.io.Resources;</span></span>
<span class="line"><span>import org.apache.ibatis.session.SqlSession;</span></span>
<span class="line"><span>import org.apache.ibatis.session.SqlSessionFactory;</span></span>
<span class="line"><span>import org.apache.ibatis.session.SqlSessionFactoryBuilder;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.IOException;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author huochai</span></span>
<span class="line"><span> * @date 2022/10/15 9:22</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class SqlSessionUtil {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 一个sessionFactory对应一个environment（数据库），所以不要每次运行都new一个新的</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 构造方法设置为私有的，防止被实例化</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private SqlSessionUtil(){}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static SqlSessionFactory sessionFactory;</span></span>
<span class="line"><span>    static {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            sessionFactory = new SqlSessionFactoryBuilder().build(Resources.getResourceAsStream(&quot;mybatis-config.xml&quot;));</span></span>
<span class="line"><span>        } catch (IOException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static SqlSession openSession(){</span></span>
<span class="line"><span>        SqlSession session = sessionFactory.openSession();</span></span>
<span class="line"><span>        return session;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_10-在webapp中新建index-html" tabindex="-1">10. 在webapp中新建index.html <a class="header-anchor" href="#_10-在webapp中新建index-html" aria-label="Permalink to &quot;10\\. 在webapp中新建index.html&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>  &lt;title&gt;银行转账&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;form action=&quot;/bank/transfer&quot; method=&quot;post&quot;&gt;</span></span>
<span class="line"><span>  转出账户：&lt;input type=&quot;text&quot; name=&quot;fromActno&quot;&gt;&lt;br&gt;</span></span>
<span class="line"><span>  转入账户：&lt;input type=&quot;text&quot; name=&quot;toActno&quot;&gt;&lt;br&gt;</span></span>
<span class="line"><span>  转账金额&lt;input type=&quot;text&quot; name=&quot;money&quot;&gt;&lt;br&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;submit&quot; value=&quot;转账&quot;&gt;</span></span>
<span class="line"><span>&lt;/form&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h2 id="_5-3-后端代码实现" tabindex="-1">5.3 后端代码实现 <a class="header-anchor" href="#_5-3-后端代码实现" aria-label="Permalink to &quot;5.3 后端代码实现&quot;">​</a></h2><p>根据前端请求发送的路线完善后端代码</p><h3 id="_1-新建、完善accountservlet-接口与实现类" tabindex="-1">1. 新建、完善AccountServlet（接口与实现类） <a class="header-anchor" href="#_1-新建、完善accountservlet-接口与实现类" aria-label="Permalink to &quot;1\\. 新建、完善AccountServlet（接口与实现类）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>package com.powpernode.bank.web;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.powpernode.bank.exception.MoneyNotEnoughException;</span></span>
<span class="line"><span>import com.powpernode.bank.exception.TransferNotSuccessException;</span></span>
<span class="line"><span>import com.powpernode.bank.service.AccountService;</span></span>
<span class="line"><span>import com.powpernode.bank.service.impl.AccountServiceImpl;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import javax.jws.WebService;</span></span>
<span class="line"><span>import javax.servlet.ServletException;</span></span>
<span class="line"><span>import javax.servlet.annotation.WebServlet;</span></span>
<span class="line"><span>import javax.servlet.http.HttpServlet;</span></span>
<span class="line"><span>import javax.servlet.http.HttpServletRequest;</span></span>
<span class="line"><span>import javax.servlet.http.HttpServletResponse;</span></span>
<span class="line"><span>import java.io.IOException;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author huochai</span></span>
<span class="line"><span> * @date 2022/10/16 15:15</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@WebServlet(&quot;/transfer&quot;)</span></span>
<span class="line"><span>public class AccountServlet extends HttpServlet {</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 调用业务类处理业务</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private AccountService accountService = new AccountServiceImpl();</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    protected void doPost(HttpServletRequest request, HttpServletResponse response)</span></span>
<span class="line"><span>            throws ServletException, IOException {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //接收前端传来的参数</span></span>
<span class="line"><span>        String fromActno = request.getParameter(&quot;fromActno&quot;);</span></span>
<span class="line"><span>        String toActno = request.getParameter(&quot;toActno&quot;);</span></span>
<span class="line"><span>        Double money = Double.parseDouble(request.getParameter(&quot;money&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //调用业务类处理转账</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            accountService.transfer(fromActno,toActno,money);</span></span>
<span class="line"><span>            response.sendRedirect(request.getContextPath()+&quot;/success.html&quot;);</span></span>
<span class="line"><span>        } catch (MoneyNotEnoughException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>            response.sendRedirect(request.getContextPath()+&quot;/error1.html&quot;);</span></span>
<span class="line"><span>        } catch (TransferNotSuccessException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>            response.sendRedirect(request.getContextPath()+&quot;/error2.html&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-完善业务层accountservice接口、实现类" tabindex="-1">2. 完善业务层AccountService接口、实现类 <a class="header-anchor" href="#_2-完善业务层accountservice接口、实现类" aria-label="Permalink to &quot;2\\. 完善业务层AccountService接口、实现类&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>package com.powpernode.bank.service;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.powpernode.bank.exception.MoneyNotEnoughException;</span></span>
<span class="line"><span>import com.powpernode.bank.exception.TransferNotSuccessException;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author huochai</span></span>
<span class="line"><span> * @date 2022/10/16 15:17</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public interface AccountService {</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 转账业务方法</span></span>
<span class="line"><span>     * @param fromAct 转出账户</span></span>
<span class="line"><span>     * @param toAct 转入账户</span></span>
<span class="line"><span>     * @param money 转账金额</span></span>
<span class="line"><span>     * @throws MoneyNotEnoughException 转出账户余额不足异常</span></span>
<span class="line"><span>     * @throws TransferNotSuccessException 转账失败异常</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    void transfer(String fromAct,String toAct,Double money) throws MoneyNotEnoughException, TransferNotSuccessException;</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>package com.powpernode.bank.service.impl;</span></span>
<span class="line"><span>import com.powpernode.bank.dao.AccountDao;</span></span>
<span class="line"><span>import com.powpernode.bank.dao.impl.AccountDaoImpl;</span></span>
<span class="line"><span>import com.powpernode.bank.exception.MoneyNotEnoughException;</span></span>
<span class="line"><span>import com.powpernode.bank.exception.TransferNotSuccessException;</span></span>
<span class="line"><span>import com.powpernode.bank.pojo.Account;</span></span>
<span class="line"><span>import com.powpernode.bank.service.AccountService;</span></span>
<span class="line"><span>import javax.jws.WebService;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author huochai</span></span>
<span class="line"><span> * @date 2022/10/16 15:19</span></span>
<span class="line"><span> * 只负责处理业务逻辑，不涉及数据库修改</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class AccountServiceImpl implements AccountService {</span></span>
<span class="line"><span>    private AccountDao accountDao = new AccountDaoImpl();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void transfer(String fromAct, String toAct, Double money) throws MoneyNotEnoughException, TransferNotSuccessException {</span></span>
<span class="line"><span>        //判断余额是否充足</span></span>
<span class="line"><span>        Account fromAccount = accountDao.selectById(Long.parseLong(fromAct));</span></span>
<span class="line"><span>        if (fromAccount.getBalance()&lt;money) {</span></span>
<span class="line"><span>            throw new MoneyNotEnoughException(&quot;对不起，余额不足&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //将fromAct减少money，toAct增加money</span></span>
<span class="line"><span>        Account toAccount = accountDao.selectById(Long.parseLong(toAct));</span></span>
<span class="line"><span>        fromAccount.setBalance(fromAccount.getBalance()-money);</span></span>
<span class="line"><span>        toAccount.setBalance(toAccount.getBalance()+money);</span></span>
<span class="line"><span>        //更新两个账户</span></span>
<span class="line"><span>        int count = accountDao.updateAccount(fromAccount);</span></span>
<span class="line"><span>        count += accountDao.updateAccount(toAccount);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (count&lt;2){</span></span>
<span class="line"><span>            throw new TransferNotSuccessException(&quot;转账失败，未知错误&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_3-完善dao层-接口、实现类" tabindex="-1">3. 完善DAO层，接口、实现类 <a class="header-anchor" href="#_3-完善dao层-接口、实现类" aria-label="Permalink to &quot;3\\. 完善DAO层，接口、实现类&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>package com.powpernode.bank.dao;</span></span>
<span class="line"><span>import com.powpernode.bank.pojo.Account;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author huochai</span></span>
<span class="line"><span> * @date 2022/10/16 15:20</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public interface AccountDao {</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 根据ID查询账户</span></span>
<span class="line"><span>     * @param id id</span></span>
<span class="line"><span>     * @return 返回账户</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    Account selectById(Long id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 更新用户</span></span>
<span class="line"><span>     * @param account 需要更新的用户</span></span>
<span class="line"><span>     * @return 1表示更新完成</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    int updateAccount(Account account);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 插入用户</span></span>
<span class="line"><span>     * @param account 需要插入的用户</span></span>
<span class="line"><span>     * @return 1表示插入完成</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    int insertAccount(Account account);</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>package com.powpernode.bank.dao.impl;</span></span>
<span class="line"><span>import com.powpernode.bank.dao.AccountDao;</span></span>
<span class="line"><span>import com.powpernode.bank.pojo.Account;</span></span>
<span class="line"><span>import com.powpernode.bank.utils.SqlSessionUtil;</span></span>
<span class="line"><span>import org.apache.ibatis.session.SqlSession;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author huochai</span></span>
<span class="line"><span> * @date 2022/10/16 15:21</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class AccountDaoImpl implements AccountDao {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public Account selectById(Long id) {</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        Account account = session.selectOne(&quot;account.selectById&quot;, id);</span></span>
<span class="line"><span>        session.close();</span></span>
<span class="line"><span>        return account;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public int updateAccount(Account account) {</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        int count = session.update(&quot;account.updateById&quot;, account);</span></span>
<span class="line"><span>        session.commit();</span></span>
<span class="line"><span>        return count;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public int insertAccount(Account account) {</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        int count = session.insert(&quot;account.insertAct&quot;, account);</span></span>
<span class="line"><span>        session.commit();</span></span>
<span class="line"><span>        return count;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-完善两个异常类" tabindex="-1">4. 完善两个异常类 <a class="header-anchor" href="#_4-完善两个异常类" aria-label="Permalink to &quot;4\\. 完善两个异常类&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @author huochai</span></span>
<span class="line"><span> * @date 2022/10/16 15:47</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class MoneyNotEnoughException extends Exception{</span></span>
<span class="line"><span>    public MoneyNotEnoughException(){};</span></span>
<span class="line"><span>    public MoneyNotEnoughException(String msg){</span></span>
<span class="line"><span>        super(msg);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>package com.powpernode.bank.exception;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author huochai</span></span>
<span class="line"><span> * @date 2022/10/16 15:51</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class TransferNotSuccessException extends Exception{</span></span>
<span class="line"><span>    public TransferNotSuccessException(){};</span></span>
<span class="line"><span>    public TransferNotSuccessException(String msg){</span></span>
<span class="line"><span>        super(msg);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_5-当前项目结构" tabindex="-1">5. 当前项目结构 <a class="header-anchor" href="#_5-当前项目结构" aria-label="Permalink to &quot;5\\. 当前项目结构&quot;">​</a></h3><p><img src="`+h+'" alt="在这里插入图片描述"></p><h3 id="_6-完善事务处理" tabindex="-1">6. 完善事务处理 <a class="header-anchor" href="#_6-完善事务处理" aria-label="Permalink to &quot;6\\. 完善事务处理&quot;">​</a></h3><p>目前为止项目里存在一个问题，没有事务处理机制 如果在更新完账户1之后异常，就会出现少钱的现象 <img src="'+q+`" alt="在这里插入图片描述"></p><h4 id="_6-1-加入线程池" tabindex="-1">6.1 加入线程池 <a class="header-anchor" href="#_6-1-加入线程池" aria-label="Permalink to &quot;6.1 加入线程池&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span>* 完善后的SqlSessionUtil工具类</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>package com.powpernode.bank.utils;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.apache.ibatis.io.Resources;</span></span>
<span class="line"><span>import org.apache.ibatis.session.SqlSession;</span></span>
<span class="line"><span>import org.apache.ibatis.session.SqlSessionFactory;</span></span>
<span class="line"><span>import org.apache.ibatis.session.SqlSessionFactoryBuilder;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.IOException;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author huochai</span></span>
<span class="line"><span> * @date 2022/10/15 9:22</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class SqlSessionUtil {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static ThreadLocal&lt;SqlSession&gt; local = new ThreadLocal();</span></span>
<span class="line"><span>    private SqlSessionUtil(){}</span></span>
<span class="line"><span>    private static SqlSessionFactory sessionFactory;</span></span>
<span class="line"><span>    static {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            sessionFactory = new SqlSessionFactoryBuilder().build(Resources.getResourceAsStream(&quot;mybatis-config.xml&quot;));</span></span>
<span class="line"><span>        } catch (IOException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public static SqlSession openSession(){</span></span>
<span class="line"><span>        SqlSession session = local.get();</span></span>
<span class="line"><span>        if (session==null) {</span></span>
<span class="line"><span>            session = sessionFactory.openSession();</span></span>
<span class="line"><span>            local.set(session);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return session;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void close(SqlSession session){</span></span>
<span class="line"><span>        if (session!=null) {</span></span>
<span class="line"><span>            session.close();</span></span>
<span class="line"><span>            local.remove();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_6-2-在业务层控制事务处理" tabindex="-1">6.2 在业务层控制事务处理 <a class="header-anchor" href="#_6-2-在业务层控制事务处理" aria-label="Permalink to &quot;6.2 在业务层控制事务处理&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class AccountServiceImpl implements AccountService {</span></span>
<span class="line"><span>    private AccountDao accountDao = new AccountDaoImpl();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void transfer(String fromAct, String toAct, Double money) throws MoneyNotEnoughException, TransferNotSuccessException {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        //判断余额是否充足</span></span>
<span class="line"><span>        Account fromAccount = accountDao.selectById(Long.parseLong(fromAct));</span></span>
<span class="line"><span>        if (fromAccount.getBalance()&lt;money) {</span></span>
<span class="line"><span>            throw new MoneyNotEnoughException(&quot;对不起，余额不足&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //将fromAct减少money，toAct增加money</span></span>
<span class="line"><span>        Account toAccount = accountDao.selectById(Long.parseLong(toAct));</span></span>
<span class="line"><span>        fromAccount.setBalance(fromAccount.getBalance()-money);</span></span>
<span class="line"><span>        toAccount.setBalance(toAccount.getBalance()+money);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //更新两个账户</span></span>
<span class="line"><span>        int count = accountDao.updateAccount(fromAccount);</span></span>
<span class="line"><span>        count += accountDao.updateAccount(toAccount);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (count&lt;2){</span></span>
<span class="line"><span>            throw new TransferNotSuccessException(&quot;转账失败，未知错误&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        session.commit();</span></span>
<span class="line"><span>        SqlSessionUtil.close(session);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_5-4-mybatis作用域-scope-和生命周期" tabindex="-1">5.4 MyBatis作用域（Scope）和生命周期 <a class="header-anchor" href="#_5-4-mybatis作用域-scope-和生命周期" aria-label="Permalink to &quot;5.4 MyBatis作用域（Scope）和生命周期&quot;">​</a></h2><table><thead><tr><th>名称</th><th>生命周期</th></tr></thead><tbody><tr><td>SqlSessionFactoryBuilder</td><td>只是用来buildFactory的，利用完即可丢弃</td></tr><tr><td>SqlSessionFactory</td><td>一个数据库对应一个Factory，最好不要丢弃</td></tr><tr><td>SqlSession</td><td>一个线程对应一个SqlSession</td></tr></tbody></table><p>观察项目还有什么问题，发现DAO层代码很少并且很固定</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class AccountDaoImpl implements AccountDao {</span></span>
<span class="line"><span>//可以发现第一行都是获取Session，第二行执行，第三行return</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public Account selectById(Long id) {</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        Account account = session.selectOne(&quot;account.selectById&quot;, id);</span></span>
<span class="line"><span>        return account;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public int updateAccount(Account account) {</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        int count = session.update(&quot;account.updateById&quot;, account);</span></span>
<span class="line"><span>        return count;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public int insertAccount(Account account) {</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        int count = session.insert(&quot;account.insertAct&quot;, account);</span></span>
<span class="line"><span>        return count;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>有没有什么框架可以代替这种简单重复的工作呢？ 答：可以利用javassist框架 通过使用Javassist对字节码操作为JBoss实现动态“AOP”框架</p><h2 id="_5-5-使用javassist动态生成类" tabindex="-1">5.5 使用javassist动态生成类 <a class="header-anchor" href="#_5-5-使用javassist动态生成类" aria-label="Permalink to &quot;5.5 使用javassist动态生成类&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class JavassistTest{</span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void generateClass() throws Exception {</span></span>
<span class="line"><span>        //获取类池</span></span>
<span class="line"><span>        ClassPool classPool = ClassPool.getDefault();</span></span>
<span class="line"><span>        // 制造类</span></span>
<span class="line"><span>        CtClass ctClass = classPool.makeClass(&quot;com.powernode.bank.dao.impl.AccountDaoImpl&quot;);</span></span>
<span class="line"><span>        // 制造方法</span></span>
<span class="line"><span>        String method = &quot;public void insert(){System.out.println(166);}&quot;;</span></span>
<span class="line"><span>        CtMethod make = CtMethod.make(method, ctClass);</span></span>
<span class="line"><span>        // 把方法加到类中</span></span>
<span class="line"><span>        ctClass.addMethod(make);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //在内存中生成类</span></span>
<span class="line"><span>        ctClass.toClass();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Class&lt;?&gt; aClass = Class.forName(&quot;com.powernode.bank.dao.impl.AccountDaoImpl&quot;);</span></span>
<span class="line"><span>        Object o = aClass.newInstance();</span></span>
<span class="line"><span>        Method insert = aClass.getDeclaredMethod(&quot;insert&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        insert.invoke(o);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_5-6-使用javassist生成类并实现接口" tabindex="-1">5.6 使用javassist生成类并实现接口 <a class="header-anchor" href="#_5-6-使用javassist生成类并实现接口" aria-label="Permalink to &quot;5.6 使用javassist生成类并实现接口&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void generateInterface() throws Exception{</span></span>
<span class="line"><span>        //获取类池</span></span>
<span class="line"><span>        ClassPool pool = ClassPool.getDefault();</span></span>
<span class="line"><span>        //制造类</span></span>
<span class="line"><span>        CtClass ctClass = pool.makeClass(&quot;com.powernode.bank.dao.impl.AccountDaoImpl&quot;);</span></span>
<span class="line"><span>        //制造接口</span></span>
<span class="line"><span>        CtClass ctClass1 = pool.makeInterface(&quot;com.powernode.javassist.test.AccountDao&quot;);</span></span>
<span class="line"><span>        //添加接口</span></span>
<span class="line"><span>        ctClass.addInterface(ctClass1);</span></span>
<span class="line"><span>        CtMethod make = CtMethod.make(&quot;public void delete(){System.out.println(\\&quot;Hello delete\\&quot;);}&quot;, ctClass);</span></span>
<span class="line"><span>        ctClass.addMethod(make);</span></span>
<span class="line"><span>        //装载类</span></span>
<span class="line"><span>        Class&lt;?&gt; aClass = ctClass.toClass();</span></span>
<span class="line"><span>        AccountDao o = (AccountDao) aClass.newInstance();</span></span>
<span class="line"><span>        o.delete();</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h2 id="_5-7-使用javassist动态实现接口中所有方法" tabindex="-1">5.7 使用javassist动态实现接口中所有方法 <a class="header-anchor" href="#_5-7-使用javassist动态实现接口中所有方法" aria-label="Permalink to &quot;5.7 使用javassist动态实现接口中所有方法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Test</span></span>
<span class="line"><span>    public void generateInterfaceAll() throws Exception{</span></span>
<span class="line"><span>        //获取类池</span></span>
<span class="line"><span>        ClassPool pool = ClassPool.getDefault();</span></span>
<span class="line"><span>        //制造类</span></span>
<span class="line"><span>        CtClass ctClass = pool.makeClass(&quot;com.powernode.bank.dao.impl.AccountDaoImpl&quot;);</span></span>
<span class="line"><span>        //制造接口</span></span>
<span class="line"><span>        CtClass ctInterface = pool.makeInterface(&quot;com.powernode.javassist.test.AccountDao&quot;);</span></span>
<span class="line"><span>        //类实现接口</span></span>
<span class="line"><span>        ctClass.addInterface(ctInterface);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Method[] declaredMethods = AccountDao.class.getDeclaredMethods();</span></span>
<span class="line"><span>        //制造方法</span></span>
<span class="line"><span>        //方法内容</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Arrays.stream(declaredMethods).forEach(method -&gt; {</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                StringBuffer methodValue = new StringBuffer();</span></span>
<span class="line"><span>                methodValue.append(&quot;public &quot;);</span></span>
<span class="line"><span>                methodValue.append(method.getReturnType().getName()+&quot; &quot;);</span></span>
<span class="line"><span>                methodValue.append(method.getName()+&quot;(&quot;);</span></span>
<span class="line"><span>                Class&lt;?&gt;[] parameterTypes = method.getParameterTypes();</span></span>
<span class="line"><span>                for (int i = 0; i &lt; parameterTypes.length; i++) {</span></span>
<span class="line"><span>                    methodValue.append(parameterTypes[i].getName()+&quot; &quot;);</span></span>
<span class="line"><span>                    methodValue.append(&quot;args&quot;+i);</span></span>
<span class="line"><span>                    if (i!= parameterTypes.length-1){</span></span>
<span class="line"><span>                        methodValue.append(&quot;,&quot;);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                methodValue.append(&quot;)&quot;);</span></span>
<span class="line"><span>                methodValue.append(&quot;{System.out.println(\\&quot;hello all\\&quot;);&quot;);</span></span>
<span class="line"><span>                if (&quot;void&quot;.equals(method.getReturnType().getName())){</span></span>
<span class="line"><span>                }else if (&quot;int&quot;.equals(method.getReturnType().getName())){</span></span>
<span class="line"><span>                    methodValue.append(&quot;return 1;&quot;);</span></span>
<span class="line"><span>                }else if(&quot;java.lang.String&quot;.equals(method.getReturnType().getName())){</span></span>
<span class="line"><span>                    methodValue.append(&quot;return \\&quot;666\\&quot;;&quot;);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                methodValue.append(&quot;}&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                CtMethod make = CtMethod.make(String.valueOf(methodValue), ctClass);</span></span>
<span class="line"><span>                ctClass.addMethod(make);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            } catch (CannotCompileException e) {</span></span>
<span class="line"><span>                e.printStackTrace();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Class&lt;?&gt; toClass = ctClass.toClass();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        AccountDao accountDao = (AccountDao) toClass.newInstance();</span></span>
<span class="line"><span>        accountDao.delete();</span></span>
<span class="line"><span>        accountDao.insert(&quot;666&quot;,50.00);</span></span>
<span class="line"><span>        accountDao.selectByActno(&quot;555&quot;);</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h2 id="_5-8-编写工具类generatedaoproxy-自动实现dao层接口" tabindex="-1">5.8 编写工具类GenerateDaoProxy（自动实现DAO层接口） <a class="header-anchor" href="#_5-8-编写工具类generatedaoproxy-自动实现dao层接口" aria-label="Permalink to &quot;5.8 编写工具类GenerateDaoProxy（自动实现DAO层接口）&quot;">​</a></h2><p>注意：若想利用GenerateDaoProxy， 则Mapper.xml文件的<strong>namespace</strong>必须为<strong>DAO层接口的全类名</strong>， <strong>sqlId</strong>必须为<strong>DAO层接口中的方法</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span></span>
<span class="line"><span>&lt;!DOCTYPE mapper</span></span>
<span class="line"><span>        PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span></span>
<span class="line"><span>        &quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;mapper namespace=&quot;com.powpernode.bank.dao.AccountDao&quot;&gt;</span></span>
<span class="line"><span>    &lt;insert id=&quot;insertAccount&quot;&gt;</span></span>
<span class="line"><span>        insert into t_act(id,name,balance)</span></span>
<span class="line"><span>        values (null,#{name},#{balance})</span></span>
<span class="line"><span>    &lt;/insert&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;select id=&quot;selectById&quot; resultType=&quot;com.powpernode.bank.pojo.Account&quot;&gt;</span></span>
<span class="line"><span>        select * from t_act where id=#{id}</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;update id=&quot;updateAccount&quot;&gt;</span></span>
<span class="line"><span>        update t_act set name=#{name},balance=#{balance} where id=#{id}</span></span>
<span class="line"><span>    &lt;/update&gt;</span></span>
<span class="line"><span>&lt;/mapper&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>package com.powpernode.bank.utils;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.apache.ibatis.javassist.CannotCompileException;</span></span>
<span class="line"><span>import org.apache.ibatis.javassist.ClassPool;</span></span>
<span class="line"><span>import org.apache.ibatis.javassist.CtClass;</span></span>
<span class="line"><span>import org.apache.ibatis.javassist.CtMethod;</span></span>
<span class="line"><span>import org.apache.ibatis.mapping.SqlCommandType;</span></span>
<span class="line"><span>import org.apache.ibatis.session.SqlSession;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.lang.reflect.Method;</span></span>
<span class="line"><span>import java.util.Arrays;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author huochai</span></span>
<span class="line"><span> * @date 2022/10/16 23:30</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class GenerateDaoProxy {</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 这个工具类是框架的开发者提供的</span></span>
<span class="line"><span>     * 开发者可以给使用者规定传进哪些参数</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * 传进接口，返回实现所有方法的类</span></span>
<span class="line"><span>     * @param daoInterface 接口</span></span>
<span class="line"><span>     * @return Impl类</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public static Object generate(SqlSession session, Class daoInterface)  {</span></span>
<span class="line"><span>        //类池</span></span>
<span class="line"><span>        ClassPool pool = ClassPool.getDefault();</span></span>
<span class="line"><span>        //制造类</span></span>
<span class="line"><span>        CtClass ctClass = pool.makeClass(daoInterface.getName() + &quot;Proxy&quot;);</span></span>
<span class="line"><span>        //制造接口</span></span>
<span class="line"><span>        CtClass ctInterface = pool.makeInterface(daoInterface.getName());</span></span>
<span class="line"><span>        ctClass.addInterface(ctInterface);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Method[] declaredMethods = daoInterface.getDeclaredMethods();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Arrays.stream(declaredMethods).forEach(method -&gt; {</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                StringBuffer methodCode = new StringBuffer();</span></span>
<span class="line"><span>                //添加修饰符</span></span>
<span class="line"><span>                methodCode.append(&quot;public &quot;);</span></span>
<span class="line"><span>                //添加返回值</span></span>
<span class="line"><span>                methodCode.append(method.getReturnType().getName()+&quot; &quot;);</span></span>
<span class="line"><span>                methodCode.append(method.getName());</span></span>
<span class="line"><span>                methodCode.append(&quot;(&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                Class&lt;?&gt;[] parameterTypes = method.getParameterTypes();</span></span>
<span class="line"><span>                for (int i = 0; i &lt; parameterTypes.length; i++) {</span></span>
<span class="line"><span>                    methodCode.append(parameterTypes[i].getName()+&quot; &quot;);</span></span>
<span class="line"><span>                    methodCode.append(&quot;arg&quot;+i);</span></span>
<span class="line"><span>                    if (i!= parameterTypes.length-1){</span></span>
<span class="line"><span>                        methodCode.append(&quot;,&quot;);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                methodCode.append(&quot;){&quot;);</span></span>
<span class="line"><span>                /**</span></span>
<span class="line"><span>                 * 括号中间需要写对应的session.insert或session.select方法</span></span>
<span class="line"><span>                 */</span></span>
<span class="line"><span>                String sqlId = daoInterface.getName()+&quot;.&quot;+method.getName();</span></span>
<span class="line"><span>                SqlCommandType sqlCommandType = session.getConfiguration().getMappedStatement(sqlId).getSqlCommandType();</span></span>
<span class="line"><span>                methodCode.append(&quot;org.apache.ibatis.session.SqlSession session = com.powpernode.bank.utils.SqlSessionUtil.openSession();&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                if(sqlCommandType == SqlCommandType.INSERT){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                if(sqlCommandType == SqlCommandType.DELETE){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                if(sqlCommandType == SqlCommandType.UPDATE){</span></span>
<span class="line"><span>                    methodCode.append(&quot;return session.update(\\&quot;&quot;+sqlId+&quot;\\&quot;, arg0);&quot;);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                if(sqlCommandType == SqlCommandType.SELECT){</span></span>
<span class="line"><span>                    String resultType = method.getReturnType().getName();</span></span>
<span class="line"><span>                    methodCode.append(&quot;return (&quot;+resultType+&quot;)session.selectOne(\\&quot;&quot;+sqlId+&quot;\\&quot;, arg0);&quot;);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                methodCode.append(&quot;}&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                System.out.println(methodCode.toString());</span></span>
<span class="line"><span>                CtMethod ctMethod = CtMethod.make(methodCode.toString(), ctClass);</span></span>
<span class="line"><span>                ctClass.addMethod(ctMethod);</span></span>
<span class="line"><span>            } catch (CannotCompileException e) {</span></span>
<span class="line"><span>                e.printStackTrace();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Object obj = null;</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            Class&lt;?&gt; toClass = ctClass.toClass();</span></span>
<span class="line"><span>            obj = toClass.newInstance();</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return obj;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>最后在业务层引用Dao的时候改一下即可：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class AccountServiceImpl implements AccountService {</span></span>
<span class="line"><span>    private AccountDao accountDao = (AccountDao) GenerateDaoProxy.generate(SqlSessionUtil.openSession(),AccountDao.class);</span></span>
<span class="line"><span>.....</span></span></code></pre></div><p>写完以后得知一个<strong>好消息</strong>，MyBatis已经实现了映射机制，不用自己手写代码了（要求和上面一样，对namespace以及sqlId有格式要求）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//自己写的</span></span>
<span class="line"><span>private AccountDao accountDao = (AccountDao) GenerateDaoProxy.generate(SqlSessionUtil.openSession(),AccountDao.class);</span></span>
<span class="line"><span>//MyBatis自带</span></span>
<span class="line"><span>private AccountDao accountDao = SqlSessionUtil.openSession().getMapper(AccountDao.class);</span></span></code></pre></div><h2 id="_5-9-面向接口的方式进行crud" tabindex="-1">5.9 面向接口的方式进行CRUD <a class="header-anchor" href="#_5-9-面向接口的方式进行crud" aria-label="Permalink to &quot;5.9 面向接口的方式进行CRUD&quot;">​</a></h2><p>新建maven模块mybatis-005-crud2 添加maven依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot;</span></span>
<span class="line"><span>         xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;</span></span>
<span class="line"><span>    &lt;parent&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;MyBatis&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.example&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/parent&gt;</span></span>
<span class="line"><span>    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;</span></span>
<span class="line"><span>    &lt;packaging&gt;jar&lt;/packaging&gt;</span></span>
<span class="line"><span>    &lt;dependencies&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;mysql&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;8.0.30&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;javax.servlet&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;javax.servlet-api&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;4.0.1&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;ch.qos.logback&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;logback-classic&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;1.2.11&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.mybatis&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;mybatis&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;3.4.6&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;junit&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;junit&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;4.11&lt;/version&gt;</span></span>
<span class="line"><span>            &lt;scope&gt;test&lt;/scope&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;/dependencies&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;groupId&gt;com.powernode&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;mybatis-005-crud2&lt;/artifactId&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;properties&gt;</span></span>
<span class="line"><span>        &lt;maven.compiler.source&gt;8&lt;/maven.compiler.source&gt;</span></span>
<span class="line"><span>        &lt;maven.compiler.target&gt;8&lt;/maven.compiler.target&gt;</span></span>
<span class="line"><span>    &lt;/properties&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/project&gt;</span></span></code></pre></div><p>添加mapper类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @author huochai</span></span>
<span class="line"><span> * @date 2022/10/17 9:38</span></span>
<span class="line"><span> * 在MyBatis中，一般不叫XXXDao，一般叫xxxMapper</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public interface CarMapper {</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 插入数据</span></span>
<span class="line"><span>     * @param car</span></span>
<span class="line"><span>     * @return 返回1表示正常</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    int insert(Car car);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 根据ID删除</span></span>
<span class="line"><span>     * @param id</span></span>
<span class="line"><span>     * @return 返回1表示正常</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    int deleteById(Long id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 更新数据</span></span>
<span class="line"><span>     * @param car</span></span>
<span class="line"><span>     * @return 返回1表示正常</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    int update(Car car);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 根据ID查询</span></span>
<span class="line"><span>     * @param id</span></span>
<span class="line"><span>     * @return 返回1表示正常</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    Car selectById(Long id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 查询所有的数据</span></span>
<span class="line"><span>     * @return 返回给List集合</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    List&lt;Car&gt; selectAll();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>编写CarMapper.xml配置文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span></span>
<span class="line"><span>&lt;!DOCTYPE mapper</span></span>
<span class="line"><span>        PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span></span>
<span class="line"><span>        &quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;</span></span>
<span class="line"><span>&lt;mapper namespace=&quot;com.powernode.mybatis.mapper.CarMapper&quot;&gt;</span></span>
<span class="line"><span>    &lt;insert id=&quot;insert&quot;&gt;</span></span>
<span class="line"><span>      insert into t_car(id,car_num,brand,guide_price,produce_time,car_type)</span></span>
<span class="line"><span>      values(null, #{carNum},#{brand},#{guidePrice},#{produceTime},#{carType})</span></span>
<span class="line"><span>    &lt;/insert&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;delete id=&quot;delete&quot;&gt;</span></span>
<span class="line"><span>      delete from t_car where id=#{id}</span></span>
<span class="line"><span>    &lt;/delete&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;update id=&quot;update&quot;&gt;</span></span>
<span class="line"><span>      update t_car</span></span>
<span class="line"><span>      set car_num=#{carNum},brand=#{brand},guide_price=#{guidePrice},produce_time=#{produceTime},car_type=#{carType}</span></span>
<span class="line"><span>      where id=#{id}</span></span>
<span class="line"><span>    &lt;/update&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;select id=&quot;selectById&quot; resultType=&quot;com.powernode.mybatis.pojo.Car&quot;&gt;</span></span>
<span class="line"><span>      select id,car_num as carNum,brand,guide_price as guidePrice,produce_time as produceTime,car_type as carType</span></span>
<span class="line"><span>      from t_car where id=#{id}</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;select id=&quot;selectAll&quot; resultType=&quot;com.powernode.mybatis.pojo.Car&quot;&gt;</span></span>
<span class="line"><span>        select id,car_num as carNum,brand,guide_price as guidePrice,produce_time as produceTime,car_type as carType</span></span>
<span class="line"><span>        from t_car</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span>
<span class="line"><span>&lt;/mapper&gt;</span></span></code></pre></div><p>新建工具类，SqlSessionUtil</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class SqlSessionUtil {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static ThreadLocal&lt;SqlSession&gt; local = new ThreadLocal();</span></span>
<span class="line"><span>    private SqlSessionUtil(){}</span></span>
<span class="line"><span>    private static SqlSessionFactory sessionFactory;</span></span>
<span class="line"><span>    static {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            sessionFactory = new SqlSessionFactoryBuilder().build(Resources.getResourceAsStream(&quot;mybatis-config.xml&quot;));</span></span>
<span class="line"><span>        } catch (IOException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public static SqlSession openSession(){</span></span>
<span class="line"><span>        SqlSession session = local.get();</span></span>
<span class="line"><span>        if (session==null) {</span></span>
<span class="line"><span>            session = sessionFactory.openSession();</span></span>
<span class="line"><span>            local.set(session);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return session;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void close(SqlSession session){</span></span>
<span class="line"><span>        if (session!=null) {</span></span>
<span class="line"><span>            session.close();</span></span>
<span class="line"><span>            local.remove();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>编写测试用例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class TestMapper {</span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void insert(){</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        CarMapper mapper = session.getMapper(CarMapper.class);</span></span>
<span class="line"><span>        Car car = new Car(null,&quot;5556&quot;,&quot;兰博基尼六&quot;,1952.1,&quot;2060-02-06&quot;,&quot;跑车&quot;);</span></span>
<span class="line"><span>        mapper.insert(car);</span></span>
<span class="line"><span>        session.commit();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void delete(){</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        CarMapper mapper = session.getMapper(CarMapper.class);</span></span>
<span class="line"><span>        mapper.deleteById(21L);</span></span>
<span class="line"><span>        session.commit();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void update(){</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        CarMapper mapper = session.getMapper(CarMapper.class);</span></span>
<span class="line"><span>        Car car = new Car(18L,&quot;5556&quot;,&quot;兰博基尼六&quot;,1952.1,&quot;2060-02-06&quot;,&quot;跑车&quot;);</span></span>
<span class="line"><span>        mapper.update(car);</span></span>
<span class="line"><span>        session.commit();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void selectById(){</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        CarMapper mapper = session.getMapper(CarMapper.class);</span></span>
<span class="line"><span>        Car car = mapper.selectById(18L);</span></span>
<span class="line"><span>        System.out.println(car);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void selectAll(){</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        CarMapper mapper = session.getMapper(CarMapper.class);</span></span>
<span class="line"><span>        List&lt;Car&gt; cars = mapper.selectAll();</span></span>
<span class="line"><span>        cars.forEach(car -&gt; System.out.println(car));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="六、mybatis小技巧" tabindex="-1">六、MyBatis小技巧 <a class="header-anchor" href="#六、mybatis小技巧" aria-label="Permalink to &quot;六、MyBatis小技巧&quot;">​</a></h2><h2 id="_6-1-和-的区别" tabindex="-1">6.1 #{}和\${}的区别 <a class="header-anchor" href="#_6-1-和-的区别" aria-label="Permalink to &quot;6.1 #{}和\${}的区别&quot;">​</a></h2><ul><li><strong>#{property}</strong>：底层使用PreparedStatement。特点：先进行SQL语句的编译，然后给SQL语句的占位符？传值。可以避免SQL注入的风险</li><li><strong>\${property}</strong>：底层使用Statement。特点：先进行SQL语句的拼接，然后再对SQL语句进行编译。存在SQL注入的风险</li></ul><h2 id="_6-2-什么时候使用" tabindex="-1">6.2 什么时候使用\${} <a class="header-anchor" href="#_6-2-什么时候使用" aria-label="Permalink to &quot;6.2 什么时候使用\${}&quot;">​</a></h2><ol><li>如果需要SQL语句的关键字放到SQL语句中，只能使用\${}，因为#{}是以值的形式放到SQL语句当中的。 例：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;mapper namespace=&quot;com.powernode.mybatis.mapper.CarMapper&quot;&gt;</span></span>
<span class="line"><span>    &lt;select id=&quot;selectByType&quot; resultType=&quot;com.powernode.mybatis.pojo.Car&quot;&gt;</span></span>
<span class="line"><span>        select id,car_num as carNum,brand,guide_price as guidePrice,produce_time as produceTime,car_type as carType</span></span>
<span class="line"><span>        from t_car</span></span>
<span class="line"><span>        order by produce_time \${ascOrDesc}</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span>
<span class="line"><span>&lt;/mapper&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class CarMapperTest {</span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void selectAllSortedTest(){</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        List&lt;Car&gt; cars = session.getMapper(CarMapper.class).selectByType(&quot;desc&quot;);</span></span>
<span class="line"><span>        cars.forEach( car -&gt; System.out.println(car));</span></span>
<span class="line"><span>        session.close();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="2"><li>拼接表名的时候，比如需要记录日志信息，如果每天都往同一个日志表中存储数据，慢慢的表信息就会越来越多，可以采用加日期分类的方法，直接查询天表可以增加效率，如t_log_20221017这样分类（然后拼接表名就可以采用\${}的方法）</li><li>批量删除，可以写，删除用户123、456、8/7</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>delete from t_car where id in (123,456,789)</span></span>
<span class="line"><span>//用美元括号</span></span>
<span class="line"><span>delete from t_car where id in (\${})</span></span></code></pre></div><h2 id="_6-3-查找包含某个关键词str的方法" tabindex="-1">6.3 查找包含某个关键词str的方法 <a class="header-anchor" href="#_6-3-查找包含某个关键词str的方法" aria-label="Permalink to &quot;6.3 查找包含某个关键词str的方法&quot;">​</a></h2><ol><li>concat()函数</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;select id=&quot;selectLikeSome&quot; resultType=&quot;com.powernode.mybatis.pojo.Car&quot;&gt;</span></span>
<span class="line"><span>        select id,car_num as carNum,brand,guide_price as guidePrice,produce_time as produceTime,car_type as carType</span></span>
<span class="line"><span>        from t_car</span></span>
<span class="line"><span>        where car_type like Concat(&#39;%&#39;,#{str},&#39;%&#39;)</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span></code></pre></div><ol start="2"><li>用双引号把通配符引出去，让#{}在外面好被jdbc检测到（常用）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;select id=&quot;selectLikeSome&quot; resultType=&quot;com.powernode.mybatis.pojo.Car&quot;&gt;</span></span>
<span class="line"><span>        select id,car_num as carNum,brand,guide_price as guidePrice,produce_time as produceTime,car_type as carType</span></span>
<span class="line"><span>        from t_car</span></span>
<span class="line"><span>        where car_type like &quot;%&quot;#{str}&quot;%&quot;</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span></code></pre></div><h2 id="_6-4-mybatis中起别名" tabindex="-1">6.4 MyBatis中起别名 <a class="header-anchor" href="#_6-4-mybatis中起别名" aria-label="Permalink to &quot;6.4 MyBatis中起别名&quot;">​</a></h2><p>namespace不能起别名 所有别名不区分大小写</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;typeAliases&gt;</span></span>
<span class="line"><span>        &lt;!--给type起别名，可以直接用alias名称读取到--&gt;</span></span>
<span class="line"><span>        &lt;typeAlias type=&quot;com.powernode.mybatis.pojo.Car&quot; alias=&quot;car&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!--省略alias，默认就是类简名，比如car--&gt;</span></span>
<span class="line"><span>        &lt;typeAlias type=&quot;com.powernode.mybatis.pojo.Car&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!--包下所有类自动起别名，不区分大小写--&gt;</span></span>
<span class="line"><span>        &lt;package name=&quot;com.powernode.mybatis.pojo&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/typeAliases&gt;</span></span></code></pre></div><h2 id="_6-5-mybatis小技巧之mapper的配置" tabindex="-1">6.5 MyBatis小技巧之Mapper的配置 <a class="header-anchor" href="#_6-5-mybatis小技巧之mapper的配置" aria-label="Permalink to &quot;6.5 MyBatis小技巧之Mapper的配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;mappers&gt;</span></span>
<span class="line"><span>        &lt;!--1. 根路径下查找CarMapper.xml文件--&gt;</span></span>
<span class="line"><span>        &lt;mapper resource=&quot;CarMapper.xml&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!--2. 绝对路径查找--&gt;</span></span>
<span class="line"><span>        &lt;mapper url=&quot;file://c:/CarMapper.xml&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!--3. 查找映射接口同级目录下的Mapper.xml文件--&gt;</span></span>
<span class="line"><span>        &lt;!--   com/powernode/mybatis/mapper 建包需要这样建--&gt;</span></span>
<span class="line"><span>        &lt;mapper class=&quot;com.powernode.mybatis.mapper.CarMapper&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!--最常用：路径下自动查找接口对应名字xml文件--&gt;</span></span>
<span class="line"><span>        &lt;package name=&quot;com.powernode.mybatis.mapper&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/mappers&gt;</span></span></code></pre></div><h2 id="_6-6-插入数据时获取自动生成的主键" tabindex="-1">6.6 插入数据时获取自动生成的主键 <a class="header-anchor" href="#_6-6-插入数据时获取自动生成的主键" aria-label="Permalink to &quot;6.6 插入数据时获取自动生成的主键&quot;">​</a></h2><p>插入一条数据的时候，自动返回主键到制定属性中 如</p><p>useGeneratedKeys=“true” 表示使用自动生成的主键值 keyProperty=“id” 制定属性值赋值给对象的哪个属性</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;insert id=&quot;insertCar&quot; useGeneratedKeys=&quot;true&quot; keyProperty=&quot;id&quot;&gt;</span></span>
<span class="line"><span>        insert into t_car(id,car_num,brand,guide_price,produce_time,car_type)</span></span>
<span class="line"><span>        values (null,#{carNum},#{brand},#{guidePrice},#{produceTime},#{carType})</span></span>
<span class="line"><span>    &lt;/insert&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void insertCar(){</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        Car car = new Car(null,&quot;9851&quot;,&quot;比亚迪ao&quot;,30.0,&quot;2020-10-20&quot;,&quot;新能源&quot;);</span></span>
<span class="line"><span>        session.getMapper(CarMapper.class).insertCar(car);</span></span>
<span class="line"><span>        System.out.println(car);</span></span>
<span class="line"><span>        session.close();</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>结果：Car{id=22, carNum=‘9851’, brand=‘比亚迪ao’, guidePrice=30.0, produceTime=‘2020-10-20’, carType=‘新能源’} <strong>把自动递增的主键返回给了id</strong></p>`,250),y=[v];function S(C,f,k,_,x,M){return n(),a("div",null,y)}const D=s(b,[["render",S]]);export{A as __pageData,D as default};
