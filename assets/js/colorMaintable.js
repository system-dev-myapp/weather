fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=094c297630eb483abb2102726231009&q=HaNoi&lang=vi"
)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //sunrise sunset
        const sunriseSunsetTh = document.querySelector("#sunrise-sunset");
        sunriseSunsetTh.innerHTML = `
        <p>Sunrise: ${data.forecast.forecastday[0].astro.sunrise}</p>
        <p>Sunset: ${data.forecast.forecastday[0].astro.sunset}</p>
      `;

        //moonrise moonset
        const moonriseMoonsetTh = document.querySelector("#moonrise-moonset");
        moonriseMoonsetTh.innerHTML = `
        <p>Moonrise: ${data.forecast.forecastday[0].astro.moonrise}</p>
        <p>Moonset: ${data.forecast.forecastday[0].astro.moonset}</p>
      `;

        //Max temperature
        const maxTemp = document.querySelector("#max-temp");
        maxTemp.innerHTML = `
      <p>Max: <br />  ${data.forecast.forecastday[0].day.maxtemp_f}°f</p>
      `;

        //min temperature

        const minTemp = document.querySelector("#min-temp");
        minTemp.innerHTML = `
      <p>Min: <br />  ${data.forecast.forecastday[0].day.mintemp_f}°f</p>
      `;

        //avg temperature
        const avgTemp = document.querySelector("#avg-temp");
        avgTemp.innerHTML = `
      <p>Avg: <br />  ${data.forecast.forecastday[0].day.avgtemp_f}°f</p>
      `;

        //precip
        const precip = document.querySelector("#precip");
        precip.innerHTML = `
      <p>Precip: <br />  ${data.forecast.forecastday[0].day.totalprecip_in} in</p>
      `;

        // max wind
        const maxWind = document.querySelector("#max-wind");
        maxWind.innerHTML = `
      <p>Max Wind: <br />  ${data.forecast.forecastday[0].day.maxwind_mph} mph</p>
      `;
    });
