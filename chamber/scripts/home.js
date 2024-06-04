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


// GET JSON DATA (member data)
// api url
const filepath = 'data/members.json';

async function getData(path)
{
    try {
        let response = await fetch(path);
        if (response.ok) {
            let data = await response.json();
            // console.log(data);  // testing purpose only;
            displayCurrentEvent(data);
            displaySpotlight(data);
        } else {
            throw Error(await response.text());
        }
    } catch (err)
    {
        console.log(err)
    }
}

// DYNAMICALLY CREATE CURRENT EVENT
/* 
page structure (Html)
// Main Div id is scroll-layer-2
<div class="event-box">
    <div class="an-event-block" onmouseenter="displayDescription('des1')" onmouseleave="removeDescription('des1', '1000px')">
        <img src="images/current-events/event-1-placeholder.jpeg" alt="current event one">
        <section class="event-description" id="des1">
            <h3>Event One</h3>
            <p></p>
            <span>Display Texts</span>
        </section>
    </div>
</div>
*/

const scrollLayer2 = document.getElementById('scroll-layer-2');
const emptyCurrentEvent = document.getElementById('empty-current-event');

function displayCurrentEvent(data) {
    if (data.event.current.length > 0)
        {
            // remove/hide empty current event
            emptyCurrentEvent.style.display = 'none';

            // DISPLAY EVENTS
            let idCount = 1;
            const currentEvents = data.event.current;
            
            currentEvents.forEach(event => {
                // Create Elements and Set attributes
                // eventBox
                let eventBox = document.createElement('div');
                eventBox.setAttribute('class', 'event-box');
                // anEventBlock
                let anEventBlock = document.createElement('div');
                anEventBlock.setAttribute('class', 'an-event-block');
                // anEventBlock.setAttribute('onMouseEnter', `${displayDescription(`des${idCount}`)}`);
                // anEventBlock.setAttribute('onMouseLeave', `${removeDescription(`des${idCount}`, '1000px')}`);

                // poster
                let poster = document.createElement('img');
                poster.setAttribute('src', event.poster);
                poster.setAttribute('alt', event.title);
                poster.setAttribute('loading', 'lazy');
                // poster.setAttribute('width', '400');
                // poster.setAttribute('height', '400');

                // event description
                let eventDescription = document.createElement('event-description');
                eventDescription.setAttribute('class', 'event-description');
                // eventDescription.setAttribute('id', `des${idCount}`);
                // eventDescription.id = `des${idCount}`
                // event description h3 child
                let h3 = document.createElement('h3');
                h3.innerHTML = event.title;
                // event description p child
                let p = document.createElement('p');
                // event description span child
                let span = document.createElement('span');
                span.innerHTML = event.about
                // add event description children to event
                eventDescription.appendChild(h3);
                eventDescription.appendChild(p);
                eventDescription.appendChild(span);

                // append children to anEventBlock
                anEventBlock.appendChild(poster);
                anEventBlock.appendChild(eventDescription);

                // append child to eventBox
                eventBox.appendChild(anEventBlock);

                // append eventBox into the main box
                scrollLayer2.appendChild(eventBox);

                // Add event listeners event to event block
                // display text
                anEventBlock.addEventListener('mouseenter', () => {
                    // displayDescription(`des${idCount}`);
                    // delay function for home title intro text writing display to complete
                    setTimeout(() => {
                        const ele = eventDescription;
                        const paragraph = p;
                        const text = span;
                        ele.style.top = 0;
                        ele.style.left = 0;

                        // display righting
                        // console.log(ele.children);  // for testing purpose
                        // console.log(paragraph);  // for testing purpose
                        const textValue = text.textContent;
                        // console.log(textValue);  // for texting purpose;
                        // call function to display paragraph by letters;
                        textByLetter(textValue, paragraph, 80);
                    }, delayFunctionCall);
                });
                // remove text
                anEventBlock.addEventListener('mouseleave', () => {
                    // removeDescription(`des${idCount}`, '1000px');
                    const direction = '1000px';
                    // delay function for intro text writing display to complete
                    setTimeout(() => {
                        randomNum = Math.random() * 4
                    randomNum = Math.ceil(randomNum)
                    // console.log(randomNum);  // for testing purpose
                    const ele = eventDescription;
                    const paragraph = p;
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
                });

                // increment idCount
                idCount++;
            })
        }
}

// DYNAMICALLY CREATE COMPANY'S ADVERTS
const spotlight = document.getElementById('spotlight');
const emptySpotlight = document.getElementById('empty-spotlight')

function displaySpotlight(data) {
    // console.log(data);  // for testing purpose
    if (data.members.length > 0) {
        // console.log("data not empty");  // for testing purpose
        // remove/hide empty spotlight
        emptySpotlight.style.display = "none";
        // display data in spotlight
        let membersList = data.members;
        // create a list of members with gold or silver membership
        let goldSilverMembers = [];
        membersList.forEach((member) => {
            if (member.level.toLowerCase() == "gold" || member.level.toLowerCase() == "silver") {
                goldSilverMembers.push(member);
            }
        });
        // generate 3 unique random number that is equal to the length of the goldSilverMembers
        const maxNum = 3;
        let uniqueRandomNumbers = [];
        // console.log(goldSilverMembers.length);  // for testing purpose

        while(uniqueRandomNumbers.length < maxNum) {
            let randomNum = Math.floor(Math.random() * goldSilverMembers.length);
            let numberIn = false;
            if (uniqueRandomNumbers.length > 0)
            {
                uniqueRandomNumbers.forEach((number) => {
                    if (randomNum == number){
                        numberIn = true;
                    }
                })

                if (!numberIn) {
                    uniqueRandomNumbers.push(randomNum);
                    // console.log(randomNum);  // for testing purpose
                } else {
                    // pass
                }
            } else {
                uniqueRandomNumbers.push(randomNum);
            }
        }
        // console.log(uniqueRandomNumbers);  // for testing purpose

        // generate advert cards for members in goldsiver list using unique random numbers list
        uniqueRandomNumbers.forEach(number => {
            let member = goldSilverMembers[number];
            // create elements
            let card = document.createElement('section');
            let iconHolder = document.createElement('div');
            let logoIcon = document.createElement('img');
            let name = document.createElement('h2');
            let phone = document.createElement('span');
            let address = document.createElement('span');
            let addressToMap = document.createElement('span');
            let site = document.createElement('span');
            let description = document.createElement('section');
            let membership = document.createElement('div');
            let anchor = document.createElement('a');

            // get values
            let memberName = member.name;
            let memberAddress = member.address;
            let mapLink = member.map;
            let memberPhone = member.phone;
            let memberCallLine = member.call;
            let memberSite = member.url;
            let memberLogo = member.icon;
            let memberDescription = member.description;
            let memberLevel = member.level;

            // populating the elements
            // Name
            name.innerHTML = memberName;
            // Phone
            phone.setAttribute('class', 'phone');
            phone.innerHTML = `<a href="tel:${memberCallLine}">${memberPhone}</a>`;
            // Address
            address.setAttribute('class', 'address');
            address.innerHTML = `<a href="${mapLink}">${memberAddress}`;
            // Address to map
            addressToMap.setAttribute('class', 'map-address');
            addressToMap.innerHTML = `<a href="${mapLink}">View Direction`;
            // Site
            site.setAttribute('class', 'site');
            site.innerHTML = `<a href="${memberSite}" target="_blank">Visit-Site</a>`;
            // Description
            description.setAttribute('class', 'description');
            description.innerHTML = `<p>${memberDescription}</p>`;
            // membership status
            if (memberLevel == 'gold') {
                membership.setAttribute('class', 'status');
                membership.innerHTML = `<span class="status-gold">${memberLevel}</span>`;
            } else if (memberLevel == 'silver') {
                membership.setAttribute('class', 'status');
                membership.innerHTML = `<span class="status-silver">${memberLevel}</span>`
            } else if (memberLevel == 'bronze') {
                membership.setAttribute('class', 'status');
                membership.innerHTML = `<span class="status-bronze">${memberLevel}</span>`
            } else {
                membership.setAttribute('class', 'status');
                membership.innerHTML = `<span class="status-free">${memberLevel}</span>`
            }

            // Anchor
            anchor.setAttribute('class', 'card-link');
            anchor.setAttribute('href', `${memberSite}`);
            anchor.setAttribute('target', '_blank');


            // Image
            logoIcon.setAttribute('src', memberLogo);
            logoIcon.setAttribute('alt', `log of ${memberName} hotel`);
            logoIcon.setAttribute('loading', 'lazy');
            logoIcon.setAttribute('width', '150');
            logoIcon.setAttribute('height', '150');

            // Image Holder
            iconHolder.setAttribute('class', 'icon-holder');
            iconHolder.appendChild(logoIcon);
            
            // append child to parent 
            card.setAttribute('class', 'card')
            card.appendChild(membership);
            card.appendChild(iconHolder);
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(addressToMap);
            card.appendChild(phone);
            card.appendChild(site);
            card.appendChild(description);

            // add card to anchor so as to visit site onclick
            anchor.appendChild(card);

            spotlight.appendChild(anchor);
        });
    }
    else {
        emptySpotlight.style.display = "block";
    }
}

getData(filepath);


// DYNAMICALLY DISPLAY WEATHER INFO
// Get All Elements

// current weather elements
const areaEle = document.querySelector('#area');
const currentTemEle = document.querySelector('#current-temp');
const weatherDescEle = document.querySelector('#weather-description');
const weatherIconEle = document.querySelector('#weather-icon');
const humidityEle = document.querySelector('#humidity');
const windSpeedEle = document.querySelector('#wind-speed');

// temperature date elements
const futureTempDateEle = document.querySelector('#future-temp-date');
const futureTempEle = document.querySelector('#future-temp');


// api url
const url = "https://api.openweathermap.org/data/2.5/forecast?lat=6.34&lon=5.59&units=metric&appid=495e0aa10247327f0515804ac3f3454a";

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
    // update weather location
    areaEle.innerHTML = `${data.city.name}, ${data.city.country}`;
    // update current weather info
    currentTemEle.innerHTML = `${data.list[0].main.temp} ℃`;
    let iconSrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    let desc = data.list[0].weather[0].description;
    weatherDescEle.textContent = `${desc}`;
    weatherIconEle.setAttribute('src', iconSrc);
    weatherIconEle.setAttribute('alt', desc);
    humidityEle.innerHTML = `${data.list[0].main.humidity} g/kg`;
    windSpeedEle.innerHTML = `${data.list[0].wind.speed} m/s`;

    // udate daily temperature for 3 days
    // get date
    const timestamp = data.list[24].dt + "000";
    let getDateValue = new Date(parseInt(timestamp));
    let extimatedDate = getDateValue.toDateString();

    futureTempDateEle.innerHTML = `${extimatedDate}`;
    // udate temperature
    futureTempEle.innerHTML = `${data.list[24].main.temp} ℃`;
}

apiFetch(url);

// HOME INVITE BANNER
/*
html structure
<div id="invite-banner">
    <div id="close-invite-banner"><spand id="invite-close-btn">⨉</span></div>
    <h3>Invitation</h3>
    <p>You are invited to attend the Benin Hotel Chamber of Commerce Meet and Greet on Wednesday at 7:00 p.m.</p>
</div>
*/
// get elements
const inviteBanner = document.querySelector("#invite-banner");
const inviteCloseBtn = document.querySelector("#invite-close-btn");

// display invite banner only on specific days
(function displayBannerInvite() {
    const inviteDays = [1, 2, 3];  // 1=monday, 2=tuesday ...
    let currentDateAndTime = new Date();
    let currendDay = currentDateAndTime.getDay();
    // console.log(currendDay);  // for testing purpose
    inviteDays.forEach((day)=> {
        if (currendDay == day){
            inviteBanner.style.display = 'block';
        }
    })
})();

// close invite banner
inviteCloseBtn.addEventListener('click', ()=> {
    inviteBanner.style.display = 'none';
})


// get and set last modification date
const copyDateEle = document.querySelector('#footer-current-date');
const lastModifiedEle = document.querySelector('#last-update');

// get current date and time and set it to element value
let currentDateAndTime = new Date();
let currentYear = currentDateAndTime.getFullYear();
let lastModified = document.lastModified;

copyDateEle.innerHTML = currentYear;
lastModifiedEle.innerHTML = `Last Modification: ${lastModified}`;
