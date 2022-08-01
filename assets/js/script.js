// API key
var airQualityAPIkey = "4929c896-1465-4dd5-927c-6506a0034f03";
var airResults = document.getElementById("air-results");
//buttons
let search = document.querySelector("#check");
let hospitalFinder = document.querySelector("#find");
//hospital data inputs
let nameOne = document.querySelector(".name1");
let distanceOne = document.querySelector(".distance1")
let contactOne = document.querySelector(".contact1");
let nameTwo = document.querySelector(".name2");
let distanceTwo = document.querySelector(".distance2")
let contactTwo = document.querySelector(".contact2");
let nameThree = document.querySelector(".name3");
let distanceThree = document.querySelector(".distance3")
let contactThree = document.querySelector(".contact3");
//location data
let lat1;
let lon1;
let lat2;
let lon2;

let cityName;

//current air quality element
let airQualityConditions = document.querySelector("#air-q");

//use Geolocation API to get user location on entering site
function getGeolocation() {
    if (navigator.geolocation) {
        console.log('geolocation available');
        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position);
        });
    }
}
getGeolocation();
    


function getAirQuality() {
    let requestUrl = `http://api.airvisual.com/v2/city?city=${cityName}&state=${stateInput}&country=USA&key=${airQualityAPIkey}`;
    
    fetch(requestUrl)
    .then(function(response) {
        return response.json()
    }).then(function(data) {
        storeAir(data);
        
        return (data);       
    })
    return;
}

// store air quality in local storage
function storeAir(data) {
    let aqius = data.data.current.pollution.aqius;
    let mainus = data.data.current.pollution.mainus;

    let currentCityScore = {
        aqi: aqius,
        main: mainus
    };
    localStorage.setItem(cityName, JSON.stringify(currentCityScore));
};


//get nearest city data 
function getLocalAir(){
    
    let localURL = `http://api.airvisual.com/v2/nearest_city?key=${airQualityAPIkey}`;

    fetch (localURL)
    .then(function(response) {
        return response.json()
    }).then(function(data2) {
        console.log(data2);
        storeLocalAir(data2);
        return (data2);
    })
}

//Store local air quality in local storage
function storeLocalAir(data2) {
    let aqius = data2.data.current.pollution.aqius;
    let mainus = data2.data.current.pollution.mainus;

    let currentCityScore = {
        aqi: aqius,
        main: mainus
    };
    localStorage.setItem(data2.data.city, JSON.stringify(currentCityScore));
};

// function getLife(){
//     let lifeURL = 'https://api.teleport.org/apicities/?search=Palo%20Alto%2C%20California&embed=city%3Asearch-results%2Fcity%3Aitem%2Fcity%3Aurbanarea%2Fua%3Ascores'
//     fetch (lifeURL)
//     .then(function(response) {
//         return response.json()
//     }).then(function(data) {
        
//         console.log(data);
//     })

// }


// event listener on search button
search.addEventListener("click", function(event) {
    cityName = document.querySelector("#search-input").value
    e = document.querySelector("#state-select");
    stateValue = e.options[e.selectedIndex].value;
    stateInput = e.options[e.selectedIndex].text;
    getAirQuality();
    getLocalAir();
    // getLife();
    
});