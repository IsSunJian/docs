import{_ as n,c as a,o as e,a4 as p}from"./chunks/framework.-JfgED0h.js";const i="/docs/assets/image-20220601180459272.EdO6LGEm.png",l="/docs/assets/image-20220601180905087.DogXCwZO.png",o="/docs/assets/image-20220601181508525.B1fol9GV.png",t="/docs/assets/image-20220601182121977.BSLKiB1I.png",c="/docs/assets/image-20220601183120279.BPaz3YKy.png",r="/docs/assets/image-20220601184113668.MFK94NeW.png",s="/docs/assets/image-20220601184406864.BlPMZb3W.png",u="/docs/assets/image-20220602080348272.RQC2rVV3.png",d="/docs/assets/image-20220602082221628.DDuk0-2u.png",g="/docs/assets/image-20220602101505936.MvZ1TZSY.png",h="/docs/assets/image-20220602104105026.D2I6iYJr.png",m="/docs/assets/image-20220602105033073.D6N55aXt.png",b="/docs/assets/image-20220602120228616.D4ZEQqdb.png",q="/docs/assets/image-20220602120314857.CCi686sb.png",k="/docs/assets/image-20220602124551932.DLh21aTr.png",v="/docs/assets/image-20220602131432891.C53xBlry.png",y="/docs/assets/image-20220602154358235.jJ-CYRbP.png",f="/docs/assets/image-20220602154542070.SaUv0uHd.png",_="/docs/assets/image-20220602164517762.0OCiyN_I.png",C="/docs/assets/image-20220602164657256.QNczG7k3.png",x="/docs/assets/image-20220602174355905.BU6EkpRx.png",E="/docs/assets/image-20220602174716734.DAmwT79_.png",I=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"home/RabbitMQ.md","filePath":"home/RabbitMQ.md"}'),Q={name:"home/RabbitMQ.md"},S=p('<h2 id="一、初识mq" tabindex="-1">一、初识MQ <a class="header-anchor" href="#一、初识mq" aria-label="Permalink to &quot;一、初识MQ&quot;">​</a></h2><h2 id="_1-同步和异步通讯" tabindex="-1">1.同步和异步通讯 <a class="header-anchor" href="#_1-同步和异步通讯" aria-label="Permalink to &quot;1.同步和异步通讯&quot;">​</a></h2><blockquote><p>微服务间通讯有同步和异步两种方式：</p><ul><li>同步通讯：就像打电话，需要实时响应。</li><li>异步通讯：就像发邮件，不需要马上回复。</li></ul></blockquote><p><img src="'+i+'" alt="image-20220601180459272"></p><p>两种方式各有优劣，打电话可以立即得到响应，但是你却不能跟多个人同时通话。发送邮件可以同时与多个人收发邮件，但是往往响应会有延迟。</p><h3 id="_1-1-同步通讯" tabindex="-1">1.1 同步通讯 <a class="header-anchor" href="#_1-1-同步通讯" aria-label="Permalink to &quot;1.1 同步通讯&quot;">​</a></h3><blockquote><p>我们之前学习的<code>Feign</code>调用就属于同步方式，虽然调用可以实时得到结果，但存在下面的问题：</p></blockquote><p><img src="'+l+'" alt="image-20220601180905087"></p><blockquote><p>同步调用的优缺点</p></blockquote><ul><li><p><strong>同步调用的优点</strong>：</p><ul><li>时效性较强，可以立即得到结果</li></ul></li><li><p><strong>同步调用的问题</strong>：</p><ul><li><p>耦合度高</p></li><li><p>性能和吞吐能力下降</p></li><li><p>有额外的资源消耗</p></li><li><p>有级联失败问题</p></li></ul></li></ul><h3 id="_1-2-异步通讯" tabindex="-1">1.2 异步通讯 <a class="header-anchor" href="#_1-2-异步通讯" aria-label="Permalink to &quot;1.2 异步通讯&quot;">​</a></h3><blockquote><p>异步调用则可以避免上述问题</p></blockquote><p>我们以购买商品为例，用户支付后需要调用订单服务完成订单状态修改，调用物流服务，从仓库分配响应的库存并准备发货。</p><p>在事件模式中，支付服务是事件发布者（publisher），在支付完成后只需要发布一个支付成功的事件（event），事件中带上订单id。</p><p>订单服务和物流服务是事件订阅者（Consumer），订阅支付成功的事件，监听到事件后完成自己业务即可。</p><p>为了解除事件发布者与订阅者之间的耦合，两者并不是直接通信，而是有一个中间人（Broker）。发布者发布事件到Broker，不关心谁来订阅事件。订阅者从Broker订阅事件，不关心谁发来的消息。</p><p><img src="'+o+'" alt="image-20220601181508525"></p><p>Broker 是一个像数据总线一样的东西，所有的服务要接收数据和发送数据都发到这个总线上，这个总线就像协议一样，让服务间的通讯变得标准和可控。</p><blockquote><p>异步通讯的优缺点</p></blockquote><ul><li><p>异步通讯的优点：</p><ul><li><p>吞吐量提升：无需等待订阅者处理完成，响应更快速</p></li><li><p>故障隔离：服务没有直接调用，不存在级联失败问题</p></li><li><p>调用间没有阻塞，不会造成无效的资源占用</p></li><li><p>耦合度极低，每个服务都可以灵活插拔，可替换</p></li><li><p>流量削峰：不管发布事件的流量波动多大，都由Broker接收，订阅者可以按照自己的速度去处理事件</p></li></ul></li><li><p><strong>异步通讯缺点</strong>：</p><ul><li>依赖于Broker的可靠性、安全性、吞吐能力</li><li>架构复杂了，业务没有明显的流程线，不好追踪管理</li></ul></li></ul><p>好在现在开源软件或云平台上 Broker 的软件是非常成熟的，比较常见的一种就是我们今天要学习的MQ技术。</p><h2 id="_2-技术对比" tabindex="-1">2.技术对比 <a class="header-anchor" href="#_2-技术对比" aria-label="Permalink to &quot;2.技术对比&quot;">​</a></h2><blockquote><p>MQ，中文是消息队列（MessageQueue），字面来看就是存放消息的队列。也就是事件驱动架构中的Broker。</p></blockquote><p>比较常见的MQ实现：</p><ul><li><code>ActiveMQ</code></li><li><code>RabbitMQ</code></li><li><code>RocketMQ</code></li><li><code>Kafka</code></li></ul><blockquote><p>几种常见MQ的对比</p></blockquote><p><img src="'+t+`" alt="image-20220601182121977"></p><p>追求可用性：Kafka、 RocketMQ 、RabbitMQ</p><p>追求可靠性：RabbitMQ、RocketMQ</p><p>追求吞吐能力：RocketMQ、Kafka</p><p>追求消息低延迟：RabbitMQ、Kafka</p><h2 id="二、快速入门" tabindex="-1">二、快速入门 <a class="header-anchor" href="#二、快速入门" aria-label="Permalink to &quot;二、快速入门&quot;">​</a></h2><ol><li><p>通过<code>Docker</code>下载<code>RabbitMQ</code>镜像</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F286C4;">docker pull rabbitmq:3-management</span></span></code></pre></div></li><li><p>运行MQ容器</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#62E884;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#F286C4;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;"> RABBITMQ_DEFAULT_USER=admin</span><span style="--shiki-light:#005CC5;--shiki-dark:#F286C4;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;"> RABBITMQ_DEFAULT_PASS=admin</span><span style="--shiki-light:#005CC5;--shiki-dark:#F286C4;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;"> mq</span><span style="--shiki-light:#005CC5;--shiki-dark:#F286C4;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> --hostname</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;"> mq1</span><span style="--shiki-light:#005CC5;--shiki-dark:#F286C4;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;"> 15672:15672</span><span style="--shiki-light:#005CC5;--shiki-dark:#F286C4;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;"> 5672:5672</span><span style="--shiki-light:#005CC5;--shiki-dark:#F286C4;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#F286C4;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;"> rabbitmq:3-management</span></span></code></pre></div></li></ol><h2 id="_2-mq的基本结构" tabindex="-1">2.MQ的基本结构 <a class="header-anchor" href="#_2-mq的基本结构" aria-label="Permalink to &quot;2.MQ的基本结构&quot;">​</a></h2><p><img src="`+c+'" alt="image-20220601183120279"></p><blockquote><p>RabbitMQ中的一些角色：</p></blockquote><ul><li><code>publisher</code>：生产者</li><li><code>consumer</code>：消费者</li><li><code>exchange</code>：交换机，负责消息路由</li><li><code>queue</code>：队列，存储消息</li><li><code>virtualHost</code>：虚拟主机，隔离不同租户的exchange、queue、消息的隔离</li></ul><h2 id="_3-rabbitmq消息模型" tabindex="-1">3.RabbitMQ消息模型 <a class="header-anchor" href="#_3-rabbitmq消息模型" aria-label="Permalink to &quot;3.RabbitMQ消息模型&quot;">​</a></h2><blockquote><p>RabbitMQ官方提供了5个不同的Demo示例，对应了不同的消息模型</p></blockquote><p><img src="'+r+'" alt="image-20220601184113668"></p><h2 id="_4-入门案例" tabindex="-1">4.入门案例 <a class="header-anchor" href="#_4-入门案例" aria-label="Permalink to &quot;4.入门案例&quot;">​</a></h2><blockquote><p>简单队列模式的模型图</p></blockquote><p><img src="'+s+`" alt="image-20220601184406864"></p><p>官方的HelloWorld是基于最基础的消息队列模型来实现的，只包括三个角色：</p><ul><li><code>publisher</code>：消息发布者，将消息发送到队列queue</li><li><code>queue</code>：消息队列，负责接受并缓存消息</li><li><code>consumer</code>：订阅队列，处理队列中的消息</li></ul><h3 id="_4-1-publisher实现" tabindex="-1">4.1 publisher实现 <a class="header-anchor" href="#_4-1-publisher实现" aria-label="Permalink to &quot;4.1 publisher实现&quot;">​</a></h3><p>代码思路：</p><ul><li>建立连接</li><li>创建Channel</li><li>声明队列</li><li>发送消息</li><li>关闭连接和channel</li></ul><p>代码实现：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>package cn.itcast.mq.helloworld;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.rabbitmq.client.Channel;</span></span>
<span class="line"><span>import com.rabbitmq.client.Connection;</span></span>
<span class="line"><span>import com.rabbitmq.client.ConnectionFactory;</span></span>
<span class="line"><span>import org.junit.Test;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.IOException;</span></span>
<span class="line"><span>import java.util.concurrent.TimeoutException;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class PublisherTest {</span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testSendMessage() throws IOException, TimeoutException {</span></span>
<span class="line"><span>        // 1.建立连接</span></span>
<span class="line"><span>        ConnectionFactory factory = new ConnectionFactory();</span></span>
<span class="line"><span>        // 1.1.设置连接参数，分别是：主机名、端口号、vhost、用户名、密码</span></span>
<span class="line"><span>        factory.setHost(&quot;192.168.150.101&quot;);</span></span>
<span class="line"><span>        factory.setPort(5672);</span></span>
<span class="line"><span>        factory.setVirtualHost(&quot;/&quot;);</span></span>
<span class="line"><span>        factory.setUsername(&quot;itcast&quot;);</span></span>
<span class="line"><span>        factory.setPassword(&quot;123321&quot;);</span></span>
<span class="line"><span>        // 1.2.建立连接</span></span>
<span class="line"><span>        Connection connection = factory.newConnection();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 2.创建通道Channel</span></span>
<span class="line"><span>        Channel channel = connection.createChannel();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 3.创建队列</span></span>
<span class="line"><span>        String queueName = &quot;simple.queue&quot;;</span></span>
<span class="line"><span>        channel.queueDeclare(queueName, false, false, false, null);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 4.发送消息</span></span>
<span class="line"><span>        String message = &quot;hello, rabbitmq!&quot;;</span></span>
<span class="line"><span>        channel.basicPublish(&quot;&quot;, queueName, null, message.getBytes());</span></span>
<span class="line"><span>        System.out.println(&quot;发送消息成功：【&quot; + message + &quot;】&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 5.关闭通道和连接</span></span>
<span class="line"><span>        channel.close();</span></span>
<span class="line"><span>        connection.close();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-2-consumer实现" tabindex="-1">4.2 consumer实现 <a class="header-anchor" href="#_4-2-consumer实现" aria-label="Permalink to &quot;4.2 consumer实现&quot;">​</a></h3><p>代码思路：</p><ul><li>建立连接</li><li>创建Channel</li><li>声明队列</li><li>订阅消息</li></ul><p>代码实现：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>package cn.itcast.mq.helloworld;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.rabbitmq.client.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.IOException;</span></span>
<span class="line"><span>import java.util.concurrent.TimeoutException;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class ConsumerTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) throws IOException, TimeoutException {</span></span>
<span class="line"><span>        // 1.建立连接</span></span>
<span class="line"><span>        ConnectionFactory factory = new ConnectionFactory();</span></span>
<span class="line"><span>        // 1.1.设置连接参数，分别是：主机名、端口号、vhost、用户名、密码</span></span>
<span class="line"><span>        factory.setHost(&quot;192.168.150.101&quot;);</span></span>
<span class="line"><span>        factory.setPort(5672);</span></span>
<span class="line"><span>        factory.setVirtualHost(&quot;/&quot;);</span></span>
<span class="line"><span>        factory.setUsername(&quot;itcast&quot;);</span></span>
<span class="line"><span>        factory.setPassword(&quot;123321&quot;);</span></span>
<span class="line"><span>        // 1.2.建立连接</span></span>
<span class="line"><span>        Connection connection = factory.newConnection();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 2.创建通道Channel</span></span>
<span class="line"><span>        Channel channel = connection.createChannel();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 3.创建队列</span></span>
<span class="line"><span>        String queueName = &quot;simple.queue&quot;;</span></span>
<span class="line"><span>        channel.queueDeclare(queueName, false, false, false, null);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 4.订阅消息</span></span>
<span class="line"><span>        channel.basicConsume(queueName, true, new DefaultConsumer(channel){</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public void handleDelivery(String consumerTag, Envelope envelope,</span></span>
<span class="line"><span>                                       AMQP.BasicProperties properties, byte[] body) throws IOException {</span></span>
<span class="line"><span>                // 5.处理消息</span></span>
<span class="line"><span>                String message = new String(body);</span></span>
<span class="line"><span>                System.out.println(&quot;接收到消息：【&quot; + message + &quot;】&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        System.out.println(&quot;等待接收消息。。。。&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_5-总结" tabindex="-1">5.总结 <a class="header-anchor" href="#_5-总结" aria-label="Permalink to &quot;5.总结&quot;">​</a></h2><p>基本消息队列的消息发送流程：</p><ol><li><p>建立connection</p></li><li><p>创建channel</p></li><li><p>利用channel声明队列</p></li><li><p>利用channel向队列发送消息</p></li></ol><p>基本消息队列的消息接收流程：</p><ol><li><p>建立connection</p></li><li><p>创建channel</p></li><li><p>利用channel声明队列</p></li><li><p>定义consumer的消费行为handleDelivery()</p></li><li><p>利用channel将消费者与队列绑定</p></li></ol><h2 id="三、springamqp" tabindex="-1">三、SpringAMQP <a class="header-anchor" href="#三、springamqp" aria-label="Permalink to &quot;三、SpringAMQP&quot;">​</a></h2><blockquote><p><code>SpringAMQP</code>是基于<code>RabbitMQ</code>封装的一套模板，并且还利用<code>SpringBoot</code>对其实现了自动装配，使用起来非常方便。</p><p>SpringAmqp的官方地址：<a href="https://spring.io/projects/spring-amqp" target="_blank" rel="noreferrer">https://spring.io/projects/spring-amqp</a></p></blockquote><p>SpringAMQP提供了三个功能：</p><ul><li>自动声明队列、交换机及其绑定关系</li><li>基于注解的监听器模式，异步接收消息</li><li>封装了<code>RabbitTemplate</code>工具，用于发送消息</li></ul><p><img src="`+u+'" alt="image-20220602080348272"></p><h2 id="_1-basic-queue-简单队列模型" tabindex="-1">1.Basic Queue 简单队列模型 <a class="header-anchor" href="#_1-basic-queue-简单队列模型" aria-label="Permalink to &quot;1.Basic Queue 简单队列模型&quot;">​</a></h2><blockquote><p><strong>利用SpringAMQP实现HelloWorld中的基础消息队列功能</strong></p></blockquote><p>流程如下：</p><ul><li><p>在父工程中引入<code>spring-amqp</code>的依赖</p></li><li><p>在<code>publisher</code>服务中利用<code>RabbitTemplate</code>发送消息到<code>simple.queue</code>这个队列</p></li><li><p>在<code>consumer</code>服务中编写消费逻辑，绑定<code>simple.queue</code>这个队列</p></li></ul><p><img src="'+s+`" alt="image-20220601184406864"></p><blockquote><p>具体实现步骤</p></blockquote><ol><li><p><strong>父工程<code>mq-demo</code>引入依赖</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;!--AMQP依赖，包含RabbitMQ--&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-boot-starter-amqp&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div></li><li><p><strong>在<code>publisher</code>服务的<code>application.yml</code>中添加配置</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>  rabbitmq:</span></span>
<span class="line"><span>    host: your ip # 主机名</span></span>
<span class="line"><span>    port: 5672 # 端口</span></span>
<span class="line"><span>    virtual-host: / # 虚拟主机</span></span>
<span class="line"><span>    username: admin # 用户名</span></span>
<span class="line"><span>    password: admin # 密码</span></span></code></pre></div></li><li><p><strong>然后在<code>publisher</code>服务中编写测试类<code>SpringAmqpTest</code>，并利用<code>RabbitTemplate</code>实现消息发送</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>package cn.itcast.mq.spring;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.junit.Test;</span></span>
<span class="line"><span>import org.junit.runner.RunWith;</span></span>
<span class="line"><span>import org.springframework.amqp.rabbit.core.RabbitTemplate;</span></span>
<span class="line"><span>import org.springframework.beans.factory.annotation.Autowired;</span></span>
<span class="line"><span>import org.springframework.boot.test.context.SpringBootTest;</span></span>
<span class="line"><span>import org.springframework.test.context.junit4.SpringRunner;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@RunWith(SpringRunner.class)</span></span>
<span class="line"><span>@SpringBootTest</span></span>
<span class="line"><span>public class SpringAmqpTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private RabbitTemplate rabbitTemplate;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void testSimpleQueue() {</span></span>
<span class="line"><span>        // 队列名称</span></span>
<span class="line"><span>        String queueName = &quot;simple.queue&quot;;</span></span>
<span class="line"><span>        // 消息</span></span>
<span class="line"><span>        String message = &quot;hello, spring amqp!&quot;;</span></span>
<span class="line"><span>        // 发送消息</span></span>
<span class="line"><span>        rabbitTemplate.convertAndSend(queueName, message);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p><strong>在<code>consumer</code>服务的<code>application.yml</code>中添加配置</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>  rabbitmq:</span></span>
<span class="line"><span>    host: your ip # 主机名</span></span>
<span class="line"><span>    port: 5672 # 端口</span></span>
<span class="line"><span>    virtual-host: / # 虚拟主机</span></span>
<span class="line"><span>    username: admin # 用户名</span></span>
<span class="line"><span>    password: admin # 密码</span></span></code></pre></div></li><li><p><strong>然后在<code>consumer</code>服务中新建一个类用于接收队列消息</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>package cn.itcast.mq.listener;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.springframework.amqp.rabbit.annotation.RabbitListener;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class SpringRabbitListener {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @RabbitListener(queues = &quot;simple.queue&quot;)</span></span>
<span class="line"><span>    public void listenSimpleQueueMessage(String msg) throws InterruptedException {</span></span>
<span class="line"><span>        System.out.println(&quot;spring 消费者接收到消息：【&quot; + msg + &quot;】&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ol><h2 id="_2-work-queue工作队列模型" tabindex="-1">2.Work Queue工作队列模型 <a class="header-anchor" href="#_2-work-queue工作队列模型" aria-label="Permalink to &quot;2.Work Queue工作队列模型&quot;">​</a></h2><blockquote><p>Work queues，也被称为（Task queues），任务模型。简单来说就是<strong>让多个消费者绑定到一个队列，共同消费队列中的消息</strong>。</p></blockquote><p><img src="`+d+`" alt="image-20220602082221628"></p><p>当消息处理比较耗时的时候，可能生产消息的速度会远远大于消息的消费速度。长此以往，消息就会堆积越来越多，无法及时处理。</p><p>此时就可以使用work 模型，多个消费者共同处理消息处理，速度就能大大提高了。</p><p>基本思路如下：</p><ul><li>在<code>publisher</code>服务中定义测试方法，每秒产生50条消息，发送到<code>simple.queue</code></li><li>在<code>consumer</code>服务中定义两个消息监听者，都监听<code>simple.queue</code>队列</li><li>消费者1每秒处理50条消息，消费者2每秒处理10条消息</li></ul><h3 id="_2-1-消息发送" tabindex="-1">2.1 消息发送 <a class="header-anchor" href="#_2-1-消息发送" aria-label="Permalink to &quot;2.1 消息发送&quot;">​</a></h3><blockquote><p><strong>这次我们循环发送，模拟大量消息堆积现象。</strong></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span>     * workQueue</span></span>
<span class="line"><span>     * 向队列中不停发送消息，模拟消息堆积。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>@Test</span></span>
<span class="line"><span>public void testWorkQueue() throws InterruptedException {</span></span>
<span class="line"><span>    // 队列名称</span></span>
<span class="line"><span>    String queueName = &quot;simple.queue&quot;;</span></span>
<span class="line"><span>    // 消息</span></span>
<span class="line"><span>    String message = &quot;hello, message_&quot;;</span></span>
<span class="line"><span>    for (int i = 0; i &lt; 50; i++) {</span></span>
<span class="line"><span>        // 发送消息</span></span>
<span class="line"><span>        rabbitTemplate.convertAndSend(queueName, message + i);</span></span>
<span class="line"><span>        Thread.sleep(20);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-2-消息接收" tabindex="-1">2.2 消息接收 <a class="header-anchor" href="#_2-2-消息接收" aria-label="Permalink to &quot;2.2 消息接收&quot;">​</a></h3><blockquote><p><strong>要模拟多个消费者绑定同一个队列，我们在<code>consumer</code>服务的<code>SpringRabbitListener</code>中添加2个新的方法：</strong></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RabbitListener(queues = &quot;simple.queue&quot;)</span></span>
<span class="line"><span>public void listenWorkQueue1(String msg) throws InterruptedException {</span></span>
<span class="line"><span>    System.out.println(&quot;消费者1接收到消息：【&quot; + msg + &quot;】&quot; + LocalTime.now());</span></span>
<span class="line"><span>    Thread.sleep(20);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@RabbitListener(queues = &quot;simple.queue&quot;)</span></span>
<span class="line"><span>public void listenWorkQueue2(String msg) throws InterruptedException {</span></span>
<span class="line"><span>    System.err.println(&quot;消费者2........接收到消息：【&quot; + msg + &quot;】&quot; + LocalTime.now());</span></span>
<span class="line"><span>    Thread.sleep(200);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>注意：此时消费者1每接收一次消息就休眠20毫秒，消费者2每接收一次消息休眠200毫秒。</strong></p><h3 id="_2-3-测试" tabindex="-1">2.3 测试 <a class="header-anchor" href="#_2-3-测试" aria-label="Permalink to &quot;2.3 测试&quot;">​</a></h3><ul><li><p><strong>启动<code>ConsumerApplication</code>后，在执行<code>publisher</code>服务中刚刚编写的发送测试方法<code>testWorkQueue</code></strong></p><p><img src="`+g+`" alt="image-20220602101505936"></p></li><li><p><strong>通过查看控制台日志我们发现</strong></p><ul><li>消费者1很快完成了自己的25条消息。消费者2却在缓慢的处理自己的25条消息。</li><li>也就是说消息是平均分配给每个消费者，并没有考虑到消费者的处理能力。这样显然是有问题的。</li></ul></li></ul><h3 id="_2-4-能者多劳" tabindex="-1">2.4 能者多劳 <a class="header-anchor" href="#_2-4-能者多劳" aria-label="Permalink to &quot;2.4 能者多劳&quot;">​</a></h3><blockquote><p><strong>出现上面的问题是因为 <code>RabbitMQ</code> 默认有一个消息预取机制，显然这不是我们想要的结果，我们需要的是能者多劳嘛，所以去限制每次只能取一条消息，可以解决这个问题。</strong></p></blockquote><p>在spring中有一个简单的配置，可以解决这个问题。我们修改<code>consumer</code>服务的<code>application.yml</code>文件，添加配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>  rabbitmq:</span></span>
<span class="line"><span>    listener:</span></span>
<span class="line"><span>      simple:</span></span>
<span class="line"><span>        prefetch: 1 # 每次只能获取一条消息，处理完成才能获取下一个消息</span></span></code></pre></div><h3 id="_2-5-总结" tabindex="-1">2.5 总结 <a class="header-anchor" href="#_2-5-总结" aria-label="Permalink to &quot;2.5 总结&quot;">​</a></h3><p>Work模型的使用：</p><ul><li>多个消费者绑定到一个队列，同一条消息只会被一个消费者处理</li><li>通过设置<code>prefetch</code>来控制消费者预取的消息数量</li></ul><h2 id="_3-发布-订阅" tabindex="-1">3.发布 / 订阅 <a class="header-anchor" href="#_3-发布-订阅" aria-label="Permalink to &quot;3.发布 / 订阅&quot;">​</a></h2><p>发布订阅的模型如图：</p><p><img src="`+h+'" alt="image-20220602104105026"></p><p>可以看到，在订阅模型中，多了一个<code>exchange</code>角色，而且过程略有变化：</p><ul><li><code>Publisher</code>：生产者，也就是要发送消息的程序，但是不再发送到队列中，而是发给X（交换机）</li><li><code>Exchange</code>：交换机，图中的X。一方面，接收生产者发送的消息。另一方面，知道如何处理消息，例如递交给某个特别队列、递交给所有队列、或是将消息丢弃。到底如何操作，取决于<code>Exchange</code>的类型。Exchange有以下3种类型： <ul><li><code>Fanout</code>：广播，<strong>将消息交给所有绑定到交换机的队列</strong></li><li><code>Direct</code>：定向，<strong>把消息交给符合指定routing key 的队列</strong></li><li><code>Topic</code>：通配符，<strong>把消息交给符合routing pattern（路由模式） 的队列</strong></li></ul></li><li><code>Consumer</code>：消费者，与以前一样，订阅队列，没有变化</li><li><code>Queue</code>：消息队列也与以前一样，接收消息、缓存消息。</li></ul><p><strong>Exchange（交换机）只负责转发消息，不具备存储消息的能力</strong>，因此如果没有任何队列与Exchange绑定，或者没有符合路由规则的队列，那么消息会丢失！</p><h2 id="_4-fanout" tabindex="-1">4.Fanout <a class="header-anchor" href="#_4-fanout" aria-label="Permalink to &quot;4.Fanout&quot;">​</a></h2><blockquote><p><strong>Fanout，英文翻译是扇出，在 MQ 中我们也可以称为广播。</strong></p></blockquote><p><img src="'+m+'" alt="image-20220602105033073"></p><p>Fanout的消息发送流程如下：</p><ol><li>可以有多个队列</li><li>每个队列都要绑定到Exchange（交换机）</li><li>生产者发送的消息，只能发送到交换机，交换机来决定要发给哪个队列，生产者无法决定</li><li>交换机把消息发送给绑定过的所有队列</li><li>订阅队列的消费者都能拿到消息</li></ol><p>我们的计划是这样的：</p><ol><li>创建一个交换机 <code>itcast.fanout</code>，类型是<code>Fanout</code></li><li>创建两个队列<code>fanout.queue1</code>和<code>fanout.queue2</code>，绑定到交换机<code>itcast.fanout</code></li></ol><p><img src="'+b+'" alt="image-20220602120228616"></p><h3 id="_4-1-声明队列和交换机" tabindex="-1">4.1 声明队列和交换机 <a class="header-anchor" href="#_4-1-声明队列和交换机" aria-label="Permalink to &quot;4.1 声明队列和交换机&quot;">​</a></h3><blockquote><p>Spring提供了一个接口<code>Exchange</code>，来表示所有不同类型的交换机</p></blockquote><p><img src="'+q+`" alt="image-20220602120314857"></p><ul><li><p><strong>在 <code>consumer</code> 中创建一个类，声明队列、交换机、绑定对象 <code>Binding</code></strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>package cn.itcast.mq.config;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.springframework.amqp.core.Binding;</span></span>
<span class="line"><span>import org.springframework.amqp.core.BindingBuilder;</span></span>
<span class="line"><span>import org.springframework.amqp.core.FanoutExchange;</span></span>
<span class="line"><span>import org.springframework.amqp.core.Queue;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Bean;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Configuration;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class FanoutConfig {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 声明一个交换机</span></span>
<span class="line"><span>     * @return</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public FanoutExchange fanoutExchange(){</span></span>
<span class="line"><span>        return new FanoutExchange(&quot;itcast.fanout&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 声明一个队列</span></span>
<span class="line"><span>     * @return</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public Queue fanoutQueue1(){</span></span>
<span class="line"><span>        return new Queue(&quot;fanout.queue1&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 绑定队列和交换机</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public Binding bindingQueue1(Queue fanoutQueue1, FanoutExchange fanoutExchange){</span></span>
<span class="line"><span>        return BindingBuilder</span></span>
<span class="line"><span>                .bind(fanoutQueue1)</span></span>
<span class="line"><span>                .to(fanoutExchange);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 在声明一个队列</span></span>
<span class="line"><span>     * @return</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public Queue fanoutQueue2(){</span></span>
<span class="line"><span>        return new Queue(&quot;fanout.queue2&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 绑定队列和交换机</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public Binding bindingQueue2(Queue fanoutQueue2, FanoutExchange fanoutExchange){</span></span>
<span class="line"><span>        return BindingBuilder</span></span>
<span class="line"><span>                .bind(fanoutQueue2)</span></span>
<span class="line"><span>                .to(fanoutExchange);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p><strong>绑定完成后我们可以网页中查看到绑定关系</strong></p><p><img src="`+k+`" alt="image-20220602124551932"></p></li><li><p>但是通过 <code>@Bean</code> 的方式来声明队列和交换机以及绑定队列到交换机实在太麻烦了，我们可以直接通过注解<code>@RabbitListener</code>来完成</p><p>这样不仅完成了队列以及交换机的创建、绑定，还完成了消息的接收</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RabbitListener(bindings = @QueueBinding(</span></span>
<span class="line"><span>    value = @Queue(&quot;fanout.queue3&quot;),</span></span>
<span class="line"><span>    exchange = @Exchange(value = &quot;itcast.fanout&quot;, type = &quot;fanout&quot;)</span></span>
<span class="line"><span>))</span></span>
<span class="line"><span>public void listenFanoutQueue3(String msg){</span></span>
<span class="line"><span>    System.out.println(&quot;消费者3接收到Fanout消息：【&quot; + msg + &quot;】&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ul><h3 id="_4-2-消息发送" tabindex="-1">4.2 消息发送 <a class="header-anchor" href="#_4-2-消息发送" aria-label="Permalink to &quot;4.2 消息发送&quot;">​</a></h3><p><strong>在<code>publisher</code>服务的<code>SpringAmqpTest</code>类中添加测试方法</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Test</span></span>
<span class="line"><span>public void testFanoutExchange() {</span></span>
<span class="line"><span>    // 队列名称</span></span>
<span class="line"><span>    String exchangeName = &quot;itcast.fanout&quot;;</span></span>
<span class="line"><span>    // 消息</span></span>
<span class="line"><span>    String message = &quot;hello, everyone!&quot;;</span></span>
<span class="line"><span>    // 发送消息，参数分别是：交互机名称、RoutingKey（暂时为空）、消息</span></span>
<span class="line"><span>    rabbitTemplate.convertAndSend(exchangeName, &quot;&quot;, message);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-3-消息接收" tabindex="-1">4.3 消息接收 <a class="header-anchor" href="#_4-3-消息接收" aria-label="Permalink to &quot;4.3 消息接收&quot;">​</a></h3><p><strong>在<code>consumer</code>服务的<code>SpringRabbitListener</code>中添加两个方法，作为消费者</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RabbitListener(queues = &quot;fanout.queue1&quot;)</span></span>
<span class="line"><span>public void listenFanoutQueue1(String msg){</span></span>
<span class="line"><span>    System.out.println(&quot;消费者1接收到Fanout消息：【&quot; + msg + &quot;】&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@RabbitListener(queues = &quot;fanout.queue2&quot;)</span></span>
<span class="line"><span>public void listenFanoutQueue2(String msg){</span></span>
<span class="line"><span>    System.out.println(&quot;消费者2接收到Fanout消息：【&quot; + msg + &quot;】&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-4-测试" tabindex="-1">4.4 测试 <a class="header-anchor" href="#_4-4-测试" aria-label="Permalink to &quot;4.4 测试&quot;">​</a></h3><p>运行测试方法，可以看到三个消费者均接收到了消息</p><p><img src="`+v+'" alt="image-20220602131432891"></p><h3 id="_4-5-总结" tabindex="-1">4.5 总结 <a class="header-anchor" href="#_4-5-总结" aria-label="Permalink to &quot;4.5 总结&quot;">​</a></h3><p><strong>交换机的作用是什么？</strong></p><ul><li>接收publisher发送的消息</li><li>将消息按照规则路由到与之绑定的队列</li><li>不能缓存消息，路由失败，消息丢失</li><li>FanoutExchange的会将消息路由到每个绑定的队列</li></ul><p><strong>声明队列、交换机、绑定关系的Bean是什么？</strong></p><ul><li>Queue</li><li>FanoutExchange</li><li>Binding</li></ul><h2 id="_5-direct" tabindex="-1">5.Direct <a class="header-anchor" href="#_5-direct" aria-label="Permalink to &quot;5.Direct&quot;">​</a></h2><blockquote><p><strong>在<code>Fanout</code>模式中，一条消息，会被所有订阅的队列都消费。但是，在某些场景下，我们希望不同的消息被不同的队列消费。这时就要用到<code>Direct</code>类型的<code>Exchange</code>。</strong></p></blockquote><p><img src="'+y+'" alt="image-20220602154358235"></p><p><strong>在Direct模型下</strong>：</p><ul><li>队列与交换机的绑定，不能是任意绑定了，而是要指定一个<code>RoutingKey</code>（路由key）</li><li>消息的发送方在 向 Exchange发送消息时，也必须指定消息的 <code>RoutingKey</code>。</li><li>Exchange不再把消息交给每一个绑定的队列，而是根据消息的<code>Routing Key</code>进行判断，只有队列的<code>Routingkey</code>与消息的 <code>Routing key</code>完全一致，才会接收到消息</li></ul><h3 id="_5-1-案例需求" tabindex="-1">5.1 案例需求 <a class="header-anchor" href="#_5-1-案例需求" aria-label="Permalink to &quot;5.1 案例需求&quot;">​</a></h3><ol><li><p>利用<code>@RabbitListener</code>声明<code>Exchange</code>、<code>Queue</code>、<code>RoutingKey</code></p></li><li><p>在<code>consumer</code>服务中，编写两个消费者方法，分别监听<code>direct.queue1</code>和<code>direct.queue2</code></p></li><li><p>在<code>publisher</code>中编写测试方法，向<code>itcast. direct</code>发送消息</p></li></ol><p><img src="'+f+`" alt="image-20220602154542070"></p><h3 id="_5-2-基于注解声明队列和交换机" tabindex="-1">5.2 基于注解声明队列和交换机 <a class="header-anchor" href="#_5-2-基于注解声明队列和交换机" aria-label="Permalink to &quot;5.2 基于注解声明队列和交换机&quot;">​</a></h3><p><strong>在<code>consumer</code>的<code>SpringRabbitListener</code>中添加两个消费者，同时基于注解来声明队列和交换机</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RabbitListener(bindings = @QueueBinding(</span></span>
<span class="line"><span>    value = @Queue(&quot;direct.queue1&quot;),</span></span>
<span class="line"><span>    exchange = @Exchange(name = &quot;itcast.direct&quot;,type = &quot;direct&quot;),</span></span>
<span class="line"><span>    key = {&quot;blue&quot;,&quot;red&quot;}</span></span>
<span class="line"><span>))</span></span>
<span class="line"><span>public void listenDirectQueue1(String msg){</span></span>
<span class="line"><span>    System.out.println(&quot;消费者接收到direct.queue1的消息：【&quot; + msg + &quot;】&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@RabbitListener(bindings = @QueueBinding(</span></span>
<span class="line"><span>    value = @Queue(&quot;direct.queue2&quot;),</span></span>
<span class="line"><span>    exchange = @Exchange(name = &quot;itcast.direct&quot;,type = &quot;direct&quot;),</span></span>
<span class="line"><span>    key = {&quot;yellow&quot;,&quot;red&quot;}</span></span>
<span class="line"><span>))</span></span>
<span class="line"><span>public void listenDirectQueue2(String msg){</span></span>
<span class="line"><span>    System.out.println(&quot;消费者接收到direct.queue2的消息：【&quot; + msg + &quot;】&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_5-3-消息发送" tabindex="-1">5.3 消息发送 <a class="header-anchor" href="#_5-3-消息发送" aria-label="Permalink to &quot;5.3 消息发送&quot;">​</a></h3><p><strong>在<code>publisher</code>服务的<code>SpringAmqpTest</code>类中添加测试方法</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Test</span></span>
<span class="line"><span>public void testSendDirectExchange() {</span></span>
<span class="line"><span>    // 交换机名称</span></span>
<span class="line"><span>    String exchangeName = &quot;itcast.direct&quot;;</span></span>
<span class="line"><span>    // 消息</span></span>
<span class="line"><span>    String message = &quot;红色警报！日本乱排核废水，导致海洋生物变异，惊现哥斯拉！&quot;;</span></span>
<span class="line"><span>    // 发送消息</span></span>
<span class="line"><span>    rabbitTemplate.convertAndSend(exchangeName, &quot;red&quot;, message);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>可以更换routingKey进行测试！</p><h3 id="_5-4-总结" tabindex="-1">5.4 总结 <a class="header-anchor" href="#_5-4-总结" aria-label="Permalink to &quot;5.4 总结&quot;">​</a></h3><p><strong>描述下<code>Direct</code>交换机与<code>Fanout</code>交换机的差异？</strong></p><ul><li><code>Fanout</code>交换机将消息路由给每一个与之绑定的队列</li><li><code>Direct</code>交换机根据<code>RoutingKey</code>判断路由给哪个队列</li><li>如果多个队列具有相同的<code>RoutingKey</code>，则与<code>Fanout</code>功能类似</li></ul><p><strong>基于<code>@RabbitListener</code>注解声明队列和交换机有哪些常见注解？</strong></p><ul><li><code>@Queue</code></li><li><code>@Exchange</code></li></ul><h2 id="_6-topic" tabindex="-1">6.Topic <a class="header-anchor" href="#_6-topic" aria-label="Permalink to &quot;6.Topic&quot;">​</a></h2><blockquote><p><code>Topic</code>类型的<code>Exchange</code>与<code>Direct</code>相比，都是可以根据<code>RoutingKey</code>把消息路由到不同的队列。只不过<code>Topic</code>类型<code>Exchange</code>可以让队列在绑定<code>Routing key</code> 的时候使用==通配符==！</p></blockquote><p>通配符规则：</p><ul><li><code>#</code>：匹配一个或多个词</li><li><code>*</code>：只能匹配一个词</li></ul><p>举例：</p><p><code>item.#</code>：能够匹配<code>item.spu.insert</code> 或者 <code>item.spu</code></p><p><code>item.*</code>：只能匹配<code>item.spu</code></p><p>图示：</p><p><img src="`+_+'" alt="image-20220602164517762"></p><p>Queue1：绑定的是<code>china.#</code> ，因此凡是以 <code>china.</code>开头的<code>routing key</code> 都会被匹配到。包括<code>china.news</code>和<code>china.weather</code></p><p>Queue2：绑定的是<code>#.news</code> ，因此凡是以 <code>.news</code>结尾的 <code>routing key</code> 都会被匹配。包括<code>china.news</code>和<code>japan.news</code></p><h3 id="_6-1-案例需求" tabindex="-1">6.1 案例需求 <a class="header-anchor" href="#_6-1-案例需求" aria-label="Permalink to &quot;6.1 案例需求&quot;">​</a></h3><ol><li><p>利用<code>@RabbitListener</code>声明<code>Exchange</code>、<code>Queue</code>、<code>RoutingKey</code></p></li><li><p>在<code>consumer</code>服务中，编写两个消费者方法，分别监听<code>topic.queue1</code>和<code>topic.queue2</code></p></li><li><p>在<code>publisher</code>中编写测试方法，向<code>itcast. topic</code>发送消息</p></li></ol><p><img src="'+C+`" alt="image-20220602164657256"></p><h3 id="_6-2-消息发送" tabindex="-1">6.2 消息发送 <a class="header-anchor" href="#_6-2-消息发送" aria-label="Permalink to &quot;6.2 消息发送&quot;">​</a></h3><p><strong>在<code>publisher</code>服务的<code>SpringAmqpTest</code>类中添加测试方法：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span>     * topicExchange</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>@Test</span></span>
<span class="line"><span>public void testSendTopicExchange() {</span></span>
<span class="line"><span>    // 交换机名称</span></span>
<span class="line"><span>    String exchangeName = &quot;itcast.topic&quot;;</span></span>
<span class="line"><span>    // 消息</span></span>
<span class="line"><span>    String message = &quot;喜报！孙悟空大战哥斯拉，胜!&quot;;</span></span>
<span class="line"><span>    // 发送消息</span></span>
<span class="line"><span>    rabbitTemplate.convertAndSend(exchangeName, &quot;china.news&quot;, message);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_6-3-消息接收" tabindex="-1">6.3 消息接收 <a class="header-anchor" href="#_6-3-消息接收" aria-label="Permalink to &quot;6.3 消息接收&quot;">​</a></h3><p><strong>在<code>consumer</code>服务的<code>SpringRabbitListener</code>中添加方法：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@RabbitListener(bindings = @QueueBinding(</span></span>
<span class="line"><span>    value = @Queue(name = &quot;topic.queue1&quot;),</span></span>
<span class="line"><span>    exchange = @Exchange(name = &quot;itcast.topic&quot;, type = ExchangeTypes.TOPIC),</span></span>
<span class="line"><span>    key = &quot;china.#&quot;</span></span>
<span class="line"><span>))</span></span>
<span class="line"><span>public void listenTopicQueue1(String msg){</span></span>
<span class="line"><span>    System.out.println(&quot;消费者接收到topic.queue1的消息：【&quot; + msg + &quot;】&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@RabbitListener(bindings = @QueueBinding(</span></span>
<span class="line"><span>    value = @Queue(name = &quot;topic.queue2&quot;),</span></span>
<span class="line"><span>    exchange = @Exchange(name = &quot;itcast.topic&quot;, type = ExchangeTypes.TOPIC),</span></span>
<span class="line"><span>    key = &quot;#.news&quot;</span></span>
<span class="line"><span>))</span></span>
<span class="line"><span>public void listenTopicQueue2(String msg){</span></span>
<span class="line"><span>    System.out.println(&quot;消费者接收到topic.queue2的消息：【&quot; + msg + &quot;】&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_6-4-总结" tabindex="-1">6.4 总结 <a class="header-anchor" href="#_6-4-总结" aria-label="Permalink to &quot;6.4 总结&quot;">​</a></h3><p><strong>描述下Direct交换机与Topic交换机的差异？</strong></p><ul><li>Topic交换机接收的消息RoutingKey必须是多个单词，以 <code>**.**</code> 分割</li><li>Topic交换机与队列绑定时的bindingKey可以指定通配符</li><li><code>#</code>：代表0个或多个词</li><li><code>*</code>：代表1个词</li></ul><h2 id="_7-消息转换器" tabindex="-1">7.消息转换器 <a class="header-anchor" href="#_7-消息转换器" aria-label="Permalink to &quot;7.消息转换器&quot;">​</a></h2><blockquote><p>Spring 会把你发送的消息序列化为字节发送给 MQ，接收消息的时候，还会把字节反序列化为 Java 对象。</p></blockquote><p><strong>默认情况下 Spring 采用的序列化方式是 <code>JDK 序列化</code>，存在以下问题。</strong></p><ul><li>数据体积过大</li><li>有安全漏洞</li><li>可读性差</li></ul><h3 id="_7-1-测试默认转换器" tabindex="-1">7.1 测试默认转换器 <a class="header-anchor" href="#_7-1-测试默认转换器" aria-label="Permalink to &quot;7.1 测试默认转换器&quot;">​</a></h3><ul><li><p><strong>我们修改消息发送的代码，发送一个Map对象（记得停掉<code>consumer</code>服务）</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Test</span></span>
<span class="line"><span>public void testSendMap() throws InterruptedException {</span></span>
<span class="line"><span>    // 准备消息</span></span>
<span class="line"><span>    Map&lt;String,Object&gt; msg = new HashMap&lt;&gt;();</span></span>
<span class="line"><span>    msg.put(&quot;name&quot;, &quot;Jack&quot;);</span></span>
<span class="line"><span>    msg.put(&quot;age&quot;, 21);</span></span>
<span class="line"><span>    // 发送消息</span></span>
<span class="line"><span>    rabbitTemplate.convertAndSend(&quot;simple.queue&quot;,&quot;&quot;, msg);</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p>查看控制台</p><p><img src="`+x+`" alt="image-20220602174355905"></p></li></ul><h3 id="_7-2-配置json转换器" tabindex="-1">7.2 配置JSON转换器 <a class="header-anchor" href="#_7-2-配置json转换器" aria-label="Permalink to &quot;7.2 配置JSON转换器&quot;">​</a></h3><blockquote><p><strong>显然，JDK序列化方式并不合适。我们希望消息体的体积更小、可读性更高，因此可以使用JSON方式来做序列化和反序列化</strong>。</p></blockquote><ul><li><p><strong>在<code>publisher</code>和<code>consumer</code>两个服务中都引入依赖：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.fasterxml.jackson.dataformat&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;jackson-dataformat-xml&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;2.9.10&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div></li><li><p><strong>在他俩的启动类中添加一个Bean即可：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>@Bean</span></span>
<span class="line"><span>public MessageConverter jsonMessageConverter(){</span></span>
<span class="line"><span>    return new Jackson2JsonMessageConverter();</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p><strong>此时在查看控制台</strong></p><p><img src="`+E+'" alt="image-20220602174716734"></p></li></ul>',179),R=[S];function T(P,B,F,w,M,D){return e(),a("div",null,R)}const L=n(Q,[["render",T]]);export{I as __pageData,L as default};
