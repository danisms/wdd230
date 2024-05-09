const lastModifiedElement = document.querySelector('#lastModified');
const currentYearElement = document.querySelector('#footerCurrentYear');

let currentDateAndTime = new Date();
let currentYear = currentDateAndTime.getFullYear();

lastModifiedElement.innerHTML = document.lastModified;
currentYearElement.innerHTML = currentYear;
