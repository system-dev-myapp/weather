fetch('https://api.weatherapi.com/v1/forecast.json?key=094c297630eb483abb2102726231009&q=HaNoi&lang=vi')
  .then(function(response) {
     return response.json();
  })

  .then( function(responseT) {

    let wC = responseT.current;
    // fetch codeVideo


   async function handleCallApiCodeWeather () {
    let resCode =await fetch('https://www.weatherapi.com/docs/conditions.json')
    let dataCode = await resCode.json()
    console.log(dataCode)
  
    let listCode = dataCode.map(function(ele) {
      let str="";
      if (ele.code >=1000 && ele.code <1198){
        str ="./assets/videos/sun.mp4"
      } else if(ele.code >=1198 && ele.code <= 1282){
        str ="./assets/videos/rain.mp4"
      }
      
      let obj = {
        key : ele.code,
        link : str,
      }
      return obj;
    })
    console.log(listCode)

    const found = listCode.find((element) => element.key === wC.condition.code);
    const innerVideo = document.querySelector(".video-weather video")
    innerVideo.setAttribute('src',found.link);
    }

    handleCallApiCodeWeather()
    
    
    

    // inner weather left
    const weatherL = document.querySelector(".weather-index-left");
    weatherL.innerHTML = `
    <img src="${wC.condition.icon}" alt="" />
    <span>${wC.condition.text}</span> 
    `

    
    // inner weather right
    const weatherR = document.querySelector(".weather-index-right");
    weatherR.innerHTML = `
    <div>Wind: ${wC.wind_mph}mph</div>
    <div>Precip: ${wC.precip_in} in</div>
    <div>Pressure: ${wC.pressure_in} in</div>
    <div class="h1 mt-3">${wC.temp_f} °f</div>
    `





    // inner table
    const h = responseT.forecast.forecastday[0];

    let listTimeDate = [];
    let listTemp = [];
    let listWind = [];
    let listPrecip = [];
    let listCloud = [];
    let listHumidity = [];
    let listPressure = [];
    let listIcon = [];
  
    listTemp =  h.hour.map(function(ele,index) {
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
    })
    console.log(listTimeDate);
    console.log(listTemp);
    console.log(listWind);
    console.log(listPrecip);
    console.log(listCloud);
    console.log(listHumidity);
    console.log(listPressure);
    console.log(listIcon);


    //function inner with <p> 
    function Finner(arr,x,y) {
      for(let i = 1 ; i<arr.length ; i++) {
        arr[i].innerHTML= `
        <p>${x[i-1]} ${y}</p>
        `
      }
  }

  


  // inner


  // inner listSun
  const Sun = document.querySelector(".Sun")
  Sun.innerHTML =`
  <p>Sunrise:${h.astro.sunrise}</p>
  <p>Sunset: ${h.astro.sunset}</p>
  `

  // inner listMoon
  const Moon = document.querySelector(".Moon")
  Moon.innerHTML =`
  <p>Moonrise:${h.astro.moonrise}</p>
  <p>Moonset: ${h.astro.moonset}</p>
  `

  // inner maxTemp
  const Max = document.querySelector(".max")
  Max.innerHTML =`
  <p>Max: <br />${h.day.maxtemp_f} °f</p>
  `

  // inner minTemp
  const Min = document.querySelector(".min")
  Min.innerHTML =`
  <p>Min: <br />${h.day.mintemp_f} °f</p>
  `
  
  // inner avg
  const Avg = document.querySelector(".avg")
  Avg.innerHTML =`
  <p>Avg: <br />${h.day.avgtemp_f} °f</p>
  `
  
  // inner precipIndex
  const precip = document.querySelector(".precip")
  precip.innerHTML =`
  <p>Precip: <br />${h.day.totalprecip_in} in</p>
  `
  
  // inner maxWind
  const maxWindIndex = document.querySelector(".max-wind")
  maxWindIndex.innerHTML =`
  <p>Wind: <br />${h.day.maxwind_mph} mph</p>
  `

    // inner listTimeDate
    const TimeDate = document.querySelectorAll(".TimeDate th")
    for(let i = 1 ; i<TimeDate.length ; i++) {
      TimeDate[i].innerHTML= `
      <p>
      ${new Date(listTimeDate[i]).toLocaleString()}
      </p>
      `
    }

    // inner icon
    const Icon = document.querySelectorAll(".Icon td");
    for(let i = 1 ; i<Icon.length ; i++) {
      Icon[i].innerHTML= `
      <img
      src="${listIcon[i-1]}"
      alt=""
      />
      `
      }

    // inner listTemp;
    const Temp = document.querySelectorAll(".temp td");
    Finner(Temp,listTemp,"°f");

    // inner listWind
    const Wind = document.querySelectorAll(".wind td");
    Finner(Wind,listWind,"mph");

    // inner listPrecip
    const Precip = document.querySelectorAll(".Precip td");
    Finner(Precip,listPrecip,"in");
    

    // inner listCloud
    const Cloud = document.querySelectorAll(".Cloud td");
    Finner(Cloud,listCloud,"%");
    

    // inner listHumidity
    const Humidity = document.querySelectorAll(".Humidity td");
    Finner(Humidity,listHumidity,"%");
    

    // inner listPressure
    const Pressure = document.querySelectorAll(".Pressure td");
    Finner(Pressure,listPressure,"in");
    

    

    // inner color max min avg (temp)
    if(h.day.avgtemp_f >= 70) {
      Avg.setAttribute("style","background-color: #F1C151")
      Max.setAttribute("style","background-color: #E4AD2B")
      Min.setAttribute("style","background-color: #E9D97E")
      Temp.forEach(function(ele,index) {
        if(listTemp[index-1] >= h.day.mintemp_f && listTemp[index-1] <= (h.day.avgtemp_f - 1)) {
          ele.setAttribute("style","background-color: #E9D97E");
        }else if(listTemp[index-1] > (h.day.avgtemp_f - 1) && listTemp[index-1] < (h.day.avgtemp_f + 1)) {
          ele.setAttribute("style","background-color: #F1C151");
        }else if(listTemp[index-1] >= (h.day.avgtemp_f + 1) && listTemp[index-1] < (h.day.maxtemp_f)){
          ele.setAttribute("style","background-color: #E4AD2B");
        }
      })
    }else {
      Avg.setAttribute("style","background-color: #3CEB88")
      Max.setAttribute("style","background-color: #C4EE36")
      Min.setAttribute("style","background-color: #73F6AB") 
    }

    

    // inner color max wind
    if(h.day.maxwind_mph <= 10) {
      maxWindIndex.setAttribute("style","background-color: #A4F6E9")
      Wind.forEach(function(ele,index) {
        if(listWind[index-1] >= 0 && listWind[index-1] <= 5) {
          ele.setAttribute("style","background-color: #9BF6F3");
        }else if(listWind[index-1] > 5 && listWind[index-1] <= h.day.maxwind_mph){
          ele.setAttribute("style","background-color: #A4F6E9");
        }
      })
    }else {
      maxWindIndex.setAttribute("style","background-color: #C4EE36")
    }

    // inner color cloud
    Cloud.forEach(function(ele,index) {
      if(listCloud[index-1] < 70 ) {
        ele.setAttribute("style","background-color: #E1E3E4");
      }else if(listCloud[index-1] >=70) {
        ele.setAttribute("style","background-color: #BCBFC0");
      }
    })



    // inner color precip
    if(h.day.totalprecip_in !== 0) {
      precip.setAttribute("style","background-color: #0899CA")
      Precip.forEach(function(ele,index) {
        if(listPrecip[index-1] > 0) {
          ele.setAttribute("style","background-color: #B9E6F6");
        }else if(listPrecip[index-1] === 0) {
          ele.setAttribute("style","background-color: #fff");
        }
      })
    }
    else {
      precip.setAttribute("style","background-color: #fff")
    }
    

    // inner color pressure
    Pressure.forEach(function(ele,index) {
      if(listPressure[index-1] > 0) {
        ele.setAttribute("style","background-color: #7FECF9");
      }
      else if(listPressure[index-1] === 0){
        ele.setAttribute("style","background-color: #fff");
      }
    })

  })

   .catch(function(err) {
    // console.log(err);
   })
  