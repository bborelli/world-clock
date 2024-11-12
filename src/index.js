function updateTime() {
  let carmelElement = document.querySelector("#carmel");
  let carmelDateElement = carmelElement.querySelector(".date");
  let carmelTimeElement = carmelElement.querySelector(".time");
  let carmelTime = moment().tz("America/Indiana/Indianapolis");

  carmelDateElement.innerHTML = carmelTime.format("dddd, Do");
  carmelTimeElement.innerHTML = carmelTime.format("hh:mm [<small>]A[</small>]");

  let alagoasElement = document.querySelector("#alagoas");
  let alagoasDateElement = alagoasElement.querySelector(".date");
  let alagoasTimeElement = alagoasElement.querySelector(".time");
  let alagoasTime = moment().tz("America/Maceio");

  alagoasDateElement.innerHTML = alagoasTime.format("dddd, Do");
  alagoasTimeElement.innerHTML = alagoasTime.format(
    "hh:mm [<small>]A[</small>]"
  );

  let lapopieElement = document.querySelector("#lapopie");
  let lapopieDateElement = lapopieElement.querySelector(".date");
  let lapopieTimeElement = lapopieElement.querySelector(".time");
  let lapopieTime = moment().tz("Europe/Paris");

  lapopieDateElement.innerHTML = lapopieTime.format("dddd, Do");
  lapopieTimeElement.innerHTML = lapopieTime.format(
    "hh:mm [<small>]A[</small>]"
  );

  let thailandElement = document.querySelector("#thailand");
  let thailandDateElement = thailandElement.querySelector(".date");
  let thailandTimeElement = thailandElement.querySelector(".time");
  let thailandTime = moment().tz("Asia/Bangkok");

  thailandDateElement.innerHTML = thailandTime.format("dddd, Do");
  thailandTimeElement.innerHTML = thailandTime.format(
    "hh:mm [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);

  let cityNames = {
    "Africa/Casablanca": "Fès <small>(MAR)</small>",
    "Europe/Lisbon": "Lisbon <small>(PRT)</small>",
    "Europe/Paris": "Paris <small>(FRA)</small>",
    "America/Sao_Paulo": "Rio de Janeiro <small>(BRA)</small>",
  };

  let cityName = cityNames[cityTimeZone] || "City not found";

  let selectedCityElement = document.querySelector("#selected-city");
  selectedCityElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("dddd, Do")}</div>
      </div>
      <div class="time">${cityTime.format("hh:mm [<small>]A[</small>]")}</div>
    </div>
    <a href="/">All cities</>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
