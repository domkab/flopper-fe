import clsx from "clsx";
import { Link } from "react-router-dom";

interface LogoProps {
  imageUrl: string;
  logoClass?: string;
}

const Logo: React.FC<LogoProps> = ({ imageUrl, logoClass }) => {
  return (
    <div className={clsx(logoClass)}>
      <Link to={import.meta.env.VITE_PUBLIC_URL + "/"}>
        <img alt="" src={import.meta.env.VITE_PUBLIC_URL + imageUrl} />
      </Link>
    </div>
  );
};

export default Logo;
