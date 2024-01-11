// 
// 
// 

//   Linechart
var myChart = echarts.init(document.getElementById('echart-line-chart'));

var options = {

    xAxis: {
        type: 'category',
        data: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E', 'Category F', 'Category G', 'Category H']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: 'Example Data',
        type: 'line',
        data: [150, 130, 124, 218, 135, 200, 120, 170]
    }]
};

//   Basic Line Echart
myChart.setOption(options);

// Assuming you have already included the ECharts library in your HTML

// Initialize ECharts instance
var chartDom = document.getElementById('echart-area-line-chart-example');
var myChart = echarts.init(chartDom);

// Define chart options
var option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
    }]
};

// Set the options to the chart instance
myChart.setOption(option);


//   
var chartDom = document.getElementById('echart-stacked-line-chart-example');
var myChart = echarts.init(chartDom);
var option;

option = {

    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        },
        top: '15px',
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

option && myChart.setOption(option);

/////////        
//     //           
//     //
////////   
//     //
//      //
//     //
// /////

// Basic Bar Chart
var chartDom = document.getElementById('basic-bar-chart');
var myChart = echarts.init(chartDom);

// Define chart options
var option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
    },
    series: [{
        type: 'bar',
        data: [120, 200, 150, 80, 70, 110, 130]
    }]
};

// Set the options to the chart instance
myChart.setOption(option);


// Bar Chart Background
var chartDom = document.getElementById('bar-chart-background');
var myChart = echarts.init(chartDom);
var option;

option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
        }
    }]
};

option && myChart.setOption(option);

// Side Bar Chart 
var chartDom = document.getElementById('side-bar-chart');
var myChart = echarts.init(chartDom);
var option;

option = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [89.3, 58212, 'Matcha Latte'],
            [57.1, 78254, 'Milk Tea'],
            [74.4, 41032, 'Cheese Cocoa'],
            [50.1, 12755, 'Cheese Brownie'],
            [89.7, 20145, 'Matcha Cocoa'],
            [68.1, 79146, 'Tea'],
            [19.6, 91852, 'Orange Juice'],
            [10.6, 101852, 'Lemon Juice'],
            [32.7, 20112, 'Walnut Brownie']
        ]
    },
    grid: {
        containLabel: true
    },
    xAxis: {
        name: 'amount'
    },
    yAxis: {
        type: 'category'
    },
    visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 10,
        max: 100,
        text: ['High Score', 'Low Score'],
        // Map the score column to color
        dimension: 0,
        inRange: {
            color: ['#65B581', '#FFCE34', '#FD665F']
        }
    },
    series: [{
        type: 'bar',
        encode: {
            // Map the "amount" column to X axis.
            x: 'amount',
            // Map the "product" column to Y axis
            y: 'product'
        }
    }]
};

option && myChart.setOption(option);



///////////
//        //
//         //
//       //
// ///////
// 
// 
// 

// Pie Chart
var chartDom = document.getElementById('circle-chart');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: 'Referer of a Website',
        left: 'right'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left'
    },
    series: [{
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [{
                value: 1048,
                name: 'Search Engine'
            },
            {
                value: 735,
                name: 'Direct'
            },
            {
                value: 580,
                name: 'Email'
            },
            {
                value: 484,
                name: 'Union Ads'
            },
            {
                value: 300,
                name: 'Video Ads'
            }
        ],
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};

option && myChart.setOption(option);

// Doughnut Chart
var chartDom = document.getElementById('doughnut-chart');
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: 'center'
    },
    series: [{
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
            show: false,
            position: 'center'
        },
        emphasis: {
            label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
            }
        },
        labelLine: {
            show: false
        },
        data: [{
                value: 1048,
                name: 'Search Engine'
            },
            {
                value: 735,
                name: 'Direct'
            },
            {
                value: 580,
                name: 'Email'
            },
            {
                value: 484,
                name: 'Union Ads'
            },
            {
                value: 300,
                name: 'Video Ads'
            }
        ]
    }]
};

option && myChart.setOption(option);

// 
// 
// 
// 
// 
// 
// 
//
// Dynamic Data
var chartDom = document.getElementById('echart-line-dynamic-data');
var myChart = echarts.init(chartDom);
var option;

function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    };
}
let data = [];
let now = new Date(1997, 9, 3);
let oneDay = 24 * 3600 * 1000;
let value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
    data.push(randomData());
}
option = {
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return (
                date.getDate() +
                '/' +
                (date.getMonth() + 1) +
                '/' +
                date.getFullYear() +
                ' : ' +
                params.value[1]
            );
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: [{
        name: 'Fake Data',
        type: 'line',
        showSymbol: false,
        data: data
    }]
};
setInterval(function () {
    for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
    }
    myChart.setOption({
        series: [{
            data: data
        }]
    });
}, 1000);

option && myChart.setOption(option);