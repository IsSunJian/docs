import{_ as a,c as s,o as n,a4 as p}from"./chunks/framework.K9vKjHgL.js";const e="/docs/assets/image-20220725172038979.Db7ex_OP.png",h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"home/MyBatis-Plus公共字段自动填充.md","filePath":"home/MyBatis-Plus公共字段自动填充.md"}'),l={name:"home/MyBatis-Plus公共字段自动填充.md"},t=p('<h2 id="_1-问题分析" tabindex="-1">1.问题分析 <a class="header-anchor" href="#_1-问题分析" aria-label="Permalink to &quot;1.问题分析&quot;">​</a></h2><blockquote><p>我们在开发中经常遇到多个实体类有共同的属性字段，例如在新增员工时需要设置创建时间、创建人、修改时间、修改人等字段，在编辑员工时需要设置修改时间和修改人等字段。这些字段属于公共字段，也就是很多表中都有这些字段，能不能对于这些公共字段在某个地方统一处理，来简化开发呢？</p></blockquote><p><img src="'+e+`" alt="image-20220725172038979"></p><p>答案就是使用<code>Mybatis Plus</code>提供的<strong>公共字段自动填充功能</strong>。</p><h2 id="_2-实现步骤" tabindex="-1">2.实现步骤 <a class="header-anchor" href="#_2-实现步骤" aria-label="Permalink to &quot;2.实现步骤&quot;">​</a></h2><blockquote><p>Mybatis Plus公共字段自动填充，也就是在插入或者更新的时候为指定字段赋予指定的值，使用它的好处就是可以统一对这些字段进行处理，避免了重复代码。</p></blockquote><p><strong>实现步骤：</strong></p><ul><li><p>在实体类的属性上加入<code>@TableField</code>注解，指定自动填充的策略</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@TableField(fill = FieldFill.INSERT)//插入时填充字段</span></span>
<span class="line"><span>private LocalDateTime createTime;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>@TableField(fill = FieldFill.INSERT_UPDATE)//插入、更新时填充字段</span></span>
<span class="line"><span>private LocalDateTime updateTime;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>@TableField(fill = FieldFill.INSERT)//插入时填充字段</span></span>
<span class="line"><span>private Long createUser;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@TableField(fill = FieldFill.INSERT_UPDATE)//插入、更新时填充字段</span></span>
<span class="line"><span>private Long updateUser;</span></span>
<span class="line"><span>java</span></span></code></pre></div></li><li><p>按照框架要求编写元数据对象处理器，在此类中统一为公共字段赋值，此类需要实现<code>MetaObjectHandler</code>接口</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>package com.itheima.reggie.common;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.baomidou.mybatisplus.core.handlers.MetaObjectHandler;</span></span>
<span class="line"><span>import org.apache.ibatis.reflection.MetaObject;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.time.LocalDateTime;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @Author Vz</span></span>
<span class="line"><span> * Created with IntelliJ IDEA.</span></span>
<span class="line"><span> * Created on 2022-07-23 17:45</span></span>
<span class="line"><span> * Description：元数据对象处理器</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class MyMetaObjectHandler implements MetaObjectHandler {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 插入时自动填充</span></span>
<span class="line"><span>     * @param metaObject</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void insertFill(MetaObject metaObject) {</span></span>
<span class="line"><span>        metaObject.setValue(&quot;createTime&quot;, LocalDateTime.now());</span></span>
<span class="line"><span>        metaObject.setValue(&quot;updateTime&quot;, LocalDateTime.now());</span></span>
<span class="line"><span>        metaObject.setValue(&quot;createUser&quot;,BaseContext.getCurrentId());</span></span>
<span class="line"><span>        metaObject.setValue(&quot;updateUser&quot;,BaseContext.getCurrentId());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 更新时自动填充</span></span>
<span class="line"><span>     * @param metaObject</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void updateFill(MetaObject metaObject) {</span></span>
<span class="line"><span>        metaObject.setValue(&quot;updateTime&quot;, LocalDateTime.now());</span></span>
<span class="line"><span>        metaObject.setValue(&quot;updateUser&quot;,BaseContext.getCurrentId());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>java</span></span></code></pre></div></li></ul><hr>`,9),i=[t];function c(o,r,d,u,m,b){return n(),s("div",null,i)}const g=a(l,[["render",c]]);export{h as __pageData,g as default};
