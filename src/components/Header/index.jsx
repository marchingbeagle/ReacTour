import { useState } from "react";
import NavList from "./NavList";
import HamburguerMenu from "./HamburguerMenu";
import Logo from "components/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 flex w-full flex-col items-start justify-between bg-purple shadow-xl sm:items-center md:flex-row md:px-16 md:py-4 lg:px-48">
      <Logo />
      <HamburguerMenu open={open} setOpen={setOpen} />
      <NavList open={open} />
    </header>
  );
}
