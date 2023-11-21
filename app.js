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
}
pageTransitions();