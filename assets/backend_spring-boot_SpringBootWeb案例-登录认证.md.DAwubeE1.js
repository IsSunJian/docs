import{_ as a,c as p,o as e,a4 as l}from"./chunks/framework.-JfgED0h.js";const t="/docs/assets/image-20230105085404855.ByT0xz3E.png",i="/docs/assets/image-20230105175310401.DS_bZP4G.png",o="/docs/assets/image-20220907132229245.kIpgHq7D.png",c="/docs/assets/image-20230105193104848.BI6RPfAP.png",s="/docs/assets/image-20230105085212629.BsYJeWTT.png",r="/docs/assets/image-20230105192918098.BzDIFhsd.png",u="/docs/assets/image-20230105180811717.BjCH68O5.png",d="/docs/assets/2023-04-13-22-17-51.DR1MFD_Y.png",g="/docs/assets/image-20230105194710533.VtXuNTUi.png",h="/docs/assets/image-20230105203827355.18eBPzDD.png",m="/docs/assets/image-20230112112557480.Bzv9IK28.png",q="/docs/assets/image-20230112112740131.C9fXjZr3.png",b="/docs/assets/image-20230112113558810.CaBXcrE3.png",v="/docs/assets/image-20230112105938545.D1jDsgjQ.png",S="/docs/assets/image-20230112110441075.DM39v8Vd.png",k="/docs/assets/image-20230112101943835.BfKyZIVX.png",C="/docs/assets/image-20230112111004447.BGKKmK0c.png",_="/docs/assets/image-20230112111137207.-fg7DI0H.png",y="/docs/assets/image-20230112111328117.CsNjaTfd.png",f="/docs/assets/image-20230112102022634.DLhb8cpx.png",w="/docs/assets/image-20230106085442076.O9993g4z.png",J="/docs/assets/image-20230112114319773.BtRlkWj5.png",I="/docs/assets/image-20230106190950305.D0RACEP8.png",F="/docs/assets/image-20230106205045658.CMrLYe0Z.png",j="/docs/assets/image-20230106212805480.BXsMcHCI.png",T="/docs/assets/image-20230106213419461.BzvqJDCY.png",W="/docs/assets/image-20230112120955145.DN1-xmqR.png",R="/docs/assets/image-20230112121205697.DtkjAAxg.png",O="/docs/assets/image-20230106222559935.CEUDsW2V.png",x="/docs/assets/image-20230106224322625.CjRuq3KK.png",E="/docs/assets/image-20230106225658525.DFPpjd4n.png",P="/docs/assets/image-20230106230332510.BOiqRvLX.png",D="/docs/assets/image-20230106230520229.CeDiARTt.png",H="/docs/assets/image-20230106231144348.DSSNmlcP.png",N="/docs/assets/image-20230106231220802.t8aLtgIR.png",A="/docs/assets/image-20230107084730393.jir4nekT.png",B="/docs/assets/image-20230107085552176.cfss1EFf.png",M="/docs/assets/image-20230107090425999.1LIq93_h.png",L="/docs/assets/image-20230107093757050.BD5ZE4hJ.png",U="/docs/assets/image-20230112122130564.C5NaY9Ja.png",n="/docs/assets/image-20230107102922550.DbvG3D7Q.png",z="/docs/assets/image-20230107105224741.B0kCUBKv.png",V="/docs/assets/image-20230107105415120.VXVjaFJV.png",X="/docs/assets/image-20230107105815511.AJuzRgkz.png",Z="/docs/assets/image-20230107111525558.Dro5g9NO.png",G="/docs/assets/image-20230107111812963.DjQRevEB.png",K="/docs/assets/image-20210805175445422.BdBREnXk.png",Y="/docs/assets/image-20230107112136151.Dyx_sJuW.png",Q="/docs/assets/image-20230107113653871.DkedAhhW.png",$="/docs/assets/image-20230107114008004.mjwpVK-o.png",ss="/docs/assets/image-20230107122904214.CZC6MNL7.png",ns="/docs/assets/image-20230112125651073.D5YAEffn.png",as="/docs/assets/image-20230112125737863.B5-v_QAJ.png",ps="/docs/assets/image-20230112125826602.DyfOL6Ma.png",es="/docs/assets/image-20230112130253486.jYeuPcYF.png",ls="/docs/assets/image-20230107121909087.Cqn7S6Ty.png",ts="/docs/assets/image-20230112131232032.0VqT43yu.png",is="/docs/assets/image-20230112131135272.CFfo8HKq.png",Ss=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"backend/spring-boot/SpringBootWeb案例-登录认证.md","filePath":"backend/spring-boot/SpringBootWeb案例-登录认证.md"}'),os={name:"backend/spring-boot/SpringBootWeb案例-登录认证.md"},cs=l('<h2 id="springbootweb案例-登录认证" tabindex="-1">SpringBootWeb案例-登录认证 <a class="header-anchor" href="#springbootweb案例-登录认证" aria-label="Permalink to &quot;SpringBootWeb案例-登录认证&quot;">​</a></h2><h2 id="今日目标" tabindex="-1">今日目标 <a class="header-anchor" href="#今日目标" aria-label="Permalink to &quot;今日目标&quot;">​</a></h2><p>目标</p><ul><li>能够编写案例中的登录接口 ❤️✏️</li><li>能够理解会话技术Cookie和Session 🍐</li><li>能够理解JWT令牌的作用和掌握其使用 🍐❤️✏️</li><li>能够理解并掌握过滤器Filter 🍐 ❤️</li><li>能够区分拦截器和过滤器的区别 🍐</li><li>能够掌握统一异常处理 🍐 ✏️</li></ul><p>知识储备</p><ol><li>已经完成 <ol><li>部门管理</li><li>员工管理</li></ol></li><li>能理解添加员工和修改员工需要权限管理</li><li>有过登陆某些网站，在接下的操作中，可以已登录状态进行访问</li><li>能理解 &quot;服务器正忙，请稍后的再试！&quot;的含义</li></ol><h2 id="_1-登录功能-🚩" tabindex="-1">1. 登录功能 🚩 <a class="header-anchor" href="#_1-登录功能-🚩" aria-label="Permalink to &quot;1\\. 登录功能 🚩&quot;">​</a></h2><p>登陆功能</p><p><img src="'+t+'" alt="image-20230105085404855"></p><p>在登录界面中，我们可以输入用户的用户名以及密码，然后点击 &quot;登录&quot; 按钮就要请求服务器，服务端判断用户输入的用户名或者密码是否正确。如果正确，则返回成功结果，前端跳转至系统首页面。</p><p><strong>思路分析</strong> 👇 👇</p><p><img src="'+i+`" alt="image-20230105175310401"></p><p>登录服务端的核心逻辑</p><ol><li>接收前端请求传递的用户名和密码<code>(数据库中的密码是密文，还是明文)</code>，</li><li>然后再根据用户名和密码查询用户信息， <ul><li>如果用户信息存在，则说明用户输入的用户名和密码正确。</li><li>如果查询到的用户不存在，则说明用户输入的用户名和密码错误。</li></ul></li></ol><p>接口文档</p><ul><li>基本信息</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>请求路径：/login</span></span>
<span class="line"><span>请求方式：POST</span></span>
<span class="line"><span>接口描述：该接口用于员工登录Tlias智能学习辅助系统，登录完毕后，系统下发JWT令牌。</span></span></code></pre></div><ul><li>请求参数 <ul><li>参数格式：<code>application/json</code></li><li>参数说明：</li></ul></li></ul><table><thead><tr><th>名称</th><th>类型</th><th>是否必须</th><th>备注</th></tr></thead><tbody><tr><td>username</td><td>string</td><td>必须</td><td>用户名</td></tr><tr><td>password</td><td>string</td><td>必须</td><td>密码</td></tr></tbody></table><p>请求数据样例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;username&quot;: &quot;jinyong&quot;,</span></span>
<span class="line"><span>    &quot;password&quot;: &quot;123456&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>响应数据 <ul><li>参数格式：application/json</li><li>参数说明：</li></ul></li></ul><table><thead><tr><th>名称</th><th>类型</th><th>是否必须</th><th>默认值</th><th>备注</th><th>其他信息</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>必须</td><td></td><td>响应码, 1 成功 ; 0 失败</td><td></td></tr><tr><td>msg</td><td>string</td><td>非必须</td><td></td><td>提示信息</td><td></td></tr><tr><td>data</td><td>string</td><td>必须</td><td></td><td>返回的数据 , jwt令牌</td><td></td></tr></tbody></table><p>响应数据样例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>&quot;code&quot;: 1,</span></span>
<span class="line"><span>&quot;msg&quot;: &quot;success&quot;,</span></span>
<span class="line"><span>&quot;data&quot;: &quot;eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoi6YeR5bq4IiwiaWQiOjEsInVzZXJuYW1lIjoiamlueW9uZyIsImV4cCI6MTY2MjIwNzA0OH0.KkUc_CXJZJ8Dd063eImx4H9Ojfrr6XMJ-yVzaWCVZCo&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_1-4-功能开发-✏️" tabindex="-1">1.4 功能开发 ✏️ <a class="header-anchor" href="#_1-4-功能开发-✏️" aria-label="Permalink to &quot;1.4 功能开发 ✏️&quot;">​</a></h3><p><strong>LoginController</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>public class LoginController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private EmpService empService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PostMapping(&quot;/login&quot;)</span></span>
<span class="line"><span>    public Result login(@RequestBody Emp emp){</span></span>
<span class="line"><span>        Emp e = empService.login(emp);</span></span>
<span class="line"><span>    return  e != null ? Result.success():Result.error(&quot;用户名或密码错误&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>EmpService</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public interface EmpService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 用户登录</span></span>
<span class="line"><span>     * @param emp</span></span>
<span class="line"><span>     * @return</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public Emp login(Emp emp);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //省略其他代码...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>EmpServiceImpl</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class EmpServiceImpl implements EmpService {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private EmpMapper empMapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public Emp login(Emp emp) {</span></span>
<span class="line"><span>        //调用dao层功能：登录</span></span>
<span class="line"><span>        Emp loginEmp = empMapper.getByUsernameAndPassword(emp);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //返回查询结果给Controller</span></span>
<span class="line"><span>        return loginEmp;</span></span>
<span class="line"><span>    }   </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //省略其他代码...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>EmpMapper</strong></p><p>sql语句</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>select * from emp where username=&quot;&quot; and password =&quot;&quot;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Mapper</span></span>
<span class="line"><span>public interface EmpMapper {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Select(&quot;select id, username, password, name, gender, image, job, entrydate, dept_id, create_time, update_time &quot; +</span></span>
<span class="line"><span>            &quot;from emp &quot; +</span></span>
<span class="line"><span>            &quot;where username=#{username} and password =#{password}&quot;)</span></span>
<span class="line"><span>    public Emp getByUsernameAndPassword(Emp emp);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //省略其他代码...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>测试</strong> 👇 👇</p><p>功能开发完毕后，我们就可以启动服务，打开postman进行测试了。</p><p><strong>Postman测试</strong></p><p>发起POST请求，访问：<a href="http://localhost:8080/login" target="_blank" rel="noreferrer">http://localhost:8080/loginopen in new window</a></p><p><img src="`+o+'" alt="image-20220907132229245"></p><p>postman测试通过了，那接下来，我们就可以结合着前端工程进行联调测试。</p><p><strong>前端测试</strong> 👇 👇</p><p>先退出系统，进入到登录页面：</p><p><img src="'+c+'" alt="image-20230105193104848"></p><p>在登录页面输入账户密码：</p><p><img src="'+s+'" alt="image-20230105085212629"></p><p>登录成功之后进入到后台管理系统页面：</p><p><img src="'+r+'" alt="image-20230105192918098"></p><p>课堂作业</p><p>🎻 1. 根据接口文档，独自完成上述的登陆接口代码</p><h2 id="_2-登录校验-🍐-❤️" tabindex="-1">2. 登录校验 🍐 ❤️ <a class="header-anchor" href="#_2-登录校验-🍐-❤️" aria-label="Permalink to &quot;2\\. 登录校验 🍐 ❤️&quot;">​</a></h2><p>问题 :登录和未登录都能访问后端系统页面</p><p>期望功能:登陆后才能访问后端系统页面，不登陆则跳转登陆页面进行登陆 🎯</p><p><strong>原因：</strong> 登录状态没有被记录(思考：HTTP协议的特点)</p><p><strong>解决方案：登录校验</strong><img src="'+u+'" alt="image-20230105180811717"></p><p>点击查看什么是登录校验</p><ul><li>所谓登录校验，指的是我们在服务器端接收到浏览器发送过来的请求之后，首先我们要<strong>对请求进行校验</strong>。</li></ul><p><img src="'+d+'" alt=""></p><ul><li>先要校验一下用户登录了没有 <ul><li>如果用户已经登录了，就直接执行对应的业务操作就可以了；</li><li>如果用户没有登录，此时就不允许他执行相关的业务操作，直接给前端响应一个错误的结果，最终跳转到登录页面，要求登录成功之后，再来访问对应的数据。</li></ul></li></ul><p><strong>知识储备： HTTP协议是无状态协议</strong></p><blockquote><p>所谓无状态，指的是每一次请求都是独立的，下一次请求并不会携带上一次请求的数据。而浏览器与服务器之间进行交互，基于HTTP协议也就意味着现在我们通过浏览器来访问了登陆这个接口，实现了登陆的操作，接下来我们在执行其他业务操作时，服务器也并不知道这个员工到底登陆了没有。因为HTTP协议是无状态的，两次请求之间是独立的，所以是无法判断这个员工到底登陆了没有。</p></blockquote><p>实现登录校验实现思路</p><ol><li>在员工登录成功后，需要<strong>将用户登录成功的信息存起来</strong>，记录用户<strong>已经登录成功的标记</strong>。</li><li>在浏览器发起请求时，需要在服务端进行统一拦截，拦截后进行<strong>登录校验</strong> (判断是否有成功的标记)。 <img src="'+g+'" alt="image-20230105194710533"></li></ol><p><strong>实现登录校验需要web开发中的两个技术：</strong> ❤️ 🎯</p><ol><li>会话技术负责记录共享数据 <ol><li>cookie</li><li>session</li></ol></li><li>统一拦截技术负责拦截请求 <ol><li>Servlet规范中的Filter过滤器</li><li>Spring提供的interceptor拦截器</li></ol></li></ol><h3 id="_2-1-会话技术" tabindex="-1">2.1 会话技术 <a class="header-anchor" href="#_2-1-会话技术" aria-label="Permalink to &quot;2.1 会话技术&quot;">​</a></h3><p>会话技术的作用</p><p>由于HTTP是<strong>无状态协议</strong>，在后面请求中怎么拿到<strong>前一次请求生成的数据</strong>呢？此时就需要在<strong>一次会话的多次请求之间</strong>进行<strong>数据共享</strong></p><p>👉 在我们日常生活当中，会话指的就是谈话、交谈。</p><p>👉 <strong>在web开发当中，会话指的就是浏览器与服务器之间的一次连接，我们就称为一次会话。</strong></p><p>点击查看会话是何时建立何时销毁</p><blockquote><p>在用户打开浏览器第一次访问服务器的时候，这个会话就建立了 ，直到有任何一方断开连接，此时会话就结束了。在一次会话当中，是可以包含多次请求和响应的。</p><p>比如：打开了浏览器来访问web服务器上的资源（浏览器不能关闭、服务器不能断开）</p><ul><li>第1次：访问的是登录的接口，完成登录操作</li><li>第2次：访问的是部门管理接口，查询所有部门数据</li><li>第3次：访问的是员工管理接口，查询员工数据</li></ul><p>只要浏览器和服务器都没有关闭，以上3次请求都属于一次会话当中完成的。</p></blockquote><p><img src="'+h+'" alt="image-20230105203827355"></p><p>需要注意的是：会话是和浏览器关联的，当有三个浏览器客户端和服务器建立了连接时，就会有三个会话。同一个浏览器在未关闭之前请求了多次服务器，这多次请求是属于同一个会话。比如：1、2、3这三个请求都是属于同一个会话。当我们关闭浏览器之后，这次会话就结束了。而如果我们是直接把web服务器关了，那么所有的会话就都结束了。</p><p>会话跟踪</p><p><strong>会话跟踪</strong>：一种维护浏览器状态的<strong>方法</strong>，服务器<strong>需要识别多次请求是否来自于同一浏览器</strong>，以便在同一次会话的多次请求间共享数据。</p><blockquote><p>服务器会接收很多的请求，但是服务器是需要识别出这些请求是不是同一个浏览器发出来的。比如：1和2这两个请求是不是同一个浏览器发出来的，3和5这两个请求不是同一个浏览器发出来的。如果是同一个浏览器发出来的，就说明是同一个会话。如果是不同的浏览器发出来的，就说明是不同的会话。而识别多次请求是否来自于同一浏览器的过程，我们就称为<strong>会话跟踪</strong>。</p></blockquote><p><strong>使用会话跟踪技术👇就是要完成在同一个会话中，多个请求之间进行共享数据。</strong></p><p><strong>会话跟踪 3 种常见的技术方案:</strong></p><ol><li>Cookie（客户端会话跟踪技术）经典实用 <ul><li>数据存储在客户端浏览器当中</li></ul></li><li>Session（服务端会话跟踪技术）经典实用 <ul><li>数据存储在储在服务端</li></ul></li><li>令牌技术企业实用</li></ol><h3 id="_2-2-会话跟踪方案-cookie-🍐" tabindex="-1">2.2 会话跟踪方案- Cookie 🍐 <a class="header-anchor" href="#_2-2-会话跟踪方案-cookie-🍐" aria-label="Permalink to &quot;2.2 会话跟踪方案- Cookie 🍐&quot;">​</a></h3><p>课堂作业</p><ol><li>🚩 打开浏览器，访问百度首页，按F12+Network 查看请求头信息。 <ol><li>查看Cookie存在的位置（请求行，请求头），</li><li>点击Application Tab栏目，观察是否存在很多Cookie？并选中其中一个Cookie 尝试删除Cookie</li><li>截取第二步的Cookie，和第一步的Cookie对比一下，观察是否相同,并观察多个Cookie用什么符号隔开的。</li></ol></li></ol><h3 id="_2-3-会话跟踪方案-session-🍐" tabindex="-1">2.3 会话跟踪方案- Session 🍐 <a class="header-anchor" href="#_2-3-会话跟踪方案-session-🍐" aria-label="Permalink to &quot;2.3 会话跟踪方案- Session 🍐&quot;">​</a></h3><p>会话跟踪方案- Session</p><p><strong>Session是服务器端会话跟踪技术</strong>，所以它是存储在服务器端 的。而 Session 的底层其实就是基于我们刚才所介绍的 Cookie 来实现的。</p><p><strong>优缺点</strong>👇 👇</p><ul><li>优点：Session是存储在服务端的，安全 👍 👍</li><li>缺点：在现在的企业开发当中，使用令牌技术 <ul><li>服务器集群环境下无法直接使用Session 👎</li><li>移动端APP(Android、IOS)中无法使用Cookie 👎</li><li>用户可以自己禁用Cookie 👎</li><li>Cookie不能跨域 👎</li></ul></li></ul><blockquote><p>PS：Session 底层是基于Cookie实现的会话跟踪，如果Cookie不可用，则该方案，也就失效了</p></blockquote><p>点击查看 服务器集群环境为何无法使用Session？</p><blockquote><p><img src="'+m+'" alt="image-20230112112557480"></p><ul><li>首先第一点，我们现在所开发的项目，一般都不会只部署在一台服务器上，因为一台服务器会存在一个很大的问题，就是单点故障。所谓单点故障，指的就是一旦这台服务器挂了，整个应用都没法访问了。</li></ul><p><img src="'+q+'" alt="image-20230112112740131"></p><ul><li><p>所以在现在的企业项目开发当中，最终部署的时候都是以集群的形式来进行部署，也就是同一个项目它会部署多份。比如这个项目我们现在就部署了 3 份。</p></li><li><p>而用户在访问的时候，到底访问这三台其中的哪一台？其实用户在访问的时候，他会访问一台前置的服务器，我们叫负载均衡服务器，我们在后面项目当中会详细讲解。目前大家先有一个印象负载均衡服务器，它的作用就是将前端发起的请求均匀的分发给后面的这三台服务器。</p><p><img src="'+b+'" alt="image-20230112113558810"></p><p>image-20230112113558810</p></li><li><p>此时假如我们通过 session 来进行会话跟踪，可能就会存在这样一个问题。用户打开浏览器要进行登录操作，此时会发起登录请求。登录请求到达负载均衡服务器，将这个请求转给了第一台 Tomcat 服务器。</p><p>Tomcat 服务器接收到请求之后，要获取到会话对象session。获取到会话对象 session 之后，要给浏览器响应数据，最终在给浏览器响应数据的时候，就会携带这么一个 cookie 的名字，就是 JSESSIONID ，下一次再请求的时候，是不是又会将 Cookie 携带到服务端？</p><p>好。此时假如又执行了一次查询操作，要查询部门的数据。这次请求到达负载均衡服务器之后，负载均衡服务器将这次请求转给了第二台 Tomcat 服务器，此时他就要到第二台 Tomcat 服务器当中。根据JSESSIONID 也就是对应的 session 的 ID 值，要找对应的 session 会话对象。</p><p>我想请问在第二台服务器当中有没有这个ID的会话对象 Session， 是没有的。此时是不是就出现问题了？我同一个浏览器发起了 2 次请求，结果获取到的不是同一个会话对象，这就是Session这种会话跟踪方案它的缺点，在服务器集群环境下无法直接使用Session。</p></li></ul></blockquote><p><strong>Session使用</strong> 👇 👇</p><ul><li><p>获取Session</p><p><img src="'+v+`" alt="image-20230112105938545"></p><p>image-20230112105938545</p><p>如果我们现在要基于 Session 来进行会话跟踪，浏览器在第一次请求服务器的时候，我们就可以直接在服务器当中来获取到会话对象Session。如果是第一次请求Session ，会话对象是不存在的，这个时候服务器会自动的创建一个会话对象Session 。而每一个会话对象Session ，它都有一个ID（示意图中Session后面括号中的1，就表示ID），我们称之为 Session 的ID。</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@RestController</span></span>
<span class="line"><span>public class SessionController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping(&quot;/s1&quot;)</span></span>
<span class="line"><span>    public Result session1(HttpSession session){</span></span>
<span class="line"><span>        log.info(&quot;HttpSession-s1: {}&quot;, session.hashCode());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        session.setAttribute(&quot;loginUser&quot;, &quot;tom&quot;); //往session中存储数据</span></span>
<span class="line"><span>        return Result.success();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping(&quot;/s2&quot;)</span></span>
<span class="line"><span>    public Result session2(HttpServletRequest request){</span></span>
<span class="line"><span>        HttpSession session = request.getSession();</span></span>
<span class="line"><span>        log.info(&quot;HttpSession-s2: {}&quot;, session.hashCode());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Object loginUser = session.getAttribute(&quot;loginUser&quot;); //从session中获取数据</span></span>
<span class="line"><span>        log.info(&quot;loginUser: {}&quot;, loginUser);</span></span>
<span class="line"><span>        return Result.success(loginUser);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><p>响应Cookie (JSESSIONID)</p><p><img src="`+S+'" alt="image-20230112110441075"></p><p>image-20230112110441075</p><p>接下来，服务器端在给浏览器响应数据的时候，它会将 Session 的 ID 通过 Cookie 响应给浏览器。其实在响应头当中增加了一个 Set-Cookie 响应头。这个 Set-Cookie 响应头对应的值是不是cookie？ cookie 的名字是固定的 JSESSIONID 代表的服务器端会话对象 Session 的 ID 。浏览器会自动识别这个响应头，然后自动将Cookie存储在浏览器本地。</p></li><li><p>查找Session</p><p><img src="'+k+'" alt="image-20230112101943835"></p><p>image-20230112101943835</p><p>接下来，在后续的每一次请求当中，都会将 Cookie 的数据获取出来，并且携带到服务端。接下来服务器拿到JSESSIONID这个 Cookie 的值，也就是 Session 的ID。拿到 ID 之后，就会从众多的 Session 当中来找到当前请求对应的会话对象Session。</p></li></ul><p><strong>测试流程</strong>👇 👇</p><p>A. 访问 s1 接口，<a href="http://localhost:8080/s1" target="_blank" rel="noreferrer">http://localhost:8080/s1open in new window</a></p><p><img src="'+C+'" alt="image-20230112111004447"></p><p>请求完成之后，在响应头中，就会看到有一个Set-Cookie的响应头，里面响应回来了一个Cookie，就是JSESSIONID，这个就是服务端会话对象 Session 的ID。</p><p>B. 访问 s2 接口，<a href="http://localhost:8080/s2" target="_blank" rel="noreferrer">http://localhost:8080/s2open in new window</a></p><p><img src="'+_+'" alt="image-20230112111137207"></p><p>接下来，在后续的每次请求时，都会将Cookie的值，携带到服务端，那服务端呢，接收到Cookie之后，会自动的根据JSESSIONID的值，找到对应的会话对象Session。</p><p>那经过这两步测试，大家也会看到，在控制台中输出如下日志：</p><p><img src="'+y+'" alt="image-20230112111328117"></p><p>两次请求，获取到的Session会话对象的hashcode是一样的，就说明是同一个会话对象。而且，第一次请求时，往Session会话对象中存储的值，第二次请求时，也获取到了。 那这样，我们就可以通过Session会话对象，在同一个会话的多次请求之间来进行数据共享了。</p><p>开发实际应用</p><ol><li>Cookie和Session在现在的企业开发当中是不是会存在很多的问题 👎 <ol><li>Cookie存储在浏览器，不安全，数据有限</li><li>Session存储在服务器，占内存，不能跨域</li></ol></li><li>在现在的企业开发当中，基本上都会采用第三种方案--令牌技术 👍</li></ol><h3 id="_2-4-会话跟踪方案-令牌技术-🍐-❤️" tabindex="-1">2.4 会话跟踪方案-令牌技术 🍐 ❤️ <a class="header-anchor" href="#_2-4-会话跟踪方案-令牌技术-🍐-❤️" aria-label="Permalink to &quot;2.4 会话跟踪方案-令牌技术 🍐 ❤️&quot;">​</a></h3><p>令牌，其实它就是一个用户身份的标识，看似很高大上，很神秘，其实本质就是一个字符串。</p><p><img src="'+f+'" alt="image-20230112102022634"></p><ol><li><p>如果通过<strong>令牌技术</strong>来跟踪会话，我们就可以在浏览器发起请求。在请求登录接口的时候，如果<strong>登录成功</strong>，我就可以生成一个令牌，<strong>令牌就是用户的合法身份凭证</strong>。接下来我在响应数据的时候，我就可以直接将令牌响应给前端。</p></li><li><p>登录成功后，在前端程序当中接收到令牌之后，就需要将这个<strong>令牌存储起来</strong>。</p><ol><li>可以存储在 cookie 当中</li><li>也可以存储在其他的存储空间(比如：localStorage)当中</li></ol></li><li><p>接下来，<strong>在后续的每一次请求当中</strong>，都需要将令牌携带到服务端。携带到服务端之后，接下来我们就需要来校验令牌的有效性。如果令牌是有效的，就说明用户已经执行了登录操作，如果令牌是无效的，就说明用户之前并未执行登录操作。</p></li></ol><p>此时，如果是在同一次会话的多次请求之间，我们想共享数据，我们就可以将<strong>共享的数据存储在令牌当中</strong>就可以了。</p><p>优缺点</p><ul><li><strong>优点</strong>： <ul><li>支持PC端、移动端 👍</li><li>解决集群环境下的认证问题 👍</li><li>减轻服务器的存储压力（无需在服务器端存储） 👍</li></ul></li><li><strong>缺点</strong>：需要自己实现（包括令牌的生成、令牌的传递、令牌的校验）</li></ul><p><strong>后续的课程会采用令牌技术来解决案例项目当中的会话跟踪问题</strong> 👈</p><p>作业</p><ol><li>🚩 能够流畅的说出Cookie和Session的特点，以及Session和Cookie的关系，以及企业开发中为何使用<strong>令牌技术</strong></li></ol><h3 id="_2-5-jwt令牌-🍐-❤️" tabindex="-1">2.5 JWT令牌 🍐 ❤️ <a class="header-anchor" href="#_2-5-jwt令牌-🍐-❤️" aria-label="Permalink to &quot;2.5 JWT令牌 🍐 ❤️&quot;">​</a></h3><p>JWT令牌</p><p><strong>JWT全称：JSON Web Token</strong> （官网：<a href="https://jwt.io/%EF%BC%89" target="_blank" rel="noreferrer">https://jwt.io/）open in new window</a></p><ul><li><p>定义了一种<strong>简洁的、自包含</strong>的格式，用于在通信双方以json数据格式安全的传输信息。由于数字签名的存在，这些信息是可靠的。</p><blockquote><p>简洁：是指jwt就是一个简单的字符串。可以在请求参数或者是请求头当中直接传递。</p><p>自包含：指的是jwt令牌，看似是一个随机的字符串，但是我们是可以根据自身的需求在jwt令牌中存储自定义的数据内容。如：可以直接在jwt令牌中存储用户的相关信息。</p></blockquote></li></ul><p>JWT的特性</p><p>**简单来讲，jwt就是将原始的json数据格式进行了安全的封装，这样就可以直接基于jwt在通信双方安全的进行信息传输了。**<strong>JWT的组成</strong>： （JWT令牌由三个部分组成，三个部分之间使用英文的点来分割）</p><ul><li><p><strong>第一部分：Header(头）</strong>， 记录令牌类型、签名算法等。 例如：<code>{&quot;alg&quot;:&quot;HS256&quot;,&quot;type&quot;:&quot;JWT&quot;}</code></p></li><li><p><strong>第二部分：Payload(有效载荷）</strong>，携带一些自定义信息、默认信息等。 例如：<code>{&quot;id&quot;:&quot;1&quot;,&quot;username&quot;:&quot;Tom&quot;}</code></p></li><li><p><strong>第三部分：Signature(签名）</strong>，<strong>防止Token被篡改、确保安全性</strong>。将header、payload，并加入指定秘钥，通过指定签名算法计算而来。</p><blockquote><p>签名的目的就是为了防jwt令牌被篡改，而正是因为jwt令牌最后一个部分数字签名的存在，所以整个jwt 令牌是非常安全可靠的。一旦jwt令牌当中任何一个部分、任何一个字符被篡改了，整个令牌在校验的时候都会失败，所以它是非常安全可靠的。</p></blockquote></li></ul><p><img src="'+w+'" alt="image-20230106085442076"></p><p>点击查看JWT是如何将原始的JSON格式数据，转变为字符串的呢？</p><blockquote><p>其实在生成JWT令牌时，会对JSON格式的数据进行一次编码：<strong>进行base64编码</strong></p><p><strong>Base64</strong>🚀：是一种基于64个可打印的字符来表示二进制数据的编码方式。既然能编码，那也就意味着也能解码。所使用的64个字符分别是A到Z、a到z、 0- 9，一个加号，一个斜杠，加起来就是64个字符。任何数据经过base64编码之后，最终就会通过这64个字符来表示。当然还有一个符号，那就是等号。等号它是一个补位的符号</p><p>需要注意的是Base64是编码方式，而不是加密方式。</p></blockquote><p>我们在使用JWT令牌时需要注意：</p><ul><li>JWT校验时使用的<strong>签名秘钥</strong>，必须和生成JWT令牌时使用的<strong>秘钥</strong>是<strong>配套</strong>的。</li><li>如果JWT令牌解析校验时报错，则说明 JWT令牌被篡改 或 失效了，<strong>令牌非法</strong>。</li></ul><p>JWT令牌最典型的应用场景就是登录认证</p><p><img src="'+J+`" alt="image-20230112114319773"></p><ol><li>在浏览器发起请求来执行登录操作，此时会访问登录的接口，如果登录成功之后，我们需要生成一个jwt令牌，将生成的 jwt令牌返回给前端。</li><li>前端拿到jwt令牌之后，会将jwt令牌存储起来。在后续的每一次请求中都会将jwt令牌携带到服务端。</li><li>服务端统一拦截请求之后，先来判断一下这次请求有没有把令牌带过来，如果没有带过来，直接拒绝访问，如果带过来了，还要校验一下令牌是否是有效。如果有效，就直接放行进行请求的处理。</li></ol><p><strong>在JWT登录认证的场景中我们发现，整个流程当中涉及到两步操作：</strong> 👇</p><ol><li><p><a href="http://www.yangeit.cn:21010/javaweb2023/day12.html#_2-6-jwt%E9%9B%86%E6%88%90%E7%99%BB%E9%99%86%E6%A8%A1%E5%9D%97" target="_blank" rel="noreferrer">在登录成功之后，要生成令牌</a> 👈</p><ol><li>导入Jwt依赖</li><li>使用工具类：Jwts 生成JWT字符串</li><li>解析生成的令牌</li><li>测试令牌过期时间</li></ol></li><li><p><a href="http://www.yangeit.cn:21010/javaweb2023/day12.html#_2-7-%E8%BF%87%E6%BB%A4%E5%99%A8Filter" target="_blank" rel="noreferrer">每一次请求当中，要接收令牌并对令牌进行校验</a></p></li></ol><p>点击查看JWT令牌生成和校验示例</p><p>简单介绍了JWT令牌以及JWT令牌的组成之后，接下来我们就来学习基于Java代码如何。</p><h5 id="_1️⃣-首先我们先来实现jwt令牌的生成。要想使用jwt令牌-需要先引入jwt的依赖" tabindex="-1">1️⃣ 首先我们先来实现JWT令牌的生成。要想使用JWT令牌，需要先引入JWT的依赖 <a class="header-anchor" href="#_1️⃣-首先我们先来实现jwt令牌的生成。要想使用jwt令牌-需要先引入jwt的依赖" aria-label="Permalink to &quot;1️⃣ 首先我们先来实现JWT令牌的生成。要想使用JWT令牌，需要先引入JWT的依赖&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;!-- JWT依赖--&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;io.jsonwebtoken&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;jjwt&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;0.9.1&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><blockquote><p>在引入完JWT来赖后，就可以调用工具包中提供的API来完成JWT令牌的生成和校验</p><p>工具类：Jwts</p></blockquote><h5 id="_2️⃣-使用工具类-jwts-生成jwt代码实现" tabindex="-1">2️⃣ 使用工具类：Jwts 生成JWT代码实现 <a class="header-anchor" href="#_2️⃣-使用工具类-jwts-生成jwt代码实现" aria-label="Permalink to &quot;2️⃣ 使用工具类：Jwts 生成JWT代码实现&quot;">​</a></h5><ul><li><strong>第一部分：Header(头）</strong>， 记录令牌类型、签名算法等。 例如：<code>{&quot;alg&quot;:&quot;HS256&quot;,&quot;type&quot;:&quot;JWT&quot;}</code></li><li><strong>第二部分：Payload(有效载荷）</strong>，携带一些自定义信息、默认信息等。 例如：<code>{&quot;id&quot;:&quot;1&quot;,&quot;username&quot;:&quot;Tom&quot;}</code></li><li><strong>第三部分：Signature(签名）</strong>，<strong>防止Token被篡改、确保安全性</strong>。将header、payload，并加入指定秘钥，通过指定签名算法计算而来。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Test</span></span>
<span class="line"><span>public void genJwt(){</span></span>
<span class="line"><span>    // 创建载荷</span></span>
<span class="line"><span>    Map&lt;String,Object&gt; claims = new HashMap&lt;&gt;();</span></span>
<span class="line"><span>    claims.put(&quot;id&quot;,1);</span></span>
<span class="line"><span>    claims.put(&quot;username&quot;,&quot;Tom&quot;);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    String jwt = Jwts.builder()</span></span>
<span class="line"><span>        .setClaims(claims) //自定义内容(载荷)          </span></span>
<span class="line"><span>        .signWith(SignatureAlgorithm.HS256, &quot;itheima&quot;) //签名算法 和秘钥       </span></span>
<span class="line"><span>        .setExpiration(new Date(System.currentTimeMillis() + 24*3600*1000)) //有效期   </span></span>
<span class="line"><span>        .compact();</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    System.out.println(jwt);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>运行测试方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjcyNzI5NzMwfQ.fHi0Ub8npbyt71UqLXDdLyipptLgxBUg_mSuGJtXtBk</span></span></code></pre></div><p>输出的结果就是生成的JWT令牌,，通过英文的点分割对三个部分进行分割，我们可以将生成的令牌复制一下，然后打开JWT的官网，将生成的令牌直接放在Encoded位置，此时就会自动的将令牌解析出来。</p><p><img src="`+I+`" alt="image-20230106190950305"></p><blockquote><p>第一部分解析出来，看到JSON格式的原始数据，所使用的签名算法为HS256。</p><p>第二个部分是我们自定义的数据，之前我们自定义的数据就是id，还有一个exp代表的是我们所设置的过期时间。</p><p>由于前两个部分是base64编码，所以是可以直接解码出来。但最后一个部分并不是base64编码，是经过签名算法计算出来的，所以最后一个部分是不会解析的。</p></blockquote><h5 id="_3️⃣-校验jwt令牌-解析生成的令牌" tabindex="-1">3️⃣ 校验JWT令牌(解析生成的令牌) <a class="header-anchor" href="#_3️⃣-校验jwt令牌-解析生成的令牌" aria-label="Permalink to &quot;3️⃣ 校验JWT令牌(解析生成的令牌)&quot;">​</a></h5><p>实现了JWT令牌的生成，下面我们接着使用Java代码来校验JWT令牌(解析生成的令牌)：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Test</span></span>
<span class="line"><span>public void parseJwt(){</span></span>
<span class="line"><span>    Claims claims = Jwts.parser()</span></span>
<span class="line"><span>        .setSigningKey(&quot;itheima&quot;)//指定签名密钥（必须保证和生成令牌时使用相同的签名密钥）  </span></span>
<span class="line"><span>     .parseClaimsJws(&quot;eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjcyNzI5NzMwfQ.fHi0Ub8npbyt71UqLXDdLyipptLgxBUg_mSuGJtXtBk&quot;)</span></span>
<span class="line"><span>        .getBody();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    System.out.println(claims);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>运行测试方法：</p><blockquote><p>令牌解析后，我们可以看到id和过期时间，如果在解析的过程当中没有报错，就说明解析成功了。</p></blockquote><p>下面我们做一个测试：把令牌header中的数字9变为8，运行测试方法后发现报错：</p><blockquote><p>原header： eyJhbGciOiJIUzI1NiJ9</p><p>修改为： eyJhbGciOiJIUzI1NiJ8</p></blockquote><p><img src="`+F+`" alt="image-20230106205045658"></p><p>结论：篡改令牌中的任何一个字符，在对令牌进行解析时都会报错，所以JWT令牌是非常安全可靠的。</p><h5 id="_4️⃣-测试令牌过期" tabindex="-1">4️⃣ 测试令牌过期 <a class="header-anchor" href="#_4️⃣-测试令牌过期" aria-label="Permalink to &quot;4️⃣ 测试令牌过期&quot;">​</a></h5><p>我们继续测试：修改生成令牌的时指定的过期时间，修改为1分钟</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Test</span></span>
<span class="line"><span>public void genJwt(){</span></span>
<span class="line"><span>    Map&lt;String,Object&gt; claims = new HashMap&lt;&gt;();</span></span>
<span class="line"><span>    claims.put(“id”,1);</span></span>
<span class="line"><span>    claims.put(“username”,“Tom”);</span></span>
<span class="line"><span>    String jwt = Jwts.builder()</span></span>
<span class="line"><span>        .setClaims(claims) //自定义内容(载荷)          </span></span>
<span class="line"><span>        .signWith(SignatureAlgorithm.HS256, “itheima”) //签名算法        </span></span>
<span class="line"><span>        .setExpiration(new Date(System.currentTimeMillis() + 60*1000)) //有效期60秒   </span></span>
<span class="line"><span>        .compact();</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    System.out.println(jwt);</span></span>
<span class="line"><span>    //输出结果：eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjczMDA5NzU0fQ.RcVIR65AkGiax-ID6FjW60eLFH3tPTKdoK7UtE4A1ro</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Test</span></span>
<span class="line"><span>public void parseJwt(){</span></span>
<span class="line"><span>    Claims claims = Jwts.parser()</span></span>
<span class="line"><span>        .setSigningKey(&quot;itheima&quot;)//指定签名密钥</span></span>
<span class="line"><span>.parseClaimsJws(&quot;eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjczMDA5NzU0fQ.RcVIR65AkGiax-ID6FjW60eLFH3tPTKdoK7UtE4A1ro&quot;)</span></span>
<span class="line"><span>        .getBody();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    System.out.println(claims);</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>等待1分钟之后运行测试方法发现也报错了，说明：JWT令牌过期后，令牌就失效了，解析的为非法令牌。</p></blockquote><h3 id="_2-6-jwt集成登陆模块-✏️" tabindex="-1">2.6 JWT集成登陆模块 ✏️ <a class="header-anchor" href="#_2-6-jwt集成登陆模块-✏️" aria-label="Permalink to &quot;2.6 JWT集成登陆模块 ✏️&quot;">​</a></h3><p>将令牌技术集成到登录接口中</p><p>JWT令牌的生成和校验的基本操作我们已经学习完了，接下来我们就需要在案例当中通过JWT令牌技术来跟踪会话。具体的思路我们前面已经分析过了，<strong>主要就是两步操作：</strong> 👇 👇</p><ol><li><strong>生成令牌</strong><ul><li>在登录成功之后来生成一个JWT令牌，并且把这个令牌直接返回给前端 👈</li></ul></li><li><strong>校验令牌</strong><ul><li>拦截前端请求，从请求中获取到令牌，对令牌进行解析校验</li></ul></li></ol><p>登录接口</p><ul><li><p>响应数据</p><ul><li>参数格式：application/json</li><li>参数说明：</li></ul><table><thead><tr><th>名称</th><th>类型</th><th>是否必须</th><th>默认值</th><th>备注</th><th>其他信息</th></tr></thead><tbody><tr><td>code</td><td>number</td><td>必须</td><td></td><td>响应码, 1 成功 ; 0 失败</td><td></td></tr><tr><td>msg</td><td>string</td><td>非必须</td><td></td><td>提示信息</td><td></td></tr><tr><td>data</td><td>string</td><td>必须</td><td></td><td>返回的数据 , jwt令牌</td><td></td></tr></tbody></table><ul><li>响应数据样例：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;code&quot;: 1,</span></span>
<span class="line"><span>  &quot;msg&quot;: &quot;success&quot;,</span></span>
<span class="line"><span>  &quot;data&quot;: &quot;eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoi6YeR5bq4IiwiaWQiOjEsInVzZXJuYW1lIjoiamlueW9uZyIsImV4cCI6MTY2MjIwNzA0OH0.KkUc_CXJZJ8Dd063eImx4H9Ojfrr6XMJ-yVzaWCVZCo&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p>备注说明</p><p>用户登录成功后，系统会自动下发JWT令牌，然后在后续的每次请求中，都需要在请求头header中携带到服务端，请求头的名称为 token ，值为 登录时下发的JWT令牌。</p><p>如果检测到用户未登录，则会返回如下固定错误信息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>&quot;code&quot;: 0,</span></span>
<span class="line"><span>&quot;msg&quot;: &quot;NOT_LOGIN&quot;,</span></span>
<span class="line"><span>&quot;data&quot;: null</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ul><blockquote><p>解读完接口文档中的描述了，目前我们先来完成令牌的生成和令牌的下发，我们只需要生成一个令牌返回给前端就可以了。</p></blockquote><p>实现步骤</p><ol><li>必须先完成登陆功能（第一个功能)</li><li>引入JWT工具类 <ul><li>在项目工程下创建com.itheima.utils包，并把提供JWT工具类复制到该包下</li></ul></li><li>登录完成后，调用工具类生成JWT令牌并返回</li></ol><p><strong>JWT工具类</strong></p><blockquote><p>util包中</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class JwtUtils {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static String signKey = &quot;itheima&quot;;//签名密钥</span></span>
<span class="line"><span>    private static Long expire = 43200000L; //有效时间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 生成JWT令牌</span></span>
<span class="line"><span>     * @param claims JWT第二部分负载 payload 中存储的内容</span></span>
<span class="line"><span>     * @return</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public static String generateJwt(Map&lt;String, Object&gt; claims){</span></span>
<span class="line"><span>        String jwt = Jwts.builder()</span></span>
<span class="line"><span>                .addClaims(claims)//自定义信息（有效载荷）</span></span>
<span class="line"><span>                .signWith(SignatureAlgorithm.HS256, signKey)//签名算法（头部）</span></span>
<span class="line"><span>                .setExpiration(new Date(System.currentTimeMillis() + expire))//过期时间</span></span>
<span class="line"><span>                .compact();</span></span>
<span class="line"><span>        return jwt;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 解析JWT令牌</span></span>
<span class="line"><span>     * @param jwt JWT令牌</span></span>
<span class="line"><span>     * @return JWT第二部分负载 payload 中存储的内容</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public static Claims parseJWT(String jwt){</span></span>
<span class="line"><span>        Claims claims = Jwts.parser()</span></span>
<span class="line"><span>                .setSigningKey(signKey)//指定签名密钥</span></span>
<span class="line"><span>                .parseClaimsJws(jwt)//指定令牌Token</span></span>
<span class="line"><span>                .getBody();</span></span>
<span class="line"><span>        return claims;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>登录成功，生成JWT令牌并返回</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>public class LoginController {</span></span>
<span class="line"><span>    //依赖业务层对象</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private EmpService empService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PostMapping(&quot;/login&quot;)</span></span>
<span class="line"><span>    public Result login(@RequestBody Emp emp) {</span></span>
<span class="line"><span>        //调用业务层：登录功能</span></span>
<span class="line"><span>        Emp loginEmp = empService.login(emp);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //判断：登录用户是否存在</span></span>
<span class="line"><span>        if(loginEmp !=null ){</span></span>
<span class="line"><span>            //自定义信息</span></span>
<span class="line"><span>            Map&lt;String , Object&gt; claims = new HashMap&lt;&gt;();</span></span>
<span class="line"><span>            claims.put(&quot;id&quot;, loginEmp.getId());</span></span>
<span class="line"><span>            claims.put(&quot;username&quot;,loginEmp.getUsername());</span></span>
<span class="line"><span>            claims.put(&quot;name&quot;,loginEmp.getName());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //使用JWT工具类，生成身份令牌</span></span>
<span class="line"><span>            String token = JwtUtils.generateJwt(claims);</span></span>
<span class="line"><span>            return Result.success(token);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return Result.error(&quot;用户名或密码错误&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重启服务，打开postman测试登录接口：</p><p><img src="`+j+'" alt="image-20230106212805480"></p><p>打开浏览器完成前后端联调操作：利用开发者工具，抓取一下网络请求</p><p><img src="'+T+'" alt="image-20230106213419461"></p><blockquote><p>登录请求完成后，可以看到JWT令牌已经响应给了前端，此时前端就会将JWT令牌存储在浏览器本地。</p></blockquote><p>作业</p><ol><li>🚩 完成上述登录逻辑后，查看资料和笔记，找到存在浏览器中的令牌位置，以及观察每次请求是怎样携带令牌的</li></ol><h3 id="_2-7-过滤器filter-🍐" tabindex="-1">2.7 过滤器Filter 🍐 <a class="header-anchor" href="#_2-7-过滤器filter-🍐" aria-label="Permalink to &quot;2.7 过滤器Filter 🍐&quot;">​</a></h3><p>过滤器----熟悉定义以及代码验证</p><ul><li><strong>Filter表示过滤器</strong>，是 JavaWeb三大组件(Servlet、Filter、Listener)之一。</li><li>过滤器可以把<strong>对资源的请求拦截下来</strong>，从而实现一些特殊的功能 <ul><li><strong>使用了过滤器之后，要想访问web服务器上的资源，必须先经过滤器，过滤器处理完毕之后，才可以访问对应的资源</strong>。</li></ul></li><li>过滤器一般完成一些通用的操作，比如：登录校验、统一编码处理、敏感字符处理等。</li></ul><p><img src="'+W+`" alt="image-20230112120955145"></p><p>过滤器的基本使用操作</p><ul><li>第1步，定义过滤器 ：1.定义一个类，实现 Filter 接口，并重写其所有方法。</li><li>第2步，配置过滤器：Filter类上加 @WebFilter 注解，配置拦截资源的路径。引导类上加 @ServletComponentScan 开启Servlet组件支持。</li></ul><p><strong>定义过滤器</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//定义一个类，实现一个标准的Filter过滤器的接口</span></span>
<span class="line"><span>public class DemoFilter implements Filter {</span></span>
<span class="line"><span>    @Override //初始化方法, 只调用一次</span></span>
<span class="line"><span>    public void init(FilterConfig filterConfig) throws ServletException {</span></span>
<span class="line"><span>        System.out.println(&quot;init 初始化方法执行了&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override //拦截到请求之后调用, 调用多次</span></span>
<span class="line"><span>    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {</span></span>
<span class="line"><span>        System.out.println(&quot;Demo 拦截到了请求...放行前逻辑&quot;);</span></span>
<span class="line"><span>        //放行</span></span>
<span class="line"><span>        chain.doFilter(request,response);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override //销毁方法, 只调用一次</span></span>
<span class="line"><span>    public void destroy() {</span></span>
<span class="line"><span>        System.out.println(&quot;destroy 销毁方法执行了&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><ul><li><p>init方法：过滤器的初始化方法。在web服务器启动的时候会自动的创建Filter过滤器对象，在创建过滤器对象的时候会自动调用init初始化方法，这个方法只会被调用一次。</p></li><li><p>doFilter方法：这个方法是在每一次拦截到请求之后都会被调用，所以这个方法是会被调用多次的，每拦截到一次请求就会调用一次doFilter()方法。</p></li><li><p>destroy方法： 是销毁的方法。当我们关闭服务器的时候，它会自动的调用销毁方法destroy，而这个销毁方法也只会被调用一次。</p></li></ul></blockquote><p>在定义完Filter之后，<strong>Filter其实并不会生效</strong>，还需要完成Filter的配置，Filter的配置非常简单，只需要在Filter类上添加一个注解：@WebFilter ，并指定属性<strong>urlPatterns</strong>，通过这个属性指定过滤器要拦截哪些请求</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@WebFilter(urlPatterns = &quot;/*&quot;) //配置过滤器要拦截的请求路径（ /* 表示拦截浏览器的所有请求 ）</span></span>
<span class="line"><span>public class DemoFilter implements Filter {</span></span>
<span class="line"><span>    @Override //初始化方法, 只调用一次</span></span>
<span class="line"><span>    public void init(FilterConfig filterConfig) throws ServletException {</span></span>
<span class="line"><span>        System.out.println(&quot;init 初始化方法执行了&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override //拦截到请求之后调用, 调用多次</span></span>
<span class="line"><span>    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {</span></span>
<span class="line"><span>        System.out.println(&quot;Demo 拦截到了请求...放行前逻辑&quot;);</span></span>
<span class="line"><span>        //放行</span></span>
<span class="line"><span>        chain.doFilter(request,response);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override //销毁方法, 只调用一次</span></span>
<span class="line"><span>    public void destroy() {</span></span>
<span class="line"><span>        System.out.println(&quot;destroy 销毁方法执行了&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>当我们在Filter类上面加了@WebFilter注解之后，接下来我们还需要在启动类上面加上一个注解@ServletComponentScan ，通过这个@ServletComponentScan注解来开启SpringBoot项目对于Servlet组件的支持。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@ServletComponentScan</span></span>
<span class="line"><span>@SpringBootApplication</span></span>
<span class="line"><span>public class TliasWebManagementApplication {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        SpringApplication.run(TliasWebManagementApplication.class, args);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重新启动服务，打开浏览器，执行部门管理的请求，可以看到控制台输出了过滤器中的内容：</p><p><img src="`+R+'" alt="image-20230112121205697"></p><blockquote><p>注意事项：</p><p>在过滤器Filter中，如果不执行放行操作，将无法访问后面的资源。 放行操作：chain.doFilter(request, response);</p></blockquote><p>恭喜你完成 Filter过滤器的基本使用 🎉，下面我们将学习Filter过滤器在使用过程中的一些细节。</p><p>过滤器----了解过滤器路径配置和执行流程</p><p><strong>学习过滤器Filter在使用中的一些细节:</strong></p><ol><li>过滤器的执行流程</li><li>过滤器的拦截路径配置</li><li>过滤器链</li></ol><h5 id="_1️⃣-执行流程-🍐" tabindex="-1">1️⃣ 执行流程 🍐 <a class="header-anchor" href="#_1️⃣-执行流程-🍐" aria-label="Permalink to &quot;1️⃣ 执行流程 🍐&quot;">​</a></h5><p>首先我们先来看下过滤器的执行流程：</p><p><img src="'+O+`" alt="image-20230106222559935"></p><p>过滤器当中我们拦截到了请求之后，如果希望继续访问后面的web资源，就要执行放行操作，放行就是调用 FilterChain对象当中的doFilter()方法，在调用doFilter()这个方法之前所编写的代码属于放行之前的逻辑。</p><p>在放行后访问完 web 资源之后还会回到过滤器当中，回到过滤器之后如有需求还可以执行放行之后的逻辑，放行之后的逻辑我们写在doFilter()这行代码之后。</p><h5 id="_2️⃣-拦截路径-🚀" tabindex="-1">2️⃣ 拦截路径 🚀 <a class="header-anchor" href="#_2️⃣-拦截路径-🚀" aria-label="Permalink to &quot;2️⃣ 拦截路径 🚀&quot;">​</a></h5><p>执行流程我们搞清楚之后，接下来再来介绍一下过滤器的拦截路径，Filter可以根据需求，配置不同的拦截资源路径：</p><table><thead><tr><th>拦截路径</th><th>urlPatterns值</th><th>含义</th></tr></thead><tbody><tr><td>拦截具体路径</td><td>/login</td><td>只有访问 /login 路径时，才会被拦截</td></tr><tr><td>目录拦截</td><td>/emps/*</td><td>访问/emps下的所有资源，都会被拦截</td></tr><tr><td>拦截所有</td><td>/*</td><td>访问所有资源，都会被拦截</td></tr></tbody></table><p>下面我们来测试&quot;拦截所有 &quot;：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@WebFilter(urlPatterns = &quot;/*&quot;) </span></span>
<span class="line"><span>public class DemoFilter implements Filter {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @Override //初始化方法, 只调用一次</span></span>
<span class="line"><span>    public void init(FilterConfig filterConfig) throws ServletException {</span></span>
<span class="line"><span>        System.out.println(&quot;init 初始化方法执行了&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        System.out.println(&quot;DemoFilter   放行前逻辑.....&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //放行请求</span></span>
<span class="line"><span>        filterChain.doFilter(servletRequest,servletResponse);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.out.println(&quot;DemoFilter   放行后逻辑.....&quot;);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override //销毁方法, 只调用一次</span></span>
<span class="line"><span>    public void destroy() {</span></span>
<span class="line"><span>        System.out.println(&quot;destroy 销毁方法执行了&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+x+`" alt="image-20230106224322625"></p><p>下面我们来测试&quot;拦截具体路径 &quot;：</p><blockquote><p>在filter包下创建DemoFilter</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@WebFilter(urlPatterns = &quot;/login&quot;)  //拦截/login具体路径</span></span>
<span class="line"><span>public class DemoFilter implements Filter {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {</span></span>
<span class="line"><span>        System.out.println(&quot;DemoFilter   放行前逻辑.....&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //放行请求</span></span>
<span class="line"><span>        filterChain.doFilter(servletRequest,servletResponse);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.out.println(&quot;DemoFilter   放行后逻辑.....&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void init(FilterConfig filterConfig) throws ServletException {</span></span>
<span class="line"><span>        Filter.super.init(filterConfig);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void destroy() {</span></span>
<span class="line"><span>        Filter.super.destroy();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>测试1：访问部门管理请求，发现过滤器没有拦截请求</p><p><img src="`+E+'" alt="image-20230106225658525"></p><p><img src="'+P+'" alt="image-20230106230332510"></p><p>测试2：访问登录请求/login，发现过滤器拦截请求</p><p><img src="'+D+`" alt="image-20230106230520229"></p><p>下面我们来测试目录拦截：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@WebFilter(urlPatterns = &quot;/depts/*&quot;) //拦截所有以/depts开头，后面是什么无所谓</span></span>
<span class="line"><span>public class DemoFilter implements Filter {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {</span></span>
<span class="line"><span>        System.out.println(&quot;DemoFilter   放行前逻辑.....&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //放行请求</span></span>
<span class="line"><span>        filterChain.doFilter(servletRequest,servletResponse);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.out.println(&quot;DemoFilter   放行后逻辑.....&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void init(FilterConfig filterConfig) throws ServletException {</span></span>
<span class="line"><span>        Filter.super.init(filterConfig);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void destroy() {</span></span>
<span class="line"><span>        Filter.super.destroy();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>测试1：访问部门管理请求，发现过滤器拦截了请求</p><p><img src="`+H+'" alt="image-20230106231144348"></p><p>测试2：访问登录请求/login，发现过滤器没有拦截请求</p><p><img src="'+N+'" alt="image-20230106231220802"></p><h5 id="_3️⃣-过滤器链-🚀" tabindex="-1">3️⃣ 过滤器链 🚀 <a class="header-anchor" href="#_3️⃣-过滤器链-🚀" aria-label="Permalink to &quot;3️⃣ 过滤器链 🚀&quot;">​</a></h5><p><strong>什么是过滤器链呢？所谓过滤器链指的是在一个web应用程序当中，可以配置多个过滤器，多个过滤器就形成了一个过滤器链。</strong></p><p><img src="'+A+'" alt="image-20230107084730393"></p><p>比如：在我们web服务器当中，定义了两个过滤器，这两个过滤器就形成了一个过滤器链。</p><p>而这个链上的过滤器在执行的时候会一个一个的执行，会先执行第一个Filter，放行之后再来执行第二个Filter，如果执行到了最后一个过滤器放行之后，才会访问对应的web资源。</p><p>访问完web资源之后，按照我们刚才所介绍的过滤器的执行流程，还会回到过滤器当中来执行过滤器放行后的逻辑，而在执行放行后的逻辑的时候，顺序是反着的。</p><p>先要执行过滤器2放行之后的逻辑，再来执行过滤器1放行之后的逻辑，最后在给浏览器响应数据。</p><p>以上就是当我们在web应用当中配置了多个过滤器，形成了这样一个过滤器链以及过滤器链的执行顺序。下面我们通过idea来验证下过滤器链。</p><p>验证步骤：</p><ol><li>在filter包下再来新建一个Filter过滤器类：AbcFilter</li><li>在AbcFilter过滤器中编写放行前和放行后逻辑</li><li>配置AbcFilter过滤器拦截请求路径为：/*</li><li>重启SpringBoot服务，查看DemoFilter、AbcFilter的执行日志</li></ol><p><img src="'+B+`" alt="image-20230107085552176"></p><p><strong>AbcFilter过滤器</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@WebFilter(urlPatterns = &quot;/*&quot;)</span></span>
<span class="line"><span>public class AbcFilter implements Filter {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {</span></span>
<span class="line"><span>        System.out.println(&quot;Abc 拦截到了请求... 放行前逻辑&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //放行</span></span>
<span class="line"><span>        chain.doFilter(request,response);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.out.println(&quot;Abc 拦截到了请求... 放行后逻辑&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>DemoFilter过滤器</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@WebFilter(urlPatterns = &quot;/*&quot;) </span></span>
<span class="line"><span>public class DemoFilter implements Filter {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {</span></span>
<span class="line"><span>        System.out.println(&quot;DemoFilter   放行前逻辑.....&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //放行请求</span></span>
<span class="line"><span>        filterChain.doFilter(servletRequest,servletResponse);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.out.println(&quot;DemoFilter   放行后逻辑.....&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>打开浏览器访问登录接口：</p><p><img src="`+M+`" alt="image-20230107090425999"></p><p>通过控制台日志的输出，大家发现AbcFilter先执行DemoFilter后执行，这是为什么呢？</p><p>其实是和过滤器的类名有关系。以注解方式配置的Filter过滤器，它的执行优先级是按时过滤器类名的自动排序确定的，类名排名越靠前，优先级越高。</p><p>假如我们想让DemoFilter先执行，怎么办呢？答案就是修改类名。</p><p>测试：修改AbcFilter类名为XbcFilter，运行程序查看控制台日志</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@WebFilter(urlPatterns = &quot;/*&quot;)</span></span>
<span class="line"><span>public class XbcFilter implements Filter {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {</span></span>
<span class="line"><span>        System.out.println(&quot;Xbc 拦截到了请求...放行前逻辑&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //放行</span></span>
<span class="line"><span>        chain.doFilter(request,response);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.out.println(&quot;Xbc 拦截到了请求...放行后逻辑&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+L+'" alt="image-20230107093757050"></p><p>到此，关于过滤器的使用细节，我们已经全部介绍完毕了。🎉</p><h4 id="_2-4-3-登录校验-filter-✏️" tabindex="-1">2.4.3 登录校验-Filter ✏️ <a class="header-anchor" href="#_2-4-3-登录校验-filter-✏️" aria-label="Permalink to &quot;2.4.3 登录校验-Filter ✏️&quot;">​</a></h4><p>问题</p><ol><li>所有的请求，拦截到了之后，都需要校验令牌吗？</li><li>拦截到请求后，什么情况下才可以放行，执行业务操作？</li></ol><p>点击查看</p><ul><li>答案1：<strong>登录请求例外</strong></li><li>答案2：<strong>有令牌，且令牌校验通过(合法)；否则都返回未登录错误结果</strong></li></ul><p>登录校验-Filter流程</p><h5 id="具体流程" tabindex="-1">具体流程 <a class="header-anchor" href="#具体流程" aria-label="Permalink to &quot;具体流程&quot;">​</a></h5><p>Yes</p><p>No</p><p>客户端</p><p>服务端</p><p>产生JWT</p><p>发送请求</p><p>校验JWT</p><p>JWT有效</p><p>继续处理请求</p><p>返回错误</p><p>我们要完成登录校验，主要是利用Filter过滤器实现，而Filter过滤器的流程步骤：</p><p>操作步骤</p><ol><li>获取请求url</li><li>判断请求url中是否包含login，如果包含，说明是登录操作，放行</li><li>获取请求头中的令牌（token）</li><li>判断令牌是否存在，如果不存在，返回错误结果（未登录）</li><li>解析token，如果解析失败，返回错误结果（未登录）</li><li>放行</li></ol><p><img src="'+U+`" alt="image-20230112122130564"></p><p>登录接口</p><ul><li>基本信息</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>请求路径：/login</span></span>
<span class="line"><span>请求方式：POST</span></span>
<span class="line"><span>接口描述：该接口用于员工登录Tlias智能学习辅助系统，登录完毕后，系统下发JWT令牌。</span></span></code></pre></div><ul><li><p>请求参数</p><ul><li>参数格式：application/json</li><li>参数说明： | 名称 | 类型 | 是否必须 | 备注 | | -------- | ------ | -------- | ------ | | username | string | 必须 | 用户名 | | password | string | 必须 | 密码 |</li><li>请求数据样例：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>&quot;username&quot;: &quot;jinyong&quot;,</span></span>
<span class="line"><span>    &quot;password&quot;: &quot;123456&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p>响应数据</p><ul><li>参数格式：application/json</li><li>参数说明： | 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 | | ---- | ------ | -------- | ------ | ------------------------ | -------- | | code | number | 必须 | | 响应码, 1 成功 ; 0 失败 | | | msg | string | 非必须 | | 提示信息 | | | data | string | 必须 | | 返回的数据 , jwt令牌 | |</li><li>响应数据样例：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;code&quot;: 1,</span></span>
<span class="line"><span>  &quot;msg&quot;: &quot;success&quot;,</span></span>
<span class="line"><span>  &quot;data&quot;: &quot;eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoi6YeR5bq4IiwiaWQiOjEsInVzZXJuYW1lIjoiamlueW9uZyIsImV4cCI6MTY2MjIwNzA0OH0.KkUc_CXJZJ8Dd063eImx4H9Ojfrr6XMJ-yVzaWCVZCo&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p>备注说明</p><p>用户登录成功后，系统会自动下发JWT令牌，然后在后续的每次请求中，都需要在请求头header中携带到服务端，请求头的名称为 token ，值为 登录时下发的JWT令牌。</p><p>如果检测到用户未登录，则会返回如下固定错误信息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>&quot;code&quot;: 0,</span></span>
<span class="line"><span>&quot;msg&quot;: &quot;NOT_LOGIN&quot;,</span></span>
<span class="line"><span>&quot;data&quot;: null</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ul><h5 id="代码实现" tabindex="-1">代码实现 <a class="header-anchor" href="#代码实现" aria-label="Permalink to &quot;代码实现&quot;">​</a></h5><p>分析清楚了以上的问题后，我们就参照接口文档来开发登录功能了，登录接口描述如下：</p><p>导入第三方json处理的工具包fastjson。我们要想使用，需要引入如下依赖：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;fastjson&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;1.2.76&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><p><strong>登录校验过滤器：LoginCheckFilter</strong></p><blockquote><p>controller.fitler包中</p></blockquote><ol><li>获得请求和响应对象（获得请求头信息和设置响应信息）</li><li>通过请求获得请求url</li><li>判断是否是登录请求，如果是，则放行</li><li>获取请求头中的令牌token</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@WebFilter(urlPatterns = &quot;/*&quot;) //拦截所有请求</span></span>
<span class="line"><span>public class LoginCheckFilter implements Filter {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain chain) throws IOException, ServletException {</span></span>
<span class="line"><span>        //前置：强制转换为http协议的请求对象、响应对象 （转换原因：要使用子类中特有方法）</span></span>
<span class="line"><span>        HttpServletRequest request = (HttpServletRequest) servletRequest;</span></span>
<span class="line"><span>        HttpServletResponse response = (HttpServletResponse) servletResponse;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //1.获取请求url</span></span>
<span class="line"><span>        String url = request.getRequestURL().toString();</span></span>
<span class="line"><span>        log.info(&quot;请求路径：{}&quot;, url); //请求路径：http://localhost:8080/login</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //2.判断请求url中是否包含login，如果包含，说明是登录操作，放行</span></span>
<span class="line"><span>        if(url.contains(&quot;/login&quot;)){</span></span>
<span class="line"><span>            chain.doFilter(request, response);//放行请求</span></span>
<span class="line"><span>            return;//结束当前方法的执行</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //3.获取请求头中的令牌（token）</span></span>
<span class="line"><span>        String token = request.getHeader(&quot;token&quot;);</span></span>
<span class="line"><span>        log.info(&quot;从请求头中获取的令牌：{}&quot;,token);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //4.判断令牌是否存在，如果不存在，返回错误结果（未登录）</span></span>
<span class="line"><span>        if(!StringUtils.hasLength(token)){</span></span>
<span class="line"><span>            log.info(&quot;Token不存在&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            Result responseResult = Result.error(&quot;NOT_LOGIN&quot;);</span></span>
<span class="line"><span>            //把Result对象转换为JSON格式字符串 (fastjson是阿里巴巴提供的用于实现对象和json的转换工具类)</span></span>
<span class="line"><span>            String json = JSONObject.toJSONString(responseResult);</span></span>
<span class="line"><span>            response.setContentType(&quot;application/json;charset=utf-8&quot;);</span></span>
<span class="line"><span>            //响应</span></span>
<span class="line"><span>            response.getWriter().write(json);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //5.解析token，如果解析失败，返回错误结果（未登录）</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            JwtUtils.parseJWT(token);</span></span>
<span class="line"><span>        }catch (Exception e){</span></span>
<span class="line"><span>            log.info(&quot;令牌解析失败!&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            Result responseResult = Result.error(&quot;NOT_LOGIN&quot;);</span></span>
<span class="line"><span>            //把Result对象转换为JSON格式字符串 (fastjson是阿里巴巴提供的用于实现对象和json的转换工具类)</span></span>
<span class="line"><span>            String json = JSONObject.toJSONString(responseResult);</span></span>
<span class="line"><span>            response.setContentType(&quot;application/json;charset=utf-8&quot;);</span></span>
<span class="line"><span>            //响应</span></span>
<span class="line"><span>            response.getWriter().write(json);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //6.放行</span></span>
<span class="line"><span>        chain.doFilter(request, response);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to &quot;测试&quot;">​</a></h5><p>登录校验的过滤器我们编写完成了，接下来我们就可以重新启动服务来做一个测试：</p><blockquote><p>测试前先把之前所编写的测试使用的过滤器，暂时注释掉。直接将@WebFilter注解给注释掉即可。</p></blockquote><ul><li><p>测试1：未登录是否可以访问部门管理页面</p><p>首先关闭浏览器，重新打开浏览器，在地址栏中输入：<a href="http://localhost:9528/#/system/dept" target="_blank" rel="noreferrer">http://localhost:9528/#/system/deptopen in new window</a></p><p>由于用户没有登录，登录校验过滤器返回错误信息，前端页面根据返回的错误信息结果，自动跳转到登录页面了</p><p><img src="`+s+'" alt="image-20230105085212629"></p><p>image-20230105085212629</p></li><li><p>测试2：先进行登录操作，再访问部门管理页面</p><p>登录校验成功之后，可以正常访问相关业务操作页面</p><p><img src="'+n+`" alt="image-20230107102922550"></p><p>image-20230107102922550</p></li></ul><p>作业</p><ol><li>🚩 能够说出SpringBoot工程中使用过滤器涉及到哪几个注解？分别的作用？以及通过流程图绘制出登录案例中的过滤器的业务流程。</li></ol><h3 id="_2-8-拦截器interceptor-🍐" tabindex="-1">2.8 拦截器Interceptor 🍐 <a class="header-anchor" href="#_2-8-拦截器interceptor-🍐" aria-label="Permalink to &quot;2.8 拦截器Interceptor 🍐&quot;">​</a></h3><ul><li>目标1🎯 ：了解什么是拦截器，并通过快速入门程序上手拦截器 🍐</li><li>目标2🎯 ：了解拦截器的使用细节 🍐</li><li>目标3🎯 ：通过拦截器Interceptor完成登录校验功能 ✏️</li></ul><h4 id="_2-5-1-快速入门" tabindex="-1">2.5.1 快速入门 <a class="header-anchor" href="#_2-5-1-快速入门" aria-label="Permalink to &quot;2.5.1 快速入门&quot;">​</a></h4><p>问题</p><ol><li>什么是拦截器？拦截器的作用是什么</li></ol><p>点击查看</p><p><strong>拦截器：</strong></p><ul><li>是一种<strong>动态拦截方法</strong>调用的机制，类似于过滤器。</li><li>拦截器是Spring框架中提供的，用来<strong>动态拦截控制器方法的执行</strong>。</li></ul><p><strong>拦截器的作用：</strong></p><ul><li>拦截请求，在<strong>指定方法调用前后</strong>，根据业务需要执行预先设定的代码。</li></ul><p>在拦截器当中，我们通常也是做一些通用性的操作，比如：我们可以通过拦截器来拦截前端发起的请求，将登录校验的逻辑全部编写在拦截器当中。在校验的过程当中，如发现用户登录了(携带JWT令牌且是合法令牌)，就可以直接放行，去访问spring当中的资源。如果校验时发现并没有登录或是非法令牌，就可以直接给前端响应未登录的错误信息。</p><p>集成步骤</p><ol><li>自定义拦截器：实现HandlerInterceptor接口，并重写其所有方法</li><li>注册配置拦截器 ：创建一个config包，创建一个类，实现WebMvcConfigurer接口，并重写addInterceptors方法 <ol><li>配置拦截器的拦截路径</li></ol></li></ol><p><strong>自定义拦截器</strong>：实现HandlerInterceptor接口，并重写其所有方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//自定义拦截器</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class LoginCheckInterceptor implements HandlerInterceptor {</span></span>
<span class="line"><span>    //目标资源方法执行前执行。 返回true：放行    返回false：不放行</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {</span></span>
<span class="line"><span>        System.out.println(&quot;preHandle .... &quot;);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        return true; //true表示放行</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //目标资源方法执行后执行</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {</span></span>
<span class="line"><span>        System.out.println(&quot;postHandle ... &quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //视图渲染完毕后执行，最后执行</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {</span></span>
<span class="line"><span>        System.out.println(&quot;afterCompletion .... &quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>注意：</p><p>preHandle方法：目标资源方法执行前执行。 返回true：放行 返回false：不放行</p><p>postHandle方法：目标资源方法执行后执行</p><p>afterCompletion方法：视图渲染完毕后执行，最后执行</p></blockquote><p><strong>注册配置拦截器</strong> ：实现WebMvcConfigurer接口，并重写addInterceptors方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration  </span></span>
<span class="line"><span>public class WebConfig implements WebMvcConfigurer {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //自定义的拦截器对象</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private LoginCheckInterceptor loginCheckInterceptor;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void addInterceptors(InterceptorRegistry registry) {</span></span>
<span class="line"><span>       //注册自定义拦截器对象</span></span>
<span class="line"><span>        registry.addInterceptor(loginCheckInterceptor).addPathPatterns(&quot;/**&quot;);//设置拦截器拦截的请求路径（ /** 表示拦截所有请求）</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重新启动SpringBoot服务，打开postman测试：</p><p><img src="`+z+'" alt="image-20230107105224741"></p><p><img src="'+V+'" alt="image-20230107105415120"></p><p>接下来我们再来做一个测试：将拦截器中返回值改为false</p><p>使用postman，再次点击send发送请求后，没有响应数据，说明请求被拦截了没有放行</p><p><img src="'+X+`" alt="image-20230107105815511"></p><h4 id="_2-5-2-interceptor详解" tabindex="-1">2.5.2 Interceptor详解 <a class="header-anchor" href="#_2-5-2-interceptor详解" aria-label="Permalink to &quot;2.5.2 Interceptor详解&quot;">​</a></h4><p>问题</p><ol><li>拦截器的拦截路径<code>/**</code>和<code>/*</code>有什么区别?</li><li>拦截器和过滤器同时存在，哪个先执行</li></ol><p>点击查看答案1：</p><table><thead><tr><th>拦截路径</th><th>含义</th><th>举例</th></tr></thead><tbody><tr><td>/*</td><td>一级路径</td><td>能匹配/depts，/emps，/login，不能匹配 /depts/1</td></tr><tr><td>/**</td><td>任意级路径</td><td>能匹配/depts，/depts/1，/depts/1/2</td></tr><tr><td>/depts/*</td><td>/depts下的一级路径</td><td>能匹配/depts/1，不能匹配/depts/1/2，/depts</td></tr><tr><td>/depts/**</td><td>/depts下的任意级路径</td><td>能匹配/depts，/depts/1，/depts/1/2，不能匹配/emps/1</td></tr></tbody></table><p>下面主要来演示下<code>/**</code>与<code>/*</code>的区别：</p><ul><li>修改拦截器配置，把拦截路径设置为<code>/*</code></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration </span></span>
<span class="line"><span>public class WebConfig implements WebMvcConfigurer {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //拦截器对象</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private LoginCheckInterceptor loginCheckInterceptor;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void addInterceptors(InterceptorRegistry registry) {</span></span>
<span class="line"><span>       //注册自定义拦截器对象</span></span>
<span class="line"><span>        registry.addInterceptor(loginCheckInterceptor)</span></span>
<span class="line"><span>                .addPathPatterns(&quot;/*&quot;)</span></span>
<span class="line"><span>                .excludePathPatterns(&quot;/login&quot;);//设置不拦截的请求路径</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>使用postman测试：<a href="http://localhost:8080/emps/1" target="_blank" rel="noreferrer">http://localhost:8080/emps/1open in new window</a></p><p><img src="`+Z+'" alt="image-20230107111525558"></p><p>控制台没有输出拦截器中的日志信息，说明<code>/*</code>没有匹配到拦截路径<code>/emp/1</code> 。</p><p><img src="'+G+'" alt="image-20230107111812963"></p><p>答案2：</p><ol><li>先执行过滤器，再执行拦截器 <img src="'+K+`" alt="image-20210805175445422"></li></ol><h5 id="_2-5-2-1-拦截路径" tabindex="-1">2.5.2.1 拦截路径 <a class="header-anchor" href="#_2-5-2-1-拦截路径" aria-label="Permalink to &quot;2.5.2.1 拦截路径&quot;">​</a></h5><p>首先我们先来看拦截器的拦截路径的配置，在注册配置拦截器的时候，我们要指定拦截器的拦截路径，通过<code>addPathPatterns(&quot;要拦截路径&quot;)</code>方法，就可以指定要拦截哪些资源。</p><p>在入门程序中我们配置的是<code>/**</code>，表示拦截所有资源，而在配置拦截器时，不仅可以指定要拦截哪些资源，还可以指定不拦截哪些资源，只需要调用<code>excludePathPatterns(&quot;不拦截路径&quot;)</code>方法，指定哪些资源不需要拦截。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration  </span></span>
<span class="line"><span>public class WebConfig implements WebMvcConfigurer {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //拦截器对象</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private LoginCheckInterceptor loginCheckInterceptor;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void addInterceptors(InterceptorRegistry registry) {</span></span>
<span class="line"><span>        //注册自定义拦截器对象</span></span>
<span class="line"><span>        registry.addInterceptor(loginCheckInterceptor)</span></span>
<span class="line"><span>                .addPathPatterns(&quot;/**&quot;)//设置拦截器拦截的请求路径（ /** 表示拦截所有请求）</span></span>
<span class="line"><span>                .excludePathPatterns(&quot;/login&quot;);//设置不拦截的请求路径</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_2-5-2-2-执行流程" tabindex="-1">2.5.2.2 执行流程 <a class="header-anchor" href="#_2-5-2-2-执行流程" aria-label="Permalink to &quot;2.5.2.2 执行流程&quot;">​</a></h5><p>介绍完拦截路径的配置之后，接下来我们再来介绍拦截器的执行流程。通过执行流程，大家就能够清晰的知道过滤器与拦截器的执行时机。</p><p><img src="`+Y+`" alt="image-20230107112136151"></p><ul><li><p>当我们打开浏览器来访问部署在web服务器当中的web应用时，此时我们所定义的过滤器会拦截到这次请求。拦截到这次请求之后，它会先执行放行前的逻辑，然后再执行放行操作。而由于我们当前是基于springboot开发的，所以放行之后是进入到了spring的环境当中，也就是要来访问我们所定义的controller当中的接口方法。</p></li><li><p>Tomcat并不识别所编写的Controller程序，但是它识别Servlet程序，所以在Spring的Web环境中提供了一个非常核心的Servlet：DispatcherServlet（前端控制器），所有请求都会先进行到DispatcherServlet，再将请求转给Controller。</p></li><li><p>当我们定义了拦截器后，会在执行Controller的方法之前，请求被拦截器拦截住。执行<code>preHandle()</code>方法，这个方法执行完成后需要返回一个布尔类型的值，如果返回true，就表示放行本次操作，才会继续访问controller中的方法；如果返回false，则不会放行（controller中的方法也不会执行）。</p></li><li><p>在controller当中的方法执行完毕之后，再回过来执行<code>postHandle()</code>这个方法以及<code>afterCompletion()</code> 方法，然后再返回给DispatcherServlet，最终再来执行过滤器当中放行后的这一部分逻辑的逻辑。执行完毕之后，最终给浏览器响应数据。</p></li></ul><p>接下来我们就来演示下过滤器和拦截器同时存在的执行流程：</p><ul><li>开启LoginCheckInterceptor拦截器</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class LoginCheckInterceptor implements HandlerInterceptor {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {</span></span>
<span class="line"><span>        System.out.println(&quot;preHandle .... &quot;);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        return true; //true表示放行</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {</span></span>
<span class="line"><span>        System.out.println(&quot;postHandle ... &quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {</span></span>
<span class="line"><span>        System.out.println(&quot;afterCompletion .... &quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration  </span></span>
<span class="line"><span>public class WebConfig implements WebMvcConfigurer {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //拦截器对象</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private LoginCheckInterceptor loginCheckInterceptor;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void addInterceptors(InterceptorRegistry registry) {</span></span>
<span class="line"><span>        //注册自定义拦截器对象</span></span>
<span class="line"><span>        registry.addInterceptor(loginCheckInterceptor)</span></span>
<span class="line"><span>                .addPathPatterns(&quot;/**&quot;)//拦截所有请求</span></span>
<span class="line"><span>                .excludePathPatterns(&quot;/login&quot;);//不拦截登录请求</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>开启DemoFilter过滤器</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@WebFilter(urlPatterns = &quot;/*&quot;) </span></span>
<span class="line"><span>public class DemoFilter implements Filter {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {</span></span>
<span class="line"><span>        System.out.println(&quot;DemoFilter   放行前逻辑.....&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //放行请求</span></span>
<span class="line"><span>        filterChain.doFilter(servletRequest,servletResponse);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.out.println(&quot;DemoFilter   放行后逻辑.....&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重启SpringBoot服务后，清空日志，打开Postman，测试查询部门：</p><p><img src="`+Q+'" alt="image-20230107113653871"></p><p><img src="'+$+`" alt="image-20230107114008004"></p><p>过滤器和拦截器之间的区别</p><ul><li>接口规范不同：过滤器需要实现Filter接口，而拦截器需要实现HandlerInterceptor接口。</li><li>拦截范围不同：过滤器Filter会拦截所有的资源，而Interceptor只会拦截Spring环境中的资源。</li></ul><h4 id="_2-5-3-登录校验-interceptor-✏️" tabindex="-1">2.5.3 登录校验- Interceptor ✏️ <a class="header-anchor" href="#_2-5-3-登录校验-interceptor-✏️" aria-label="Permalink to &quot;2.5.3 登录校验- Interceptor ✏️&quot;">​</a></h4><p>目标🎯 ：<strong>通过拦截器来完成案例当中的登录校验功能</strong></p><blockquote><p>登录校验的业务逻辑以及操作步骤和<strong>登录校验Filter过滤器当中的逻辑是完全一致的</strong>。现在我们只需要把这个技术方案由原来的过滤器换成拦截器interceptor就可以了。</p></blockquote><p><strong>登录校验拦截器</strong>(直接复制过滤器核心代码)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//自定义拦截器</span></span>
<span class="line"><span>@Component //当前拦截器对象由Spring创建和管理</span></span>
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>public class LoginCheckInterceptor implements HandlerInterceptor {</span></span>
<span class="line"><span>    //前置方式</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {</span></span>
<span class="line"><span>        System.out.println(&quot;preHandle .... &quot;);</span></span>
<span class="line"><span>        //1.获取请求url</span></span>
<span class="line"><span>        //2.判断请求url中是否包含login，如果包含，说明是登录操作，放行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //3.获取请求头中的令牌（token）</span></span>
<span class="line"><span>        String token = request.getHeader(&quot;token&quot;);</span></span>
<span class="line"><span>        log.info(&quot;从请求头中获取的令牌：{}&quot;,token);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //4.判断令牌是否存在，如果不存在，返回错误结果（未登录）</span></span>
<span class="line"><span>        if(!StringUtils.hasLength(token)){</span></span>
<span class="line"><span>            log.info(&quot;Token不存在&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //创建响应结果对象</span></span>
<span class="line"><span>            Result responseResult = Result.error(&quot;NOT_LOGIN&quot;);</span></span>
<span class="line"><span>            //把Result对象转换为JSON格式字符串 (fastjson是阿里巴巴提供的用于实现对象和json的转换工具类)</span></span>
<span class="line"><span>            String json = JSONObject.toJSONString(responseResult);</span></span>
<span class="line"><span>            //设置响应头（告知浏览器：响应的数据类型为json、响应的数据编码表为utf-8）</span></span>
<span class="line"><span>            response.setContentType(&quot;application/json;charset=utf-8&quot;);</span></span>
<span class="line"><span>            //响应</span></span>
<span class="line"><span>            response.getWriter().write(json);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            return false;//不放行</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //5.解析token，如果解析失败，返回错误结果（未登录）</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            JwtUtils.parseJWT(token);</span></span>
<span class="line"><span>        }catch (Exception e){</span></span>
<span class="line"><span>            log.info(&quot;令牌解析失败!&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //创建响应结果对象</span></span>
<span class="line"><span>            Result responseResult = Result.error(&quot;NOT_LOGIN&quot;);</span></span>
<span class="line"><span>            //把Result对象转换为JSON格式字符串 (fastjson是阿里巴巴提供的用于实现对象和json的转换工具类)</span></span>
<span class="line"><span>            String json = JSONObject.toJSONString(responseResult);</span></span>
<span class="line"><span>            //设置响应头</span></span>
<span class="line"><span>            response.setContentType(&quot;application/json;charset=utf-8&quot;);</span></span>
<span class="line"><span>            //响应</span></span>
<span class="line"><span>            response.getWriter().write(json);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //6.放行</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p><strong>注册配置拦截器</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration  </span></span>
<span class="line"><span>public class WebConfig implements WebMvcConfigurer {</span></span>
<span class="line"><span>    //拦截器对象</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private LoginCheckInterceptor loginCheckInterceptor;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void addInterceptors(InterceptorRegistry registry) {</span></span>
<span class="line"><span>       //注册自定义拦截器对象</span></span>
<span class="line"><span>        registry.addInterceptor(loginCheckInterceptor)</span></span>
<span class="line"><span>                .addPathPatterns(&quot;/**&quot;)</span></span>
<span class="line"><span>                .excludePathPatterns(&quot;/login&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>登录校验的拦截器编写完成后，接下来我们就可以重新启动服务来做一个测试： （<strong>关闭登录校验Filter过滤器</strong>）</p><ul><li><p>测试1：未登录是否可以访问部门管理页面</p><p>首先关闭浏览器，重新打开浏览器，在地址栏中输入：<a href="http://localhost:9528/#/system/dept" target="_blank" rel="noreferrer">http://localhost:9528/#/system/deptopen in new window</a></p><p>由于用户没有登录，校验机制返回错误信息，前端页面根据返回的错误信息结果，自动跳转到登录页面了</p><p><img src="`+s+'" alt="image-20230105085212629"></p><p>image-20230105085212629</p></li><li><p>测试2：先进行登录操作，再访问部门管理页面</p><p>登录校验成功之后，可以正常访问相关业务操作页面</p><p><img src="'+n+'" alt="image-20230107102922550"></p><p>image-20230107102922550</p></li></ul><p>到此我们也就验证了所开发的登录校验的拦截器也是没问题的。登录校验的过滤器和拦截器，我们只需要使用其中的一种就可以了。</p><h2 id="_3-异常处理-🍐" tabindex="-1">3. 异常处理 🍐 <a class="header-anchor" href="#_3-异常处理-🍐" aria-label="Permalink to &quot;3\\. 异常处理 🍐&quot;">​</a></h2><p>问题</p><ol><li>那么在三层构架项目中，出现了异常，该如何处理?</li></ol><p>点击查看</p><ul><li><strong>方案一</strong>：在所有Controller的所有方法中进行try…catch处理 不建议用 <ul><li>缺点：代码臃肿（不推荐）</li></ul></li><li><strong>方案二</strong>：全局异常处理器企业开发实用 <ul><li>好处：简单、优雅（推荐）</li></ul></li></ul><p><img src="'+ss+'" alt="image-20230107122904214"></p><h3 id="_3-1-当前问题" tabindex="-1">3.1 当前问题 <a class="header-anchor" href="#_3-1-当前问题" aria-label="Permalink to &quot;3.1 当前问题&quot;">​</a></h3><p>登录功能和登录校验功能我们都实现了，下面我们学习下今天最后一块技术点：异常处理。首先我们先来看一下系统出现异常之后会发生什么现象，再来介绍异常处理的方案。</p><p>我们打开浏览器，访问系统中的新增部门操作，系统中已经有了 &quot;就业部&quot; 这个部门，我们再来增加一个就业部，看看会发生什么现象。</p><p><img src="'+ns+'" alt="image-20230112125651073"></p><p>点击确定之后，窗口关闭了，页面没有任何反应，就业部也没有添加上。 而此时，大家会发现，网络请求报错了。</p><p><img src="'+as+'" alt="image-20230112125737863"></p><p>状态码为500，表示服务器端异常，我们打开idea，来看一下，服务器端出了什么问题。</p><p><img src="'+ps+'" alt="image-20230112125826602"></p><p>上述错误信息的含义是，dept部门表的name字段的值 就业部 重复了，因为在数据库表dept中已经有了就业部，我们之前设计这张表时，为name字段建议了唯一约束，所以该字段的值是不能重复的。</p><p>而当我们再添加就业部，这个部门时，就违反了唯一约束，此时就会报错。</p><p>我们来看一下出现异常之后，最终服务端给前端响应回来的数据长什么样。</p><p><img src="'+es+'" alt="image-20230112130253486"></p><p>响应回来的数据是一个JSON格式的数据。但这种JSON格式的数据还是我们开发规范当中所提到的统一响应结果Result吗？显然并不是。由于返回的数据不符合开发规范，所以前端并不能解析出响应的JSON数据。</p><p>接下来我们需要思考的是出现异常之后，当前案例项目的异常是怎么处理的？</p><ul><li>答案：没有做任何的异常处理</li></ul><p><img src="'+ls+`" alt="image-20230107121909087"></p><p>当我们没有做任何的异常处理时，我们三层架构处理异常的方案：</p><ul><li>Mapper接口在操作数据库的时候出错了，此时异常会往上抛(谁调用Mapper就抛给谁)，会抛给service。</li><li>service 中也存在异常了，会抛给controller。</li><li>而在controller当中，我们也没有做任何的异常处理，所以最终异常会再往上抛。最终抛给框架之后，框架就会返回一个JSON格式的数据，里面封装的就是错误的信息，但是框架返回的JSON格式的数据并不符合我们的开发规范。</li></ul><h3 id="_3-2-全局异常处理器" tabindex="-1">3.2 全局异常处理器 <a class="header-anchor" href="#_3-2-全局异常处理器" aria-label="Permalink to &quot;3.2 全局异常处理器&quot;">​</a></h3><p>我们该怎么样定义全局异常处理器？</p><h4 id="_1️⃣-定义全局异常处理器非常简单-就是定义一个类-在类上加上一个注解-restcontrolleradvice-加上这个注解就代表我们定义了一个全局异常处理器。" tabindex="-1">1️⃣ 定义全局异常处理器非常简单，就是定义一个类，在类上加上一个注解@RestControllerAdvice，加上这个注解就代表我们定义了一个全局异常处理器。 <a class="header-anchor" href="#_1️⃣-定义全局异常处理器非常简单-就是定义一个类-在类上加上一个注解-restcontrolleradvice-加上这个注解就代表我们定义了一个全局异常处理器。" aria-label="Permalink to &quot;1️⃣ 定义全局异常处理器非常简单，就是定义一个类，在类上加上一个注解@RestControllerAdvice，加上这个注解就代表我们定义了一个全局异常处理器。&quot;">​</a></h4><h4 id="_2️⃣-在全局异常处理器当中-需要定义一个方法来捕获异常-在这个方法上需要加上注解-exceptionhandler。通过-exceptionhandler注解当中的value属性来指定我们要捕获的是哪一类型的异常。" tabindex="-1">2️⃣ 在全局异常处理器当中，需要定义一个方法来捕获异常，在这个方法上需要加上注解@ExceptionHandler。通过@ExceptionHandler注解当中的value属性来指定我们要捕获的是哪一类型的异常。 <a class="header-anchor" href="#_2️⃣-在全局异常处理器当中-需要定义一个方法来捕获异常-在这个方法上需要加上注解-exceptionhandler。通过-exceptionhandler注解当中的value属性来指定我们要捕获的是哪一类型的异常。" aria-label="Permalink to &quot;2️⃣ 在全局异常处理器当中，需要定义一个方法来捕获异常，在这个方法上需要加上注解@ExceptionHandler。通过@ExceptionHandler注解当中的value属性来指定我们要捕获的是哪一类型的异常。&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestControllerAdvice</span></span>
<span class="line"><span>public class GlobalExceptionHandler {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //处理异常</span></span>
<span class="line"><span>    @ExceptionHandler(Exception.class) //指定能够处理的异常类型</span></span>
<span class="line"><span>    public Result ex(Exception e){</span></span>
<span class="line"><span>        e.printStackTrace();//打印堆栈中的异常信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //捕获到异常之后，响应一个标准的Result</span></span>
<span class="line"><span>        return Result.error(&quot;对不起,操作失败,请联系管理员&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>@RestControllerAdvice = @ControllerAdvice + @ResponseBody</p><p>处理异常的方法返回值会转换为json后再响应给前端</p></blockquote><p>重新启动SpringBoot服务，打开浏览器，再来测试一下添加部门这个操作，我们依然添加已存在的 &quot;就业部&quot; 这个部门：</p><p><img src="`+ts+'" alt="image-20230112131232032"></p><p><img src="'+is+'" alt="image-20230112131135272"></p><p>此时，我们可以看到，出现异常之后，异常已经被全局异常处理器捕获了。然后返回的错误信息，被前端程序正常解析，然后提示出了对应的错误提示信息。</p><p>技巧</p><p>全局异常处理主要涉及到两个注解：</p><ul><li>@RestControllerAdvice(修饰类) //表示当前类为全局异常处理器</li><li>@ExceptionHandler(修饰方法) //指定可以捕获哪种类型的异常进行处理</li></ul><p>作业</p><ol><li>🚩 单独创建一个专门拦截空指针异常的方法，并返回消息(&quot;服务器忙着了尼，请稍后再试&quot;)</li><li>🚩 查阅资料，自定义一个异常，并且在异常处理类进行捕获</li></ol>',396),rs=[cs];function us(ds,gs,hs,ms,qs,bs){return e(),p("div",null,rs)}const ks=a(os,[["render",us]]);export{Ss as __pageData,ks as default};
