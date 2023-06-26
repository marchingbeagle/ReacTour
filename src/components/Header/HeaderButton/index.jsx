import { FaPlus } from "react-icons/fa";

export default function HeaderButton() {
  return (
    <li>
      <a
        href="/"
        className="flex items-center gap-2 rounded-lg bg-green px-4 py-2 font-bold text-white"
      >
        <FaPlus />
        Submit a tour
      </a>
    </li>
  );
}
