// color of temperature max
const temperatureMax = document.querySelector(".max");

temperatureMax.setAttribute("style", "background-color: #E4AD2B");

// color of temperature min
const temperatureMin = document.querySelector(".min");

temperatureMin.setAttribute("style", "background-color: #E9D97E");

// color of avg
const avg = document.querySelector(".avg");

avg.setAttribute("style", "background-color: #F1C151");

// precip
const precip = document.querySelector(".precip");

precip.setAttribute("style", "background-color: #0899CA");

// max wind
const maxWind = document.querySelector(".max-wind");
maxWind.setAttribute("style", "background-color: #A4F6E9");

// color subtable

const nhietDo = [70, 75, 79, 80, 85, 86, 88, 80];
const Max = 90;
const Min = 70;
const Avg = 80;

// temp
const temp = document.querySelectorAll(".temp td");
for (let i = 1; i < temp.length; i++) {
    temp[i].innerHTML = `<p>${nhietDo[i - 1]} mph</p>`;
}

const colorTemp = document.querySelectorAll(".temp td p");
for (let i = 1; i < colorTemp.length; i++) {
    if (nhietDo[i - 1] >= Min && nhietDo[i - 1] <= Avg - 3) {
        temp[i].setAttribute("style", "background-color: #E9D97E");
    } else if (nhietDo[i - 1] > Avg - 3 && nhietDo[i - 1] <= Avg + 2) {
        temp[i].setAttribute("style", "background-color: #F1C151");
    } else {
        let x = `background-color: #E${10 - i}AD2B`;
        temp[i].setAttribute("style", x);
    }
}

// color wind
const Mwind = 6.9;
let InnerMaxWind = document.querySelector(".max-wind");
InnerMaxWind.innerHTML = `
<p>
    Max Wind: <br />
    ${Mwind} mph
</p>
`;

const gio = [3.4, 4.3, 2.2, 3.8, 4.7, 6.1, 6.3, 2];

const listWind = document.querySelectorAll(".wind");
listWind.forEach(function (element) {
    element[i + 1].innerHTML = `
    <p>5.4 mph</p>
    `;
});

maxWind.setAttribute("style", "background-color: #A4F6E9");
