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
textByLetter('Discover All In BHCC', '#head-title', 75);
setTimeout(() => {
    const headMotto = document.querySelector('#head-motto')
    // headMotto.style.display = 'block';
    headMotto.style.opacity = '1';
    textByLetter('Connecting Hospitality, Driving Growth', '#head-motto', 75);
    setTimeout(() => {
        delayFunctionCall = 0;
    }, 2500);
}, 2800);

// get and set last modification date
const copyDateEle = document.querySelector('#footer-current-date');
const lastModifiedEle = document.querySelector('#last-update');

// get current date and time and set it to element value
let currentDateAndTime = new Date();
let currentYear = currentDateAndTime.getFullYear();
let lastModified = document.lastModified;

copyDateEle.innerHTML = currentYear;
lastModifiedEle.innerHTML = `Last Modification: ${lastModified}`;
