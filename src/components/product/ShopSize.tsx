import PropTypes from "prop-types";
import { setActiveSort } from "../../helpers/product";

interface ShopSizeProps {
  sizes?: string[];
  getSortParams: (sortType: string, sortValue: string) => void;
}

const ShopSize: React.FC<ShopSizeProps> = ({ sizes, getSortParams }) => {
  return (
    <div className="sidebar-widget mt-40">
      <h4 className="pro-sidebar-title">Size </h4>
      <div className="sidebar-widget-list mt-20">
        {sizes ? (
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <button
                  onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                    getSortParams("size", "");
                    setActiveSort(e);
                  }}
                >
                  <span className="checkmark" /> All Sizes{" "}
                </button>
              </div>
            </li>
            {sizes.map((size: string, key: number) => {
              return (
                <li key={key}>
                  <div className="sidebar-widget-list-left">
                    <button
                      className="text-uppercase"
                      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        getSortParams("size", size);
                        setActiveSort(e);
                      }}
                    >
                      <span className="checkmark" />
                      {size}{" "}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          "No sizes found"
        )}
      </div>
    </div>
  );
};

export default ShopSize;
