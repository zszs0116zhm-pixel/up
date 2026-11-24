import{_ as a,o as i,c as n,a5 as e}from"./chunks/framework.bIR-4glx.js";const o=JSON.parse('{"title":"AI Project Scorecard Template","description":"Evaluate an AI project with quality, time, rework, cost, safety, user feedback, and rollback status instead of generation speed alone.","frontmatter":{"title":"AI Project Scorecard Template","description":"Evaluate an AI project with quality, time, rework, cost, safety, user feedback, and rollback status instead of generation speed alone.","updated":"2026-08-31T00:00:00.000Z","worksheetDownload":{"url":"/downloads/worksheets/ai-project-scorecard.en.md","name":"ai-project-scorecard.en.md"}},"headers":[],"relativePath":"en/templates/ai-project-scorecard.md","filePath":"en/templates/ai-project-scorecard.md","lastUpdated":1788134400000}'),t={name:"en/templates/ai-project-scorecard.md"};function l(p,s,r,h,k,c){return i(),n("div",null,[...s[0]||(s[0]=[e(`<h1 id="ai-project-scorecard-template" tabindex="-1">AI Project Scorecard Template <a class="header-anchor" href="#ai-project-scorecard-template" aria-label="Permalink to &quot;AI Project Scorecard Template&quot;">​</a></h1><p>Complete this after each release or pilot. Every number should lead back to a test, ledger, feedback record, or operations log.</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># AI Project Scorecard — YYYY-MM-DD</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Project/version:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Owner:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User and situation:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Test conditions and sample scope:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Locations of baseline, assisted, and delayed independent retest:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Metric | Result | Evidence location | Change from last time |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| --- | --- | --- | --- |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Task completion | | | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| First-pass acceptance | | | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Average/high-percentile latency | | | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Human time and rework | | | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Model/infrastructure cost | | | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Delayed independent performance | | | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Security/privacy issues | | | |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| User feedback | | | |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## Gates</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Facts and sources checked: yes / no</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Tests and edge cases covered: yes / no</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Permissions and data scope confirmed: yes / no</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Pause/degrade/rollback path works: yes / no</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Owner can explain critical decisions without the chat: yes / no</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## Release Gates</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Gate | Evidence location | Owner | Date | Pass |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| --- | --- | --- | --- | --- |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Requirements and acceptance criteria | | | | yes / no |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Real samples and boundary tests | | | | yes / no |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Permissions, privacy, and retention | | | | yes / no |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Cost ceiling and monitoring | | | | yes / no |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Pause, degrade, rollback, and notice | | | | yes / no |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## Decision</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Keep:</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Adjust:</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Stop:</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Smallest next experiment:</span></span></code></pre></div>`,3)])])}const E=a(t,[["render",l]]);export{o as __pageData,E as default};
