import React, { use } from "react";
import Country from "../Country/Country";


const Countries = ({ promiseCountries }) => {
  const countries = use(promiseCountries);
  // console.log(countries)
  return (
    <div>
      <h3>Total Country in the world: {countries.length}</h3>
      <div className="gridcomponent">
        {countries.map((country) => (
          <Country key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
