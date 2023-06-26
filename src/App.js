import Header from "components/Header";
import CardList from "components/CardList";
import Banner from "components/Banner";

export default function App() {
  return (
    <div className="w-full h-screen">
      <Header />
      <Banner />
      <CardList />
    </div>
  );
}
