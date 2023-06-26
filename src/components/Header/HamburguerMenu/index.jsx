import { MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HamburguerMenu({ setOpen, open }) {
  return (
    <div
      onClick={() => setOpen(!open)}
      className="text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden"
    >
      {open ? <MdOutlineClose /> : <GiHamburgerMenu />}
    </div>
  );
}
