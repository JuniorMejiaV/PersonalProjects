// Register the plugin to all charts:
Chart.register(ChartDataLabels);
Chart.defaults.font.size = 14;
Chart.defaults.color = 'black';

function fillageGroups(datapoint){
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

function fillveterans(datapoint){
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

function filldisabilities(datapoint){
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
        avgTripsGold.data.labels = Stop_ID;
        avgTripsGold.data.datasets[0].data = Miles_Per_Stop;
        avgTripsGold.update();
} 

//TESTING
function updateChart(intdays){
    if(intdays ==null){
        intdays = 365;
    }
    //AGE GROUP
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getPassengersPerStop.php?SessionID=bdbfe6ec-d8c8-4358-95c8-640afa5892a9',function(result){
        fillageGroups(result);
    })

    //VETERAN STATUS
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getCountVeterans.php?SessionID=bdbfe6ec-d8c8-4358-95c8-640afa5892a9',function(result){
        fillveterans(result);
    })

    //PEOPLE WITH DISABILITIES
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getCountDisability.php?SessionID=bdbfe6ec-d8c8-4358-95c8-640afa5892a9',function(result){
        filldisabilities(result);
    })
    
    //ETHNICITY
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getMilesPerStop.php?SessionID=bdbfe6ec-d8c8-4358-95c8-640afa5892a9',function(result){
        fillethnicities(result);
    })
}


/*
//FETCHES ALL DATAPOINTS
function updateChart(intdays){
    if(intdays ==null){
        intdays = 365;
    }
    //AGE GROUP
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getPassengersPerStop.php?SessionID='+ sessionStorage.getItem('sessionID') +'',function(result){
        fillageGroups(result);
    })

    //VETERAN STATUS
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getCountVeterans.php?SessionID='+ sessionStorage.getItem('sessionID') +'' ,function(result){
        fillveterans(result);
    })

    //PEOPLE WITH DISABILITIES
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getCountDisability.php?SessionID='+ sessionStorage.getItem('sessionID') +'' ,function(result){
        filldisabilities(result);
    })
    
    //ETHNICITY
    $.getJSON('https://aiw.ojr.mybluehost.me/api/getMilesPerStop.php?SessionID='+ sessionStorage.getItem('sessionID') +'' ,function(result){
        fillethnicities(result);
    })
}

*/

//FILTER DAY
$(document).on('click','#btnDayTech', function(){
    updateChart(1)
})

//FILTER WEEK
$(document).on('click','#btnWeekTech', function(){
    updateChart(7)
})

//FILTER MONTH
$(document).on('click','#btnMonthTech', function(){
    updateChart(31)
})

//FILTER YEAR
$(document).on('click','#btnYearTech', function(){
    updateChart(365)
})

//PURPLE ROUTE
const ageGroup = document.getElementById('ageGroup');
const ageGroups = new Chart (ageGroup, {
    type: 'bar',
    data: {
        labels: ['18-24', '25-40', '41-64', 'Over 65'],
        datasets: [{
            data: [18,13,15,20],
            backgroundColor: ['rgb(50,162,71,0.7)', 'rgb(70,116,185,0.7)', 'rgb(238,29,35,0.7)', 'rgb(147,80,159,0.7)'],
            borderColor: ['rgb(50,162,71)', 'rgb(70,116,185)', 'rgb(238,29,35)', 'rgb(147,80,159)'],
            borderWidth: 2,
            tension: 0.4,
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
        },
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
    }
    });

const veteran = document.getElementById('veterans');
const veterans = new Chart (veteran, {
    type: 'pie',
    data: {
        labels: ['Veterans'],
        datasets: [{
            data: [13],
            backgroundColor: ['rgb(50,162,71,0.7)', 'rgb(238,29,35,0.7)'],
            borderColor: ['rgb(50,162,71)', 'rgb(238,29,35)' ],
            borderWidth: 2,
            tension: 0.4,
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
        },
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ethnicity = document.getElementById('ethnicity');
const ethnicities = new Chart (ethnicity, {
    type: 'bar',
    data: {
        labels: ['Asian or Pacific Islander', 'Black or African American', 'Hispanic or Latino', 'Native American', 'White Or Caucasian'],
        datasets: [{
            data: [2,4,8,1,8],
            backgroundColor: ['rgb(54,162,235,0.7)', 'rgb(75,192,192,0.7)', 'rgb(255,159,64,0.7)', 'rgb(153,102,255,0.7)', 'rgb(255,99,132,0.7)'],
            borderColor: ['rgb(54,162,235)', 'rgb(75,192,192)', 'rgb(255,159,64)', 'rgb(153,102,255)', 'rgb(255,99,132)'],
            borderWidth: 1,
            borderSkipped: false,
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
        },
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const disability = document.getElementById('disability');
const disabilities = new Chart (disability, {
    type: 'pie',
    data: {
        labels: ['People with Disabilities'],
        datasets: [{
            data: [8],
            backgroundColor: ['rgb(50,162,71,0.7)'],
            borderColor: ['rgb(50,162,71)'],
            borderWidth: 2,
            borderSkipped: false,
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
        },
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    });