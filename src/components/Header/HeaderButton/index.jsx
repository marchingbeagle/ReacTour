import { FaPlus } from "react-icons/fa";

export default function HeaderButton() {
  return (
    <li>
      <a
        href="/"
        className="flex items-center gap-2 bg-green text-white font-bold py-2 px-4 rounded-lg"
      >
        <FaPlus />
        Submit a tour
      </a>
    </li>
  );
}
