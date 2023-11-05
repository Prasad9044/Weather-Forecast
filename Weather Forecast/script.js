let key='80d1236803387ed42464f5236e669c61';
let city=document.getElementById('city');
let desc=document.getElementById('desc');
let windspeed=document.getElementById('windspeed');
let hum=document.getElementById('hum');
let temp=document.getElementById('temp');

function fetchData(){
    let cityname=document.getElementById('cityname').value;
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`;
console.log(api);
    fetch(api)
    .then(repsonse=>repsonse.json())
    .then(data=>
        {
            city.innerHTML=data.name;
            desc.innerHTML=data.weather[0].description;
            updateWeatherGif(data.weather[0].description);
            windspeed.innerHTML=data.wind.speed;
            temp.innerHTML=(data.main.temp-273).toFixed(2);
            hum.innerHTML=data.main.humidity;
        });
}

function updateWeatherGif(weatherDescription) {
    const weatherGif = document.getElementById('weather-gif');

    // Define a mapping of weather descriptions to GIF URLs
    const weatherGifMap = {
        'clear sky': 'https://cdn-icons-png.flaticon.com/128/3222/3222800.png',
        'broken clouds':'https://cdn-icons-png.flaticon.com/128/2698/2698213.png',
        'overcast clouds':'https://cdn-icons-png.flaticon.com/128/1146/1146869.png',
        'smoke':'https://cdn-icons-png.flaticon.com/128/7407/7407744.png',
        'snow':'https://cdn-icons-png.flaticon.com/128/4724/4724107.png',
        'raining':'https://cdn-icons-png.flaticon.com/512/313/313910.png',
        'cloudy':'https://cdn-icons-png.flaticon.com/512/1163/1163736.png',
        'partly cloudy':'https://cdn-icons-png.flaticon.com/512/5903/5903939.png',
        'fog':'https://cdn-icons-png.flaticon.com/128/2930/2930095.png',
        'light rain':'https://cdn-icons-png.flaticon.com/128/3093/3093390.png',
        'few clouds':'https://cdn-icons-png.flaticon.com/128/1163/1163624.png',
        'mist':'https://cdn-icons-png.flaticon.com/128/4005/4005817.png',
        'haze':'https://cdn-icons-png.flaticon.com/128/4151/4151022.png',
    };
    const gifUrl = weatherGifMap[weatherDescription.toLowerCase()];

    weatherGif.src = gifUrl;
}
