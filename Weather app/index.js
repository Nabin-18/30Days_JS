
const searchBar = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-button');

const weatherInfo = async (city) => {
    const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d3f912e6aabf3e167ad4dc927af4999a&units=metric`);
    const data = await responce.json();
    console.log(data);

    //show the data in frontend
    document.querySelector('.location').innerHTML = `Location: ${data.name}`;
    document.querySelector('.temperature').innerHTML = `Temperature: ${data.main.temp}°
C`;
    document.querySelector('.weather').innerHTML = `Weather: ${data.weather[0].main}`;

    document.querySelector('.humidity').innerHTML = `Humidity: ${data.main.humidity}%`;
    document.querySelector('.wind').innerHTML = `Wind Speed: ${data.wind.speed}km/hr`;

    document.querySelector('.description').innerHTML = `Description: ${data.weather[0].description}`;

}

//when we search some city name, it have to show the weather of that city
searchButton.addEventListener('click', () => {

    weatherInfo(searchBar.value);
})





