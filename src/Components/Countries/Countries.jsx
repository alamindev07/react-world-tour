import React, { use, useState } from "react";
import Country from "../Country/Country";
import { FiSearch } from "react-icons/fi";

const Countries = ({ promiseCountries }) => {
  const countries = use(promiseCountries);
  // console.log(countries)

  const [searchText, setSearchText] = useState("");
  // const [query, setQuery] = useState("");

  const handleSearchClick = () => {
    console.log("searchtext value:", searchText);
  };

  const matchedCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredCountries =
    matchedCountries.length > 0 || searchText === ""
      ? matchedCountries
      : countries;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Total Country in Here : {countries.length}</h2>

        <div
          style={{ position: "relative", width: "350px", marginBottom: "20px" }}
        >
          <input
            type="text"
            placeholder="Search by country name..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{
              padding: "15px 40px 15px 15px",
              width: "100%",
              boxSizing: "border-box",
              border: "1px solid green",
              borderRadius: "10px",
              fontSize: "20px",
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearchClick();
            }}
          />
          <p
            onClick={handleSearchClick}
            style={{
              position: "absolute",
              right: "0px",
              top: "0px",
              // maxHeight: "100%",
              height: "100" ,
              width: "60px",
              border: "node",
              backgroundColor: "transparent",
              // cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FiSearch size={20} color="green" />
          </p>
        </div>
      </div>

      <div className="gridcomponent">
        {filteredCountries.map((country) => (
          <Country key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
