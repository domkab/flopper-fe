import { Link } from "react-router-dom";

interface ImageData {
  id: string;
  image: string;
  link: string;
}

interface ImageSliderOneSingleProps {
  data: ImageData;
}

const ImageSliderOneSingle: React.FC<ImageSliderOneSingleProps> = ({ data }) => {
  return (
    <div className="single-image">
      <Link to={import.meta.env.VITE_PUBLIC_URL + data.link}>
        <img src={import.meta.env.VITE_PUBLIC_URL + data.image} alt="" />
      </Link>
    </div>
  );
};

export default ImageSliderOneSingle;
