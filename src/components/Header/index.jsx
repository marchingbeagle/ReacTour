import { MdTravelExplore } from "react-icons/md";
import { useState } from "react";
import NavList from "./NavList";
import HamburguerMenu from "./HamburguerMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 flex w-full flex-col items-start justify-between bg-purple shadow-lg sm:items-center md:flex-row md:px-16 md:py-4 lg:px-48">
      <a
        href="/"
        className="flex cursor-pointer items-center bg-purple p-4 text-3xl text-white"
      >
        <MdTravelExplore className="drop-shadow" />
        <h1 className="text-inter drop-shadow">ReacTour</h1>
      </a>

      <HamburguerMenu open={open} setOpen={setOpen} />
      <NavList open={open} />
    </header>
  );
}
