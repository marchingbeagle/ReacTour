import Header from "components/Header";
import CardList from "components/CardList";
import Banner from "components/Banner";
import BannerAside from "components/BannerAside";

export default function App() {
  return (
    <div className="h-screen w-full">
      <Header />
      <Banner />

      <main className="px-8 md:px-16">
        <h2 className="pb-4 pt-8 text-3xl md:pt-16">
          <strong>
            <i>Required </i>
          </strong>
          to Visit
        </h2>
        <section className="flex flex-col md:flex-row">
          <BannerAside />
          <CardList />
        </section>
      </main>
    </div>
  );
}
