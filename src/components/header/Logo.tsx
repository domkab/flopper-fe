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
        <img className="logo__img" alt="Flopper Shop" src={import.meta.env.VITE_PUBLIC_URL + imageUrl} />
      </Link>
    </div>
  );
};

export default Logo;
