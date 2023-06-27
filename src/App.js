import Header from "components/Header";
import CardList from "components/CardList";
import Banner from "components/Banner";
import BannerAside from "components/BannerAside";
import CardFilter from "components/CardFilter";
import tripsList from "./trips.json";
import { useState } from "react";

export default function App() {
  const handleSelect = (event) => {
    setContinent(event.target.value);
  };

  const [filterContinent, setContinent] = useState("Filter");

  return (
    <div className="h-screen w-full font-default">
      <Header />
      <Banner />

      <main className="px-8 md:px-16">
        <div className="flex flex-col items-start py-4 md:flex-row md:items-center md:justify-between ">
          <h2 className="text-3xl text-gray-500 ">
            <strong className="text-gray-700">
              <i>Required </i>
            </strong>
            to Visit
          </h2>
          <CardFilter
            tripsList={tripsList}
            handleSelect={handleSelect}
            value={filterContinent}
          />
        </div>
        <section className="sm-gap4 flex flex-col md:flex-row md:gap-12">
          <BannerAside />
          <CardList tripsList={tripsList} filterContinent={filterContinent} />
        </section>
      </main>
    </div>
  );
}
