import React from 'react';
import clsx from "clsx";

interface BrandLogoItem {
  id: string;
  image: string;
}

interface BrandLogoOneSingleProps {
  data: BrandLogoItem;
  spaceBottomClass?: string;
}

const BrandLogoOneSingle: React.FC<BrandLogoOneSingleProps> = ({ data, spaceBottomClass }) => {
  return (
    <div className={clsx("single-brand-logo", spaceBottomClass)}>
      <img src={`${import.meta.env.VITE_PUBLIC_URL}${data.image}`} alt="brand logo" />
    </div>
  );
};

export default BrandLogoOneSingle;
