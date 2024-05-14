import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import { RootState, Product as ProductType } from "../../types/RootStateTypes";

const Product: React.FC = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { products } = useSelector((state: RootState) => state.product);
  const product = products.find((product: ProductType) => product.id === id);

  return (
    <Fragment>
      <SEO
        titleTemplate="Product Page"
        description="Product Page of flone react minimalist eCommerce template."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: import.meta.env.VITE_PUBLIC_URL + "/" },
            { label: "Shop Product", path: import.meta.env.VITE_PUBLIC_URL + pathname }
          ]}
        />

        {/* product description with image */}
        {product && (
          <ProductImageDescription
            spaceTopClass="pt-100"
            spaceBottomClass="pb-100"
            product={product}
          />
        )}

        {/* product description tab */}
        {product && (
          <ProductDescriptionTab
            spaceBottomClass="pb-90"
            productFullDesc={product.fullDescription}
          />
        )}

        {/* related product slider */}
        {product && (
          <RelatedProductSlider
            spaceBottomClass="pb-95"
            category={product.category[0]}
          />
        )}
      </LayoutOne>
    </Fragment>
  );
};

export default Product;
