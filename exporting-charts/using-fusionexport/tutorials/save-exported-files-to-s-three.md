---
permalink: exporting-charts/using-fusionexport/tutorials/save-exported-files-to-s-three.html
title: Save exported files to S3 | FusionCharts
description: This article talks about the SDKs used to save exported files to s3.
heading: Save exported files to S3
chartPresent: False
---

To directly save exported files into s3, you need to obtain below credentials from S3:

* Bucket
* AccessKey
* SecretAccessKey

To save the output file to s3, add the prefix `s3:` for output-file option and pass the s3 configs in the `s3-config` option.

Now, edit the content of the file `fusioncharts-config.json`. 

```
{
  "chart-config": "fusioncharts_chart.js",
  "output-file": "s3:fc-chart-<%= number(1) %>",
  "s3-config": {
      "bucket": "coolbucket",
      "accessKey": "ADFASDF#DDF$",
      "secretAccessKey": "dfasdAS$32rdsf$234rfdsaf"
  }
}
```

Run the following command:

<div class="code-wrapper">
<ul class="code-tabs">
    <li class="active"><a data-toggle="cli">CLI</a></li>
</ul>

<div class="tab-content">
<div class="tab cli-tab active">
<pre><code class="custom-hlc language-javascript">
	$ fe -c fusioncharts-config.json
</code></pre>
</div>
</div>
</div>