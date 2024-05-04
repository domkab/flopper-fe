import PropTypes from "prop-types";
import { setActiveSort } from "../../helpers/product";

interface ShopTagProps {
  tags?: string[];
  getSortParams: (sortType: string, sortValue: string) => void;
}

const ShopTag: React.FC<ShopTagProps> = ({ tags, getSortParams }) => {
  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">Tag </h4>
      <div className="sidebar-widget-tag mt-25">
        {tags ? (
          <ul>
            {tags.map((tag: string, key: number) => {
              return (
                <li key={key}>
                  <button
                    onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                      getSortParams("tag", tag);
                      setActiveSort(e);
                    }}
                  >
                    {tag}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          "No tags found"
        )}
      </div>
    </div>
  );
};

export default ShopTag;
