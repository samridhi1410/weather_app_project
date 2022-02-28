import React, { useState } from 'react';
import CitiesData from '../city.list.json/city.list.json';
import { useNavigate } from 'react-router-dom';
function CitySearch({mfunct}) {

  let history = useNavigate();

  const [isShow, setIshow] = useState(false);
  const [cityies, setCities] = useState([]);
  
  const handleTheCitychange = (e) => {
    const city = e.target.value;
    const resultarr = CitiesData.filter((c) =>
      c.name.toLowerCase().startsWith(city)
    );
    setCities(resultarr);

    if (city !== '') {
      setIshow(true);
    } else {
      setIshow(false);
    }
    
  };
const cityclick=(e)=>{
  mfunct(e)
  history("/weather")
}
 

  return (
    <div>
      <input
        type='text'
        placeholder='Enter city name'
        onChange={handleTheCitychange}
      />

      {isShow && (
        <div>
          {cityies.map(
            (city, index) =>
              city && (
                <div key={index} onClick={()=>cityclick(city.id)}>
                  <p>{city.name}</p>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}

export default CitySearch;
