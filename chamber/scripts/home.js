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

// SCROLL FUNCTIONS
// returns the total number of boxes present for scrolling both visible and not visible
function getNumberOfScrolls(boxClass) {
    const allEventClass = document.querySelectorAll(boxClass);
    let scrollElements = 0;
    allEventClass.forEach(() => {
        scrollElements += 1;
    })

    return scrollElements;
}

// set the number of scrolled by the total number of boxes scrollable.
function setScrollCount(initial, visible, scrolled, scrollCount) {
    scrollCount.innerHTML = `${visible + scrolled}/${initial}`;
}

// scroll the elements to  display as required
function scroll(scrollBox, scrollElements, visibleElements, scrollMax, initialScrollElements, scrollLayer, scrollWidth, scrollCountElement, right=true) {
    
    if (right) {
        if (scrollElements < scrollMax) {
            scrollElements += 1;
            scrollWidth += scrollBox;
            current_x_scroll_pos = scrollLayer.scrollTo(scrollWidth, 0);
            setScrollCount(initialScrollElements, visibleElements, scrollElements, scrollCountElement);
        }
    }else {
        if (scrollElements > 0) {
            scrollElements -= 1;
            scrollWidth -= scrollBox;
            current_x_scroll_pos = scrollLayer.scrollTo(scrollWidth, 0);
            setScrollCount(initialScrollElements, visibleElements, scrollElements, scrollCountElement);
        }
    }

    return [scrollElements, scrollWidth];
}

// set the visible elements and number of visible elements
function setNumOfVisibleElements(classElement) {
    let NumOfVisibleElements = 0;
    let allElements = document.querySelectorAll(classElement);
    console.log(parseInt(window.innerWidth));
    if (parseInt(window.offsetWidth) >= 890) {
        allElements.forEach((element)=> {
            element.style.width = '30.5%;';
        });
        NumOfVisibleElements = 3;
    }else if(parseInt(window.innerWidth) >= 690) {
        allElements.forEach((element) => {
            element.style.width = '50%';
        })
        NumOfVisibleElements = 2;
    }else {
        allElements.forEach((element)=> {
            element.style.width = '90%';
        })
        NumOfVisibleElements = 1;
    }
    return NumOfVisibleElements;
}

// get Elements for what we do section scroll (phone version)
const weDoScrollLayer = document.querySelector('#scroll-layer-1');
const weDoRightBtn = document.querySelector('#we-do-right-btn');
const weDoLeftBtn = document.querySelector('#we-do-left-btn');
const aWeDoBox = document.querySelector('#a-we-do-box');

// ge element scroll and set scroll to button
let weDoScrollElements = getNumberOfScrolls('.card-we-do');

// get initial number of scroll elements
const weDoInitialScrollElements = weDoScrollElements;
// console.log(weDoScrollElements);  // for testing purpose

// get the number of hidden elements to scroll out
let weDoNumOfVisibleElements = 1;
if (window.innerWidth < 890) {
    weDoNumOfVisibleElements = setNumOfVisibleElements('.card-we-do');
}
const weDoScrollMax = weDoScrollElements - weDoNumOfVisibleElements;

// set scroll element value to zero;
weDoScrollElements = 0;

// set scroll count values
const weDoScrollCount = document.querySelector('#we-do-count');
let weDoScrollWidth = 0;
let weDoScrollBox = aWeDoBox.offsetWidth;

setScrollCount(weDoInitialScrollElements, weDoNumOfVisibleElements, weDoScrollElements, weDoScrollCount);
// set right button click
weDoRightBtn.addEventListener('click', () => {
    // Note: scroll function returns a list of [scrollElements, scrollWidth]
    let scrollList = scroll(weDoScrollBox, weDoScrollElements, weDoNumOfVisibleElements, weDoScrollMax, weDoInitialScrollElements, weDoScrollLayer, weDoScrollWidth, weDoScrollCount, true);
    weDoScrollElements = scrollList[0];
    weDoScrollWidth = scrollList[1];
    // console.log(weDoScrollWidth);  // for testing purpose
});

// set left button click
weDoLeftBtn.addEventListener('click', () => {
    let scrollList = scroll(weDoScrollBox, weDoScrollElements, weDoNumOfVisibleElements, weDoScrollMax, weDoInitialScrollElements, weDoScrollLayer, weDoScrollWidth, weDoScrollCount, false);
    weDoScrollElements = scrollList[0];
    weDoScrollWidth = scrollList[1];
    // console.log(weDoScrollWidth);  // for testing purpose    
});


// SET Scrolling for event-box layers
// get Elements
const eventScrollLayer = document.querySelector('#scroll-layer-2');
const eventRightBtn = document.querySelector('#event-right-btn');
const eventLeftBtn = document.querySelector('#event-left-btn');
const aEventBox = document.querySelector('#an-event-box');

// ge element scroll and set scroll to button
let eventScrollElements = getNumberOfScrolls('.event-box');

// get initial number of scroll elements
const eventInitialScrollElements = eventScrollElements;
// console.log(weDoScrollElements);  // for testing purpose

// get the number of hidden elements to scroll out
let eventNumOfVisibleElements = 3;
if (window.innerWidth < 890) {
    eventNumOfVisibleElements = setNumOfVisibleElements('.event-box');
}

const eventScrollMax = eventScrollElements - eventNumOfVisibleElements;

// set scroll element value to zero;
eventScrollElements = 0;

// set scroll count values
const eventScrollCount = document.querySelector('#event-count');
let eventScrollWidth = 0;
// set scroll width
let eventScrollBox = 0;
if (window.innerWidth >= 890) {
    eventScrollBox = 500;
}else if(window.innerWidth >= 700) {
    eventScrollBox = 400;
}else {
    eventScrollBox = 305;
}

setScrollCount(eventInitialScrollElements, eventNumOfVisibleElements, eventScrollElements, eventScrollCount);
// set right button click
eventRightBtn.addEventListener('click', () => {
    // Note: scroll function returns a list of [scrollElements, scrollWidth]
    let scrollList = scroll(eventScrollBox, eventScrollElements, eventNumOfVisibleElements, eventScrollMax, eventInitialScrollElements, eventScrollLayer, eventScrollWidth, eventScrollCount, true);
    eventScrollElements = scrollList[0];
    eventScrollWidth = scrollList[1];
    // console.log(weDoScrollWidth);  // for testing purpose
});

// set left button click
eventLeftBtn.addEventListener('click', () => {
    // Note: scroll function returns a list of [scrollElements, scrollWidth]
    let scrollList = scroll(eventScrollBox, eventScrollElements, eventNumOfVisibleElements, eventScrollMax, eventInitialScrollElements, eventScrollLayer, eventScrollWidth, eventScrollCount, false);
    eventScrollElements = scrollList[0];
    eventScrollWidth = scrollList[1];
    // console.log(weDoScrollWidth);  // for testing purpose
});

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