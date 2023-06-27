import { AiOutlineSearch } from "react-icons/ai";
import Typed from "react-typed";

export default function Banner() {
  return (
    <section className="h-5/10 sm:2/5 mb-4 flex flex-col justify-between bg-[url('components/Banner/banner.jpg')] bg-cover p-4 sm:flex-row sm:items-center sm:p-48">
      <div>
        <p className="py-5 text-[40px] tracking-tighter text-[#fff] drop-shadow-xl sm:text-[48px]">
          Find
          <strong>
            <i> Adventures, </i>
          </strong>
          you want to talk about
        </p>
        <div className="flex">
          <Typed
            className="w-full text-gray-400 flex rounded-l-lg m-0 "
            strings={[
              "Search for the best places",
              "Search for the best experiences",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
            attr="placeholder"
          >
            <input type="text" className="w-full rounded-l-lg p-4" />
          </Typed>
          <a href="/" className=" rounded-r bg-green">
            <AiOutlineSearch className="cursor-pointer p-4 text-6xl text-white transition-all hover:scale-125 " />
          </a>
        </div>
      </div>
      <a
        href="/"
        className="mt-2 w-fit bg-black/[.5] px-4 py-2 text-[#fff] transition-all hover:translate-y-2 md:mt-0"
      >
        How it works
      </a>
    </section>
  );
}
