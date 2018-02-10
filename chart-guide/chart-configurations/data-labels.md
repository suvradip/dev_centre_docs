---
title: Data Labels | FusionCharts
description: Data labels are the names of the data points that are displayed on the x-axis of a chart. Label Management for line and area charts in possible.
heading: Data Labels
breadcrumb: [["Home", "/"], ["Data Labels"]]
---

Data labels are the names of the data points that are displayed on the x-axis of a chart. 

<image>

In this article, we will learn how to customize the display of the data labels.

## Data label display modes

You can configure the arrangement and display properties for data labels using the `labelDisplay` attribute. There are 5 display modes available (`auto`, `wrap`, `stagger`, `rotate` and `none`). We will discuss about each mode respectively.

### Auto Mode

In this mode, the chart automatically chooses the most appropriate display mode for data labels - depending on space availability. If the number of data labels is greater than the available space, then the data labels are either truncated (with ellipses to indicate truncation), wrapped, or rotated. On hovering over a truncated data label, a tooltip showing the full label text is displayed. The auto mode is active by default, but can be disabled by switching to an alternative label display mode.

Refer to the code below:

```
{
    "chart": {
       ...
        "labelDisplay": "Auto",
    },
 ```

The chart will look like as shown below:

<chart - two images one truncated one not>

In auto mode, you can set whether the long data labels be truncated by adding ellipses using the `useEllipsesWhenOverflow` attribute. By default, this attribute is set to `1` in order to prevent the long labels from overflowing the chart background. 

Set the `useEllipsesWhenOverflow` to `0` in order to stop displaying the data labels as ellipses. 

Refer to the code below:

```
{
    "chart": {
       ...
        "labelDisplay": "Auto",

        "useEllipsesWhenOverflow":"0",
    },

 ```

The chart will look like as shown in the image below:

<chart>

### Wrap Mode

In this mode, you can wrap long x-axis labels into multiple lines. If enough space is not available in a chart, this mode will automatically trim labels, add ellipses at the end, and show tooltips for such labels. To wrap the data labels, set the `labelDisplay` attribute as `wrap`. Refer to the code below:

```
{
    "chart": {
       ...
        "labelDisplay": "wrap", 
    },

 ```

The chart with wrapped labels will look like as shown below:

<chatrt>

> In horizontal bar charts, you can specify the maximum % of available width for data labels with the `**maxLabelWidthPercent`** attribute. This attribute takes a value between `**5`** and `**80`**.

### Rotate Mode

Set the `labelDisplay` attribute as `rotate` to view the data labels in rotate mode. Refer to the code below:

```
{
    "chart": {
       ...
       labelDisplay": "rotate",
    },
 ```

The chart will look like as shown below:

<chart>

While viewing the labels in rotate mode you can also slant the labels for better visibility if required. Set the `slantLabel` attribute to `1` and the axis labels will be slanted to 45 degrees.

> Slanting the labels will only work if the labels are rotated.

Refer to the code below:

```
{
    "chart": {
       ...
        "labelDisplay": "rotate",
        "slantLables": "1"
    },

 ```

The chart will look like as shown below:

<chart>

> In case of Scatter and Bubble charts, when the attribute** `xAxisLabelMode`** is set to `auto`, slanting of the X-axis labels is not applicable

### Staggered mode with stagger lines

In this mode, data labels are distributed on multiple levels (default is 2) to increase the inter label space available on each level. Set the `labelDisplay` attribute as 'stagger`. Refer to the code below:

```
{
    "chart": {
       ...
        "labelDisplay": "stagger",
    },

 ```
The chart will look like as shown below:

<chart>

To change the distribution levels (default is 2) specify the level using the `staggerLines` attribute. Refer to the code below:

 ```
{
    "chart": {
       ...
        "labelDisplay": "stagger",
        "staggerLines": "4"
    },

 ```

The chart will look like as shown below:

<chart>

### N-th Label Mode

If your data plot consists of values representing continuous quantities such as date, time, temperature etc. you can use the `labelstep` attribute to display every n-th label, instead of all labels on the x-axis. Refer to the code below:

 ```
{
    "chart": {
       ...
        "labelStep": "3",
    },
 ```

The chart will look like as shown below:

<chart>

## Show/hide data all data labels

To hide the data labels set the `showLabels` attribute to `0` within the `chart` object. Refer to the code below:

 ```
{
    "chart": {
       ...
        "showLables": "0",               
    },
 ```

The chart will look like as shown below:

<chart>

## Hide specific data labels

By default, all the data labels are displayed. You can opt to hide specific data values using the `showLabel` attribute within `data` under `chart` object. 

 ```
{
    "chart": {
        "caption": "Quarterly Revenue",
        "subCaption": "Last year",
        "xAxisName": "Quarter",
        "yAxisName": "Amount (In USD)",
        "numberPrefix": "$",
        "theme": "fint",
        "showLabels": "0"
    },
    "data": [
        {
            "label": "Quarter 1",
            "value": "1950000"
        },
        {
            "label": "Quarter 2",
            "value": "1450000",
            **"showLabel": "0"**
        },
...
 ```
