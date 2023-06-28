import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        href="https://github.com/aju-z"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500 text-3xl"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://in.linkedin.com/"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500 text-3xl"
      >
        <AiFillLinkedin />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
