import{_ as n,c as s,o as a,a4 as p}from"./chunks/framework.-JfgED0h.js";const e="/docs/assets/synchronized-1-f4430c27-5a0e-49c1-bac5-fe8562b0cdc5.BB-obnjW.jpg",z=JSON.parse('{"title":"面了一个25岁的学妹，把synchronized关键字讲的那叫一个透彻","description":"主要讲解synchronized的应用方式和内存语义。","frontmatter":{"title":"面了一个25岁的学妹，把synchronized关键字讲的那叫一个透彻","shortTitle":"synchronized关键字","description":"主要讲解synchronized的应用方式和内存语义。","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,synchronized"}]]},"headers":[],"relativePath":"backend/tobetter/thread/synchronized-1.md","filePath":"backend/tobetter/thread/synchronized-1.md"}'),i={name:"backend/tobetter/thread/synchronized-1.md"},l=p(`<p>二哥：“三妹，今天我们来学习 synchronized 关键字的应用方式和内存语义吧。”</p><p>三妹（颜值在线，气质也在线）：“好的。”</p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>建议大家先看前面的文章《<a href="https://mp.weixin.qq.com/s/s983WflPH7jF0-_SpGRfBg" target="_blank" rel="noreferrer">Java 并发编程系列 1-基础知识</a>》，特别是并发编程相关的可见性、有序性，以及内存模型 JMM 等。</p><p>在 Java 中，关键字 synchronized 可以保证在同一个时刻，只有一个线程可以执行某个方法或者某个代码块(主要是对方法或者代码块中存在共享数据的操作)，同时我们还应该注意到 synchronized 另外一个重要的作用，synchronized 可保证一个线程的变化(主要是共享数据的变化)被其他线程所看到（保证可见性，完全可以替代 Volatile 功能）。</p><h2 id="synchronized-的三种应用方式" tabindex="-1">synchronized 的三种应用方式 <a class="header-anchor" href="#synchronized-的三种应用方式" aria-label="Permalink to &quot;synchronized 的三种应用方式&quot;">​</a></h2><p>synchronized 关键字最主要有以下 3 种应用方式，下面分别介绍：</p><ul><li>修饰实例方法，作用于当前实例加锁，进入同步代码前要获得当前实例的锁；</li><li>修饰静态方法，作用于当前类对象加锁，进入同步代码前要获得当前类对象的锁；</li><li>修饰代码块，指定加锁对象，对给定对象加锁，进入同步代码库前要获得给定对象的锁。</li></ul><h3 id="synchronized-作用于实例方法" tabindex="-1">synchronized 作用于实例方法 <a class="header-anchor" href="#synchronized-作用于实例方法" aria-label="Permalink to &quot;synchronized 作用于实例方法&quot;">​</a></h3><p>所谓的实例对象锁就是用 synchronized 修饰实例对象中的实例方法，注意是实例方法不包括静态方法，如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class AccountingSync implements Runnable {</span></span>
<span class="line"><span>    //共享资源(临界资源)</span></span>
<span class="line"><span>    static int i = 0;</span></span>
<span class="line"><span>    // synchronized 修饰实例方法</span></span>
<span class="line"><span>    public synchronized void increase() {</span></span>
<span class="line"><span>        i ++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void run() {</span></span>
<span class="line"><span>        for(int j=0;j&lt;1000000;j++){</span></span>
<span class="line"><span>            increase();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public static void main(String args[]) throws InterruptedException {</span></span>
<span class="line"><span>        AccountingSync instance = new AccountingSync();</span></span>
<span class="line"><span>        Thread t1 = new Thread(instance);</span></span>
<span class="line"><span>        Thread t2 = new Thread(instance);</span></span>
<span class="line"><span>        t1.start();</span></span>
<span class="line"><span>        t2.start();</span></span>
<span class="line"><span>        t1.join();</span></span>
<span class="line"><span>        t2.join();</span></span>
<span class="line"><span>        System.out.println(&quot;static, i output:&quot; + i);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 输出结果:</span></span>
<span class="line"><span> * static, i output:2000000</span></span>
<span class="line"><span> */</span></span></code></pre></div><p>如果在函数 increase()前不加 synchronized，因为 i++不具备原子性，所以最终结果会小于 2000000，具体分析可以参考文章《<a href="https://tobebetterjavaer.com/thread/volatile.html" target="_blank" rel="noreferrer">volatile</a>》。下面这点非常重要：</p><blockquote><p>一个对象只有一把锁，当一个线程获取了该对象的锁之后，其他线程无法获取该对象的锁，所以无法访问该对象的其他 synchronized 实例方法，但是其他线程还是可以访问该实例对象的其他非 synchronized 方法。</p></blockquote><p>但是一个线程 A 需要访问实例对象 obj1 的 synchronized 方法 f1(当前对象锁是 obj1)，另一个线程 B 需要访问实例对象 obj2 的 synchronized 方法 f2(当前对象锁是 obj2)，这样是允许的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class AccountingSyncBad implements Runnable {</span></span>
<span class="line"><span>    //共享资源(临界资源)</span></span>
<span class="line"><span>    static int i = 0;</span></span>
<span class="line"><span>    // synchronized 修饰实例方法</span></span>
<span class="line"><span>    public synchronized void increase() {</span></span>
<span class="line"><span>        i ++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void run() {</span></span>
<span class="line"><span>        for(int j=0;j&lt;1000000;j++){</span></span>
<span class="line"><span>            increase();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public static void main(String args[]) throws InterruptedException {</span></span>
<span class="line"><span>        // new 两个AccountingSync新实例</span></span>
<span class="line"><span>        Thread t1 = new Thread(new AccountingSyncBad());</span></span>
<span class="line"><span>        Thread t2 = new Thread(new AccountingSyncBad());</span></span>
<span class="line"><span>        t1.start();</span></span>
<span class="line"><span>        t2.start();</span></span>
<span class="line"><span>        t1.join();</span></span>
<span class="line"><span>        t2.join();</span></span>
<span class="line"><span>        System.out.println(&quot;static, i output:&quot; + i);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 输出结果:</span></span>
<span class="line"><span> * static, i output:1224617</span></span>
<span class="line"><span> */</span></span></code></pre></div><p>上述代码与前面不同的是我们同时创建了两个新实例 AccountingSyncBad，然后启动两个不同的线程对共享变量 i 进行操作，但很遗憾操作结果是 1224617 而不是期望结果 2000000，因为上述代码犯了严重的错误，虽然我们使用 synchronized 修饰了 increase 方法，但却 new 了两个不同的实例对象，这也就意味着存在着两个不同的实例对象锁，因此 t1 和 t2 都会进入各自的对象锁，也就是说 t1 和 t2 线程使用的是不同的锁，因此线程安全是无法保证的。</p><blockquote><p>每个对象都有一个对象锁，不同的对象，他们的锁不会互相影响。</p></blockquote><p>解决这种困境的的方式是将 synchronized 作用于静态的 increase 方法，这样的话，对象锁就当前类对象，由于无论创建多少个实例对象，但对于的类对象拥有只有一个，所有在这样的情况下对象锁就是唯一的。下面我们看看如何使用将 synchronized 作用于静态的 increase 方法。</p><h3 id="synchronized-作用于静态方法" tabindex="-1">synchronized 作用于静态方法 <a class="header-anchor" href="#synchronized-作用于静态方法" aria-label="Permalink to &quot;synchronized 作用于静态方法&quot;">​</a></h3><blockquote><p>当 synchronized 作用于静态方法时，其锁就是当前类的 class 锁，不属于某个对象。</p><p>当前类 class 锁被获取，不影响对象锁的获取，两者互不影响。</p></blockquote><p>由于静态成员不专属于任何一个实例对象，是类成员，因此通过 class 对象锁可以控制静态成员的并发操作。需要注意的是如果一个线程 A 调用一个实例对象的非 static synchronized 方法，而线程 B 需要调用这个实例对象所属类的静态 synchronized 方法，不会发生互斥现象，因为访问静态 synchronized 方法占用的锁是当前类的 class 对象，而访问非静态 synchronized 方法占用的锁是当前实例对象锁，看如下代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class AccountingSyncClass implements Runnable {</span></span>
<span class="line"><span>    static int i = 0;</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 作用于静态方法,锁是当前class对象,也就是</span></span>
<span class="line"><span>     * AccountingSyncClass类对应的class对象</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public static synchronized void increase() {</span></span>
<span class="line"><span>        i++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 非静态,访问时锁不一样不会发生互斥</span></span>
<span class="line"><span>    public synchronized void increase4Obj() {</span></span>
<span class="line"><span>        i++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void run() {</span></span>
<span class="line"><span>        for(int j=0;j&lt;1000000;j++){</span></span>
<span class="line"><span>            increase();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public static void main(String[] args) throws InterruptedException {</span></span>
<span class="line"><span>        //new新实例</span></span>
<span class="line"><span>        Thread t1=new Thread(new AccountingSyncClass());</span></span>
<span class="line"><span>        //new新实例</span></span>
<span class="line"><span>        Thread t2=new Thread(new AccountingSyncClass());</span></span>
<span class="line"><span>        //启动线程</span></span>
<span class="line"><span>        t1.start();t2.start();</span></span>
<span class="line"><span>        t1.join();t2.join();</span></span>
<span class="line"><span>        System.out.println(i);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 输出结果:</span></span>
<span class="line"><span> * 2000000</span></span>
<span class="line"><span> */</span></span></code></pre></div><p>由于 synchronized 关键字修饰的是静态 increase 方法，与修饰实例方法不同的是，其锁对象是当前类的 class 对象。注意代码中的 increase4Obj 方法是实例方法，其对象锁是当前实例对象，如果别的线程调用该方法，将不会产生互斥现象，毕竟锁对象不同，但我们应该意识到这种情况下可能会发现线程安全问题(操作了共享静态变量 i)。</p><h3 id="synchronized-同步代码块" tabindex="-1">synchronized 同步代码块 <a class="header-anchor" href="#synchronized-同步代码块" aria-label="Permalink to &quot;synchronized 同步代码块&quot;">​</a></h3><p>在某些情况下，我们编写的方法体可能比较大，同时存在一些比较耗时的操作，而需要同步的代码又只有一小部分，如果直接对整个方法进行同步操作，可能会得不偿失，此时我们可以使用同步代码块的方式对需要同步的代码进行包裹，这样就无需对整个方法进行同步操作了，同步代码块的使用示例如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class AccountingSync2 implements Runnable {</span></span>
<span class="line"><span>    static AccountingSync2 instance = new AccountingSync2(); // 饿汉单例模式</span></span>
<span class="line"><span>    static int i=0;</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void run() {</span></span>
<span class="line"><span>        //省略其他耗时操作....</span></span>
<span class="line"><span>        //使用同步代码块对变量i进行同步操作,锁对象为instance</span></span>
<span class="line"><span>        synchronized(instance){</span></span>
<span class="line"><span>            for(int j=0;j&lt;1000000;j++){</span></span>
<span class="line"><span>                i++;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public static void main(String[] args) throws InterruptedException {</span></span>
<span class="line"><span>        Thread t1=new Thread(instance);</span></span>
<span class="line"><span>        Thread t2=new Thread(instance);</span></span>
<span class="line"><span>        t1.start();t2.start();</span></span>
<span class="line"><span>        t1.join();t2.join();</span></span>
<span class="line"><span>        System.out.println(i);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 输出结果:</span></span>
<span class="line"><span> * 2000000</span></span>
<span class="line"><span> */</span></span></code></pre></div><p>从代码看出，将 synchronized 作用于一个给定的实例对象 instance，即当前实例对象就是锁对象，每次当线程进入 synchronized 包裹的代码块时就会要求当前线程持有 instance 实例对象锁，如果当前有其他线程正持有该对象锁，那么新到的线程就必须等待，这样也就保证了每次只有一个线程执行 i++;操作。当然除了 instance 作为对象外，我们还可以使用 this 对象(代表当前实例)或者当前类的 class 对象作为锁，如下代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>//this,当前实例对象锁</span></span>
<span class="line"><span>synchronized(this){</span></span>
<span class="line"><span>    for(int j=0;j&lt;1000000;j++){</span></span>
<span class="line"><span>        i++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//class对象锁</span></span>
<span class="line"><span>synchronized(AccountingSync.class){</span></span>
<span class="line"><span>    for(int j=0;j&lt;1000000;j++){</span></span>
<span class="line"><span>        i++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="synchronized-禁止指令重排分析" tabindex="-1">synchronized 禁止指令重排分析 <a class="header-anchor" href="#synchronized-禁止指令重排分析" aria-label="Permalink to &quot;synchronized 禁止指令重排分析&quot;">​</a></h2><blockquote><p>指令重排的情况，可以参考文章《<a href="https://mp.weixin.qq.com/s/s983WflPH7jF0-_SpGRfBg" target="_blank" rel="noreferrer">Java 并发编程系列 1-基础知识</a>》</p></blockquote><p>我们先看如下代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>class MonitorExample {</span></span>
<span class="line"><span>    int a = 0;</span></span>
<span class="line"><span>    public synchronized void writer() {  //1</span></span>
<span class="line"><span>        a++;                             //2</span></span>
<span class="line"><span>    }                                    //3</span></span>
<span class="line"><span>    public synchronized void reader() {  //4</span></span>
<span class="line"><span>        int i = a;                       //5</span></span>
<span class="line"><span>        //……</span></span>
<span class="line"><span>    }                                    //6</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>假设线程 A 执行 writer()方法，随后线程 B 执行 reader()方法。根据 happens before 规则，这个过程包含的 happens before 关系可以分为两类：</p><ul><li>根据程序次序规则，1 happens before 2, 2 happens before 3; 4 happens before 5, 5 happens before 6。</li><li>根据监视器锁规则，3 happens before 4。</li><li>根据 happens before 的传递性，2 happens before 5。</li></ul><p>上述 happens before 关系的图形化表现形式如下：</p><img src="`+e+`"><blockquote><p>在上图中，每一个箭头链接的两个节点，代表了一个 happens before 关系。黑色箭头表示程序顺序规则；橙色箭头表示监视器锁规则；蓝色箭头表示组合这些规则后提供的 happens before 保证。</p></blockquote><p>上图表示在线程 A 释放了锁之后，随后线程 B 获取同一个锁。在上图中，2 happens before 5。因此，线程 A 在释放锁之前所有可见的共享变量，在线程 B 获取同一个锁之后，将立刻变得对 B 线程可见。</p><h2 id="synchronized-的可重入性" tabindex="-1">synchronized 的可重入性 <a class="header-anchor" href="#synchronized-的可重入性" aria-label="Permalink to &quot;synchronized 的可重入性&quot;">​</a></h2><p>从互斥锁的设计上来说，当一个线程试图操作一个由其他线程持有的对象锁的临界资源时，将会处于阻塞状态，但当一个线程再次请求自己持有对象锁的临界资源时，这种情况属于重入锁，请求将会成功。</p><p>synchronized 就是可重入锁，因此一个线程调用 synchronized 方法的同时，在其方法体内部调用该对象另一个 synchronized 方法是允许的，如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>public class AccountingSync implements Runnable{</span></span>
<span class="line"><span>    static AccountingSync instance=new AccountingSync();</span></span>
<span class="line"><span>    static int i=0;</span></span>
<span class="line"><span>    static int j=0;</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void run() {</span></span>
<span class="line"><span>        for(int j=0;j&lt;1000000;j++){</span></span>
<span class="line"><span>            //this,当前实例对象锁</span></span>
<span class="line"><span>            synchronized(this){</span></span>
<span class="line"><span>                i++;</span></span>
<span class="line"><span>                increase();//synchronized的可重入性</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public synchronized void increase(){</span></span>
<span class="line"><span>        j++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public static void main(String[] args) throws InterruptedException {</span></span>
<span class="line"><span>        Thread t1=new Thread(instance);</span></span>
<span class="line"><span>        Thread t2=new Thread(instance);</span></span>
<span class="line"><span>        t1.start();t2.start();</span></span>
<span class="line"><span>        t1.join();t2.join();</span></span>
<span class="line"><span>        System.out.println(i);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>当前实例对象锁后进入 synchronized 代码块执行同步代码，并在代码块中调用了当前实例对象的另外一个 synchronized 方法，再次请求当前实例锁时，将被允许。需要特别注意另外一种情况，当子类继承父类时，子类也是可以通过可重入锁调用父类的同步方法。注意由于 synchronized 是基于 monitor 实现的，因此每次重入，monitor 中的计数器仍会加 1。</p><h2 id="ending" tabindex="-1">ending <a class="header-anchor" href="#ending" aria-label="Permalink to &quot;ending&quot;">​</a></h2><p>“三妹，今天就学到这吧。”我扶了扶眼镜对三妹说。</p><p>记住 synchronized 的三种应用方式，指令重排情况分析，以及 synchronized 的可重入性，通过今天的学习，你基本可以掌握 synchronized 的使用姿势，以及可能会遇到的坑。</p><hr>`,47),c=[l];function t(o,r,d,h,u,y){return a(),s("div",null,c)}const g=n(i,[["render",t]]);export{z as __pageData,g as default};
