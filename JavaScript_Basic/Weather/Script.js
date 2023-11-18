function getWeather() {
    
    const apiKey = 'ebd909def32d427d00b08b0af109ded3';  //api 
    const cityInput = document.getElementById('search').value; //input box
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`; 

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherResult = document.getElementById('weatherResult');

            if (data.cod === '404') {
                // City not found
                weatherResult.innerHTML = `<p>City not found. Please enter a valid city name.</p>`;
            } else {
                // Display weather information city name, description, image 
                const weatherDescription = data.weather[0].description;
                const temperature = data.main.temp;
                const cityName = data.name;

                weatherResult.innerHTML = `
                <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""> 
        </div>
                    <p>Weather in ${cityName}: ${weatherDescription}</p>
                    <h2>Temperature: ${temperature} &#8451;</h2>
                `;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}