const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('.searchBtn');
const Humidity = document.getElementById('.Humidity');
const wind_speed = document.getElementById('.wind-speed');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "47f372d677b0a69df648b70689d01c43";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.code === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    location_not_found.style.display = "none";

    weather_body.style.display = "flex";


    temperature.innerHTML = `${math.round(weather_data.main.temp - 273.15)}°C`;
    
    Humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/pics/cloud.png";
            break;
        case 'Clear':
                weather_img.src = "/pics/clear.png";
                break;
        case 'Rain':
                 weather_img.src = "/pics/rain.png";
                 break;
        case 'Mist':
                weather_img.src = "/pics/mist.png";
                break;
        case 'Snow':
            weather_img.src = "/pics/snow.png";
            break;
    }
}

searchBtn.addEventListener('click' , ()=>{
    checkWeather(inputBox.value);
});

