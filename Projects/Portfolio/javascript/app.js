//BUTTONS
    //Redirect Links
        //Projects Page
        $(document).on('click', '.project-btn', function(){
            window.location.href = 'projects.html'
        })
        //Experience Page
        $(document).on('click', '.experience-btn', function(){
            window.location.href = 'experience.html'
        })
        //Contact Page
        $(document).on('click', '.contact-btn', function(){
            window.location.href = 'contact.html'
        })
        //Information Card Page
        $(document).on('click', '.first-project-redirect', function(){
            window.open("projects/info-card/info-card.html")
        })
        //Nostalgia Enterprises
        $(document).on('click', '.nostalgia-enterprises-redirect', function(){
            window.open("projects/nostalgia-enterprises/nostalgia-enterprises.html")
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
    //First Project
    $(document).on('click', '.first-project-card',function(){
        Swal.fire({
            width: '35rem',
            title: 'My Very First Project!',
            text: 'This was my introduction to programming in my Business Applications Dev II course, where I learned the basics of HTML, CSS, and JS. Although its rough around the edges, it shows the progress I have made over the years.',
            confirmButtonText: 'Close',
            confirmButtonColor: '#DC3545',
            // preConfirm: false,
        })
        })
    //Nostalgia Enterprises
    $(document).on('click', '.nostalgia-enterprises-card',function(){
        Swal.fire({
            width: '35rem',
            title: 'Nostalgia Enterprises',
            text: 'The first "Exam" in my Applications Dev class. Where we used various technologies to display employee information using APIs. Not fully functional but will be revised in the future.',
            confirmButtonText: 'Close',
            confirmButtonColor: '#DC3545',
            // preConfirm: false,
        })
        })




window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};