const navSlide = () =>{
  const menu = document.querySelector('.menu')
  const nav = document.querySelector('.navbar-links')
  const navLinks = document.querySelectorAll('.links li')


  menu.addEventListener('click',() => {
    nav.classList.toggle('nav-active')
  })

  navLinks.forEach((link,index) =>{
    link.style.animation = 'navLinkFade 0.5 ease forwards ${index/7  - 0.5}s'
  })
}
navSlide()

// current date
const currentDate = new Date().getFullYear()
document.querySelector('#currentDate').innerHTML = currentDate
// current date



// SCROLL TO TOP


// SCROLL TO TOP

