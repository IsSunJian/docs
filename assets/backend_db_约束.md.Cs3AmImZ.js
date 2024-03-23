import{_ as s,c as n,o as p,a4 as e}from"./chunks/framework.K9vKjHgL.js";const l="/docs/assets/image-20210724104749122._xttGDVl.png",i="/docs/assets/image-20220326181812285.B48OGch5.png",t="/docs/assets/image-20220326181903024.BH44b0fv.png",c="/docs/assets/2022-09-18-01-03-25.Dtu-PnrB.png",o="/docs/assets/2022-09-18-01-06-55.BHC1mWi6.png",d="/docs/assets/2022-09-18-01-09-31.CME21RvG.png",r="/docs/assets/image-20210724114548170.D3BSIpL0.png",h="/docs/assets/image-20210724114805350.Dx857piE.png",u="/docs/assets/image-20210724115024106._7DtVkXt.png",m="/docs/assets/image-20210724115149415.qfFGxK8a.png",g="/docs/assets/image-20210724115336916.CVCLIcZ8.png",b="/docs/assets/image-20210724115547951.DHGjeFMJ.png",_="/docs/assets/image-20210724115826516.C46pSwcc.png",E="/docs/assets/image-20220326140530889.DPdTcdXl.png",v="/docs/assets/image-20210724120904180.DhX9oDJj.png",T="/docs/assets/image-20220325235302030.Bz-_nyUq.png",k="/docs/assets/image-20220325235350568.CAczWuqp.png",a="/docs/assets/image-20220325235508853.DE1yzYrI.png",y="/docs/assets/image-20220708225443436.BgVEIhSh.png",C="/docs/assets/image-20220708225505376.DmloUawh.png",R="/docs/assets/image-20220325235608720.CtdHKYko.png",N="/docs/assets/image-20220326104256147.DldXXyvl.png",q="/docs/assets/image-20220326115925003.DosAflC5.png",A="/docs/assets/image-20210724130925801.uSSCxoxU.png",I="/docs/assets/image-20220326182949545.DONJJ_1O.png",f="/docs/assets/image-20210724131210759.B170b1wM.png",L="/docs/assets/image-20210724133015129.WCTkGtQH.png",O="/docs/assets/image-20210724134145803.DO5XlYHt.png",P="/docs/assets/image-20210724134318685.DGZ2Gmlx.png",S="/docs/assets/image-20210724140456921.CVDM831S.png",x="/docs/assets/image-20210724134735939.DPFc_yoK.png",D="/docs/assets/image-20210724135054834.CRoGsFm3.png",j="/docs/assets/image-20210724140307910.Di_N7Q6E.png",B="/docs/assets/image-20210724135346913.BI56LT6D.png",U="/docs/assets/image-20210724135649341.CDBRX32M.png",F="/docs/assets/image-20210724141445785.BYP5qrPZ.png",M="/docs/assets/VeryCapture_20220918115621.BJzQAl5Y.gif",Y="/docs/assets/VeryCapture_20220918120154.ocCe-h37.gif",V="/docs/assets/image-20210724173630506.DsQQyBAh.png",K="/docs/assets/VeryCapture_20220918131903.CxYVNYeT.gif",X="/docs/assets/image-20210724174717647.DPXPg1il.png",G="/docs/assets/image-20210724175344508.Djkb1BiR.png",H="/docs/assets/image-20210724175518159.D6tiX_HU.png",w="/docs/assets/image-20210724180103531.DTvRS8LA.png",J="/docs/assets/clipboard.C5CKEVEb.png",Q="/docs/assets/image-20210724180542757.BtuuAC6e.png",W="/docs/assets/image-20210724180613494.CJdvMXXB.png",z="/docs/assets/image-20210724224955876.DQ3y5ski.png",$="/docs/assets/image-20210724225537533.CLzBp4SL.png",Z="/docs/assets/image-20210724230250263.DGCDHWK2.png",ra=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"backend/db/约束.md","filePath":"backend/db/约束.md"}'),aa={name:"backend/db/约束.md"},sa=e('<h2 id="_1-约束-✏️-🍐-❤️" tabindex="-1">1. 约束 ✏️ 🍐 ❤️ <a class="header-anchor" href="#_1-约束-✏️-🍐-❤️" aria-label="Permalink to &quot;1\\. 约束 ✏️ 🍐 ❤️&quot;">​</a></h2><p><img src="'+l+'" alt="image-20210724104749122"></p><p>上面表中可以看到表中数据存在一些问题：</p><p>问题</p><ul><li><p>id 列一般是用标示数据的唯一性的，而上述表中的 id 为 1 的有三条数据，并且 <code>马花疼</code> 没有 id 进行标示</p></li><li><p><code>柳白</code> 这条数据的 age 列的数据是 3000，而人也不可能活到 3000 岁</p></li><li><p><code>马运</code> 这条数据的 math 数学成绩是-5，而数学学得再不好也不可能出现负分</p></li><li><p><code>柳青</code> 这条数据的 english 列（英文成绩）值为 null，而成绩即使没考也得是 0 分</p><blockquote><p>针对上述数据问题，我们就可以从数据库层面在添加数据的时候进行限制，这个就是约束。</p></blockquote></li></ul><h3 id="_1-1-概念-✏️" tabindex="-1">1.1 概念 ✏️ <a class="header-anchor" href="#_1-1-概念-✏️" aria-label="Permalink to &quot;1.1 概念 ✏️&quot;">​</a></h3><p>约束的定义和作用</p><ul><li><p>约束是作用于表中列上的规则，用于限制加入表的数据</p><p>例如：我们可以给 id 列加约束，让其值不能重复，不能为 null 值。</p></li><li><p>约束的存在保证了数据库中数据的正确性、有效性和完整性</p><p>添加约束可以在添加数据的时候就限制不正确的数据，年龄是 3000，数学成绩是-5 分这样无效的数据，继而保障数据的完整性。</p></li></ul><h3 id="_1-2-约束分类-🍐" tabindex="-1">1.2 约束分类 🍐 <a class="header-anchor" href="#_1-2-约束分类-🍐" aria-label="Permalink to &quot;1.2 约束分类 🍐&quot;">​</a></h3><h4 id="_1-2-1-「约束分类」核心问题-答案" tabindex="-1">1.2.1 「约束分类」核心问题&amp;答案 <a class="header-anchor" href="#_1-2-1-「约束分类」核心问题-答案" aria-label="Permalink to &quot;1.2.1 「约束分类」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>数据库中约束分类有哪些？</li></ol><p>点击查看</p><ul><li>非空约束： 关键字是 NOT NULL</li></ul><p>保证列中所有的数据不能有 null 值。</p><p>例如：id 列在添加 <code>马花疼</code> 这条数据时就不能添加成功。 <strong>注意：null 不支持聚合函数</strong></p><ul><li><p>唯一约束：关键字是 UNIQUE</p><p>保证列中所有数据各不相同。</p><p>例如：id 列中三条数据的值都是 1，这样的数据在添加时是绝对不允许的。</p></li><li><p>主键约束： 关键字是 PRIMARY KEY</p><p>主键是一行数据的<strong>唯一标识</strong>，<strong>要求非空且唯一</strong>。一般我们都会给没张表添加一个主键列用来唯一标识数据。</p><p>例如：上图表中 id 就可以作为主键，来标识每条数据。那么这样就要求数据中 id 的值不能重复，不能为 null 值。</p><blockquote><p>主键：一般使用 Btree 结构进行检索. EXPLAIN 命令用来检测 sql 扫描了多少行,用来测试查询性能 <img src="'+i+'" alt="image-20220326181812285"></p></blockquote></li><li><p><s>检查约束： 关键字是 CHECK</s></p><p>保证列中的值满足某一条件。</p><p>例如：我们可以给 age 列添加一个范围，最低年龄可以设置为 1，最大年龄就可以设置为 300，这样的数据才更合理些。</p><blockquote><p>注意：MySQL 不支持检查约束。</p><p>这样是不是就没办法保证年龄在指定的范围内了？从数据库层面不能保证，以后可以在 java 代码中进行限制，一样也可以实现要求。</p></blockquote></li><li><p>默认约束： 关键字是 DEFAULT</p><p>保存数据时，未指定值则采用默认值。</p><p>例如：我们在给 english 列添加该约束，指定默认值是 0，这样在添加数据时没有指定具体值时就会采用默认给定的 0。</p><p><img src="'+t+`" alt="image-20220326181903024"></p><p>image-20220326181903024</p></li><li><p>外键约束： 关键字是 FOREIGN KEY</p><p>外键用来让两个表的数据之间建立链接，保证数据的一致性和完整性。</p><p>外键约束现在可能还不太好理解，后面我们会重点进行讲解。</p><p>提示：实际开发中，一般不用物理外键，而是使用逻辑外键，就是先搞清表和表的关系，如 1 对多的话，在多的一方建立外键字段。</p></li></ul><h3 id="_1-3-非空约束-🍐" tabindex="-1">1.3 非空约束 🍐 <a class="header-anchor" href="#_1-3-非空约束-🍐" aria-label="Permalink to &quot;1.3 非空约束 🍐&quot;">​</a></h3><h4 id="_1-3-1-概念" tabindex="-1">1.3.1 概念 <a class="header-anchor" href="#_1-3-1-概念" aria-label="Permalink to &quot;1.3.1 概念&quot;">​</a></h4><p>非空约束用于保证列中所有数据不能有 NULL 值</p><h4 id="_1-3-2-语法" tabindex="-1">1.3.2 语法 <a class="header-anchor" href="#_1-3-2-语法" aria-label="Permalink to &quot;1.3.2 语法&quot;">​</a></h4><p>点击查看代码</p><h5 id="_1️⃣-添加约束" tabindex="-1">1️⃣ 添加约束 <a class="header-anchor" href="#_1️⃣-添加约束" aria-label="Permalink to &quot;1️⃣ 添加约束&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 创建表时添加非空约束</span></span>
<span class="line"><span>CREATE TABLE 表名(</span></span>
<span class="line"><span>    列名 数据类型 NOT NULL,</span></span>
<span class="line"><span>    …</span></span>
<span class="line"><span>);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 建完表后添加非空约束</span></span>
<span class="line"><span>ALTER TABLE 表名 MODIFY 字段名 数据类型 NOT NULL;</span></span></code></pre></div><h5 id="_2️⃣-删除约束" tabindex="-1">2️⃣ 删除约束 <a class="header-anchor" href="#_2️⃣-删除约束" aria-label="Permalink to &quot;2️⃣ 删除约束&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>ALTER TABLE 表名 MODIFY 字段名 数据类型;</span></span></code></pre></div><blockquote><p>在 Navicat 中设置图解</p></blockquote><p><img src="`+c+`" alt=""></p><h3 id="_1-4-唯一约束-🍐" tabindex="-1">1.4 唯一约束 🍐 <a class="header-anchor" href="#_1-4-唯一约束-🍐" aria-label="Permalink to &quot;1.4 唯一约束 🍐&quot;">​</a></h3><h4 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h4><p>唯一约束用于保证列中所有数据各不相同</p><h4 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h4><p>点击查看代码</p><h5 id="_1️⃣-添加约束-1" tabindex="-1">1️⃣ 添加约束 <a class="header-anchor" href="#_1️⃣-添加约束-1" aria-label="Permalink to &quot;1️⃣ 添加约束&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 创建表时添加唯一约束</span></span>
<span class="line"><span>CREATE TABLE 表名(</span></span>
<span class="line"><span>    列名 数据类型 UNIQUE [AUTO_INCREMENT],</span></span>
<span class="line"><span>    -- AUTO_INCREMENT: 当不指定值时自动增长</span></span>
<span class="line"><span>    …</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>CREATE TABLE 表名(</span></span>
<span class="line"><span>    列名 数据类型,</span></span>
<span class="line"><span>    …</span></span>
<span class="line"><span>    [CONSTRAINT] [约束名称] UNIQUE(列名)</span></span>
<span class="line"><span>);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 建完表后添加唯一约束</span></span>
<span class="line"><span>ALTER TABLE 表名 MODIFY 字段名 数据类型 UNIQUE;</span></span></code></pre></div><h5 id="_2️⃣-删除约束-1" tabindex="-1">2️⃣ 删除约束 <a class="header-anchor" href="#_2️⃣-删除约束-1" aria-label="Permalink to &quot;2️⃣ 删除约束&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>ALTER TABLE 表名 DROP INDEX 字段名;</span></span></code></pre></div><blockquote><p>Navicat 中设置唯一约束</p></blockquote><p><img src="`+o+`" alt=""></p><h3 id="_1-5-主键约束-🍐" tabindex="-1">1.5 主键约束 🍐 <a class="header-anchor" href="#_1-5-主键约束-🍐" aria-label="Permalink to &quot;1.5 主键约束 🍐&quot;">​</a></h3><h4 id="概念-1" tabindex="-1">概念 <a class="header-anchor" href="#概念-1" aria-label="Permalink to &quot;概念&quot;">​</a></h4><p>主键是一行数据的唯一标识，要求非空且唯一</p><p>一张表只能有一个主键</p><h4 id="语法-1" tabindex="-1">语法 <a class="header-anchor" href="#语法-1" aria-label="Permalink to &quot;语法&quot;">​</a></h4><p>点击查看</p><h5 id="_1️⃣-添加约束-2" tabindex="-1">1️⃣ 添加约束 <a class="header-anchor" href="#_1️⃣-添加约束-2" aria-label="Permalink to &quot;1️⃣ 添加约束&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 创建表时添加主键约束</span></span>
<span class="line"><span>CREATE TABLE 表名(</span></span>
<span class="line"><span>    列名 数据类型 PRIMARY KEY [AUTO_INCREMENT],</span></span>
<span class="line"><span>    …</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>CREATE TABLE 表名(</span></span>
<span class="line"><span>    列名 数据类型,</span></span>
<span class="line"><span>    [CONSTRAINT] [约束名称] PRIMARY KEY(列名)</span></span>
<span class="line"><span>);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 建完表后添加主键约束</span></span>
<span class="line"><span>ALTER TABLE 表名 ADD PRIMARY KEY(字段名);</span></span></code></pre></div><h5 id="_2️⃣-删除约束-2" tabindex="-1">2️⃣ 删除约束 <a class="header-anchor" href="#_2️⃣-删除约束-2" aria-label="Permalink to &quot;2️⃣ 删除约束&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>ALTER TABLE 表名 DROP PRIMARY KEY;</span></span></code></pre></div><blockquote><p>Navicat 中设置主键约束</p></blockquote><p><img src="`+d+`" alt=""></p><h3 id="_1-6-默认约束-🍐" tabindex="-1">1.6 默认约束 🍐 <a class="header-anchor" href="#_1-6-默认约束-🍐" aria-label="Permalink to &quot;1.6 默认约束 🍐&quot;">​</a></h3><h4 id="概念-2" tabindex="-1">概念 <a class="header-anchor" href="#概念-2" aria-label="Permalink to &quot;概念&quot;">​</a></h4><p>保存数据时，未指定值则采用默认值</p><h4 id="语法-2" tabindex="-1">语法 <a class="header-anchor" href="#语法-2" aria-label="Permalink to &quot;语法&quot;">​</a></h4><p>点击查看</p><h5 id="_1️⃣-添加约束-3" tabindex="-1">1️⃣ 添加约束 <a class="header-anchor" href="#_1️⃣-添加约束-3" aria-label="Permalink to &quot;1️⃣ 添加约束&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 创建表时添加默认约束</span></span>
<span class="line"><span>CREATE TABLE 表名(</span></span>
<span class="line"><span>    列名 数据类型 DEFAULT 默认值,</span></span>
<span class="line"><span>    …</span></span>
<span class="line"><span>);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 建完表后添加默认约束</span></span>
<span class="line"><span>ALTER TABLE 表名 ALTER 列名 SET DEFAULT 默认值;</span></span></code></pre></div><h5 id="_2️⃣-删除约束-3" tabindex="-1">2️⃣ 删除约束 <a class="header-anchor" href="#_2️⃣-删除约束-3" aria-label="Permalink to &quot;2️⃣ 删除约束&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>ALTER TABLE 表名 ALTER 列名 DROP DEFAULT;</span></span></code></pre></div><h3 id="_1-7-约束案例" tabindex="-1">1.7 约束案例 <a class="header-anchor" href="#_1-7-约束案例" aria-label="Permalink to &quot;1.7 约束案例&quot;">​</a></h3><p><strong>根据需求，为表添加合适的约束</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 员工表</span></span>
<span class="line"><span>CREATE TABLE emp (</span></span>
<span class="line"><span>id INT,  -- 员工id，主键且自增长</span></span>
<span class="line"><span>    ename VARCHAR(50), -- 员工姓名，非空且唯一</span></span>
<span class="line"><span>    joindate DATE,  -- 入职日期，非空</span></span>
<span class="line"><span>    salary DOUBLE(7,2),  -- 工资，非空</span></span>
<span class="line"><span>    bonus DOUBLE(7,2)  -- 奖金，如果没有将近默认为0</span></span>
<span class="line"><span>);</span></span></code></pre></div><p><strong>建表语句如下：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 先删除表</span></span>
<span class="line"><span>DROP TABLE IF EXISTS emp;</span></span>
<span class="line"><span>-- 员工表</span></span>
<span class="line"><span>CREATE TABLE emp (</span></span>
<span class="line"><span>  id INT PRIMARY KEY, -- 员工id，主键且自增长</span></span>
<span class="line"><span>  ename VARCHAR(50) NOT NULL UNIQUE, -- 员工姓名，非空并且唯一</span></span>
<span class="line"><span>  joindate DATE NOT NULL , -- 入职日期，非空</span></span>
<span class="line"><span>  salary DOUBLE(7,2) NOT NULL , -- 工资，非空</span></span>
<span class="line"><span>  bonus DOUBLE(7,2) DEFAULT 0 -- 奖金，如果没有奖金默认为0</span></span>
<span class="line"><span>);</span></span></code></pre></div><blockquote><p>先添加一条没有问题的数据</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>INSERT INTO emp(id,ename,joindate,salary,bonus) values(1,&#39;张三&#39;,&#39;1999-11-11&#39;,8800,5000);</span></span></code></pre></div><h4 id="_1-验证主键约束-非空且唯一" tabindex="-1">1. 验证主键约束，非空且唯一 <a class="header-anchor" href="#_1-验证主键约束-非空且唯一" aria-label="Permalink to &quot;1\\. 验证主键约束，非空且唯一&quot;">​</a></h4><p>点击查看演示</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>INSERT INTO emp(id,ename,joindate,salary,bonus) values(null,&#39;张三&#39;,&#39;1999-11-11&#39;,8800,5000);</span></span></code></pre></div><p>执行结果如下：</p><p><img src="`+r+`" alt="image-20210724114548170"></p><p>从上面的结果可以看到，字段 <code>id</code> 不能为 null。 那我们重新添加一条数据，如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>INSERT INTO emp(id,ename,joindate,salary,bonus) values(1,&#39;张三&#39;,&#39;1999-11-11&#39;,8800,5000);</span></span></code></pre></div><p>执行结果如下： <img src="`+h+'" alt="image-20210724114805350"></p><p>从上面结果可以看到，1 这个值重复了。 所以主键约束是用来限制数据非空且唯一的。那我们再添加一条符合要求的数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>INSERT INTO emp(id,ename,joindate,salary,bonus) values(2,&#39;李四&#39;,&#39;1999-11-11&#39;,8800,5000);</span></span></code></pre></div><p>执行结果如下： <img src="'+u+'" alt="image-20210724115024106"></p><h4 id="_2-验证非空约束" tabindex="-1">2.验证非空约束 <a class="header-anchor" href="#_2-验证非空约束" aria-label="Permalink to &quot;2.验证非空约束&quot;">​</a></h4><p>点击查看演示</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>INSERT INTO emp(id,ename,joindate,salary,bonus) values(3,null,&#39;1999-11-11&#39;,8800,5000);</span></span></code></pre></div><p>执行结果如下： <img src="'+m+'" alt="image-20210724115149415"></p><p>从上面结果可以看到，<code>ename</code> 字段的非空约束生效了。</p><h4 id="_3-验证唯一约束" tabindex="-1">3.验证唯一约束 <a class="header-anchor" href="#_3-验证唯一约束" aria-label="Permalink to &quot;3.验证唯一约束&quot;">​</a></h4><p>点击查看演示</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>INSERT INTO emp(id,ename,joindate,salary,bonus) values(3,&#39;李四&#39;,&#39;1999-11-11&#39;,8800,5000);</span></span></code></pre></div><p>执行结果如下： <img src="'+g+'" alt="image-20210724115336916"></p><p>从上面结果可以看到，<code>ename</code> 字段的唯一约束生效了。</p><h4 id="_4-默认约束" tabindex="-1">4.默认约束 <a class="header-anchor" href="#_4-默认约束" aria-label="Permalink to &quot;4.默认约束&quot;">​</a></h4><p>点击查看演示</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>INSERT INTO emp(id,ename,joindate,salary) values(3,&#39;王五&#39;,&#39;1999-11-11&#39;,8800);</span></span></code></pre></div><p>执行完上面语句后查询表中数据，如下图可以看到王五这条数据的 bonus 列就有了默认值 0。 <img src="'+b+'" alt="image-20210724115547951"></p><p>注意：默认约束只有在不给值时才会采用默认值。如果给了 null，那值就是 null 值。</p><p>如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>INSERT INTO emp(id,ename,joindate,salary,bonus) values(4,&#39;赵六&#39;,&#39;1999-11-11&#39;,8800,null);</span></span></code></pre></div><p>执行完上面语句后查询表中数据，如下图可以看到赵六这条数据的 bonus 列的值是 null。</p><p><img src="'+_+`" alt="image-20210724115826516"></p><h4 id="_5-验证自动增长-auto-increment-当列是数字类型-并且唯一约束" tabindex="-1">5.验证自动增长： auto_increment 当列是数字类型 并且唯一约束 <a class="header-anchor" href="#_5-验证自动增长-auto-increment-当列是数字类型-并且唯一约束" aria-label="Permalink to &quot;5.验证自动增长： auto\\_increment 当列是数字类型 并且唯一约束&quot;">​</a></h4><p>点击查看演示</p><p>重新创建 <code>emp</code> 表，并给 id 列添加自动增长</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 员工表</span></span>
<span class="line"><span>CREATE TABLE emp (</span></span>
<span class="line"><span>  id INT PRIMARY KEY auto_increment, -- 员工id，主键且自增长</span></span>
<span class="line"><span>  ename VARCHAR(50) NOT NULL UNIQUE, -- 员工姓名，非空并且唯一</span></span>
<span class="line"><span>  joindate DATE NOT NULL , -- 入职日期，非空</span></span>
<span class="line"><span>  salary DOUBLE(7,2) NOT NULL , -- 工资，非空</span></span>
<span class="line"><span>  bonus DOUBLE(7,2) DEFAULT 0 -- 奖金，如果没有奖金默认为0</span></span>
<span class="line"><span>);</span></span></code></pre></div><p>接下来给 emp 添加数据，分别验证不给 id 列添加值以及给 id 列添加 null 值，id 列的值会不会自动增长：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 不给id值</span></span>
<span class="line"><span>INSERT INTO emp(ename,joindate,salary,bonus) values(&#39;赵六&#39;,&#39;1999-11-11&#39;,8800,null);</span></span>
<span class="line"><span>-- 给id值</span></span>
<span class="line"><span>INSERT INTO emp(id,ename,joindate,salary,bonus) values(null,&#39;赵六2&#39;,&#39;1999-11-11&#39;,8800,null);</span></span>
<span class="line"><span>-- 给id值</span></span>
<span class="line"><span>INSERT INTO emp(id,ename,joindate,salary,bonus) values(null,&#39;赵六3&#39;,&#39;1999-11-11&#39;,8800,null);</span></span></code></pre></div><h3 id="_1-8-约束实操练习-✏️" tabindex="-1">1.8 约束实操练习 ✏️ <a class="header-anchor" href="#_1-8-约束实操练习-✏️" aria-label="Permalink to &quot;1.8 约束实操练习 ✏️&quot;">​</a></h3><h4 id="_1-8-0「约束实操-」目的" tabindex="-1">1.8.0「约束实操 」目的 <a class="header-anchor" href="#_1-8-0「约束实操-」目的" aria-label="Permalink to &quot;1.8.0「约束实操 」目的&quot;">​</a></h4><blockquote><p>熟悉唯一约束、非空约束、默认约束、自增、主键约束的用法并理解</p></blockquote><h4 id="_1-8-1「约束实操-」需求-效果" tabindex="-1">1.8.1「约束实操 」需求&amp;效果 <a class="header-anchor" href="#_1-8-1「约束实操-」需求-效果" aria-label="Permalink to &quot;1.8.1「约束实操 」需求&amp;效果&quot;">​</a></h4><blockquote><p>设置约束后，验证是否生效</p></blockquote><h4 id="_1-8-2「约束实操-」步鄹" tabindex="-1">1.8.2「约束实操 」步鄹 <a class="header-anchor" href="#_1-8-2「约束实操-」步鄹" aria-label="Permalink to &quot;1.8.2「约束实操 」步鄹&quot;">​</a></h4><ul><li><p><strong>方式 1： 在创建员工表的时候 在 ddl 中 添加约束</strong></p></li><li><p><strong>方式 2： 创建之后进行修改---Navicat 进行修改</strong></p></li></ul><blockquote><p>详情请看：1.3-1.6 👈</p></blockquote><p>提示</p><ul><li>非空约束： 关键字是 NOT NULL <ul><li>保证列中所有的数据不能有 null 值。</li><li>例如：id 列在添加 马花疼 这条数据时就不能添加成功。</li></ul></li><li>唯一约束：关键字是 UNIQUE <ul><li>保证列中所有数据各不相同。</li><li>例如：id 列中三条数据的值都是 1，这样的数据在添加时是绝对不允许的。</li></ul></li><li>主键约束且自增： 关键字是 PRIMARY KEY auto_increment <ul><li>主键是一行数据的唯一标识，要求非空且唯一。一般我们都会给没张表添加一个主键列用来唯一标识数据。</li></ul></li><li>默认约束： 关键字是 DEFAULT <ul><li>保存数据时，未指定值则采用默认值</li></ul></li></ul><blockquote><p>详情请看：1.7 约束案例 👈</p></blockquote><p>点击查看测试数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>--</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 非空约束</span></span>
<span class="line"><span>INSERT INTO emp(id,ename,joindate,salary,bonus) values(3,null,&#39;1999-11-11&#39;,8800,5000);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 主键自增测试数据：</span></span>
<span class="line"><span>INSERT INTO emp(ename,joindate,salary,bonus) values(&#39;赵六&#39;,null,8800,null);</span></span>
<span class="line"><span>INSERT INTO emp(id,ename,joindate,salary,bonus) values(null,&#39;赵六2&#39;,&#39;1999-11-11&#39;,8800,null);</span></span>
<span class="line"><span>INSERT INTO emp(id,ename,joindate,salary,bonus) values(null,&#39;赵六3&#39;,&#39;1999-11-11&#39;,8800,null);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 主键唯一</span></span>
<span class="line"><span>INSERT INTO emp(id,ename,joindate,salary,bonus) values(3,&#39;李四&#39;,&#39;1999-11-11&#39;,8800,5000);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 默认约束</span></span>
<span class="line"><span></span></span>
<span class="line"><span>INSERT INTO emp(id,ename,joindate,salary) values(3,&#39;王五&#39;,&#39;1999-11-11&#39;,8800);</span></span></code></pre></div><h4 id="_1-8-3-拓展思维-🚀" tabindex="-1">1.8.3 拓展思维：🚀 <a class="header-anchor" href="#_1-8-3-拓展思维-🚀" aria-label="Permalink to &quot;1.8.3 拓展思维：🚀&quot;">​</a></h4><p>拓展思维</p><p>当主键自增的时候，在传统的平台中，有大量的物联网设备，每时每刻上传数据的话，很容易导致 int 主键用完，导致不可用，怎么解决?</p><p>解决方案一：使用类似 UUID 的技术，保证每次主键不一样</p><p>解决方案二：还是使用 int ，使用分表进行存储（如）</p><p><img src="`+E+'" alt="image-20220326140530889"></p><h3 id="_1-9-外键约束-🍐" tabindex="-1">1.9 外键约束 🍐 <a class="header-anchor" href="#_1-9-外键约束-🍐" aria-label="Permalink to &quot;1.9 外键约束 🍐&quot;">​</a></h3><h4 id="_1-9-1-概述" tabindex="-1">1.9.1 概述 <a class="header-anchor" href="#_1-9-1-概述" aria-label="Permalink to &quot;1.9.1 概述&quot;">​</a></h4><p>外键用来让两个表的数据之间建立链接，保证数据的一致性和完整性。</p><p>如何理解上面的概念呢？如下图有两张表，员工表和部门表： <img src="'+v+`" alt="image-20210724120904180"></p><p>员工表中的 dep_id 字段是部门表的 id 字段关联，也就是说 1 号学生张三属于 1 号部门研发部的员工。 <strong>现在我要删除 1 号部门，就会出现错误的数据（员工表中属于 1 号部门的数据）</strong>。 而我们上面说的两张表的关系只是我们认为它们有关系，此时需要通过外键让这两张表产生数据库层面的关系，这样你要删除部门表中的 1 号部门的数据将<strong>无法删除</strong>。</p><h4 id="_1-9-2-语法" tabindex="-1">1.9.2 语法 <a class="header-anchor" href="#_1-9-2-语法" aria-label="Permalink to &quot;1.9.2 语法&quot;">​</a></h4><p>点击查看</p><ul><li>添加外键约束</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 创建表时添加外键约束</span></span>
<span class="line"><span>CREATE TABLE 表名(</span></span>
<span class="line"><span>   列名 数据类型,</span></span>
<span class="line"><span>   …</span></span>
<span class="line"><span>   [CONSTRAINT] [外键名称] FOREIGN KEY(外键列名) REFERENCES 主表(主表列名)</span></span>
<span class="line"><span>);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 建完表后添加外键约束</span></span>
<span class="line"><span>ALTER TABLE 表名 ADD CONSTRAINT 外键名称 FOREIGN KEY (外键字段名称) REFERENCES 主表名称(主表列名称);</span></span></code></pre></div><ul><li>删除外键约束</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>ALTER TABLE 表名 DROP FOREIGN KEY 外键名称;</span></span></code></pre></div><h4 id="_1-9-3-练习" tabindex="-1">1.9.3 练习 <a class="header-anchor" href="#_1-9-3-练习" aria-label="Permalink to &quot;1.9.3 练习&quot;">​</a></h4><p>根据上述语法创建员工表和部门表，并添加上外键约束：</p><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>-- 删除表</span></span>
<span class="line"><span>DROP TABLE IF EXISTS emp;</span></span>
<span class="line"><span>DROP TABLE IF EXISTS dept;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 部门表</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CREATE TABLE dept(</span></span>
<span class="line"><span></span></span>
<span class="line"><span>id int primary key auto_increment,</span></span>
<span class="line"><span>dep_name varchar(20),</span></span>
<span class="line"><span>addr varchar(20)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 员工表</span></span>
<span class="line"><span>CREATE TABLE emp(</span></span>
<span class="line"><span>id int primary key auto_increment,</span></span>
<span class="line"><span>name varchar(20),</span></span>
<span class="line"><span>age int,</span></span>
<span class="line"><span>dep_id int,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 添加外键 dep_id,关联 dept 表的id主键</span></span>
<span class="line"><span>CONSTRAINT fk_emp_dept FOREIGN KEY(dep_id) REFERENCES dept(id)</span></span>
<span class="line"><span>);</span></span></code></pre></div><p>添加数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 添加 2 个部门</span></span>
<span class="line"><span>insert into dept(dep_name,addr) values</span></span>
<span class="line"><span>(&#39;研发部&#39;,&#39;广州&#39;),(&#39;销售部&#39;, &#39;深圳&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 添加员工,dep_id 表示员工所在的部门</span></span>
<span class="line"><span>INSERT INTO emp (NAME, age, dep_id) VALUES</span></span>
<span class="line"><span>(&#39;张三&#39;, 20, 1),</span></span>
<span class="line"><span>(&#39;李四&#39;, 20, 1),</span></span>
<span class="line"><span>(&#39;王五&#39;, 20, 1),</span></span>
<span class="line"><span>(&#39;赵六&#39;, 20, 2),</span></span>
<span class="line"><span>(&#39;孙七&#39;, 22, 2),</span></span>
<span class="line"><span>(&#39;周八&#39;, 18, 2);</span></span></code></pre></div><p>此时删除 <code>研发部</code> 这条数据，会发现无法删除。</p><p>删除外键</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>alter table emp drop FOREIGN key fk_emp_dept;</span></span></code></pre></div><p>重新添加外键</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>alter table emp add CONSTRAINT fk_emp_dept FOREIGN key(dep_id) REFERENCES dept(id);</span></span></code></pre></div><h4 id="_1-9-4-拓展思维-🚀" tabindex="-1">1.9.4 拓展思维：🚀 <a class="header-anchor" href="#_1-9-4-拓展思维-🚀" aria-label="Permalink to &quot;1.9.4 拓展思维：🚀&quot;">​</a></h4><ol><li>不同软件如何查看外键视图：</li></ol><p>点击查看datagrid：</p><p><img src="`+T+'" alt="image-20220325235302030"></p><p>然后将表拖拽到模型控制栏目中。</p><p>Navicat：</p><p><img src="'+k+'" alt="image-20220325235350568"></p><p>新建模型，然后将表拖拽到模型控制栏目中。</p><p>效果如下:</p><p><img src="'+a+'" alt="image-20220325235508853"></p><p>sqlyog</p><p><img src="'+y+'" alt="image-20220708225443436"></p><p>效果图：</p><p><img src="'+C+'" alt="image-20220708225505376"></p><ol start="2"><li>如果快速可视化建立外键：使用 Navicat--设计表--可以可视化建立外键</li></ol><p>点击查看图解</p><p><img src="'+R+'" alt="image-20220325235608720"></p><ol start="3"><li><p>设置外键的时候（如图）</p><p><img src="'+N+'" alt="image-20220326104256147"></p><p>image-20220326104256147</p></li></ol><p>点击查看</p><ul><li>CASCADE：父表 delete、update 的时候，子表会 delete、update 掉关联记录；</li><li>SET NULL：父表 delete、update 的时候，子表会将关联记录的外键字段所在列设为 null，所以注意在设计子表时外键不能设为 not null；</li><li>RESTRICT：如果想要删除父表的记录时，而在子表中有关联该父表的记录，则不允许删除父表中的记录；（默认）</li><li>NO ACTION：同 RESTRICT，也是首先先检查外键；</li></ul><ol start="4"><li>实际开发中注意事项</li></ol><p>点击查看</p><p><img src="'+q+'" alt="image-20220326115925003"></p><h3 id="_1-10-外键约束练习-✏️" tabindex="-1">1.10 外键约束练习 ✏️ <a class="header-anchor" href="#_1-10-外键约束练习-✏️" aria-label="Permalink to &quot;1.10 外键约束练习 ✏️&quot;">​</a></h3><h4 id="_1-10-0「外键约束」目的" tabindex="-1">1.10.0「外键约束」目的 <a class="header-anchor" href="#_1-10-0「外键约束」目的" aria-label="Permalink to &quot;1.10.0「外键约束」目的&quot;">​</a></h4><blockquote><p>熟悉外键约束</p></blockquote><h4 id="_1-10-1「外键约束」需求-效果" tabindex="-1">1.10.1「外键约束」需求&amp;效果 <a class="header-anchor" href="#_1-10-1「外键约束」需求-效果" aria-label="Permalink to &quot;1.10.1「外键约束」需求&amp;效果&quot;">​</a></h4><p>需求：使用 Navicat 可视化建立 2 张表的外键，并且使用模型进行可视化展示</p><p><img src="'+a+`" alt="image-20220325235508853"></p><h4 id="_1-10-2「外键约束」步鄹" tabindex="-1">1.10.2「外键约束」步鄹 <a class="header-anchor" href="#_1-10-2「外键约束」步鄹" aria-label="Permalink to &quot;1.10.2「外键约束」步鄹&quot;">​</a></h4><h5 id="_1️⃣-准备表" tabindex="-1">1️⃣ 准备表 <a class="header-anchor" href="#_1️⃣-准备表" aria-label="Permalink to &quot;1️⃣ 准备表&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 删除表</span></span>
<span class="line"><span>DROP TABLE IF EXISTS emp;</span></span>
<span class="line"><span>DROP TABLE IF EXISTS dept;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 部门表</span></span>
<span class="line"><span>CREATE TABLE dept(</span></span>
<span class="line"><span>id int primary key auto_increment,</span></span>
<span class="line"><span>dep_name varchar(20),</span></span>
<span class="line"><span>addr varchar(20)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>-- 员工表</span></span>
<span class="line"><span>CREATE TABLE emp(</span></span>
<span class="line"><span>id int primary key auto_increment,</span></span>
<span class="line"><span>name varchar(20),</span></span>
<span class="line"><span>age int,</span></span>
<span class="line"><span>dep_id int</span></span>
<span class="line"><span>);</span></span></code></pre></div><h5 id="_2️⃣-使用-navicat-添加约束-也可以使用命令" tabindex="-1">2️⃣ 使用 Navicat 添加约束，也可以使用命令 <a class="header-anchor" href="#_2️⃣-使用-navicat-添加约束-也可以使用命令" aria-label="Permalink to &quot;2️⃣ 使用 Navicat 添加约束，也可以使用命令&quot;">​</a></h5><blockquote><p>参考约束介绍中的 Navicat 设置图解</p></blockquote><h2 id="_2-数据库设计" tabindex="-1">2. 数据库设计 <a class="header-anchor" href="#_2-数据库设计" aria-label="Permalink to &quot;2\\. 数据库设计&quot;">​</a></h2><h3 id="_2-1-数据库设计简介-🍐" tabindex="-1">2.1 数据库设计简介 🍐 <a class="header-anchor" href="#_2-1-数据库设计简介-🍐" aria-label="Permalink to &quot;2.1 数据库设计简介 🍐&quot;">​</a></h3><h4 id="_2-1-1-「数据库设计」核心问题-答案" tabindex="-1">2.1.1 「数据库设计」核心问题&amp;答案 <a class="header-anchor" href="#_2-1-1-「数据库设计」核心问题-答案" aria-label="Permalink to &quot;2.1.1 「数据库设计」核心问题&amp;答案&quot;">​</a></h4><p>问题</p><ol><li>数据库设计，设计什么或者关注什么？</li></ol><p>点击查看代码</p><ul><li>软件的研发步骤</li></ul><p><img src="`+A+'" alt="image-20210724130925801"></p><h4 id="数据库设计概念" tabindex="-1">数据库设计概念 <a class="header-anchor" href="#数据库设计概念" aria-label="Permalink to &quot;数据库设计概念&quot;">​</a></h4><ul><li>数据库设计就是根据业务系统的具体需求，结合我们所选用的 DBMS，为这个业务系统构造出最优的数据存储模型。</li><li>👉 建立数据库中的<strong>表结构以及表与表之间的关联关系</strong>的过程。</li><li>👉 有哪些表？表里有哪些字段？表和表之间有什么关系？</li></ul><h4 id="数据库设计的步骤" tabindex="-1">数据库设计的步骤 <a class="header-anchor" href="#数据库设计的步骤" aria-label="Permalink to &quot;数据库设计的步骤&quot;">​</a></h4><ul><li><p>需求分析（数据是什么? 数据具有哪些属性? 数据与属性的特点是什么）</p></li><li><p>逻辑分析（通过 ER 图对数据库进行逻辑建模，不需要考虑我们所选用的数据库管理系统） <img src="'+I+'" alt="image-20220326182949545"></p></li></ul><p><strong>powerdesigner 专业用语 er 图设计，数据库表设计</strong></p><p>如下图就是 ER(Entity/Relation)图：</p><p><img src="'+f+'" alt="image-20210724131210759"></p><ul><li><p>物理设计（根据数据库自身的特点把逻辑设计转换为物理设计）</p></li><li><p>维护设计（1.对新的需求进行建表；2.表优化）</p></li><li><p>表关系</p><ul><li>一对一 - 如：用户 和 用户详情 - 一对一关系多用于表拆分，将一个实体中经常使用的字段放一张表，不经常使用的字段放另一张表，用于提升查询性能 <img src="'+L+'" alt="image-20210724133015129"> 上图左边是用户的详细信息，而我们真正在展示用户信息时最长用的则是上图右边红框所示，所以我们会将详细信息查分成两周那个表。</li></ul></li></ul><h3 id="_2-2-表关系-一对多-🍐" tabindex="-1">2.2 表关系(一对多) 🍐 <a class="header-anchor" href="#_2-2-表关系-一对多-🍐" aria-label="Permalink to &quot;2.2 表关系(一对多) 🍐&quot;">​</a></h3><p>一对多</p><ul><li>如：部门 和 员工</li><li>一个部门对应多个员工，一个员工对应一个部门。</li></ul><h4 id="_2-2-1-实现方式" tabindex="-1">2.2.1 实现方式 <a class="header-anchor" href="#_2-2-1-实现方式" aria-label="Permalink to &quot;2.2.1 实现方式&quot;">​</a></h4><p><strong>表关系(一对多):在多的一方建立外键，指向一的一方的主键</strong></p><h4 id="_2-2-2-案例" tabindex="-1">2.2.2 案例 <a class="header-anchor" href="#_2-2-2-案例" aria-label="Permalink to &quot;2.2.2 案例&quot;">​</a></h4><p>我们还是以 <code>员工表</code> 和 <code>部门表</code> 举例:</p><p><img src="'+O+'" alt="image-20210724134145803"></p><p>经过分析发现，员工表属于多的一方，而部门表属于一的一方，此时我们会在员工表中添加一列（dep_id），指向于部门表的主键（id）： <img src="'+P+`" alt="image-20210724134318685"></p><p>建表语句如下：</p><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 删除表</span></span>
<span class="line"><span>DROP TABLE IF EXISTS tb_emp;</span></span>
<span class="line"><span>DROP TABLE IF EXISTS tb_dept;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 部门表</span></span>
<span class="line"><span>CREATE TABLE tb_dept(</span></span>
<span class="line"><span>id int primary key auto_increment,</span></span>
<span class="line"><span>dep_name varchar(20),</span></span>
<span class="line"><span>addr varchar(20)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>-- 员工表</span></span>
<span class="line"><span>CREATE TABLE tb_emp(</span></span>
<span class="line"><span>id int primary key auto_increment,</span></span>
<span class="line"><span>name varchar(20),</span></span>
<span class="line"><span>age int,</span></span>
<span class="line"><span>dep_id int,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 添加外键 dep_id,关联 dept 表的id主键</span></span>
<span class="line"><span>CONSTRAINT fk_emp_dept FOREIGN KEY(dep_id) REFERENCES tb_dept(id)</span></span>
<span class="line"><span>);</span></span></code></pre></div><h4 id="_2-2-3-表结构模型图" tabindex="-1">2.2.3 表结构模型图： <a class="header-anchor" href="#_2-2-3-表结构模型图" aria-label="Permalink to &quot;2.2.3 表结构模型图：&quot;">​</a></h4><p><img src="`+S+'" alt="image-20210724140456921"></p><h3 id="_2-3-表关系-多对多-🍐" tabindex="-1">2.3 表关系(多对多) 🍐 <a class="header-anchor" href="#_2-3-表关系-多对多-🍐" aria-label="Permalink to &quot;2.3 表关系(多对多) 🍐&quot;">​</a></h3><p>多对多</p><ul><li>如：商品 和 订单</li><li>一个商品对应多个订单，一个订单包含多个商品</li></ul><h4 id="_2-3-1-实现方式" tabindex="-1">2.3.1 实现方式 <a class="header-anchor" href="#_2-3-1-实现方式" aria-label="Permalink to &quot;2.3.1 实现方式&quot;">​</a></h4><p><strong>表关系(多对多)：建立第三张中间表，中间表**至少包含两个外键**，分别关联两方主键</strong></p><p><strong>注意：常见实战中，一般中间表，都含有其他字段，如商品的个数，优惠套餐</strong></p><h4 id="_2-3-2-案例" tabindex="-1">2.3.2 案例 <a class="header-anchor" href="#_2-3-2-案例" aria-label="Permalink to &quot;2.3.2 案例&quot;">​</a></h4><p>我们以 <code>订单表</code> 和 <code>商品表</code> 举例：</p><p><img src="'+x+'" alt="image-20210724134735939"></p><p>经过分析发现，订单表和商品表都属于多的一方，此时需要创建一个中间表，在中间表中添加订单表的外键和商品表的外键指向两张表的主键：</p><p><img src="'+D+`" alt="image-20210724135054834"></p><p>建表语句如下：</p><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 删除表</span></span>
<span class="line"><span>DROP TABLE IF EXISTS tb_order_goods;</span></span>
<span class="line"><span>DROP TABLE IF EXISTS tb_order;</span></span>
<span class="line"><span>DROP TABLE IF EXISTS tb_goods;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 订单表</span></span>
<span class="line"><span>CREATE TABLE tb_order(</span></span>
<span class="line"><span>  id int primary key auto_increment,</span></span>
<span class="line"><span>  payment double(10,2),</span></span>
<span class="line"><span>  payment_type TINYINT,</span></span>
<span class="line"><span>  status TINYINT</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 商品表</span></span>
<span class="line"><span>CREATE TABLE tb_goods(</span></span>
<span class="line"><span>  id int primary key auto_increment,</span></span>
<span class="line"><span>  title varchar(100),</span></span>
<span class="line"><span>  price double(10,2)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 订单商品中间表</span></span>
<span class="line"><span>CREATE TABLE tb_order_goods(</span></span>
<span class="line"><span>  id int primary key auto_increment,</span></span>
<span class="line"><span>  order_id int,</span></span>
<span class="line"><span>  goods_id int,</span></span>
<span class="line"><span>  count int</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 建完表后，添加外键</span></span>
<span class="line"><span>alter table tb_order_goods add CONSTRAINT fk_order_id FOREIGN key(order_id) REFERENCES tb_order(id);</span></span>
<span class="line"><span>alter table tb_order_goods add CONSTRAINT fk_goods_id FOREIGN key(goods_id) REFERENCES tb_goods(id);</span></span></code></pre></div><h4 id="_2-3-3-表结构模型图" tabindex="-1">2.3.3 表结构模型图： <a class="header-anchor" href="#_2-3-3-表结构模型图" aria-label="Permalink to &quot;2.3.3 表结构模型图：&quot;">​</a></h4><p><img src="`+j+'" alt="image-20210724140307910"></p><h3 id="_2-4-表关系-一对一-🍐" tabindex="-1">2.4 表关系(一对一) 🍐 <a class="header-anchor" href="#_2-4-表关系-一对一-🍐" aria-label="Permalink to &quot;2.4 表关系(一对一) 🍐&quot;">​</a></h3><p>一对一</p><ul><li>如：用户 和 用户详情</li><li>一对一关系多用于表拆分，将一个实体中经常使用的字段放一张表，不经常使用的字段放另一张表，用于提升查询性能</li></ul><h4 id="_2-4-1-实现方式" tabindex="-1">2.4.1 实现方式 <a class="header-anchor" href="#_2-4-1-实现方式" aria-label="Permalink to &quot;2.4.1 实现方式&quot;">​</a></h4><p><strong>表关系(一对一)：在任意一方加入外键，关联另一方主键，并且设置外键为唯一(UNIQUE)</strong></p><ul><li><p>案例</p><p>我们以 <code>用户表</code> 举例： <img src="'+B+'" alt="image-20210724135346913"></p><p>而在真正使用过程中发现 id、photo、nickname、age、gender 字段比较常用，此时就可以将这张表查分成两张表。</p><p><img src="'+U+`" alt="image-20210724135649341"></p><p>image-20210724135649341</p></li></ul><h4 id="_2-4-2-建表语句如下" tabindex="-1">2.4.2 建表语句如下： <a class="header-anchor" href="#_2-4-2-建表语句如下" aria-label="Permalink to &quot;2.4.2 建表语句如下：&quot;">​</a></h4><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>create table tb_user_desc (</span></span>
<span class="line"><span>id int primary key auto_increment,</span></span>
<span class="line"><span>city varchar(20),</span></span>
<span class="line"><span>edu varchar(10),</span></span>
<span class="line"><span>income int,</span></span>
<span class="line"><span>status char(2),</span></span>
<span class="line"><span>des varchar(100)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>create table tb_user (</span></span>
<span class="line"><span>id int primary key auto_increment,</span></span>
<span class="line"><span>photo varchar(100),</span></span>
<span class="line"><span>nickname varchar(50),</span></span>
<span class="line"><span>age int,</span></span>
<span class="line"><span>gender char(1),</span></span>
<span class="line"><span>desc_id int unique,</span></span>
<span class="line"><span>-- 添加外键</span></span>
<span class="line"><span>CONSTRAINT fk_user_desc FOREIGN KEY(desc_id) REFERENCES tb_user_desc(id)</span></span>
<span class="line"><span>);</span></span></code></pre></div><h4 id="_2-4-3-查看表结构模型图" tabindex="-1">2.4.3 查看表结构模型图： <a class="header-anchor" href="#_2-4-3-查看表结构模型图" aria-label="Permalink to &quot;2.4.3 查看表结构模型图：&quot;">​</a></h4><p><img src="`+F+'" alt="image-20210724141445785"></p><h3 id="_2-5-数据库设计案例-✏️" tabindex="-1">2.5 数据库设计案例 ✏️ <a class="header-anchor" href="#_2-5-数据库设计案例-✏️" aria-label="Permalink to &quot;2.5 数据库设计案例 ✏️&quot;">​</a></h3><p><a href="https://note.youdao.com/s/DjQkUymG" target="_blank" rel="noreferrer">练习详情open in new window</a> 👈</p><p>点击查看 navicat 添加外键的 图解动画</p><p><img src="'+M+'" alt="VeryCapture_20220918115621"></p><p>VeryCapture_20220918115621</p><p>点击查看 navicat 查看表和表的关系的图解动画</p><p><img src="'+Y+`" alt="VeryCapture_20220918120154"></p><p>VeryCapture_20220918120154</p><h2 id="_3-多表查询-🍐-❤️-✏️" tabindex="-1">3. 多表查询 🍐 ❤️ ✏️ <a class="header-anchor" href="#_3-多表查询-🍐-❤️-✏️" aria-label="Permalink to &quot;3\\. 多表查询 🍐 ❤️ ✏️&quot;">​</a></h2><p>多表查询顾名思义就是从多张表中一次性的查询出我们想要的数据。</p><ul><li><strong>准备环境</strong></li></ul><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>DROP TABLE IF EXISTS emp;</span></span>
<span class="line"><span>DROP TABLE IF EXISTS dept;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建部门表</span></span>
<span class="line"><span>CREATE TABLE dept(</span></span>
<span class="line"><span>        did INT PRIMARY KEY AUTO_INCREMENT,</span></span>
<span class="line"><span>        dname VARCHAR(20)</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建员工表</span></span>
<span class="line"><span>CREATE TABLE emp (</span></span>
<span class="line"><span>        id INT PRIMARY KEY AUTO_INCREMENT,</span></span>
<span class="line"><span>        NAME VARCHAR(10),</span></span>
<span class="line"><span>        gender CHAR(1), -- 性别</span></span>
<span class="line"><span>        salary DOUBLE, -- 工资</span></span>
<span class="line"><span>        join_date DATE, -- 入职日期</span></span>
<span class="line"><span>        dep_id INT,</span></span>
<span class="line"><span>        FOREIGN KEY (dep_id) REFERENCES dept(did) -- 外键，关联部门表(部门表的主键)</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>-- 添加部门数据</span></span>
<span class="line"><span>INSERT INTO dept (dNAME) VALUES (&#39;研发部&#39;),(&#39;市场部&#39;),(&#39;财务部&#39;),(&#39;销售部&#39;);</span></span>
<span class="line"><span>-- 添加员工数据</span></span>
<span class="line"><span>INSERT INTO emp(NAME,gender,salary,join_date,dep_id) VALUES</span></span>
<span class="line"><span>(&#39;孙悟空&#39;,&#39;男&#39;,7200,&#39;2013-02-24&#39;,1),</span></span>
<span class="line"><span>(&#39;猪八戒&#39;,&#39;男&#39;,3600,&#39;2010-12-02&#39;,2),</span></span>
<span class="line"><span>(&#39;唐僧&#39;,&#39;男&#39;,9000,&#39;2008-08-08&#39;,2),</span></span>
<span class="line"><span>(&#39;白骨精&#39;,&#39;女&#39;,5000,&#39;2015-10-07&#39;,3),</span></span>
<span class="line"><span>(&#39;蜘蛛精&#39;,&#39;女&#39;,4500,&#39;2011-03-14&#39;,1),</span></span>
<span class="line"><span>(&#39;小白龙&#39;,&#39;男&#39;,2500,&#39;2011-02-14&#39;,null);</span></span></code></pre></div><p>执行下面的多表查询语句</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>select * from emp , dept;  -- 从emp和dept表中查询所有的字段数据</span></span></code></pre></div><p>结果如下： <img src="`+V+'" alt="image-20210724173630506"></p><p>从上面的结果我们看到有一些无效的数据，如 <code>孙悟空</code> 这个员工属于 1 号部门，但也同时关联的 2、3、4 号部门。 所以我们要通过限制员工表中的<code>dep_id</code> 字段的值和部门表 <code>did</code> 字段的值相等 来<strong>消除这些无效的数据</strong>，</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>select * from emp , dept where emp.dep_id = dept.did;</span></span></code></pre></div><p>点击查看图解动画</p><p><img src="'+K+`" alt="VeryCapture_20220918131903"></p><p>VeryCapture_20220918131903</p><ul><li><p><strong>多表查询分类</strong></p><ul><li><p>连接查询</p><ul><li>内连接查询 ：相当于查询 AB 交集数据</li><li>外连接查询 <ul><li>左外连接查询 ：相当于查询 A 表所有数据和交集部分数据</li><li>右外连接查询 ： 相当于查询 B 表所有数据和交集部分数据</li></ul></li></ul></li><li><p>子查询</p></li></ul></li></ul><h3 id="_3-1-内连接查询" tabindex="-1">3.1 内连接查询 <a class="header-anchor" href="#_3-1-内连接查询" aria-label="Permalink to &quot;3.1 内连接查询&quot;">​</a></h3><h4 id="_3-1-1-语法" tabindex="-1">3.1.1 语法 <a class="header-anchor" href="#_3-1-1-语法" aria-label="Permalink to &quot;3.1.1 语法&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 隐式内连接</span></span>
<span class="line"><span>SELECT 字段列表 FROM 表1,表2… WHERE 条件;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 显示内连接</span></span>
<span class="line"><span>SELECT 字段列表 FROM 表1 [INNER] JOIN 表2 ON 条件 and(or) 条件2;</span></span></code></pre></div><blockquote><p>内连接相当于查询 A B 交集数据</p></blockquote><p><img src="`+X+`" alt="image-20210724174717647"></p><h4 id="_3-1-2-案例" tabindex="-1">3.1.2 案例 <a class="header-anchor" href="#_3-1-2-案例" aria-label="Permalink to &quot;3.1.2 案例&quot;">​</a></h4><p><strong>隐式内连接</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 隐式内连接</span></span>
<span class="line"><span>-- SELECT 字段列表 FROM 表1,表2… WHERE 条件;</span></span>
<span class="line"><span>SELECT * FROM emp,dept WHERE emp.dep_id = dept.did;</span></span></code></pre></div><p>执行上述语句结果如下： <img src="`+G+`" alt="image-20210724175344508"></p><ul><li>查询 emp 的 name， gender，dept 表的 dname</li></ul><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>SELECT</span></span>
<span class="line"><span>  emp. NAME,</span></span>
<span class="line"><span>  emp.gender,</span></span>
<span class="line"><span>  dept.dname</span></span>
<span class="line"><span>FROM</span></span>
<span class="line"><span>  emp,</span></span>
<span class="line"><span>  dept</span></span>
<span class="line"><span>WHERE</span></span>
<span class="line"><span>  emp.dep_id = dept.did;</span></span></code></pre></div><p>执行语句结果如下： <img src="`+H+`" alt="image-20210724175518159"></p><p><strong>显式内连接</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 显示内连接</span></span>
<span class="line"><span>--SELECT 字段列表 FROM 表1 [INNER] JOIN 表2 ON 条件 and(or) 条件2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>select * from emp inner join dept on emp.dep_id = dept.did;</span></span>
<span class="line"><span>-- 上面语句中的inner可以省略，可以书写为如下语句</span></span>
<span class="line"><span>select * from emp  join dept on emp.dep_id = dept.did;</span></span></code></pre></div><p>执行结果如下： <img src="`+w+`" alt="image-20210724180103531"></p><h3 id="_3-2-外连接查询" tabindex="-1">3.2 外连接查询 <a class="header-anchor" href="#_3-2-外连接查询" aria-label="Permalink to &quot;3.2 外连接查询&quot;">​</a></h3><h4 id="_3-2-1-语法" tabindex="-1">3.2.1 语法 <a class="header-anchor" href="#_3-2-1-语法" aria-label="Permalink to &quot;3.2.1 语法&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 左外连接</span></span>
<span class="line"><span>SELECT 字段列表 FROM 表1 LEFT [OUTER] JOIN 表2 ON 条件;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 右外连接</span></span>
<span class="line"><span>SELECT 字段列表 FROM 表1 RIGHT [OUTER] JOIN 表2 ON 条件;</span></span></code></pre></div><blockquote><p>左外连接：相当于查询 A 表所有数据和交集部分数据 右外连接：相当于查询 B 表所有数据和交集部分数据</p></blockquote><p>点击看看下图，哪个是左外，哪个是右外？</p><p><img src="`+J+'" alt="image-clipboard"></p><h4 id="_3-2-2-案例" tabindex="-1">3.2.2 案例 <a class="header-anchor" href="#_3-2-2-案例" aria-label="Permalink to &quot;3.2.2 案例&quot;">​</a></h4><ul><li>查询 emp 表所有数据和对应的部门信息（左外连接）</li></ul><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>select * from emp left join dept on emp.dep_id = dept.did;</span></span></code></pre></div><p>执行语句结果如下：</p><p><img src="'+Q+'" alt="image-20210724180542757"></p><p>结果显示查询到了左表（emp）中所有的数据及两张表能关联的数据。</p><ul><li>查询 dept 表所有数据和对应的员工信息（右外连接）</li></ul><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>select * from emp right join dept on emp.dep_id = dept.did;</span></span></code></pre></div><p>执行语句结果如下：</p><p><img src="'+W+`" alt="image-20210724180613494"></p><p>结果显示查询到了右表（dept）中所有的数据及两张表能关联的数据。</p><p>要查询出部门表中所有的数据，也可以通过左外连接实现，只需要将两个表的位置进行互换：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>select * from dept left join emp on emp.dep_id = dept.did;</span></span></code></pre></div><h3 id="_3-3-子查询" tabindex="-1">3.3 子查询 <a class="header-anchor" href="#_3-3-子查询" aria-label="Permalink to &quot;3.3 子查询&quot;">​</a></h3><h4 id="概念-3" tabindex="-1">概念 <a class="header-anchor" href="#概念-3" aria-label="Permalink to &quot;概念&quot;">​</a></h4><p><strong>查询中嵌套查询，称嵌套查询为子查询</strong>。</p><p>什么是查询中嵌套查询呢？我们通过一个例子来看：</p><p><strong>需求：查询工资高于猪八戒的员工信息。</strong></p><p>点击查看</p><p>来实现这个需求，我们就可以通过二步实现，第一步：先查询出来 猪八戒的工资</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>select salary from emp where name = &#39;猪八戒&#39;</span></span></code></pre></div><p>第二步：查询工资高于猪八戒的员工信息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>select * from emp where salary &gt; 3600;</span></span></code></pre></div><p>第二步中的 3600 可以通过第一步的 sql 查询出来，所以将 3600 用第一步的 sql 语句进行替换</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>select * from emp where salary &gt; (select salary from emp where name = &#39;猪八戒&#39;);</span></span></code></pre></div><p>这就是查询语句中嵌套查询语句。</p><ul><li><p>子查询根据查询结果不同，作用不同 ❤️ 🍐</p><ul><li><strong>子查询语句结果是单行单列，子查询语句作为条件值，使用 = != &gt; &lt; 等进行条件判断</strong></li><li><strong>子查询语句结果是多行单列，子查询语句作为条件值，使用 in 等关键字进行条件判断</strong></li><li><strong>子查询语句结果是多行多列，子查询语句作为虚拟表</strong></li></ul></li></ul><h4 id="案例" tabindex="-1">案例 <a class="header-anchor" href="#案例" aria-label="Permalink to &quot;案例&quot;">​</a></h4><ul><li>查询 &#39;财务部&#39; 和 &#39;市场部&#39; 所有的员工信息</li></ul><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 查询 &#39;财务部&#39; 或者 &#39;市场部&#39; 所有的员工的部门did</span></span>
<span class="line"><span>select did from dept where dname = &#39;财务部&#39; or dname = &#39;市场部&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>select * from emp where dep_id in (select did from dept where dname = &#39;财务部&#39; or dname = &#39;市场部&#39;);</span></span></code></pre></div><ul><li>查询入职日期是 &#39;2011-11-11&#39; 之后的员工信息和部门信息</li></ul><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 查询入职日期是 &#39;2011-11-11&#39; 之后的员工信息</span></span>
<span class="line"><span>select * from emp where join_date &gt; &#39;2011-11-11&#39; ;</span></span>
<span class="line"><span>-- 将上面语句的结果作为虚拟表和dept表进行内连接查询</span></span>
<span class="line"><span>select * from (select * from emp where join_date &gt; &#39;2011-11-11&#39; ) t1, dept where t1.dep_id = dept.did;</span></span></code></pre></div><h3 id="_3-4-案例-✏️" tabindex="-1">3.4 案例 ✏️ <a class="header-anchor" href="#_3-4-案例-✏️" aria-label="Permalink to &quot;3.4 案例 ✏️&quot;">​</a></h3><h4 id="环境准备" tabindex="-1">环境准备： <a class="header-anchor" href="#环境准备" aria-label="Permalink to &quot;环境准备：&quot;">​</a></h4><p>点击查看 sql 语句</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>DROP TABLE IF EXISTS emp;</span></span>
<span class="line"><span>DROP TABLE IF EXISTS dept;</span></span>
<span class="line"><span>DROP TABLE IF EXISTS job;</span></span>
<span class="line"><span>DROP TABLE IF EXISTS salarygrade;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 部门表</span></span>
<span class="line"><span>CREATE TABLE dept (</span></span>
<span class="line"><span>  did INT PRIMARY KEY PRIMARY KEY, -- 部门id</span></span>
<span class="line"><span>  dname VARCHAR(50), -- 部门名称</span></span>
<span class="line"><span>  loc VARCHAR(50) -- 部门所在地</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 职务表，职务名称，职务描述</span></span>
<span class="line"><span>CREATE TABLE job (</span></span>
<span class="line"><span>  id INT PRIMARY KEY,</span></span>
<span class="line"><span>  jname VARCHAR(20),</span></span>
<span class="line"><span>  description VARCHAR(50)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 员工表</span></span>
<span class="line"><span>CREATE TABLE emp (</span></span>
<span class="line"><span>  id INT PRIMARY KEY, -- 员工id</span></span>
<span class="line"><span>  ename VARCHAR(50), -- 员工姓名</span></span>
<span class="line"><span>  job_id INT, -- 职务id</span></span>
<span class="line"><span>  mgr INT , -- 上级领导</span></span>
<span class="line"><span>  joindate DATE, -- 入职日期</span></span>
<span class="line"><span>  salary DECIMAL(7,2), -- 工资</span></span>
<span class="line"><span>  bonus DECIMAL(7,2), -- 奖金</span></span>
<span class="line"><span>  dept_id INT, -- 所在部门编号</span></span>
<span class="line"><span>  CONSTRAINT emp_jobid_ref_job_id_fk FOREIGN KEY (job_id) REFERENCES job (id),</span></span>
<span class="line"><span>  CONSTRAINT emp_deptid_ref_dept_id_fk FOREIGN KEY (dept_id) REFERENCES dept (did)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>-- 工资等级表</span></span>
<span class="line"><span>CREATE TABLE salarygrade (</span></span>
<span class="line"><span>  grade INT PRIMARY KEY,   -- 级别</span></span>
<span class="line"><span>  losalary INT,  -- 最低工资</span></span>
<span class="line"><span>  hisalary INT -- 最高工资</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 添加4个部门</span></span>
<span class="line"><span>INSERT INTO dept(did,dname,loc) VALUES</span></span>
<span class="line"><span>(10,&#39;教研部&#39;,&#39;北京&#39;),</span></span>
<span class="line"><span>(20,&#39;学工部&#39;,&#39;上海&#39;),</span></span>
<span class="line"><span>(30,&#39;销售部&#39;,&#39;广州&#39;),</span></span>
<span class="line"><span>(40,&#39;财务部&#39;,&#39;深圳&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 添加4个职务</span></span>
<span class="line"><span>INSERT INTO job (id, jname, description) VALUES</span></span>
<span class="line"><span>(1, &#39;董事长&#39;, &#39;管理整个公司，接单&#39;),</span></span>
<span class="line"><span>(2, &#39;经理&#39;, &#39;管理部门员工&#39;),</span></span>
<span class="line"><span>(3, &#39;销售员&#39;, &#39;向客人推销产品&#39;),</span></span>
<span class="line"><span>(4, &#39;文员&#39;, &#39;使用办公软件&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 添加员工</span></span>
<span class="line"><span>INSERT INTO emp(id,ename,job_id,mgr,joindate,salary,bonus,dept_id) VALUES</span></span>
<span class="line"><span>(1001,&#39;孙悟空&#39;,4,1004,&#39;2000-12-17&#39;,&#39;8000.00&#39;,NULL,20),</span></span>
<span class="line"><span>(1002,&#39;卢俊义&#39;,3,1006,&#39;2001-02-20&#39;,&#39;16000.00&#39;,&#39;3000.00&#39;,30),</span></span>
<span class="line"><span>(1003,&#39;林冲&#39;,3,1006,&#39;2001-02-22&#39;,&#39;12500.00&#39;,&#39;5000.00&#39;,30),</span></span>
<span class="line"><span>(1004,&#39;唐僧&#39;,2,1009,&#39;2001-04-02&#39;,&#39;29750.00&#39;,NULL,20),</span></span>
<span class="line"><span>(1005,&#39;李逵&#39;,4,1006,&#39;2001-09-28&#39;,&#39;12500.00&#39;,&#39;14000.00&#39;,30),</span></span>
<span class="line"><span>(1006,&#39;宋江&#39;,2,1009,&#39;2001-05-01&#39;,&#39;28500.00&#39;,NULL,30),</span></span>
<span class="line"><span>(1007,&#39;刘备&#39;,2,1009,&#39;2001-09-01&#39;,&#39;24500.00&#39;,NULL,10),</span></span>
<span class="line"><span>(1008,&#39;猪八戒&#39;,4,1004,&#39;2007-04-19&#39;,&#39;30000.00&#39;,NULL,20),</span></span>
<span class="line"><span>(1009,&#39;罗贯中&#39;,1,NULL,&#39;2001-11-17&#39;,&#39;50000.00&#39;,NULL,10),</span></span>
<span class="line"><span>(1010,&#39;吴用&#39;,3,1006,&#39;2001-09-08&#39;,&#39;15000.00&#39;,&#39;0.00&#39;,30),</span></span>
<span class="line"><span>(1011,&#39;沙僧&#39;,4,1004,&#39;2007-05-23&#39;,&#39;11000.00&#39;,NULL,20),</span></span>
<span class="line"><span>(1012,&#39;李逵&#39;,4,1006,&#39;2001-12-03&#39;,&#39;9500.00&#39;,NULL,30),</span></span>
<span class="line"><span>(1013,&#39;小白龙&#39;,4,1004,&#39;2001-12-03&#39;,&#39;30000.00&#39;,NULL,20),</span></span>
<span class="line"><span>(1014,&#39;关羽&#39;,4,1007,&#39;2002-01-23&#39;,&#39;13000.00&#39;,NULL,10);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 添加5个工资等级</span></span>
<span class="line"><span>INSERT INTO salarygrade(grade,losalary,hisalary) VALUES</span></span>
<span class="line"><span>(1,7000,12000),</span></span>
<span class="line"><span>(2,12010,14000),</span></span>
<span class="line"><span>(3,14010,20000),</span></span>
<span class="line"><span>(4,20010,30000),</span></span>
<span class="line"><span>(5,30010,99990);</span></span></code></pre></div><h4 id="需求" tabindex="-1">需求 <a class="header-anchor" href="#需求" aria-label="Permalink to &quot;需求&quot;">​</a></h4><ol><li>查询所有员工信息。查询员工编号，员工姓名，工资，职务名称，职务描述</li></ol><p>点击查看 sql 语句</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>分析：</span></span>
<span class="line"><span>  1. 员工编号，员工姓名，工资 信息在emp 员工表中</span></span>
<span class="line"><span>  2. 职务名称，职务描述 信息在 job 职务表中</span></span>
<span class="line"><span>  3. job 职务表 和 emp 员工表 是 一对多的关系 emp.job_id = job.id</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>-- 方式一 ：隐式内连接</span></span>
<span class="line"><span>SELECT</span></span>
<span class="line"><span>emp.id,</span></span>
<span class="line"><span>emp.ename,</span></span>
<span class="line"><span>emp.salary,</span></span>
<span class="line"><span>job.jname,</span></span>
<span class="line"><span>job.description</span></span>
<span class="line"><span>FROM</span></span>
<span class="line"><span>emp,</span></span>
<span class="line"><span>job</span></span>
<span class="line"><span>WHERE</span></span>
<span class="line"><span>emp.job_id = job.id;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 方式二 ：显式内连接</span></span>
<span class="line"><span>SELECT</span></span>
<span class="line"><span>emp.id,</span></span>
<span class="line"><span>emp.ename,</span></span>
<span class="line"><span>emp.salary,</span></span>
<span class="line"><span>job.jname,</span></span>
<span class="line"><span>job.description</span></span>
<span class="line"><span>FROM</span></span>
<span class="line"><span>emp</span></span>
<span class="line"><span>INNER JOIN job ON emp.job_id = job.id;</span></span></code></pre></div><ol start="2"><li>查询员工编号，员工姓名，工资，职务名称，职务描述，部门名称，部门位置</li></ol><p>点击查看 sql 语句</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>分析：</span></span>
<span class="line"><span>1. 员工编号，员工姓名，工资 信息在emp 员工表中</span></span>
<span class="line"><span>2. 职务名称，职务描述 信息在 job 职务表中</span></span>
<span class="line"><span>3. job 职务表 和 emp 员工表 是 一对多的关系 emp.job_id = job.id</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 部门名称，部门位置 来自于 部门表 dept</span></span>
<span class="line"><span>5. dept 和 emp 一对多关系 dept.id = emp.dept_id</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 方式一 ：隐式内连接</span></span>
<span class="line"><span>SELECT</span></span>
<span class="line"><span>emp.id,</span></span>
<span class="line"><span>emp.ename,</span></span>
<span class="line"><span>emp.salary,</span></span>
<span class="line"><span>job.jname,</span></span>
<span class="line"><span>job.description,</span></span>
<span class="line"><span>dept.dname,</span></span>
<span class="line"><span>dept.loc</span></span>
<span class="line"><span>FROM</span></span>
<span class="line"><span>emp,</span></span>
<span class="line"><span>job,</span></span>
<span class="line"><span>dept</span></span>
<span class="line"><span>WHERE</span></span>
<span class="line"><span>emp.job_id = job.id</span></span>
<span class="line"><span>and dept.id = emp.dept_id</span></span>
<span class="line"><span>;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 方式二 ：显式内连接</span></span>
<span class="line"><span>SELECT</span></span>
<span class="line"><span>emp.id,</span></span>
<span class="line"><span>emp.ename,</span></span>
<span class="line"><span>emp.salary,</span></span>
<span class="line"><span>job.jname,</span></span>
<span class="line"><span>job.description,</span></span>
<span class="line"><span>dept.dname,</span></span>
<span class="line"><span>dept.loc</span></span>
<span class="line"><span>FROM</span></span>
<span class="line"><span>emp</span></span>
<span class="line"><span>INNER JOIN job ON emp.job_id = job.id</span></span>
<span class="line"><span>INNER JOIN dept ON dept.id = emp.dept_id</span></span></code></pre></div><ol start="3"><li>查询员工姓名，工资，工资等级</li></ol><p>点击查看 sql 语句</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 查询员工姓名，工资，工资等级</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>分析：</span></span>
<span class="line"><span>  1. 员工姓名，工资 信息在emp 员工表中</span></span>
<span class="line"><span>  2. 工资等级 信息在 salarygrade 工资等级表中</span></span>
<span class="line"><span>  3. emp.salary &gt;= salarygrade.losalary  and emp.salary &lt;= salarygrade.hisalary</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>SELECT</span></span>
<span class="line"><span>emp.ename,</span></span>
<span class="line"><span>emp.salary,</span></span>
<span class="line"><span>t2.*</span></span>
<span class="line"><span>FROM</span></span>
<span class="line"><span>emp,</span></span>
<span class="line"><span>salarygrade t2</span></span>
<span class="line"><span>WHERE</span></span>
<span class="line"><span>emp.salary &gt;= t2.losalary</span></span>
<span class="line"><span>AND emp.salary &lt;= t2.hisalary</span></span></code></pre></div><ol start="4"><li>查询员工姓名，工资，职务名称，职务描述，部门名称，部门位置，工资等级</li></ol><p>点击查看 sql 语句</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 查询员工姓名，工资，职务名称，职务描述，部门名称，部门位置，工资等级</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>分析：</span></span>
<span class="line"><span>  1. 员工编号，员工姓名，工资 信息在emp 员工表中</span></span>
<span class="line"><span>  2. 职务名称，职务描述 信息在 job 职务表中</span></span>
<span class="line"><span>  3. job 职务表 和 emp 员工表 是 一对多的关系 emp.job_id = job.id</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  4. 部门名称，部门位置 来自于 部门表 dept</span></span>
<span class="line"><span>  5. dept 和 emp 一对多关系 dept.id = emp.dept_id</span></span>
<span class="line"><span>  6. 工资等级 信息在 salarygrade 工资等级表中</span></span>
<span class="line"><span>  7. emp.salary &gt;= salarygrade.losalary  and emp.salary &lt;= salarygrade.hisalary</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>SELECT</span></span>
<span class="line"><span>emp.id,</span></span>
<span class="line"><span>emp.ename,</span></span>
<span class="line"><span>emp.salary,</span></span>
<span class="line"><span>job.jname,</span></span>
<span class="line"><span>job.description,</span></span>
<span class="line"><span>dept.dname,</span></span>
<span class="line"><span>dept.loc,</span></span>
<span class="line"><span>t2.grade</span></span>
<span class="line"><span>FROM</span></span>
<span class="line"><span>emp</span></span>
<span class="line"><span>INNER JOIN job ON emp.job_id = job.id</span></span>
<span class="line"><span>INNER JOIN dept ON dept.id = emp.dept_id</span></span>
<span class="line"><span>INNER JOIN salarygrade t2 ON emp.salary BETWEEN t2.losalary and t2.hisalary;</span></span></code></pre></div><ol start="5"><li>查询出部门编号、部门名称、部门位置、部门人数</li></ol><p>点击查看 sql 语句</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>分析：</span></span>
<span class="line"><span>  1. 部门编号、部门名称、部门位置 来自于部门 dept 表</span></span>
<span class="line"><span>  2. 部门人数: 在emp表中 按照dept_id 进行分组，然后count(*)统计数量</span></span>
<span class="line"><span>  3. 使用子查询，让部门表和分组后的表进行内连接</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>-- 根据部门id分组查询每一个部门id和员工数</span></span>
<span class="line"><span>select dept_id, count(*) from emp group by dept_id;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SELECT</span></span>
<span class="line"><span>dept.id,</span></span>
<span class="line"><span>dept.dname,</span></span>
<span class="line"><span>dept.loc,</span></span>
<span class="line"><span>t1.count</span></span>
<span class="line"><span>FROM</span></span>
<span class="line"><span>dept,</span></span>
<span class="line"><span>(</span></span>
<span class="line"><span>  SELECT</span></span>
<span class="line"><span>    dept_id,</span></span>
<span class="line"><span>    count(*) count</span></span>
<span class="line"><span>  FROM</span></span>
<span class="line"><span>    emp</span></span>
<span class="line"><span>  GROUP BY</span></span>
<span class="line"><span>    dept_id</span></span>
<span class="line"><span>) t1</span></span>
<span class="line"><span>WHERE</span></span>
<span class="line"><span>dept.id = t1.dept_id</span></span></code></pre></div><h2 id="_4-事务-🍐" tabindex="-1">4. 事务 🍐 <a class="header-anchor" href="#_4-事务-🍐" aria-label="Permalink to &quot;4\\. 事务 🍐&quot;">​</a></h2><h3 id="_4-1-概述" tabindex="-1">4.1 概述 <a class="header-anchor" href="#_4-1-概述" aria-label="Permalink to &quot;4.1 概述&quot;">​</a></h3><blockquote><p>数据库的事务（Transaction）是一种机制、一个操作序列，包含了一组数据库操作命令。</p><p>事务把所有的命令作为一个整体一起向系统提交或撤销操作请求，即这一组数据库命令<strong>要么同时成功，要么同时失败</strong>。</p><p>事务是一个不可分割的工作逻辑单元。</p></blockquote><p>这些概念不好理解，接下来举例说明，如下图有一张表</p><p><img src="`+z+'" alt="image-20210724224955876"></p><p>张三和李四账户中各有 100 块钱，现李四需要转换 500 块钱给张三，具体的转账操作为</p><ul><li>第一步：查询李四账户余额</li><li>第二步：从李四账户金额 -500</li><li>第三步：给张三账户金额 +500</li></ul><p>现在假设在转账过程中第二步完成后出现了异常第三步没有执行，就会造成李四账户金额少了 500，而张三金额并没有多 500；这样的系统是有问题的。如果解决呢？使用事务可以解决上述问题</p><p><img src="'+$+`" alt="image-20210724225537533"></p><p>从上图可以看到在转账前开启事务，如果出现了异常回滚事务，三步正常执行就提交事务，这样就可以完美解决问题。</p><h3 id="_4-2-语法" tabindex="-1">4.2 语法 <a class="header-anchor" href="#_4-2-语法" aria-label="Permalink to &quot;4.2 语法&quot;">​</a></h3><ul><li>开启事务</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>START TRANSACTION;</span></span>
<span class="line"><span>或者</span></span>
<span class="line"><span>BEGIN;</span></span></code></pre></div><ul><li><p>提交事务</p></li><li><p>回滚事务（excepiton）</p></li></ul><h3 id="_4-3-代码验证" tabindex="-1">4.3 代码验证 <a class="header-anchor" href="#_4-3-代码验证" aria-label="Permalink to &quot;4.3 代码验证&quot;">​</a></h3><h4 id="环境准备-1" tabindex="-1">环境准备 <a class="header-anchor" href="#环境准备-1" aria-label="Permalink to &quot;环境准备&quot;">​</a></h4><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>DROP TABLE IF EXISTS account;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 创建账户表</span></span>
<span class="line"><span>CREATE TABLE account(</span></span>
<span class="line"><span>  id int PRIMARY KEY auto_increment,</span></span>
<span class="line"><span>  name varchar(10),</span></span>
<span class="line"><span>  money double(10,2)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 添加数据</span></span>
<span class="line"><span>INSERT INTO account(name,money) values(&#39;张三&#39;,1000),(&#39;李四&#39;,1000);</span></span></code></pre></div><h4 id="不加事务演示问题" tabindex="-1">不加事务演示问题 <a class="header-anchor" href="#不加事务演示问题" aria-label="Permalink to &quot;不加事务演示问题&quot;">​</a></h4><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 转账操作</span></span>
<span class="line"><span>-- 1. 查询李四账户金额是否大于500</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 2. 李四账户 -500</span></span>
<span class="line"><span>UPDATE account set money = money - 500 where name = &#39;李四&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>出现异常了...  -- 此处不是注释，在整体执行时会出问题，后面的sql则不执行</span></span>
<span class="line"><span>-- 3. 张三账户 +500</span></span>
<span class="line"><span>UPDATE account set money = money + 500 where name = &#39;张三&#39;;</span></span></code></pre></div><p>整体执行结果肯定会出问题，我们查询账户表中数据，发现李四账户少了 500。</p><p><img src="`+Z+`" alt="image-20210724230250263"></p><h4 id="添加事务-sql-如下" tabindex="-1">添加事务 sql 如下： <a class="header-anchor" href="#添加事务-sql-如下" aria-label="Permalink to &quot;添加事务 sql 如下：&quot;">​</a></h4><p>点击查看代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>-- 开启事务</span></span>
<span class="line"><span>BEGIN;</span></span>
<span class="line"><span>-- 转账操作</span></span>
<span class="line"><span>-- 1. 查询李四账户金额是否大于500</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 2. 李四账户 -500</span></span>
<span class="line"><span>UPDATE account set money = money - 500 where name = &#39;李四&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>出现异常了...  -- 此处不是注释，在整体执行时会出问题，后面的sql则不执行</span></span>
<span class="line"><span>-- 3. 张三账户 +500</span></span>
<span class="line"><span>UPDATE account set money = money + 500 where name = &#39;张三&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 提交事务</span></span>
<span class="line"><span>COMMIT;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 回滚事务</span></span>
<span class="line"><span>ROLLBACK;</span></span></code></pre></div><p>上面 sql 中的执行成功进选择执行提交事务，而出现问题则执行回滚事务的语句。以后我们肯定不可能这样操作，而是在 java 中进行操作，在 java 中可以抓取异常，没出现异常提交事务，出现异常回滚事务。</p><h3 id="_4-4-事务的四大特征-acid-🍐-❤️" tabindex="-1">4.4 事务的四大特征(ACID) 🍐 ❤️ <a class="header-anchor" href="#_4-4-事务的四大特征-acid-🍐-❤️" aria-label="Permalink to &quot;4.4 事务的四大特征(ACID) 🍐 ❤️&quot;">​</a></h3><ul><li><p>原子性（Atomicity）: 事务是不可分割的最小操作单位，要么同时成功，要么同时失败</p></li><li><p>一致性（Consistency） :事务完成时，必须使所有的数据都保持一致状态</p></li><li><p>隔离性（Isolation） :多个事务之间，操作的可见性</p></li><li><p>持久性（Durability） :事务一旦提交或回滚，它对数据库中的数据的改变就是永久的</p></li></ul><blockquote><p>说明：</p></blockquote><p>mysql 中事务是自动提交的。 也就是说我们不添加事务执行 sql 语句，语句执行完毕会自动的提交事务。 可以通过下面语句查询默认提交方式：</p><p>查询到的结果是 1 则表示自动提交，结果是 0 表示手动提交。当然也可以通过下面语句修改提交方式</p>`,372),na=[sa];function pa(ea,la,ia,ta,ca,oa){return p(),n("div",null,na)}const ha=s(aa,[["render",pa]]);export{ra as __pageData,ha as default};
