import { BiSad } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const goBack = useNavigate();

  return (
    <section className="flex items-center justify-center flex-col grow">
      <h1 className="text-7xl border-b-2 border-purple mb-3">404</h1>
      <div className="flex items-center text-2xl mb-4 justify-center gap-2">
        <h2>Ops! Page not found</h2>
        <BiSad />
      </div>
      <div className="text-black">
        <p>Are you sure this is what you were looking for?</p>
        <p>Don't worry, you can click the button to go back</p>
      </div>
      <button
        className="mt-2 px-6 py-2 rounded-lg uppercase font-bold bg-green text-white"
        onClick={() => goBack("/")}
      >
        Go back
      </button>
    </section>
  );
}

export default ErrorPage;
