//SWEET ALERTS
/*
$(document).on('click','#btnUserProfile',function(){
    Swal.fire({
        title: 'Profile',
        html: `<div class="container align-left">
                <p><b>User:</b> FirstName LastName</p>
                <p><b>Phone:</b> 931-123-4567</p>
                <p><b>Email:</b> firstnamelastname@example.com</p>
                </div>`,
    })
})
*/

$(document).on('click','#btnAdminSignup',function(){
  var form = new FormData();
  form.append("Email", $("#txtSignupEmail").val());
  form.append("EmpID", $("#txtSignupEmpID").val());
  form.append("FName", $("#txtSignupFName").val());
  form.append("LName", $("#txtSignupLName").val());
  form.append("Phone", $("#txtSignupPhone").val());
  form.append("Title", $("#txtSignupTitle").val());
  form.append("Status", "Active");
  form.append("Password", $("#txtSignupPassword").val());

  var settings = {
    "url": "https://aiw.ojr.mybluehost.me/api/newAdmin.php",
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
      Swal.fire({
        icon: 'error',
        text: 'There was an error with the registration process.',
      })
    } else {
      console.log('You are verified');
      console.log(response);
      sessionStorage.setItem("sessionID", response["Session_ID"]);
      window.location="https://aiw.ojr.mybluehost.me/index.html";
    }
  });
})

function updateSession(){
  $.ajax({
    type: "PUT",
    contentType:"application/json; charset=utf-8",
    url: "https://aiw.ojr.mybluehost.me/api/verifyAdminLogin.php",
    data: { SessionID: sessionStorage.getItem('sessionID') },
    success:function(result){
        console.log(result);
    },
    error: function(resultError){
        console.log(resultError);
    }
  })
}

function deleteSession(){
  $.ajax({
    type: "DELETE",
    contentType:"application/json; charset=utf-8",
    url: "https://aiw.ojr.mybluehost.me/api/verifyAdminLogin.php",
    data: { SessionID: sessionStorage.getItem('sessionID') },
    success:function(result){
        console.log(result);
    },
    error: function(resultError){
        console.log(resultError);
    }
  })
}
// //ADMIN LOGOUT BTN
// $('#adminLogout').on('click',function(){
//   Swal.fire({
//     title: 'Are you sure you want to logout??',
//     showDenyButton: true,
//     showCancelButton: true,
//     confirmButtonText: 'Logout',
//     denyButtonText: `Don't save`,
//   }).then((result) => {
//     /* Read more about isConfirmed, isDenied below */
//     if (result.isConfirmed) {
//       Swal.fire('Saved!', '', 'success')
//     } else if (result.isDenied) {
//       Swal.fire('Changes are not saved', '', 'info')
//     }
//   })
//   deleteSession();
// });

$(document).on('click','#btnAdminLogin',function(){
    var form = new FormData();
    form.append("Email", $("#txtLoginEmail").val());
    form.append("Password", $("#txtLoginPassword").val());

    var settings = {
      "url": "https://aiw.ojr.mybluehost.me/api/verifyAdminLogin.php",
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
        Swal.fire({
          icon: 'error',
          text: 'There was an error with the login.',
        })
      } else {
        console.log('You are verified');
        let objSessionID = JSON.parse(response);
        console.log("Object: " + objSessionID.SessionID);
        sessionStorage.setItem("sessionID", objSessionID.SessionID);
        console.log(sessionStorage.getItem("sessionID"));
        window.location="https://aiw.ojr.mybluehost.me/Cookeville.html";
      }
    });
})

$(document).on('click','#btnLogout',function(){
    Swal.fire({
        title: 'Are you sure you want to logout?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#bfbfbf',
        confirmButtonText: 'Logout!'
      }).then((result) => {
        if (result.isConfirmed) {
          $.ajax({
            type: "DELETE",
            contentType:"application/json; charset=utf-8",
            url: "https://aiw.ojr.mybluehost.me/api/verifyAdminLogin.php",
            data: { SessionID: sessionStorage.getItem('sessionID') },
            success:function(result){
                console.log(result);
            },
            error: function(resultError){
                console.log(resultError);
            }
          })
          Swal.fire(
            'Logged Out!',
          )
        }
        window.location="https://aiw.ojr.mybluehost.me/index.html";
      })
      
})


/*  SAVE TO PDF
$(document).on('click','#saveToPDF',function(){
  var ckvPage = document.getElementById('#ckv-page');
  html2pdf(ckvPage);
})*/

//ACTIVE FUNCTION FOR FILTER BTN
$(document).on('click', 'button', function(){
  $(this).addClass('active').siblings().removeClass('active')
});

//CHANGE BUTTON COLOR
function setColor(btn, color){
  $(btn).css('background-color',color);
    $(btn).css('border',color);
}

//SWITCH VIEWS BTN-COOKEVILLE
$(document).on('click','#swap-ckv',function(){
  let delayFirst = 200;
  let delaySecond = 200;

  let blue = "rgb(71,117,185,0.9)";
  let green = "rgb(50,162,71,0.9)";

  if($('.ckv-blue').css('display')=='none') {
    setColor('#swap-ckv',blue);
    $('.ckv-green').slideToggle('.ckv-green');
  setTimeout(function(){
    $('.ckv-blue').slideToggle('.ckv-blue');
  }, 500);
  }
  
  else if($('.ckv-green').css('display')=='none') {
    setColor('#swap-ckv',green);
    $('.ckv-blue').slideToggle('.ckv-blue');
  setTimeout(function(){
    $('.ckv-green').slideToggle('.ckv-green');
  }, 500);
  };
})

