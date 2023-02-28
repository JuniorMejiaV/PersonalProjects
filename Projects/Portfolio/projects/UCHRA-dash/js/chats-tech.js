// Register the plugin to all charts:
Chart.register(ChartDataLabels);
Chart.defaults.font.size = 14;
Chart.defaults.color = 'black';

//GOLD ROUTE
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

        console.log(Miles_Per_Stop)
        avgTrips.data.labels = Stop_ID;
        avgTrips.data.datasets[0].data = Miles_Per_Stop;
        avgTrips.update();
} 

//PURPLE ROUTE
function fillavgPassangersPurple(datapoint){
    const Stop_ID = datapoint.map(
        function(index){
            return index.Stop_ID;
        })
        const Total_Passengers = datapoint.map(
        function(index){
            return index.Total_Passengers;
        })
    
        avgPassengersPurple.data.labels = Stop_ID;
        avgPassengersPurple.data.datasets[0].data = Total_Passengers;
        avgPassengersPurple.update();
} 

function fillpopularStopPurple(datapoint){
    const Stop_ID = datapoint.map(
        function(index){
            return index.Stop_ID;
        })
        const Total_Passengers = datapoint.map(
        function(index){
            return index.Total_Passengers;
        })

        popularStopsPurple.data.labels = Stop_ID;
        popularStopsPurple.data.datasets[0].data = Total_Passengers;
        popularStopsPurple.update();
} 

function fillunpopularStopPurple(datapoint){
    const Stop_ID = datapoint.map(
        function(index){
            return index.Stop_ID;
        })
        const Total_Passengers = datapoint.map(
        function(index){
            return index.Total_Passengers;
        })

        unpopularStopsPurple.data.labels = Stop_ID;
        unpopularStopsPurple.data.datasets[0].data = Total_Passengers;
        unpopularStopsPurple.update();
} 


function fillavgTripPurple(datapoint){
    const Stop_ID = datapoint.map(
        function(index){
            return index.Stop_ID;
        })
        const Miles_Per_Stop = datapoint.map(
        function(index){
            return index.Miles_Per_Stop;
        })

        avgTripsPurple.data.labels = Stop_ID;
        avgTripsPurple.data.datasets[0].data = Miles_Per_Stop;
        avgTripsPurple.update();
} 

//FETCHES ALL DATAPOINTS
function updateChart(intdays){
    if(intdays ==null){
        intdays = 365;
    }
    //AVERAGE PASSENGERS
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getPassengersPerStop.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1003&NumDays='+ intdays, function(result){
        fillavgPassangers(result);
    })
    //AVERAGE PASSENGERS GOLD
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getPassengersPerStop.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1004&NumDays='+ intdays, function(result){
        fillavgPassangersPurple(result);
    })

    //POPULAR STOPS
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getPopularStops.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1003&NumDays='+ intdays, function(result){
        fillpopularStop(result);
    })
    //POPULAR STOPS GOLD
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getPopularStops.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1004&NumDays='+ intdays, function(result){
        fillpopularStopPurple(result);
    })

    //UNPOPULAR STOPS
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getUnpopularStops.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1003&NumDays='+ intdays, function(result){
        fillunpopularStop(result);
    })
    //UNPOPULAR STOPS GOLD
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getUnpopularStops.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1004&NumDays='+ intdays, function(result){
        fillunpopularStopPurple(result);
    })
    
    //AVERAGE TRIP PER MILE
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getMilesPerStop.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1003&NumDays='+ intdays, function(result){
        fillavgTrip(result);
    })
    //AVERAGE TRIP PER MILE GOLD
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getMilesPerStop.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1004&NumDays='+ intdays, function(result){
        fillavgTripPurple(result);
    })
    
}

//FILTER DAY
$(document).on('click','#btnDayTnTech', function(){
    updateChart(1)
});

//FILTER WEEK
$(document).on('click','#btnWeekTnTech', function(){
    updateChart(7)
});

//FILTER MONTH
$(document).on('click','#btnMonthTnTech', function(){
    updateChart(31)
});

//FILTER YEAR
$(document).on('click','#btnYearTnTech', function(){
    updateChart(365)
});

//GOLD ROUTE
const avgPassenger = document.getElementById('tech-101-gold');
const avgPassengers = new Chart (avgPassenger, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['rgb(255,215,0,0.7)'],
            borderColor: ['rgb(255,215,0)'],
            borderWidth: 2,
            tension: 0.4,
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

const popularStop = document.getElementById('tech-102-gold');
const popularStops = new Chart (popularStop, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['rgb(255,215,0,0.7)'],
            borderColor: ['rgb(255,215,0)'],
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

const unpopularStop = document.getElementById('tech-103-gold');
const unpopularStops = new Chart (unpopularStop, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['rgb(255,215,0,0.7)'],
            borderColor: ['rgb(255,215,0)'],
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

const avgTrip = document.getElementById('tech-104-gold');
const avgTrips = new Chart (avgTrip, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['rgb(255,215,0,0.7)'],
            borderColor: ['rgb(255,215,0)'],
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

//PURPLE ROUTE
const avgPassengerPurple = document.getElementById('tech-201-purple');
const avgPassengersPurple = new Chart (avgPassengerPurple, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['rgb(169,0,230,0.7)'],
            borderColor: ['rgb(169,0,230)'],
            borderWidth: 2,
            tension: 0.4,
        }]
    },
    options: {
        maintainAspectRatio: true,
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

const popularStopPurple = document.getElementById('tech-202-purple');
const popularStopsPurple = new Chart (popularStopPurple, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['rgb(169,0,230,0.7)'],
            borderColor: ['rgb(169,0,230)'],
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 8,
        }]
    },
    options: {
        maintainAspectRatio: true,
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

const unpopularStopPurple = document.getElementById('tech-203-purple');
const unpopularStopsPurple = new Chart (unpopularStopPurple, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['rgb(169,0,230,0.7)'],
            borderColor: ['rgb(169,0,230)'],
            borderWidth: 2,
            borderSkipped: false,
        }]
    },
    options: {
        maintainAspectRatio: true,
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

const avgTripPurple = document.getElementById('tech-204-purple');
const avgTripsPurple = new Chart (avgTripPurple, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['rgb(169,0,230,0.7)'],
            borderColor: ['rgb(169,0,230)'],
            borderWidth: 1,
            borderSkipped: false,
        }]
    },
    options: {
        maintainAspectRatio: true,
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