// using latter-day saints prophets api to fetch all latter-day saints prophets
const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
// get elements
const cards = document.querySelector("#cards");
// create get prophets asynchronous function
async function getProphetData(url) {
    const response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        // console.table(data.prophets);  // for testing purpose
        data = data.prophets;
        displayProphets(data);
    }
}

// display all prophets data
const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        // create elements
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthDate = document.createElement('h3');
        let deathDate = document.createElement('h3');
        let serviceLength = document.createElement('h3');
        let imgHolder = document.createElement('div');
        let portrait = document.createElement('img');
        // populating the elements
        // Full Name
        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;
        // Extra Info
        birthDate.innerHTML = `Birth Date: ${prophet.birthdate}`
        deathDate.innerHTML = `Death Date: ${prophet.death}`;
        serviceLength.innerHTML = `Service Length: ${prophet.length}`;
        // Image
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of the Prophet ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Image Holder
        imgHolder.setAttribute('class', 'img-holder');
        imgHolder.appendChild(portrait);
        
        // append child to parent element
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(deathDate);
        card.appendChild(serviceLength);
        card.appendChild(imgHolder);

        cards.appendChild(card);
    });
}

// get prophet data
getProphetData(url);