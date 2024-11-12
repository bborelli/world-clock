function updateTime() {
  let lapopieElement = document.querySelector("#lapopie");
  let lapopieDateElement = lapopieElement.querySelector(".date");
  let lapopieTimeElement = lapopieElement.querySelector(".time");
  let lapopieTime = moment().tz("Europe/Paris");

  lapopieDateElement.innerHTML = lapopieTime.format("dddd, Do");
  lapopieTimeElement.innerHTML = lapopieTime.format(
    "h:mm [<small>]A[</small>]"
  );

  let carmelElement = document.querySelector("#carmel");
  let carmelDateElement = carmelElement.querySelector(".date");
  let carmelTimeElement = carmelElement.querySelector(".time");
  let carmelTime = moment().tz("America/Indiana/Indianapolis");

  carmelDateElement.innerHTML = carmelTime.format("dddd, Do");
  carmelTimeElement.innerHTML = carmelTime.format("h:mm [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
