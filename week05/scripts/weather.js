// get all elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// api url
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=6.34&lon=5.59&units=imperial&appid=495e0aa10247327f0515804ac3f3454a';

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
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch(url);
