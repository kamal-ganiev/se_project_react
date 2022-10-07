/// Importing Daytime Backgrounds \\\

import clearDay from "../images/WeatherCard/Daytime/__clear.jpg";
import cloudyDay from "../images/WeatherCard/Daytime/__cloudy.jpg";
import rainDay from "../images/WeatherCard/Daytime/__rain.jpg";
import snowDay from "../images/WeatherCard/Daytime/__snow.jpg";
import stormDay from "../images/WeatherCard/Daytime/__storm.jpg";
import fogDay from "../images/WeatherCard/Daytime/__fog.jpg";

/// Importing Nighttime Backgrounds \\\

import clearNight from "../images/WeatherCard/Nighttime/__clear.jpg";
import cloudyNight from "../images/WeatherCard/Nighttime/__cloudy.jpg";
import rainNight from "../images/WeatherCard/Nighttime/__rain.jpg";
import snowNight from "../images/WeatherCard/Nighttime/__snow.jpg";
import stormNight from "../images/WeatherCard/Nighttime/__storm.jpg";
import fogNight from "../images/WeatherCard/Nighttime/__fog.jpg";

/// Default Clothing Array \\\

const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/cap.jpg?etag=cf33d6ac81f0613c13a5c403fc7c62da",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/hoodie.jpg?etag=1f3d3c1a154f7a9e07bd78a8f6952d9e",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/jacket.jpg?etag=e2e17fc1352115d2e59511b380fccae9",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/sneakers.jpg?etag=56322fb0e0f745439c1d344c253c6855",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/t-shirt.jpg?etag=0f94f1c569bd19d95860902fcc5c70b3",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/winter-coat.jpg?etag=2a959245bf5291c50cdbd4fcefb25a21",
  },
  {
    _id: 6,
    name: "Winter socks",
    weather: "cold",
    link: "https://images.unsplash.com/photo-1632754067694-b7594fcc1509?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=979&q=80",
  },
];

/// Night Time Background Object \\\

const night = {
  clear: clearNight,
  cloudy: cloudyNight,
  rain: rainNight,
  snow: snowNight,
  storm: stormNight,
  fog: fogNight,
};

/// Day Time Background Object \\\

const day = {
  clear: clearDay,
  cloudy: cloudyDay,
  rain: rainDay,
  snow: snowDay,
  storm: stormDay,
  fog: fogDay,
};

/// Current Date \\\

const currentDate = new Date().toLocaleString("en-EN", {
  month: "long",
  day: "numeric",
});

export { night, day, currentDate, defaultClothingItems };
