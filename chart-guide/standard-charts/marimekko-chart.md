---
title: Marimekko Chart | FusionCharts
description: Marimekko charts are stacked column charts with columns of variable width. They are primarily used for marketing analysis.
heading: Marimekko Chart
---

Marimekko charts are stacked column charts with columns of variable width. They are primarily used for marketing analysis.

The following three dimensions of marketing data can be represented using a Marimekko chart:

* Total value of a market segment

* Combined share of all competitors in a market segment

* Individual share of competitors in a market segment

Let's create a simple Marimekko chart that shows the top 3 Electronic Brands (Bose, Dell, and Apple) in the top 3 revenue earning states (California, Washington, and Nevada).

The Marimekko chart shown below, when seen in the default mode, helps you instantly figure out the following:

* The top three manufactures within each state (Bose, Dell, and Apple) and the individual sales of each manufacturer within a state, indicated by the partitions in the stacked column.

* The total sales by manufacturers across all three states for the given duration (a month, in this case), shown on top of the stacked column for each manufacturer. For example, the total sales for Bose, $848K, is shown above the first column.

* The percentage market share for each manufacturer, shown as a percentage label between the stacked columns. For example, Bose has a total market share of approximately 46%, as shown by the label between the data plots for Bose and Dell.

The JSON and XML structure of the chart is:

**CODE SNIPPET**

To create a marimekko chart, set the `type` attribute to `marimekko`.

For a detailed list of attributes you can check the API reference page of pie chart.

The marimekko chart for the above code looks like :

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/bdmTg/) to edit the marimekko chart.

The full HTML code for the above sample is:

**HTML CODE SNIPPET**

As you can see in the chart data, the actual sales data has been provided. The Marimekko chart automatically converts these values into percentage values based on the size of a market segment and the percentage share held by competitors in each segment.

The percentage share of each manufacturer within a segment is shown in the tooltip text for that partition. For example, the percentage share for Bose in Washington is approximately 25%; it can be seen in the tooltip text shown when the mouse pointer is hovered over the partition for Washington in the first column.

The height of columns can be used to compare the TAM (Total Available Market) per market segment.

Now, let's customize the appearance and properties of the marimekko chart. We'll also talk about the interactive legend, introduced for the marimekko chart in FusionCharts v3.11.0.

## Display actual data values

The stacked columns in a Marimekko chart can be rendered:

* Using percentage values

* Using actual data values

By default, a Marimekko chart is rendered with percentage values along the y-axis. To render the chart using actual data values, set the `usePercentDistribution` to `0`. This attribute specifies whether percentage distribution will be used on the y-axis to plot the data. The default value of this attribute is `1`.

Refer to the code given below:

```
{

  "chart": {

    "usePercentDistribution": "0"

  }

}

...

```

A Marimekko chart rendered with actual values instead of percentage values looks like this:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/btfhoayu/) to edit the marimekko chart.

## **Hide the total value of market segments**

By default, the total value of a market segment for a competitor is rendered at the top of each column.

Users can choose to hide this value by specify the `showSum` attribute. This attribute allows to show  the sum of all data plots stacked above each other. The sum is shown above the stacked columns. The default value for this attribute is `1` which shows the sum. To hide the sum, set this attribute to `0`.

Refer to the code given below:

```
{

  "chart": {

    "showSum": "0"

  }

}

...

```

A Marimekko chart with the total value of market segments hidden looks like this:

CHART

Click here to edit the marimekko chart.

## Percentage market share values

By default, labels are rendered between the columns of a Marimekko chart, along the x-axis, to show the percentage market value share of the competitors. These labels can be shown/hidden, depending on what the user requirement is. Set the `showAxisPercentValues` attribute to `0` to hide the percent values along the x-axis. The default value of this attribute is `1`.

Refer to the code given below:

```
{

  "chart": {

    "showAxisPercentValues": "0"

  }

}

...

A Marimekko chart with the percentage labels on the x-axis hidden looks like this:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/vvk1of9j/) to edit the marimekko chart.

## Legend Interactivity

The Marimekko chart includes support for an interactive legend starting FusionCharts Suite XT v3.11.0. The interactive legend implementation for the Marimekko chart not only lets you show/hide the data plots but also manages the space vacated when data plots are hidden. Consequently, the percentage labels are also updated to reflect the current state of the chart.

For example, in the Marimekko chart shown above, if you were to hide the data plots for Washington using the legend, the data plots for California and Nevada will be automatically arranged in the available space, as shown in the image below:

**CHART**