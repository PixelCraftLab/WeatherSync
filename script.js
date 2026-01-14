const button = document.querySelector('.button');
const input = document.getElementById('city-input');

const cityName = document.getElementById('city-name');
const cityLocaltime = document.getElementById('city-localtime');
const cityTemp = document.getElementById('city-temp');

async function fetchWeatherData(cityname){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=2d0fb2f0ac8749edb3c90208261101&q=${cityname}&aqi=yes`);
    return await promise.json(); 
};

button.addEventListener('click',async (e)=>{
    e.preventDefault();
    const cityname = input.value;
    const result= await fetchWeatherData(cityname);
    cityName.innerText = result.location.name;
    cityLocaltime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
});

//http://api.weatherapi.com/v1/current.json?key=2d0fb2f0ac8749edb3c90208261101&q=London&aqi=yes