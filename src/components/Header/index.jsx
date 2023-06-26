import { MdTravelExplore } from "react-icons/md";

export default function Header() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Find your trip", link: "/" },
    { name: "Discounts", link: "/" },
    { name: "Contacs", link: "/" },
    { name: "About us", link: "/" },
  ];

  return (
    <header className="w-full bg-purple shadow-lg sticky top-0 flex flex-col md:flex-row items-start sm:items-center justify-between p-4 lg:px-48 md:py-4 md:px-16">
      <a
        href="/"
        className="flex items-center text-3xl text-white cursor-pointer"
      >
        <MdTravelExplore />
        <h1 className="text-inter">ReacTour</h1>
      </a>
      <nav>
        <ul className="flex gap-4 md:gap-10 flex-col md:flex-row items-start mt-4 pb-4 pl-5 sm:pl-0 absolute md:static bg-purple w-full left-0 md:z-auto">
          {Links.map((link, index) => (
            <li key={index} className="text-white text-md uppercase">
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
