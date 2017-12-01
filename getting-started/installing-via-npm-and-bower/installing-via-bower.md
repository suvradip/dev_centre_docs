---
permalink: getting-started/installing-via-npm-and-bower/installing-via-bower.html
title: Installing via Bower | FusionCharts
description: FusionCharts Suite XT can now be downloaded via the npm and Bower package managers. This section talks about installing FusionCharts Suite XT via Bower.
heading: Installing via Bower
chartPresent: false
---

This section talks about how the **fusioncharts** and the **fusionmaps** packages can be installed via the **Bower** package management software.

<p class="text-info"> The **fusioncharts** package contains files for all charts and widgets and only two map definition files, for the World map and the USA map. The **fusionmaps** package contains files for all charts and widgets and map definition files for all maps. Consequently, it takes longer for installation than the **fusioncharts** package and is recommended only if your application needs maps other than the World and USA maps.</p>

## Installing the **fusioncharts** Package

**Step 1**: Install the FusionCharts package.

   {% highlight javascript lineanchors %}{% raw %} 
   bower install fusioncharts
   {% endraw %}{% endhighlight %}
   
**Step 2**: Load FusionCharts module.

   {% highlight javascript lineanchors %}{% raw %} 
   <script src="bower_components/fusioncharts/fusioncharts.js"></script>
   {% endraw %}{% endhighlight %}
   
**Step 3**: Load the charts module.

   {% highlight javascript lineanchors %}{% raw %} 
   <script src="bower_components/fusioncharts/fusioncharts.maps.js"></script>
   {% endraw %}{% endhighlight %}
   
**Step 4**: Create the FusionCharts instance required to render the chart.

  {% highlight javascript lineanchors %}{% raw %}
  <script>
	new FusionCharts({
		"type": "column2d",
		"width": "500",
		"height": "300",
		"dataFormat": "json",
		"dataSource": {
			chart:{},
			data: [{value: 500}, {value: 600}, {value: 700}]
			}
		}).render("chartContainer");
	</script>
	{% endraw %}{% endhighlight %}

## Installing the **fusionmaps** Package

**Step 1**: Install the FusionMaps package.

   {% highlight javascript lineanchors %}{% raw %}
   bower install fusionmaps
   {% endraw %}{% endhighlight %}
   
**Step 2**: Load FusionCharts.
   {% highlight javascript lineanchors %}{% raw %}
   <script src="bower_components/fusionmaps/fusioncharts.js"></script>
   {% endraw %}{% endhighlight %}
   
**Step 3**: Load the maps module.
   
   {% highlight javascript lineanchors %}{% raw %}
   <script src="bower_components/fusionmaps/fusioncharts.maps.js"></script>
   {% endraw %}{% endhighlight %}
   
**Step 4**: Load the map definition file(s) for the map(s) to be rendered using the format: **fusioncharts.&lt;MAP_ALIAS&gt;.js**, where **MAP_ALIAS** gets replaced by the map’s JavaScript alias. Click [here](http://www.fusioncharts.com/dev/getting-started/list-of-maps.html){:target='_blank'} to get the alias names for all map definition files. Map definition files for all maps to be rendered in the application have to be included. <br> <br> Therefore, assuming that you need to render the world map, the alias name __world__ replaces __MAP_ALIAS__ in the format.

  {% highlight javascript lineanchors %}{% raw %}
  <script src="bower_components/fusionmaps/maps/fusioncharts.world.js"></script>
  {% endraw %}{% endhighlight %}

**Step 5**: Create the FusionCharts instance required to render the map.

   {% highlight javascript lineanchors %}{% raw %}
   <script>
	new FusionCharts({
		"type": "world",
		"width": "500",
		"height": "300",
		"dataFormat": "json",
		"dataSource": {
			chart:{}
		}
	}).render("chartContainer");
	</script>

	{% endraw %}{% endhighlight %}

<p class="text-info"> Unlike the core files that are stored in the **fusioncharts** directory, all map definition files are stored in the **maps** directory and are required to be fetched from there. </p>

## Package-specific Dependencies for Bower

- To render a chart belonging to the PowerCharts package, load the PowerCharts module:

	{% highlight javascript lineanchors %}{% raw %}
	<script src="bower_components/fusioncharts/fusioncharts.powercharts.js"> </script>
	{% endraw %}{% endhighlight %}

- To render a chart belonging to the FusionWidgets package, load the FusionWidgets module:

	{% highlight javascript lineanchors %}{% raw %}
	<script src="bower_components/fusioncharts/fusioncharts.fusionwidgets.js"> </script>
	{% endraw %}{% endhighlight %}

<p class="text-info"> To know which chart belongs to which package, refer the [list of charts](http://www.fusioncharts.com/dev/getting-started/list-of-charts.html){:target='_blank'}. </p>

- To render a map, load the FusionMaps module and the map definition file for that map:

	{% highlight javascript lineanchors %}{% raw %}
	<script src="bower_components/fusioncharts/fusioncharts.maps.js"> </script>
<script src="bower_components/fusioncharts/maps/fusioncharts.world.js"> </script>
	{% endraw %}{% endhighlight %}

<p class="text-info"> To know the map definition file names, refer the [list of maps](http://www.fusioncharts.com/dev/getting-started/list-of-maps.html){:target='_blank'}. </p>

## Chart-specific Dependencies for Bower

For some chart types, you need to include/exclude certain files and in a certain order. These chart types and the corresponding files are mentioned below:

- To render the zoom-scatter chart, it is necessary to include the **fusioncharts.js** and **fusioncharts.charts.js** files _before_ the **fusioncharts.zoomscatter.js** file.
  
  {% highlight javascript lineanchors %}{% raw %}
  <script src = "bower_components/fusioncharts/fusioncharts.js"> </script> 
<script src = "bower_components/fusioncharts/fusioncharts.charts.js"> </script>  
<script src = "bower_components/fusioncharts/fusioncharts.zoomscatter.js"> </script>
  {% endraw %}{% endhighlight %}

- To render the treemap chart, it is necessary to include the **fusioncharts.js** and **fusioncharts.powercharts.js** files _before_ the **fusioncharts.treemap.js** file.

  {% highlight javascript lineanchors %}{% raw %}
  <script src = "bower_components/fusioncharts/fusioncharts.js"> </script>  
<script src = "bower_components/fusioncharts/fusioncharts.powercharts.js"> </script>  
<script src = "bower_components/fusioncharts/fusioncharts.treemap.js"> </script>
  {% endraw %}{% endhighlight %}

- To render the SS Grid chart _only_ the **fusioncharts.js** and the **fusioncharts.ssgrid.js** files are needed.

  {% highlight javascript lineanchors %}{% raw %}
  <script src = "bower_components/fusioncharts/fusioncharts.js"> </script>  
<script src = "bower_components/fusioncharts/fusioncharts.ssgrid.js"> </script>
  {% endraw %}{% endhighlight %}

- To render the Gantt chart _only_ the **fusioncharts.js** and the **fusioncharts.gantt.js** files are needed.

  {% highlight javascript lineanchors %}{% raw %}
  <script src = "bower_components/fusioncharts/fusioncharts.js"> </script>  
<script src = "bower_components/fusioncharts/fusioncharts.gantt.js"> </script>
  {% endraw %}{% endhighlight %}