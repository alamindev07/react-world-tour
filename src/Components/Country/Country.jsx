// import React, { useState } from "react";
// import Modal from "react-modal";

import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "100vh",
    height: "95vh",
    overflowY: "auto", // Prevents vertical scroll inside modal
    transform: "translate(-50%, -50%)",
    backgroundColor: "GhostWhite",
    padding: "20px",
    zIndex: 1000,
  },
};

const Country = ({ country }) => {
  const { name, capital } = country;
  // console.log(country);
  const bgClasses = ["bg-red"];

  const [visited, setVisited] = useState(false);
  const [bgcolor, setBgcolor] = useState("");

  const [modalIsOpen, setmodalIsOpen] = useState(false);

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

  const openModal = () => {
    setmodalIsOpen(true);
  };

  const closeModal = () => {
    setmodalIsOpen(false);
  };

  const getLanguages = (langs) => {
    return langs ? Object.values(langs).join(", ") : "N/A";
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
        <div>
          <img src={country.flags.png} alt={`${name.common} flag`} />
        </div>

        <div style={{display: "flex", justifyContent: "space-between", margin: "20px"}}>
          <button
            onClick={handleVisit}
            style={{
              backgroundColor: !visited ? "red" : "green",
            }}
          >
            {visited ? "Visited" : "Not Visited"}
          </button>
          {/* modal button */}
          <button style={{backgroundColor: "greenyellow"}} onClick={openModal}>Details</button>
        </div>
      </div>
      {/* Country Details Modal */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Country Details"
        style={customStyles}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* Left Info Section */}
          <div style={{ flex: "1 1 60%" }}>
            <h2>
              Official Name:{" "}
              <span style={{ fontSize: "15px" }}>{country.name.official}</span>
            </h2>
            <p>
              <strong>Region:</strong> {country.region}
            </p>
            <p>
              <strong>Subregion:</strong> {country.subregion}
            </p>
            <p>
              <strong>Languages:</strong> {getLanguages(country.languages)}
            </p>
            <p>
              <strong>Capital Info (lat/lng):</strong>{" "}
              {country.capitalInfo?.latlng?.join(", ") || "N/A"}
            </p>
            <p>
              <strong>Car Driving Side:</strong> {country.car?.side || "N/A"}
            </p>
            <p>
              <strong>Landlocked:</strong> {country.landlocked ? "Yes" : "No"}
            </p>
            <p>
              <strong>Alt Spellings:</strong> {country.altSpellings?.join(", ")}
            </p>
            <p>
              <strong>Google Maps:</strong>{" "}
              <a
                href={country.maps?.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </p>
            <p>
              <strong>Area:</strong> {country.area} km²
            </p>
            <p>
              <strong>Timezones:</strong> {country.timezones.join(", ")}
            </p>
            <p>
              <strong>Continents:</strong> {country.continents.join(", ")}
            </p>
            <p>
              <strong>Start of Week:</strong> {country.startOfWeek}
            </p>
          </div>

          {/* Right Image Section */}
          <div style={{ flex: "1 1 35%", textAlign: "center" }}>
            <h3>
              Coat of Arms of{" "}
              <span style={{ color: "green" }}>{country.name.common}</span>
            </h3>
            {country.coatOfArms?.png ? (
              <img
                src={country.coatOfArms.png}
                alt="Coat of Arms"
                style={{
                  width: "100%",
                  maxHeight: "250px",
                  objectFit: "contain",
                }}
              />
            ) : (
              <p>No Image Available</p>
            )}
          </div>
        </div>

        {/* Close Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "30px",
          }}
        >
          <button style={{backgroundColor: "red"}} onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default Country;
