// get nav element and style it
const navElement = document.querySelector('nav');
const navElementInitialColor = navElement.style.getPropertyValue('background-color');
console.log(navElementInitialColor);  // for testing purpose

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
            navElement.style.backgroundColor = h2HeadersBgColor;
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

// get card2 scroll and set scroll to button
const card2ScrollLayer = document.getElementById('scroll-layer-2');
const scrollEventLeftBtn = document.getElementById('event-left-btn');
const scrollEventRightBtn = document.getElementById('event-right-btn');
const scrollCount = document.getElementById('event-count');
const allEventClass = document.querySelectorAll('.event-box');

let scrollWidth = 0;
let scrollElements = 0;
allEventClass.forEach(() => {
    scrollElements += 1;
})
// get initial number of scroll elements
const initialScrollElements = scrollElements;
// get the number of hidden elements to scroll out
const numOfVisibleElements = 3
scrollElements = scrollElements - numOfVisibleElements;
const scrollMax = scrollElements;
// set scroll element value to zero;
scrollElements = 0;
// set scroll count values
function setScrollCount(initial, visible, scrolled) {
    scrollCount.innerHTML = `${visible + scrolled}/${initial}`;
}

setScrollCount(initialScrollElements, numOfVisibleElements, scrollElements);

let scrollLength = 440;
scrollEventRightBtn.addEventListener("click", () => {
    if (scrollElements < scrollMax) {
        scrollElements += 1;
        scrollWidth += scrollLength;
        current_x_scroll_pos = card2ScrollLayer.scrollTo(scrollWidth, 0);
        setScrollCount(initialScrollElements, numOfVisibleElements, scrollElements);
    }
})

scrollEventLeftBtn.addEventListener("click", ()=> {
    if (scrollElements > 0) {
        scrollElements -= 1;
        scrollWidth -= scrollLength;
        current_x_scroll_pos = card2ScrollLayer.scrollTo(scrollWidth, 0);
        setScrollCount(initialScrollElements, numOfVisibleElements, scrollElements);
    }
})

// Event Description Display Handler
let randomNum = 0;

// Display event description
function displayDescription(elementId) {
    const ele = document.querySelector(`#${elementId}`);
    ele.style.top = 0;
    ele.style.left = 0;
}
// Remove event description
function removeDescription(elementId, direction) {
    randomNum = Math.random() * 4
    randomNum = Math.ceil(randomNum)
    // console.log(randomNum);  // for testing purpose
    const ele = document.querySelector(`#${elementId}`);
    if (randomNum == 1) {
        ele.style.top = direction;
        // console.log('remove top');  // for testing purpose
    }else if (randomNum == 2) {
        ele.style.left = `-${direction}`;
        // console.log('remove right');
    }else if (randomNum == 3) {
        ele.style.top = `-${direction}`;;
        // console.log('remove bottom');
    }else {
        ele.style.left = direction;
        // console.log('remove left');
    }
}

// Spotlight section
function changeVisibility(elementId, opacity) {
    const advertTextDesc = document.querySelector(`#${elementId}`);
    advertTextDesc.style.opacity = opacity;
}