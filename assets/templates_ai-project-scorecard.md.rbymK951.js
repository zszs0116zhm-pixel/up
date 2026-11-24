import{_ as a,o as i,c as n,a5 as l}from"./chunks/framework.bIR-4glx.js";const c=JSON.parse('{"title":"AI 项目评分卡模板","description":"用质量、时间、返工、成本、安全、用户反馈和回滚状态评价 AI 项目，而不是只看生成速度。","frontmatter":{"title":"AI 项目评分卡模板","description":"用质量、时间、返工、成本、安全、用户反馈和回滚状态评价 AI 项目，而不是只看生成速度。","updated":"2026-08-31T00:00:00.000Z","worksheetDownload":{"url":"/downloads/worksheets/ai-project-scorecard.zh.md","name":"ai-project-scorecard.zh.md"}},"headers":[],"relativePath":"templates/ai-project-scorecard.md","filePath":"templates/ai-project-scorecard.md","lastUpdated":1788134400000}'),p={name:"templates/ai-project-scorecard.md"};function t(h,s,e,k,E,r){return i(),n("div",null,[...s[0]||(s[0]=[l(`<h1 id="ai-项目评分卡模板" tabindex="-1">AI 项目评分卡模板 <a class="header-anchor" href="#ai-项目评分卡模板" aria-label="Permalink to &quot;AI 项目评分卡模板&quot;">​</a></h1><p>每次发布或试点后填写一次。数字应能回到测试、账本、反馈或运行记录。</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># AI Project Scorecard — YYYY-MM-DD</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">项目/版本：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">负责人：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">用户与场景：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">测试条件与样本范围：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">基线、辅助版和延迟独立复测位置：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 指标 | 本次结果 | 证据位置 | 与上次相比 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| --- | --- | --- | --- |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 任务完成率 | | | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 首次通过率 | | | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 平均/高位延迟 | | | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 人工时间与返工 | | | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 模型/基础设施成本 | | | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 延迟独立表现 | | | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 安全/隐私问题 | | | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 用户反馈 | | | |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 门禁</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 事实与来源已核验：是 / 否</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 测试与边界已覆盖：是 / 否</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 权限与数据范围已确认：是 / 否</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 失败时可以暂停/降级/回滚：是 / 否</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 负责人能在没有聊天记录时解释关键决定：是 / 否</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 上线门禁</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 门禁 | 证据位置 | 负责人 | 日期 | 通过 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| --- | --- | --- | --- | --- |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 需求与验收标准 | | | | 是 / 否 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 真实样本与边界测试 | | | | 是 / 否 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 权限、隐私与留存 | | | | 是 / 否 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 成本上限与监控 | | | | 是 / 否 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 暂停、降级、回滚与通知 | | | | 是 / 否 |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 决策</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 保留：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 调整：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 停止：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 下一项最小实验：</span></span></code></pre></div>`,3)])])}const o=a(p,[["render",t]]);export{c as __pageData,o as default};
