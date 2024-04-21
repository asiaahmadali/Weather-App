let cityname = document.getElementById("cityname");
let searchBtn = document.getElementById("search-btn");
let temperature = document.getElementById("temperature");
let city = document.getElementById("city");

let country = document.getElementById("country");
let climate = document.getElementById("climate");
let climateimg = document.getElementById("climateimg");
let maxtemp = document.getElementById("max");

let mintemp = document.getElementById("min");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let sunRise = document.getElementById("sun-rise");

let sunSet = document.getElementById("sun-set");
let modeButton = document.getElementById("mode-btn");
let container = document.getElementById("container");

searchBtn.addEventListener("click", function () {
  let res = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=ae1709258d47d627e6436f20d9b4b384&units=metric`
  );

  let response = res
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      temperature.innerHTML = response.main.temp + " °C";
      city.innerText = response.name;
      country.innerHTML = response.sys.country;
      climate.innerHTML = response.weather[0].main;
      maxtemp.innerText = "Maximum Temperature    " + response.main.temp_max;
      mintemp.innerText = "Minimum Temperature    " + response.main.temp_min;
      humidity.innerText = response.main.humidity + " %";
      wind.innerText = response.wind.speed + " Km/h";

      // sunRise.innerHTML = "Sun-Rise  " + response.sys.sunrise;
      // sunSet.innerHTML = "Sun-Set  " + response.sys.sunset;

      let timestamprise = response.sys.sunrise;
      let risedate = new Date(timestamprise * 1000);
      let risehours = risedate.getHours();
      let riseminutes = risedate.getMinutes();
      let riseseconds = risedate.getSeconds();
      sunRise.innerHTML =
        "Sun-Rise  " + risehours + ":" + riseminutes + ":" + riseseconds;

      let timestampset = response.sys.sunrise;
      let setdate = new Date(timestampset * 1000);
      let sethours = setdate.getHours();
      let setminutes = setdate.getMinutes();
      let setseconds = setdate.getSeconds();
      sunSet.innerHTML =
        "Sun-Rise  " + sethours + ":" + setminutes + ":" + setseconds;

      if (response.weather[0].main === "Clouds") {
        climateimg.src = "./images/clouds.png";
      } else if (response.weather[0].main == "Clear") {
        climateimg.src = "./images/clear.png";
      } else if (response.weather[0].main == "Rainy") {
        climateimg.src = "./images/rain.png";
      } else if (response.weather[0].main == "Snow") {
        climateimg.src = "./images/snow.png";
      } else if (response.weather[0].main == "Drizzle") {
        climateimg.src = "./images/drizzle.png";
      } else if (response.weather[0].main == "Mist") {
        climateimg.src = "./images/mist.png";
      } else if (response.weather[0].main == "Haze") {
        climateimg.src = "./images/haze.jpg";
      } else {
        climateimg.src = "./images/Clouds.png";
      }
    })

    .catch((error) => {
      console.log(error);
      alert("city not found");
    });
});

modeButton.addEventListener("click", function () {
  container.classList.toggle("after-mode");
});
