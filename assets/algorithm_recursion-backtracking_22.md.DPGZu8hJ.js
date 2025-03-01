import{_ as h,D as t,c as n,l as i,a as s,I as k,a4 as l,o as p,aB as e}from"./chunks/framework.-JfgED0h.js";const A=JSON.parse('{"title":"LeetCode 22. 括号生成","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/recursion-backtracking/22.md","filePath":"algorithm/recursion-backtracking/22.md"}'),F={name:"algorithm/recursion-backtracking/22.md"},r={id:"leetcode-22-括号生成",tabindex:"-1"},d=i("a",{class:"header-anchor",href:"#leetcode-22-括号生成","aria-label":'Permalink to "LeetCode 22. 括号生成 <Badge type="warning" text="中等" />"'},"​",-1),g=l(`<h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><p>数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。</p><p>示例 1：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">输入：n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> 3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">输出：[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">       &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">((()))</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">       &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">(()())</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">       &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">(())()</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">       &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">()(())</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">       &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">()()()</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">     ]</span></span></code></pre></div><p>示例 2：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">输入：n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">输出：[</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">()</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">]</span></span></code></pre></div><p>来源：力扣（LeetCode）链接：<a href="https://leetcode-cn.com/problems/generate-parentheses" target="_blank" rel="noreferrer">https://leetcode-cn.com/problems/generate-parentheses</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p>这道题，看了大佬的题解，发现真是有意思，现在来解释一下。</p><p>我们可以直接走可行的情况，对于不可行的情况，自然就剪掉了。</p><p>关键在于左右括号如何选择，首先，对于左括号，起初我们必然是要选的，然后我们也可以全部选完，因此，只要有左括号我们必须选，而对于右括号而言，它的剩余数量必须大于剩余左括号数量，我们才能选右括号。</p><p>举个反例，假如我们现在已经有了 <code>(())</code>，<code>n = 3</code>，然后左右括号都还剩一个，如果理解选 <code>)</code>，岂不是就 <code>(()))</code>了，显示不是有效的括号，应该被剪掉才是，因此，我们必须严格右括号剩余数量必须大于剩余左括号数量，我们才能选右括号。</p><p><img src="`+e+`" alt=""></p><p>参考 <a href="https://leetcode-cn.com/problems/generate-parentheses/solution/shou-hua-tu-jie-gua-hao-sheng-cheng-hui-su-suan-fa/">笨猪爆破组</a> 大佬图解</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-SCvOg" id="tab-dawt77y" checked="checked"><label for="tab-dawt77y">javascript</label><input type="radio" name="group-SCvOg" id="tab-Ehh3Nzr"><label for="tab-Ehh3Nzr">cpp</label><input type="radio" name="group-SCvOg" id="tab-KAnehgI"><label for="tab-KAnehgI">java</label><input type="radio" name="group-SCvOg" id="tab-NmsWVgX"><label for="tab-NmsWVgX">python</label></div><div class="blocks"><div class="language-javascript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#62E884;"> generateParenthesis</span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFB86C;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">n</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> [];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">  let</span><span style="--shiki-light:#6F42C1;--shiki-dark:#62E884;"> dfs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFB86C;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">cur</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFB86C;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">left</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFB86C;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">right</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> (cur.</span><span style="--shiki-light:#005CC5;--shiki-dark:#F6F6F4;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;"> ===</span><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> n) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">      res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#62E884;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">(cur);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">    }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7B7F8B;">    // 左括号还存在，就可以选左括号</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> (left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#62E884;">dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">(cur </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;"> &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, right);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7B7F8B;">    // 右括号数量要大于左括号，才可以选右括号</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> (right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> left) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#62E884;">dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">(cur </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;"> &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, left, right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">  };</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#62E884;">  dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, n, n);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> res;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">};</span></span></code></pre></div><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#97E1F1;"> Solution</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">public:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    vector</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#62E884;">generateParenthesis</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFB86C;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> n</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">        vector</span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> res;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#62E884;">        dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, n, n, res);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> res;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">    void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#62E884;"> dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">string</span><span style="--shiki-light:#E36209;--shiki-dark:#FFB86C;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> cur</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFB86C;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> left</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFB86C;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> right</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">vector</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFB86C;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> res</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> (left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">            res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#62E884;">push_back</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">(cur);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> (left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#62E884;">dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">(cur </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;"> &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, right, res);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> (right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> left) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#62E884;">dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">(cur </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;"> &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, left, right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, res);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">};</span></span></code></pre></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#97E1F1;"> Solution</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> List</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F6F6F4;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#62E884;">generateParenthesis</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFB86C;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> n</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        List</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F6F6F4;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">&gt; res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;--shiki-light-font-weight:inherit;--shiki-dark-font-weight:bold;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> ArrayList</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#62E884;">        dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, n, n, res);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> res;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#62E884;"> dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">String</span><span style="--shiki-light:#E36209;--shiki-dark:#FFB86C;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> cur</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFB86C;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> left</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFB86C;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> right</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">List</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F6F6F4;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">&gt; </span><span style="--shiki-light:#E36209;--shiki-dark:#FFB86C;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> (left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">            res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#62E884;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">(cur);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> (left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#62E884;">dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">(cur </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;"> &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, right, res);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> (right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> left) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#62E884;">dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">(cur </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;"> &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, left, right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, res);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">}</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#97E1F1;"> Solution</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#62E884;"> generateParenthesis</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#BF9EEE;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#FFB86C;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">n</span><span style="--shiki-light:#24292E;--shiki-dark:#F286C4;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">) </span><span style="--shiki-light:#24292E;--shiki-dark:#F286C4;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> List[</span><span style="--shiki-light:#005CC5;--shiki-dark:#97E1F1;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">]:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">        res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> []</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">        def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#62E884;"> dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#FFB86C;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">cur</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#FFB86C;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">left</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#FFB86C;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">right</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">                res.append(cur)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">                return</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">: dfs(cur </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;"> &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, right)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> left: dfs(cur </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;"> &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#E7EE98;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, left, right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#BF9EEE;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">        dfs(</span><span style="--shiki-light:#032F62;--shiki-dark:#DEE492;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">, n, n)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F286C4;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;"> res</span></span></code></pre></div></div></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light dracula-soft vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#F6F6F4;">学如逆水行舟，不进则退</span></span></code></pre></div>`,16);function y(E,o,c,C,f,u){const a=t("Badge");return p(),n("div",null,[i("h1",r,[s("LeetCode 22. 括号生成 "),k(a,{type:"warning",text:"中等"}),s(),d]),g])}const v=h(F,[["render",y]]);export{A as __pageData,v as default};
