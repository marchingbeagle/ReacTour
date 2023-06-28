import { useState } from "react";
import Banner from "components/Banner";
import BannerAside from "components/BannerAside";
import CardList from "components/CardList";
import MainSectionHeader from "components/MainSectionHeader";
import tripsList from "../trips.json";

export default function Home() {
  const handleSelect = (event) => {
    setContinent(event.target.value);
  };

  const [filterContinent, setContinent] = useState("Filter");

  return (
    <div className="w-full font-default">
      <Banner />
      <main className="px-8 md:px-16">
        <MainSectionHeader
          tripsList={tripsList}
          handleSelect={handleSelect}
          filterContinent={filterContinent}
        />
        <section className="sm-gap4 flex flex-col md:flex-row md:gap-12 pb-8">
          <BannerAside />
          <CardList tripsList={tripsList} filterContinent={filterContinent} />
        </section>
      </main>
    </div>
  );
}
