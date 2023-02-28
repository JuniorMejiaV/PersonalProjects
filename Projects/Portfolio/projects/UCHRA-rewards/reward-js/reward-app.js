// Register the plugin to all charts:
Chart.register(ChartDataLabels);
Chart.defaults.font.size = 20;
Chart.defaults.color = 'black';

//DATA FUNCTIONS
    //TOTAL RIDES ROUTE
    function filltotalRides(datapoint){
      const Stop_ID = datapoint.map(
          function(index){
              return index.Stop_ID;
          })
          const Total_Passengers = datapoint.map(
          function(index){
              return index.Total_Passengers;
          })
      
          totalRides.data.labels = Stop_ID;
          totalRides.data.datasets[0].data = Total_Passengers;
          totalRides.update();
    } 

    function updateChart(){
      //TOTAL RIDES
      $.getJSON('https://aiw.ojr.mybluehost.me/api/getPassengersPerStop.php?SessionID='+ sessionStorage.getItem('sessionID'), function(result){
        filltotalRides(result);
    })
    };

  function updateCustomerRides(){
    $.ajax({
      type: "PUT",
      contentType:"application/json; charset=utf-8",
      url: "https://aiw.ojr.mybluehost.me/api/updateCustomerRewards.php",
      data: { Phone: sessionStorage.getItem('customerPhone') },
      success:function(result){
          console.log(result);
      },
      error: function(resultError){
          console.log(resultError);
      }
    })
  }

  // On Customer Login
  $(document).on('click','#customerLogin',function(){
    var form = new FormData();
    form.append("CellNum", $("#txtPhoneLogin").val());

    var settings = {
      "url": "https://aiw.ojr.mybluehost.me/api/verifyCustomer.php",
      "method": "POST",
      "timeout": 0,
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form
    };

    $.ajax(settings).done(function (response) {
      if(response == 'Error'){
        console.log('Found Error');
        alert("There was an error with your login.");
      } else {
        console.log('Login validated.');
        console.log(response);
        sessionStorage.setItem("customerPhone", response["Cell_Phone_Number"]);
        updateCustomerRides();
      }
    });
    window.location="https://aiw.ojr.mybluehost.me/rewards/rewards-profile.html";
    console.log('Hello');
  });

  // On Customer Signup
  $(document).on('click','#btnCustomerSignup',function(){
    var form = new FormData();
    form.append("CellNum", $("#txtPhoneSignup").val());
    form.append("Veteran", $("#txtVeteranSignup").val());
    form.append("Ethnicity", $("#txtVeteranSignup").val());
    form.append("Disability", $("#txtDisabilitySignup").val());
    form.append("AgeGroup", $("#txtAgeGroupSignup").val());
    form.append("SpecialRequest", $("#txtSpecialRequestSignup").val());

    var settings = {
      "url": "https://aiw.ojr.mybluehost.me/api/newCustomer.php",
      "method": "POST",
      "timeout": 0,
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form
    };

    $.ajax(settings).done(function (response) {
      if(response == 'Error'){
        console.log('Found Error');
        alert("There was an error with the registration.");
      } else {
        console.log('You have made an account. Log in with your info now.');
        console.log(response);
        window.location="https://aiw.ojr.mybluehost.me/rewards/rewards-login.html";
      }
    });
  })


  //TOTAL RIDE CHART
  const totalRide = document.getElementById('total-rides');
  const totalRides = new Chart (totalRide,{
      type: 'doughnut',
      data: {
            //labels: ['HUB', 'JUSTICE CENTER', 'PREMIER MEDICAL', 'NORTHSIDE IGA', 'FIRST HORIZON BANK', 'WALMART', 'ROLLING MEADOWS APTS.', 'ALGOOD HOUSING', 'ALGOOD MANOR', 'SENIOR CENTER', 'GARDEN GROVER APTS.', 'QUINLAND RIDGE APTS.', ' WYNONA','SOCIAL SECURITY OFFICE', 'CHECH', 'EMPLOYMENT SECURITY OFFICE',],
            datasets: [{
            data: [9],
            backgroundColor: ['rgb(189,136,32, 0.7)', 'rgb(102,102,102,0.2'],
            borderColor: ['rgb(189,136,32)', 'rgb(102,102,102,0.2'],
            borderWidth: 2,
            tension: 0.4,
          }]
      },
      options: {
          circumference: 180,
          rotation: 270,
          cutout: '70%',
          maintainAspectRatio: true,
          plugins: {
              legend: {
                  display: false
              },
              tooltip:{
                filter:(tooltipItem) =>{
                  console.log(tooltipItem)
                  return tooltipItem.dataIndex === 0;
                }
              }
          },
          responsive: true,
          scales: {
              x: {
                grid: {
                  display: false,
                  drawBorder: false,
                }
              },
              y: {
                  beginAtZero: true,
                  grid: {
                    display: false,
                    drawBorder: false,
                  },
                  ticks: {
                    display: false,
                  }
              }
          }
      }
      });