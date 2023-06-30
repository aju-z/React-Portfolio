import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-50 bg-red p-8">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-xl text-yellow">
            AJEES
          </p>
          <p className="font-opensans text-md text-yellow">
            ©2023 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
