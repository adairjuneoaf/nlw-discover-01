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
        document.body.style.overflow = "hidden"
    }else{
        open.style.visibility = 'visible'
        document.body.style.overflow = "visible"
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
    slidesPerView: 3,
    pagination:{
        el: '.swiper-pagination'
    },
    keyboard: true,
})

/*
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 500,
})

scrollReveal.reveal(
    `#header .logo-prisma-systems, #header .icon-menu`,
    {
        duration: 600,
        delay: 100,
        easing: 'cubic-bezier(.5,0,.49,1)'
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services .services, .cards .card,
    #testimonials .testimonials-title, .testimonials,
    #contact .text, #contact .links,
    .brand nav, .brand p, .social`,
    {
        interval: 500
    }
)

*/

const backToTopButtton = document.querySelector('.back-to-top')

window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 550){
        backToTopButtton.classList.add('show')
    }else{
        backToTopButtton.classList.remove('show')
    }
})