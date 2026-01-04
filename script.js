const linkEls = document.querySelectorAll(".nav-link")
const secEls = document.querySelectorAll(".section")


document.addEventListener('DOMContentLoaded',()=>{
    window.location.href='#home'
})


function changeActive(activeLink){
    const actLink = document.querySelector(activeLink) 
    linkEls.forEach((item)=>{
        item.classList.remove('active-link')        
})
    actLink.classList.add('active-link')
}


// let curSec = 'home'
// window.addEventListener('scroll',()=>{
//     secEls.forEach((section) => {
//         if(window.scrollY >= section.offsetTop){
//             curSec = section.id
//             document.getElementsByClassName(curSec).classList.add('active-link')
//         }
//     })
// })
