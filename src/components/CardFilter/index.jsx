import { v4 as uuidv4 } from "uuid";

function CardFilter({ tripsList, handleSelect, value }) {
  const continents = [...new Set(tripsList.map((trip) => trip.continent))];

  return (
    <nav className="self-stretch pt-8 sm:pt-0">
      <ul className="flex items-stretch gap-2">
        <li className="w-2/3">
          <div className="w-full rounded-lg bg-green px-4 py-2 font-bold uppercase text-white ">
            Filter by continent:
          </div>
        </li>
        <li className="w-1/3 ">
          <select
            className="h-full w-full rounded-lg bg-white px-4"
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
