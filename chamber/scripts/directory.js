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
    if (window.innerWidth >= 890) {
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
}

// Remove event description
function removeDescription(elementId, direction) {
        // delay function for intro text writing display to complete
        if (window.innerWidth >= 890) {
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
textByLetter('Meet Members of the B.H.C.C', '#head-title', 75);
setTimeout(() => {
    const headMotto = document.querySelector('#head-motto')
    // headMotto.style.display = 'block';
    headMotto.style.opacity = '1';
    textByLetter('Connecting Hospitality, Driving Growth', '#head-motto', 75);
    setTimeout(() => {
        delayFunctionCall = 0;
    }, 2500);
}, 2800);


// DISPLAY DIRECTORY
// get elements
/*
<div id="directory-overlay">
    <div id="directory-grid-list-display">
        <button id="directory-list">≣</button>
        <button id="directory-grid">▦</button>
    </div>
    <div id="directory">
        <!-- Only display this if directory is empty -->
        <div id="directory-empty">
            <h2>Empty Directory</h2>
        </div>
    </div>
</div>
*/
const directory = document.getElementById('directory');
const emptyDirectory = document.getElementById('directory-empty');

// get json member file
// api url
const filepath = 'data/members.json';

async function getData(path)
{
    try {
        let response = await fetch(path);
        if (response.ok) {
            let data = await response.json();
            // console.log(data);  // testing purpose only;
            displayDirectory(data);
        } else {
            throw Error(await response.text());
        }
    } catch (err)
    {
        console.log(err)
    }
}

function displayDirectory(data) {
    // console.log(data);  // for testing purpose
    if (data.members.length > 0) {
        // console.log("data not empty");  // for testing purpose

        // remove empty directory display
        emptyDirectory.style.display = "none";

        // display data in directory
        let membersList = data.members;
        let count = 1;
        membersList.forEach(member => {
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
            // avoid largest contentful image lazy loading.
            if (count > 1) {
                logoIcon.setAttribute('loading', 'lazy');
            }
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

            directory.appendChild(anchor);
        });

        // increment count
        count++

    } else {
        console.log("empty data");  // for testing purpose
        // do nothing and display empty directory.
    }
}

getData(filepath);

// Toggle view
const girdView = document.querySelector('#directory-grid');
const listView = document.querySelector('#directory-list')

girdView.addEventListener('click', ()=> {
    directory.classList.add('grid');
    directory.classList.remove('list');
})

listView.addEventListener('click', ()=> {
    directory.classList.add('list');
    directory.classList.remove('grid');
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