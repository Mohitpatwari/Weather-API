//Weather Api Fetch 
const apikey="d6c1c5bcdcbb37abf8dc8829ab2af731";
const Url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
//Selection of elements
const search=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button")
const weathericon=document.querySelector(".weather-icon")

//Asynchoronous function for intput cityname
async function checkweather(cityname){
    const response=await fetch(Url + cityname + `&appid=${apikey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }

    var data =await response.json();
    document.querySelector(".temperature").innerHTML=Math.round(data.main.temp) + "°c";
    document.querySelector(".cityname").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
    
    //Adding current status of the place searched
    if(data.weather[0].main=="Clouds"){
    weathericon.src="weather-app-img/images/clouds.png"
    }
    else if(data.weather[0].main=="Snow"){
        weathericon.src="weather-app-img/images/snow.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src="weather-app-img/images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src="weather-app-img/images/mist.png"
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="weather-app-img/images/rain.png"
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src="weather-app-img/images/clear.png"
    }
    else {
        weathericon.src="weather-app-img/images/clear.png"
    }
    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none"
}
//EventListner for search button
searchbtn.addEventListener("click",()=>{
    checkweather(search.value);
})
