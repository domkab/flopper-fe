import React from 'react';
import clsx from 'clsx';

interface SectionTitleWithTextProps {
  spaceTopClass?: string;
  spaceBottomClass?: string;
}

const SectionTitleWithText: React.FC<SectionTitleWithTextProps> = (
  { spaceTopClass, spaceBottomClass }
) => {
  return (
    <div className={clsx("welcome-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Flop your floppers</h5>
          <h1>Don't flop your Summer!</h1>
          <p>
            Get ready to make a splash this summer with our one-of-a-kind Shark Floppers! Designed for both comfort and style, these floppers feature an adorable shark design that's perfect for beach days, pool parties, or just lounging around. Made with high-quality, durable materials, our floppers ensure maximum comfort and longevity.
            {" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitleWithText;
