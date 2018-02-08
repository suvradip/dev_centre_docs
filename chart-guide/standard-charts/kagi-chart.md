---
title: Kagi Chart | FusionCharts
description: Kagi chart uses a series of vertical lines to illustrate general levels of supply and demand for certain assets. These charts are independent of time
heading: Kagi Chart
---

Developed by the Japanese in the 1870s, the Kagi chart uses a series of vertical lines to illustrate general levels of supply and demand for certain assets. Thick lines are drawn when the price of the underlying asset breaks above the previous high price and is interpreted as an increase in demand for the asset. Thin lines are used to represent increased stock when the price falls below the previous low.

Let's create a Kagi chart which will show a series of connecting vertical lines. The thickness and direction of the lines will be dependent on the price. The line will extend until the prices are moving in the same direction. Once the prices reverse by a negative amount, a new Kagi line is drawn in a new column. When prices enter a previous high or low, the thickness of the kagi line changes.

The JSON and XML structure of the chart is:

**CODE SNIPPET**

To create a kagi chart, set the `type` attribute to `kagi`.

For a detailed list of attributes you can check the API reference page of kagi chart.

A simple Kagi chart looks like:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/JRZ36/) to edit the kagi chart.

The full HTML code for the above sample is:

**HTML CODE SNIPPET**

These charts are independent of time and only change direction once a predefined reversal amount is reached. This reversal value could be configured either as a percentage of range value or absolute value.

Anchors can also be plotted at each data point to show the data points individually. They can be configured to be shown or to be hidden.