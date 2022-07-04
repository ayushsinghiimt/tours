import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tour from "./Tour";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const getTours = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTours(data);
    console.log(data);
  };
  function removeTour(id) {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }
  useEffect(() => {
    getTours();
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading && <Loading />}
      <Tours data={tours} removeTour={removeTour} />
      {tours.length === 0 && (
        <button className="btn" onClick={getTours}>
          refresh
        </button>
      )}
    </>
  );
}

export default App;
