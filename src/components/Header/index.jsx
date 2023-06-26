import { MdTravelExplore, MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Header() {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Find your trip", link: "/" },
    { name: "Discounts", link: "/" },
    { name: "Contacs", link: "/" },
    { name: "About us", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-purple shadow-lg sticky top-0 flex flex-col md:flex-row items-start sm:items-center justify-between p-4 lg:px-48 md:py-4 md:px-16 z-10">
      <a
        href="/"
        className="flex items-center text-3xl text-white cursor-pointer bg-purple"
      >
        <MdTravelExplore />
        <h1 className="text-inter">ReacTour</h1>
      </a>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden"
      >
        {open ? <MdOutlineClose /> : <GiHamburgerMenu />}
      </div>
      <nav>
        <ul
          className={`flex gap-4 md:gap-10 flex-col md:flex-row items-start mt-4 pt-6 sm:pt-0 pb-4 pl-5 sm:pl-0 absolute md:static bg-purple w-full left-0 md:z-auto transition-all duration-500 z-[-100] ${
            open ? "top-10" : "top-[-500px]"
          } `}
        >
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
