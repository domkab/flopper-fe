import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface BannerItem {
  image: string;
  title: string;
  subtitle: string;
  price: string;
  link: string;
}

interface BannerOneSingleProps {
  data: BannerItem;
  spaceBottomClass?: string;
}

const BannerOneSingle: React.FC<BannerOneSingleProps> = ({ data, spaceBottomClass }) => {
  return (
    <div className={clsx("single-banner", spaceBottomClass)}>
      <Link to={import.meta.env.VITE_PUBLIC_URL +data.link}>
      <img src={import.meta.env.VITE_PUBLIC_URL + data.image} alt="" />
      </Link>
      <div className="banner-content">
        <h3>{data.title}</h3>
        <h4>
          {data.subtitle} <span>{data.price}</span>
        </h4>
        <Link to={import.meta.env.VITE_PUBLIC_URL + data.link}>
          <i className="fa fa-long-arrow-right" />
        </Link>
      </div>
    </div>
  );
};

export default BannerOneSingle;
