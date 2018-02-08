---
title: Line, Area and Column charts | FusionCharts
description: The FusionCharts Suite XT standard charts are simple charts used to plot single-series data.
heading: Line, Area and Column charts
---

## Column and Bar Charts

Column and bar charts represent data with rectangular horizontal or vertical bars. The height of the bars are proportional to the values they represent. In case of a column chart, the `numeric values` are plotted along the y-axis and the `data labels` are plotted along the x-axis. Whereas in bar charts, the numeric values are plotted along the x-axis and the data labels are plotted along the y-axis. Column and bar charts are best fitted when you want to compare values. 

In this sample, let's create our first column chart showcasing the monthly revenue for last one year for Harry's SuperMart. We have plotted the months along the x-axis and the revenue, which is a numeric value, along the y-axis.

The JSON and XML structure of the chart is:

**CODE SNIPPET**

To create a single-series column 2D chart, follow the steps given below:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the chart type using the `type` attribute. To render a column chart, set `column2d`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using`width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

* Depending on the value passed to the `dataFormat` attribute, set the `dataSource` attribute(JSON/XML) from where the data will be fetched.

* Specify the value for a data item using the `value` attribute within the `data` object. 

For a detailed list of attributes refer to the API reference page of column chart.

A single-series column 2D chart looks like:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/s7t8F/) to edit the column 2D chart.

The full HTML code for the above sample is:

**HTML CODE SNIPPET**

## Column 3D chart

To render a column chart in 3D, change the value of the `type` attribute from `column2D` to `column3D`. The rest of the data structure remains the same.

A single-series column 3D chart looks like:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/xL3py/ ) to edit the column 3D chart.

## Bar 2D chart

Now, lets create a bar 2D chart. In the chart below, we have shown five stores in a supermarket that have highest sales. The sales figures have been plotted along the x-axis and the store names have been plotted along the y-axis.

To render a bar 2D chart, set the `type` to `bar2d`. A single-series bar 2D chart looks like:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/y3H2G/) to edit the bar 2D chart.

## Bar 3D chart

To render a bar chart in 3D, change the value of the `type` attribute from `bar2D` to `bar3D`. The rest of the data structure remains the same.

A single-series bar 3D chart looks like:

**CHART**

Click [here](http://jsfiddle.net/y3H2G/2912/) to edit the bar 3D chart.

## Line Chart

Line charts are commonly used to showcase the trend in data over time whereas area charts is used to display quantitative data. Information in a line or area chart is plotted on the x- and y-axis; data values are plotted using data points that are connected using line segments. 

In the sample, let's create a line chart showcasing total footfall at Bakersfield Central. We have plotted the days along the x-axis and the number of visitors along the y-axis.

The JSON and XML structure of the chart is:

**CODE SNIPPET**

For a detailed list of attributes refer to the API reference page of line chart.

A line chart looks like:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/xb9TG/) to edit the line chart.

The full HTML code for the above sample is:

**HTML CODE SNIPPET**

## Area Chart

An area chart is similar to the line chart, with the difference that the area marked by the anchors and line segments is filled.

To render an area chart the same use case as above, set the `type` to `area`. A single-series area chart looks like:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/x5FBh/) to edit the area chart.

Now, let's customize the appearance and properties of the charts. 

## Plot Trend Elements

The trend elements that can be plotted on a chart include trend-lines and trend-zones.

Trend-lines are reference horizontal or vertical lines which aid in interpretation of data. They can be used to set context or define limits and targets. For example, while plotting quarterly sales of a company, you might want to use a trend-line to depict the target sales. Trend-zones are similar to trend-lines except that they mark out an entire zone rather than just a line.

To plot a trend-line on a chart, follow the steps given below:

* Create a `trendlines` object to render one or more than one trend-lines.

* Create a `line` object for a particular trend-line.

* In `line` object, set the `startValue` attribute to specify the starting value for the trend-line. Whereas, set the `endValue` to specify the ending value for the trend-line.

* Set the `color` attribute to specify the hex code for the color. This attribute is used when you render the trend-line and its associated text.

* Set the `displayValue` attribute to specify a string caption to be displayed with the trend-line.

Given below is the JSON code to include trend-line on your chart:

```
"trendlines": [{

    "line": [{

        "startvalue": "700000",

        "color": "#1aaf5d",

        "displayvalue": "Monthly Target"

    }]

}]

