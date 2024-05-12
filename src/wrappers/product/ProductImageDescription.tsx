import { useSelector } from "react-redux";
import clsx from "clsx";
import { RootState, CartItem, WishlistItem, CompareItem, Currency, Product } from "../../types/RootStateTypes";
import { getDiscountPrice } from "../../helpers/product";
import ProductImageGallery from "../../components/product/ProductImageGallery";
import ProductDescriptionInfo from "../../components/product/ProductDescriptionInfo";
import ProductImageGallerySideThumb from "../../components/product/ProductImageGallerySideThumb";
import ProductImageFixed from "../../components/product/ProductImageFixed";

interface ProductImageDescriptionProps {
  spaceTopClass?: string;
  spaceBottomClass?: string;
  galleryType?: string;
  product: Product;
}

const ProductImageDescription: React.FC<ProductImageDescriptionProps> = ({
  spaceTopClass,
  spaceBottomClass,
  galleryType,
  product,
}) => {
  const currency: Currency = useSelector((state: RootState) => state.currency.current);
  const cartItems: CartItem[] = useSelector((state: RootState) => state.cart.cartItems);
  const wishlistItems: WishlistItem[] = useSelector((state: RootState) => state.wishlist.wishlistItems);
  const compareItems: CompareItem[] = useSelector((state: RootState) => state.compare.compareItems);
  const wishlistItem = wishlistItems.find(item => item.id === product.id);
  const compareItem = compareItems.find(item => item.id === product.id);

  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = discountedPrice
    ? +(discountedPrice * currency.currencyRate).toFixed(2)
    : null;

  return (
    <div className={clsx("shop-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            {/* product image gallery */}
            {galleryType === "leftThumb" ? (
              <ProductImageGallerySideThumb
                product={product}
                thumbPosition="left"
              />
            ) : galleryType === "rightThumb" ? (
              <ProductImageGallerySideThumb product={product} />
            ) : galleryType === "fixedImage" ? (
              <ProductImageFixed product={product} />
            ) : (
              <ProductImageGallery product={product} />
            )}
          </div>
          <div className="col-lg-6 col-md-6">
            {/* product description info */}
            <ProductDescriptionInfo
              product={product}
              discountedPrice={discountedPrice ?? 0}
              currency={currency}
              finalDiscountedPrice={finalDiscountedPrice ?? 0}
              finalProductPrice={finalProductPrice}
              cartItems={cartItems}
              wishlistItem={wishlistItem}
              compareItem={compareItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageDescription;
