import "./index.css";

async function fetchData(url) {
  try {
    let data = await fetch(url, { mode: "cors" });

    if (!data.ok) {
      alert(`Response status: ${data.status}`);
    }

    let dataConversion = data.json();
    return dataConversion;
  } catch (err) {
    alert(err);
  }
}

function getLocation(location) {
  return fetchData(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?include=fcst%2Cobs%2Chistfcst%2Cstats%2Cdays%2Chours%2Ccurrent%2Calerts&key=VKGQHC8C76A79J252GJYYBAGP`,
  ).then((response) => {
    let currentCondition = {
      datetime: response.currentConditions.datetime,
      condition: response.currentConditions.conditions,
      feelslike: response.currentConditions.feelslike,
      moonphase: response.currentConditions.moonphase,
      temp: response.currentConditions.temp,
      sunrise: response.currentConditions.sunrise,
      sunset: response.currentConditions.sunset,
      wind: response.currentConditions.windspeed,
      precipprob: response.currentConditions.precipprob,
      icon: response.currentConditions.icon,
    };

    let daysConditions = [];

    response.days.forEach((day) => {
      let dayCondition = {
        datetime: day.datetime,
        description: day.description,
        tempmin: day.tempmin,
        tempmax: day.tempmax,
        precipprob: day.precipprob,
        precip: day.precip,
        icon: day.icon,
      };
      daysConditions.push(dayCondition);
    });

    return { currentCondition, daysConditions };
  });
}

let submit = document.getElementById("form");
let location = document.getElementById("search");

submit.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission
  getLocation(location.value)
    .then((data) => {
      let currentData = data.currentCondition;
      let dayData = data.daysConditions;

      let img = Object.keys(images);

      for (let i = 0; i < img.length; i++) {
        if (currentData.icon === img[i] && images[img[i]] !== "")
          currentData.icon = images[img[i]];
      }

      for (let element of dayData) {
        if (
          Object.keys(images).includes(element.icon) &&
          images[element.icon] !== ""
        )
          element.icon = images[element.icon];
      }
      return { currentData, dayData };
    })
    .then((result) => {
      display.currentData(result.currentData);
      display.daysData(result.dayData);
    });
});

let images = {
  "clear-day": "",
  "partly-cloudy-day": "",
  cloudy: "",
  overcast: "",
  rain: "",
  thuderstorm: "",
  snow: "",
  wind: "",
  fog: "",
  hail: "",
  tornado: "",
};

async function fetchIcon(img) {
  try {
    for (let element of Object.keys(img)) {
      let response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=qpQYSVTYc707KVBVFu042ETCDjZj9OLE&s=${element}`,
        { mode: "cors" },
      );

      if (!response.ok) console.log(`Response status: ${response.status}`);
      else if (response.status === 404) continue;

      let result = await response.json();
      if (result.data.length === 0) continue;
      img[element] = result.data.images.original.url;
    }
  } catch (err) {
    console.error();
  }
}

fetchIcon(images);

const display = (function displayData() {
  let content = document.getElementById("content");

  function currentData(data) {
    let div = document.createElement("div");
    div.id = "loading";
    div.textContent = "Loading...";
    content.appendChild(div);

    content.innerHTML = "";
    let forecast = document.createElement("h1");
    forecast.id = "forecast";
    forecast.textContent = `Weather Forecast for ${location.value}`;
    content.appendChild(forecast);

    let currentDiv = document.createElement("div");
    currentDiv.id = "currentDiv";

    let h2 = document.createElement("h2");
    h2.textContent = "Currently";

    let timepara = document.createElement("p");
    timepara.id = "time";
    timepara.textContent = `${data.datetime}`;

    let div1 = document.createElement("div");
    div1.id = "div1";

    let icon = "";
    if (data.icon.startsWith("http")) {
      icon = document.createElement("img");
      icon.className = "para";
      icon.src = data.icon;
      icon.id = "icon";
    } else {
      icon = document.createElement("p");
      icon.className = "para";
      icon.textContent = `${data.icon}`;
      icon.id = "icon";
    }

    let temp = document.createElement("p");
    temp.className = "para";
    temp.innerHTML = `<p id="label">Temp</p><p>${data.temp}\u00B0F</p>`;

    let feelslike = document.createElement("p");
    feelslike.className = "para";
    feelslike.innerHTML = `<p id="label">Feelslike</p><p>${data.feelslike}\u00B0F</p>`;

    let rain = document.createElement("p");
    rain.className = "para";
    rain.innerHTML = `<p id="label">Rain</p><p>${data.precipprob}in</p>`;

    let wind = document.createElement("p");
    wind.className = "para";
    wind.innerHTML = `<p id="label">Wind</p><P>${data.wind}km/h</p>`;

    div1.append(icon, temp, feelslike, rain, wind);

    let div2 = document.createElement("div");
    div2.id = "div2";

    let sunrise = document.createElement("p");
    sunrise.innerHTML = `<p id="label">Sunrise</p><p>${data.sunrise}</p>`;

    let sunset = document.createElement("p");
    sunset.innerHTML = `<p id="label">Sunset</p> <p>${data.sunset}</p>`;

    div2.append(sunrise, sunset);

    let moonphase = document.createElement("p");
    moonphase.className = "moonphase";

    if (0.5 < data.moonphase && data.moonphase < 1.0) {
      moonphase.innerHTML = `<p id="label">Moonphase</p><p>Waxing Gibbous</p>`;
    } else if (0.5 > data.moonphase && data.moonphase < 1.0) {
      moonphase.innerHTML = `<p id="label">Moonphase</p><p>Waning Gibbous</p>`;
    }

    currentDiv.append(timepara, div1, div2, moonphase);
    content.append(h2, currentDiv);
  }

  function daysData(data) {
    let daysDiv = document.createElement("div");
    daysDiv.id = "daysDiv";

    let h2 = document.createElement("h2");
    h2.textContent = `${data.length} days outlook`;

    data.forEach((element) => {
      let elementDiv = document.createElement("div");
      elementDiv.id = "elementDiv";

      let date = document.createElement("p");
      date.className = "date";
      date.textContent = `${element.datetime}`;

      let icon = "";
      if (element.icon.startsWith("http")) {
        icon = document.createElement("img");
        icon.className = "para";
        icon.src = element.icon;
        icon.id = "icon";
      } else {
        icon = document.createElement("p");
        icon.className = "para";
        icon.textContent = `${element.icon}`;
        icon.id = "icon";
      }

      let div = document.createElement("div");
      div.id = "div";

      let max = document.createElement("p");
      max.innerHTML = `<p id="label">Max</p><p>${element.tempmax}\u00B0F</p>`;

      let min = document.createElement("p");
      min.innerHTML = `<p id="label">Min</p><p>${element.tempmin}\u00B0F</p>`;

      let rain = document.createElement("p");
      rain.innerHTML = `<p id="label">Rain<p><p>${element.precipprob}in<p>`;

      let precip = document.createElement("p");
      precip.innerHTML = `<p id="label">Precip<p><p>${element.precip}%</p>`;

      div.append(icon, max, min, rain, precip);

      let description = document.createElement("p");
      description.id = "description";
      description.textContent = `${element.description}`;

      elementDiv.append(date, div, description);
      daysDiv.appendChild(elementDiv);
    });
    return content.append(h2, daysDiv);
  }

  return { currentData, daysData };
})();
