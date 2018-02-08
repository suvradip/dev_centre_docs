---
title: Waterfall (Cascade) Chart | FusionCharts
description: A waterfall chart, a type of column chart, used to show how an initial value is increased/decreased by a series of intermediate values, to a final value
heading: Waterfall (Cascade) Chart
---

A waterfall (cascade) chart is a special type of column chart that is used to show how an initial value is increased and decreased by a series of intermediate values, leading to a final value.

Let's create our first waterfall chart which will showcase the profit and loss analysis.

The JSON and XML structure of the chart is:

**CODE SNIPPET**

To create a waterfall chart, set the `type` attribute to `waterfall`.

For a detailed list of attributes you can check the API reference page of waterfall chart.

The waterfall chart thus rendered looks like this:

**CHART**

Click here to edit the waterfall chart.

The full HTML code for the above sample is:

**HTML CODE SNIPPET**

## Customize Colors for the Columns

By default, every data plot in a waterfall chart is rendered using a different color irrespective of whether it is a positive or a negative column. You can, however, customize the chart to show distinct colors for the positive and negative columns.

To customize the chart to show distinct colors for the positive and negative columns, follow the steps given below:

* To set the color for the positive data plots on the chart, specify the hex color code to `positiveColor` attribute.

* To set the color for the negative data plots on the chart, specify the hex color code to `negativeColor` attribute.

Refer to the code given below:

```
{

  "chart": {

    "positiveColor": "#6baa01",

    "negativeColor": "#e44a00"

  },

}

...

```

For a detailed list of attributes you can check the API reference page of waterfall chart.

A waterfall chart with distinct colors used for the positive and negative data plots looks like this:

**CHART**

## Show/Hide Sum Columns

### Show/Hide a Cumulative Sum Column

A cumulative sum column is something that will show you the sum of all columns to its left. To see the sum of all columns to its left, set the `isSum` attribute as `1`. 

Refer to the code given below:

```
{

  "chart": {

    ...

  },

  "data": [

    {

      ...

      "issum": "1",

      ...

    }]

}

...

```

A waterfall chart rendered with a cumulative sum column looks like this:

**CHART**

Click here to edit the waterfall chart.

### Show/Hide a Non-cumulative Sum Column

A non-cumulative sum column is one that shows the sum of all the columns to its left, but after the last cumulative sum column. To show the non-cumulative use the following attributes:

* Set the `isSum` attribute to `1` to render a column displaying sum of all the previous data values.

* Set the `cumulative` attribute to `0` to render non-cumulative columns.

Refer to the  code below:

<Insert Code>

A waterfall chart rendered with a non-cumulative sum column looks like this:

CHART

In the above chart, the 'Total Costs' column is a non-cumulative sum column.

#### Show/Hide a Total Sum Column

By default, a column that represents the sum of all the values plotted on the chart - the total sum column - is shown on the waterfall chart. You can, however, opt not to show this column. In the waterfall chart shown above, the 'Total Profit' column is the total sum column.

To do so, the following attributes are used:

* Set the `showSumAtEnd` attribute to `0` to hide the column of total sum.

* Specify the name of the column of total sum using the `sumLabel` attribute.

Refer to the code below:

<insert Code>

A waterfall chart with the total sum column hidden looks like this:

CHART

## Customize Connectors

Waterfall charts, by default, display connector lines between two consecutive columns which helps in indicating the nature of transition (positive or negative). You can customize the cosmetic properties of these connector lines.

To customize the cosmetic properties of the connector lines, follow the steps given below:

* Set the `showConnectors` attribute to `0` to hide the connectors.

* Specify the `connectorColor` attribute to set the hex color code for the connector lines.

* Specify the `connectorAplha` attribute to set the transparency for for the connector lines. This attribute takes values between `0` (transparent) and `100` (opaque).

* Specify the `connectorThickness` attribute to set the thinckness of the connector lines.

* To render the connector lines as dashed lines, set the `connectorDashed` attribute to `1`. 

* Set the length of the dash (for dashed connector lines), using `connectorDashLen` attribute.

* Set the gap between each dash (for dashed connector lines), using `connectorDashLen` attribute.

Refer to the code given below:

```
{

  "chart": {

    "connectorColor": "#660000",

    "connectorAlpha": "50",

    "connectorThickness": "3",

    "connectorDashed": "1",

    "connectorDashLen": "5"

    "connectorDashGap": "2"

  },

}

...

```

A waterfall chart rendered with customized connector lines looks like this:

**CHART**

Click here to edit the waterfall chart.