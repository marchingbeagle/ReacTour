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

  const [seeMore, setMore] = useState(false);

  const seeMoreHandler = () => {
    return setMore(!seeMore);
  };
  // w-9/10 flex h-fit flex-wrap justify-center gap-4 sm:w-auto
  return (
    <ul className="grid w-full grid-rows-2 gap-4 sm:grid-cols-3 md:w-2/3 lg:grid-cols-4">
      {trips.map((trip, index) => {
        trip.id = uuidv4();
        return index > (seeMore ? index : false || 7) ? null : (
          <Card key={trip.id} trip={trip} updateFavorite={updateFavorite} />
        );
      })}
      <li>
        <button
          onClick={seeMoreHandler}
          className=" mb-8 rounded-lg bg-green px-20 py-4 font-bold tracking-wider text-white shadow"
        >
          {`${seeMore ? "Show less" : "Show more"}`}
        </button>
      </li>
    </ul>
  );
}
