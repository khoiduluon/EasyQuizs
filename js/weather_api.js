const api_url =
"https://api.openweathermap.org/data/2.5/onecall?lat=10.761532356919506&lon=106.61793029974336&exclude=daily&units=metric&appid=f33e374759fb12e201a504fdcb5674b5";
const api_url2 ='http://api.openweathermap.org/data/2.5/weather?q=vietnam&appid=341979e6dbfb76f15dba6c83937075ce';
async function getWeather() {
const response = await fetch(api_url);
const data = await response.json();
console.log(data);
document.getElementById('weather').textContent = Math.round(data.current.temp) + '°c'; 
document.getElementById('weather-icon').src ='./weather-icon/'+ data.current.weather[0].icon +'@2x.png';

}
getWeather();