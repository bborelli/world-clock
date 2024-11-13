document.addEventListener("DOMContentLoaded", function () {
  function displayUserLocationTime() {
    const userTimeZone = moment.tz.guess();
    const userTime = moment().tz(userTimeZone);
    document.querySelector("#selected-city .time").innerHTML = userTime.format(
      "hh:mm [<small>]A[</small>]"
    );
  }

  function updateTime() {
    const cityData = [
      { id: "carmel", timezone: "America/Indiana/Indianapolis" },
      { id: "alagoas", timezone: "America/Maceio" },
      { id: "lapopie", timezone: "Europe/Paris" },
      { id: "thailand", timezone: "Asia/Bangkok" },
    ];

    cityData.forEach((city) => {
      const cityElement = document.querySelector(`#${city.id}`);
      cityElement.querySelector(".date").innerHTML = moment()
        .tz(city.timezone)
        .format("dddd, Do");
      cityElement.querySelector(".time").innerHTML = moment()
        .tz(city.timezone)
        .format("hh:mm [<small>]A[</small>]");
    });
  }

  function updateCity(event) {
    const cityTimeZone = event.target.value;
    if (!cityTimeZone) return;

    const cityTime = moment().tz(cityTimeZone);
    const cityNames = {
      "Africa/Casablanca": "Fès <small>(MAR)</small>",
      "Europe/Lisbon": "Lisbon <small>(PRT)</small>",
      "Europe/Paris": "Paris <small>(FRA)</small>",
      "America/Sao_Paulo": "Rio de Janeiro <small>(BRA)</small>",
    };

    const selectedCityElement = document.querySelector("#selected-city");

    selectedCityElement.querySelector("h2").innerHTML = cityNames[cityTimeZone];
    selectedCityElement.querySelector(".time").innerHTML = cityTime.format(
      "hh:mm [<small>]A[</small>]"
    );
  }

  displayUserLocationTime();
  updateTime();
  setInterval(updateTime, 1000);

  document.querySelector("#city").addEventListener("change", updateCity);
});
