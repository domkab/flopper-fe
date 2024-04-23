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
          <h5>Who Are We</h5>
          <h1>Welcome To Flone</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commo consequat irure{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitleWithText;
