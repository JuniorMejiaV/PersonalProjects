// Register the plugin to all charts:
Chart.register(ChartDataLabels);
Chart.defaults.font.size = 14;
Chart.defaults.color = 'black';

//RED ROUTE
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

//BLUE ROUTE
function fillavgPassangersBlue(datapoint){
    const Stop_ID = datapoint.map(
        function(index){
            return index.Stop_ID;
        })
        const Total_Passengers = datapoint.map(
        function(index){
            return index.Total_Passengers;
        })
    
        avgPassengersBlue.data.labels = Stop_ID;
        avgPassengersBlue.data.datasets[0].data = Total_Passengers;
        avgPassengersBlue.update();
} 

function fillpopularStopBlue(datapoint){
    const Stop_ID = datapoint.map(
        function(index){
            return index.Stop_ID;
        })
        const Total_Passengers = datapoint.map(
        function(index){
            return index.Total_Passengers;
        })

        popularStopsBlue.data.labels = Stop_ID;
        popularStopsBlue.data.datasets[0].data = Total_Passengers;
        popularStopsBlue.update();
} 

function fillunpopularStopBlue(datapoint){
    const Stop_ID = datapoint.map(
        function(index){
            return index.Stop_ID;
        })
        const Total_Passengers = datapoint.map(
        function(index){
            return index.Total_Passengers;
        })

        unpopularStopsBlue.data.labels = Stop_ID;
        unpopularStopsBlue.data.datasets[0].data = Total_Passengers;
        unpopularStopsBlue.update();
} 

function fillavgTripBlue(datapoint){
    const Stop_ID = datapoint.map(
        function(index){
            return index.Stop_ID;
        })
        const Miles_Per_Stop = datapoint.map(
        function(index){
            return index.Miles_Per_Stop;
        })

        avgTripsBlue.data.labels = Stop_ID;
        avgTripsBlue.data.datasets[0].data = Miles_Per_Stop;
        avgTripsBlue.update();
} 

//FETCHES ALL DATAPOINTS
function updateChart(intdays){
    if(intdays ==null){
        intdays = 365;
    }
    //AVERAGE PASSENGERS
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getPassengersPerStop.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1007&NumDays='+ intdays, function(result){
        fillavgPassangers(result);
    })
    //AVERAGE PASSENGERS BLUE
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getPassengersPerStop.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1008&NumDays='+ intdays, function(result){
        fillavgPassangersBlue(result);
    })

    //POPULAR STOPS
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getPopularStops.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1007&NumDays='+ intdays, function(result){
        fillpopularStop(result);
    })
    //POPULAR STOPS BLUE
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getPopularStops.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1008&NumDays='+ intdays, function(result){
        fillpopularStopBlue(result);
    })

    //UNPOPULAR STOPS
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getUnpopularStops.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1007&NumDays='+ intdays, function(result){
        fillunpopularStop(result);
    })
    //UNPOPULAR STOPS BLUW
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getUnpopularStops.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1008&NumDays='+ intdays, function(result){
        fillunpopularStopBlue(result);
    })
    
    //AVERAGE TRIP PER MILE
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getMilesPerStop.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1007&NumDays='+ intdays, function(result){
        fillavgTrip(result);
    })
    //AVERAGE TRIP PER MILE BLUE
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getMilesPerStop.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1008&NumDays='+ intdays, function(result){
        fillavgTripBlue(result);
    })
    
}

//GREEN ROUTES

//FILTER DAY
$(document).on('click','#btnDayMinn', function(){
    updateChart(1);
})

//FILTER WEEK
$(document).on('click','#btnWeekMinn', function(){
    updateChart(7);
})

//FILTER MONTH
$(document).on('click','#btnMonthMinn', function(){
    updateChart(31);
})

