import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useContext } from "react";
import { LoadTripsContext } from "context/LoadTripsContext";

function FavoriteHeart({ trip }) {
  const { trips, setTrips } = useContext(LoadTripsContext);

  const updateFavorite = (id) => {
    setTrips(
      trips.map((currentTrip) => {
        currentTrip.id === id && (currentTrip.favorite = !currentTrip.favorite);
        return currentTrip;
      })
    );
  };

  return trip.favorite ? (
    <AiFillHeart
      className="cursor-pointer text-2xl text-red transtion-all "
      onClick={() => updateFavorite(trip.id)}
    />
  ) : (
    <AiOutlineHeart
      className="cursor-pointer text-2xl text-gray-400 sm:hover:scale-110 sm:hover:translate-y-1 hover:text-red transition-all"
      onClick={() => updateFavorite(trip.id)}
    />
  );
}

export default FavoriteHeart;
