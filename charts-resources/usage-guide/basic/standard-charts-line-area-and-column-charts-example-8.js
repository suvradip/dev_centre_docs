{
    type: 'column2d',
    renderAt: 'chart-container',
    
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Sales Summary",
            "subcaption": "Last year",
            "xaxisname": "Quarter",
            "yaxisname": "Amount (In USD)",
            "numberprefix": "$",
            "theme": "fint"
        },
        "data": [{
            "label": "Q1",
            "value": "195000"
        }, {
            "label": "Q2",
            "value": "155000"
        }, {
            "label": "Q3",
            "value": "178000"
        }, {
            "label": "Q4",
            "value": "192000"
        }],
        "trendlines": [{
            "line": [{
                "isTrendZone": "1",
                "startvalue": "175000",
                "endValue": "150000",
                "color": "#1aaf5d",
                "valueOnRight": "1",
                "alpha": "30",
                "tooltext": "Quarterly sales target range was $endDataValue to $startDataValue",
                "displayvalue": "Target Range"
            }]
        }]
    }
}
