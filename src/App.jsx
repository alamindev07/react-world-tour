import { Suspense } from "react";
import "./App.css";
import Countries from "./Components/Countries/Countries";

const promiseCountries = fetch('https://restcountries.com/v3.1/all')
      .then(res =>res.json())

function App() {
  return (
    <>
      <h1>My world tour</h1>
      <Suspense fallback={<h3>Countries data are loading</h3>}>
        <Countries promiseCountries={promiseCountries}></Countries>
      </Suspense>
    </>
  );
}

export default App;
