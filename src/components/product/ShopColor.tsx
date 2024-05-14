import PropTypes from "prop-types";
import { setActiveSort } from "../../helpers/product";

interface ShopColorProps {
  colors?: string[];
  getSortParams: (sortType: string, sortValue: string) => void;
}

const ShopColor: React.FC<ShopColorProps> = ({ colors, getSortParams }) => {
  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">Color </h4>
      <div className="sidebar-widget-list mt-20">
        {colors ? (
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <button
                  onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                    getSortParams("color", "");
                    setActiveSort(e);
                  }}
                >
                  <span className="checkmark" /> All Colors{" "}
                </button>
              </div>
            </li>
            {colors.map((color: string, key: number) => {
              return (
                <li key={key}>
                  <div className="sidebar-widget-list-left">
                    <button
                      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        getSortParams("color", color);
                        setActiveSort(e);
                      }}
                    >
                      <span className="checkmark" /> {color}{" "}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          "No colors found"
        )}
      </div>
    </div>
  );
};

export default ShopColor;
