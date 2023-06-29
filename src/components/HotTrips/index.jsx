import { LoadTripsContext } from "context/LoadTripsContext";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "components/Card";

function HotTrips({ pageId }) {
  const { trips } = useContext(LoadTripsContext);
  let count = 0;
  return (
    <ul className="grid sm:grid-cols-4 grid-rows-1 gap-4 sm:gap-8">
      {trips.map((trip) => {
        if (trip.hot && pageId != trip.id) {
          count++;
          return count <= 4 && <Card key={uuidv4()} trip={trip} />;
        }
        return null;
      })}
    </ul>
  );
}

export default HotTrips;
