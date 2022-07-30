// API key
var airQualityAPIkey = "4929c896-1465-4dd5-927c-6506a0034f03";

//use Geolocation API to get user location on entering site
    const successCallback = (position) => {
        console.log(position)
    }

    const errorCallback = (error) => {
        console.log(error)
    }

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

//current air quality element
let airQualityConditions = $('#air-q');

//get nearest city data (IP geolocation)
// http://api.airvisual.com/v2/nearest_city?key={{YOUR_API_KEY}}

//get nearest city data
//http://api.airvisual.com/v2/nearest_city?lat={{LATITUDE}}&lon={{LONGITUDE}}&key={{YOUR_API_KEY}}

// Event Listener to search Button
// Event Listener to Hospitals
    // Event listener to current location
// Set up Air quality API fetch based on search
// Set up hosipital API  fetch
// Use Local Storage *****
// Save search in local storage to then apply it to the find hospitals??
    // pull 3 closest hospitals initially
    // find closest hosptital
    //https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples

            //Need distance calculator from lats and longs
            //This function uses distance as the crow flies
            

// Add information about poor air quality / images of smog

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



function getAirQuality(){
    console.log ("Button Works");
    // fetch
    // postAirQuality();
}

function getHospitalData(){
    console.log ("This button works too!")
    // fetch
    // postHospitalData();
}


search.addEventListener("click", getAirQuality);

hospitalFinder.addEventListener("click", getHospitalData);
