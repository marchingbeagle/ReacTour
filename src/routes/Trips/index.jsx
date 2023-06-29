import { useParams } from "react-router-dom";
import { LoadTripsContext } from "context/LoadTripsContext";
import { useContext } from "react";
import FavoriteHeart from "components/Card/FavoriteHeart";
import HotTrips from "components/HotTrips";
import { AiFillFire } from "react-icons/ai";

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
            <h1>{currentTrip.name_of_place}</h1> -
            <h2 className="text-lg">{currentTrip.country}</h2>
          </div>
        </header>
        <section>
          <img
            src={currentTrip.path}
            alt={`A photo of ${currentTrip.name_of_place}`}
          />
          <span>{currentTrip.time_of_trip}</span>
          <span>{currentTrip.number_of_people}</span>
          <FavoriteHeart trip={currentTrip} />
        </section>
        <section className="flex flex-col items-center justify-center w-5/6 sm:w-2/3 m-auto my-4">
          <h1 className="text-2xl text-gray-700 my-4 py-2 border-t-2 border-red uppercase flex items-center gap-2">
            Find the hottest trips
            <AiFillFire className="text-red" />
          </h1>
          <HotTrips pageId={id} />
        </section>
      </main>
    </div>
  );
}
