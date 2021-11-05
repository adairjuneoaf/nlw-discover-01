const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const open = document.querySelector('#header nav .icon-menu')

for(const element of toggle){
    element.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })

}

window.addEventListener('click', ()=>{
    if(nav.classList.contains('show')){
        open.style.visibility = 'hidden'
    }else{
        open.style.visibility = 'visible'
    }

})

const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', ()=>{
        nav.classList.remove('show')
    })
}

const shadowHeader = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', ()=>{
    if(window.scrollY >= navHeight){
        shadowHeader.classList.add('scroll')
    }else{
        shadowHeader.classList.remove('scroll')
    }
})

const swiper = new Swiper('.swiper-container',{
    slidesPerView: 1,
    pagination:{
        el: '.swiper-pagination'
    },
    keyboard: true
})

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
})

scrollReveal.reveal(
    `#header .logo-prisma-systems, #header .icon-menu`,
    {
        duration: 500,
        delay: 100,
        easing: 'cubic-bezier(.5,0,.49,1)'
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services .services, .cards .card,
    #testimonials .testimonials-title, .testimonials .testimonial,
    #contact .text, #contact .links`,
    {
        interval: 500
    }
)