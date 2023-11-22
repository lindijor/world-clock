function cityTimeDate() {
  // los angeles
  let losAngelesDateElement = document.querySelector("#los-angeles .date");
  losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMM Do YYYY");
  let losAngelesTimeElement = document.querySelector("#los-angeles .time");
  losAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");

  // paris
  let parisDateElement = document.querySelector("#paris .date");
  parisDateElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("MMM Do YYYY");
  let parisTimeElement = document.querySelector("#paris .time");
  parisTimeElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("h:mm:ss [<small>]A[</small>]");
}

cityTimeDate();
setInterval(cityTimeDate, 1000);
