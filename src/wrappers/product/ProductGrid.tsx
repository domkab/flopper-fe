import { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { ProductGridProps, RootState } from '../../types/RootStateTypes';
import ProductGridSingle from '../../components/product/ProductGridSingle';
import { getProducts } from '../../helpers/product';
import { Product } from '../../types/RootStateTypes';

const ProductGrid: FC<ProductGridProps> = ({
  spaceBottomClass = '',
  category = '',
  type = '',
  limit = 0
}) => {
  const { products } = useSelector((state: RootState) => state.product);
  const currency = useSelector((state: RootState) => state.currency);
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const { wishlistItems } = useSelector((state: RootState) => state.wishlist);
  const { compareItems } = useSelector((state: RootState) => state.compare);
  const prods = getProducts(products, category, type, limit);

  return (
    <Fragment>
      {prods.map((product: Product) => (
        <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6" key={product.id}>
          <ProductGridSingle
            spaceBottomClass={spaceBottomClass}
            product={product}
            currency={currency}
            cartItem={cartItems.find(cartItem => cartItem.id === product.id)}
            wishlistItem={wishlistItems.find(wishlistItem => wishlistItem.id === product.id)}
            compareItem={compareItems.find(compareItem => compareItem.id === product.id)}
          />
        </div>
      ))}
    </Fragment>
  );
};

export default ProductGrid;
