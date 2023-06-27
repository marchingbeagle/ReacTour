import bannerAside from "components/BannerAside/BannerAside.jpg";
// <img className="mb-4 w-full" src={bannerAside} alt="Mount Everest" />
function BannerAside() {
  return (
    <aside className="w-full bg-[url('components/BannerAside/BannerAside.jpg')] bg-cover bg-no-repeat md:w-1/3"></aside>
  );
}

export default BannerAside;
