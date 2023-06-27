import Banner from "components/Banner";
import BannerAside from "components/BannerAside";
import CardList from "components/CardList";
import Header from "components/Header";
import MainSectionHeader from "components/MainSectionHeader";
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
        <MainSectionHeader
          tripsList={tripsList}
          handleSelect={handleSelect}
          filterContinent={filterContinent}
        />
        <section className="sm-gap4 flex flex-col md:flex-row md:gap-12">
          <BannerAside />
          <CardList tripsList={tripsList} filterContinent={filterContinent} />
        </section>
      </main>
    </div>
  );
}
