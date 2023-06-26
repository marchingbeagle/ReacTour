import HeaderButton from "../HeaderButton";

export default function NavList({ open }) {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Find your trip", link: "/" },
    { name: "Discounts", link: "/" },
    { name: "Contacs", link: "/" },
    { name: "About us", link: "/" },
  ];
  return (
    <nav>
      <ul
        className={`flex gap-4 md:gap-10 flex-col md:flex-row items-start md:items-center mt-4 pt-6 sm:pt-0 pb-4 pl-5 sm:pl-0 absolute md:static bg-purple w-full left-0 md:z-auto transition-all duration-500 z-[-100] ${
          open ? "top-10" : "top-[-500px]"
        } `}
      >
        {Links.map((link, index) => (
          <li key={index} className="text-white text-md uppercase">
            <a className="drop-shadow" href={link.link}>
              {link.name}
            </a>
          </li>
        ))}
        <HeaderButton />
      </ul>
    </nav>
  );
}
