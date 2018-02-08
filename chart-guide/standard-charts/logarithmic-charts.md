---
title: Logarithmic Chart | FusionCharts
description: Logarithmic charts are similar to normal charts except for the fact that logarithmic charts use a logarithmic axis instead of a linear axis.
heading: Logarithmic Chart
---

Logarithmic charts are similar to normal charts except for the fact that logarithmic charts use a logarithmic axis instead of a linear axis. Logarithmic charts can have a logarithmic scale of any base greater than 1. These charts are perfect for plotting data that comprises of both small and large values. You can use these charts to plot data like sales comparison, election results, population growth, etc.

## Types

FusionCharts Suite XT offers two types of logarithmic charts:

* Log Column 2D Chart

* Log Line Chart

## Features

The FusionCharts Suite XT log charts offer the following features:

* You can select any positive base (apart from 1) for your logarithmic scale.

* Logarithmic y-scale can be inverted to show charts like ranking charts etc.

* Custom selection of y-axis lower and upper limits possible.

* Custom selection of minor divisional lines between any two major divisional lines.

## Log Column 2D chart

As an example, we will create a log column 2D chart that compares the store footfalls with the online visits for one year.

The JSON and XML structure of the chart is:

**CODE SNIPPET**

To create a log column 2D chart, set the `type` attribute to `logmscolumn2d`.

For a detailed list of attributes you can check the API reference page of log column 2D chart.

The log column 2D chart thus rendered looks like this:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/kEeUR/) to edit the log column 2D chart.

The full HTML code for the above sample is:

HTML CODE SNIPPET

## Log Line 2D chart

Now, let's create a log line 2D chart that compares the store footfalls with the online visits for one year. To render a log line 2D chart, change the value of the `type` attribute from `logmscolumn2d` to `logmsline`. The rest of the data structure remains the same.

The log line chart thus rendered looks like this:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/LSdTC/) to add the log line 2D chart.

FusionCharts Suite XT allows you to configure the functional aspects of logarithmic charts. Now, let's customize the appearance and properties of the charts. 

## Custom selection of base

By default, the base of a logarithmic chart is set to 10. You can, however, set the base to any value of your requirement. Just ensure that the base value is any positive number greater than 1. Set the `base` attribute to specify the base value for the logarithmic chart.

Refer to the code given below:

```
{

	"chart": {

		"base": "5"

	},

}

...

```

A log column chart with the base set to 5 looks like this:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/dfdc2f9p/) to edit the log column 2D chart.

## Inverse axis support

Logarithmic charts allow you to plot the y-axis values inversely so that the y-axis upper limit appears at the bottom of the chart canvas instead of at the top. Set the `invertYAxis` attribute as `1` to specify the inverted y-axis for the chart. Setting it to `0` (default) will make no change to the axis.

Refer to the code given below:

```
{

	"chart": {

		"invertYAxis": "1"

	},

}

```

A log column 2D chart rendered with an inverted y-axis looks like this:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/rr92f6Lm/) to edit the log column 2D chart.

## Custom selection of the number of minor divisional lines

By default, the chart automatically calculates the number of minor divisional lines depending on the logarithmic base defined in the chart. 

You can, however, explicitly specify the number of minor divisional lines to be rendered between any two major divisional lines using `numMinorDivLines` attribute. This attribute takes value greater than `0`.

Refer to the code given below:

```
{

	"chart": {

		"numMinorDivLines": "4"

	},

}

...

```

A log column chart with the number of minor divisional lines explicitly specified looks like this:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/8yx8gfaj/) to edit the log column 2D chart.