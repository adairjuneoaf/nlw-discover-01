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
    slidesPerView: 1,
    pagination:{
        el: '.swiper-pagination'
    },
    keyboard: true,
    breakpoints:{
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
         
    },
    autoplay :{
        delay: 5000
    }
})

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 500,
})

scrollReveal.reveal(
    `#header`,
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

/*
const scrollRevealMenu = document.querySelector("#header .menu")

window.addEventListener('resize', () => {
    if(window.innerWidth > 1200){
        console.log("inserido")
        scrollRevealMenu.classList.add("sequenced")
    }else{
        console.log("removido")
        scrollRevealMenu.classList.remove("sequenced")
    }
})
*/


/*
window.addEventListener('resize', ()=>{
    if(window.innerWidth > 1200){
        console.log("asasa")
        scrollReveal.reveal(
            `#header .menu`,
            {
                interval: 600,
        })
    }
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