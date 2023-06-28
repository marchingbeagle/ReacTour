import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "components/Card";
import ShowMoreButton from "./SeeMoreButton";

export default function CardList({ tripsList, filterContinent }) {
  const [trips, setTrips] = useState([...tripsList]);
  const [seeMore, setMore] = useState(false);

  useEffect(() => {
    filterContinent !== "Filter" ? setMore(true) : setMore(false);
  }, [filterContinent]);

  const updateFavorite = (id) => {
    setTrips(
      trips.map((trip) => {
        trip.id === id && (trip.favorite = !trip.favorite);
        return trip;
      })
    );
  };

  const renderCard = (trip) => {
    return <Card key={trip.id} trip={trip} updateFavorite={updateFavorite} />;
  };

  return (
    <ul className="grid w-full grid-rows-2 gap-4 sm:grid-cols-2 md:w-2/3 lg:grid-cols-3 xl:grid-cols-4">
      {trips.map((trip, index) => {
        trip.id = uuidv4();
        return index > (seeMore ? index : 7)
          ? null
          : filterContinent === "Filter"
          ? renderCard(trip)
          : filterContinent === trip.continent && renderCard(trip);
      })}

      <ShowMoreButton
        seeMore={seeMore}
        setMore={setMore}
        filterContinent={filterContinent}
      />
    </ul>
  );
}
