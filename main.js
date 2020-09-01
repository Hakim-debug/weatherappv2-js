const api = {
    key: "ce816f05cd3694105d0578a25ddf80f8", baseurl: "https://api.openweathermap.org/data/2.5"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener( 'keypress', setQuery );

function setQuery(evt) {
    if (evt.keyCode == 13) {
        // getResults(searchbox.value);
        console.log(searchbox.value);

    }
}
   
function getResults (query) {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);


    }
    
function displayResults (weather) {
        console.log(weather);
        let city = document.querySelector(' .location.city');
        city.innerText = `${weather.name}, ${weather.sys.country}`;

        let now = new Date();
        let date = document.querySelector('.location .date');
        date.innerText = dateBuilder(now);

        let temp = document.querySelector('.temp');
        temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

        let weather_el = document.querySelector('.weather');
        weather_el.innerText = weather.weather[0].main;

        let hilow = document.querySelector('.hi-low');
        hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
        

    }

    function dateBuilder (d){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", 
    "Septemper", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Thuesday", "Wendsday", "Thursday", "Friday","Satuday"];

    let day = day[d.getDay()];
    let date = date.getDate();
    let month = month[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;




    }

