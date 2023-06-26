import bannerAside from "components/BannerAside/BannerAside.jpg";

function BannerAside() {
  return (
    <aside className="w-full">
      <img className="mb-4 w-full" src={bannerAside} alt="Mount Everest" />
    </aside>
  );
}

export default BannerAside;
