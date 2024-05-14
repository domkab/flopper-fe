import clsx from "clsx";
import ProductgridList from "./ProductgridList";
import { Product } from "../../types/RootStateTypes";
interface ShopProductsProps {
  products: Product[];
  layout?: string;
}

const ShopProducts: React.FC<ShopProductsProps> = ({ products, layout }) => {
  return (
    <div className="shop-bottom-area mt-35">
      <div className={clsx("row", layout)}>
        <ProductgridList products={products} spaceBottomClass="mb-25" />
      </div>
    </div>
  );
};

export default ShopProducts;
