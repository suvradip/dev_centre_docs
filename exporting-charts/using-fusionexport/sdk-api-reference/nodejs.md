---
title: Node.js | FusionCharts
description: Export from your desktop and web server using Node.js SDKs. A complete list of API reference.
heading: Class ExportManager
breadcrumb: [["Home", "/"], ["Node.js"]]
---

__ExportManager__ acts as a client, sending the export chart configuration to the **FusionExport Service** and delivers the exported charts through the attached listeners. It extends the **EventEmitter** class.

### Constructor

**ExportManager([options])**

**options.host:** This is used to specify the export server host; if not specified, the default value is used. The default host is 0.0.0.0.

**options.port:** This is used to specify the export server port; if not specified, the default value is used. The default port is 1337.

### Methods

#### export(exportConfig)

Exports charts and dashboards with the specified export configurations. This method returns promise.

**ExportConfig**
FusionExport accepts multiple options at a time. Using the SDK, you can set different options while exporting.

**static saveExportedFiles(outputFileBag, dirPath = '.')**
It is a helper function to save the whole **outputFileBag** in the specified directory. It can also take an enclosing directory path as the second parameter. The directory path will be appended with the output file paths before saving.

**static getExportedFileNames(exportedOutput)**
It extracts all the realPath from the **outputFileBag**.


### Events

**exportDone**
outputFileBag: It is an array of **outputBags**. Each **outputBag** has a **realName** and a **fileContent** value. **realName** is the path where the file needs to be saved with the resolved filename. Called when the export is completed.

**exportStateChange**
state: It is a state object with **reporter**, **exportDone**, **uuid**, **customMsg** properties.
Emits events for every exporting step initiated from the server.

**error**
Triggered when an error is encountered.

## Class ExportConfig

**ExportConfig** holds the configurations to export a chart like chart data, template file, dashboard config, etc. These configurations are sent to the **FusionExport Service** by **ExportManager** to export charts.

### Constructors

**ExportConfig()**
Constructs an **ExportConfig** object with empty export configurations.

### Methods

**set(name, value)**
Sets a single export configuration with the specified configuration value.
Returns the object so it can be chained.

**get(name)**
Gets a single export configuration with the specified configuration name.

**remove(name)**
Removes the specified configuration and returns **true** if **configName** is found.
Returns the object to be chained.

**has(name)**
Checks if the specified configuration is present; returns **true** if the **configName** is found.

**clear()**
Clears all export configurations already added.

**count()**
Returns the total number of configurations already added.

**configNames()**
Returns all configuration names in an array.

**configValues()**
Returns all configuration values in an array.

**clone()**
Returns a clone of the existing **ExportConfig**.

**getFormattedConfigs()**
Returns all export configurations in the JSON format.

## Supported Export Configurations

The supported export configurations are as follows:

* `chartConfig` - Sets the configuration of a single chart or multiple charts in an array.

* `inputSVG` - Sets the path for the SVG file input.

* `templateFilePath` - Sets the path of the HTML template used for dashboard export.

* `callbackFilePath` - Sets the path for a Javascript file that would be injected at the bottom of the page for each export.

* `libraryDirectoryPath` - Sets the root path of fusionCharts Javascript library to use the licensed version of FusionCharts.

* `asyncCapture` - Sets if the export process will wait for `CAPTURE_EXIT` event.

* `maxWaitForCaptureExit` - Sets the maximum time FusionExport would wait for the CAPTURE_EXIT event to be triggered.

* `dashboardLogo` - Sets the path to the logo file.

* `dashboardHeading` - Sets the title of the dashboard.

* `dashboardSubheading` - Sets the sub-title of the dashboard.

* `type` - Sets the format of the output file.

* `quality` - Sets the quality of the output file. Provide either good, better or best.

* `outputFile` - Sets the output filename template, along with the path.

* `outputFileDefinition` - JS file defining functions or array to resolve output file names.

* `exportAsZip` - Sets if the chart(s) will be exported as a zip file or as individual file(s).

* `resourceFilePath` - JSON file having the dependencies of the template when templateFilePath is provided.