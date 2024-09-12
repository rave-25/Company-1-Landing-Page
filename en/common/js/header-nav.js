const toggleButton = document.getElementsByClassName('iconMenu')[0]
const navbarLinks = document.getElementsByClassName('navAreainner')[0]

toggleButton.addEventListener('click', () => {
navbarLinks.classList.toggle('active')
})