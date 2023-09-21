fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=094c297630eb483abb2102726231009&q=HaNoi&lang=vi"
)
    .then(function (response) {
        return response.json();
    })

    .then(function (responseT) {
        let listTimeDate = [];
        let listTemp = [];
        let listWind = [];
        let listPrecip = [];
        let listCloud = [];
        let listHumidity = [];
        let listPressure = [];
        let listIcon = [];
        const h = responseT.forecast.forecastday[0];

        listTemp = h.hour.map(function (ele, index) {
            //push time and date
            listTimeDate.push(ele.time_epoch);

            // push chi so wind
            listWind.push(ele.wind_mph);

            // push chi so precip
            listPrecip.push(ele.precip_in);

            // push chi so cloud
            listCloud.push(ele.cloud);

            // push chi so humidity
            listHumidity.push(ele.humidity);

            // push chi so pressure
            listPressure.push(ele.pressure_in);

            // push icon
            listIcon.push(ele.condition.icon);

            // temp
            return ele.temp_f;
        });
        console.log(listTimeDate);
        console.log(listTemp);
        console.log(listWind);
        console.log(listPrecip);
        console.log(listCloud);
        console.log(listHumidity);
        console.log(listPressure);
        console.log(listIcon);

        // inner listTimeDate
        const TimeDate = document.querySelectorAll(".TimeDate th");
        for (let i = 1; i < TimeDate.length; i++) {
            TimeDate[i].innerHTML = `
      <p>
      ${new Date(listTimeDate[i]).toLocaleString()}
      </p>
      `;
        }

        // inner listTemp;
        const Temp = document.querySelectorAll(".temp td");
        for (let i = 1; i < Temp.length; i++) {
            Temp[i].innerHTML = `
      <p>${listTemp[i - 1]}°f</p>
      `;
        }

        // inner listWind
        const Wind = document.querySelectorAll(".wind td");
        for (let i = 1; i < Wind.length; i++) {
            Wind[i].innerHTML = `
      <p>${listWind[i - 1]}°f</p>
      `;
        }

        // inner listPrecip
        const Precip = document.querySelectorAll(".Precip td");
        for (let i = 1; i < Precip.length; i++) {
            Precip[i].innerHTML = `
      <p>${listPrecip[i - 1]}°f</p>
      `;
        }

        // inner listCloud
        const Cloud = document.querySelectorAll(".Cloud td");
        for (let i = 1; i < Cloud.length; i++) {
            Cloud[i].innerHTML = `
      <p>${listCloud[i - 1]}°f</p>
      `;
        }

        // inner listHumidity
        const Humidity = document.querySelectorAll(".Humidity td");
        for (let i = 1; i < Humidity.length; i++) {
            Humidity[i].innerHTML = `
      <p>${listHumidity[i - 1]}°f</p>
      `;
        }

        // inner listPressure
        const Pressure = document.querySelectorAll(".Pressure td");
        for (let i = 1; i < Pressure.length; i++) {
            Pressure[i].innerHTML = `
      <p>${listPressure[i - 1]}°f</p>
      `;
        }

        // inner icon
        const Icon = document.querySelectorAll(".Icon td");
        for (let i = 1; i < Icon.length; i++) {
            Icon[i].innerHTML = `
      <img
      src="${listIcon[i - 1]}"
      alt=""
      />
      `;
        }
    })

    .catch(function (err) {
        // console.log(err);
    });
