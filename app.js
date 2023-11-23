// select all sections
const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allsections = document.querySelector(".main-content");
const controls = document.querySelector('.controls');


// page transition function (for the icons)
function pageTransitions(){
    // button click active class
    for(let i = 0; i< sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
        })
    }
    // show sections active class
    allsections.addEventListener('click', (e)=>{
        // target all the element data-id s
       const id = e.target.dataset.id;
       if(id){
        // remove selected from other buttons
        sectBtns.forEach((btn)=>{
            btn.classList.remove('active')
        })
        e.target.classList.add('active')
        // hide other sections
        sections.forEach((section)=>{
            section.classList.remove('active')
        })
        const element = document.getElementById(id);
        element.classList.add('active');
       }
    })

    // toggle theme button,, may delete it
    // const themeBtn = document.querySelector('.theme-btn');
    // themeBtn.addEventListener('click',() =>{
    //     let element = document.body;
    //     element.classList.toggle('light-mode')
    // })
}
pageTransitions();


// form validation
function validateForm() {
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var subject = document.getElementById('subject').value;
            var message = document.getElementById('message').value;

            // Reset error messages
            document.getElementById('nameError').innerHTML = '';
            document.getElementById('emailError').innerHTML = '';
            document.getElementById('subjectError').innerHTML = '';
            document.getElementById('messageError').innerHTML = '';

            // Validate name
            if (name.trim() === '') {
                document.getElementById('nameError').innerHTML = 'Please enter your name.';
                return false;
            }

            // Validate email
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('emailError').innerHTML = 'Please enter a valid email address.';
                return false;
            }

            // Validate subject
            if (subject.trim() === '') {
                document.getElementById('subjectError').innerHTML = 'Please enter the subject.';
                return false;
            }

            // Validate message
            if (message.trim() === '') {
                document.getElementById('messageError').innerHTML = 'Please enter your message.';
                return false;
            }

            // Form is valid
            return true;
        }