import { useParams } from "react-router-dom";
import { LoadTripsContext } from "context/LoadTripsContext";
import { useContext } from "react";
import FavoriteHeart from "components/Card/FavoriteHeart";

export default function Trips() {
  const { id } = useParams();
  const { trips } = useContext(LoadTripsContext);
  const currentTrip = trips.find((trip) => trip.id === id);

  return (
    <div className="grow">
      <main>
        <header>
          <div className="h-12 bg-gray-200 flex items-center">
            {currentTrip.continent}
          </div>
          <div className="flex items-center gap-3 text-2xl pt-4">
            <h1 className="">{currentTrip.name_of_place}</h1> -
            <h2 className="text-lg">{currentTrip.country}</h2>
          </div>
        </header>
        <section className="">
          <img src={currentTrip.path} alt="ds" />
          <span>{currentTrip.time_of_trip}</span>
          <span>{currentTrip.number_of_people}</span>
          <FavoriteHeart trip={currentTrip} />
        </section>
      </main>
    </div>
  );
}
