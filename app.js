const input = document.getElementById("input");
const inputBtn = document.getElementById("inputBtn");
const result = document.getElementById("result");

inputBtn.addEventListener("click", () => {
    let countryName = input.value.trim();
    input.value = "";
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL)
    fetch(finalURL).then(response => response.json())
    .then(data => {
        

        result.innerHTML = `
        <img src="${data[0].flags.svg}" alt="Flag of ${data[0].name.common}" class="flag-image">
        <h2>${(data[0].name.common)}</h2>
        <div class="wrapper"
        <div class="data-wrapper">
        <h4>Capital:</h4>
        <span> ${(data[0].capital)}</span>
        </div>
        <div class="data-wrapper">
        <h4>Contintent:</h4>
        <span> ${(data[0].continents[0])}</span>
        </div>
        <div class="data-wrapper">
        <h4>Population:</h4>
        <span> ${(data[0].population)}</span>
        </div>
        <div class="data-wrapper">
        <h4>Currency:</h4>
        <span> ${data[0].currencies[Object.keys(data[0].currencies)].name }</span>
        </div>
        <div class="data-wrapper">
        <h4>Border:</h4>
        <span> ${data[0].borders}</span>
        </div>
         </div>
    `;
    console.log(data)
    });
}) // why not show image output


// console.log(data[0])
//         console.log(data[0].capital)
//         console.log
//         //console.log(data[0].name.common)
//         console.log
//         console.log(data(Object.keys.data[0].currencies[0]))
//         console.log(Object.values(data[0].languges).toString().split(",").join(", "))