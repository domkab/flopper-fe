import PropTypes from "prop-types";
import { setActiveSort } from "../../helpers/product";

interface ShopCategoriesProps {
  categories?: string[];
  getSortParams: (sortType: string, sortValue: string) => void;
}

const ShopCategories: React.FC<ShopCategoriesProps> = ({ categories, getSortParams }) => {
  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">Categories </h4>
      <div className="sidebar-widget-list mt-30">
        {categories ? (
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <button
                  onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                    getSortParams("category", "");
                    setActiveSort(e);
                  }}
                >
                  <span className="checkmark" /> All Categories
                </button>
              </div>
            </li>
            {categories.map((category: string, key: number) => {
              return (
                <li key={key}>
                  <div className="sidebar-widget-list-left">
                    <button
                      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        getSortParams("category", category);
                        setActiveSort(e);
                      }}
                    >
                      {" "}
                      <span className="checkmark" /> {category}{" "}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          "No categories found"
        )}
      </div>
    </div>
  );
};

export default ShopCategories;
