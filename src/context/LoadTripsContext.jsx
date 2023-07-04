import { createContext, useState } from "react";
import tripsList from "../trips.js";

export const LoadTripsContext = createContext();

export const LoadTripsProvider = ({ children }) => {
  const [trips, setTrips] = useState([...tripsList]);

  return (
    <LoadTripsContext.Provider value={{ trips, setTrips }}>
      {children}
    </LoadTripsContext.Provider>
  );
};
