// get elements
const currentYearElement = document.querySelector('#footerCurrentYear');
const lastModifiedElement = document.querySelector('#lastModified');

// get and inset values into the elements
let currentDateAndTime = new Date();
let currentYear = currentDateAndTime.getFullYear();
let lastModified = document.lastModified;

currentYearElement.innerHTML = currentYear;
lastModifiedElement.innerHTML = `Last Modification: ${lastModified}`;


