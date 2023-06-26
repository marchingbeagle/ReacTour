import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "components/Card";
import tripsList from "./trips.json";

export default function CardList() {
  const [trips, setTrips] = useState([...tripsList]);

  const updateFavorite = (id) => {
    setTrips(
      trips.map((trip) => {
        trip.id === id && (trip.favorite = !trip.favorite);
        return trip;
      })
    );
  };

  return (
    <ul className="flex flex-wrap gap-4 w-4/5 m-auto">
      {trips.map((trip) => {
        trip.id = uuidv4();
        return (
          <Card key={trip.id} trip={trip} updateFavorite={updateFavorite} />
        );
      })}
    </ul>
  );
}
