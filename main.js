// var inputCountry = document.getElementById("inputContry");
const inputCountry = document.getElementById('inputCountry');
const searchCounry = document.getElementById("search-country");
const countryName = document.getElementById("country-name");
//==========================
const country = document.getElementById('country');
const newInfected = document.getElementById('newInfected');
const totalInfected = document.getElementById('totalInfected');
const newDeath = document.getElementById('newDeath');
const totalDeath = document.getElementById('totalDeath');
const newRecovered = document.getElementById('newRecovered');
const totalRecovered = document.getElementById('totalRecovered');
const date = document.getElementById('date');

// input function
function inputFunction() {
    if (inputCountry.value == "") {
        alert("Please enter a country name");
    } else {
        // inputCountry.value = "";
        fetch("https://api.covid19api.com/summary")
            .then(res => res.json())
            .then(data => {
                const country = data.Countries;
                for (let i = 0; i < country.length; i++) {
                    const element = country[i];
                    const Country = element.Country;
                    // convert string into uppercase
                    const checkCountry = Country.toUpperCase();
                    const NewInputCountry = inputCountry.value.toUpperCase();
                    if (NewInputCountry == checkCountry) {
                        // set all data in new variable
                        console.log(checkCountry);
                        const newInfected = element.NewConfirmed;
                        const newDeath = element.NewDeaths;
                        const newRecovered = element.NewRecovered;
                        const totalInfected = element.TotalConfirmed;
                        const totalDeath = element.TotalDeaths;
                        const totalRecovered = element.TotalRecovered;
                        document.getElementById('country').innerText = Country;
                        document.getElementById('newInfected').innerText = newInfected;
                        document.getElementById('totalInfected').innerText = totalInfected;
                        document.getElementById('newDeath').innerText = newDeath;
                        document.getElementById('totalDeath').innerText = totalDeath;
                        document.getElementById('newRecovered').innerText = newRecovered;
                        document.getElementById('totalRecovered').innerText = totalRecovered;
                        inputCountry.value = "";
                    }
                }
            })
    }
}
// search by search button
searchCounry.addEventListener("click", function() {
    inputFunction();
});
//search by keypress
inputCountry.addEventListener('keypress', setQuery);

function setQuery(event) {
    if (event.keyCode == 13) {
        inputFunction();
    }
}
// load Data of global
fetch("https://api.covid19api.com/summary")
    .then(response => response.json())
    .then(result => {
        const newInfected = result.Global.NewConfirmed;
        const newDeath = result.Global.NewDeaths;
        const newRecovered = result.Global.NewRecovered;
        const totalInfected = result.Global.TotalConfirmed;
        const totalDeath = result.Global.TotalDeaths;
        const totalRecovered = result.Global.TotalRecovered;
        const date = result.Date;
        console.log(result);

        document.getElementById('newInfected').innerText = newInfected;
        document.getElementById('totalInfected').innerText = totalInfected;
        document.getElementById('newDeath').innerText = newDeath;
        document.getElementById('totalDeath').innerText = totalDeath;
        document.getElementById('newRecovered').innerText = newRecovered;
        document.getElementById('totalRecovered').innerText = totalRecovered;
        document.getElementById('date').innerText = date;
    })