import{_ as e,c as l,o as i,a4 as t}from"./chunks/framework.-JfgED0h.js";const o="/docs/assets/image-20230107140057729.rsWlaE1H.png",c="/docs/assets/image-20230107140130199.BnZuwtbr.png",s="/docs/assets/image-20230107140221425.CDOiq-Fq.png",r="/docs/assets/image-20230107140618199.DMmWb-FR.png",g="/docs/assets/image-20230107140706301.JC6VGpnk.png",n="/docs/assets/image-20230107140726701.BH3q0K5Z.png",d="/docs/assets/image-20230107141652636.B47Er_cE.png",u="/docs/assets/image-20230107143339917.Dd4gmbgd.png",m="/docs/assets/image-20230107144312892.D0G0b_tp.png",a="/docs/assets/image-20230107143720961.Bp94O9tZ.png",h="/docs/assets/image-20230108142359592.adnQKmh2.png",v="/docs/assets/image-20230108142555310.CSyBwyx7.png",b="/docs/assets/image-20230108142707351.CNW5wOc8.png",f="/docs/assets/image-20230108184912155.AQ08Tbht.png",q="/docs/assets/image-20230108185432083.DUGw-fMF.png",y="/docs/assets/image-20230112152543953.BAKWIEX0.png",A="/docs/assets/image-20230109154025262.BdlTIEIE.png",_="/docs/assets/image-20230109154344393.Dg3U9DaH.png",k="/docs/assets/image-20230109162420479.kyB5JU5D.png",P="/docs/assets/image-20230109170002879.-XF9lodO.png",S="/docs/assets/image-20230112154547523.BlTNChPz.png",C="/docs/assets/image-20230112154605206.CwUQzMN3.png",D="/docs/assets/image-20230112154627546.JTOmaZS0.png",M="/docs/assets/image-20230112154530101.Bs6JTpAE.png",O="/docs/assets/image-20230112155813944.Dgz0-Mt3.png",I="/docs/assets/image-20230110143404792.DxwNIgyg.png",T="/docs/assets/image-20230110143611669.CBfpCNuq.png",x="/docs/assets/image-20230110143815479.C87CSTYQ.png",L="/docs/assets/image-20230112160708474.g_R66mqa.png",w="/docs/assets/image-20230112160852883.Cue7W9Py.png",j="/docs/assets/image-20230112161131937.3kfIEwEf.png",E="/docs/assets/image-20230112161335186.DRBKxEh4.png",B="/docs/assets/image-20230112161657667.CruzvP7a.png",R="/docs/assets/image-20230112161821401.DxILVNpl.png",N="/docs/assets/image-20220513203556476.Cf1zcAMm.png",p="/docs/assets/image-20230110165514461.MFWYT3I8.png",J="/docs/assets/image-20230110165806934.BHvq0MfP.png",U="/docs/assets/image-20230110171006874.Cit9Boj6.png",F="/docs/assets/image-20230110211208549.CM5boLaj.png",Q="/docs/assets/image-20230110212523787.CNOOrVtR.png",V="/docs/assets/image-20230110231629140.D2jqGiR2.png",W="/docs/assets/image-20230110224447047.Dwl9SIv-.png",H="/docs/assets/image-20230111001114301.oupnxzRk.png",z="/docs/assets/image-20230111001230731.DxRfmEAw.png",ls=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"backend/spring-boot/事务AOP.md","filePath":"backend/spring-boot/事务AOP.md"}'),G={name:"backend/spring-boot/事务AOP.md"},K=t(`<h2 id="事务-aop" tabindex="-1">事务&amp;AOP <a class="header-anchor" href="#事务-aop" aria-label="Permalink to &quot;事务&amp;AOP&quot;">​</a></h2><h2 id="今日目标" tabindex="-1">今日目标 <a class="header-anchor" href="#今日目标" aria-label="Permalink to &quot;今日目标&quot;">​</a></h2><p>目标</p><ul><li>能够掌握 Spring 事务配置 ❤️ 🍐</li><li>能够理解 AOP 的作用 🍐 ❤️</li><li>能够完成 AOP 的入门案例 ✏️</li><li>能够理解 AOP 的工作流程 🍐</li><li>能够说出 AOP 的五种通知类型 🍐</li></ul><h2 id="_1-事务管理" tabindex="-1">1. 事务管理 <a class="header-anchor" href="#_1-事务管理" aria-label="Permalink to &quot;1\\. 事务管理&quot;">​</a></h2><h3 id="_1-1-事务回顾" tabindex="-1">1.1 事务回顾 <a class="header-anchor" href="#_1-1-事务回顾" aria-label="Permalink to &quot;1.1 事务回顾&quot;">​</a></h3><p>事务</p><p><strong>事务</strong>是一组操作的集合，它是一个不可分割的工作单位。事务会把所有的操作作为一个整体，一起向数据库提交或者是撤销操作请求。所以这组操作<strong>要么同时成功，要么同时失败</strong>。</p><p><strong>事务的操作主要有三步：</strong></p><ol><li>开启事务（一组操作开始前，开启事务）：start transaction / begin ;</li><li>提交事务（这组操作全部成功后，提交事务）：commit ;</li><li>回滚事务（中间任何一个操作出现异常，回滚事务）：rollback ;</li></ol><h3 id="_1-2-spring事务管理-🍐-❤️" tabindex="-1">1.2 Spring事务管理 🍐 ❤️ <a class="header-anchor" href="#_1-2-spring事务管理-🍐-❤️" aria-label="Permalink to &quot;1.2 Spring事务管理 🍐 ❤️&quot;">​</a></h3><p>目标🎯 ：<strong>Spring下进行事务管理</strong></p><p>问题</p><ol><li><strong>@Transactional</strong>注解的作用是什么？可以写在什么位置？</li></ol><p>点击查看</p><p><strong>@Transactional作用</strong>：就是在<strong>当前这个方法</strong>执行开始之前来开启事务，<strong>方法执行完毕之后提交事务</strong>。如果在这个方法执行的过程当中出现了<strong>异常</strong>，就会进行事务的<strong>回滚操作</strong>。</p><p><strong>@Transactional注解</strong>：我们一般会在<strong>业务层(service包)<strong>当中来控制事务，因为在业务层当中，一个业务功能可能会包含</strong>多个数据访问的操作(多条sql语句)</strong>。在业务层来控制事务，我们就可以将多个数据访问操作控制在一个事务范围内。</p><p><strong>@Transactional注解书写位置：</strong></p><ul><li>方法 <ul><li><strong>当前方法</strong>交给spring进行事务管理</li></ul></li><li>类 <ul><li><strong>当前类中所有的方法</strong>都交由spring进行事务管理</li></ul></li><li>接口 <ul><li>接口下<strong>所有的实现类</strong>当中所有的方法都交给spring 进行事务管理</li></ul></li></ul><h4 id="_1-2-1-事物案例-准备代码" tabindex="-1">1.2.1 事物案例_准备代码 <a class="header-anchor" href="#_1-2-1-事物案例-准备代码" aria-label="Permalink to &quot;1.2.1 事物案例\\_准备代码&quot;">​</a></h4><p>目标🎯 ：<strong>事务管理案例：解散部门 （解散部门就是删除部门）</strong></p><p>需求</p><p><strong>需求</strong>：当部门解散了不仅需要把部门信息删除了，还需要把该部门下的员工数据也删除了。</p><p><strong>步骤：</strong></p><ul><li>根据ID删除部门数据</li><li>根据部门ID删除该部门下的员工</li></ul><p><strong>代码实现：</strong> 👇 👇</p><ol><li>DeptServiceImpl</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class DeptServiceImpl implements DeptService {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private DeptMapper deptMapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private EmpMapper empMapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //根据部门id，删除部门信息及部门下的所有员工</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void delete(Integer id){</span></span>
<span class="line"><span>        //根据部门id删除部门信息</span></span>
<span class="line"><span>        deptMapper.deleteById(id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //删除部门下的所有员工信息</span></span>
<span class="line"><span>        empMapper.deleteByDeptId(id);   </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="2"><li>DeptMapper</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Mapper</span></span>
<span class="line"><span>public interface DeptMapper {</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 根据id删除部门信息</span></span>
<span class="line"><span>     * @param id   部门id</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Delete(&quot;delete from dept where id = #{id}&quot;)</span></span>
<span class="line"><span>    void deleteById(Integer id);</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="3"><li>EmpMapper</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Mapper</span></span>
<span class="line"><span>public interface EmpMapper {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //根据部门id删除部门下所有员工</span></span>
<span class="line"><span>    @Delete(&quot;delete from emp where dept_id=#{deptId}&quot;)</span></span>
<span class="line"><span>    public int deleteByDeptId(Integer deptId);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重启SpringBoot服务，使用postman测试部门删除：</p><p><img src="`+o+'" alt="image-20230107140057729"></p><p>代码正常情况下，dept表和Em表中的数据已删除</p><p><img src="'+c+'" alt="image-20230107140130199"></p><p><img src="'+s+`" alt="image-20230107140221425"></p><p><strong>修改DeptServiceImpl类中代码，添加可能出现异常的代码：</strong> ⚠️</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class DeptServiceImpl implements DeptService {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private DeptMapper deptMapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private EmpMapper empMapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //根据部门id，删除部门信息及部门下的所有员工</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void delete(Integer id){</span></span>
<span class="line"><span>        //根据部门id删除部门信息</span></span>
<span class="line"><span>        deptMapper.deleteById(id);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        //模拟：异常发生</span></span>
<span class="line"><span>        int i = 1/0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //删除部门下的所有员工信息</span></span>
<span class="line"><span>        empMapper.deleteByDeptId(id);   </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重启SpringBoot服务，使用postman测试部门删除：</p><p><img src="`+r+'" alt="image-20230107140618199"></p><p><img src="'+g+'" alt="image-20230107140706301"></p><p>查看数据库表：</p><ul><li>删除了2号部门</li></ul><p><img src="'+n+'" alt="image-20230107140726701"></p><ul><li>2号部门下的员工数据没有删除</li></ul><p><img src="'+s+'" alt="image-20230107140221425"></p><p><strong>以上程序出现的问题：即使程序运行抛出了异常，部门依然删除了，但是部门下的员工却没有删除，造成了数据的不一致。</strong></p><p>点击查看原因分析</p><h4 id="_1-2-2-原因分析" tabindex="-1">1.2.2 原因分析 <a class="header-anchor" href="#_1-2-2-原因分析" aria-label="Permalink to &quot;1.2.2 原因分析&quot;">​</a></h4><p>原因：</p><ul><li>先执行根据id删除部门的操作，这步执行完毕，数据库表 dept 中的数据就已经删除了。</li><li>执行 1/0 操作，抛出异常</li><li>抛出异常之前，下面所有的代码都不会执行了，根据部门ID删除该部门下的员工，这个操作也不会执行 。</li></ul><p>此时就出现问题了，部门删除了，部门下的员工还在，业务操作前后数据不一致。</p><p>而要想保证操作前后，数据的一致性，就需要让解散部门中涉及到的两个业务操作，要么全部成功，要么全部失败 。 那我们如何，让这两个操作要么全部成功，要么全部失败呢 ？</p><p>那就可以通过事务来实现，因为一个事务中的多个业务操作，要么全部成功，要么全部失败。</p><p>此时，我们就需要在delete删除业务功能中添加事务。</p><p><img src="'+d+`" alt="image-20230107141652636"></p><p>在方法运行之前，开启事务，如果方法成功执行，就提交事务，如果方法执行的过程当中出现异常了，就回滚事务。</p><p>Spring中开启事物管理</p><p><strong>@Transactional作用</strong>：就是在当前这个方法执行开始之前来开启事务，方法执行完毕之后提交事务。<strong>如果在这个方法执行的过程当中出现了异常，就会进行事务的回滚操作。</strong></p><p><strong>@Transactional注解</strong>：我们一般会在业务层当中来控制事务 ，因为在业务层当中，一个业务功能可能会包含多个数据访问的操作 。在业务层来控制事务，我们就可以将多个数据访问操作控制在一个事务范围内。</p><p><strong>@Transactional注解书写位置:</strong> 👇 👇</p><ul><li><strong>方法</strong><ul><li><strong>当前方法</strong>交给spring进行事务管理</li></ul></li><li><strong>类</strong><ul><li>当前类中<strong>所有的方法都交由spring进行事务管理</strong></li></ul></li><li><strong>接口</strong><ul><li>接口下<strong>所有的实现类当中所有的方法都</strong>交给spring 进行事务管理</li></ul></li></ul><p>点击查看开启事物的代码</p><p>接下来，我们就可以在业务方法delete上加上 <strong>@Transactional</strong> 来控制事务 。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class DeptServiceImpl implements DeptService {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private DeptMapper deptMapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private EmpMapper empMapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    @Transactional  //当前方法添加了事务管理</span></span>
<span class="line"><span>    public void delete(Integer id){</span></span>
<span class="line"><span>        //根据部门id删除部门信息</span></span>
<span class="line"><span>        deptMapper.deleteById(id);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        //模拟：异常发生</span></span>
<span class="line"><span>        int i = 1/0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //删除部门下的所有员工信息</span></span>
<span class="line"><span>        empMapper.deleteByDeptId(id);   </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在业务功能上添加@Transactional注解进行事务管理后，我们重启SpringBoot服务，使用postman测试：</p><p><img src="`+u+'" alt="image-20230107143339917"></p><p>添加Spring事务管理后，由于服务端程序引发了异常，所以事务进行回滚。</p><p><img src="'+m+'" alt="image-20230107144312892"></p><p><img src="'+a+`" alt="image-20230107143720961"></p><p>技巧</p><ol><li>在spring框架当中已经把事务控制的代码已经封装好了，并不需要开发者手动实现。</li><li>使用spring框架，只需要通过一个简单的注解 <strong>@Transactional</strong> 就搞定了。</li><li>可以在application.yml配置文件中开启事务管理日志，这样就可以在控制看到和<strong>事务相关的日志信息</strong>了</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>#spring事务管理日志</span></span>
<span class="line"><span>logging:</span></span>
<span class="line"><span>  level:</span></span>
<span class="line"><span>    org.springframework.jdbc.support.JdbcTransactionManager: debug</span></span></code></pre></div><h3 id="_1-3-事务进阶-🍐-🚀" tabindex="-1">1.3 事务进阶 🍐 🚀 <a class="header-anchor" href="#_1-3-事务进阶-🍐-🚀" aria-label="Permalink to &quot;1.3 事务进阶 🍐 🚀&quot;">​</a></h3><p>目标🎯 ：<strong>@Transactional事务管理注解的使用细节</strong></p><p>@Transactional注解 当中的两个常见的属性：</p><ol><li>异常回滚的属性：rollbackFor</li><li>事务传播行为：propagation</li></ol><h4 id="异常回滚的属性-rollbackfor-👇" tabindex="-1">异常回滚的属性：rollbackFor 👇 <a class="header-anchor" href="#异常回滚的属性-rollbackfor-👇" aria-label="Permalink to &quot;异常回滚的属性：rollbackFor 👇&quot;">​</a></h4><p>所有异常都会触发回滚吗？rollbackFor属性的作用是什么？</p><ul><li>在Spring的事务管理中，<strong>默认只有运行时异常 RuntimeException</strong>才会回滚。</li><li>如果<strong>还需要回滚指定类型的异常</strong>，可以通过rollbackFor属性来指定。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    @Transactional(rollbackFor=Exception.class)</span></span>
<span class="line"><span>    public void delete(Integer id){</span></span>
<span class="line"><span>        // 省略代码</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>点击查看rollbackFor属性测试代码</p><p>下面我们在做一个测试，我们修改业务功能代码，<strong>在模拟异常的位置上直接抛出Exception异常（编译时异常）</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Transactional</span></span>
<span class="line"><span>public void delete(Integer id) throws Exception {</span></span>
<span class="line"><span>        //根据部门id删除部门信息</span></span>
<span class="line"><span>        deptMapper.deleteById(id);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        //模拟：异常发生</span></span>
<span class="line"><span>        if(true){</span></span>
<span class="line"><span>            throw new Exception(&quot;出现异常了\`\`\`&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //删除部门下的所有员工信息</span></span>
<span class="line"><span>        empMapper.deleteByDeptId(id);   </span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>重新启动服务后测试：</strong> 抛出异常之后事务会不会回滚???</p><blockquote><p>现有表中数据：</p><p><img src="`+n+'" alt="image-20230107140726701"></p><p>image-20230107140726701</p></blockquote><p>使用postman测试，删除5号部门</p><p><img src="'+h+'" alt="image-20230108142359592"></p><p>发生了Exception异常，但事务依然提交了</p><p><img src="'+v+'" alt="image-20230108142555310"></p><blockquote><p>dept表中数据：</p><p><img src="'+b+`" alt="image-20230108142707351"></p><p>image-20230108142707351</p></blockquote><p>通过以上测试可以得出一个结论：👇 👇</p><p>默认情况下，只有出现RuntimeException(运行时异常)才会回滚事务。 👈 🍐</p><p>假如我们想让所有的异常都回滚，需要来配置@Transactional注解当中的rollbackFor属性，通过rollbackFor这个属性可以指定出现何种异常类型回滚事务。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class DeptServiceImpl implements DeptService {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private DeptMapper deptMapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private EmpMapper empMapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    @Transactional(rollbackFor=Exception.class)</span></span>
<span class="line"><span>    public void delete(Integer id){</span></span>
<span class="line"><span>        //根据部门id删除部门信息</span></span>
<span class="line"><span>        deptMapper.deleteById(id);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        //模拟：异常发生</span></span>
<span class="line"><span>        int num = id/0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //删除部门下的所有员工信息</span></span>
<span class="line"><span>        empMapper.deleteByDeptId(id);   </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>接下来我们重新启动服务，测试删除部门的操作：</p><p><img src="`+f+'" alt="image-20230108184912155"></p><p>控制台日志：执行了删除3号部门的操作， 因为异常又进行了事务回滚</p><p><img src="'+q+'" alt="image-20230108185432083"></p><p>数据表：3号部门没有删除</p><p><img src="'+a+'" alt="image-20230107143720961"></p><h4 id="propagation" tabindex="-1">propagation <a class="header-anchor" href="#propagation" aria-label="Permalink to &quot;propagation&quot;">​</a></h4><p>问题</p><ol><li>什么是事务的传播行为呢？</li><li>propagation属性的作用是什么</li></ol><p>点击查看</p><p><strong>事务的传播行为</strong>就是<strong>A事务</strong>方法被<strong>B事务</strong>方法调用时，<strong>A事务</strong>方法应该如何进行事务控制。</p><p><strong>属性propagation</strong>: 用来配置事务的传播行为的(常见的传播行为)</p><ul><li><strong>REQUIRED</strong>常用 【默认值】需要事务，有则加入，无则创建新事务</li><li><strong>REQUIRES_NEW</strong> 常用 需要新事务，无论有无，总是创建新事务</li></ul><h5 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h5><p>例如：两个事务方法，一个A方法，一个B方法。在这两个方法上都添加了@Transactional注解，就代表这两个方法都具有事务，而在A方法当中又去调用了B方法。</p><p><img src="'+y+`" alt="image-20230112152543953"></p><p>事务的传播行为</p><p><strong>所谓事务的传播行为</strong>，指的就是在A方法运行的时候，首先会开启一个事务，在A方法当中又调用了B方法， B方法自身也具有事务，那么B方法在运行的时候，到底是加入到A方法的事务当中来，还是B方法在运行的时候新建一个事务？这个就涉及到了<strong>事务的传播行为</strong>。👇</p><p><strong>常见的事务传播行为:</strong></p><table><thead><tr><th><strong>属性值</strong></th><th><strong>含义</strong></th></tr></thead><tbody><tr><td><strong>REQUIRED</strong>常用</td><td>【默认值】需要事务，有则加入，无则创建新事务</td></tr><tr><td><strong>REQUIRES_NEW</strong> 常用</td><td>需要新事务，无论有无，总是创建新事务</td></tr><tr><td>SUPPORTS</td><td>支持事务，有则加入，无则在无事务状态中运行</td></tr><tr><td>NOT_SUPPORTED</td><td>不支持事务，在无事务状态下运行,如果当前存在已有事务,则挂起当前事务</td></tr><tr><td>MANDATORY</td><td>必须有事务，否则抛异常</td></tr><tr><td>NEVER</td><td>必须没事务，否则抛异常</td></tr><tr><td>…</td><td></td></tr></tbody></table><p><strong>事物传播行为案例</strong> 👇👇 ✏️</p><p>目标🎯 ：<strong>通过代码演示事务传播行为</strong></p><p>需求和步骤</p><p><strong>需求</strong>：解散部门时需要记录操作日志</p><p>由于解散部门是一个非常重要而且非常危险的操作，所以在业务当中要求每一次执行解散部门的操作都需要留下痕迹，就是要记录操作日志。而且还要求无论是执行成功了还是执行失败了，都需要留下痕迹。</p><p><strong>步骤：</strong></p><ol><li>执行解散部门的业务：先删除部门，再删除部门下的员工（前面已实现）</li><li>记录解散部门的日志，到日志表（未实现）</li></ol><p><strong>准备工作：</strong></p><ol><li>创建数据库表 dept_log 日志表：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>create table dept_log(</span></span>
<span class="line"><span>   id int auto_increment comment &#39;主键ID&#39; primary key,</span></span>
<span class="line"><span>    create_time datetime null comment &#39;操作时间&#39;,</span></span>
<span class="line"><span>    description varchar(300) null comment &#39;操作描述&#39;</span></span>
<span class="line"><span>)comment &#39;部门操作日志表&#39;;</span></span></code></pre></div><ol start="2"><li>引入资料中提供的实体类：DeptLog</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Data</span></span>
<span class="line"><span>@NoArgsConstructor</span></span>
<span class="line"><span>@AllArgsConstructor</span></span>
<span class="line"><span>public class DeptLog {</span></span>
<span class="line"><span>    private Integer id;</span></span>
<span class="line"><span>    private LocalDateTime createTime;</span></span>
<span class="line"><span>    private String description;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="3"><li>引入资料中提供的Mapper接口：DeptLogMapper</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Mapper</span></span>
<span class="line"><span>public interface DeptLogMapper {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Insert(&quot;insert into dept_log(create_time,description) values(#{createTime},#{description})&quot;)</span></span>
<span class="line"><span>    void insert(DeptLog log);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="4"><li>引入资料中提供的业务接口：DeptLogService</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public interface DeptLogService {</span></span>
<span class="line"><span>    void insert(DeptLog deptLog);</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="5"><li>引入资料中提供的业务实现类：DeptLogServiceImpl</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Service</span></span>
<span class="line"><span>public class DeptLogServiceImpl implements DeptLogService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private DeptLogMapper deptLogMapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Transactional //事务传播行为：有事务就加入、没有事务就新建事务</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void insert(DeptLog deptLog) {</span></span>
<span class="line"><span>        deptLogMapper.insert(deptLog);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>代码实现:</strong></p><p>业务实现类：DeptServiceImpl</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>//@Transactional //当前业务实现类中的所有的方法，都添加了spring事务管理机制</span></span>
<span class="line"><span>public class DeptServiceImpl implements DeptService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private DeptMapper deptMapper;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private EmpMapper empMapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private DeptLogService deptLogService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //根据部门id，删除部门信息及部门下的所有员工</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    @Log</span></span>
<span class="line"><span>    @Transactional(rollbackFor = Exception.class) </span></span>
<span class="line"><span>    public void delete(Integer id) throws Exception {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            //根据部门id删除部门信息</span></span>
<span class="line"><span>            deptMapper.deleteById(id);</span></span>
<span class="line"><span>            //模拟：异常</span></span>
<span class="line"><span>            if(true){</span></span>
<span class="line"><span>                throw new Exception(&quot;出现异常了\`\`\`&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            //删除部门下的所有员工信息</span></span>
<span class="line"><span>            empMapper.deleteByDeptId(id);</span></span>
<span class="line"><span>        }finally {</span></span>
<span class="line"><span>            //不论是否有异常，最终都要执行的代码：记录日志</span></span>
<span class="line"><span>            DeptLog deptLog = new DeptLog();</span></span>
<span class="line"><span>            deptLog.setCreateTime(LocalDateTime.now());</span></span>
<span class="line"><span>            deptLog.setDescription(&quot;执行了解散部门的操作，此时解散的是&quot;+id+&quot;号部门&quot;);</span></span>
<span class="line"><span>            //调用其他业务类中的方法</span></span>
<span class="line"><span>            deptLogService.insert(deptLog);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //省略其他代码...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>测试:</strong></p><p>重新启动SpringBoot服务，测试删除3号部门后会发生什么？</p><ul><li>执行了删除3号部门操作</li><li>执行了插入部门日志操作</li><li>程序发生Exception异常</li><li>执行事务回滚（删除、插入操作因为在一个事务范围内，两个操作都会被回滚）</li></ul><p><img src="`+A+'" alt="image-20230109154025262"></p><p>然后在dept_log表中没有记录日志数据</p><p><img src="'+_+'" alt="image-20230109154344393"></p><p><strong>原因分析:</strong></p><p>接下来我们就需要来分析一下具体是什么原因导致的日志没有成功的记录。</p><ul><li><p>在执行delete操作时开启了一个事务</p></li><li><p>当执行insert操作时，insert设置的事务传播行是默认值REQUIRED，表示有事务就加入，没有则新建事务</p></li><li><p>此时：delete和insert操作使用了同一个事务，同一个事务中的多个操作，要么同时成功，要么同时失败，所以当异常发生时进行事务回滚，就会回滚delete和insert操作</p></li></ul><p><img src="'+k+`" alt="image-20230109162420479"></p><p><strong>解决方案：</strong> 👇 👇</p><p>在DeptLogServiceImpl类中insert方法上，添加@Transactional(propagation = Propagation.REQUIRES_NEW)</p><blockquote><p>Propagation.REQUIRES_NEW ：不论是否有事务，都创建新事务 ，运行在一个独立的事务中。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Service</span></span>
<span class="line"><span>public class DeptLogServiceImpl implements DeptLogService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private DeptLogMapper deptLogMapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Transactional(propagation = Propagation.REQUIRES_NEW)//事务传播行为：不论是否有事务，都新建事务</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void insert(DeptLog deptLog) {</span></span>
<span class="line"><span>        deptLogMapper.insert(deptLog);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重启SpringBoot服务，再次测试删除3号部门：</p><p><img src="`+P+'" alt="image-20230109170002879"></p><ol><li>此时，DeptServiceImpl中的delete方法运行时，会开启一个事务。</li><li>当调用 deptLogService.insert(deptLog) 时，也会创建一个新的事务，那此时，当insert方法运行完毕之后，事务就已经提交了。</li><li>即使外部的事务出现异常，内部已经提交的事务，也不会回滚了，<strong>因为是两个独立的事务</strong>。</li></ol><p>事务的传播行为</p><ul><li><p>REQUIRED ：大部分情况下都是用该传播行为即可。</p></li><li><p>REQUIRES_NEW 实用 ：当我们不希望事务之间相互影响时，可以使用该传播行为。比如：下订单前需要记录日志，不论订单保存成功与否，都需要保证日志记录能够记录成功。</p></li></ul><p>作业</p><ol><li>🚩 能够流畅的说出事务回滚的注意事项以及常用的事务传播行为的特点，</li><li>🚩 能够写出日志案例的思路流程并完成<code>解散部门时需要记录操作日志案例</code>。</li></ol><h2 id="_2-aop基础" tabindex="-1">2. AOP基础 <a class="header-anchor" href="#_2-aop基础" aria-label="Permalink to &quot;2\\. AOP基础&quot;">​</a></h2><p>目标🎯 ：<strong>学习AOP的基础，理解Aop的作用和优势以及AOP快速入门</strong></p><h3 id="_2-1-aop概述和快速入门" tabindex="-1">2.1 AOP概述和快速入门 <a class="header-anchor" href="#_2-1-aop概述和快速入门" aria-label="Permalink to &quot;2.1 AOP概述和快速入门&quot;">​</a></h3><p>AOP的定义</p><ul><li>AOP英文全称：Aspect Oriented Programming（<strong>面向切面编程、面向方面编程</strong>），其实说白了，<strong>面向切面编程就是面向特定方法编程</strong>。</li></ul><p>那什么又是面向方法编程呢， 为什么又需要面向方法编程呢？ 来我们举个例子做一个说明.</p><p>点击查看例子理解例子的场景和AOP的优势</p><p>比如，我们这里有一个项目，项目中开发了很多的业务功能。</p><p><img src="'+S+'" alt="image-20230112154547523"></p><p>然而有一些业务功能执行效率比较低，执行耗时较长，我们需要针对于这些业务方法进行优化。 那首先第一步就需要定位出执行耗时比较长的业务方法，再针对于业务方法再来进行优化。</p><p>此时我们就需要统计当前这个项目当中每一个业务方法的执行耗时。那么统计每一个业务方法的执行耗时该怎么实现？</p><p>可能多数人首先想到的就是在每一个业务方法运行之前，记录这个方法运行的开始时间。在这个方法运行完毕之后，再来记录这个方法运行的结束时间。拿结束时间减去开始时间，不就是这个方法的执行耗时吗？</p><p><img src="'+C+'" alt="image-20230112154605206"></p><p>以上分析的实现方式是可以解决需求问题的。但是对于一个项目来讲，里面会包含很多的业务模块，每个业务模块又包含很多增删改查的方法，如果我们要在每一个模块下的业务方法中，添加记录开始时间、结束时间、计算执行耗时的代码，就会让程序员的工作变得非常繁琐。</p><p><img src="'+D+'" alt="image-20230112154627546"></p><p>而AOP面向方法编程，就可以做到在不改动这些原始方法的基础上，针对特定的方法进行功能的增强。</p><blockquote><p>AOP的作用：在程序运行期间在不修改源代码的基础上对已有方法进行增强（无侵入性: 解耦）</p></blockquote><p>我们要想完成统计各个业务方法执行耗时的需求，我们只需要定义一个模板方法，将记录方法执行耗时这一部分公共的逻辑代码，定义在模板方法当中，在这个方法开始运行之前，来记录这个方法运行的开始时间，在方法结束运行的时候，再来记录方法运行的结束时间，中间就来运行原始的业务方法。</p><p><img src="'+M+'" alt="image-20230112154530101"></p><p>而中间运行的原始业务方法，可能是其中的一个业务方法，比如：我们只想通过 部门管理的 list 方法的执行耗时，那就只有这一个方法是原始业务方法。 而如果，我们是先想统计所有部门管理的业务方法执行耗时，那此时，所有的部门管理的业务方法都是 原始业务方法。 <strong>那面向这样的指定的一个或多个方法进行编程，我们就称之为 面向切面编程。</strong></p><p>那此时，当我们再调用部门管理的 list 业务方法时啊，并不会直接执行 list 方法的逻辑，而是会执行我们所定义的 模板方法 ， 然后再模板方法中：</p><ul><li>记录方法运行开始时间</li><li>运行原始的业务方法（那此时原始的业务方法，就是 list 方法）</li><li>记录方法运行结束时间，计算方法执行耗时</li></ul><p><img src="'+O+`" alt="image-20230112155813944"></p><p>不论，我们运行的是那个业务方法，最后其实运行的就是我们定义的模板方法，而在模板方法中，就完成了原始方法执行耗时的统计操作 。(那这样呢，我们就通过一个模板方法就完成了指定的一个或多个业务方法执行耗时的统计)</p><p>而大家会发现，这个流程，我们是不是似曾相识啊？</p><p>对了，就是和我们之前所学习的动态代理技术是非常类似的。 我们所说的模板方法，其实就是代理对象中所定义的方法，那代理对象中的方法以及根据对应的业务需要， 完成了对应的业务功能，当运行原始业务方法时，就会运行代理对象中的方法，从而实现统计业务方法执行耗时的操作。</p><p>其实，AOP面向切面编程和OOP面向对象编程一样，它们都仅仅是一种编程思想，而动态代理技术是这种思想最主流的实现方式。而Spring的AOP是Spring框架的高级技术，旨在管理bean对象的过程中底层使用动态代理机制，对特定的方法进行编程(功能增强)。</p><p>AOP的作用和优势</p><p><strong>AOP的作用</strong>：在程序运行期间在<strong>不修改源代码</strong>的基础上对已有方法进行<strong>增强</strong>（无侵入性</p><p><strong>AOP的优势：</strong></p><ol><li>减少重复代码</li><li>提高开发效率</li><li>维护方便</li></ol><p><strong>AOP快速入门</strong></p><p>需求和步骤</p><p><strong>需求</strong>： 统计各个业务层方法执行耗时（结束时间-开始时间）。</p><p><strong>实现步骤：</strong></p><ol><li>导入依赖：在pom.xml中导入AOP的依赖</li><li>编写AOP程序：创建切面类，针对于特定方法根据业务需要进行编程</li></ol><blockquote><p>为演示方便，可以自建新项目或导入提供的<code>springboot-aop-quickstart</code>项目工程</p></blockquote><p><strong>pom.xml</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-boot-starter-aop&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><p><strong>AOP程序：TimeAspect</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>@Aspect //当前类为切面类</span></span>
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>public class TimeAspect {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Around(&quot;execution(* com.itheima.service.*.*(..))&quot;) </span></span>
<span class="line"><span>    public Object recordTime(ProceedingJoinPoint pjp) throws Throwable {</span></span>
<span class="line"><span>        //记录方法执行开始时间</span></span>
<span class="line"><span>        long begin = System.currentTimeMillis();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //执行原始方法</span></span>
<span class="line"><span>        Object result = pjp.proceed();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //记录方法执行结束时间</span></span>
<span class="line"><span>        long end = System.currentTimeMillis();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //计算方法执行耗时</span></span>
<span class="line"><span>        log.info(pjp.getSignature()+&quot;执行耗时: {}毫秒&quot;,end-begin);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return result;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重新启动SpringBoot服务测试程序：</p><ul><li>查询3号部门信息</li></ul><p><img src="`+I+'" alt="image-20230110143404792"></p><p><img src="'+T+'" alt="image-20230110143611669"></p><blockquote><p>我们可以再测试下：查询所有部门信息（同样执行AOP程序）</p><p><img src="'+x+'" alt="image-20230110143815479"></p><p>image-20230110143815479</p></blockquote><p>结合上述案例，AOP常见的应用场景如下：</p><ul><li>业务方法执行耗时的统计(已完成)</li><li>记录系统的操作日志</li><li>权限控制</li><li><strong>事务管理</strong>：我们前面所讲解的Spring事务管理，底层其实也是通过AOP来实现的，只要添加<code>@Transactional</code>注解之后，AOP程序自动会在原始方法运行前先来开启事务，<strong>在原始方法运行完毕之后提交或回滚事务</strong></li></ul><h3 id="_2-2-aop核心概念-🍐" tabindex="-1">2.2 AOP核心概念 🍐 <a class="header-anchor" href="#_2-2-aop核心概念-🍐" aria-label="Permalink to &quot;2.2 AOP核心概念 🍐&quot;">​</a></h3><p>AOP 核心概念</p><p><strong>1. 连接点：JoinPoint</strong>，可以被AOP控制的方法（暗含方法执行时的相关信息）</p><p>连接点指的是可以被aop控制的方法。例如：入门程序当中所有的业务方法都是可以被aop控制的方法。</p><p><img src="'+L+'" alt="image-20230112160708474"></p><p>在SpringAOP提供的JoinPoint当中，封装了连接点方法在执行时的相关信息。（后面会有具体的讲解）</p><p><strong>2. 通知：Advice</strong>，指哪些重复的逻辑，也就是共性功能（最终体现为一个方法）</p><p>在入门程序中是需要统计各个业务方法的执行耗时的，此时我们就需要在这些业务方法运行开始之前，先记录这个方法运行的开始时间，在每一个业务方法运行结束的时候，再来记录这个方法运行的结束时间。</p><p>但是在AOP面向切面编程当中，我们只需要将这部分重复的代码逻辑抽取出来单独定义。抽取出来的这一部分重复的逻辑，也就是共性的功能。</p><p><img src="'+w+'" alt="image-20230112160852883"></p><p><strong>3. 切入点：PointCut</strong>，匹配连接点的条件，通知仅会在切入点方法执行时被应用</p><p>在通知当中，我们所定义的共性功能到底要应用在哪些方法上？此时就涉及到了切入点pointcut概念。切入点指的是匹配连接点的条件。通知仅会在切入点方法运行时才会被应用。</p><p>在aop的开发当中，我们通常会通过一个切入点表达式来描述切入点(后面会有详解)。</p><p><img src="'+j+'" alt="image-20230112161131937"></p><p>假如：切入点表达式改为DeptServiceImpl.list()，此时就代表仅仅只有list这一个方法是切入点。只有list()方法在运行的时候才会应用通知。</p><p><strong>4. 切面：Aspect</strong>，描述通知与切入点的对应关系（通知+切入点）</p><p>当通知和切入点结合在一起，就形成了一个切面。通过切面就能够描述当前aop程序需要针对于哪个原始方法，在什么时候执行什么样的操作。</p><p><img src="'+E+'" alt="image-20230112161335186"></p><p>切面所在的类，我们一般称为<strong>切面类</strong>（被@Aspect注解标识的类）</p><p><strong>5. 目标对象：Target</strong>，通知所应用的对象</p><p>目标对象指的就是通知所应用的对象，我们就称之为目标对象。</p><p><img src="'+B+'" alt="image-20230112161657667"></p><p><strong>定义的通知对目标方法增强流程如下：</strong></p><p><img src="'+R+'" alt="image-20230112161821401"></p><blockquote><p>Spring的AOP底层是基于动态代理技术来实现的，也就是说在程序运行的时候，会自动的基于动态代理技术为目标对象生成一个对应的代理对象。在代理对象当中就会对目标对象当中的原始方法进行功能的增强。</p></blockquote><p>查看下列图片，回答问题 看图理解核心概念</p><ul><li><p>下列哪个是目标对象，哪个是代理对象？</p><p><img src="'+N+`" alt="image-20220513203556476"></p><p>image-20220513203556476</p></li></ul><p>课堂作业</p><p>🎻 1.完成Aop入门案例（统计DeptService中方法中的执行效率）</p><h2 id="_3-aop进阶" tabindex="-1">3. AOP进阶 <a class="header-anchor" href="#_3-aop进阶" aria-label="Permalink to &quot;3\\. AOP进阶&quot;">​</a></h2><p>目标🎯 ：<strong>学习AOP中各个细节，如：通知类型、通知顺序、切入点表达式、连接点</strong></p><h3 id="_3-1-通知类型🍐" tabindex="-1">3.1 通知类型🍐 <a class="header-anchor" href="#_3-1-通知类型🍐" aria-label="Permalink to &quot;3.1 通知类型🍐&quot;">​</a></h3><p>Spring中AOP的通知类型：</p><ul><li><strong>@Around</strong>常用：环绕通知，此注解标注的通知方法在目标方法前、后都被执行</li><li><strong>@Before</strong>：前置通知，此注解标注的通知方法在目标方法前被执行</li><li><strong>@After</strong>：后置通知，此注解标注的通知方法在目标方法后被执行，无论是否有异常都会执行</li><li><strong>@AfterReturning</strong> ： 返回后通知，此注解标注的通知方法在目标方法后被执行，有异常不会执行</li><li><strong>@AfterThrowing</strong> ： 异常后通知，此注解标注的通知方法发生异常后执行</li></ul><p>下面我们通过代码演示，来加深对于不同通知类型的理解：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>public class MyAspect1 {</span></span>
<span class="line"><span>    //前置通知</span></span>
<span class="line"><span>    @Before(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span>    public void before(JoinPoint joinPoint){</span></span>
<span class="line"><span>        log.info(&quot;before ...&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //环绕通知</span></span>
<span class="line"><span>    @Around(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span>    public Object around(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {</span></span>
<span class="line"><span>        log.info(&quot;around before ...&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //调用目标对象的原始方法执行</span></span>
<span class="line"><span>        Object result = proceedingJoinPoint.proceed();</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        //原始方法如果执行时有异常，环绕通知中的后置代码不会在执行了</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        log.info(&quot;around after ...&quot;);</span></span>
<span class="line"><span>        return result;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //后置通知</span></span>
<span class="line"><span>    @After(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span>    public void after(JoinPoint joinPoint){</span></span>
<span class="line"><span>        log.info(&quot;after ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //返回后通知（程序在正常执行的情况下，会执行的后置通知）</span></span>
<span class="line"><span>    @AfterReturning(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span>    public void afterReturning(JoinPoint joinPoint){</span></span>
<span class="line"><span>        log.info(&quot;afterReturning ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //异常通知（程序在出现异常的情况下，执行的后置通知）</span></span>
<span class="line"><span>    @AfterThrowing(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span>    public void afterThrowing(JoinPoint joinPoint){</span></span>
<span class="line"><span>        log.info(&quot;afterThrowing ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重新启动SpringBoot服务，进行测试：</p><p><strong>1. 没有异常情况下：</strong></p><ul><li>使用postman测试查询所有部门数据</li></ul><p><img src="`+p+'" alt="image-20230110165514461"></p><ul><li>查看idea中控制台日志输出</li></ul><p><img src="'+J+`" alt="image-20230110165806934"></p><blockquote><p>程序没有发生异常的情况下，@AfterThrowing标识的通知方法不会执行。</p></blockquote><p><strong>2. 出现异常情况下：</strong></p><p>修改DeptServiceImpl业务实现类中的代码： 添加异常</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class DeptServiceImpl implements DeptService {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private DeptMapper deptMapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public List&lt;Dept&gt; list() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        List&lt;Dept&gt; deptList = deptMapper.list();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //模拟异常</span></span>
<span class="line"><span>        int num = 10/0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return deptList;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //省略其他代码...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重新启动SpringBoot服务，测试发生异常情况下通知的执行：</p><ul><li>查看idea中控制台日志输出</li></ul><p><img src="`+U+`" alt="image-20230110171006874"></p><p>程序发生异常的情况下：</p><ul><li><p>@AfterReturning标识的通知方法不会执行，@AfterThrowing 标识的通知方法执行了</p></li><li><p>@Around环绕通知中原始方法调用时有异常，通知中的<strong>环绕后</strong>的代码逻辑也不会在执行了 （因为原始方法调用已经出异常了）</p></li></ul><p>在使用通知时的注意事项：</p><ul><li>@Around环绕通知需要自己调用 **ProceedingJoinPoint.proceed()**来让原始方法执行，其他通知不需要考虑目标方法执行</li><li>@Around环绕通知方法的<strong>返回值，必须指定为Object</strong>，来接收原始方法的返回值，否则原始方法执行完毕，是获取不到返回值的。</li></ul><p>点击查看代码优化表达式抽取</p><p>五种常见的通知类型，我们已经测试完毕了，此时我们再来看一下刚才所编写的代码，有什么问题吗？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//前置通知</span></span>
<span class="line"><span>@Before(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//环绕通知</span></span>
<span class="line"><span>@Around(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>//后置通知</span></span>
<span class="line"><span>@After(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//返回后通知（程序在正常执行的情况下，会执行的后置通知）</span></span>
<span class="line"><span>@AfterReturning(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//异常通知（程序在出现异常的情况下，执行的后置通知）</span></span>
<span class="line"><span>@AfterThrowing(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span></code></pre></div><p>我们发现啊，每一个注解里面都指定了切入点表达式，而且这些切入点表达式都一模一样。此时我们的代码当中就存在了大量的重复性的切入点表达式，假如此时切入点表达式需要变动，就需要将所有的切入点表达式一个一个的来改动，就变得非常繁琐了。</p><p>怎么来解决这个切入点表达式重复的问题？ 答案就是：<strong>抽取</strong></p><p>Spring提供了@PointCut注解，该注解的作用是将公共的切入点表达式抽取出来，需要用到时引用该切入点表达式即可。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>public class MyAspect1 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //切入点方法（公共的切入点表达式）</span></span>
<span class="line"><span>    @Pointcut(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span>    private void pt(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //前置通知（引用切入点）</span></span>
<span class="line"><span>    @Before(&quot;pt()&quot;)</span></span>
<span class="line"><span>    public void before(JoinPoint joinPoint){</span></span>
<span class="line"><span>        log.info(&quot;before ...&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //环绕通知</span></span>
<span class="line"><span>    @Around(&quot;pt()&quot;)</span></span>
<span class="line"><span>    public Object around(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {</span></span>
<span class="line"><span>        log.info(&quot;around before ...&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //调用目标对象的原始方法执行</span></span>
<span class="line"><span>        Object result = proceedingJoinPoint.proceed();</span></span>
<span class="line"><span>        //原始方法在执行时：发生异常</span></span>
<span class="line"><span>        //后续代码不在执行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        log.info(&quot;around after ...&quot;);</span></span>
<span class="line"><span>        return result;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //后置通知</span></span>
<span class="line"><span>    @After(&quot;pt()&quot;)</span></span>
<span class="line"><span>    public void after(JoinPoint joinPoint){</span></span>
<span class="line"><span>        log.info(&quot;after ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //返回后通知（程序在正常执行的情况下，会执行的后置通知）</span></span>
<span class="line"><span>    @AfterReturning(&quot;pt()&quot;)</span></span>
<span class="line"><span>    public void afterReturning(JoinPoint joinPoint){</span></span>
<span class="line"><span>        log.info(&quot;afterReturning ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //异常通知（程序在出现异常的情况下，执行的后置通知）</span></span>
<span class="line"><span>    @AfterThrowing(&quot;pt()&quot;)</span></span>
<span class="line"><span>    public void afterThrowing(JoinPoint joinPoint){</span></span>
<span class="line"><span>        log.info(&quot;afterThrowing ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>需要注意的是：当切入点方法使用private修饰时，仅能在当前切面类中引用该表达式， 当外部其他切面类中也要引用当前类中的切入点表达式，就需要把private改为public，而在引用的时候，具体的语法为：</p><p>全类名.方法名()，具体形式如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>public class MyAspect2 {</span></span>
<span class="line"><span>    //引用MyAspect1切面类中的切入点表达式</span></span>
<span class="line"><span>    @Before(&quot;com.itheima.aspect.MyAspect1.pt()&quot;)</span></span>
<span class="line"><span>    public void before(){</span></span>
<span class="line"><span>        log.info(&quot;MyAspect2 -&gt; before ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_3-2-通知顺序-🚀-🍐" tabindex="-1">3.2 通知顺序 🚀 🍐 <a class="header-anchor" href="#_3-2-通知顺序-🚀-🍐" aria-label="Permalink to &quot;3.2 通知顺序 🚀 🍐&quot;">​</a></h3><p>目标🎯 ：<strong>了解通知的执行顺序</strong></p><p>通知的执行顺序大家主要知道两点即可：</p><ol><li><p>不同的切面类当中，<strong>默认情况下通知的执行顺序是与切面类的类名字母排序是有关系的</strong></p><ul><li>目标方法前的通知方法：字母排名靠前的先执行</li><li>目标方法后的通知方法：字母排名靠前的后执行</li></ul></li><li><p>可以在切面类上面加上<code>@Order</code>注解，来控制不同的切面类通知的<code>执行顺序</code></p><ul><li><code>@Order(x)</code> //切面类的执行顺序（前置通知：数字x越小先执行; 后置通知：数字x越小越后执行）</li></ul></li></ol><p>点击查看通知执行顺序的验证代码</p><p><strong>定义多个切面类：</strong> 👇 👇</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>public class MyAspect2 {</span></span>
<span class="line"><span>    //前置通知</span></span>
<span class="line"><span>    @Before(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span>    public void before(){</span></span>
<span class="line"><span>        log.info(&quot;MyAspect2 -&gt; before ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //后置通知</span></span>
<span class="line"><span>    @After(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span>    public void after(){</span></span>
<span class="line"><span>        log.info(&quot;MyAspect2 -&gt; after ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>public class MyAspect3 {</span></span>
<span class="line"><span>    //前置通知</span></span>
<span class="line"><span>    @Before(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span>    public void before(){</span></span>
<span class="line"><span>        log.info(&quot;MyAspect3 -&gt; before ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //后置通知</span></span>
<span class="line"><span>    @After(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span>    public void after(){</span></span>
<span class="line"><span>        log.info(&quot;MyAspect3 -&gt;  after ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>public class MyAspect4 {</span></span>
<span class="line"><span>    //前置通知</span></span>
<span class="line"><span>    @Before(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span>    public void before(){</span></span>
<span class="line"><span>        log.info(&quot;MyAspect4 -&gt; before ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //后置通知</span></span>
<span class="line"><span>    @After(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span>    public void after(){</span></span>
<span class="line"><span>        log.info(&quot;MyAspect4 -&gt; after ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重新启动SpringBoot服务，测试通知的执行顺序：</p><blockquote><p>备注：</p><ol><li><p>把DeptServiceImpl实现类中模拟异常的代码删除或注释掉。</p></li><li><p>注释掉其他切面类(把@Aspect注释即可)，仅保留MyAspect2、MyAspect3、MyAspect4 ，这样就可以清晰看到执行的结果，而不被其他切面类干扰。</p></li></ol></blockquote><ul><li>使用postman测试查询所有部门数据</li></ul><p><img src="`+p+'" alt="image-20230110165514461"></p><ul><li>查看idea中控制台日志输出</li></ul><p><img src="'+F+`" alt="image-20230110211208549"></p><p>如果我们想控制通知的执行顺序有两种方式： 👇</p><ol><li>修改切面类的类名（这种方式非常繁琐、而且不便管理）</li><li>使用Spring提供的<code>@Order</code>注解推荐</li></ol><p>使用@Order注解，控制通知的执行顺序：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>@Order(2)  //切面类的执行顺序（前置通知：数字越小先执行; 后置通知：数字越小越后执行）</span></span>
<span class="line"><span>public class MyAspect2 {</span></span>
<span class="line"><span>    //前置通知</span></span>
<span class="line"><span>    @Before(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span>    public void before(){</span></span>
<span class="line"><span>        log.info(&quot;MyAspect2 -&gt; before ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //后置通知 </span></span>
<span class="line"><span>    @After(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span>    public void after(){</span></span>
<span class="line"><span>        log.info(&quot;MyAspect2 -&gt; after ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>@Order(3)  //切面类的执行顺序（前置通知：数字越小先执行; 后置通知：数字越小越后执行）</span></span>
<span class="line"><span>public class MyAspect3 {</span></span>
<span class="line"><span>    //前置通知</span></span>
<span class="line"><span>    @Before(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span>    public void before(){</span></span>
<span class="line"><span>        log.info(&quot;MyAspect3 -&gt; before ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //后置通知</span></span>
<span class="line"><span>    @After(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span>    public void after(){</span></span>
<span class="line"><span>        log.info(&quot;MyAspect3 -&gt;  after ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>@Order(1) //切面类的执行顺序（前置通知：数字越小先执行; 后置通知：数字越小越后执行）</span></span>
<span class="line"><span>public class MyAspect4 {</span></span>
<span class="line"><span>    //前置通知</span></span>
<span class="line"><span>    @Before(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span>    public void before(){</span></span>
<span class="line"><span>        log.info(&quot;MyAspect4 -&gt; before ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //后置通知</span></span>
<span class="line"><span>    @After(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span>    public void after(){</span></span>
<span class="line"><span>        log.info(&quot;MyAspect4 -&gt; after ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重新启动SpringBoot服务，测试通知执行顺序：</p><p><img src="`+Q+`" alt="image-20230110212523787"></p><h3 id="_3-3-连接点信息获取" tabindex="-1">3.3 连接点信息获取 <a class="header-anchor" href="#_3-3-连接点信息获取" aria-label="Permalink to &quot;3.3 连接点信息获取&quot;">​</a></h3><p>@Around通知，获取连接点信息是什么类？</p><ul><li><p>对于<code>@Around</code>环绕通知，获取连接点信息只能使用<strong>ProceedingJoinPoint</strong>类型</p></li><li><p>对于<strong>其他四种通知</strong>，获取连接点信息只能使用<strong>JoinPoint</strong>，它<strong>是ProceedingJoinPoint的父类型</strong></p></li></ul><p>用<strong>ProceedingJoinPoint</strong>和<strong>JoinPoint</strong> 可以获得方法执行时的相关信息，如目标类名、方法名、方法参数等。</p><p>点击查看示例代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>public class MyAspect7 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Pointcut(&quot;execution(* com.itheima.service.*.*(..))&quot;)</span></span>
<span class="line"><span>    private void pt(){}</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    //前置通知</span></span>
<span class="line"><span>    @Before(&quot;pt()&quot;)</span></span>
<span class="line"><span>    public void before(JoinPoint joinPoint){</span></span>
<span class="line"><span>        log.info(joinPoint.getSignature().getName() + &quot; MyAspect7 -&gt; before ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //后置通知</span></span>
<span class="line"><span>    @Before(&quot;pt()&quot;)</span></span>
<span class="line"><span>    public void after(JoinPoint joinPoint){</span></span>
<span class="line"><span>        log.info(joinPoint.getSignature().getName() + &quot; MyAspect7 -&gt; after ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //环绕通知</span></span>
<span class="line"><span>    @Around(&quot;pt()&quot;)</span></span>
<span class="line"><span>    public Object around(ProceedingJoinPoint pjp) throws Throwable {</span></span>
<span class="line"><span>        //获取目标类名</span></span>
<span class="line"><span>        String name = pjp.getTarget().getClass().getName();</span></span>
<span class="line"><span>        log.info(&quot;目标类名：{}&quot;,name);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //目标方法名</span></span>
<span class="line"><span>        String methodName = pjp.getSignature().getName();</span></span>
<span class="line"><span>        log.info(&quot;目标方法名：{}&quot;,methodName);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //获取方法执行时需要的参数</span></span>
<span class="line"><span>        Object[] args = pjp.getArgs();</span></span>
<span class="line"><span>        log.info(&quot;目标方法参数：{}&quot;, Arrays.toString(args));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //执行原始方法</span></span>
<span class="line"><span>        Object returnValue = pjp.proceed();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return returnValue;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重新启动SpringBoot服务，执行查询部门数据的功能：</p><p><img src="`+V+`" alt="image-20230110231629140"></p><h3 id="_3-4-切入点表达式-🍐-🚀" tabindex="-1">3.4 切入点表达式 🍐 🚀 <a class="header-anchor" href="#_3-4-切入点表达式-🍐-🚀" aria-label="Permalink to &quot;3.4 切入点表达式 🍐 🚀&quot;">​</a></h3><p>@annotation注解匹配实现步骤：</p><ol><li><p>编写自定义注解</p></li><li><p>在业务类要做为连接点的方法上添加自定义注解</p></li></ol><p><strong>自定义注解</strong>：MyLog</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Target(ElementType.METHOD)</span></span>
<span class="line"><span>@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span>public @interface MyLog {</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>业务类</strong>：DeptServiceImpl</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class DeptServiceImpl implements DeptService {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private DeptMapper deptMapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    @MyLog //自定义注解（表示：当前方法属于目标方法）</span></span>
<span class="line"><span>    public List&lt;Dept&gt; list() {</span></span>
<span class="line"><span>        List&lt;Dept&gt; deptList = deptMapper.list();</span></span>
<span class="line"><span>        //模拟异常</span></span>
<span class="line"><span>        //int num = 10/0;</span></span>
<span class="line"><span>        return deptList;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    @MyLog  //自定义注解（表示：当前方法属于目标方法）</span></span>
<span class="line"><span>    public void delete(Integer id) {</span></span>
<span class="line"><span>        //1. 删除部门</span></span>
<span class="line"><span>        deptMapper.delete(id);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void save(Dept dept) {</span></span>
<span class="line"><span>        dept.setCreateTime(LocalDateTime.now());</span></span>
<span class="line"><span>        dept.setUpdateTime(LocalDateTime.now());</span></span>
<span class="line"><span>        deptMapper.save(dept);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public Dept getById(Integer id) {</span></span>
<span class="line"><span>        return deptMapper.getById(id);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void update(Dept dept) {</span></span>
<span class="line"><span>        dept.setUpdateTime(LocalDateTime.now());</span></span>
<span class="line"><span>        deptMapper.update(dept);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>切面类</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@Aspect</span></span>
<span class="line"><span>public class MyAspect6 {</span></span>
<span class="line"><span>    //针对list方法、delete方法进行前置通知和后置通知</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //前置通知</span></span>
<span class="line"><span>    @Before(&quot;@annotation(com.itheima.anno.MyLog)&quot;)</span></span>
<span class="line"><span>    public void before(){</span></span>
<span class="line"><span>        log.info(&quot;MyAspect6 -&gt; before ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //后置通知</span></span>
<span class="line"><span>    @After(&quot;@annotation(com.itheima.anno.MyLog)&quot;)</span></span>
<span class="line"><span>    public void after(){</span></span>
<span class="line"><span>        log.info(&quot;MyAspect6 -&gt; after ...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重启SpringBoot服务，测试查询所有部门数据，查看控制台日志：</p><p><img src="`+W+`" alt="image-20230110224447047"></p><p>execution通配符匹配</p><p>execution主要根据方法的返回值、包名、类名、方法名、方法参数等信息来匹配，语法为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>execution(访问修饰符?  返回值  包名.类名.?方法名(方法参数) throws 异常?)</span></span></code></pre></div><p>其中带<code>?</code>的表示可以省略的部分</p><ul><li>访问修饰符：可省略（比如: public、protected）</li><li>包名.类名： 可省略</li><li>throws 异常：可省略（注意是方法上声明抛出的异常，不是实际抛出的异常）</li></ul><p>示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Before(&quot;execution(void com.itheima.service.impl.DeptServiceImpl.delete(java.lang.Integer))&quot;)</span></span></code></pre></div><p>使用通配符描述切入点</p><ul><li><p><code>*</code> ：单个独立的任意符号，可以通配任意返回值、包名、类名、方法名、任意类型的一个参数，也可以通配包、类、方法名的一部分</p></li><li><p><code>..</code> ：多个连续的任意符号，可以通配任意层级的包，或任意类型、任意个数的参数</p></li></ul><p>切入点表达式的语法规则不要死背，理解即可：</p><ol><li>方法的访问修饰符可以省略</li><li>返回值可以使用<code>*</code>号代替（任意返回值类型）</li><li>包名可以使用<code>*</code>号代替，代表任意包（一层包使用一个<code>*</code>）</li><li>使用<code>..</code>配置包名，标识此包以及此包下的所有子包</li><li>类名可以使用<code>*</code>号代替，标识任意类</li><li>方法名可以使用<code>*</code>号代替，表示任意方法</li><li>可以使用 <code>*</code> 配置参数，一个任意类型的参数</li><li>可以使用<code>..</code> 配置参数，任意个任意类型的参数</li></ol><p>点击查看切入点表达式示例</p><ul><li><p>省略方法的修饰符号</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>execution(void com.itheima.service.impl.DeptServiceImpl.delete(java.lang.Integer))</span></span></code></pre></div></li><li><p>使用<code>*</code>代替返回值类型</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>execution(* com.itheima.service.impl.DeptServiceImpl.delete(java.lang.Integer))</span></span></code></pre></div></li><li><p>使用<code>*</code>代替包名（一层包使用一个<code>*</code>）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>execution(* com.itheima.*.*.DeptServiceImpl.delete(java.lang.Integer))</span></span></code></pre></div></li><li><p>使用<code>..</code>省略包名</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>execution(* com..DeptServiceImpl.delete(java.lang.Integer))</span></span></code></pre></div></li><li><p>使用<code>*</code>代替类名</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>execution(* com..*.delete(java.lang.Integer))</span></span></code></pre></div></li><li><p>使用<code>*</code>代替方法名</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>execution(* com..*.*(java.lang.Integer))</span></span></code></pre></div></li><li><p>使用 <code>*</code> 代替参数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>execution(* com.itheima.service.impl.DeptServiceImpl.delete(*))</span></span></code></pre></div></li><li><p>使用<code>..</code>省略参数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>execution(* com..*.*(..))</span></span></code></pre></div></li></ul><p>注意事项：</p><ul><li><p>根据业务需要，可以使用 且（&amp;&amp;）、或（||）、非（!） 来组合比较复杂的切入点表达式。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>execution(* com.itheima.service.DeptService.list(..)) || execution(* com.itheima.service.DeptService.delete(..))</span></span></code></pre></div></li></ul><p><strong>切入点表达式的书写建议</strong>🍐❤️：企业实用</p><ul><li><p>所有业务方法名在命名时尽量规范，方便切入点表达式快速匹配。如：查询类方法都是 find 开头，更新类方法都是update开头 👍</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//业务类</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class DeptServiceImpl implements DeptService {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    public List&lt;Dept&gt; findAllDept() {</span></span>
<span class="line"><span>       //省略代码...</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    public Dept findDeptById(Integer id) {</span></span>
<span class="line"><span>       //省略代码...</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    public void updateDeptById(Integer id) {</span></span>
<span class="line"><span>       //省略代码...</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    public void updateDeptByMoreCondition(Dept dept) {</span></span>
<span class="line"><span>       //省略代码...</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //其他代码...</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//匹配DeptServiceImpl类中以find开头的方法</span></span>
<span class="line"><span>execution(* com.itheima.service.impl.DeptServiceImpl.find*(..))</span></span></code></pre></div></li><li><p>描述切入点方法通常基于接口描述，而不是直接描述实现类，增强拓展性 👍</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>execution(* com.itheima.service.DeptService.*(..))</span></span></code></pre></div></li><li><p>在满足业务需要的前提下，尽量缩小切入点的匹配范围。如：包名匹配尽量不使用 ..，使用 * 匹配单个包 👍</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>execution(* com.itheima.*.*.DeptServiceImpl.find*(..))</span></span></code></pre></div></li></ul><p>技巧</p><ul><li>execution切入点表达式 <ul><li>根据我们所指定的方法的描述信息来匹配切入点方法，这种方式也是最为常用的一种方式</li><li>如果我们要匹配的切入点方法的方法名不规则，或者有一些比较特殊的需求，通过execution切入点表达式描述比较繁琐</li></ul></li><li>annotation 切入点表达式企业实用 <ul><li>基于注解的方式来匹配切入点方法。这种方式虽然多一步操作，我们需要自定义一个注解，但是相对来比较灵活。我们需要匹配哪个方法，就在方法上加上对应的注解就可以了</li></ul></li></ul><p>注意</p><p>因为AOP面向切面编程的特性，因此书写AOP代码需要慎重，以防增强不需要增强的代码</p><h2 id="_4-aop案例" tabindex="-1">4. AOP案例 <a class="header-anchor" href="#_4-aop案例" aria-label="Permalink to &quot;4\\. AOP案例&quot;">​</a></h2><p>目标🎯 ：<strong>通过案例理解AOP通知类型的使用</strong></p><h3 id="_4-1-需求" tabindex="-1">4.1 需求 <a class="header-anchor" href="#_4-1-需求" aria-label="Permalink to &quot;4.1 需求&quot;">​</a></h3><p>需求：将案例中增、删、改相关接口的操作日志记录到数据库表中</p><ul><li>就是当<strong>访问</strong>部门管理和员工管理当中的<strong>增、删、改</strong>相关功能接口时，<strong>需要</strong>详细的<strong>操作日志</strong>，并<strong>保存</strong>在数据表中，便于后期<strong>数据追踪</strong>。企业实用</li></ul><p>操作日志信息包含：</p><ul><li><strong>操作人</strong>(所记录的日志信息包括当前接口的操作人是谁操作的)</li><li><strong>操作时间</strong>(什么时间点操作)</li><li><strong>执行方法的全类名</strong>(访问的是哪个类)</li><li><strong>执行方法名</strong>(类当中的哪个方法)</li><li><strong>方法运行时参数</strong>(访问这个方法的时候传入进来的参数是什么)</li><li><strong>返回值</strong>(访问这个方法最终拿到的返回值是什么)</li><li><strong>方法执行时长</strong>(整个接口方法的运行时长是多长时间)</li></ul><hr><p><strong>需求分析：</strong> 👇 👇</p><p>问题1： 项目当中增删改相关的方法 是不是有很多？</p><ul><li>很多</li></ul><p>问题2： 我们需要针对每一个功能接口方法进行修改，在每一个功能接口 当中都来记录这些操作日志吗？</p><ul><li>这种做法比较繁琐</li></ul><p>以上两个问题的解决方案：可以使用AOP解决(每一个增删改功能接口中要实现的记录操作日志的逻辑代码是相同)。</p><blockquote><p>可以把这部分记录操作日志的通用的、重复性的逻辑代码抽取出来定义在一个通知方法当中，我们通过AOP面向切面编程的方式，在不改动原始功能的基础上来对原始的功能进行增强。目前我们所增强的功能就是来记录操作日志，所以也可以使用AOP的技术来实现。使用AOP的技术来实现也是最为简单，最为方便的。</p></blockquote><p>问题3： 既然要基于AOP面向切面编程的方式来完成的功能，那么我们要使用 AOP五种通知类型当中的哪种通知类型？</p><ul><li>答案：环绕通知</li></ul><blockquote><p>所记录的操作日志当中包括：操作人、操作时间，访问的是哪个类、哪个方法、方法运行时参数、方法的返回值、方法的运行时长。</p><p>方法返回值，是在原始方法执行后才能获取到的。</p><p>方法的运行时长，需要原始方法运行之前记录开始时间，原始方法运行之后记录结束时间。通过计算获得方法的执行耗时。</p><p>基于以上的分析我们确定要使用Around环绕通知。</p></blockquote><p>问题4： 最后一个问题，切入点表达式 我们该怎么写？</p><ul><li>答案：使用annotation来描述表达式 <ul><li>要匹配业务接口当中所有的增删改的方法，而增删改方法在命名上没有共同的前缀或后缀。</li><li>此时如果使用execution切入点表达式也可以，但是会比较繁琐。</li><li>当遇到增删改的方法名没有规律时 ，就<strong>可以使用 annotation切入点表达式</strong></li></ul></li></ul><p>案例的实现步骤其实就两步：</p><ul><li>准备工作 <ol><li>引入AOP的起步依赖</li><li>导入资料中准备好的数据库表结构，并引入对应的实体类</li></ol></li><li>编码实现 <ol><li>自定义注解@Log</li><li>定义切面类，完成记录操作日志的逻辑</li></ol></li></ul><h4 id="_4-4-1-准备工作" tabindex="-1">4.4.1 准备工作 <a class="header-anchor" href="#_4-4-1-准备工作" aria-label="Permalink to &quot;4.4.1 准备工作&quot;">​</a></h4><ol><li>AOP起步依赖</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;!--AOP起步依赖--&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-boot-starter-aop&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><ol start="2"><li>导入资料中准备好的数据库表结构，并引入对应的实体类</li></ol><p>数据表</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>-- 操作日志表</span></span>
<span class="line"><span>create table operate_log(</span></span>
<span class="line"><span>    id int unsigned primary key auto_increment comment &#39;ID&#39;,</span></span>
<span class="line"><span>    operate_user int unsigned comment &#39;操作人&#39;,</span></span>
<span class="line"><span>    operate_time datetime comment &#39;操作时间&#39;,</span></span>
<span class="line"><span>    class_name varchar(100) comment &#39;操作的类名&#39;,</span></span>
<span class="line"><span>    method_name varchar(100) comment &#39;操作的方法名&#39;,</span></span>
<span class="line"><span>    method_params varchar(1000) comment &#39;方法参数&#39;,</span></span>
<span class="line"><span>    return_value varchar(2000) comment &#39;返回值&#39;,</span></span>
<span class="line"><span>    cost_time bigint comment &#39;方法执行耗时, 单位:ms&#39;</span></span>
<span class="line"><span>) comment &#39;操作日志表&#39;;</span></span></code></pre></div><p>实体类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//操作日志实体类</span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>@NoArgsConstructor</span></span>
<span class="line"><span>@AllArgsConstructor</span></span>
<span class="line"><span>public class OperateLog {</span></span>
<span class="line"><span>    private Integer id; //主键ID</span></span>
<span class="line"><span>    private Integer operateUser; //操作人ID</span></span>
<span class="line"><span>    private LocalDateTime operateTime; //操作时间</span></span>
<span class="line"><span>    private String className; //操作类名</span></span>
<span class="line"><span>    private String methodName; //操作方法名</span></span>
<span class="line"><span>    private String methodParams; //操作方法参数</span></span>
<span class="line"><span>    private String returnValue; //操作方法返回值</span></span>
<span class="line"><span>    private Long costTime; //操作耗时</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Mapper接口</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Mapper</span></span>
<span class="line"><span>public interface OperateLogMapper {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //插入日志数据</span></span>
<span class="line"><span>    @Insert(&quot;insert into operate_log (operate_user, operate_time, class_name, method_name, method_params, return_value, cost_time) &quot; +</span></span>
<span class="line"><span>            &quot;values (#{operateUser}, #{operateTime}, #{className}, #{methodName}, #{methodParams}, #{returnValue}, #{costTime});&quot;)</span></span>
<span class="line"><span>    public void insert(OperateLog log);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>自定义注解@Log</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 自定义Log注解</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Target({ElementType.METHOD}) //表明注解是写在方法上的</span></span>
<span class="line"><span>@Documented //表明可以生成文档  了解一下</span></span>
<span class="line"><span>@Retention(RetentionPolicy.RUNTIME) //表明该注解运行时有效</span></span>
<span class="line"><span>public @interface Log {</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>修改业务实现类</strong>，在增删改业务方法上添加<code>@Log</code>注解</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class EmpServiceImpl implements EmpService {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private EmpMapper empMapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    @Log</span></span>
<span class="line"><span>    public void update(Emp emp) {</span></span>
<span class="line"><span>        emp.setUpdateTime(LocalDateTime.now()); //更新修改时间为当前时间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        empMapper.update(emp);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    @Log</span></span>
<span class="line"><span>    public void save(Emp emp) {</span></span>
<span class="line"><span>        //补全数据</span></span>
<span class="line"><span>        emp.setCreateTime(LocalDateTime.now());</span></span>
<span class="line"><span>        emp.setUpdateTime(LocalDateTime.now());</span></span>
<span class="line"><span>        //调用添加方法</span></span>
<span class="line"><span>        empMapper.insert(emp);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    @Log</span></span>
<span class="line"><span>    public void delete(List&lt;Integer&gt; ids) {</span></span>
<span class="line"><span>        empMapper.delete(ids);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //省略其他代码...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>以同样的方式，修改DeptServiceImpl业务类</p><ul><li>定义切面类，完成记录操作日志的逻辑 核心操作</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j //日志</span></span>
<span class="line"><span>@Component//实例化该类，交给ioc管理</span></span>
<span class="line"><span>@Aspect //切面类</span></span>
<span class="line"><span>public class LogAspect {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //注入请求对象，方便获取token中的用户id</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private HttpServletRequest request;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 日志操作类Mapper，方便插入日志</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private OperateLogMapper operateLogMapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //环绕通知，并配上注解匹配式</span></span>
<span class="line"><span>    @Around(&quot;@annotation(com.itheima.anno.Log)&quot;)</span></span>
<span class="line"><span>    public Object recordLog(ProceedingJoinPoint joinPoint) throws Throwable {</span></span>
<span class="line"><span>        //操作人ID - 当前登录员工ID</span></span>
<span class="line"><span>        //获取请求头中的jwt令牌, 解析令牌</span></span>
<span class="line"><span>        String jwt = request.getHeader(&quot;token&quot;);</span></span>
<span class="line"><span>        Claims claims = JwtUtils.parseJWT(jwt);</span></span>
<span class="line"><span>        Integer operateUser = (Integer) claims.get(&quot;id&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //操作时间</span></span>
<span class="line"><span>        LocalDateTime operateTime = LocalDateTime.now();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //操作类名</span></span>
<span class="line"><span>        String className = joinPoint.getTarget().getClass().getName();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //操作方法名</span></span>
<span class="line"><span>        String methodName = joinPoint.getSignature().getName();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //操作方法参数</span></span>
<span class="line"><span>        Object[] args = joinPoint.getArgs();</span></span>
<span class="line"><span>        String methodParams = Arrays.toString(args);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        long begin = System.currentTimeMillis();</span></span>
<span class="line"><span>        //调用原始目标方法运行</span></span>
<span class="line"><span>        Object result = joinPoint.proceed();</span></span>
<span class="line"><span>        long end = System.currentTimeMillis();</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //方法返回值（使用转成JSON字符串）</span></span>
<span class="line"><span>        String returnValue = JSONObject.toJSONString(result);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //操作耗时</span></span>
<span class="line"><span>        Long costTime = end - begin;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //记录操作日志</span></span>
<span class="line"><span>        OperateLog operateLog = new OperateLog(null,operateUser,operateTime,className,methodName,methodParams,returnValue,costTime);</span></span>
<span class="line"><span>        operateLogMapper.insert(operateLog);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        log.info(&quot;AOP记录操作日志: {}&quot; , operateLog);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return result;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>代码实现细节： 获取request对象，从请求头中获取到jwt令牌，解析令牌获取出当前用户的id。</p></blockquote><p>重启SpringBoot服务，测试操作日志记录功能：</p><ul><li>添加一个新的部门</li></ul><p><img src="`+H+'" alt="image-20230111001114301"></p><ul><li>数据表</li></ul><p><img src="'+z+'" alt="image-20230111001230731"></p><h2 id="_5-拓展" tabindex="-1">5.拓展 <a class="header-anchor" href="#_5-拓展" aria-label="Permalink to &quot;5.拓展&quot;">​</a></h2><h3 id="_5-1-aop底层实现原理" tabindex="-1">5.1 AOP底层实现原理 <a class="header-anchor" href="#_5-1-aop底层实现原理" aria-label="Permalink to &quot;5.1 AOP底层实现原理&quot;">​</a></h3><p><a href="http://www.yangeit.cn:21010/expand/spring/aop/spring-y-aop-impl.html" target="_blank" rel="noreferrer">想知道AOP底层实现原理吗，点击这里学习</a> 👈 👈</p><h3 id="_5-2-springboot原理" tabindex="-1">5.2 SpringBoot原理 <a class="header-anchor" href="#_5-2-springboot原理" aria-label="Permalink to &quot;5.2 SpringBoot原理&quot;">​</a></h3><p><a href="http://www.yangeit.cn:21010/javaweb2023/day14.html#_3-springboot%E5%8E%9F%E7%90%86" target="_blank" rel="noreferrer">SpringBoot这么好用，想知道他的原理吗？点击这里学习</a></p>',382),Z=[K];function $(Y,X,ss,ns,as,ps){return i(),l("div",null,Z)}const is=e(G,[["render",$]]);export{ls as __pageData,is as default};
