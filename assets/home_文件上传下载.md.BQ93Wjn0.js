import{_ as a,c as s,o as n,a4 as p}from"./chunks/framework.-JfgED0h.js";const e="/docs/assets/image-20220727161401418.eZgHaA-N.png",l="/docs/assets/image-20220727162336550.rqthNfEl.png",f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"home/文件上传下载.md","filePath":"home/文件上传下载.md"}'),t={name:"home/文件上传下载.md"},i=p('<h2 id="_1-文件上传介绍" tabindex="-1">1.文件上传介绍 <a class="header-anchor" href="#_1-文件上传介绍" aria-label="Permalink to &quot;1.文件上传介绍&quot;">​</a></h2><blockquote><p>文件上传，也称为<code>upload</code>，是指将本地图片、视频、音频等文件上传到服务器上，可以供其他用户浏览或下载的过程。<br> 文件上传在项目中应用非常广泛，我们经常发微博、发微信朋友圈都用到了文件上传功能。</p></blockquote><p>目前一些前端组件库也提供了相应的上传组件，但是底层原理还是基于form表单的文件上传。</p><p>例如<code>ElementUI</code>中提供的<code>upload</code>上传组件：</p><p><img src="'+e+`" alt="image-20220727161401418"></p><h2 id="_2-上传格式要求" tabindex="-1">2.上传格式要求 <a class="header-anchor" href="#_2-上传格式要求" aria-label="Permalink to &quot;2.上传格式要求&quot;">​</a></h2><blockquote><p>文件上传时，对页面的form表单有如下要求：</p></blockquote><ol><li><strong>method=“post”</strong> 采用<code>post</code>方式提交数据</li><li><strong>enctype=“multipart/form-data”</strong> 采用<code>multipart</code>格式上传文件</li><li><strong>type=“file”</strong> 使用<code>input</code>的file控件上传</li></ol><p><strong>举例：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>&lt;form method=&quot;post&quot; action=&quot;/common/upload&quot; enctype=&quot;multipart/form-data&quot;&gt;</span></span>
<span class="line"><span>    &lt;input name=&quot;myFile&quot; type=&quot;file&quot;  /&gt;</span></span>
<span class="line"><span>    &lt;input type=&quot;submit&quot; value=&quot;提交&quot; /&gt; </span></span>
<span class="line"><span>&lt;/form&gt;</span></span>
<span class="line"><span>html</span></span></code></pre></div><h2 id="_3-文件下载介绍" tabindex="-1">3.文件下载介绍 <a class="header-anchor" href="#_3-文件下载介绍" aria-label="Permalink to &quot;3.文件下载介绍&quot;">​</a></h2><blockquote><p>文件下载，也称为<code>download</code>，是指将文件从服务器传输到本地计算机的过程。</p></blockquote><p><strong>通过浏览器进行文件下载，通常有两种表现形式：</strong></p><ol><li>以附件形式下载，弹出保存对话框，将文件保存到指定磁盘目录</li><li>直接在浏览器中打开</li></ol><p>通过浏览器进行文件下载，本质上就是服务端将文件以流的形式写回浏览器的过程。</p><h2 id="_4-文件上传代码实现" tabindex="-1">4.文件上传代码实现 <a class="header-anchor" href="#_4-文件上传代码实现" aria-label="Permalink to &quot;4.文件上传代码实现&quot;">​</a></h2><p>服务端代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span>    /**</span></span>
<span class="line"><span>     * 文件上传</span></span>
<span class="line"><span>     * @param file</span></span>
<span class="line"><span>     * @return</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @PostMapping(&quot;/upload&quot;)</span></span>
<span class="line"><span>    public R&lt;String&gt; upload(MultipartFile file) {</span></span>
<span class="line"><span>        // 1.获取当前上传的文件名</span></span>
<span class="line"><span>        String originalFilename = file.getOriginalFilename();</span></span>
<span class="line"><span>        // 2.截取当前文件名的格式后缀</span></span>
<span class="line"><span>        String suffix = originalFilename.substring(originalFilename.lastIndexOf(&quot;.&quot;));</span></span>
<span class="line"><span>        // 3.利用UUID生成新的文件名</span></span>
<span class="line"><span>        String fileName = UUID.randomUUID().toString(true) + suffix;</span></span>
<span class="line"><span>        // 4.判断要存储图片的路径是否存在，不存在则创建</span></span>
<span class="line"><span>        File dir = new File(basePath);</span></span>
<span class="line"><span>        if (!dir.exists()){</span></span>
<span class="line"><span>            dir.mkdirs();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 5.将上传的图片保存到指定的路径</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            file.transferTo(new File(basePath + fileName));</span></span>
<span class="line"><span>        } catch (IOException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 6.返回数据给前端</span></span>
<span class="line"><span>        return R.success(fileName);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>java</span></span></code></pre></div><h2 id="_5-文件下载代码实现" tabindex="-1">5.文件下载代码实现 <a class="header-anchor" href="#_5-文件下载代码实现" aria-label="Permalink to &quot;5.文件下载代码实现&quot;">​</a></h2><p>文件下载，页面端可以使用标签展示下载的图片：</p><p><img src="`+l+`" alt="image-20220727162336550"></p><p>服务端代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span> /**</span></span>
<span class="line"><span>     * 下载图片</span></span>
<span class="line"><span>     * @param name</span></span>
<span class="line"><span>     * @param response</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @GetMapping(&quot;/download&quot;)</span></span>
<span class="line"><span>    public void download(String name, HttpServletResponse response){</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            // 1.创建一个文件输入流用于读取图片</span></span>
<span class="line"><span>            FileInputStream fileInputStream = new FileInputStream(basePath + name);</span></span>
<span class="line"><span>            // 2.创建一个输出流，通过输出流将文件写回浏览器，在浏览器中展示图片</span></span>
<span class="line"><span>            ServletOutputStream outputStream = response.getOutputStream();</span></span>
<span class="line"><span>            int len = 0;</span></span>
<span class="line"><span>            byte[] bytes = new byte[1024];</span></span>
<span class="line"><span>            while ((len = fileInputStream.read(bytes)) != -1){</span></span>
<span class="line"><span>                outputStream.write(bytes,0,len);</span></span>
<span class="line"><span>                outputStream.flush();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // 3.关闭流</span></span>
<span class="line"><span>            outputStream.close();</span></span>
<span class="line"><span>            fileInputStream.close();</span></span>
<span class="line"><span>        } catch (IOException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>java</span></span></code></pre></div>`,23),o=[i];function c(r,u,d,m,h,g){return n(),s("div",null,o)}const b=a(t,[["render",c]]);export{f as __pageData,b as default};
