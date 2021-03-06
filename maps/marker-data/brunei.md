---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Brunei

#### JavaScript Alias: maps/brunei


<div class="code-wrapper">
<ul class='code-tabs'>
    <li class='active'>
        <a data-toggle='new-json'>New JSON Format</a>
    </li>
    <li>
        <a data-toggle='old-json'>Old JSON Format</a>
    </li>
    <li>
        <a data-toggle='old-xml'>Old XML Format</a>
    </li>
</ul>
<div class='tab-content'>
    <pre class='plain-code'></pre>
    <div class='tab new-json-tab active'>
<pre><code class="language-javascript">
{
    "map": {
        "showshadow": "0",
        "showlabels": "0",
        "showmarkerlabels": "1",
        "fillcolor": "F1f1f1",
        "bordercolor": "CCCCCC",
        "basefont": "Verdana",
        "basefontsize": "10",
        "markerbordercolor": "000000",
        "markerbgcolor": "FF5904",
        "markerradius": "6",
        "usehovercolor": "0",
        "hoveronempty": "0",
        "showmarkertooltip": "1",
        "canvasBorderColor": "375277",
        "canvasBorderAlpha": "0"
    },
    "data": [
        {
            "id": "BN.BE"
        },
        {
            "id": "BN.BM"
        },
        {
            "id": "BN.TE"
        },
        {
            "id": "BN.TU"
        }
    ],
    "markers": {
        "shapes": [
            {
                "id": "myCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "items": [
            {
                "id": "BB",
                "shapeid": "myCustomShape",
                "x": "346.01",
                "y": "91.06",
                "label": "Bandar Seri Begawan",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "385.92",
                "y": "41.95",
                "label": "Muara"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "238.57",
                "y": "116.65",
                "label": "Tutong",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "391.03",
                "y": "155.53",
                "label": "Bangar"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "227.31",
                "y": "299.81",
                "label": "Sukang"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "75.87",
                "y": "197.48",
                "label": "Kuala Belait",
                "labelpos": "bottom"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "115.78",
                "y": "189.3",
                "label": "Seria"
            }
        ]
    }
}
</code></pre>


<p class='text-success'>New JSON format for map marker data.</p>

    </div>
    <div class='tab old-json-tab'>
<pre><code class="language-javascript">
{
    "map": {
        "animation": "0",
        "showshadow": "0",
        "showlabels": "0",
        "showmarkerlabels": "1",
        "fillcolor": "F1f1f1",
        "bordercolor": "999999",
        "basefont": "Verdana",
        "basefontsize": "10",
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "BN.BE"
        },
        {
            "id": "BN.BM"
        },
        {
            "id": "BN.TE"
        },
        {
            "id": "BN.TU"
        }
    ],
    "markers": {
        "shapes": [
            {
                "id": "myCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "definition": [
            {
                "id": "BB",
                "x": "346.01",
                "y": "91.06",
                "label": "Bandar Seri Begawan",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "385.92",
                "y": "41.95",
                "label": "Muara"
            },
            {
                "id": "02",
                "x": "238.57",
                "y": "116.65",
                "label": "Tutong",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "391.03",
                "y": "155.53",
                "label": "Bangar"
            },
            {
                "id": "05",
                "x": "227.31",
                "y": "299.81",
                "label": "Sukang"
            },
            {
                "id": "06",
                "x": "75.87",
                "y": "197.48",
                "label": "Kuala Belait",
                "labelpos": "bottom"
            },
            {
                "id": "07",
                "x": "115.78",
                "y": "189.3",
                "label": "Seria"
            }
        ],
        "application": [
            {
                "id": "BB",
                "shapeid": "myCustomShape"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape"
            }
        ]
    }
}
</code></pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

    </div>
    <div class='tab old-xml-tab'>
<pre><code class="language-html">
<map animation='0' showShadow='0' showLabels='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1'  >
	<data>
		<entity id='BN.BE'  />
		<entity id='BN.BM'  />
		<entity id='BN.TE'  />
		<entity id='BN.TU'  />
	</data>
	<markers>
	   <shapes>
		     <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333'  fillPattern='radial' showborder='0' radius='4'/>
			 <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099'  fillPattern='radial' showborder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='BB' x='346.01' y='91.06' label='Bandar Seri Begawan' labelPos='right'  />
			<marker id='01' x='385.92' y='41.95' label='Muara'  />
			<marker id='02' x='238.57' y='116.65' label='Tutong' labelPos='left'  />
			<marker id='03' x='391.03' y='155.53' label='Bangar'  />
			<marker id='05' x='227.31' y='299.81' label='Sukang'  />
			<marker id='06' x='75.87' y='197.48' label='Kuala Belait' labelPos='bottom'  />
			<marker id='07' x='115.78' y='189.3' label='Seria'  />
		</definition>
		<application>
			<marker id='BB' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
