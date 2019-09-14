const config = {
    chart: {
        type: 'column'
    },
    xAxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Friday', 'Sat', 'Sun']
    },
    yAxis: {
        min: 0,
        // title: {
        //     text: 'Total fruit consumption'
        // },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: 'white'
            }
        }
    },
    series: [{
        name: 'Health',
        data: [5, 3, 4, 7]
    }, {
        name: 'Life',
        data: [2, 2, 3, 2]
    }, {
        name: 'Motor',
        data: [3, 4, 4, 2]
    }]
};

export default config;
