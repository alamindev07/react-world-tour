// Modal.setAppElement('#root');
import { Suspense } from "react";
import "./App.css";

import Countries from "./Components/Countries/Countries";
import { ClipLoader    } from "react-spinners";





const promiseCountries = fetch("https://restcountries.com/v3.1/all").then(
  (res) => res.json()
);




function MainContent() {
  return (
    <>
      {/* Centered Top-Level Heading */}
     <div style={{ textAlign: "center" }}>
     <h2> 🌍ঘরে বসে বিশ্ব ভ্রমণ
     (Travel the world while sitting at home)✈️</h2>
     <h4>Explore all countries details in here</h4>
     </div>

      {/* Flex Container for Text + Image */}
      <div 
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px"
        }}
      >
        <div>
          <h1>Visited countries:</h1>
        </div>

        <img
          src="/src/assets/alamin.jpg" // ✅ Make sure the image path is correct
          alt="Profile Image"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>

      <Countries promiseCountries={promiseCountries}></Countries>
    </>
  );
}

function App() {
  return (
    <>
      <Suspense
        // fallback={
        //   <div style={{ display: "flex", justifyContent: "center" }}>
        //     <div className="spinner">Loading...</div>
        //   </div>
        // }
        fallback ={ <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
        <ClipLoader    size={50} color="#007bff" />Loading...
      </div>}
      >
        <MainContent></MainContent>
      </Suspense>
    </>
  );
}

export default App;
