//

const apiKey = "364db7834c648782063a31b32cdaeff8";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const WeatherIcon = document.querySelector(".weather-icon");

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + `°c`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
    document.querySelector(".wind").innerHTML = data.wind.speed + ` km/h`;

    if (data.weather[0].main == "Clouds") {
      WeatherIcon.src = "./Assests/clouds.png";
    }
    if (data.weather[0].main == "Clear") {
      WeatherIcon.src = "./Assests/clear.png";
    }
    if (data.weather[0].main == "Drizzle") {
      WeatherIcon.src = "./Assests/drizzle.png";
    }
    if (data.weather[0].main == "Mist") {
      WeatherIcon.src = "./Assests/mist.png";
    }
    if (data.weather[0].main == "Rain") {
      WeatherIcon.src = "./Assests/rain.png";
    }
    if (data.weather[0].main == "Snow") {
      WeatherIcon.src = "./Assests/snow.png";
    }
    if (data.weather[0].main == "Thunderstorm") {
      WeatherIcon.src = "./Assests/thunderstorm.png";
    }
    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  document.querySelector(".error").style.display = "none";
  checkWeather(searchBox.value);
});
