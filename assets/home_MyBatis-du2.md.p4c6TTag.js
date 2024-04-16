import{_ as n,c as p,o as e,a4 as a,l as s}from"./chunks/framework.-JfgED0h.js";const t="/docs/assets/599201fd6e2e4b88ae58d6ac58cdd4df.BQtOWvAy.png",l="/docs/assets/10bd061e54884913839aa704a5d3464d.JNkLdTem.png",i="/docs/assets/c4488ab9dd9740eea5e02c1fbd9685c3.DLpMUKco.png",c="/docs/assets/d5bb52120c314c83b986cce67467b969.BltpVW7U.png",o="/docs/assets/a04ccb7d919248fcb064132e2e00506b.BG66OYc7.png",r="/docs/assets/05c2c6a802cf421abf9545f6cc8edc0a.pmhZB3O5.png",u="/docs/assets/26dca402c56040ba9f589910661e9f44.7q_IWpQW.png",d="/docs/assets/85f70ffaf8a74d36989b507e2d613f3f.BUUVNLfE.png",P=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"home/MyBatis-du2.md","filePath":"home/MyBatis-du2.md"}'),g={name:"home/MyBatis-du2.md"},h=a(`<h2 id="七、mybatis参数处理" tabindex="-1">七、MyBatis参数处理 <a class="header-anchor" href="#七、mybatis参数处理" aria-label="Permalink to &quot;七、MyBatis参数处理&quot;">​</a></h2><h2 id="_7-1-单个简单参数" tabindex="-1">7.1 单个简单参数 <a class="header-anchor" href="#_7-1-单个简单参数" aria-label="Permalink to &quot;7.1 单个简单参数&quot;">​</a></h2><p>parameterType表示传入参数的类型，官方文档有很多别名可以参考</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;insert id=&quot;insertStu&quot; parameterType=&quot;long&quot;&gt;</span></span>
<span class="line"><span>        insert into t_account(id,name,age,height,birth,sex)</span></span>
<span class="line"><span>        values (null,#{name},#{age},#{height},#{birth},#{sex})</span></span>
<span class="line"><span>    &lt;/insert&gt;</span></span></code></pre></div><h2 id="_7-2-多个参数" tabindex="-1">7.2 多个参数 <a class="header-anchor" href="#_7-2-多个参数" aria-label="Permalink to &quot;7.2 多个参数&quot;">​</a></h2><ol><li>不用Param的情况下：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;!--可以填写arg0--&gt;</span></span>
<span class="line"><span>    &lt;select id=&quot;selectByAgeAndSex&quot; resultType=&quot;student&quot;&gt;</span></span>
<span class="line"><span>        select * from t_student where age=#{arg0} and sex=#{arg1}</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    /**</span></span>
<span class="line"><span>     * 通过年龄和性别查学生</span></span>
<span class="line"><span>     * @param age</span></span>
<span class="line"><span>     * @param sex</span></span>
<span class="line"><span>     * @return</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    List&lt;Student&gt; selectByAgeAndSex(Integer age,Character sex);</span></span></code></pre></div><ol start="2"><li>使用Param的情况下：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;select id=&quot;selectByAgeAndSex&quot; resultType=&quot;student&quot;&gt;</span></span>
<span class="line"><span>        select * from t_student where age=#{age} and sex=#{sex}</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    /**</span></span>
<span class="line"><span>     * 通过年龄和性别查学生</span></span>
<span class="line"><span>     * @param age</span></span>
<span class="line"><span>     * @param sex</span></span>
<span class="line"><span>     * @return</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    List&lt;Student&gt; selectByAgeAndSex(@Param(&quot;age&quot;) Integer age,@Param(&quot;sex&quot;) Character sex);</span></span></code></pre></div><ol start="3"><li>简单总结 使用@Param(“别名”)，多参数传参时可以直接输入别名</li></ol><h2 id="_7-3-param注解源码分析" tabindex="-1">7.3 Param注解源码分析 <a class="header-anchor" href="#_7-3-param注解源码分析" aria-label="Permalink to &quot;7.3 Param注解源码分析&quot;">​</a></h2><p><img src="`+t+`" alt="在这里插入图片描述"></p><h2 id="八、查询结果专题" tabindex="-1">八、查询结果专题 <a class="header-anchor" href="#八、查询结果专题" aria-label="Permalink to &quot;八、查询结果专题&quot;">​</a></h2><h2 id="_8-1-简单结果返回car" tabindex="-1">8.1 简单结果返回Car <a class="header-anchor" href="#_8-1-简单结果返回car" aria-label="Permalink to &quot;8.1 简单结果返回Car&quot;">​</a></h2><h2 id="_8-2-返回list《car》" tabindex="-1">8.2 返回List《Car》 <a class="header-anchor" href="#_8-2-返回list《car》" aria-label="Permalink to &quot;8.2 返回List《Car》&quot;">​</a></h2><h2 id="_8-3-返回map" tabindex="-1">8.3 返回Map <a class="header-anchor" href="#_8-3-返回map" aria-label="Permalink to &quot;8.3 返回Map&quot;">​</a></h2><h2 id="_8-4-返回list《map》" tabindex="-1">8.4 返回List《Map》 <a class="header-anchor" href="#_8-4-返回list《map》" aria-label="Permalink to &quot;8.4 返回List《Map》&quot;">​</a></h2><h2 id="_8-3-返回map《string-map》" tabindex="-1">8.3 返回Map《String,Map》 <a class="header-anchor" href="#_8-3-返回map《string-map》" aria-label="Permalink to &quot;8.3 返回Map《String,Map》&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 把数据表中所有数据返回给map嵌套</span></span>
<span class="line"><span>     * 将查询结果的id值作为整个map集合的key</span></span>
<span class="line"><span>     * @return</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @MapKey(&quot;id&quot;)</span></span>
<span class="line"><span>    Map&lt;String,Map&lt;String,Object&gt;&gt; selectByAllRetMap();</span></span>
<span class="line"><span>    /**结果：</span></span>
<span class="line"><span>     * {</span></span>
<span class="line"><span>     *      1={sex=男, name=张三, birth=1980-10-11, id=1, age=20, height=1.811},</span></span>
<span class="line"><span>     *      2={sex=女, name=李四, birth=1988-10-11, id=2, age=20, height=1.61},</span></span>
<span class="line"><span>     *      4={sex=男, name=哇嘎, birth=2022-10-17, id=4, age=20, height=1.8},</span></span>
<span class="line"><span>     *      5={sex=女, name=瓦西, birth=2022-10-17, id=5, age=20, height=1.86}</span></span>
<span class="line"><span>     * }</span></span>
<span class="line"><span>     */</span></span></code></pre></div><h2 id="_8-4-结果映射resultmap" tabindex="-1">8.4 结果映射ResultMap <a class="header-anchor" href="#_8-4-结果映射resultmap" aria-label="Permalink to &quot;8.4 结果映射ResultMap&quot;">​</a></h2><p>property是pojo中的属性名称 column是数据表中的字段名</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;!--结果映射--&gt;</span></span>
<span class="line"><span>    &lt;resultMap id=&quot;stuResultMap&quot; type=&quot;student&quot;&gt;</span></span>
<span class="line"><span>        &lt;!--有主键就用id标签--&gt;</span></span>
<span class="line"><span>        &lt;id property=&quot;id&quot; column=&quot;id&quot;/&gt;</span></span>
<span class="line"><span>        &lt;result property=&quot;name&quot; column=&quot;name&quot;/&gt;</span></span>
<span class="line"><span>        &lt;result property=&quot;age&quot; column=&quot;age&quot;/&gt;</span></span>
<span class="line"><span>        &lt;result property=&quot;height&quot; column=&quot;height&quot;/&gt;</span></span>
<span class="line"><span>        &lt;result property=&quot;birth&quot; column=&quot;birth&quot;/&gt;</span></span>
<span class="line"><span>        &lt;result property=&quot;sex&quot; column=&quot;sex&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/resultMap&gt;</span></span>
<span class="line"><span>        &lt;!--用resultMap就不需要用as了--&gt;</span></span>
<span class="line"><span>    &lt;select id=&quot;selectAllByResultMap&quot; resultMap=&quot;stuResultMap&quot;&gt;</span></span>
<span class="line"><span>        select * from t_student</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span></code></pre></div><h2 id="_8-5-开启驼峰式自动命名" tabindex="-1">8.5 开启驼峰式自动命名 <a class="header-anchor" href="#_8-5-开启驼峰式自动命名" aria-label="Permalink to &quot;8.5 开启驼峰式自动命名&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;settings&gt;</span></span>
<span class="line"><span>        &lt;!--开启驼峰式自动命名，即数据库中a_column转换成pojo的aColumn--&gt;</span></span>
<span class="line"><span>        &lt;setting name=&quot;mapUnderscoreToCamelCase&quot; value=&quot;true&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/settings&gt;</span></span></code></pre></div><h2 id="九、动态sql查询" tabindex="-1">九、动态SQL查询 <a class="header-anchor" href="#九、动态sql查询" aria-label="Permalink to &quot;九、动态SQL查询&quot;">​</a></h2><h2 id="_9-1-if标签" tabindex="-1">9.1 if标签 <a class="header-anchor" href="#_9-1-if标签" aria-label="Permalink to &quot;9.1 if标签&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;!--&lt;if test=&quot;这里面为true表示if加载填入，反之不加载&quot;&gt;--&gt;</span></span>
<span class="line"><span>    &lt;select id=&quot;selectByMultiCases&quot; resultType=&quot;car&quot;&gt;</span></span>
<span class="line"><span>        select * from t_car where 1=1</span></span>
<span class="line"><span>        &lt;if test=&quot;brand != null and brand != &#39;&#39;&quot;&gt;</span></span>
<span class="line"><span>            and brand like &quot;%&quot;#{brand}&quot;%&quot;</span></span>
<span class="line"><span>        &lt;/if&gt;</span></span>
<span class="line"><span>        &lt;if test=&quot;guidePrice != null and guidePrice != &#39;&#39;&quot;&gt;</span></span>
<span class="line"><span>            and guide_price &gt; #{guidePrice}</span></span>
<span class="line"><span>        &lt;/if&gt;</span></span>
<span class="line"><span>        &lt;if test=&quot;carType != null and carType != &#39;&#39;&quot;&gt;</span></span>
<span class="line"><span>            and car_type = #{carType}</span></span>
<span class="line"><span>        &lt;/if&gt;</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testSelectByMultiCases(){</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        CarMapper mapper = session.getMapper(CarMapper.class);</span></span>
<span class="line"><span>        //这三个参数可以动态调整</span></span>
<span class="line"><span>        List&lt;Car&gt; cars = mapper.selectByMultiCases(&quot;比亚迪&quot;, 20.0, &quot;新能源&quot;);</span></span>
<span class="line"><span>        cars.forEach(car -&gt; System.out.println(car));</span></span>
<span class="line"><span>        session.close();</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h2 id="_9-2-where标签" tabindex="-1">9.2 where标签 <a class="header-anchor" href="#_9-2-where标签" aria-label="Permalink to &quot;9.2 where标签&quot;">​</a></h2><ol><li>如果没有条件成立，则不生成where子句</li><li>自动去除某些条件<strong>前面</strong>多余的and或or</li></ol><h2 id="_9-3-trim标签" tabindex="-1">9.3 Trim标签 <a class="header-anchor" href="#_9-3-trim标签" aria-label="Permalink to &quot;9.3 Trim标签&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;select id=&quot;selectByMultiCasesByTrim&quot; resultType=&quot;car&quot;&gt;</span></span>
<span class="line"><span>        select * from t_car</span></span>
<span class="line"><span>        &lt;!--</span></span>
<span class="line"><span>            在trim标签的前面或者后面-&gt;</span></span>
<span class="line"><span>            prefix：增加前缀</span></span>
<span class="line"><span>            suffix：增加后缀</span></span>
<span class="line"><span>            prefixOverrides：删除前缀</span></span>
<span class="line"><span>            suffixOverrides：删除后缀</span></span>
<span class="line"><span>        --&gt;</span></span>
<span class="line"><span>        &lt;trim prefix=&quot;where&quot; prefixOverrides=&quot;and|or&quot; suffixOverrides=&quot;and|or&quot;&gt;</span></span>
<span class="line"><span>            &lt;if test=&quot;brand != null and brand != &#39;&#39;&quot;&gt;</span></span>
<span class="line"><span>                and brand like &quot;%&quot;#{brand}&quot;%&quot;</span></span>
<span class="line"><span>            &lt;/if&gt;</span></span>
<span class="line"><span>            &lt;if test=&quot;guidePrice != null and guidePrice != &#39;&#39;&quot;&gt;</span></span>
<span class="line"><span>                and guide_price &gt; #{guidePrice}</span></span>
<span class="line"><span>            &lt;/if&gt;</span></span>
<span class="line"><span>            &lt;if test=&quot;carType != null and carType != &#39;&#39;&quot;&gt;</span></span>
<span class="line"><span>                and car_type = #{carType}</span></span>
<span class="line"><span>            &lt;/if&gt;</span></span>
<span class="line"><span>        &lt;/trim&gt;</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span></code></pre></div><h2 id="_9-4-set标签" tabindex="-1">9.4 set标签 <a class="header-anchor" href="#_9-4-set标签" aria-label="Permalink to &quot;9.4 set标签&quot;">​</a></h2><ol><li>主要使⽤在update语句当中，⽤来⽣成set关键字，同时去掉最后多余的“,”</li><li>⽐如我们只更新提交的不为空的字段，如果提交的数据是空或者&quot;&quot;，那么这个字段我们将不更新。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;update id=&quot;updateById&quot;&gt;</span></span>
<span class="line"><span>        update t_car</span></span>
<span class="line"><span>        &lt;!--set标签可以去除末尾的逗号，当内部有if被执行的时候会自动在前面加上set标签--&gt;</span></span>
<span class="line"><span>        &lt;set&gt;</span></span>
<span class="line"><span>            &lt;if test=&quot;carNum != null and carNum != &#39;&#39;&quot;&gt;car_num = #{carNum},&lt;/if&gt;</span></span>
<span class="line"><span>            &lt;if test=&quot;brand != null and brand != &#39;&#39;&quot;&gt;brand = #{brand},&lt;/if&gt;</span></span>
<span class="line"><span>            &lt;if test=&quot;guidePrice != null and guidePrice != &#39;&#39;&quot;&gt;guide_price = #{guidePrice},&lt;/if&gt;</span></span>
<span class="line"><span>            &lt;if test=&quot;produceTime != null and produceTime != &#39;&#39;&quot;&gt;produce_time = #{produceTime},&lt;/if&gt;</span></span>
<span class="line"><span>            &lt;if test=&quot;carType != null and carType != &#39;&#39;&quot;&gt;car_type = #{carType},&lt;/if&gt;</span></span>
<span class="line"><span>        &lt;/set&gt;</span></span>
<span class="line"><span>        where id = #{id}</span></span>
<span class="line"><span>    &lt;/update&gt;</span></span></code></pre></div><h2 id="_9-5-chose、when、otherwise" tabindex="-1">9.5 chose、when、otherwise <a class="header-anchor" href="#_9-5-chose、when、otherwise" aria-label="Permalink to &quot;9.5 chose、when、otherwise&quot;">​</a></h2><p>这三个标签是在⼀起使⽤的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;choose&gt;</span></span>
<span class="line"><span> &lt;when&gt;&lt;/when&gt;</span></span>
<span class="line"><span> &lt;when&gt;&lt;/when&gt;</span></span>
<span class="line"><span> &lt;when&gt;&lt;/when&gt;</span></span>
<span class="line"><span> &lt;otherwise&gt;&lt;/otherwise&gt;</span></span>
<span class="line"><span>&lt;/choose&gt;</span></span></code></pre></div><p>等同于</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>if(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}else if(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}else if(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}else if(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}else{</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;select id=&quot;selectByChose&quot; resultType=&quot;car&quot;&gt;</span></span>
<span class="line"><span>        select * from t_car</span></span>
<span class="line"><span>        &lt;where&gt;</span></span>
<span class="line"><span>            &lt;choose&gt;</span></span>
<span class="line"><span>                &lt;when test=&quot;brand != null and brand != &#39;&#39;&quot;&gt;</span></span>
<span class="line"><span>                    brand like &quot;%&quot;#{brand}&quot;%&quot;</span></span>
<span class="line"><span>                &lt;/when&gt;</span></span>
<span class="line"><span>                &lt;when test=&quot;guidePrice != null&quot;&gt;</span></span>
<span class="line"><span>                    guide_price &gt; 2</span></span>
<span class="line"><span>                &lt;/when&gt;</span></span>
<span class="line"><span>                &lt;otherwise&gt;</span></span>
<span class="line"><span>                    car_type = #{carType}</span></span>
<span class="line"><span>                &lt;/otherwise&gt;</span></span>
<span class="line"><span>            &lt;/choose&gt;</span></span>
<span class="line"><span>        &lt;/where&gt;</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span></code></pre></div><h2 id="_9-6-foreach标签" tabindex="-1">9.6 foreach标签 <a class="header-anchor" href="#_9-6-foreach标签" aria-label="Permalink to &quot;9.6 foreach标签&quot;">​</a></h2><h3 id="_1-批量删除" tabindex="-1">1.批量删除 <a class="header-anchor" href="#_1-批量删除" aria-label="Permalink to &quot;1.批量删除&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;!--</span></span>
<span class="line"><span>        foreach标签的属性：</span></span>
<span class="line"><span>            collection：指定数组或者集合</span></span>
<span class="line"><span>            item：代表数据或集合中的元素</span></span>
<span class="line"><span>            separator：循环之间的分隔符</span></span>
<span class="line"><span>            open：foreach循环拼接的所有sql语句的最前面以什么开始</span></span>
<span class="line"><span>            close：foreach循环拼接的所有sql语句的最后面以什么结束</span></span>
<span class="line"><span>  注意：要在接口处添加Param(&quot;ids&quot;)才能接收到ids</span></span>
<span class="line"><span>    --&gt;</span></span>
<span class="line"><span>    &lt;delete id=&quot;deleteByIds&quot;&gt;</span></span>
<span class="line"><span>        delete from t_car where id in</span></span>
<span class="line"><span>        &lt;foreach collection=&quot;ids&quot; separator=&quot;,&quot; open=&quot;(&quot; close=&quot;)&quot; item=&quot;id&quot;&gt;</span></span>
<span class="line"><span>            #{id}</span></span>
<span class="line"><span>        &lt;/foreach&gt;</span></span>
<span class="line"><span>    &lt;/delete&gt;</span></span></code></pre></div><h3 id="_2-批量插入" tabindex="-1">2. 批量插入 <a class="header-anchor" href="#_2-批量插入" aria-label="Permalink to &quot;2\\. 批量插入&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>    &lt;insert id=&quot;insertMatch&quot;&gt;</span></span>
<span class="line"><span>        insert into t_car values</span></span>
<span class="line"><span>        &lt;foreach collection=&quot;cars&quot; item=&quot;car&quot; separator=&quot;,&quot;&gt;</span></span>
<span class="line"><span>            (null,#{car.carNum},#{car.brand},#{car.guidePrice},#{car.produceTime},#{car.carType})</span></span>
<span class="line"><span>        &lt;/foreach&gt;</span></span>
<span class="line"><span>    &lt;/insert&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    int insertMatch(@Param(&quot;cars&quot;) List&lt;Car&gt; cars);</span></span></code></pre></div><h2 id="_9-7-sql标签与include标签" tabindex="-1">9.7 sql标签与include标签 <a class="header-anchor" href="#_9-7-sql标签与include标签" aria-label="Permalink to &quot;9.7 sql标签与include标签&quot;">​</a></h2><p><strong>sql</strong>标签⽤来声明sql⽚段 <strong>include</strong>标签⽤来将声明的sql⽚段包含到某个sql语句当中</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;sql id=&quot;carCols&quot;&gt;</span></span>
<span class="line"><span>id,</span></span>
<span class="line"><span>car_num as carNum,</span></span>
<span class="line"><span>brand,</span></span>
<span class="line"><span>guide_price as guidePrice,</span></span>
<span class="line"><span>produce_time as produceTime,</span></span>
<span class="line"><span>car_type as carType</span></span>
<span class="line"><span>&lt;/sql&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;select id=&quot;selectAllRetMap&quot; resultType=&quot;map&quot;&gt;</span></span>
<span class="line"><span> select &lt;include refid=&quot;carCols&quot;/&gt; from t_car</span></span>
<span class="line"><span>&lt;/select&gt;</span></span></code></pre></div><h2 id="十、mybatis的高级映射及延迟加载" tabindex="-1">十、MyBatis的高级映射及延迟加载 <a class="header-anchor" href="#十、mybatis的高级映射及延迟加载" aria-label="Permalink to &quot;十、MyBatis的高级映射及延迟加载&quot;">​</a></h2><h2 id="_10-1-数据库表的准备" tabindex="-1">10.1 数据库表的准备 <a class="header-anchor" href="#_10-1-数据库表的准备" aria-label="Permalink to &quot;10.1 数据库表的准备&quot;">​</a></h2><p>准备数据库表：⼀个班级对应多个学⽣。班级表：t_clazz。学⽣表：t_stu <img src="`+l+'" alt="在这里插入图片描述"><img src="'+i+'" alt="在这里插入图片描述"></p><h2 id="_10-2-多对一映射" tabindex="-1">10.2 多对一映射 <a class="header-anchor" href="#_10-2-多对一映射" aria-label="Permalink to &quot;10.2 多对一映射&quot;">​</a></h2><p>判断哪个是<strong>主表</strong>的方法：哪个<strong>在前</strong> 比如多对一就是多在前，多个学生对应一个班级，此时<strong>学生</strong>就是<strong>主表</strong> 多对一如何在jvm里解释 <img src="'+c+`" alt="在这里插入图片描述"> 将学生类中添加班级类即可</p><blockquote><p>left join<a href="https://so.csdn.net/so/search?q=%E5%B7%A6%E8%BF%9E%E6%8E%A5&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">左连接</a>，把左边的全部查出来，右边有的则匹配，没有则为null 记得要在<strong>表后面跟上代称</strong>，如t_stu s</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>select s.sid,s.sname,c.cid,c.cname</span></span>
<span class="line"><span>from t_stu s left join t_clazz c on s.cid=c.cid</span></span>
<span class="line"><span>where s.sid = 1</span></span></code></pre></div><p>查询结果： <img src="`+o+`" alt="在这里插入图片描述"></p><p><strong>问题</strong>：根据ID查询学生信息，并返回班级信息</p><h3 id="_1-第一种方式-级连属性映射" tabindex="-1">1. 第一种方式（级连属性映射） <a class="header-anchor" href="#_1-第一种方式-级连属性映射" aria-label="Permalink to &quot;1\\. 第一种方式（级连属性映射）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;mapper namespace=&quot;com.powernode.mybatis.mapper.StuMapper&quot;&gt;</span></span>
<span class="line"><span>    &lt;resultMap id=&quot;stuResultMap&quot; type=&quot;student&quot;&gt;</span></span>
<span class="line"><span>        &lt;id property=&quot;sid&quot; column=&quot;sid&quot;/&gt;</span></span>
<span class="line"><span>        &lt;result property=&quot;sname&quot; column=&quot;sname&quot;/&gt;</span></span>
<span class="line"><span>        &lt;result property=&quot;clazz.cid&quot; column=&quot;cid&quot;/&gt;</span></span>
<span class="line"><span>        &lt;result property=&quot;clazz.cname&quot; column=&quot;cname&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/resultMap&gt;</span></span>
<span class="line"><span>    &lt;select id=&quot;selectById&quot; resultMap=&quot;stuResultMap&quot;&gt;</span></span>
<span class="line"><span>        select s.sid,s.sname,s.cid,c.cname from t_stu s left join t_clazz c on s.cid=c.cid where s.sid = #{sid}</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span>
<span class="line"><span>&lt;/mapper&gt;</span></span></code></pre></div><h3 id="_2-第二种方式-association" tabindex="-1">2. 第二种方式（<a href="https://so.csdn.net/so/search?q=Association&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">Association</a>） <a class="header-anchor" href="#_2-第二种方式-association" aria-label="Permalink to &quot;2\\. 第二种方式（[Association](https://so.csdn.net/so/search?q=Association&amp;spm=1001.2101.3001.7020)）&quot;">​</a></h3><p>将resultMap中的类设置为Association（即另一个类）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;resultMap id=&quot;stuResultMapAssociation&quot; type=&quot;student&quot;&gt;</span></span>
<span class="line"><span>        &lt;id property=&quot;sid&quot; column=&quot;sid&quot;/&gt;</span></span>
<span class="line"><span>        &lt;result property=&quot;sname&quot; column=&quot;sname&quot;/&gt;</span></span>
<span class="line"><span>        &lt;association property=&quot;clazz&quot; column=&quot;clazz&quot;&gt;</span></span>
<span class="line"><span>            &lt;id property=&quot;cid&quot; column=&quot;cid&quot;/&gt;</span></span>
<span class="line"><span>            &lt;result property=&quot;cname&quot; column=&quot;cname&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/association&gt;</span></span>
<span class="line"><span>    &lt;/resultMap&gt;</span></span></code></pre></div><h3 id="_3-第三种方式-分步查询" tabindex="-1">3. 第三种方式（分步查询） <a class="header-anchor" href="#_3-第三种方式-分步查询" aria-label="Permalink to &quot;3\\. 第三种方式（分步查询）&quot;">​</a></h3><p>两条SQL语句，分步查询。（这种方式常用：优点一是可复用。优点二是支持<a href="https://so.csdn.net/so/search?q=%E6%87%92%E5%8A%A0%E8%BD%BD&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">懒加载</a>）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;!--分步查询--&gt;</span></span>
<span class="line"><span>    &lt;resultMap id=&quot;stuResultMapStep&quot; type=&quot;student&quot;&gt;</span></span>
<span class="line"><span>        &lt;id property=&quot;sid&quot; column=&quot;sid&quot;/&gt;</span></span>
<span class="line"><span>        &lt;result property=&quot;sname&quot; column=&quot;sname&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!--</span></span>
<span class="line"><span>            property：pojo类中的属性名称</span></span>
<span class="line"><span>            select：执行select语句，给他传参column</span></span>
<span class="line"><span>            column：给select传参</span></span>
<span class="line"><span>        --&gt;</span></span>
<span class="line"><span>        &lt;association property=&quot;clazz&quot; select=&quot;com.powernode.mybatis.mapper.ClazzMapper.selectByCid&quot; column=&quot;cid&quot;&gt;</span></span>
<span class="line"><span>            &lt;id property=&quot;cid&quot; column=&quot;cid&quot;/&gt;</span></span>
<span class="line"><span>            &lt;result property=&quot;cname&quot; column=&quot;cname&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/association&gt;</span></span>
<span class="line"><span>    &lt;/resultMap&gt;</span></span>
<span class="line"><span>    &lt;select id=&quot;selectByIdStep&quot; resultMap=&quot;stuResultMapStep&quot;&gt;</span></span>
<span class="line"><span>        select sid,sname,cid from t_stu where sid=#{sid}</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span></code></pre></div><h3 id="_4-延迟加载-懒加载" tabindex="-1">4. 延迟加载（懒加载） <a class="header-anchor" href="#_4-延迟加载-懒加载" aria-label="Permalink to &quot;4\\. 延迟加载（懒加载）&quot;">​</a></h3><p>用到的时候加载，不用到的时候不加载</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;!--在association中设置的仅是局部设置--&gt;</span></span>
<span class="line"><span>&lt;association fetchType=&quot;lazy&quot;&gt;</span></span>
<span class="line"><span>....</span></span></code></pre></div><p>一般在<strong>mybatis</strong>-config.xml<strong>核心配置文件</strong>中设置全局懒加载选项</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;settings&gt;</span></span>
<span class="line"><span>        &lt;!--开启全局延迟加载--&gt;</span></span>
<span class="line"><span>        &lt;setting name=&quot;lazyLoadingEnabled&quot; value=&quot;true&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/settings&gt;</span></span></code></pre></div><h2 id="_10-3-一对多映射原理" tabindex="-1">10.3 一对多映射原理 <a class="header-anchor" href="#_10-3-一对多映射原理" aria-label="Permalink to &quot;10.3 一对多映射原理&quot;">​</a></h2><p>一对多：一个班级对应多个学生（班级是主表，学生是副表） 实现方法：在Clazz班级类中设置一个数组，这样可以容纳多个学生 <img src="`+r+`" alt="在这里插入图片描述"></p><h3 id="_1-第一种方式-collection方式" tabindex="-1">1.第一种方式（collection方式） <a class="header-anchor" href="#_1-第一种方式-collection方式" aria-label="Permalink to &quot;1.第一种方式（collection方式）&quot;">​</a></h3><p>在select中增加collection标签，表示集合</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;resultMap id=&quot;clazzResultMapCollection&quot; type=&quot;clazz&quot;&gt;</span></span>
<span class="line"><span>        &lt;id property=&quot;cid&quot; column=&quot;cid&quot;/&gt;</span></span>
<span class="line"><span>        &lt;result property=&quot;cname&quot; column=&quot;cname&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!--</span></span>
<span class="line"><span>            property：集合变量名称</span></span>
<span class="line"><span>            ofType：集合中元素的名称</span></span>
<span class="line"><span>        --&gt;</span></span>
<span class="line"><span>        &lt;collection property=&quot;students&quot; ofType=&quot;student&quot;&gt;</span></span>
<span class="line"><span>            &lt;id property=&quot;sid&quot; column=&quot;sid&quot;/&gt;</span></span>
<span class="line"><span>            &lt;result property=&quot;sname&quot; column=&quot;sname&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/collection&gt;</span></span>
<span class="line"><span>    &lt;/resultMap&gt;</span></span>
<span class="line"><span>    &lt;select id=&quot;selectByCidCollection&quot; resultMap=&quot;clazzResultMapCollection&quot;&gt;</span></span>
<span class="line"><span>        select c.cid,c.cname,s.sid,s.sname from t_clazz c left join t_stu s on c.cid=s.cid where c.cid=#{cid}</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span></code></pre></div><h3 id="_2-第二种方式-分步式加载" tabindex="-1">2. 第二种方式（分步式加载） <a class="header-anchor" href="#_2-第二种方式-分步式加载" aria-label="Permalink to &quot;2\\. 第二种方式（分步式加载）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;resultMap id=&quot;clazzResultMapStep&quot; type=&quot;clazz&quot;&gt;</span></span>
<span class="line"><span>        &lt;id property=&quot;cid&quot; column=&quot;cid&quot;/&gt;</span></span>
<span class="line"><span>        &lt;result property=&quot;cname&quot; column=&quot;cname&quot;/&gt;</span></span>
<span class="line"><span>        &lt;collection property=&quot;students&quot; ofType=&quot;student&quot; select=&quot;com.powernode.mybatis.mapper.StuMapper.selectByCid&quot; column=&quot;cid&quot; &gt;</span></span>
<span class="line"><span>            &lt;id property=&quot;sid&quot; column=&quot;sid&quot;/&gt;</span></span>
<span class="line"><span>            &lt;result property=&quot;sname&quot; column=&quot;sname&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/collection&gt;</span></span>
<span class="line"><span>    &lt;/resultMap&gt;</span></span>
<span class="line"><span>    &lt;select id=&quot;selectByCidStep&quot; resultMap=&quot;clazzResultMapStep&quot;&gt;</span></span>
<span class="line"><span>        select cid,cname from t_clazz where cid=#{cid}</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span></code></pre></div><h2 id="十一、mybatis缓存cache机制" tabindex="-1">十一、MyBatis缓存cache机制 <a class="header-anchor" href="#十一、mybatis缓存cache机制" aria-label="Permalink to &quot;十一、MyBatis缓存cache机制&quot;">​</a></h2><h2 id="_11-1-了解缓存机制" tabindex="-1">11.1 了解缓存机制 <a class="header-anchor" href="#_11-1-了解缓存机制" aria-label="Permalink to &quot;11.1 了解缓存机制&quot;">​</a></h2><p>MyBatis的缓存机制： 在执行DQL（select语句）的时候，MyBatis把语句加载到jvm虚拟机中，若是下次又执行完全一样的语句，则直接从缓存中读取，若是期间执行了增删改（改动数据库）的操作则自动清空缓存，必须重新从硬盘中读取 <img src="`+u+`" alt="在这里插入图片描述"> 缓存：cache</p><p>缓存的作⽤：通过减少IO的⽅式，来提⾼程序的执⾏效率。</p><p>mybatis的缓存：将select语句的查询结果放到缓存（内存）当中，下⼀次还是这条select语句的话，直接从缓存中取，不再查数据库。⼀⽅⾯是减少了IO。另⼀⽅⾯不再执⾏繁琐的查找算法。效率⼤⼤提升。</p><p>mybatis缓存包括：</p><ul><li>⼀级缓存：将查询到的数据存储到SqlSession中。</li><li>⼆级缓存：将查询到的数据存储到SqlSessionFactory中。</li><li>或者集成其它第三⽅的缓存：⽐如EhCache【Java语⾔开发的】、Memcache【C语⾔开发的】 等。</li><li><strong>缓存只针对于DQL语句，也就是说缓存机制只对应select语句。</strong></li></ul><h2 id="_11-2-一级缓存" tabindex="-1">11.2 一级缓存 <a class="header-anchor" href="#_11-2-一级缓存" aria-label="Permalink to &quot;11.2 一级缓存&quot;">​</a></h2><p>⼀级缓存默认是开启的。不需要做任何配置。</p><p>原理：只要使⽤同⼀个SqlSession对象执⾏同⼀条SQL语句，就会⾛缓存。</p><p>模块名：mybatis-010-cache</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void selectById(){</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        CarMapper mapper1 = session.getMapper(CarMapper.class);</span></span>
<span class="line"><span>        Car car1 = mapper1.selectById(20L);</span></span>
<span class="line"><span>        System.out.println(car1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        CarMapper mapper2 = session.getMapper(CarMapper.class);</span></span>
<span class="line"><span>        Car car2 = mapper2.selectById(20L);</span></span>
<span class="line"><span>        System.out.println(car2);</span></span>
<span class="line"><span>        session.close();</span></span>
<span class="line"><span>    }</span></span></code></pre></div>`,93),q=s("blockquote",{id:"20,",carNum:"‘3001’,",brand:"‘比亚迪比’,",guidePrice:"30.0,",produceTime:"‘2030-01-02’,",carType:"‘新能源’"},[s("p",null,"Preparing: select * from t_car where id = ? Car{id=20, carNum=‘3001’, brand=‘比亚迪比’, guidePrice=30.0, produceTime=‘2030-01-02’, carType=‘新能源’} Car")],-1),m=a(`<p>可以发现只执行了一次sql语句，因为两句sql一样所以直接从缓存中拿</p><h2 id="_11-3-一级缓存失效" tabindex="-1">11.3 一级缓存失效 <a class="header-anchor" href="#_11-3-一级缓存失效" aria-label="Permalink to &quot;11.3 一级缓存失效&quot;">​</a></h2><p>两种情况下一级缓存会失效</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>        //执行清空缓存</span></span>
<span class="line"><span>        session.clearCache();</span></span></code></pre></div><ol><li>执行了sqlSession.clearCache(); （清空缓存）</li><li>执行了INSERT DELETE UPDATE任意一句（因为要保证数据是真实的）</li></ol><h2 id="_11-4-二级缓存" tabindex="-1">11.4 二级缓存 <a class="header-anchor" href="#_11-4-二级缓存" aria-label="Permalink to &quot;11.4 二级缓存&quot;">​</a></h2><p>⼆级缓存的范围是SqlSessionFactory。 使⽤⼆级缓存需要具备以下⼏个条件：</p><ol><li>全局性地开启或关闭所有映射器配置⽂件中已配置 的任何缓存。默认就是true，⽆需设置。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;setting name=&quot;cacheEnabled&quot; value=&quot;true&quot;&gt;</span></span></code></pre></div><ol start="2"><li>在需要使⽤⼆级缓存的SqlMapper.xml⽂件中添加配置：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;cache /&gt;</span></span></code></pre></div><ol start="3"><li>使⽤⼆级缓存的实体类对象必须是可序列化的，也就是必须实现<strong>java.io.Serializable</strong>接⼝</li><li>SqlSession对象关闭或提交之后，⼀级缓存中的数据才会被写⼊到⼆级缓存当中。此时⼆级缓存才 可⽤。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    public void selectById2() throws Exception{</span></span>
<span class="line"><span>        SqlSessionFactory sessionFactory = new SqlSessionFactoryBuilder().build(Resources.getResourceAsReader(&quot;mybatis-config.xml&quot;));</span></span>
<span class="line"><span>        SqlSession session1 = sessionFactory.openSession();</span></span>
<span class="line"><span>        CarMapper mapper1 = session1.getMapper(CarMapper.class);</span></span>
<span class="line"><span>        Car car1 = mapper1.selectById2(19L);</span></span>
<span class="line"><span>        System.out.println(car1);</span></span>
<span class="line"><span>        //只有当SqlSession关闭的时候，一级缓存才会到二级缓存里</span></span>
<span class="line"><span>        session1.close();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        SqlSession session2 = sessionFactory.openSession();</span></span>
<span class="line"><span>        CarMapper mapper2 = session2.getMapper(CarMapper.class);</span></span>
<span class="line"><span>        Car car2 = mapper2.selectById2(19L);</span></span>
<span class="line"><span>        System.out.println(car2);</span></span>
<span class="line"><span>        session2.close();</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h2 id="_11-5-二级缓存的相关配置" tabindex="-1">11.5 二级缓存的相关配置 <a class="header-anchor" href="#_11-5-二级缓存的相关配置" aria-label="Permalink to &quot;11.5 二级缓存的相关配置&quot;">​</a></h2><p><strong>⼆级缓存的失效：只要两次查询之间出现了增删改操作。⼆级缓存就会失效。【⼀级缓存也会失效】</strong></p><ol><li><strong>eviction</strong>：指定从缓存中移除某个对象的淘汰算法。默认采⽤LRU策略。 　　LRU：Least Recently Used。最近最少使⽤。优先淘汰在间隔时间内使⽤频率最低的对象。(其 实还有⼀种淘汰算法LFU，最不常⽤。) 　　FIFO：First In First Out。⼀种先进先出的数据缓存器。先进⼊⼆级缓存的对象最先被淘汰。 　　SOFT：软引⽤。淘汰软引⽤指向的对象。具体算法和JVM的垃圾回收算法有关。 　　WEAK：弱引⽤。淘汰弱引⽤指向的对象。具体算法和JVM的垃圾回收算法有关。</li><li><strong>flushInterval</strong>： 　　 ⼆级缓存的刷新时间间隔。单位毫秒。如果没有设置。就代表不刷新缓存，只要内存⾜够⼤，⼀直会向⼆级缓存中缓存数据。除⾮执⾏了增删改。</li><li><strong>readOnly</strong>： 　　true：多条相同的sql语句执⾏之后返回的对象是共享的同⼀个。性能好。但是多线程并发可能 会存在安全问题。 　　false：多条相同的sql语句执⾏之后返回的对象是副本，调⽤了clone⽅法。性能⼀般。但安 全。</li><li><strong>size</strong>： 设置⼆级缓存中最多可存储的java对象数量。默认值1024。</li></ol><h2 id="_11-6-集成ehcache" tabindex="-1">11.6 集成Ehcache <a class="header-anchor" href="#_11-6-集成ehcache" aria-label="Permalink to &quot;11.6 集成Ehcache&quot;">​</a></h2><p>集成EhCache是为了代替mybatis⾃带的⼆级缓存。⼀级缓存是⽆法替代的。 mybatis对外提供了接⼝，也可以集成第三⽅的缓存组件。⽐如EhCache、Memcache等。都可以。 EhCache是Java写的。Memcache是C语⾔写的。所以mybatis集成EhCache较为常⻅，按照以下步骤操 作，就可以完成集成： 第⼀步：引⼊mybatis整合ehcache的依赖。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;!--mybatis集成ehcache的组件--&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span> &lt;groupId&gt;org.mybatis.caches&lt;/groupId&gt;</span></span>
<span class="line"><span> &lt;artifactId&gt;mybatis-ehcache&lt;/artifactId&gt;</span></span>
<span class="line"><span> &lt;version&gt;1.2.2&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;!--ehcache需要slf4j的⽇志组件,log4j不好使--&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span> &lt;groupId&gt;ch.qos.logback&lt;/groupId&gt;</span></span>
<span class="line"><span> &lt;artifactId&gt;logback-classic&lt;/artifactId&gt;</span></span>
<span class="line"><span> &lt;version&gt;1.2.11&lt;/version&gt;</span></span>
<span class="line"><span> &lt;scope&gt;test&lt;/scope&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><p>第⼆步：在类的根路径下新建echcache.xml⽂件，并提供以下配置信息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;ehcache xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span> xsi:noNamespaceSchemaLocation=&quot;http://ehcache.org/ehcache.xsd&quot;</span></span>
<span class="line"><span> updateCheck=&quot;false&quot;&gt;</span></span>
<span class="line"><span> &lt;!--磁盘存储:将缓存中暂时不使⽤的对象,转移到硬盘,类似于Windows系统的虚拟内存--&gt;</span></span>
<span class="line"><span> &lt;diskStore path=&quot;e:/ehcache&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> &lt;!--defaultCache：默认的管理策略--&gt;</span></span>
<span class="line"><span> &lt;!--eternal：设定缓存的elements是否永远不过期。如果为true，则缓存的数据始终有</span></span>
<span class="line"><span>效，如果为false那么还要根据timeToIdleSeconds，timeToLiveSeconds判断--&gt;</span></span>
<span class="line"><span> &lt;!--maxElementsInMemory：在内存中缓存的element的最⼤数⽬--&gt;</span></span>
<span class="line"><span> &lt;!--overflowToDisk：如果内存中数据超过内存限制，是否要缓存到磁盘上--&gt;</span></span>
<span class="line"><span> &lt;!--diskPersistent：是否在磁盘上持久化。指重启jvm后，数据是否有效。默认为false-</span></span>
<span class="line"><span>-&gt;</span></span>
<span class="line"><span> &lt;!--timeToIdleSeconds：对象空闲时间(单位：秒)，指对象在多⻓时间没有被访问就会失</span></span>
<span class="line"><span>效。只对eternal为false的有效。默认值0，表示⼀直可以访问--&gt;</span></span>
<span class="line"><span> &lt;!--timeToLiveSeconds：对象存活时间(单位：秒)，指对象从创建到失效所需要的时间。</span></span>
<span class="line"><span>只对eternal为false的有效。默认值0，表示⼀直可以访问--&gt;</span></span>
<span class="line"><span> &lt;!--memoryStoreEvictionPolicy：缓存的3 种清空策略--&gt;</span></span>
<span class="line"><span> &lt;!--FIFO：first in first out (先进先出)--&gt;</span></span>
<span class="line"><span> &lt;!--LFU：Less Frequently Used (最少使⽤).意思是⼀直以来最少被使⽤的。缓存的元</span></span>
<span class="line"><span>素有⼀个hit 属性，hit 值最⼩的将会被清出缓存--&gt;</span></span>
<span class="line"><span> &lt;!--LRU：Least Recently Used(最近最少使⽤). (ehcache 默认值).缓存的元素有⼀</span></span>
<span class="line"><span>个时间戳，当缓存容量满了，⽽⼜需要腾出地⽅来缓存新的元素的时候，那么现有缓存元素中时间戳</span></span>
<span class="line"><span>离当前时间最远的元素将被清出缓存--&gt;</span></span>
<span class="line"><span> &lt;defaultCache eternal=&quot;false&quot; maxElementsInMemory=&quot;1000&quot; overflowToDis</span></span>
<span class="line"><span>k=&quot;false&quot; diskPersistent=&quot;false&quot;</span></span>
<span class="line"><span> timeToIdleSeconds=&quot;0&quot; timeToLiveSeconds=&quot;600&quot; memoryStor</span></span>
<span class="line"><span>eEvictionPolicy=&quot;LRU&quot;/&gt;</span></span>
<span class="line"><span>&lt;/ehcache&gt;</span></span></code></pre></div><p>第三步：修改SqlMapper.xml⽂件中的标签，添加type属性。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;cache type=&quot;org.mybatis.caches.ehcache.EhcacheCache&quot;/&gt;</span></span></code></pre></div><h2 id="十二、mybatis的逆向工程" tabindex="-1">十二、MyBatis的逆向工程 <a class="header-anchor" href="#十二、mybatis的逆向工程" aria-label="Permalink to &quot;十二、MyBatis的逆向工程&quot;">​</a></h2><h2 id="_12-1-概述" tabindex="-1">12.1 概述 <a class="header-anchor" href="#_12-1-概述" aria-label="Permalink to &quot;12.1 概述&quot;">​</a></h2><p>逆向工程可以通过sql表自动生成pojo类、Mapper类，自动生成增删改查代码</p><h2 id="_12-2-搭建环境" tabindex="-1">12.2 搭建环境 <a class="header-anchor" href="#_12-2-搭建环境" aria-label="Permalink to &quot;12.2 搭建环境&quot;">​</a></h2><p>pom中添加环境：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    &lt;!--定制构建过程--&gt;</span></span>
<span class="line"><span>    &lt;build&gt;</span></span>
<span class="line"><span>        &lt;!--可配置多个插件--&gt;</span></span>
<span class="line"><span>        &lt;plugins&gt;</span></span>
<span class="line"><span>            &lt;!--其中的一个插件：mybatis逆向工程插件--&gt;</span></span>
<span class="line"><span>            &lt;plugin&gt;</span></span>
<span class="line"><span>                &lt;!--插件的GAV坐标--&gt;</span></span>
<span class="line"><span>                &lt;groupId&gt;org.mybatis.generator&lt;/groupId&gt;</span></span>
<span class="line"><span>                &lt;artifactId&gt;mybatis-generator-maven-plugin&lt;/artifactId&gt;</span></span>
<span class="line"><span>                &lt;version&gt;1.4.1&lt;/version&gt;</span></span>
<span class="line"><span>                &lt;!--允许覆盖--&gt;</span></span>
<span class="line"><span>                &lt;configuration&gt;</span></span>
<span class="line"><span>                    &lt;overwrite&gt;true&lt;/overwrite&gt;</span></span>
<span class="line"><span>                &lt;/configuration&gt;</span></span>
<span class="line"><span>                &lt;!--插件的依赖--&gt;</span></span>
<span class="line"><span>                &lt;dependencies&gt;</span></span>
<span class="line"><span>                    &lt;!--mysql驱动依赖--&gt;</span></span>
<span class="line"><span>                    &lt;dependency&gt;</span></span>
<span class="line"><span>                        &lt;groupId&gt;mysql&lt;/groupId&gt;</span></span>
<span class="line"><span>                        &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;</span></span>
<span class="line"><span>                        &lt;version&gt;8.0.30&lt;/version&gt;</span></span>
<span class="line"><span>                    &lt;/dependency&gt;</span></span>
<span class="line"><span>                &lt;/dependencies&gt;</span></span>
<span class="line"><span>            &lt;/plugin&gt;</span></span>
<span class="line"><span>        &lt;/plugins&gt;</span></span>
<span class="line"><span>    &lt;/build&gt;</span></span></code></pre></div><p>新建generatorConfig.xml</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;!DOCTYPE generatorConfiguration</span></span>
<span class="line"><span>        PUBLIC &quot;-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN&quot;</span></span>
<span class="line"><span>        &quot;http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd&quot;&gt;</span></span>
<span class="line"><span>&lt;generatorConfiguration&gt;</span></span>
<span class="line"><span>    &lt;!--</span></span>
<span class="line"><span>    targetRuntime有两个值：</span></span>
<span class="line"><span>    MyBatis3Simple：生成的是基础版，只有基本的增删改查。</span></span>
<span class="line"><span>    MyBatis3：生成的是增强版，除了基本的增删改查之外还有复杂的增删改查。</span></span>
<span class="line"><span>    --&gt;</span></span>
<span class="line"><span>    &lt;context id=&quot;DB2Tables&quot; targetRuntime=&quot;MyBatis3&quot;&gt;</span></span>
<span class="line"><span>        &lt;!--防止生成重复代码--&gt;</span></span>
<span class="line"><span>        &lt;plugin type=&quot;org.mybatis.generator.plugins.UnmergeableXmlMappersPlugin&quot;/&gt;</span></span>
<span class="line"><span>        &lt;commentGenerator&gt;</span></span>
<span class="line"><span>            &lt;!--是否去掉生成日期--&gt;</span></span>
<span class="line"><span>            &lt;property name=&quot;suppressDate&quot; value=&quot;true&quot;/&gt;</span></span>
<span class="line"><span>            &lt;!--是否去除注释--&gt;</span></span>
<span class="line"><span>            &lt;property name=&quot;suppressAllComments&quot; value=&quot;true&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/commentGenerator&gt;</span></span>
<span class="line"><span>        &lt;!--连接数据库信息--&gt;</span></span>
<span class="line"><span>        &lt;jdbcConnection driverClass=&quot;com.mysql.cj.jdbc.Driver&quot;</span></span>
<span class="line"><span>                        connectionURL=&quot;jdbc:mysql://localhost:3306/powernode&quot;</span></span>
<span class="line"><span>                        userId=&quot;root&quot;</span></span>
<span class="line"><span>                        password=&quot;root&quot;&gt;</span></span>
<span class="line"><span>        &lt;/jdbcConnection&gt;</span></span>
<span class="line"><span>        &lt;!-- 生成pojo包名和位置 --&gt;</span></span>
<span class="line"><span>        &lt;javaModelGenerator targetPackage=&quot;com.powernode.mybatis.pojo&quot; targetProject=&quot;src/main/java&quot;&gt;</span></span>
<span class="line"><span>            &lt;!--是否开启子包--&gt;</span></span>
<span class="line"><span>            &lt;property name=&quot;enableSubPackages&quot; value=&quot;true&quot;/&gt;</span></span>
<span class="line"><span>            &lt;!--是否去除字段名的前后空白--&gt;</span></span>
<span class="line"><span>            &lt;property name=&quot;trimStrings&quot; value=&quot;true&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/javaModelGenerator&gt;</span></span>
<span class="line"><span>        &lt;!-- 生成SQL映射文件的包名和位置 --&gt;</span></span>
<span class="line"><span>        &lt;sqlMapGenerator targetPackage=&quot;com.powernode.mybatis.mapper&quot; targetProject=&quot;src/main/resources&quot;&gt;</span></span>
<span class="line"><span>            &lt;!--是否开启子包--&gt;</span></span>
<span class="line"><span>            &lt;property name=&quot;enableSubPackages&quot; value=&quot;true&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/sqlMapGenerator&gt;</span></span>
<span class="line"><span>        &lt;!-- 生成Mapper接口的包名和位置 --&gt;</span></span>
<span class="line"><span>        &lt;javaClientGenerator</span></span>
<span class="line"><span>                type=&quot;xmlMapper&quot;</span></span>
<span class="line"><span>                targetPackage=&quot;com.powernode.mybatis.mapper&quot;</span></span>
<span class="line"><span>                targetProject=&quot;src/main/java&quot;&gt;</span></span>
<span class="line"><span>            &lt;property name=&quot;enableSubPackages&quot; value=&quot;true&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/javaClientGenerator&gt;</span></span>
<span class="line"><span>        &lt;!-- 表名和对应的实体类名--&gt;</span></span>
<span class="line"><span>        &lt;table tableName=&quot;t_car&quot; domainObjectName=&quot;Car&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/context&gt;</span></span>
<span class="line"><span>&lt;/generatorConfiguration&gt;</span></span></code></pre></div><p>运行插件 <img src="`+d+`" alt="在这里插入图片描述"></p><h2 id="_12-3-qbc查询风格" tabindex="-1">12.3 QBC查询风格 <a class="header-anchor" href="#_12-3-qbc查询风格" aria-label="Permalink to &quot;12.3 QBC查询风格&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public void test(){</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        CarMapper mapper = session.getMapper(CarMapper.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //查询一个结果</span></span>
<span class="line"><span>        Car car = mapper.selectByPrimaryKey(20L);</span></span>
<span class="line"><span>        System.out.println(car);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //查询所有结果</span></span>
<span class="line"><span>        List&lt;Car&gt; cars = mapper.selectByExample(null);</span></span>
<span class="line"><span>        cars.forEach(car1 -&gt; System.out.println(car));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 根据条件查询结果（QBC query by criteria查询风格</span></span>
<span class="line"><span>        // 添加查询条件</span></span>
<span class="line"><span>        CarExample carExample = new CarExample();</span></span>
<span class="line"><span>        carExample.createCriteria()</span></span>
<span class="line"><span>                .andBrandLike(&quot;比亚迪&quot;)</span></span>
<span class="line"><span>                .andGuidePriceBetween(new BigDecimal(0),new BigDecimal(40));</span></span>
<span class="line"><span>        //添加or</span></span>
<span class="line"><span>        carExample.or().andCarTypeLike(&quot;技术车&quot;);</span></span>
<span class="line"><span>        //最终sql语句：select * from t_car where (brand like &quot;%比亚迪%&quot; and guide_price&gt;=0 and guide_price&lt;40) or (car_type like &quot;%技术车%&quot;)</span></span>
<span class="line"><span>        List&lt;Car&gt; cars1 = mapper.selectByExample(carExample);</span></span>
<span class="line"><span>        cars1.forEach(car1 -&gt; System.out.println(car1));</span></span>
<span class="line"><span>        session.close();</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h2 id="十三、mybatis使用pagehelper" tabindex="-1">十三、MyBatis使用PageHelper <a class="header-anchor" href="#十三、mybatis使用pagehelper" aria-label="Permalink to &quot;十三、MyBatis使用PageHelper&quot;">​</a></h2><h2 id="_13-1-limit分页" tabindex="-1">13.1 limit分页 <a class="header-anchor" href="#_13-1-limit分页" aria-label="Permalink to &quot;13.1 limit分页&quot;">​</a></h2><p>mysql的limit后面两个数字：</p><ul><li>第一个数字：startIndex（起始下标。下标从0开始。）</li><li>第二个数字：pageSize（每页显示的记录条数）</li></ul><p>假设已知页码pageNum，还有每页显示的记录条数pageSize，第一个数字可以动态的获取吗？</p><ul><li>startIndex = (pageNum - 1) * pageSize 所以，标准通用的mysql分页SQL：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>select</span></span>
<span class="line"><span>*</span></span>
<span class="line"><span>from</span></span>
<span class="line"><span>tableName ......</span></span>
<span class="line"><span>limit</span></span>
<span class="line"><span>(pageNum - 1) * pageSize, pageSize</span></span></code></pre></div><h2 id="_13-2-pagehelper插件" tabindex="-1">13.2 PageHelper插件 <a class="header-anchor" href="#_13-2-pagehelper插件" aria-label="Permalink to &quot;13.2 PageHelper插件&quot;">​</a></h2><p>PageHelper插件可以很方便的管理和使用分页</p><ol><li>引入依赖</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>&lt;groupId&gt;com.github.pagehelper&lt;/groupId&gt;</span></span>
<span class="line"><span>&lt;artifactId&gt;pagehelper&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;version&gt;5.3.1&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><ol start="2"><li>在mybatis-config.xml配置插件</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;plugins&gt;</span></span>
<span class="line"><span>&lt;plugin interceptor=&quot;com.github.pagehelper.PageInterceptor&quot;&gt;&lt;/plugin&gt;</span></span>
<span class="line"><span>&lt;/plugins&gt;</span></span></code></pre></div><ol start="3"><li>编写java代码</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void test(){</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        CarMapper mapper = session.getMapper(CarMapper.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //查询第二页，前三条记录</span></span>
<span class="line"><span>        PageHelper.startPage(2,3);</span></span>
<span class="line"><span>        List&lt;Car&gt; cars = mapper.selectAll();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //查看分页信息</span></span>
<span class="line"><span>        PageInfo&lt;Car&gt; pageInfo = new PageInfo&lt;&gt;(cars);</span></span>
<span class="line"><span>        System.out.println(pageInfo);</span></span>
<span class="line"><span>        session.close();</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h2 id="十四、注解式开发" tabindex="-1">十四、注解式开发 <a class="header-anchor" href="#十四、注解式开发" aria-label="Permalink to &quot;十四、注解式开发&quot;">​</a></h2><p>注解式开发适合简单的单标CRUD操作，不适合复杂操作</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    @Insert( &quot;insert into t_car values(null,#{carNum},#{brand},#{guidePrice},#{produceTime},#{carType})&quot;)</span></span>
<span class="line"><span>    int insertCar(Car car);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Delete(&quot;delete from t_car where id=#{id}&quot;)</span></span>
<span class="line"><span>    int deleteById(Long id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Update(&quot;update t_car set car_num=#{carNum},brand=#{brand},guide_price=#{guidePrice},produce_time=#{produceTime},car_type=#{carType} where id=#{id}&quot;)</span></span>
<span class="line"><span>    int updateById(Car car);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Select(&quot;select * from t_car where id=#{id}&quot;)</span></span>
<span class="line"><span>    Car selectById(Long id);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void insertCar(){</span></span>
<span class="line"><span>        SqlSession session = SqlSessionUtil.openSession();</span></span>
<span class="line"><span>        CarMapper mapper = session.getMapper(CarMapper.class);</span></span>
<span class="line"><span>        Car car = new Car(null,&quot;10377&quot;,&quot;报道33车1&quot;,35.0,&quot;2022-12-05&quot;,&quot;技术车&quot;);</span></span>
<span class="line"><span>        mapper.insertCar(car);</span></span>
<span class="line"><span>        session.commit();</span></span>
<span class="line"><span>        session.close();</span></span>
<span class="line"><span>    }</span></span></code></pre></div>`,53),b=[h,q,m];function y(v,f,_,C,k,M){return e(),p("div",null,b)}const x=n(g,[["render",y]]);export{P as __pageData,x as default};
