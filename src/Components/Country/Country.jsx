import React, { useState } from "react";

const Country = ({ country }) => {
  const { name, capital } = country;
  // console.log(country);
  const bgClasses = ["bg-red"];

  const [visited, setVisited] = useState(false);
  const [bgcolor, setBgcolor] = useState("");

  // const getRandomColor =()=>{
  //   const randomColor = `hsl(${Math.floor(Math.random() * bgClasses.length)}, 70%, 80%)`;
  //   return randomColor
  // }

  const handleVisit = () => {
    // if(visited === true){
    //   setVisited(false)
    // }
    // else{
    //   setVisited(true)
    // }
    if (!visited) {
      const randomColor =
        bgClasses[Math.floor(Math.random() * bgClasses.length)];

      setBgcolor(randomColor);
    }
    setVisited(!visited);
  };

  return (
    <div className={`card ${visited ? bgcolor : ""}`}>
      <div className="card-info">
        <h3>
          Country Name: <span style={{ color: "purple" }}>{name.common}</span>
        </h3>
        <p>Capital: {capital}</p>
        <p>Population: {country.population}</p>
        <p>
          Independent:{" "}
          {country.independent ? (
            <span style={{ color: "green" }}>Free</span>
          ) : (
            <span style={{ color: "red" }}>Not Free Yet</span>
          )}
        </p>
     
      </div>
      <div className="flagImg">
        <img src={country.flags.png} alt={`${name.common} flag`} />
        <button
          onClick={handleVisit}
          style={{
            backgroundColor: !visited ? "red" : "green",
          }}
        >
          {visited ? "Visited" : "Not Visited"}
        </button>
      </div>
    </div>
  );
};

export default Country;
