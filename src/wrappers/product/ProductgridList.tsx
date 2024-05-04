import PropTypes from "prop-types";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import ProductGridListSingle from "../../components/product/ProductGridListSingle";
import { RootState, Product, CartItem, WishlistItem, CompareItem } from "../../types/RootStateTypes";

interface ProductGridListProps {
  products: Product[];
  spaceBottomClass?: string;
}

const ProductGridList: React.FC<ProductGridListProps> = ({
  products,
  spaceBottomClass,
}) => {
  const currency = useSelector((state: RootState) => state.currency.current);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.wishlistItems);
  const compareItems = useSelector((state: RootState) => state.compare.compareItems);

  return (
    <Fragment>
      {products?.map((product: Product) => {
        const cartItem: CartItem | undefined = cartItems
          .find(cartItem => cartItem.id === product.id);

        const wishlistItem: WishlistItem | undefined = wishlistItems
          .find(wishlistItem => wishlistItem.id === product.id);

        const compareItem: CompareItem | undefined = compareItems
          .find(compareItem => compareItem.id === product.id);

        return (
          <div className="col-xl-4 col-sm-6" key={product.id}>
            <ProductGridListSingle
              spaceBottomClass={spaceBottomClass}
              product={product}
              currency={currency}
              cartItem={cartItem}
              wishlistItem={wishlistItem}
              compareItem={compareItem}
            />
          </div>
        );
      })}
    </Fragment>
  );
};

// ProductGridList.propTypes = {
//   products: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     discount: PropTypes.number,
//     new: PropTypes.bool,
//     category: PropTypes.arrayOf(PropTypes.string).isRequired,
//     tag: PropTypes.arrayOf(PropTypes.string),
//     variation: PropTypes.arrayOf(PropTypes.shape({
//       color: PropTypes.string.isRequired,
//       images: PropTypes.arrayOf(PropTypes.string).isRequired,
//       size: PropTypes.arrayOf(PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         stock: PropTypes.number.isRequired,
//       })).isRequired,
//     })),
//     image: PropTypes.arrayOf(PropTypes.string).isRequired,
//     shortDescription: PropTypes.string.isRequired,
//     fullDescription: PropTypes.string.isRequired,
//   })).isRequired,
//   spaceBottomClass: PropTypes.string,
// };

export default ProductGridList;
