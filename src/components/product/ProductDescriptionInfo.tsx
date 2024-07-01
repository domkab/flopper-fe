import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductCartQuantity } from "../../helpers/product";
import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist } from "../../store/slices/wishlist-slice";
import { Product, CartItem, WishlistItem, CompareItem, Currency } from "../../types/RootStateTypes";
import ShopifyBlueShark36_37 from '../../pages/other/Checkout/ShopifyButton/BlueShark/BlueShark36_37';
import ShopifyBlueShark38_39 from '../../pages/other/Checkout/ShopifyButton/BlueShark/BlueShark38_39';
import ShopifyBlueShark40_41 from '../../pages/other/Checkout/ShopifyButton/BlueShark/BlueShark40_41';
import ShopifyBlueShark42_43 from '../../pages/other/Checkout/ShopifyButton/BlueShark/BlueShark42_43';
import ShopifyBlueShark44_45 from '../../pages/other/Checkout/ShopifyButton/BlueShark/BlueShark44_45';
import ShopifyOrangeShark36_37 from '../../pages/other/Checkout/ShopifyButton/OrangeShark/OrangeShark36_37';
import ShopifyOrangeShark38_39 from '../../pages/other/Checkout/ShopifyButton/OrangeShark/OrangeShark38_39';
import ShopifyOrangeShark40_41 from '../../pages/other/Checkout/ShopifyButton/OrangeShark/OrangeShark40_41';
import ShopifyOrangeShark42_43 from '../../pages/other/Checkout/ShopifyButton/OrangeShark/OrangeShark42_43';
import ShopifyOrangeShark44_45 from '../../pages/other/Checkout/ShopifyButton/OrangeShark/OrangeShark44_45';
import ShopifyPurpleShark36_37 from '../../pages/other/Checkout/ShopifyButton/PurpleShark/PurpleShark36_37';
import ShopifyPurpleShark38_39 from '../../pages/other/Checkout/ShopifyButton/PurpleShark/PurpleShark38_39';
import ShopifyPurpleShark40_41 from '../../pages/other/Checkout/ShopifyButton/PurpleShark/PurpleShark40_41';
import ShopifyPurpleShark42_43 from '../../pages/other/Checkout/ShopifyButton/PurpleShark/PurpleShark42_43';
import ShopifyPurpleShark44_45 from '../../pages/other/Checkout/ShopifyButton/PurpleShark/PurpleShark44_45';

interface ProductDescriptionInfoProps {
  product: Product;
  discountedPrice: number | null;
  currency: Currency;
  finalDiscountedPrice: number | null;
  finalProductPrice: number;
  cartItems: CartItem[];
  wishlistItem: WishlistItem | undefined;
  compareItem: CompareItem | undefined;
}

