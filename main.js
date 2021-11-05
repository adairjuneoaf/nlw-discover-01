const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
    element.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })

}

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
    duration: 500,
})

scrollReveal.reveal(
    `#header .logo-prisma-systems, #header .icon-menu`,
    {
        delay: 250,
        easing: 'cubic-bezier(.5,0,.49,1)'
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services .services, .cards .card,
    #testimonials .testimonials-title, .testimonials .testimonial,
    #contact .text, #contact .links`,
    {
        delay: 550
    }
)