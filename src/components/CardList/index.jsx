import { useEffect, useState, useContext } from "react";
import { LoadTripsContext } from "context/LoadTripsContext";
import { v4 as uuid4 } from "uuid";
import Card from "components/Card";
import ShowMoreButton from "./SeeMoreButton";

export default function CardList({ filterContinent }) {
  const [seeMore, setMore] = useState(false);
  const { trips } = useContext(LoadTripsContext);

  useEffect(() => {
    filterContinent !== "Filter" ? setMore(true) : setMore(false);
  }, [filterContinent]);

  const renderCard = (trip) => {
    return <Card key={uuid4()} trip={trip} />;
  };

  return (
    <ul className="grid w-full grid-rows-2 gap-4 sm:grid-cols-2 md:w-2/3 lg:grid-cols-3 xl:grid-cols-4">
      {trips.map((trip, index) => {
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
