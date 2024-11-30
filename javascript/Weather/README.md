# Weather App

## Description

This weather app allows users to check the current weather and get a 15-day forecast by entering the name of a country, town, or city. The app fetches weather information from an external API and displays it to the user. It shows essential weather details such as temperature, humidity, wind speed, and forecasts for the next 15 days.

## Features

- **Current Weather:** Displays the current weather conditions for a given location (temperature, humidity, wind speed).
- **15-Day Forecast:** Shows weather forecasts for the next 15 days, including expected temperatures and conditions.
- **Search by City, Town, or Country:** Users can search for any location globally by entering the name of a city, town, or country.

## Technologies Used

- **JavaScript**: Used for the app's logic and fetching data from the weather API.
- **Weather API (e.g., OpenWeatherMap API)**: Retrieves weather data.
- **HTML/CSS**: Used for basic layout and styling of the app.


### Folder Structure

```
/weather-app
  /index.html
  /app.js
  /styles.css
  /README.md
```

## How It Works

1. **Input:** Users enter a location in the search field (city, town, or country).
2. **API Request:** The app makes an API call to the weather service with the user-input location.
3. **Data Fetching:** The weather API returns data such as temperature, humidity, wind speed, and more.
4. **Display:** The app then displays this data on the webpage, showing the current weather and a 15-day forecast.


## Acknowledgments

- [visualCrossin](https://www.visualcrossing.com/weather-forecast/london/us) for providing the API.
- [Odin](https://www.theodinproject.com/paths) for learning more about the language.
