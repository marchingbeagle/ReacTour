function ShowMoreButton({ seeMore, setMore }) {
  const seeMoreHandler = () => {
    return setMore(!seeMore);
  };

  return (
    <li>
      <button
        onClick={seeMoreHandler}
        className=" mb-8 rounded-lg bg-green px-20 py-4 font-bold tracking-wider text-white shadow"
      >
        {`${seeMore ? "Show less" : "Show more"}`}
      </button>
    </li>
  );
}

export default ShowMoreButton;
