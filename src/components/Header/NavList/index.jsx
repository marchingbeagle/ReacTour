import HeaderButton from "../HeaderButton";

export default function NavList({ open }) {
  const Links = [
    { name: "Home", link: "/" },

    { name: "Discounts", link: "/" },
    { name: "Contacs", link: "/" },
    { name: "About us", link: "/" },
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
