function cityTimeDate() {
  // los angeles

  let losAngelesDateElement = document.querySelector("#los-angeles .date");
  if (losAngelesDateElement) {
    losAngelesDateElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMM Do YYYY");
    let losAngelesTimeElement = document.querySelector("#los-angeles .time");
    losAngelesTimeElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  // paris
  let parisDateElement = document.querySelector("#paris .date");
  if (parisDateElement) {
    parisDateElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("MMM Do YYYY");
    let parisTimeElement = document.querySelector("#paris .time");
    parisTimeElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
        <br />
        <a href="/">Go back</a>`;
}

cityTimeDate();
setInterval(cityTimeDate, 1000);

let citySelector = document.querySelector("#city-selector");
citySelector.addEventListener("change", updateCity);
