import { MdTravelExplore } from "react-icons/md";
import { useState } from "react";
import NavList from "./NavList";
import HamburguerMenu from "./HamburguerMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-purple shadow-lg sticky top-0 flex flex-col md:flex-row items-start sm:items-center justify-between p-4 lg:px-48 md:py-4 md:px-16 z-40">
      <a
        href="/"
        className="flex items-center text-3xl text-white cursor-pointer bg-purple"
      >
        <MdTravelExplore className="drop-shadow" />
        <h1 className="text-inter drop-shadow">ReacTour</h1>
      </a>

      <HamburguerMenu open={open} setOpen={setOpen} />
      <NavList open={open} />
    </header>
  );
}
