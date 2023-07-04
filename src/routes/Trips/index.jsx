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
        <section className=" m-auto md:flex p-4 md:p-0 md:items-center md:w-2/3">
          <div className="w-fit pb-8">
            <div className="flex items-center gap-3 text-2xl py-4">
              <h1>{currentTrip.name_of_place}</h1> -
              <h2 className="text-lg">{currentTrip.country}</h2>
            </div>
            <img
              className="rounded-t-xl"
              src={currentTrip.path}
              alt={`A photo of ${currentTrip.name_of_place}`}
            />
            <div className="flex py-2 justify-between sm:gap-4 shadow-md p-2 rounded-b-xl">
              <FavoriteHeart trip={currentTrip} />
              <div className="flex gap-2">
                <span>{currentTrip.time_of_trip} trip</span>
                <span className="border-l-2 border-purple pl-2">
                  {currentTrip.number_of_people} people
                </span>
              </div>
            </div>
          </div>
          <span className="md:w-2/3 md:p-8">{currentTrip.details}</span>
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
