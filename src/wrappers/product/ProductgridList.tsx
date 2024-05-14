import { Fragment } from "react";
import { useSelector } from "react-redux";
import ProductGridListSingle from "../../components/product/ProductGridListSingle";
import { RootState, Product, CartItem, WishlistItem, CompareItem, Currency } from "../../types/RootStateTypes";

interface ProductGridListProps {
  products: Product[];
  spaceBottomClass?: string;
}

const ProductGridList: React.FC<ProductGridListProps> = ({
  products,
  spaceBottomClass,
}) => {
  const currencyState = useSelector((state: RootState) => state.currency);
  const currency: Currency = {
    code: currencyState.currencyName,
    symbol: currencyState.currencySymbol,
    currencyRate: currencyState.currencyRate,
    currencySymbol: currencyState.currencySymbol
  };

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

export default ProductGridList;
