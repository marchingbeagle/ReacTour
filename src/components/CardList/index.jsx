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
    <ul className="w-9/10 flex h-fit flex-wrap justify-center gap-4 sm:w-auto">
      {trips.map((trip, index) => {
        trip.id = uuidv4();
        return index > 5 ? null : (
          <Card key={trip.id} trip={trip} updateFavorite={updateFavorite} />
        );
      })}
      <li>
        <button className=" mb-8 rounded-lg bg-green px-20 py-4 font-bold tracking-wider text-white shadow">
          See more
        </button>
      </li>
    </ul>
  );
}
