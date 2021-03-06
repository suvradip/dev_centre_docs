{
    type: 'column2d',
    renderAt: 'chart-container',
    
    width: '600',
    height: '400',
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
                "startvalue": "175000",
                "color": "#1aaf5d",
                "displayvalue": "Target - $175K"
            }]
        }]
    }
}
