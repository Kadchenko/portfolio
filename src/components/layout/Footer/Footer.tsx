import Linkedin from '@assets/icons/linkedin.svg';
import Github from '@assets/icons/github.svg';
import Instagram from '@assets/icons/instagram.svg';

const Footer = () => {
  return (
    <div className="container flex flex-wrap items-end justify-between gap-4 py-4">
      <div className="text-body-2">
        <p>T: +380974161838</p>
        <p>E: dmitry.kadchenko@gmail.com</p>
      </div>
      <div className="flex justify-between gap-4">
        <a href="https://www.linkedin.com/in/kadchenko/" target="_blank">
          <Linkedin />
        </a>
        <a href="https://github.com/Kadchenko" rel="noreferrer" target="_blank">
          <Github />
        </a>
        <a href="https://www.instagram.com/kadchenko.d/" target="_blank">
          <Instagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
