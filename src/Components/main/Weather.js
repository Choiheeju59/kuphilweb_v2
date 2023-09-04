import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [currentHour, setCurrentHour] = useState(new Date().getHours());

  const fetchWeatherData = async () => {
    try {
      const res = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?lat=37.543786&lon=127.073463&lang=kr&appid=c7f2c867ba8c30eb3e96bc0236f31cdf'
      );
      let desc = res.data.weather[0].main;
      let icon;
      let temp = Math.floor((res.data.main.temp - 273.15) * 10) / 10;
      let humidity = res.data.main.humidity;
      let precipitation = 0;
      switch (desc) {
        case "Thunderstorm":
          desc = "뇌우";
          icon = "thunderstorms.svg";
          if (currentHour < 6 || currentHour > 17) {
            icon = "thunderstorms-sunny-night.svg";
          }
          break;

        case "Drizzle":
          desc = "이슬비";
          icon = "drizzle.svg";
          if (currentHour < 6 || currentHour > 17) {
            icon = "drizzle-night.svg";
          }
          break;

        case "Rain":
          desc = "비";
          icon = "drizzle.svg";
          if (currentHour < 6 || currentHour > 17) {
            icon = "drizzle-night.svg";
          }
          break;

        case "Snow":
          desc = "눈";
          icon = "snow.svg";
          break;

        case "Mist":
          desc = "엷은 안개";
          icon = "fog.svg";
          break;

        case "Smoke":
          desc = "연기로 가득 참";
          icon = "fog.svg";
          break;

        case "Haze":
          desc = "안개";
          icon = "fog.svg";
          break;

        case "Fog":
          desc = "짙은 안개";
          icon = "fog.svg";
          break;

        case "Ash":
          desc = "재로 가득 참";
          icon = "fog.svg";
          break;

        case "Dust":
          desc = "먼지 날림";
          icon = "windy.svg";
          break;
          
        case "Sand":
          desc = "황사";
          icon = "windy.svg";
          break;

        case "Squall":
          desc = "스콜";
          icon = "thunderstorms.svg";
          if (currentHour < 6 || currentHour > 17) {
            icon = "thunderstorms-sunny-night.svg";
          }
          break;

        case "Tornado":
          desc = "토네이도";
          icon = "tornado.svg";
          break;

        case "Clear":
          desc = "맑음";
          icon = "sunny.svg";
          if (currentHour < 6 || currentHour > 17) {
            icon = "night.svg";
          }
          break;

        case "Clouds":
          desc = "흐림";
          icon = "mostly-cloudy.svg";
          if (currentHour < 6 || currentHour > 17) {
            icon = "mostly-cloudy-night.svg";
          }
          break;
      }

      if (desc == "비") {
        precipitation = res.data.rain["1h"];
      } else if (desc == "눈") {
        precipitation = res.data.snow["1h"];
      }
      let _weatherData = {
        desc: desc,
        icon: icon,
        temp: temp,
        humidity: humidity,
        precipitation: precipitation,
      }
      setWeatherData(_weatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchWeatherData();

    const interval = setInterval(() => {
      const newHour = new Date().getHours();
      if (newHour !== currentHour) {
        // 시간이 변경될 때마다 API 호출
        setCurrentHour(newHour);
        fetchWeatherData();
      }
    }, 1000);

    return () => {
      clearInterval(interval); // 컴포넌트가 언마운트될 때 인터벌 클리어
    };
  }, [currentHour]);

  const handleReloadWeather = () => {
    setWeatherData(null);
    fetchWeatherData();
  }
  return (
    <StyledWeather>
      {weatherData ? (
        <>
          <WeatherInfo>
            <img src={process.env.PUBLIC_URL + '/images/weather/' +  weatherData['icon']} />
            <p>{weatherData['temp']}°C</p>
            <p>{weatherData['desc']}</p>
            <p style={{fontSize: '12px'}}>(습도 {weatherData['humidity']}%</p>
            <p style={{fontSize: '12px'}}>강수량 {weatherData['precipitation']}mm)</p>
            <svg onClick={handleReloadWeather} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
          </WeatherInfo>
          <WeatherPlace>건국대학교 기준</WeatherPlace>
        </>
      ) : (
        <Loading>
          <img src={process.env.PUBLIC_URL + '/images/main/loading.svg'} />
        </Loading>
      )}
    </StyledWeather>
  );
};

const StyledWeather = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;


  @media screen and (max-width: 767px){
    flex-direction: column;
  }
`;
const WeatherInfo = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  & > img{
    height: 80%;
  }
  & > p{
    width: auto;
    margin-left: 5px;
    white-space: nowrap;
  }
  & > svg{
    margin-left: 10px;
    stroke: black;
    &:hover{
      cursor: pointer;
      stroke: #aaaaaa;
    }
  }
`;
const WeatherPlace = styled.p`
  font-size: 9px;
  width: 100%;
  white-space: nowrap;
  text-align: end;
`;
const Loading = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > img{
    height: 80%;
  }
`;

export default Weather;