//SWITCH VIEWS BTN-CROSSVILLE
$(document).on('click','#swap-cross',function(){
  let delayFirst = 200;
  let delaySecond = 200;

  let blue = "rgb(71,117,185,0.9)";
  let gold = "rgb(255,215,0,0.9)";

  if($('.cross-gold').css('display')=='none') {
    setColor('#swap-cross',gold);
    $('.cross-blue').slideToggle('.cross-blue');
  setTimeout(function(){
    $('.cross-gold').slideToggle('.cross-gold');
  }, 500);
  }
  
  else if($('.cross-blue').css('display')=='none') {
    setColor('#swap-cross',blue);
    $('.cross-gold').slideToggle('.cross-gold');
  setTimeout(function(){
    $('.cross-blue').slideToggle('.cross-blue');
  }, 500);
  };
})

//SWITCH VIEWS BTN-MCMINNVILLE
$(document).on('click','#swap-minn',function(){
  let delayFirst = 200;
  let delaySecond = 200;

  let blue = "rgb(71,117,185,0.9)";
  let red = "rgb(238,29,35,0.9)";

  if($('.minn-blue').css('display')=='none') {
    setColor('#swap-minn',blue);
    $('.minn-red').slideToggle('.minn-red');
  setTimeout(function(){
    $('.minn-blue').slideToggle('.minn-blue');
  }, 500);
  }
  
  else if($('.minn-red').css('display')=='none') {
    setColor('#swap-minn',red);
    $('.minn-blue').slideToggle('.minn-blue');
  setTimeout(function(){
    $('.minn-red').slideToggle('.minn-red');
  }, 500);
  };
})

//SWITCH VIEWS BTN-TNTECH
$(document).on('click','#swap-tech',function(){
  let delayFirst = 200;
  let delaySecond = 200;

  let gold = "rgb(255,215,0,0.9)";
  let purple = "rgb(169,0,230,0.9)";

  if($('.tech-purple').css('display')=='none') {
    setColor('#swap-tech',purple);
    $('.tech-gold').slideToggle('.tech-gold');
  setTimeout(function(){
    $('.tech-purple').slideToggle('.tech-purple');
  }, 500);
  }
  
  else if($('.tech-gold').css('display')=='none') {
    setColor('#swap-tech',gold);
    $('.tech-purple').slideToggle('.tech-purple');
  setTimeout(function(){
    $('.tech-gold').slideToggle('.tech-gold');
  }, 500);
  };
})

/*  COMPARE VIEWS BTN-COOKEVILLE
$(document).on('click','#compare-ckv',function(){
  let delayFirst = 200;
  let delaySecond = 200;

  let blue = "rgb(71,117,185)";
  let green = "rgb(50,162,71)";

  if($('.compare-ckv').css('display')=='none') {
    $('.ckv-green').slideToggle('.ckv-green');
  setTimeout(function(){
    $('.compare-ckv').slideToggle('.compare-ckv');
  }, 500);
  }
  
  else if($('.ckv-green').css('display')=='none') {
    setColor('#swap-ckv',blue);
    $('.compare-ckv').slideToggle('.compare-ckv');
  setTimeout(function(){
    $('.ckv-green').slideToggle('.ckv-green');
  }, 500);
  };
})*/

/*  COMPARE VIEWS BTN-CROSSVILLE
$(document).on('click','#compare-cross',function(){
  let delayFirst = 200;
  let delaySecond = 200;

  let blue = "rgb(71,117,185)";
  let gold = "rgb(167,169,54)";

  if($('.compare-cross').css('display')=='none') {
    setColor('#swap-cross',blue);
    $('.cross-blue').slideToggle('.cross-blue');
  setTimeout(function(){
    $('.compare-cross').slideToggle('.compare-cross');
  }, 500);
  }
  
  else if($('.cross-blue').css('display')=='none') {
    setColor('#swap-cross',gold);
    $('.compare-cross').slideToggle('.compare-cross');
  setTimeout(function(){
    $('.cross-blue').slideToggle('.cross-blue');
  }, 500);
  };
})*/

/*COMPARE VIEWS BTN-MCMINNVILLE
$(document).on('click','#compare-minn',function(){
  let delayFirst = 200;
  let delaySecond = 200;

  let blue = "rgb(71,117,185)";
  let red = "rgb(238,29,35)";

  if($('.compare-minn').css('display')=='none') {
    setColor('#swap-minn',red);
    $('.minn-red').slideToggle('.minn-red');
  setTimeout(function(){
    $('.compare-minn').slideToggle('.compare-minn');
  }, 500);
  }
  
  else if($('.minn-red').css('display')=='none') {
    setColor('#swap-minn',blue);
    $('.compare-minn').slideToggle('.compare-minn');
  setTimeout(function(){
    $('.minn-red').slideToggle('.minn-red');
  }, 500);
  };
})*/


//DRAGULA FUNCTION
function init(){
  dragula([document.querySelector('.container-green'),
           document.querySelector('.container-blue'),
           document.querySelector('.container-algood'),
           document.querySelector('.cross-gold'),
           document.querySelector('.cross-blue'),
           document.querySelector('.minn-blue'),
           document.querySelector('.minn-red'),
  ]);
}