const ProductDescriptionInfo: React.FC<ProductDescriptionInfoProps> = ({
  product,
  discountedPrice,
  currency,
  finalDiscountedPrice,
  finalProductPrice,
  cartItems,
  wishlistItem,
}) => {
  const dispatch = useDispatch();
  const [selectedProductColor, setSelectedProductColor] = useState<string>(
    product.variation ? product.variation[0].color : ""
  );
  const [selectedProductSize, setSelectedProductSize] = useState<string>(
    product.variation ? product.variation[0].size[0].name : ""
  );
  const [productStock, setProductStock] = useState<number | undefined>(
    product.variation ? product.variation[0].size[0].stock : product.stock
  );
  const [quantityCount, setQuantityCount] = useState<number>(1);

  const productCartQty = getProductCartQuantity(
    cartItems,
    product,
    selectedProductColor,
    selectedProductSize
  );

  console.log(selectedProductSize);


  // const handleAddToCart = () => {
  //   const productData = {
  //     ...product,
  //     quantity: quantityCount,
  //     selectedProductColor: selectedProductColor || product.selectedProductColor,
  //     selectedProductSize: selectedProductSize || product.selectedProductSize,
  //   };

  //   dispatch(addToCart(productData));
  // };

  const getButtonId = (color: string, size: string) => {
    return `product-component-${color}-${size}`;
  };

  const renderShopifyButton = () => {
    if (product.tag.includes('shark')) {
      // blue
      if (selectedProductColor === 'blue' && selectedProductSize === '36-37') {
        return <ShopifyBlueShark36_37 />;
      }

      if (selectedProductColor === 'blue' && selectedProductSize === '38-39') {
        return <ShopifyBlueShark38_39 />;
      }

      if (selectedProductColor === 'blue' && selectedProductSize === '38-39') {
        return <ShopifyBlueShark38_39 />;
      }

      if (selectedProductColor === 'blue' && selectedProductSize === '40-41') {
        return <ShopifyBlueShark40_41 />;
      }

      if (selectedProductColor === 'blue' && selectedProductSize === '42-43') {
        return <ShopifyBlueShark42_43 />;
      }

      if (selectedProductColor === 'blue' && selectedProductSize === '44-45') {
        return <ShopifyBlueShark44_45 />;
      }
      // orange
      if (selectedProductColor === 'orange' && selectedProductSize === '36-37') {
        return <ShopifyOrangeShark36_37 />;
      }

      if (selectedProductColor === 'orange' && selectedProductSize === '38-39') {
        return <ShopifyOrangeShark38_39 />;
      }

      if (selectedProductColor === 'orange' && selectedProductSize === '40-41') {
        return <ShopifyOrangeShark40_41 />;
      }

      if (selectedProductColor === 'orange' && selectedProductSize === '42-43') {
        return <ShopifyOrangeShark42_43 />;
      }

      if (selectedProductColor === 'orange' && selectedProductSize === '44-45') {
        return <ShopifyOrangeShark44_45 />;
      }

      if (selectedProductColor === 'purple' && selectedProductSize === '36-37') {
        return <ShopifyPurpleShark36_37 />;
      }

      if (selectedProductColor === 'purple' && selectedProductSize === '38-39') {
        return <ShopifyPurpleShark38_39 />;
      }

      if (selectedProductColor === 'purple' && selectedProductSize === '40-41') {
        return <ShopifyPurpleShark40_41 />;
      }

      if (selectedProductColor === 'purple' && selectedProductSize === '42-43') {
        return <ShopifyPurpleShark42_43 />;
      }

      if (selectedProductColor === 'purple' && selectedProductSize === '44-45') {
        return <ShopifyPurpleShark44_45 />;
      }

      return null;
    }

  };

  useEffect(() => {
    renderShopifyButton();
  }, [selectedProductColor, selectedProductSize])

  return (
    <div className="product-details-content ml-70">
      <h2>{product.name}</h2>
      <div className="product-details-price">
        {discountedPrice !== null ? (
          <Fragment>
            <span>{currency.currencySymbol + finalDiscountedPrice}</span>{" "}
            <span className="old">
              {currency.currencySymbol + finalProductPrice}
            </span>
          </Fragment>
        ) : (
          <span>{currency.currencySymbol + finalProductPrice} </span>
        )}
      </div>
      <div className="pro-details-list">
        <p>{product.shortDescription}</p>
      </div>

      {product.variation ? (
        <div className="pro-details-size-color">
          <div className="pro-details-color-wrap">
            <span>Color</span>
            <div className="pro-details-color-content">
              {product.variation.map((single, key) => (
                <label
                  className={`pro-details-color-content--single ${single.color}`}
                  key={key}
                >
                  <input
                    type="radio"
                    value={single.color}
                    name="product-color"
                    checked={single.color === selectedProductColor}
                    onChange={() => {
                      setSelectedProductColor(single.color);
                      setSelectedProductSize(single.size[0].name);
                      setProductStock(single.size[0].stock);
                      setQuantityCount(1);
                    }}
                  />
                  <span className="checkmark"></span>
                </label>
              ))}
            </div>
          </div>
          <div className="pro-details-size">
            <span>Size</span>
            <div className="pro-details-size-content">
              {product.variation &&
                product.variation.map((single) =>
                  single.color === selectedProductColor
                    ? single.size.map((singleSize, key) => (
                      <label
                        className={`pro-details-size-content--single`}
                        key={key}
                      >
                        <input
                          type="radio"
                          value={singleSize.name}
                          checked={
                            singleSize.name === selectedProductSize
                          }
                          onChange={() => {
                            setSelectedProductSize(singleSize.name);
                            setProductStock(singleSize.stock);
                            setQuantityCount(1);
                          }}
                        />
                        <span className="size-name">{singleSize.name}</span>
                      </label>
                    ))
                    : ""
                )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {product.affiliateLink ? (
        <div className="pro-details-quality">
          <div className="pro-details-cart btn-hover ml-0">
            <a
              href={product.affiliateLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              Buy Now
            </a>
          </div>
        </div>
      ) : (
        <div className="pro-details-quality">
          {/* <div className="cart-plus-minus">
            <button
              onClick={() =>
                setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
              }
              className="dec qtybutton"
            >
              -
            </button>
            <input
              className="cart-plus-minus-box"
              type="text"
              value={quantityCount}
              readOnly
            />
            <button
              onClick={() =>
                setQuantityCount(
                  quantityCount < (productStock ?? 0) - productCartQty
                    ? quantityCount + 1
                    : quantityCount
                )
              }
              className="inc qtybutton"
            >
              +
            </button>
          </div> */}
          {/* <div className="pro-details-cart btn-hover">
            {productStock && productStock > 0 ? (
              <button
                onClick={handleAddToCart}
                disabled={productCartQty >= productStock}
              >
                Add To Cart
              </button>
            ) : (
              <button disabled>Out of Stock</button>
            )}
          </div> */}
          <div className="pro-details-cart btn-hover">
            {renderShopifyButton()}
          </div>

          {product.variation && product.variation.map(single =>
            single.color === selectedProductColor ?
              single.size.map(singleSize => (
                <div key={getButtonId(single.color, singleSize.name)} style={{ display: singleSize.name === selectedProductSize ? 'block' : 'none' }}>
                </div>
              )) : null
          )}

          {/* <div className="pro-details-wishlist">
            <button
              className={wishlistItem !== undefined ? "active" : ""}
              disabled={wishlistItem !== undefined}
              title={
                wishlistItem !== undefined
                  ? "Added to wishlist"
                  : "Add to wishlist"
              }
              onClick={() => dispatch(addToWishlist({ id: product.id, product }))}
            >
              <i className="pe-7s-like" />
            </button>
          </div> */}
        </div>
      )}
      {product.category ? (
        <div className="pro-details-meta">
          {/* <span>Categories :</span> */}
          <ul>
            {product.category.map((single, key) => (
              <li key={key}>
                <Link to={"/shop-grid-standard"}>
                  {single}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
      {product.tag ? (
        <div className="pro-details-meta">
          <span>Tags :</span>
          <ul>
            {product.tag.map((single, key) => (
              <li key={key}>
                <Link to={"/shop-grid-standard"}>{single}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductDescriptionInfo;
