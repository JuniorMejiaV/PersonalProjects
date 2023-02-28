// Register the plugin to all charts:
Chart.register(ChartDataLabels);
Chart.defaults.font.size = 14;
Chart.defaults.color = 'black';

//BLUE ROUTE
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

//GOLD ROUTE
function fillavgPassangersGold(datapoint){
    const Stop_ID = datapoint.map(
        function(index){
            return index.Stop_ID;
        })
        const Total_Passengers = datapoint.map(
        function(index){
            return index.Total_Passengers;
        })
    
        avgPassengersGold.data.labels = Stop_ID;
        avgPassengersGold.data.datasets[0].data = Total_Passengers;
        avgPassengersGold.update();
} 

function fillpopularStopGold(datapoint){
    const Stop_ID = datapoint.map(
        function(index){
            return index.Stop_ID;
        })
        const Total_Passengers = datapoint.map(
        function(index){
            return index.Total_Passengers;
        })

        popularStopsGold.data.labels = Stop_ID;
        popularStopsGold.data.datasets[0].data = Total_Passengers;
        popularStopsGold.update();
} 

function fillunpopularStopGold(datapoint){
    const Stop_ID = datapoint.map(
        function(index){
            return index.Stop_ID;
        })
        const Total_Passengers = datapoint.map(
        function(index){
            return index.Total_Passengers;
        })

        unpopularStopsGold.data.labels = Stop_ID;
        unpopularStopsGold.data.datasets[0].data = Total_Passengers;
        unpopularStopsGold.update();
} 

function fillavgTripGold(datapoint){
    const Stop_ID = datapoint.map(
        function(index){
            return index.Stop_ID;
        })
        const Miles_Per_Stop = datapoint.map(
        function(index){
            return index.Miles_Per_Stop;
        })

        avgTripsGold.data.labels = Stop_ID;
        avgTripsGold.data.datasets[0].data = Miles_Per_Stop;
        avgTripsGold.update();
} 

//FETCHES ALL DATAPOINTS
function updateChart(intdays){
    if(intdays ==null){
        intdays = 365;
    }
    //AVERAGE PASSENGERS
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getPassengersPerStop.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1005&NumDays='+ intdays, function(result){
        fillavgPassangers(result);
    })
    //AVERAGE PASSENGERS GOLD
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getPassengersPerStop.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1006&NumDays='+ intdays, function(result){
        fillavgPassangersGold(result);
    })

    //POPULAR STOPS
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getPopularStops.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1005&NumDays='+ intdays, function(result){
        fillpopularStop(result);
    })
    //POPULAR STOPS GOLD
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getPopularStops.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1006&NumDays='+ intdays, function(result){
        fillpopularStopGold(result);
    })

    //UNPOPULAR STOPS
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getUnpopularStops.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1005&NumDays='+ intdays, function(result){
        fillunpopularStop(result);
    })
        //UNPOPULAR STOPS GOLD
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getUnpopularStops.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1006&NumDays='+ intdays, function(result){
        fillunpopularStopGold(result);
    })
    
    //AVERAGE TRIP PER MILE
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getMilesPerStop.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1005&NumDays='+ intdays, function(result){
        fillavgTrip(result);
    })
    //AVERAGE TRIP PER MILE GOLD
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getMilesPerStop.php?SessionID='+ sessionStorage.getItem('sessionID') + '&RouteID=1006&NumDays='+ intdays, function(result){
        fillavgTripGold(result);
    })
    
}

//FILTER DAY
$(document).on('click','#btnDayCross', function(){
    updateChart(1);
})

//FILTER WEEK
$(document).on('click','#btnWeekCross', function(){
    updateChart(7);
})

//FILTER MONTH
$(document).on('click','#btnMonthCross', function(){
    updateChart(31);
})

//FILTER YEAR
$(document).on('click','#btnYearCross', function(){
    updateChart(365);
})

//BLUE ROTES
const avgPassenger = document.getElementById('cross-101-blue');
const avgPassengers = new Chart(avgPassenger, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
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

const popularStop = document.getElementById('cross-102-blue');
const popularStops = new Chart (popularStop, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
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

const unpopularStop = document.getElementById('cross-103-blue');
const unpopularStops = new Chart(unpopularStop, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
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

const avgTrip = document.getElementById('cross-104-blue');
const avgTrips = new Chart(avgTrip, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
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

//GOLD ROUTE
const avgPassengerGold = document.getElementById('cross-201-gold');
const avgPassengersGold = new Chart (avgPassengerGold, {
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
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    });

    const popularStopGold = document.getElementById('cross-202-gold');
    const popularStopsGold = new Chart (popularStopGold, {
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
            maintainAspectRatio: true,
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

    const unpopularStopGold = document.getElementById('cross-203-gold');
    const unpopularStopsGold = new Chart (unpopularStopGold, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                data: [121,190,111,152,117,152,105,190,156,152,102,206,],
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
            responsive: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
        });

    const avgTripGold = document.getElementById('cross-204-gold');
    const avgTripsGold = new Chart (avgTripGold, {
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
  const avgPassengerCompare = document.getElementById('cross-301-compare');
  const AvgPassengersCompare = new Chart (avgPassengerCompare, {
  type: 'line',
  data: {
      labels: [],
      datasets: [{
          label: 'Blue Route',
          data: [],
          backgroundColor: ['rgb(70,116,185,0.7)'],
          borderColor: ['rgb(70,116,185)'],
          borderWidth: 2,
          tension: 0.4,
          pointRadius: 8,
      },
      {
          label: 'Gold Route',
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
      },
      responsive: false,
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
  });

  const popularStopCompare = document.getElementById('cross-302-compare');
  const popularStopsCompare = new Chart (popularStopCompare, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Blue Route',
            data: [],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
            borderWidth: 2,
            borderSkipped: false,
        },
        {
            label: 'Gold Route',
            data: [9,1,10,7,3,6,3,8,4,1,10,1],
            backgroundColor: ['rgb(255,215,0,0.7)'],
            borderColor: ['rgb(255,215,0)'],
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
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
  
  const unpopularStopCompare = document.getElementById('cross-303-compare');
  const unpopularStopsCompare = new Chart (unpopularStopCompare, {
      type: 'bar',
      data: {
          labels: [],
          datasets: [{
              label: 'Blue Route',
              data: [],
              backgroundColor: ['rgb(70,116,185,0.7)'],
              borderColor: ['rgb(70,116,185)'],
              borderWidth: 2,
              borderSkipped: false,
          },
          {
              label: 'Gold Route',
              data: [9,1,10,7,3,6,3,8,4,1,10,1],
              backgroundColor: ['rgb(255,215,0,0.7)'],
              borderColor: ['rgb(255,215,0)'],
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

const avgTripCompare = document.getElementById('cross-304-compare');
const avgTripsCompare = new Chart (avgTripCompare, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Blue Route',
            data: [],
            backgroundColor: ['rgb(70,116,185,0.7)'],
            borderColor: ['rgb(70,116,185)'],
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 8,
        },
        {
            label: 'Gold Route',
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
        },
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  }); */