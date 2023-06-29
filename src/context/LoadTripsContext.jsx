import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import tripsList from "../trips.json";

export const LoadTripsContext = createContext();

export const LoadTripsProvider = ({ children }) => {
  const [trips, setTrips] = useState([...tripsList]);

  useEffect(() => {
    setTrips(
      trips.map((trip) => {
        trip.id = uuidv4();
        return trip;
      })
    );
  }, []);

  return (
    <LoadTripsContext.Provider value={{ trips, setTrips }}>
      {children}
    </LoadTripsContext.Provider>
  );
};
