import CardFilter from "components/CardFilter";

function MainSectionHeader({ tripsList, handleSelect, filterContinent }) {
  return (
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
  );
}

export default MainSectionHeader;
