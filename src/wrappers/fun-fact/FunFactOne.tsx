import React from 'react';
import clsx from "clsx";
import FunFactOneSingle from "../../components/fun-fact/FunFactOneSingle";
import funFactData from "../../data/fun-fact/fun-fact-one.json";

export interface FunFactItem {
  id: string;
  iconClass: string;
  countNum: number;
  title: string;
}

export interface FunFactOneProps {
  spaceTopClass?: string;
  spaceBottomClass?: string;
  bgClass?: string;
}

const FunFactOne: React.FC<FunFactOneProps> = ({ spaceTopClass, spaceBottomClass, bgClass }) => {
  return (
    <div className={clsx("funfact-area", spaceTopClass, spaceBottomClass, bgClass)}>
      <div className="container">
        <div className="row">
          {funFactData.map((single: FunFactItem, key: number) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={key}>
              <FunFactOneSingle
                data={single}
                spaceBottomClass="mb-30"
                textAlignClass="text-center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FunFactOne;
