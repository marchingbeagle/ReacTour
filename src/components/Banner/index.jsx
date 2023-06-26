import { AiOutlineSearch } from "react-icons/ai";

export default function Banner() {
  return (
    <section className="p-4 sm:p-48 h-5/10 sm:2/5 bg-[url('components/Banner/banner.jpg')] bg-cover flex flex-col sm:flex-row justify-between sm:items-center mb-4">
      <div>
        <p className="text-[#fff] text-[40px] sm:text-[48px] tracking-tighter drop-shadow-xl py-5">
          Find{" "}
          <strong>
            <i>Adventures,</i>{" "}
          </strong>
          you want to talk about
        </p>
        <div className="flex ">
          <input
            type="text"
            className="w-full p-4 rounded-l-lg"
            placeholder="Search the best places"
          />
          <a href="" className=" bg-green rounded-r">
            <AiOutlineSearch className="text-6xl p-4 cursor-pointer hover:scale-125 transition-all " />
          </a>
        </div>
      </div>
      <a
        href="/"
        className="text-[#fff] bg-black/[.2] px-4 py-2 hover:translate-y-2 transition-all w-fit"
      >
        How it works
      </a>
    </section>
  );
}
