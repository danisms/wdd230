// adding the hamburger menu
const hamburgerBtn = document.querySelector('#menu');
const navigation = document.querySelector('nav');

// add a click event to hamburgerBtn
const delayTiming = 250
const delayTimingSec = delayTiming / 1000;
hamburgerBtn.addEventListener('click', () => {
    let currentBtnColor = hamburgerBtn.style.color
    hamburgerBtn.style.color = 'rgba(0, 0, 0, 0)';
    hamburgerBtn.style.transition = `color ${delayTimingSec}s`;
    setTimeout(() => {
        navigation.classList.toggle('open');
        hamburgerBtn.classList.toggle('open');
        hamburgerBtn.style.color = currentBtnColor;
        hamburgerBtn.style.transition = `color ${delayTimingSec}s`;
    }, delayTiming);
})

// toggle light and dark
const themeBtn = document.querySelector('#theme-mode');
const lightOn = 'images/light-bulb-on.png';
const lightOff = 'images/light-bulb-off.png';

themeBtn.addEventListener('click', () => {
    if (themeBtn.src == lightOff) {
        console.log('hel');
        themeBtn.src = lightOn;
    }else if (themeBtn.src == lightOn) {
        themeBtn.src = lightOff
    }else {
        console.log('kjlskjdl');
    }
})