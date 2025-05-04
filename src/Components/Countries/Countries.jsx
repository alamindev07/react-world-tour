import React, { use, useState } from "react";
import Country from "../Country/Country";
import { FiSearch } from "react-icons/fi";

const Countries = ({ promiseCountries, handleVisitedCountries }) => {
  const countries = use(promiseCountries);
  // console.log(countries)

  const [searchText, setSearchText] = useState("");
  // const [query, setQuery] = useState("");

  const matchedCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredCountries =
    matchedCountries.length > 0 || searchText === ""
      ? matchedCountries
      : countries;

  return (
    <div>
      <div className="header-container">
        <h2>Total Country in Here : {countries.length}</h2>

        <div className="search-box">
          <div style={{ position: "relative", width: "100%" }}>
            <input
              type="text"
              placeholder="Search by country name..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={{
                padding: "15px 45px 15px 15px", // leave space for icon
                width: "100%",
                boxSizing: "border-box",
                border: "1px solid green",
                borderRadius: "10px",
                fontSize: "20px",
              }}
            />

            {/* Icon only for visual purpose */}
            <FiSearch
              size={20}
              color="green"
              style={{
                position: "absolute",
                right: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none", // don't block input clicks
              }}
            />
          </div>
        </div>
      </div>

      <div className="card-grid">
        {filteredCountries.map((country) => (
          <Country
            handleVisitedCountries={handleVisitedCountries}
            key={country.cca3}
            country={country}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
