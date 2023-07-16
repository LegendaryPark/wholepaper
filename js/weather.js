function onGeolocationOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=061662316755db9e855d35936d0b33eb&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} ${parseInt(
        data.main.temp
      )}°c`;
    });
}

function onGeolocationError(error) {
  console.log(error);
}

navigator.geolocation.getCurrentPosition(onGeolocationOk, onGeolocationError);
