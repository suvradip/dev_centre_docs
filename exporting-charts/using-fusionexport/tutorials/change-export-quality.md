---
title: Change Export Quality | FusionCharts
description: This article talks about the SDKs used for changing the export type of a chart.
heading: Change Export Quality
breadcrumb: [["Home", "/"], ["Change Export Quality"]]
---

FusionExport lets you export charts in 3 different qualities. The 3 qualities are named as **good**, **better** or **best**. By default FusionExport exports charts using the second option in **better** quality.

Use the `-q` or `--quality` option to customize the quality of the exported charts. For example, to export a chart in it’s best quality:

<div class="code-wrapper">
<ul class="code-tabs extra-tabs">
    <li class="active"><a data-toggle="cli">CLI</a></li>
</ul>

<div class="tab-content">
<div class="tab cli-tab active">
<pre><code class="custom-hlc language-bash">
	$ fe -c column_chart_config.json -q best
</code></pre>
</div>
    
