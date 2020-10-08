import React  from "react";

const Weather = (props) => {
  const { weather, cities, changeCity } = props;

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dayDate = new Date().toLocaleDateString('fr-FR', dateOptions);

  const temperature = Math.round(weather.main.temp);
  const minTemperature = Math.round(weather.main.temp_min);
  const maxTemperature = Math.round(weather.main.temp_max);

  const weatherIcon = weather.weather[0].icon;

  const changeCityName = newCity => {
    changeCity(newCity)
  }

  return(
      <div className="weather-container">
        <div className="cities">
          {cities.map(city => (
              <button onClick={() => changeCityName(city)}>{city}</button>
          ))}
        </div>
        <div className="name-and-city">
          <div className="weather-city">{weather.name}</div>
          <div className="weather-date">{dayDate}</div>
        </div>
        <div className="weather-temperatures">
          <div className="weather-temperature">
            <span>Low</span>
            {minTemperature}°
          </div>
          <div className="weather-temperature main-temperature">{temperature}°</div>
          <div className="weather-temperature">
            <span>High</span>
            {maxTemperature}°
          </div>
        </div>
        <div className="weather-icon">
          <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt=""/>
        </div>
      </div>
  )
}

export default Weather;