In the above code, we have set the `showLabel` attribute for **Quarter 2** to `0`. So, the chart will not display the label for that value. The chart will look like as shown below:

<chart>

## Label management: line and area charts

With label management, you can adjust the canvas padding (the space between the canvas border and the position where the data plot begins and ends) to accommodate long labels in line and area charts. This ensures that the first and last x-axis labels are not rendered outside the canvas border and the labels don't overlap each other.

<image>

To accommodate long labels, the chart automatically adjusts the right and left canvas margins. A line 2D chart with automatic canvas padding set for label management looks like as shown below:

<chart>

Specify the space between the canvas border and first (& last data plots) using the `canvasPadding` attribute. Refer to the code below:

 ```
{
    "chart": {
        "caption": "Quarterly Revenue",
        "subCaption": "Last year",
        "xAxisName": "Quarter",
        "yAxisName": "Amount (In USD)",
        "numberPrefix": "$",
        **"canvasPadding": "30",**
        "theme": "fint"
    },

 ```

> If you set it `0` the first and the last anchor points will be on the canvas border.

The chart will look like as shown below:

<chart>

Advanced x-axis label management has been implemented to achieve the following objectives:

* All x-axis labels should get centrally aligned to the respective data-plots (columns, points on line charts etc.)

* X-axis labels should not overlap each other

* X-axis labels should not overlap with other chart objects such as legends or x-axis name

* Long labels should not go outside the chart

* Optimized truncation of longer labels and putting ellipses at the end

> Advanced label management is not applicable to Bar, Pie, Doughnut, Marimekko, Zoom Line and Multi-series Combination 3D charts.

## Customize data label properties

You can customize the cosmetic properties of data labels such as font, border, background, and alpha. 

### Font Properties

To customize the font properties of the data labels the following attributes are used:

* `labelFont` - Set the font face for the data labels, e.g. `Arial`.

* `labelFontColor` - Set the font color for data labels, e.g. `#00ffaa`.

* `labelFontSize` - Specify the data label font size, within a range of `0` to `72`.

* `labelFontBold` - Set to `1` to make the label font bold.

* `labelFontItalic` - Set to `1` to make the label font italic.

* `labelAlpha` - Specify the transparency of the label font.

Refer to the code below:

 ```
{
    "chart": {
       ...
        "labelFont": "Arial",
        "labelFontColor": "0075c2",
        "labelFontSize": "15",

       "labelFontBold":"1",

       "LableFontItalic":"1",

        "labelFontAlpha":"70"
    },

...

 ```

The chart will look like as shown below:

<chart>

### Border properties

To customize the border of the data labels the following attributes are used:

* `labelBorderColor` - Set the border color for data labels, e.g. `#00ffaa`.

* `labelBorderAlpha` - Specify the transparency of the border.

* `labelBorderPadding` - Set the padding between data labels and border.

* `labelBorderRadius` - Set the radius of border around the data labels.

* `labelBorderThickness` - Set the thickness of the border.

* `labelBorderDashed` - Set to `1` to draw label borders using dashed lines.

* `labelBorderDashGap` - Set the gap between two consecutive dashes of data label border (in pixels).

* labelBorderDashLen` - Set the length of each dash in data label border (in pixels).

Refer to the code below:

 ```

{
    "chart": {
       
        "labelBorderPadding": "5",
        "labelBorderRadius": "2",
        "labelBorderDashed": "1",

        "labelBorderDashGap": "2",

        "labelBorderDashLen": "3",

        "labelBorderThickness": "2",
        "labelBorderColor": "#00ffaa",
        "labelBorderAlpha": "60"

    },

...

 ```

The chart will look like as shown below:

<chart>

### Background properties

To change the background of the data lablels the following attributes are used:

* `labelBgColor` - Set the background color of data labels, e.g. `#00ffaa`.

* `lableBgAlpha` -  Set the transparency of background of the data labels.

Refer to the code below:

 ```

{
    {
    "chart": {
              "labelBgColor": "eeeeee",

              "labelBgAlpha":"30"
    },
…

 ```

The chart will look like as shown below:

<chart>

## Configure height of the data label

Shown below is a chart with some very long data labels, where the data plots are getting reduced to a fraction of the chart.

<chart>

You can limit the maximum height of the data labels using the `maxLabelHeight` attribute. This will truncate the data labels (add ellipsis) according to the maximum height set. 

Refer to the code below:

```

{
    {
    "chart": {
             "maxLabelHeight"**:** "50",
...
    },
    ...
 ```

The chart will look like as shown below:

<chart>

## Add links to data labels

You can add links to the data labels. Set the link you want to add to the data label using the `labelLink` attribute. Refer to the code below:

```

{
    {
    "chart": {
             "labelLink": "http://www.fusioncharts.com/",

...
    },
    ...
 ```

The chart with data label linked will look like as shown below:

<chart>