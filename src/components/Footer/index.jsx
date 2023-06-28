import { animateScroll as scroll } from "react-scroll";
import { AiFillGithub } from "react-icons/ai";
import Logo from "components/Logo";

const scrollToTop = () => {
  scroll.scrollToTop({
    duration: 500, // Duration of the scroll animation in milliseconds
    smooth: "easeInOutQuart", // Easing function to control the scroll animation
  });
};

function Footer() {
  return (
    <footer className="bg-purple flex gap-4 flex-col items-center py-8 md:px-8 md:flex-row md:justify-between ">
      <div onClick={scrollToTop} className="w-fit">
        <Logo />
      </div>
      <a
        className="flex text-white gap-2 md:text-md items-center font-bold"
        href="https://github.com/marchingbeagle"
        target="blank"
      >
        Developed by MarchingBeagle
        <AiFillGithub size={30} />
      </a>
    </footer>
  );
}

export default Footer;
