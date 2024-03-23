import{_ as s,c as n,o as a,a4 as e}from"./chunks/framework.K9vKjHgL.js";const p="/docs/assets/image-20220527093757470.xXvXT9do.png",t="/docs/assets/image-20220527094308906.Dpnw3l4x.png",l="/docs/assets/image-20220527094744236.CkZDNecL.png",o="/docs/assets/image-20220527095844136.DcLN7Gc2.png",i="/docs/assets/image-20220527101812333.3XuB0FQ6.png",r="/docs/assets/image-20220527103811002.BokqN-Il.png",S=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"home/拦截器（Interceptor）快速复习.md","filePath":"home/拦截器（Interceptor）快速复习.md"}'),c={name:"home/拦截器（Interceptor）快速复习.md"},d=e('<h2 id="spirngboot中使用interceptor拦截器" tabindex="-1">SpirngBoot中使用Interceptor拦截器 <a class="header-anchor" href="#spirngboot中使用interceptor拦截器" aria-label="Permalink to &quot;SpirngBoot中使用Interceptor拦截器&quot;">​</a></h2><blockquote><p><strong>本篇文章可以带您快速复习拦截器的使用，食用本篇文章前您必须熟练掌握并拥有基于注解配置SpringMVC的能力！</strong></p></blockquote><h2 id="_1-快速回顾拦截器" tabindex="-1">1.快速回顾拦截器 <a class="header-anchor" href="#_1-快速回顾拦截器" aria-label="Permalink to &quot;1.快速回顾拦截器&quot;">​</a></h2><blockquote><p><strong>首先我们需要通过以下图片回顾一下SpringMVC中拦截器的执行位置。</strong></p></blockquote><p><img src="'+p+'" alt="image-20220527093757470"></p><ul><li><p><strong>拦截器（<code>Interceptor</code>）是一种动态拦截方法调用的机制，在<code>SpringMVC</code>中动态拦截控制器方法的执行</strong></p></li><li><p><strong>作用</strong>:</p><ol><li>在指定的方法调用前后执行预先设定的代码</li><li>阻止原始方法的执行</li><li>总结：拦截器就是用来做增强</li></ol></li><li><p><strong>拦截器和过滤器之间的区别</strong></p><ol><li>归属不同：<code>Filter</code>属于<code>Servlet</code>技术，<code>Interceptor</code>属于<code>SpringMVC</code>技术</li><li>拦截内容不同：Filter对所有访问进行增强，Interceptor仅针对SpringMVC的访问进行增强</li></ol></li></ul><p><img src="'+t+'" alt="image-20220527094308906"></p><h2 id="_2-springboot中使用拦截器" tabindex="-1">2.SpringBoot中使用拦截器 <a class="header-anchor" href="#_2-springboot中使用拦截器" aria-label="Permalink to &quot;2.SpringBoot中使用拦截器&quot;">​</a></h2><ul><li><p><strong>创建一个<code>SpringBoot</code>工程并勾选web开发的依赖</strong></p><p><img src="'+l+`" alt="image-20220527094744236"></p></li><li><p><strong>创建完毕后我们需要编写一个<code>UserController</code>类进行测试</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/user&quot;)</span></span>
<span class="line"><span>public class UserController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping(&quot;/login&quot;)</span></span>
<span class="line"><span>    public String login(){</span></span>
<span class="line"><span>        return &quot;登陆成功！&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping(&quot;/register&quot;)</span></span>
<span class="line"><span>    public String register(HttpSession session){</span></span>
<span class="line"><span>        //模拟用户注册，将用户信息存储session域中</span></span>
<span class="line"><span>        session.setAttribute(&quot;user&quot;,&quot;user&quot;);</span></span>
<span class="line"><span>        return &quot;注册成功！&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>java</span></span></code></pre></div></li><li><p><strong>然后我们通过浏览器访问这两个路径<code>/login</code>、<code>/register</code></strong></p><blockquote><p>通过访问可以发现两个接口均可正常访问，但这显然不是我们所期望的，我们期望的是用户在没有注册的情况下直接访问登录接口是失败的，因此我们需要通过添加一个拦截器的功能来实现。</p></blockquote><p><img src="`+o+`" alt="image-20220527095844136"></p></li><li><p><strong>新建一个拦截器<code>MyInterceptor</code>并实现<code>HandleInterceptor</code>接口</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Component //将这个类放进spring的容器中</span></span>
<span class="line"><span>public class MyInterceptor implements HandlerInterceptor {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {</span></span>
<span class="line"><span>        HttpSession session = request.getSession();</span></span>
<span class="line"><span>        //从session域中获取user</span></span>
<span class="line"><span>        Object user = session.getAttribute(&quot;user&quot;);</span></span>
<span class="line"><span>        if (user == null){</span></span>
<span class="line"><span>            //如果user为null，说明用户没有注册，进行拦截</span></span>
<span class="line"><span>            response.setStatus(401);</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>java</span></span></code></pre></div></li><li><p><strong>新建一个<code>SpringMVC</code>的配置类<code>SringMvcConfig</code>用来添加拦截器</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class SpringMvcConfig implements WebMvcConfigurer {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Resource</span></span>
<span class="line"><span>    private MyInterceptor myInterceptor;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void addInterceptors(InterceptorRegistry registry) {</span></span>
<span class="line"><span>        //添加我们的拦截器，使其生效，addPathPatterns()方法是执行拦截了拦截的路径，默认拦截全部路径</span></span>
<span class="line"><span>        registry.addInterceptor(myInterceptor).addPathPatterns(&quot;/user/login&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>java</span></span></code></pre></div></li><li><p><strong>此时我们重启项目再次访问两个路径</strong></p><p><img src="`+i+`" alt="image-20220527101812333"></p></li></ul><h2 id="_3-拦截器的方法说明" tabindex="-1">3.拦截器的方法说明 <a class="header-anchor" href="#_3-拦截器的方法说明" aria-label="Permalink to &quot;3.拦截器的方法说明&quot;">​</a></h2><blockquote><p><strong>我们自定义的拦截器在实现了<code>HandlerInterceptor</code>接口后我们可以选择实现三个方法</strong></p></blockquote><h3 id="_3-1-前置处理方法" tabindex="-1">3.1 前置处理方法 <a class="header-anchor" href="#_3-1-前置处理方法" aria-label="Permalink to &quot;3.1 前置处理方法&quot;">​</a></h3><hr><blockquote><p><strong>控制器方法执行之前执行<code>preHandle()</code>，其boolean类型的返回值表示是否拦截或放行，返回<code>true</code>为放行，即调用控制器方法。</strong></p><p><strong>返回<code>false</code>表示拦截，即不调用控制器方法。</strong></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Override</span></span>
<span class="line"><span>public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {</span></span>
<span class="line"><span>    System.out.println(&quot;preHandle()方法被执行！&quot;);</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>java</span></span></code></pre></div><ul><li><code>request</code>：请求对象</li><li><code>response</code>：响应对象</li><li><code>handler</code>：被调用的处理器对象，本质上是一个方法对象，对反射中的Method对象进行了再包装</li></ul><blockquote><p><strong>使用handler参数，可以获取方法的相关信息</strong></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {</span></span>
<span class="line"><span>    HandlerMethod hm = (HandlerMethod)handler;</span></span>
<span class="line"><span>    String methodName = hm.getMethod().getName();//可以获取方法的名称</span></span>
<span class="line"><span>    System.out.println(&quot;preHandle...&quot;+methodName);</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>java</span></span></code></pre></div><h3 id="_3-2-后置处理方法" tabindex="-1">3.2 后置处理方法 <a class="header-anchor" href="#_3-2-后置处理方法" aria-label="Permalink to &quot;3.2 后置处理方法&quot;">​</a></h3><hr><blockquote><p><strong>原始方法运行后运行，如果原始方法被拦截，则不执行</strong></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Override</span></span>
<span class="line"><span>public void postHandle(HttpServletRequest req, HttpServletResponse resp, Object handler, ModelAndView mv) throws Exception {</span></span>
<span class="line"><span>    System.out.println(&quot;postHandle()方法被执行！&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>java</span></span></code></pre></div><ul><li><p>前三个参数和上面的是一致的。</p></li><li><p><code>modelAndView</code>：如果处理器执行完成具有返回结果，可以读取到对应数据与页面信息，并进行调整</p></li><li><p>因为咱们现在都是返回<code>json</code>数据，所以该参数的使用率不高。</p></li></ul><h3 id="_3-3-完成处理方法" tabindex="-1">3.3 完成处理方法 <a class="header-anchor" href="#_3-3-完成处理方法" aria-label="Permalink to &quot;3.3 完成处理方法&quot;">​</a></h3><hr><blockquote><p><strong>拦截器最后执行的方法，无论原始方法是否执行</strong></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Override</span></span>
<span class="line"><span>public void afterCompletion(HttpServletRequest req, HttpServletResponse resp, Object handler, Exception ex) throws Exception {</span></span>
<span class="line"><span>    System.out.println(&quot;afterCompletion()方法被执行！&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>java</span></span></code></pre></div><ul><li><p>前三个参数与上面的是一致的。</p></li><li><p>ex：如果处理器执行过程中出现异常对象，可以针对异常情况进行单独处理 ，因为我们现在已经有全局异常处理器类，所以该参数的使用率也不高。</p></li><li><p>这三个方法中，最常用的是<strong>preHandle()</strong>，在这个方法中可以通过返回值来决定是否要进行放行，我们可以把业务逻辑放在该方法中，如果满足业务则返回true放行，不满足则返回false拦截。</p></li></ul><h2 id="_4-多个拦截器执行顺序" tabindex="-1">4.多个拦截器执行顺序 <a class="header-anchor" href="#_4-多个拦截器执行顺序" aria-label="Permalink to &quot;4.多个拦截器执行顺序&quot;">​</a></h2><blockquote><p><strong>目前，我们在项目中只添加了一个拦截器，如果有多个，该如何配置？配置多个后，执行顺序是什么?</strong></p></blockquote><ul><li>当配置多个拦截器时，形成拦截器链</li><li>拦截器链的运行顺序参照拦截器添加顺序为准</li><li>当拦截器中出现对原始处理器的拦截，后面的拦截器均终止运行</li><li>当拦截器运行中断，仅运行配置在前面的拦截器的afterCompletion操作</li></ul><p><img src="`+r+'" alt="image-20220527103811002"></p><p>preHandle：与配置顺序相同，必定运行</p><p>postHandle：与配置顺序相反，可能不运行</p><p>afterCompletion：与配置顺序相反，可能不运行。</p><p>这个顺序不太好记，最终只需要把握住一个原则即可：<strong>以最终的运行结果为准</strong></p>',36),u=[d];function g(h,b,m,q,v,_){return a(),n("div",null,u)}const f=s(c,[["render",g]]);export{S as __pageData,f as default};
