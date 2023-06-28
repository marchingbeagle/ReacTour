import { MdTravelExplore } from "react-icons/md";

export default function Logo() {
  return (
    <div className="flex items-center bg-purple p-4 text-3xl text-white">
      <MdTravelExplore className="drop-shadow" />
      <h1 className="text-inter drop-shadow">ReacTour</h1>
    </div>
  );
}
