import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.-JfgED0h.js";const t="/docs/assets/mybatis-3a1794fa-7c6b-4499-9c7d-a69e088c28fe.V19r_fve.png",e="/docs/assets/mybatis-cc8515b1-e501-41e2-8dea-7612022e1bb7.B4DZtrCl.png",l="/docs/assets/mybatis-d4471207-9284-43bf-b1aa-50bbc6001a9f.CvWE2jTy.png",i="/docs/assets/mybatis-79ac66eb-25fd-44a0-8668-359d1b95b80d.BbI432IT.png",q=JSON.parse('{"title":"Spring Boot 整合 MyBatis","description":"","frontmatter":{"title":"Spring Boot 整合 MyBatis","shortTitle":"整合MyBatis","category":["Java企业级开发"],"tag":["Spring Boot"]},"headers":[],"relativePath":"backend/tobetter/springboot/mybatis.md","filePath":"backend/tobetter/springboot/mybatis.md"}'),o={name:"backend/tobetter/springboot/mybatis.md"},r=p(`<p>ORM 框架的本质是简化操作数据库的编码工作，常用的框架有两个，一个是可以灵活执行动态 SQL 的 MyBatis；一个是崇尚不用写 SQL 的 Hibernate。前者互联网行业用的多，后者传统行业用的多。</p><p>Hibernate 的特点是所有的 SQL 通过 Java 代码生成，发展到最顶端的就是 Spring Data JPA，基本上根据方法名就可以生成对应的 SQL 了。</p><p><a href="https://tobebetterjavaer.com/springboot/jpa.html" target="_blank" rel="noreferrer">Spring Boot 整合 JPA</a></p><p>MyBatis 早些时候用起来比较繁琐，需要各种配置文件，需要实体类和 DAO 的映射关联，经过不断地演化和改进，可以通过 <a href="https://tobebetterjavaer.com/kaiyuan/auto-generator.html" target="_blank" rel="noreferrer">generator</a> 自动生成实体类、配置文件和 DAO 层代码，简化了不少开发工作。</p><p>随着 <a href="https://baomidou.com/" target="_blank" rel="noreferrer">MyBatis-Plus</a> 的出现，又进一步加速了 MyBatis 的发展。经过 MyBatis-Plus 的增强，开发者只需要简单的配置，就可以快速进行单表的 CRUD 操作；同时，MyBatis-Plus又提供了代码生成、自动分页、逻辑删除、自动填充等丰富功能，进一步简化了开发工作。</p><h3 id="整合-mybatis" tabindex="-1">整合 MyBatis <a class="header-anchor" href="#整合-mybatis" aria-label="Permalink to &quot;整合 MyBatis&quot;">​</a></h3><p>第一步，在 pom.xml 文件中引入 starter。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;2.2.2&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><p>第二步，在 application.yml 文件中添加数据库连接配置。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>  datasource:</span></span>
<span class="line"><span>    driver-class-name: com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span>    username: root</span></span>
<span class="line"><span>    password: Huicheng123**</span></span>
<span class="line"><span>    url: jdbc:mysql://localhost:3306/codingmore-mybatis?useUnicode=true&amp;characterEncoding=utf-8&amp;serverTimezone=Asia/Shanghai&amp;useSSL=false</span></span></code></pre></div><p>第三步，导入 SQL 文件。</p><img src="`+t+`"><p>第四步，新建 User.java 实体类。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">Data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">Builder</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#97E1F1;"> User</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> Integer</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> id;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> Integer</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> age;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> name;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> password;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">Tolerate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#62E884;">    User</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">() {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">}</span></span></code></pre></div><p>这里使用了 lombok 的</p><ul><li><a href="/docs/Data.html">@Data</a> 注解自动生成 getter/setter</li><li><a href="/docs/Builder.html">@Builder</a> 生成链式调用</li><li>由于 @Data和<a href="/docs/Builder.html">@Builder</a> 配合使用的时候会导致无参构造方法丢失，所以我们主动声明了无参构造方法，并使用 <code>@Tolerate</code> 注解来告诉 lombok 请允许我们的无参构造方法存在（没有无参构造方法的时候会导致 ORM 映射出错）</li></ul><p>第五步，新建 UserMapper.java 接口：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public interface UserMapper {</span></span>
<span class="line"><span>    @Select(&quot;SELECT * FROM user&quot;)</span></span>
<span class="line"><span>    List&lt;User&gt; getAll();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Select(&quot;SELECT * FROM user WHERE id = #{id}&quot;)</span></span>
<span class="line"><span>    User getOne(Integer id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Insert(&quot;INSERT INTO user(name,password,age) VALUES(#{name}, #{password}, #{age})&quot;)</span></span>
<span class="line"><span>    void insert(User user);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Update(&quot;UPDATE user SET name=#{name},password=#{password},age=#{age} WHERE id =#{id}&quot;)</span></span>
<span class="line"><span>    void update(User user);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Delete(&quot;DELETE FROM user WHERE id =#{id}&quot;)</span></span>
<span class="line"><span>    void delete(Integer id);</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><a href="/docs/Select.html">@Select</a> 注解用来查询</li><li><a href="/docs/Insert.html">@Insert</a> 注解用来插入</li><li><a href="/docs/Update.html">@Update</a> 注解用来修改</li><li><a href="/docs/Delete.html">@Delete</a> 注解用来删除</li></ul><p>第六步，在启动类 CodingmoreMybatisApplication 上添加 <a href="/docs/MapperScan.html">@MapperScan</a> 注解来扫描 mapper。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@SpringBootApplication</span></span>
<span class="line"><span>@MapperScan</span></span>
<span class="line"><span>public class CodingmoreMybatisApplication {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public static void main(String[] args) {</span></span>
<span class="line"><span>		SpringApplication.run(CodingmoreMybatisApplication.class, args);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果没有指定 <a href="/docs/MapperScan.html">@MapperScan</a> 的扫描路径，将从声明该注解的类的包开始进行扫描。</p><p>第七步，在测试类中对 mapper 进行测试。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@SpringBootTest</span></span>
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>class CodingmoreMybatisApplicationTests {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	@Autowired</span></span>
<span class="line"><span>	private UserMapper userMapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	@Test</span></span>
<span class="line"><span>	void testInsert() {</span></span>
<span class="line"><span>		userMapper.insert(User.builder().age(18).name(&quot;沉默王二&quot;).password(&quot;123456&quot;).build());</span></span>
<span class="line"><span>		userMapper.insert(User.builder().age(18).name(&quot;沉默王三&quot;).password(&quot;123456&quot;).build());</span></span>
<span class="line"><span>		userMapper.insert(User.builder().age(18).name(&quot;沉默王四&quot;).password(&quot;123456&quot;).build());</span></span>
<span class="line"><span>		log.info(&quot;查询所有：{}&quot;,userMapper.getAll().stream().toArray());</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	@Test</span></span>
<span class="line"><span>	List&lt;User&gt; testQuery() {</span></span>
<span class="line"><span>		List&lt;User&gt; all = userMapper.getAll();</span></span>
<span class="line"><span>		log.info(&quot;查询所有：{}&quot;,all.stream().toArray());</span></span>
<span class="line"><span>		return all;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	@Test</span></span>
<span class="line"><span>	void testUpdate() {</span></span>
<span class="line"><span>		User one = userMapper.getOne(1);</span></span>
<span class="line"><span>		log.info(&quot;更新前{}&quot;, one);</span></span>
<span class="line"><span>		one.setPassword(&quot;654321&quot;);</span></span>
<span class="line"><span>		userMapper.update(one);</span></span>
<span class="line"><span>		log.info(&quot;更新后{}&quot;, userMapper.getOne(1));</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	@Test</span></span>
<span class="line"><span>	void testDelete() {</span></span>
<span class="line"><span>		log.info(&quot;删除前{}&quot;, userMapper.getAll().toArray());</span></span>
<span class="line"><span>		userMapper.delete(1);</span></span>
<span class="line"><span>		log.info(&quot;删除后{}&quot;, userMapper.getAll().toArray());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="极简-xml-版本" tabindex="-1">极简 xml 版本 <a class="header-anchor" href="#极简-xml-版本" aria-label="Permalink to &quot;极简 xml 版本&quot;">​</a></h3><p>极简 xml 版本比较适合更加复杂的 SQL，接口层只定义空的方法，然后在 xml 中编写对应的 SQL。编程喵🐱实战项目中使用的就是这种方式。</p><p>第一步，新建 PostMapper。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public interface PostMapper {</span></span>
<span class="line"><span>    List&lt;Posts&gt; getAll();</span></span>
<span class="line"><span>    Posts getOne(Long id);</span></span>
<span class="line"><span>    void insert(Posts post);</span></span>
<span class="line"><span>    void update(Posts post);</span></span>
<span class="line"><span>    void delete(Long id);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>第二步，在 resources 目录下新建 PostMapper.xml 文件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;!DOCTYPE mapper PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot; &quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;</span></span>
<span class="line"><span>&lt;mapper namespace=&quot;top.codingmore.mapper.PostMapper&quot;&gt;</span></span>
<span class="line"><span>    &lt;resultMap id=&quot;BaseResultMap&quot; type=&quot;top.codingmore.entity.Posts&quot;&gt;</span></span>
<span class="line"><span>        &lt;id column=&quot;posts_id&quot; property=&quot;postsId&quot;/&gt;</span></span>
<span class="line"><span>        &lt;result column=&quot;post_author&quot; property=&quot;postAuthor&quot;/&gt;</span></span>
<span class="line"><span>        &lt;result column=&quot;post_content&quot; property=&quot;postContent&quot;/&gt;</span></span>
<span class="line"><span>        &lt;result column=&quot;post_title&quot; property=&quot;postTitle&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/resultMap&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;sql id=&quot;Base_Column_List&quot;&gt;</span></span>
<span class="line"><span>        posts_id, post_author, post_content, post_title</span></span>
<span class="line"><span>    &lt;/sql&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;select id=&quot;getAll&quot; resultMap=&quot;BaseResultMap&quot;&gt;</span></span>
<span class="line"><span>        select</span></span>
<span class="line"><span>        &lt;include refid=&quot;Base_Column_List&quot; /&gt;</span></span>
<span class="line"><span>        from posts;</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;select id=&quot;getOne&quot; parameterType=&quot;java.lang.Long&quot; resultMap=&quot;BaseResultMap&quot; &gt;</span></span>
<span class="line"><span>        SELECT</span></span>
<span class="line"><span>        &lt;include refid=&quot;Base_Column_List&quot; /&gt;</span></span>
<span class="line"><span>        FROM users</span></span>
<span class="line"><span>        WHERE id = #{id}</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;insert id=&quot;insert&quot; parameterType=&quot;top.codingmore.entity.Posts&quot;&gt;</span></span>
<span class="line"><span>        insert into</span></span>
<span class="line"><span>            posts</span></span>
<span class="line"><span>            (post_author,post_content,post_title)</span></span>
<span class="line"><span>        values</span></span>
<span class="line"><span>            (#{postAuthor},#{postContent},#{postTitle});</span></span>
<span class="line"><span>    &lt;/insert&gt;</span></span>
<span class="line"><span>    &lt;update id=&quot;update&quot; parameterType=&quot;top.codingmore.entity.Posts&quot;&gt;</span></span>
<span class="line"><span>        update</span></span>
<span class="line"><span>            posts</span></span>
<span class="line"><span>        set</span></span>
<span class="line"><span>        &lt;if test=&quot;postAuthor != null&quot;&gt;post_author=#{postAuthor},&lt;/if&gt;</span></span>
<span class="line"><span>        &lt;if test=&quot;postContent != null&quot;&gt;post_content=#{postContent},&lt;/if&gt;</span></span>
<span class="line"><span>        post_title=#{postTitle}</span></span>
<span class="line"><span>        where id=#{id}</span></span>
<span class="line"><span>    &lt;/update&gt;</span></span>
<span class="line"><span>    &lt;delete id=&quot;delete&quot;&gt;</span></span>
<span class="line"><span>        delete from</span></span>
<span class="line"><span>            posts</span></span>
<span class="line"><span>        where</span></span>
<span class="line"><span>            id=#{id}</span></span>
<span class="line"><span>    &lt;/delete&gt;</span></span>
<span class="line"><span>&lt;/mapper&gt;</span></span></code></pre></div><p>接口中方法对应的 SQL 直接写在 xml 文件中，具体位置见下图：</p><img src="`+e+`"><p>也可以看文件放在和 PostMapper.java 接口同级的目录下，但是这样会带来一个问题，就是 Maven 打包的时候默认会忽略 xml 文件，所以为了避免这种情况发生，我们需要在 pom.xml 文件中添加配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;build&gt;</span></span>
<span class="line"><span>    &lt;resources&gt;</span></span>
<span class="line"><span>        &lt;resource&gt;</span></span>
<span class="line"><span>            &lt;directory&gt;src/main/java&lt;/directory&gt;</span></span>
<span class="line"><span>            &lt;includes&gt;</span></span>
<span class="line"><span>                &lt;include&gt;**/*.xml&lt;/include&gt;</span></span>
<span class="line"><span>            &lt;/includes&gt;</span></span>
<span class="line"><span>        &lt;/resource&gt;</span></span>
<span class="line"><span>        &lt;resource&gt;</span></span>
<span class="line"><span>            &lt;directory&gt;src/main/resources&lt;/directory&gt;</span></span>
<span class="line"><span>        &lt;/resource&gt;</span></span>
<span class="line"><span>    &lt;/resources&gt;</span></span>
<span class="line"><span>&lt;/build&gt;</span></span></code></pre></div><p>如果直接放在 resources 目录下，就不用担心打包时被忽略了，但放在 resources 目录下不会被  MyBatis 自动扫描到，所以需要在 application.yml 配置文件中告诉 MyBatis 具体的扫描路径：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>mybatis:</span></span>
<span class="line"><span>  mapper-locations: classpath:mapper/*.xml</span></span></code></pre></div><p>第三步，在测试类中添加测试方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Test</span></span>
<span class="line"><span>void testPostInsert() {</span></span>
<span class="line"><span>    postMapper.insert(Posts.builder()</span></span>
<span class="line"><span>            .postAuthor(1L)</span></span>
<span class="line"><span>            .postTitle(&quot;沉默王二&quot;)</span></span>
<span class="line"><span>            .postContent(&quot;123456&quot;)</span></span>
<span class="line"><span>            .build());</span></span>
<span class="line"><span>    log.info(&quot;查询所有：{}&quot;,postMapper.getAll().stream().toArray());</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Test</span></span>
<span class="line"><span>List&lt;Posts&gt; testPostQuery() {</span></span>
<span class="line"><span>    List&lt;Posts&gt; all = postMapper.getAll();</span></span>
<span class="line"><span>    log.info(&quot;查询所有：{}&quot;,all.stream().toArray());</span></span>
<span class="line"><span>    return all;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Test</span></span>
<span class="line"><span>void testPostUpdate() {</span></span>
<span class="line"><span>    Posts one = postMapper.getOne(1L);</span></span>
<span class="line"><span>    log.info(&quot;更新前{}&quot;, one);</span></span>
<span class="line"><span>    one.setPostContent(&quot;沉默王二是沙比&quot;);</span></span>
<span class="line"><span>    postMapper.update(one);</span></span>
<span class="line"><span>    log.info(&quot;更新后{}&quot;, postMapper.getOne(1L));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Test</span></span>
<span class="line"><span>void testPostDelete() {</span></span>
<span class="line"><span>    log.info(&quot;删除前{}&quot;, postMapper.getAll().toArray());</span></span>
<span class="line"><span>    postMapper.delete(1L);</span></span>
<span class="line"><span>    log.info(&quot;删除后{}&quot;, postMapper.getAll().toArray());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>可以看得出，注解版比较适合简单的 SQL 语句，一旦遇到比较复杂的 SQL 查询，比如说多表查询，xml 中写 SQL 语句会容易实现。</p><p>比如说编程喵🐱实战项目中有一个分页查询（首页展示，需要查询标签、作者名、文章信息等等），涉及到多张表，那么此时，xml 版本就更适合。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;select id=&quot;findByPageWithTagPaged&quot; resultMap=&quot;PostsVoResultMapWithTagList&quot;&gt;</span></span>
<span class="line"><span>    SELECT a.*, pt.description, ptr.post_tag_id</span></span>
<span class="line"><span>    FROM (</span></span>
<span class="line"><span>             SELECT</span></span>
<span class="line"><span>                &lt;include refid=&quot;Base_Column_List_No_Content&quot; /&gt;,</span></span>
<span class="line"><span>                 b.term_taxonomy_id,</span></span>
<span class="line"><span>                 c.user_nicename</span></span>
<span class="line"><span>             FROM</span></span>
<span class="line"><span>                 posts a</span></span>
<span class="line"><span>                     LEFT JOIN term_relationships b ON a.posts_id = b.term_relationships_id</span></span>
<span class="line"><span>                     LEFT JOIN users c ON a.post_author = c.users_id</span></span>
<span class="line"><span>             WHERE 1=1</span></span>
<span class="line"><span>             &lt;if test=&quot;searchTagId != null&quot;&gt;</span></span>
<span class="line"><span>                and a.posts_id in (select post_id from post_tag_relation where post_tag_id=#{searchTagId})</span></span>
<span class="line"><span>             &lt;/if&gt;</span></span>
<span class="line"><span>             and \${ew.sqlSegment}</span></span>
<span class="line"><span>                 LIMIT #{pageStart}, #{pageSize}</span></span>
<span class="line"><span>         ) a</span></span>
<span class="line"><span>             LEFT JOIN post_tag_relation ptr on a.posts_id = ptr.post_id</span></span>
<span class="line"><span>             LEFT JOIN post_tag pt on pt.post_tag_id = ptr.post_tag_id</span></span>
<span class="line"><span>&lt;/select&gt;</span></span></code></pre></div><p>细心的小伙伴应该可以看到 <code>\${ew.sqlSegment}</code> 这样的表达式，它属于 MyBatis-Plus 中的内容。</p><h3 id="通过-mybatis-plus-增强" tabindex="-1">通过 MyBatis-Plus 增强 <a class="header-anchor" href="#通过-mybatis-plus-增强" aria-label="Permalink to &quot;通过 MyBatis-Plus 增强&quot;">​</a></h3><p>MyBatis 属于半自动的 ORM 框架，实现一些简单的 CRUD 也是需要编写 SQL 语句，那如果想省掉这些步骤的话，可以选择 <a href="https://tobebetterjavaer.com/springboot/jpa.html" target="_blank" rel="noreferrer">JPA</a>，也可以选择国人开源的 MyBatis-Plus（简称 MP）。</p><p>MP 提供了诸多优秀的特性，比如说：</p><ul><li>强大的 CRUD 操作：内置了通用的 mapper、service，可通过少量的配置实现大部分常用的 CRUD，不用再编写 SQL 语句。</li><li>支持主键自动生成</li><li>支持 ActiveRecord 模式：实体类只需继承 Model 类即可进行强大的 CRUD 操作</li><li><a href="https://tobebetterjavaer.com/kaiyuan/auto-generator.html" target="_blank" rel="noreferrer">强大的代码生成器</a>：可快速生成 Mapper 、 Model 、 Service 、 Controller 层代码</li><li>内置分页插件</li><li>内置性能分析插件：可输出 SQL 语句以及其执行时间</li></ul><p>我们直接进入实战。</p><p>第一步，在 pom.xml 文件中添加 MyBatis-Plus 的 starter。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.baomidou&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;mybatis-plus-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;3.4.2&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><p>第二步，新建 PostTag 实体类。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Data</span></span>
<span class="line"><span>public class PostTag {</span></span>
<span class="line"><span>    private Long postTagId;</span></span>
<span class="line"><span>    private String description;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>对应的数据库表为 post-tag。</p><img src="`+l+'"><p>可以看得出，类名 PostTag，字段名 postTagId 和数据库表 post_tag、字段名 post_tag_id 并不一致，但 mp 自动帮我们做了映射关联。</p><p>第二步，新建 PostTagMapper 继承 BaseMapper，继承该接口后，无需编写 mapper.xml 文件，即可获得CRUD功能。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public interface PostTagMapper extends BaseMapper&lt;PostTag&gt; {}</span></span></code></pre></div><p>BaseMapper里提供的方法如下：</p><img src="'+i+'"><p>第三步，在测试类中添加查询方法。</p><hr><p>更多内容，只针对《Java程序员进阶之路》星球用户开放，需要的小伙伴可以<a href="https://tobebetterjavaer.com/zhishixingqiu/" target="_blank" rel="noreferrer">戳链接🔗</a>加入我们的星球，一起学习，一起卷。。<strong>编程喵</strong>🐱是一个 Spring Boot+Vue 的前后端分离项目，融合了市面上绝大多数流行的技术要点。通过学习实战项目，你可以将所学的知识通过实践进行检验、你可以拓宽自己的技术边界，你可以掌握一个真正的实战项目是如何从 0 到 1 的。</p><h3 id="源码路径" tabindex="-1">源码路径 <a class="header-anchor" href="#源码路径" aria-label="Permalink to &quot;源码路径&quot;">​</a></h3><ul><li>编程喵：<a href="https://github.com/itwanger/coding-more" target="_blank" rel="noreferrer">https://github.com/itwanger/coding-more</a></li><li>codingmore-mybatis：<a href="https://github.com/itwanger/codingmore-learning/tree/main/codingmore-mybatis" target="_blank" rel="noreferrer">https://github.com/itwanger/codingmore-learning</a></li></ul><hr>',64),c=[r];function d(u,g,h,m,b,y){return n(),a("div",null,c)}const v=s(o,[["render",d]]);export{q as __pageData,v as default};
