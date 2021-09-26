# Weather Chrome Extension

## Purpose

Simple and efficient extension to get all your weather information!

A real time detailed weather forecast extension. This worldwide weather extension helps you plan your day and keep yourself safe under the sun. It automatically displays the UV Index / Temperature of your current location, or enter city name to get forecasts for cities around the world. Click the icon and you will get detailed weather data.

## How It Works

The chrome extension uses the [OpenWeather API](https://openweathermap.org/) for getting real time weather information. It also uses [LocationIQ](https://locationiq.com/) for using [reverse geocoding](https://en.wikipedia.org/wiki/Reverse_geocoding) based on the user's current location to get the current weather in the area. It stores OpenWeather's city data in an [AWS S3 Bucket](https://aws.amazon.com/s3/) and pulls that information down to store in chrome's local storage. This is so the search bar is able to provide search results based on what the input. This was all built using [ReactJS](https://reactjs.org/).

## The Chrome Extension

The chrome extension is currently pending review on the chrome web store, but below are some images of how the extension looks.

### The Landing Page
This displays basic current weather information on the currently search location.
<p align="center">
  <img src="https://user-images.githubusercontent.com/56607702/134790285-788dfc59-0e66-4ffd-bb34-a4e222d2427f.png" />
</p>

### The Daily Forecast Page
This gives a daily forecast with information about the weather for each day.
<p align="center">
  <img src="https://user-images.githubusercontent.com/56607702/134790293-c67c0e40-4fb0-44a9-96ec-468bd5ade20c.png" />
</p>

### The Full Report Page
This gives detailed current weather information.
<p align="center">
  <img src="https://user-images.githubusercontent.com/56607702/134790306-42abbee6-1964-4caa-ad4f-958f7aa4972d.png" />
</p>

### The Air Quality Report Page
This says how the air quality is for the current location.
<p align="center">
  <img src="https://user-images.githubusercontent.com/56607702/134790314-1c785d80-edfb-44c7-baca-85cdc5eb7a33.png" />
</p>
