

const weatherElement = document.getElementById('weather');      //Text area of the html page
const get_weather = document.getElementById('get_weather');     //Button of the html page

const get_city = document.getElementById('city');               //Text input box
const city_display = document.getElementById('city_weather')

const cityLength = get_city.value.length                              //To be used to determine if there is anything entered for the city field. 


get_weather.addEventListener('click', getWeather)

//Below function calls the api and gets the weather.  It also stores it in the variable 'data'. 
    async function getWeather() {

       // cityLength = get_city.value.length  
        
        const get_city = document.getElementById('city');               //Text input box
        const myKey = "39a9a737b07b4b703e3d1cd1e231eedc";
        
        const response = await fetch(
            'https://api.openweathermap.org/data/2.5/weather?q='+get_city.value+'&units=imperial&appid='+myKey+'')
       
            const data = await response.json()
        console.log(data)
        console.log(data.message)
       
        addWeatherToPage(data);

        console.log(get_city.value)
        console.log(get_city.value.length)
        //return data;   (Q: would I need to have this line?)
        
    }


//Now that we have the data, we need a way to add the weather to the web page itself. 

function addWeatherToPage (data) {
    const temperature = data.main.temp;
    weatherElement.innerHTML = temperature;
    city_display.innerHTML = get_city.value;
}

    