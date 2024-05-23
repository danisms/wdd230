// get all elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// api url
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&unites=imperial&appid=b6b0d32fb39360e9c900ab1fea5e8250';

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
