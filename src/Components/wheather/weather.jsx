import React, { useEffect, useState } from 'react';
import { getData } from '../../Api/index';
function Weather(props) {
  const [citydata, setcityData] = useState(null);
  useEffect(() => {
    async function start() {
      let data = await getData(props.cityid);
      console.log(data);
      setcityData(data);
    }
    start();
  }, []);
  return (
    <div>
      {citydata && (
        <div>
          <h1>
            {citydata.name},{citydata.sys?.country}
          </h1>
          {citydata.weather?.map((w, ind) => (
            <div key={ind}>
              <h3>{w.main}</h3>
              <h4>{w.description}</h4>
            </div>
          ))}
          <h5>{citydata.main.temp} Celsius</h5>
        </div>
      )}
    </div>
  );
}

export default Weather;
