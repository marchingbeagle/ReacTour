import { MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HamburguerMenu({ setOpen, open }) {
  return (
    <div
      onClick={() => setOpen(!open)}
      className="absolute right-8 top-6 cursor-pointer text-3xl text-white md:hidden"
    >
      {open ? <MdOutlineClose /> : <GiHamburgerMenu />}
    </div>
  );
}
