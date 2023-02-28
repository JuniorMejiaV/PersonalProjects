// Register the plugin to all charts:
Chart.register(ChartDataLabels);
Chart.defaults.font.size = 14;
Chart.defaults.color = 'black';
Chart.pointRadius = 5;

//NEW FUNCTION
function fillavgPassangers(datapoint){
    const Stop_ID = datapoint.map(
        function(index){
            return index.Stop_ID;
        })
        const Total_Passengers = datapoint.map(
        function(index){
            return index.Total_Passengers;
        })
    
        avgPassengers.data.labels = Stop_ID;
        avgPassengers.data.datasets[0].data = Total_Passengers;
        avgPassengers.update();
} 

function fillpopularStop(datapoint){
    const Stop_ID = datapoint.map(
        function(index){
            return index.Stop_ID;
        })
        const Total_Passengers = datapoint.map(
        function(index){
            return index.Total_Passengers;
        })

        popularStops.data.labels = Stop_ID;
        popularStops.data.datasets[0].data = Total_Passengers;
        popularStops.update();
} 

function fillunpopularStop(datapoint){
    const Stop_ID = datapoint.map(
        function(index){
            return index.Stop_ID;
        })
        const Total_Passengers = datapoint.map(
        function(index){
            return index.Total_Passengers;
        })

        unpopularStops.data.labels = Stop_ID;
        unpopularStops.data.datasets[0].data = Total_Passengers;
        unpopularStops.update();
} 

function fillavgTrip(datapoint){
    const Stop_ID = datapoint.map(
        function(index){
            return index.Stop_ID;
        })
        const Miles_Per_Stop = datapoint.map(
        function(index){
            return index.Miles_Per_Stop;
        })

        avgTrips.data.labels = Stop_ID;
        avgTrips.data.datasets[0].data = Miles_Per_Stop;
        avgTrips.update();
} 

//FETCHES ALL DATAPOINTS
function updateChart(intdays){
    if(intdays ==null){
        intdays = 365;
    }
    //AVERAGE PASSENGERS
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getPassengersPerStop.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1000&NumDays='+ intdays, function(result){
        fillavgPassangers(result);
    })

    //POPULAR STOPS
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getPopularStops.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1000&NumDays='+ intdays, function(result){
        fillpopularStop(result);
    })

    //UNPOPULAR STOPS
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getUnpopularStops.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1000&NumDays='+ intdays, function(result){
        fillunpopularStop(result);
    })
    
    //AVERAGE TRIP PER MILE
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getMilesPerStop.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1000&NumDays='+ intdays, function(result){
        fillavgTrip(result);
    })
    
}

//GREEN ROUTES

//FILTER DAY
$(document).on('click','#btnDayAlg', function(){
    updateChart(1);
})

//FILTER WEEK
$(document).on('click','#btnWeekAlg', function(){
    updateChart(7);
})

//FILTER MONTH
$(document).on('click','#btnMonthAlg', function(){
    updateChart(31);
})

//FILTER YEAR
$(document).on('click','#btnYearAlg', function(){
    updateChart(365);
})

const avgPassenger = document.getElementById('alg-101-purple');
const avgPassengers = new Chart (avgPassenger, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['rgb(147,80,159,0.7)'],
            borderColor: ['rgb(147,80,159)'],
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 8,
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        datalabels: {
            color: 'black',
        }
    }
    });

const popularStop = document.getElementById('alg-102-purple');
const popularStops = new Chart (popularStop, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['rgb(147,80,159,0.7)'],
            borderColor: ['rgb(147,80,159)'],
            borderWidth: 2,
            borderSkipped: false,
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    });

    const unpopularStop = document.getElementById('alg-103-purple');
    const unpopularStops = new Chart (unpopularStop, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                data: [],
                backgroundColor: ['rgb(147,80,159,0.7)'],
                borderColor: ['rgb(147,80,159)'],
                borderWidth: 1,
                borderSkipped: false,
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const avgTrip = document.getElementById('alg-104-purple');
    const avgTrips = new Chart (avgTrip, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['rgb(147,80,159,0.7)'],
            borderColor: ['rgb(147,80,159)'],
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 8,
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});