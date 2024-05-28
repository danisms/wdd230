// adding the hamburger menu
const hamburgerBtn = document.querySelector('#menu');
const navigation = document.querySelector('nav');

// add a click event to hamburgerBtn
const delayTiming = 250
const delayTimingSec = delayTiming / 1000;
hamburgerBtn.addEventListener('click', () => {
    let currentBtnColor = hamburgerBtn.style.color
    hamburgerBtn.style.color = 'rgba(0, 0, 0, 0)';
    hamburgerBtn.style.transition = `color ${delayTimingSec}s`;
    setTimeout(() => {
        navigation.classList.toggle('open');
        hamburgerBtn.classList.toggle('open');
        hamburgerBtn.style.color = currentBtnColor;
        hamburgerBtn.style.transition = `color ${delayTimingSec}s`;
    }, delayTiming);
})

// toggle light and dark
const themeBtn = document.querySelector('#theme-mode');
const lightOn = 'images/light-bulb-on.png';
const lightOff = 'images/light-bulb-off.png';
// set mode to be off
themeBtn.value = 'off';

// elements to change background colors
const main = document.querySelector('main');
const h1 = document.querySelector('h1');
const h2 = document.querySelectorAll('h2');
const h3 = document.querySelectorAll('h3');
const singleP = document.querySelector('p');
const p = document.querySelectorAll('p');
const a = document.querySelectorAll('a');
const footerParagraphs = document.querySelectorAll('.footer-p');
const sections = document.querySelectorAll('sections');

const mainCurrColor = main.style.backgroundColor;
const mainTextColor = main.style.color;
const h1CurrColor = h1.style.color;

const pCurrColor = singleP.style.color;
const anchorCurrColor = document.querySelector("a").style.color;
// const aCurrColor = a.style.color;
// const secCurrBorderColor = sections.style.borderColor;
const footerCurrColor = footerParagraphs[0].style.color;

themeBtn.addEventListener('click', () => {
    if (themeBtn.value == 'off') {
        themeBtn.src = lightOn;
        themeBtn.value = 'on';
        // activate dark mode
        main.style.backgroundColor = 'rgb(0, 0, 0)';
        main.style.color = 'white';
        h1.style.color = 'rgb(225, 225, 225)';
        p.forEach(paragraph => {
            paragraph.style.color = 'white';
        });
        // sections.style.borderColor = 'white';
        a.forEach(anchor => {
            anchor.style.color = 'white';
            anchor.classList.toggle('visit');
            // anchor.visited.color = 'white';
        });
    }else {
        themeBtn.src = lightOff
        themeBtn.value = 'off';
        // deactivate dark mode
        main.style.backgroundColor = mainCurrColor;
        main.style.color = mainTextColor;
        h1.style.color = h1CurrColor;
        
        p.forEach(paragraph => {
            paragraph.style.color = pCurrColor;
        });
        a.forEach(anchor => {
            anchor.style.color = anchorCurrColor;
        });
        footerParagraphs.forEach(paragraph => {
            paragraph.style.color = footerCurrColor;
        })
    }
    // console.log(themeBtn.value);    // for testing purpose
})

// adding page visit counter
const pageVisitElement = document.querySelector('#pageVisit'); 
let visitCount = parseInt(window.localStorage.getItem('visit-num')) || 0;
if (visitCount > 0) {
    pageVisitElement.innerHTML = `Page Visit: ${visitCount}`;
}else {
    pageVisitElement.textContent = "Welcome, this is your first visit";
}

// increment visitCount and reasign value
visitCount += 1;
window.localStorage.setItem('visit-num', `${visitCount}`);
