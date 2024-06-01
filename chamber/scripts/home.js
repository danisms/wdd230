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
    // console.log(parseInt(window.innerWidth));  // for testing purpose
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
    // console.log(eventScrollWidth);  // for testing purpose
});

// set left button click
eventLeftBtn.addEventListener('click', () => {
    // Note: scroll function returns a list of [scrollElements, scrollWidth]
    let scrollList = scroll(eventScrollBox, eventScrollElements, eventNumOfVisibleElements, eventScrollMax, eventInitialScrollElements, eventScrollLayer, eventScrollWidth, eventScrollCount, false);
    eventScrollElements = scrollList[0];
    eventScrollWidth = scrollList[1];
    // console.log(eventScrollWidth);  // for testing purpose
});

// Event Description Display Handler
let randomNum = 0;
let writing = '';  // global variable to set writing interval.
let delayFunctionCall = 10000;

// Display event description
function displayDescription(elementId) {
    // delay function for home title intro text writing display to complete
    setTimeout(() => {
        const ele = document.querySelector(`#${elementId}`);
        const paragraph = ele.children[1];
        const text = ele.children[2];
        ele.style.top = 0;
        ele.style.left = 0;

        // display righting
        // console.log(ele.children);  // for testing purpose
        // console.log(paragraph);  // for testing purpose
        const textValue = text.textContent;
        // console.log(textValue);  // for texting purpose;
        // call function to display paragraph by letters;
        textByLetter(textValue, paragraph, 80);
    }, delayFunctionCall);  // this is set to zero once title intro is complete; check downward for the call.
}

// Remove event description
function removeDescription(elementId, direction) {
        // delay function for intro text writing display to complete
        setTimeout(() => {
            randomNum = Math.random() * 4
        randomNum = Math.ceil(randomNum)
        // console.log(randomNum);  // for testing purpose
        const ele = document.querySelector(`#${elementId}`);
        const paragraph = ele.children[1];
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

        clearInterval(writing);  // for clearing writing interval set by textByLetter function.
        // enable all buttons disabled by textByLetter function.
        const allBtn = document.querySelectorAll('button')
        allBtn.forEach((button)=>{
            button.disabled = false;
        });
    }, delayFunctionCall);
}

// Spotlight section
function changeVisibility(elementId, opacity) {
    const advertTextDesc = document.querySelector(`#${elementId}`);
    advertTextDesc.style.opacity = opacity;
}

// write out text by letter
function textByLetter(text, element, speed) {
    let ele = element
    if (element[0] == '#' || element[0] == '.') {
        ele = document.querySelector(element);
    }else {
        // ele remains element
    }
    let textList = text.split('');
    let indexNum = 0;
    let displayText = '';
    // Disable all buttons
    const allBtn = document.querySelectorAll('button')
    allBtn.forEach((button)=>{
        button.disabled = true;
    });
    // console.log(textList)
    // console.log(textList.length)
    function writeText() {
        let textValue = textList[indexNum];
        displayText += textValue;
        ele.innerHTML = displayText;
        indexNum++;
        if (indexNum >= textList.length) {
            clearInterval(writing)
            allBtn.forEach((button)=>{
                button.disabled = false;
            });
        };
    };
    writing = setInterval(() => {
        writeText();
    }, speed);
};

// display page title
const homeTitle = document.getElementById('head-title');
homeTitle.style.opacity = '1';
textByLetter('Benin Hotel Chamber of Commerce', '#head-title', 75);
setTimeout(() => {
    const headMotto = document.querySelector('#head-motto')
    // headMotto.style.display = 'block';
    headMotto.style.opacity = '1';
    textByLetter('Connecting Hospitality, Driving Growth', '#head-motto', 75);
    setTimeout(() => {
        delayFunctionCall = 0;
    }, 3500);
}, 3700);

// DYNAMICALLY DISPLAY WEATHER INFO
// Get All Elements

// current weather elements
const areaEle = document.querySelector('#area');
const currentTemEle = document.querySelector('#current-temp');
const weatherDescEle = document.querySelector('#weather-description');
const weatherIconEle = document.querySelector('#weather-icon');
const humidityEle = document.querySelector('#humidity');
const windSpeedEle = document.querySelector('#wind-speed');

// temperature day elements
const day1TimeEle = document.querySelector('#day1-time');
const day2TimeEle = document.querySelector('#day2-time');
const day3TimeEle = document.querySelector('#day3-time');

const day1TempEle = document.querySelector('#temp-day1');
const day2TempEle = document.querySelector('#temp-day2');
const day3TempEle = document.querySelector('#temp-day3');


// api url
const url = "api.openweathermap.org/data/2.5/forecast?lat=6.34&lon=5.59&appid=495e0aa10247327f0515804ac3f3454a";

async function apiFetch(url)
{
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            // console.log(data);  // testing purpose only;
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (err)
    {
        console.log(err)
    }
}

function displayResults(data)
{
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconSrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch(url);


// get and set last modification date
const copyDateEle = document.querySelector('#footer-current-date');
const lastModifiedEle = document.querySelector('#last-update');

// get current date and time and set it to element value
let currentDateAndTime = new Date();
let currentYear = currentDateAndTime.getFullYear();
let lastModified = document.lastModified;

copyDateEle.innerHTML = currentYear;
lastModifiedEle.innerHTML = `Last Modification: ${lastModified}`;