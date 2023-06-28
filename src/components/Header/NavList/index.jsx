import { NavLink } from "react-router-dom";
import HeaderButton from "../HeaderButton";

export default function NavList({ open }) {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Contact us", link: "contactus" },
    { name: "About us", link: "aboutus" },
  ];

  return (
    <nav>
      <ul
        className={`absolute left-0 z-[-100] mt-4 flex w-full flex-col items-start gap-4 bg-purple pb-4 pl-5 pt-6 transition-all duration-500 sm:pl-0 sm:pt-0 md:static md:z-auto md:flex-row md:items-center md:gap-10 ${
          open ? "top-10" : "top-[-500px]"
        } `}
      >
        {Links.map((link, index) => (
          <li key={index} className="text-md uppercase text-white">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? " transition-colors hover:bg-green duration-500 rounded-lg border-2"
                  : ""
              }
              style={{ padding: "0.5rem 1rem" }}
              to={link.link}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
        <HeaderButton />
      </ul>
    </nav>
  );
}
