---
title: Div Lines and Grids | FusionCharts
description: Divisional lines are horizontal lines running along the canvas enabling easier visual reference of plot values against the y-axis
heading: Div Lines and Grids
breadcrumb: [["Home", "/"], ["Div Lines and Grids"]]
---

Divisional lines are horizontal lines running along the canvas. They enable easier visual reference of plot values against the y-axis and help compare data points. In scatter and bubble charts, there are additional vertical divisional lines for better visualization.

By default, FusionCharts Suite XT automatically adds div lines based on the minimum and maximum y-axis values. However, several customization options for div lines are also available.

## Customize the number of divisional lines

By default, the divisional lines are automatically adjusted. You can opt to explicitly specify the minimum and maximum values for the y-axis, as well as the number of divisional lines. 

To do this, you need to disable the automatic adjustment of divisional lines and manually define the y-axis upper and lower limits, and the number of divisional lines to be rendered. Follow the steps given below:

* Set the `adjustDiv` attribute to `0` to disable the automatic adjustment of divisional lines.

* Specify the custom lower limit y-axis value using the `yAxisMinValue` attribute.

* Specify the custom upper limit y-axis value using the `yAxisMaxValue` attribute.

* Set the number of divisional lines using the `numDivLines` attribute.

Refer to the code below:

```
{
    "chart": {
        ...
        "adjustDiv": "0",
        "yAxisMaxvalue": "35000",
        "yAxisMinValue": "5000",
        "numDivLines": "9"
    },

 ```

The chart will look like as shown below:

<chart>

## Customize the display of divisional lines

To customize the display of div linnes follow the steps given below:

* Specify the hex code for the color of the div line using the `divLineColor` attribute.

* Set the thickness (in pixels) of the horizontal div lines using the `divLineThickness` attribubte.

* Set the transparency of the divisional lines using the `divLineAlpha` attribute.

Refer to the code below:

 ```
{
    "chart": {
        "divLineColor": "#6699cc",
        "divLineAlpha": "60",
        "divLineDashed": "0"
    },
 ```

The chart will look like as shown below:

<chart>

## Dashed divisional lines

You can render the divisional lines as dashed lines, instead of the default continuous lines. To do so follow the steps given below:

* Set the `divLineDashed` attribute to `1` to display the div lines as dashed.

* Set the length of each dash line using the `divLineDashLen` attribute.

* Set the gap between the dashed lines using the `divLineDashGap` attribute.

Refer to the code below:

 ```
{
    "chart": {
       ...
        "divLineDashed": "1",
        "divLineDashLen": "5",
        "divLineDashGap": "6"
    },

 ```

The chart will look like as shown below:

<chart>

## Customize horizontal grid bands

To further aid data visualization, you can color alternate spaces between grid lines to create grid bands.

### Show/hide horizontal grid bands

By default, horizontal grid bands do not appear between the divisional lines. Set the `showAlternateHGridColor` attribute to `1` to display the horizontal grid bands. 

Refer to the code below:

 ```
{
    "chart": {
       ...
        "showAlternateHGridColor": "1",
           },
 ```

The chart will look like as shown below:

<chart>

### Customize horizontal grid bands

To customize the horizontal grid bands follow the steps given below:

* Specify the hex code for the color of the horizontal grid using the `alternateHGridColor` attribute. Example - #00FFAA

* Set the transparency of the horizontal grid using the `alternateHGridAlpha` attribute.

Refer to the code below:

 ```
{
    "chart": {
       ...
        "alternateHGridColor": "#00FFAA",

        "alternateHGridAlpha":"30"
           },
 ```

The chart will look like as shown in the image below:

<chart>
