import { LoadTripsContext } from "context/LoadTripsContext";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

function CardFilter({ handleSelect, value }) {
  const { trips } = useContext(LoadTripsContext);
  const continents = [...new Set(trips.map((trip) => trip.continent))];

  return (
    <nav className="self-stretch pt-8 sm:pt-0">
      <ul className="flex items-stretch gap-2">
        <li className="w-2/3">
          <div className="w-full rounded-lg bg-green px-4 py-2 font-bold uppercase text-white ">
            Filter by continent:
          </div>
        </li>
        <li className="w-1/3">
          <select
            className="h-full w-full cursor-pointer rounded-lg bg-white px-4 outline-green transition-all duration-75 sm:hover:outline sm:hover:outline-2 sm:hover:outline-green"
            value={value}
            onChange={(event) => handleSelect(event)}
          >
            <option>Filter</option>
            {continents.map((continent) => (
              <option key={uuidv4()}>{continent}</option>
            ))}
          </select>
        </li>
        <li></li>
      </ul>
    </nav>
  );
}

export default CardFilter;
