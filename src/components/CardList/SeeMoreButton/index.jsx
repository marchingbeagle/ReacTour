function ShowMoreButton({ seeMore, setMore, filterContinent }) {
  const seeMoreHandler = () => {
    return setMore(!seeMore);
  };

  return (
    <li>
      <button
        onClick={seeMoreHandler}
        className={` mb-8 rounded-lg bg-green px-20 py-4 font-bold tracking-wider text-white shadow ${
          filterContinent !== "Filter" && "hidden"
        }`}
      >
        {`${seeMore ? "Show less" : "Show more"}`}
      </button>
    </li>
  );
}

export default ShowMoreButton;
