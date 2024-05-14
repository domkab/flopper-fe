import PropTypes from "prop-types";
import React, { Fragment } from "react";
import ShopTopAction from "../../components/product/ShopTopAction";

interface ShopTopbarProps {
  getLayout: (layout: string) => void;
  getFilterSortParams: (sortType: string, sortValue: string) => void;
  productCount: number;
  sortedProductCount: number;
}

const ShopTopbar: React.FC<ShopTopbarProps> = ({
  getLayout,
  getFilterSortParams,
  productCount,
  sortedProductCount
}) => {
  return (
    <Fragment>
      {/* shop top action */}
      <ShopTopAction
        getLayout={getLayout}
        getFilterSortParams={getFilterSortParams}
        productCount={productCount}
        sortedProductCount={sortedProductCount}
      />
    </Fragment>
  );
};

export default ShopTopbar;
