

import React, { useState } from "react";
import Modal from "react-modal";



const Country = ({ country, handleVisitedCountries }) => {
  const { name, capital } = country;
  // console.log(country);
  const bgClasses = ["bg-red"];

  const [visited, setVisited] = useState(false);
  const [bgcolor, setBgcolor] = useState("");

  const [modalIsOpen, setmodalIsOpen] = useState(false);

  // usestate for flag modal
  const [isModalOpen, setIsModalOpen] = useState(false);



  const handleVisit = () => {
  
    if (!visited) {
      const randomColor =
        bgClasses[Math.floor(Math.random() * bgClasses.length)];

      setBgcolor(randomColor);
    }
    setVisited(!visited);

    handleVisitedCountries(country);
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
          Country Name: <span style={{ color: "lime" }}>{name.common}</span>
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

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px",
          }}
        >
          <button
            onClick={handleVisit}
            style={{
              backgroundColor: !visited ? "red" : "green",
            }}
          >
            {visited ? "Visited" : "Not Visited"}
          </button>
          {/* modal button */}
          <button
            style={{ backgroundColor: "greenyellow" }}
            onClick={openModal}
          >
            Details
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{ backgroundColor: "skyblue" }}
            onClick={() => setIsModalOpen(true)}
          >
            View Flag
          </button>
        </div>
      </div>
      {/* Country Details Modal */}

      

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Country Details"
      >
        <div className="custom-modal">
          <div className="modal-content">
            {/* Left Info Section */}
            <div className="modal-info">
              <h2>
                Official Name:{" "}
                <span style={{ fontSize: "15px" , color: "lime"}}>
                  {country.name.official}
                </span>
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
                <strong>Alt Spellings:</strong>{" "}
                {country.altSpellings?.join(", ")}
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

            <div className="img-and-btn-section">
              {/* Right Image Section */}
              <div className="modal-image">
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

              <div className="modal-footer-btn-div">
                <button className="close-btn " onClick={closeModal}>
                  {" "}
                  ❌ Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
      </Modal>

      {/* country flag modal */}

      {isModalOpen && (
        <div className="custom-modal" onClick={() => setIsModalOpen(false)}>
          <div className="flag-modal-content">
            <h2>{name.common}'s Flag</h2>
            <img
              src={country.flags.png}
              alt={`Flag of ${name.common}`}
              className="modal-flag"
            />
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              ❌ Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