//FILTER YEAR
$(document).on('click','#btnYearMinn', function(){
    updateChart(365);
})

 const avgPassenger = document.getElementById('minn-101-red');
 const avgPassengers = new Chart (avgPassenger, {
     type: 'line',
     data: {
         labels: [],
         datasets: [{
             data: [],
             backgroundColor: ['rgb(238,29,35,0.7)'],
             borderColor: ['rgb(238,29,35)'],
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

     const popularStop = document.getElementById('minn-102-red');
     const popularStops = new Chart (popularStop, {
         type: 'bar',
         data: {
             labels: [],
             datasets: [{
                 data: [],
                 backgroundColor: ['rgb(238,29,35,0.7)'],
                 borderColor: ['rgb(238,29,35)'],
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

const unpopularStop = document.getElementById('minn-103-red');
const unpopularStops = new Chart (unpopularStop, {
     type: 'bar',
     data: {
         labels: [],
         datasets: [{
             data: [],
             backgroundColor: ['rgb(238,29,35,0.7)'],
             borderColor: ['rgb(238,29,35)'],
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

const avgTrip = document.getElementById('minn-104-red');
const avgTrips = new Chart (avgTrip, {
     type: 'line',
     data: {
         labels: [],
         datasets: [{
             data: [],
             backgroundColor: ['rgb(238,29,35,0.7)'],
             borderColor: ['rgb(238,29,35)'],
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

     //BLUE ROUTE
 const avgPassengerBlue = document.getElementById('minn-201-blue');
 const avgPassengersBlue = new Chart (avgPassengerBlue, {
     type: 'line',
     data: {
         labels: [],
         datasets: [{
             data: [],
             backgroundColor: ['rgb(37,79,162,0.7)'],
             borderColor: ['rgb(37,79,162)'],
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
         responsive: false,
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
     });

     const popularStopBlue = document.getElementById('minn-202-blue');
     const popularStopsBlue = new Chart (popularStopBlue, {
         type: 'bar',
         data: {
             labels: [],
             datasets: [{
                 data: [],
                 backgroundColor: ['rgb(37,79,162,0.7)'],
                 borderColor: ['rgb(37,79,162)'],
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
             responsive: false,
             scales: {
                 y: {
                     beginAtZero: true
                 }
             }
         }
     });

 const unpopularStopBlue = document.getElementById('minn-203-blue');
 const unpopularStopsBlue = new Chart (unpopularStopBlue, {
     type: 'bar',
     data: {
         labels: [],
         datasets: [{
             data: [],
             backgroundColor: ['rgb(37,79,162,0.7)'],
             borderColor: ['rgb(37,79,162)'],
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
         responsive: false,
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
     });

     const avgTripBlue = document.getElementById('minn-204-blue');
     const avgTripsBlue = new Chart (avgTripBlue, {
         type: 'line',
         data: {
             labels: [],
             datasets: [{
                 data: [],
                 backgroundColor: ['rgb(37,79,162,0.7)'],
                 borderColor: ['rgb(37,79,162)'],
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
             responsive: false,
             scales: {
                 y: {
                     beginAtZero: true
                 }
             }
         }
     });
/*
//COMPARE ROUTES
  const avgPassengerComapre = document.getElementById('minn-301-compare');
const avgPassengersComapre = new Chart (avgPassengerComapre, {
type: 'line',
data: {
    labels: [],
    datasets: [{
        label: 'Red Route',
        data: [],
        backgroundColor: ['rgb(238,29,35,0.7)'],
        borderColor: ['rgb(238,29,35)'],
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 8,
    },
    {
        label: 'Blue Route',
        data: [106,149,43,27,142,45,12,100,190,80,133,170],
        backgroundColor: ['rgb(37,79,162,0.7)'],
        borderColor: ['rgb(37,79,162)'],
        borderWidth: 2,
        tension: 0.4,
    }]
},
options: {
    maintainAspectRatio: false,
    plugins: {
    },
    responsive: false,
    scales: {
        y: {
            beginAtZero: true
        }
    }
}
});

const popularStopCompare = document.getElementById('minn-302-compare');
const popularStopsCompare = new Chart (popularStopCompare, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Red Route',
            data: [],
            backgroundColor: ['rgb(238,29,35,0.7)'],
            borderColor: ['rgb(238,29,35)'],
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 8,
        },
        {
            label: 'Blue Route',
            data: [9,5,2,10,5,2,3,8,7,1,20,6],
            backgroundColor: ['rgb(37,79,162,0.7)'],
            borderColor: ['rgb(37,79,162)'],
            borderWidth: 2,
            tension: 0.4,
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
        },
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });

const unpopularStopCompare = document.getElementById('minn-303-compare');
const unpopularStopsCompare = new Chart (unpopularStopCompare, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Red Route',
            data: [],
            backgroundColor: ['rgb(238,29,35,0.7)'],
            borderColor: ['rgb(238,29,35)'],
            borderWidth: 2,
            borderSkipped: false,
        },
        {
            label: 'Blue Route',
            data: [9,1,10,7,3,6,3,8,4,1,10,1],
            backgroundColor: ['rgb(37,79,162,0.7)'],
            borderColor: ['rgb(37,79,162)'],
            borderWidth: 2,
            tension: 0.4,
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
        },
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });

  const avgTripCompare = document.getElementById('minn-304-compare');
  const avgTripsCompare = new Chart (avgTripCompare, {
      type: 'bar',
      data: {
          labels: [],
          datasets: [{
            label: 'Red Route',
            data: [],
            backgroundColor: ['rgb(238,29,35,0.7)'],
            borderColor: ['rgb(238,29,35)'],
            borderWidth: 2,
            borderSkipped: false,
        },
        {
            label: 'Blue Route',
            data: [9,1,10,7,3,6,3,8,4,1,10,1],
            backgroundColor: ['rgb(37,79,162,0.7)'],
            borderColor: ['rgb(37,79,162)'],
            borderWidth: 2,
            tension: 0.4,
        }]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
        },
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  }); */