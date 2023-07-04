import { MdTravelExplore } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Logo({ color = "purple" }) {
  return (
    <Link className={`flex items-center bg-${color} p-4 text-3xl text-white`}>
      <MdTravelExplore className="drop-shadow" />
      <h1 className="text-inter drop-shadow">ReacTour</h1>
    </Link>
  );
}
