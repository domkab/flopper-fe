import { setActiveLayout } from "../../helpers/product";

interface ShopTopActionProps {
  getLayout: (layout: string) => void;
  getFilterSortParams: (sortType: string, sortValue: string) => void;
  productCount: number;
  sortedProductCount: number;
}

const ShopTopAction: React.FC<ShopTopActionProps> = ({
  getLayout,
  getFilterSortParams,
  productCount,
  sortedProductCount
}) => {
  return (
    <div className="shop-top-bar mb-35">
      <div className="select-shoing-wrap">
        <div className="shop-select">
          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              getFilterSortParams("filterSort", e.target.value)
            }
          >
            <option value="default">Default</option>
            <option value="priceHighToLow">Price - High to Low</option>
            <option value="priceLowToHigh">Price - Low to High</option>
          </select>
        </div>
        <p>
          Showing {sortedProductCount} of {productCount} result
        </p>
      </div>

      <div className="shop-tab">
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            getLayout("grid two-column");
            setActiveLayout(e);
          }}
        >
          <i className="fa fa-th-large" />
        </button>
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            getLayout("grid three-column");
            setActiveLayout(e);
          }}
        >
          <i className="fa fa-th" />
        </button>
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            getLayout("list");
            setActiveLayout(e);
          }}
        >
          <i className="fa fa-list-ul" />
        </button>
      </div>
    </div>
  );
};

export default ShopTopAction;
