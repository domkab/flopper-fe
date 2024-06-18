import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductCartQuantity } from "../../helpers/product";
import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist } from "../../store/slices/wishlist-slice";
import { Product, CartItem, WishlistItem, CompareItem, Currency } from "../../types/RootStateTypes";
import ShopifyButton from '../../pages/other/Checkout/ShopifyButton';

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

  const handleCartUpdate = (cartData: any) => {
    // Synchronize your custom cart with Shopify's cart data
    cartData.lineItems.forEach((item: any) => {
      dispatch(addToCart({
        id: item.variant_id,
        product: item,
        quantity: item.quantity,
      }));
    });
  };

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
          <div className="cart-plus-minus">
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
          </div>
          <div className="pro-details-cart btn-hover">
            {productStock && productStock > 0 ? (
              <button
                onClick={() =>
                  dispatch(addToCart({
                    ...product,
                    quantity: quantityCount,
                    selectedProductColor: selectedProductColor || product.selectedProductColor,
                    selectedProductSize: selectedProductSize || product.selectedProductSize
                  }))
                }
                disabled={productCartQty >= productStock}
              >
                Add To Cart
              </button>
            ) : (
              <button disabled>Out of Stock</button>
            )}
          </div>
          <ShopifyButton 
            variant={selectedProductColor} 
            size={selectedProductSize} 
            onCartUpdate={handleCartUpdate} 
          />
          <div className="pro-details-wishlist">
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
          </div>
        </div>
      )}
      {product.category ? (
        <div className="pro-details-meta">
          <span>Categories :</span>
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
