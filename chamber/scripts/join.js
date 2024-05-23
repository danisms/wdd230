// get nav element and style it
const navElement = document.querySelector('nav');
const navElementInitialColor = navElement.style.getPropertyValue('background-color');
// console.log(navElementInitialColor);  // for testing purpose

// display menu with menu button on small screens
const menuBtn = document.querySelector('#menu');
const sideNav = document.querySelector('#nav-display');
menuBtn.addEventListener('click', ()=> {
    menuBtn.classList.toggle('open');
    sideNav.classList.toggle('show');
    document.querySelector('body').classList.toggle('overflow');
})

// // get h2 background color
// const h2HeadersElement = document.querySelector('#first-main-h2');
// const h2HeadersBgColor = h2HeadersElement.style.getPropertyValue('background-color');
// console.log(h2HeadersBgColor);  // for testing purpose
const h2HeadersBgColor = '#094074';
const navBgColor = 'rgba(0, 0, 0, 0.9)';

let scrolled = 0;
window.addEventListener("scroll", () => {
    
    let = navHeight = navElement.style.getPropertyValue('height');
    current_y_scroll_pos = window.scrollY;
    // console.log("current-y-pos: " + current_y_scroll_pos)
    // console.log("scrolled: " + scrolled)
    // console.log("navHeight: " + navHeight)

    if (current_y_scroll_pos < scrolled){
        // navElement.style.animationName = 'display_header';
        // navElement.style.animationDuration = '2s';
        navElement.style.top = '0';
        scrolled = current_y_scroll_pos;
        
        if (current_y_scroll_pos > 600) {
            // set h2Headers Background color for nav bg-color
            if (window.innerWidth >= 890) {
                navElement.style.backgroundColor = h2HeadersBgColor;
            }else {
                navElement.style.backgroundColor = navBgColor;
            }
        }else {
            navElement.style.backgroundColor = navElementInitialColor;
        }
    }else if (current_y_scroll_pos > scrolled && current_y_scroll_pos >= 80) {
        // navElement.style.animationName = 'hide_header';
        // navElement.style.animationDuration = '2s';
        navElement.style.top = '-100px';
        scrolled = current_y_scroll_pos;
    }else {
        scrolled = current_y_scroll_pos;
    }
})

// get and add the current timestampt to form
const timeStampElement = document.querySelector('#timestamp');
let timestamp = Date.now();
// console.log(timestamp);
timeStampElement.value = timestamp;
// console.log(timeStampElement.value);  // for testing purpose

// get and set last modification date
const copyDateEle = document.querySelector('#footer-current-date');
const lastModifiedEle = document.querySelector('#last-update');

// get current date and time and set it to element value
let currentDateAndTime = new Date();
let currentYear = currentDateAndTime.getFullYear();
let lastModified = document.lastModified;

copyDateEle.innerHTML = currentYear;
lastModifiedEle.innerHTML = `Last Modification: ${lastModified}`;