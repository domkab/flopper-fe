import clsx from "clsx";
import { Link } from "react-router-dom";

interface FooterCopyrightProps {
  footerLogo: string;
  spaceBottomClass?: string;
  colorClass?: string;
}

const FooterCopyright: React.FC<FooterCopyrightProps> = ({
  footerLogo,
  spaceBottomClass,
  colorClass
}) => {
  return (
    <div className={clsx("copyright", spaceBottomClass, colorClass)}>
      <div className="footer-logo">
        <Link to={import.meta.env.VITE_PUBLIC_URL + "/"}>
          <img alt="" src={import.meta.env.VITE_PUBLIC_URL + footerLogo} />
        </Link>
      </div>
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://hasthemes.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Flone
        </a>
        .<br /> All Rights Reserved
      </p>
    </div>
  );
};

export default FooterCopyright;
