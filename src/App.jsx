// Modal.setAppElement('#root');
import { Suspense, useState } from "react";
import "./App.css";

import Countries from "./Components/Countries/Countries";
import { ClipLoader } from "react-spinners";
import { Lia500Px } from "react-icons/lia";
import Footer from "./Components/Fotter/Footer";

const promiseCountries = fetch("https://restcountries.com/v3.1/all").then(
  (res) => res.json()
);

function MainContent() {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    const isVisited = visitedCountries.some(
      (visited) => visited.cca3 === country.cca3
    );
    if (isVisited) {
      const updateList = visitedCountries.filter(
        (visited) => visited.cca3 !== country.cca3
      );
      setVisitedCountries(updateList);
    } else {
      setVisitedCountries([...visitedCountries, country]);
    }
  };

  return (
    <>
      {/* Centered Top-Level Heading */}
      <div style={{ textAlign: "center" }}>
        <h2>
          {" "}
          🌍ঘরে বসে বিশ্ব ভ্রমণ (Travel the world while sitting at home)✈️
        </h2>
        <h4>Explore all countries details in here</h4>
      </div>

      {/* Flex Container for Text + Image */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div>
          <p>
            If you click the visited button that country will be added here 😊
          </p>
          <h2>Visited countries:{visitedCountries.length}</h2>
          <ol style={{ border: "1px solid purple", borderRadius: "4px" }}>
            {visitedCountries.map((country) => (
              <li key={country.cca3}>{country.name.common}</li>
            ))}
          </ol>
        </div>

        <img
          src="/alamin.jpg"
          alt="Profile Image"
          className="profile-img"
        />
      </div>

      <Countries
        handleVisitedCountries={handleVisitedCountries}
        promiseCountries={promiseCountries}
      ></Countries>
    </>
  );
}

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "100px",
            }}
          >
            <ClipLoader size={50} color="#007bff" />
            Loading...
          </div>
        }
      >
        <MainContent></MainContent>
        <Footer></Footer>
      </Suspense>
    </>
  );
}

export default App;
