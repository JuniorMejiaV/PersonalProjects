//BUTTONS

$(document).on('click', '.project-btn', function(){
    window.location.href = 'projects.html'
})

$(document).on('click', '.experience-btn', function(){
    window.location.href = 'experience.html'
})
$(document).on('click', '.contact-btn', function(){
    window.location.href = 'contact.html'
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

