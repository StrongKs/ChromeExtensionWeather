document.addEventListener('DOMContentLoaded', function() {
    // Replace 'YOUR_API_KEY' with your actual API key from WeatherAPI.com
    const apiKey = '5b842f67d2msh1fad4478870c15ep1ac4c1jsn6b5cee70fdae';
    const city = 'TEXAS';
  
    // Construct the API request URL
    const apiUrl = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
  
    // Fetch weather data from the API
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    })
      .then(response => response.json())
      .then(data => {
        // Update the table with the fetched data
        document.getElementById('local').textContent = data.location.localtime;
        document.getElementById('name').textContent = data.location.name;
        document.getElementById('temp_f').textContent = data.current.temp_f;
        document.getElementById('text').textContent = data.current.condition.text;
      })
      .catch(error => console.error(error));
  });