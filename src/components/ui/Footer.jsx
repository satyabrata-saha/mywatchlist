import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="text-center w-full mb-8 flex flex-col gap-4 items-center justify-center text-sm sm:text-base">
      <div className="w-full">
        <hr className="my-2 opacity-10" />
        <p>Create by Satyabrata Saha &copy; {new Date().getFullYear()}</p>
      </div>
      <div className="flex gap-4">
        <Link
          href="https://github.com/satyabrata-saha/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-[105%] transition-all duration-200 ease-in-out"
        >
          <FaGithub size={24} />
        </Link>
        <Link
          href="https://x.com/satya_saha_"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-[105%] transition-all duration-200 ease-in-out"
        >
          <FaXTwitter size={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/satyabrata-saha/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-[105%] transition-all duration-200 ease-in-out"
        >
          <FaLinkedin size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
