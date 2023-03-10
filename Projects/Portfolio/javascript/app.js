//BUTTONS
    //Redirect Links
        //Information Card Page
        $(document).on('click', '.first-project-redirect', function(){
            window.open("projects/info-card/info-card.html")
        })
        //Nostalgia Enterprises
        $(document).on('click', '.nostalgia-enterprises-redirect', function(){
            window.open("projects/nostalgia-enterprises/nostalgia-enterprises.html")
        })
        //UCHRA Dashboard
        $(document).on('click', '.uchra-dash-redirect', function(){
            window.open("projects/UCHRA-dash/Cookeville.html")
        })
        //UCHRA Rewards
        $(document).on('click', '.uchra-rewards-redirect', function(){
            window.open("projects/UCHRA-rewards/rewards-login.html")
        })

// SWEET ALERTS
    //EMAIL
    $(document).on('click', '#btnEmail',function(){
        Swal.fire({
            icon: 'info',
            title: 'Email: juniormejia09@gmail.com',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#198754',
        })
    })
    //GITHUB REDIRECT
    $(document).on('click', '#githubRedirect',function(){
        Swal.fire({
            icon: 'question',
            title: 'Are you sure you want to visit my Github?',
            confirmButtonText: 'Yes!',
            confirmButtonColor: '#198754',
            showCancelButton: true,
            reverseButtons: true,
            // preConfirm: false,
        }).then((result) => {
            if (result.isConfirmed){
                Swal.fire('Redirecting..','', 'success')
                window.open('https://github.com/JuniorMejiaV/PersonalProjects');
            }else if (isDismissed){
                Swal.fire('Maybe Next time..','error', )
            }
        })
    })
    //LINKEDIN REDIRECT
    $(document).on('click', '#linkedinRedirect',function(){
        Swal.fire({
            icon: 'question',
            title: 'Are you sure you want to visit my Linkedin?',
            confirmButtonText: 'Yes!',
            confirmButtonColor: '#198754',
            showCancelButton: true,
            reverseButtons: true,
            // preConfirm: false,
        }).then((result) => {
            if (result.isConfirmed){
                window.open("https://www.linkedin.com/in/junior-mejia-2bb603150");
                Swal.fire('Redirecting..','', 'success')
            }else if (isDismissed){
            }
        })
        })
        //RESUME DOWNLOAD
    $(document).on('click', '#resumeDownload',function(){
        Swal.fire({
            icon: 'success',
            title: 'Resumé Dowloaded! ',
            confirmButtonText: 'Okay',
            confirmButtonColor: '#198754',
            // preConfirm: false,
        })
        })
    //First Project
    $(document).on('click', '.first-project-card',function(){
        Swal.fire({
            imageUrl: 'images/FirstProject.PNG',
            titleText: 'My Very First Project!',
            text: 'A basic card containing information about me. This was introduction to web development. Not my best work but it only gets better from here!',
            footer: 'Status: Incomplete',
            confirmButtonText: 'Close',
            confirmButtonColor: '#DC3545',

        })
        })
    //Nostalgia Enterprises
    $(document).on('click', '.nostalgia-enterprises-card',function(){
        Swal.fire({
            imageUrl: 'images/NostalgiaEnterprises.PNG',
            title: 'Nostalgia Enterprises',
            text: 'The first "Exam" in my Applications Dev class. Where we used various technologies to display employee information using APIs.',
            footer: 'Status: Incomplete',
            confirmButtonText: 'Close',
            confirmButtonColor: '#DC3545',
        })
        })
    //Personal Portfolio
        $(document).on('click', '.personal-portfolio-card',function(){
            Swal.fire({
                imageUrl: 'images/PersonalWebsite.PNG',
                title: 'Personal Portfolio',
                text: 'A project within a project. This is being used to display all my other projects including things I have done before and after graduation!',
                footer: 'Status: In-progress',
                confirmButtonText: 'Close',
                confirmButtonColor: '#DC3545',
            })
            })
    //UCHRA Dashboard
        $(document).on('click', '.uchra-dash-card',function(){
            Swal.fire({
                imageUrl: 'images/UCHRADashboard.PNG',
                title: 'UCHRA Dashboard',
                text: 'The first part of my senior capstone project where the Upper Cumberland Human Resource Agency needed a way to display and analyze data. With this dashboard they can adjust bus routes and add routes based on which stops have the most boarded passengers.',
                footer: 'Status: Incomplete, but revision coming soon!',
                confirmButtonText: 'Close',
                confirmButtonColor: '#DC3545',
            })
            })
    //UCHRA Rewards App
    $(document).on('click', '.uchra-rewards-card',function(){
        Swal.fire({
            imageUrl: 'images/UCHRARewards.PNG',
            title: 'UCHRA Rewards App',
            text: 'Hello world',
            text: 'The second part of my senior capstone project. This web application was used to reward frequent passengers by giving them discounts, and after 9 rides the 10th one would be free.',
            footer: 'Status: Incomplete, but revision coming soon!',
            confirmButtonText: 'Close',
            confirmButtonColor: '#DC3545',
        })
        })


window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};