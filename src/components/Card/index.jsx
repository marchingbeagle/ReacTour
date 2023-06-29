import { AiOutlineClockCircle, AiFillFire } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import FavoriteHeart from "./FavoriteHeart";

export default function Card({ trip }) {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <li className="rounded-lg text-black shadow-md hover:-translate-y-3 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <Link to={`/trips/${trip.id}`} onClick={scrollToTop}>
        <img
          className="w-fit rounded-t-lg md:w-fit hover:scale-110 transition-all duration-300"
          src={trip.path}
          alt={trip.name_of_place}
        />
      </Link>
      <main className="flex flex-col p-4">
        <header className=" mb-2 flex items-center gap-1 text-lg">
          {trip.hot && <AiFillFire className="text-2xl text-red" />}
          <h3>{trip.name_of_place}</h3>
        </header>
        <span className="text-gray-600">{trip.country}</span>
        <ul className="flex-grow">
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
        <footer className="mt-4 flex items-center justify-between border-t-2 pt-1">
          <FavoriteHeart trip={trip} />
          <span className="text-lg md:text-md font-bold uppercase text-red">{`from: $${trip.price}`}</span>
        </footer>
      </main>
    </li>
  );
}
