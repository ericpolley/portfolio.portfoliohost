const start = document.getElementById('startButton')
const portfolioBoxDisplay = document.getElementById('portfolioBox')
const navBarDisplay = document.getElementById('navBarhover')
const contactDisplay = document.getElementById('contactBox')
const portfolioLinksDisplay = document.getElementById('portfolioLinks')
const home = document.getElementById('home')
const navContactButton = document.getElementById('navContact')
const navBlogButton = document.getElementById('navBlog')

start.addEventListener('click', startWebsite)
navContactButton.addEventListener('click', displayContact)
home.addEventListener('click', displayPortfolio)




function startWebsite() {
    console.log('startwebsite')

    start.classList.add('hide')
    portfolioBoxDisplay.classList.add('fadein')
    portfolioBoxDisplay.classList.remove('hide')
    navBarDisplay.classList.remove('hide')
    navBarDisplay.classList.add('fadein')
    contactDisplay.classList.add('hide')

}

function displayContact() {
    console.log('display contact')
    portfolioBoxDisplay.classList.add('hide')
    contactDisplay.classList.remove('hide')
}

function displayPortfolio() {
    console.log('display contact')
    portfolioBoxDisplay.classList.remove('hide')
    contactDisplay.classList.add('hide')
}





