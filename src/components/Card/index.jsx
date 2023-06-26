import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineClockCircle,
  AiFillFire,
} from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";

export default function Card({ trip, updateFavorite }) {
  return (
    <li className=" rounded-lg text-black shadow-lg">
      <img className="rounded-t-lg" src={trip.path} alt={trip.name_of_place} />
      <div className="p-4">
        <header className="mb-2 flex items-center gap-1 text-lg">
          {trip.hot && <AiFillFire className="text-2xl text-red" />}
          <h3>{trip.name_of_place}</h3>
        </header>
        <span className="text-gray-600">{trip.country}</span>
        <ul>
          <li className="flex items-center gap-2">
            <BsPeopleFill className="text-green" />
            {`${trip.number_of_people} ${
              trip.number_of_people > 1 ? "people" : "person"
            }`}
          </li>
          <li className="flex items-center gap-2">
            <AiOutlineClockCircle className="text-green" /> {trip.time_of_trip}
          </li>
        </ul>
        <footer className="flex items-center justify-between pt-4">
          {trip.favorite ? (
            <AiFillHeart
              className="cursor-pointer text-2xl text-red"
              onClick={() => updateFavorite(trip.id)}
            />
          ) : (
            <AiOutlineHeart
              className="cursor-pointer text-2xl text-gray-400"
              onClick={() => updateFavorite(trip.id)}
            />
          )}
          <span className="text-xl font-bold uppercase text-red">{`from: $${trip.price}`}</span>
        </footer>
      </div>
    </li>
  );
}
