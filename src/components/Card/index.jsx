import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineClockCircle,
  AiFillFire,
} from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";

export default function Card({ trip, updateFavorite }) {
  return (
    <li className=" shadow-lg rounded-lg text-black">
      <img className="rounded-t-lg" src={trip.path} alt={trip.name_of_place} />
      <div className="p-4">
        <header className="flex gap-1 items-center mb-2">
          {trip.hot && <AiFillFire className="text-red text-2xl" />}
          <h3>{trip.name_of_place}</h3>
        </header>
        <span>{trip.country}</span>
        <ul>
          <li className="flex items-center gap-2">
            <BsPeopleFill />
            {`${trip.number_of_people} ${
              trip.number_of_people > 1 ? "people" : "person"
            }`}
          </li>
          <li className="flex items-center gap-2">
            <AiOutlineClockCircle /> {trip.time_of_trip}
          </li>
        </ul>
        <footer className="pt-4">
          {trip.favorite ? (
            <AiFillHeart
              className="cursor-pointer text-red text-2xl"
              onClick={() => updateFavorite(trip.id)}
            />
          ) : (
            <AiOutlineHeart
              className="cursor-pointer text-2xl"
              onClick={() => updateFavorite(trip.id)}
            />
          )}
        </footer>
      </div>
    </li>
  );
}
