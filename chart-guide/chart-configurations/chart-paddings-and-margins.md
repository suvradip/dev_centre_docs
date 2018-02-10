---
title: Chart Paddings and Margins | FusionCharts
description: FusionCharts Suite XT lets you manage the space around the canvas and within the chart by configuring chart paddings and margins.
heading: Chart Paddings and Margins
breadcrumb: [["Home", "/"], ["Chart Paddings and Margins"]]
---

FusionCharts Suite XT lets you manage the space around the canvas and within the **chart** by configuring **chart paddings** and margins

## Set chart margins

Chart margin is the space between the chart border and the canvas border. You can set the chart margins on any one of the chart's four sides. To do so, follow the steps given below:

* Set the amount of empty space on the left of the chart using the 'chartLeftMargin` attribute.

* Set the amount of empty space on the top of the chart using the 'chartTopMargin` attribute.

* Set the amount of empty space on the right of the chart using the 'chartRightMargin` attribute.

* Set the amount of empty space on the bottom of the chart using the 'chartBottomMargin` attribute

Refer to the code below:

```
{
    "chart": {
        ...
        "chartLeftMargin": "40",
        "chartTopMargin": "40",
        "chartRightMargin": "40",
        "chartBottomMargin": "40",
       ...
    },

```

The chart will look like as shown in the image below:

<chart>

## Set padding for caption

Set the amount of empty space between the sub-caption and the top of the chart canvas using the `captionPadding` attribute. Refer to the code below:

```
{
    "chart": {
        ...
        "captionPadding": "40",
       ...
    },

```

## Set padding for axes names

Set the axis name padding and axis value padding, to control the amount of space between the axes and the canvas. To do so, follow the steps given below:

* Specify the distance between the top of  x-axis title and the bottom of data labels using the `xAxisNamePadding` attribute. 

* Specify the distance between the top of  y-axis title and the start of y-axis values using the `yAxisNamePadding` attribute.

Refer to the code below:

```

<chart xAxisNamePadding="10", yAxisNamePadding="10">

{
    "chart": {
        ...
        "xAxisNamePadding": "10",
        "yAxisNamePadding": "10",
       ...
    },

```

The chart will look like as shown below:

<chart>

## Set padding for axis values

Specify the amount of horizontal space between the canvas left edge and the y-axis values or trend line values (on left/right side) using the `yAxisValuePadding` attribute. 

Refer  to the code below:

```
{
    "chart": {
        ...
        "yAxisValuePadding": "10",
       ...
    },

```
The chart will look like as shown below:

<CHART>

## Set padding for data label and data value 

Specify the vertical space between the canvas bottom edge and the data labels using the `labelPadding` attribute.

Refer to the code below:

```
{
    "chart": {
        ...
        "labelPadding": "3",
       ...
    },

```

The chart will look like as shown below:

<chart>

## Set padding for data value

Specify the space between the columns/anchors and the value text boxes using the `valuePadding` attribute. 

Refer to the code below:

```
{
    "chart": {
        ...
        "labelPadding": "3",
       ...
    },

```

The chart will look like as shown below:

<CHART>

## Set canvas padding in a chart

For a line/area chart, canvas padding is the space between the canvas border and the position where the line/area chart begins. Specify the amount of gap using the `canvasPadding` attribute. 

Refer to the code below:

```
{
    "chart": {
        ...
        "canvasPadding": "30",
       ...
    },

```

The chart will look like as shown below:

<chart>