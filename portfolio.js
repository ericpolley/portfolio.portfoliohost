const start = document.getElementById('startButton')
const portfolioBoxDisplay = document.getElementById('portfolioBox')
const navBarDisplay = document.getElementById('navBarhover')
const contactDisplay = document.getElementById('contactBox')
const portfolioLinksDisplay = document.getElementById('portfolioLinks')

const navContactButton = document.getElementById('navContact')
const navBlogButton = document.getElementById('navBlog')

start.addEventListener('click', startWebsite)
navContactButton.addEventListener('click', displayContact)




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





