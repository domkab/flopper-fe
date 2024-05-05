import { useSelector } from "react-redux";
import clsx from "clsx";
import Swiper, { SwiperSlide } from "../../components/swiper";
import SectionTitle from "../../components/section-title/SectionTitle";
import ProductGridSingle from "../../components/product/ProductGridSingle";
import { getProducts } from "../../helpers/product";
import { RootState, Product, CartItem, WishlistItem, CompareItem, Currency } from "../../types/RootStateTypes";

interface RelatedProductSliderProps {
  spaceBottomClass?: string;
  category?: string;
}

const settings = {
  loop: false,
  slidesPerView: 4,
  grabCursor: true,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    }
  }
};

const RelatedProductSlider: React.FC<RelatedProductSliderProps> = ({
  spaceBottomClass,
  category
}) => {
  // Define the shape of the state slices
  const { products }: { products: Product[] } = useSelector((state: RootState) => state.product);
  const currency: Currency = useSelector((state: RootState) => state.currency.current);
  const { cartItems }: { cartItems: CartItem[] } = useSelector((state: RootState) => state.cart);
  const { wishlistItems }: { wishlistItems: WishlistItem[] } = useSelector((state: RootState) => state.wishlist);
  const { compareItems }: { compareItems: CompareItem[] } = useSelector((state: RootState) => state.compare);

  const prods = getProducts(products, category, null, 6);

  return (
    <div className={clsx("related-product-area", spaceBottomClass)}>
      <div className="container">
        <SectionTitle
          titleText="Related Products"
          positionClass="text-center"
          spaceClass="mb-50"
        />
        {prods?.length ? (
          <Swiper options={settings}>
            {prods.map((product: Product) => (
              <SwiperSlide key={product.id}>
                <ProductGridSingle
                  product={product}
                  currency={currency}
                  cartItem={cartItems.find((cartItem) => cartItem.id === product.id)}
                  wishlistItem={wishlistItems.find((wishlistItem) => wishlistItem.id === product.id)}
                  compareItem={compareItems.find((compareItem) => compareItem.id === product.id)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
};

export default RelatedProductSlider;