```

For a detailed list of attributes refer to the API reference page of trend-line section.

A quarterly sales summary chart rendered with a trend-line to show the target value looks like this:

**CHART**

Click here to edit the column chart.

**Trend-zone** is used to show a range of target values. The trend-zone uses the same attributes as the trend-line. `isTrendZone` is the attribute which is used to specify whether a chart will be rendered with a trend-line or a trend-zone. Setting this attribute to `0` will render a trend-line, setting it to `1` (default) will render a trend-zone. 

A quarterly sales summary chart rendered with a trend-zone to show a range of target values looks like this:

**CHART**

Click here to edit the column chart.

FusionCharts Suite XT includes several options to customize trend elements. To know more, click [here](https://www.fusioncharts.com/dev/basic-chart-configurations/trend-lines-and-zones.html).

## Plot Vertical Line Elements

Vertical (or horizontal in case of bar charts) separator lines are elements that can differentiate between data blocks in a chart. They can be placed between any two data points, or can be aligned to specific data points.

To plot vertical line in your chart, follow the steps given below:

* Set the `vLine` attribute to `true` to render a vertical line on the chart.

* Specify the `label` attribute to set the label for the vertical line. This label will be rendered along the x-axis.

* Set the position of the vertical line using `linePosition` attribute. This attribute is positioned relative to the two data points between which it is to be plotted. 

Given below is the JSON code to include vertical line on your chart:

```
{

    "vline": "true",

    "label": "Weekend Start",

    "linePosition": "0.7"

},

```

For a detailed list of attributes refer to the API reference page of vertical line section.

A line chart rendered with a vertical line looks like this:

**CHART**

FusionCharts Suite XT includes several options to customize vertical line elements. To know more, click [here](https://www.fusioncharts.com/dev/basic-chart-configurations/vertical-lines.html).

## Change Chart Type

FusionCharts Suite XT allows you to change the chart type dynamically through its advanced API. You can change chart type by calling the `chartType()` method on any FusionCharts' instance and provide the chart name as an argument.

An example of a chart, where you can dynamically change the chart type, looks like this:

CHART

## Set Data Skipping

Visualization plays a crucial role in data science, helping data scientists to make sense of the underlying patterns within data, even before any other computation begins. With v3.12.0, FusionCharts has evolved to consume large amount of data in standard charts.

What if you want to render 10000 data points in a single series chart with a dimension of 500 * 400 pixels for line, area and column charts. So if we take the width of the canvas as 500 pixels, an average of 20 data plots will be drawn every width of pixel which is not very informative with respect to visualization. **Data skipping** is a concept which has been introduced to draw only those plots in the canvas which actually creates a data trend without hampering the performance of the chart.

Given below is the list of attributes by the help of which you can customize your data skipping:

* Set `plotBinSize` attribute to `1`, to render minimum one data plot within the width of one pixel. Example, if `plotBinSize: 1`, minimum one column plot will be rendered within the width of one pixel.
For line and area charts, minimum of two anchors connecting one single line will be drawn. If `plotBinSize: 0.5`, minimum two column plot on each pixel (width )will be rendered. 
**Note:** To disable data skipping, set this attribute to `0`.

* Set the `labelBinSize` attribute to `1`, to display minimum one label in the width of one pixel.
> **Note:** To disable this label skipping, set this attribute to `0`.

Now, lets render an area chart with `30000` data. You will notice that the chart will give a clear idea on how frequently the new trips are availed. The chart will show the data updated every hour. The chart plots with maximum and minimum value in a single pixel (width), drawn to show the pattern out of data. The plots get overlapped only if they are hidden by another plot which results to render the chart much faster than expected. The overlapping takes place based on the data trend which cannot be compromised.

An example will look like as shown below:

**CHART**

> In multi-series chart, one dataset can be overlapped (partially or completely) by another dataset only if the data plot of one dataset get hidden by the other.