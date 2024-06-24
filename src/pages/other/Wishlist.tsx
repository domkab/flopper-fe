import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getDiscountPrice } from "../../helpers/product";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { addToCart } from "../../store/slices/cart-slice";
import { deleteFromWishlist, deleteAllFromWishlist } from "../../store/slices/wishlist-slice"
import { RootState } from '../../types/RootStateTypes';

const Wishlist = () => {
  const dispatch = useDispatch();
  let { pathname } = useLocation();

  const currency = useSelector((state: RootState) => state.currency);
  const { wishlistItems } = useSelector((state: RootState) => state.wishlist);
  const { cartItems } = useSelector((state: RootState) => state.cart);

  return (
    <Fragment>
      <SEO
        titleTemplate="Wishlist"
        description="Wishlist page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        <Breadcrumb
          pages={[
            { label: "Home", path: import.meta.env.VITE_PUBLIC_URL + "/" },
            { label: "Wishlist", path: import.meta.env.VITE_PUBLIC_URL + pathname }
          ]}
        />
        <div className="cart-main-area pt-90 pb-100">
          <div className="container">
            {wishlistItems && wishlistItems.length >= 1 ? (
              <Fragment>
                <h3 className="cart-page-title">Your wishlist items</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                      <table>
                        <thead>
                          <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Add To Cart</th>
                            <th>action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {wishlistItems.map((wishlistItem, key) => {
                            console.log(wishlistItem, 'product');

                            const discountedPrice = getDiscountPrice(
                              wishlistItem.product.price,
                              wishlistItem.product.discount || 0
                            );

                            const finalProductPrice = (
                              wishlistItem.product.price * currency.currencyRate
                            ).toFixed(2);

                            const finalDiscountedPrice = discountedPrice !== null
                              ? (discountedPrice * currency.currencyRate).toFixed(2)
                              : null;

                            const cartItem = cartItems.find(item => item.id === wishlistItem.id);
                            return (
                              <tr key={key}>
                                <td className="product-thumbnail">
                                  <Link
                                    to={
                                      import.meta.env.VITE_PUBLIC_URL +
                                      "/product/" +
                                      wishlistItem.id
                                    }
                                  >
                                    <img
                                      className="img-fluid"
                                      src={
                                        import.meta.env.VITE_PUBLIC_URL +
                                        wishlistItem.product.image[0]
                                      }
                                      alt=""
                                    />
                                  </Link>
                                </td>

                                <td className="product-name text-center">
                                  <Link
                                    to={
                                      import.meta.env.VITE_PUBLIC_URL +
                                      "/product/" +
                                      wishlistItem.id
                                    }
                                  >
                                    {wishlistItem.product.name}
                                  </Link>
                                </td>

                                <td className="product-price-cart">
                                  {discountedPrice !== null ? (
                                    <Fragment>
                                      <span className="amount old">
                                        {currency.currencySymbol +
                                          finalProductPrice}
                                      </span>
                                      <span className="amount">
                                        {currency.currencySymbol +
                                          finalDiscountedPrice}
                                      </span>
                                    </Fragment>
                                  ) : (
                                    <span className="amount">
                                      {currency.currencySymbol +
                                        finalProductPrice}
                                    </span>
                                  )}
                                </td>

                                <td className="product-wishlist-cart">
                                  {wishlistItem.product.affiliateLink ? (
                                    <a
                                      href={wishlistItem.product.affiliateLink}
                                      rel="noopener noreferrer"
                                      target="_blank"
                                    >
                                      {" "}
                                      Buy now{" "}
                                    </a>
                                  ) : wishlistItem.product.variation &&
                                    wishlistItem.product.variation.length >= 1 ? (
                                    <Link
                                      to={`${import.meta.env.VITE_PUBLIC_URL}/product/${wishlistItem.id}`}
                                    >
                                      Select option
                                    </Link>
                                  ) : wishlistItem.product.stock &&
                                    wishlistItem.product.stock > 0 ? (
                                    <button
                                      onClick={() =>
                                        dispatch(addToCart(wishlistItem))
                                      }
                                      className={
                                        cartItem !== undefined &&
                                          cartItem.quantity > 0
                                          ? "active"
                                          : ""
                                      }
                                      disabled={
                                        cartItem !== undefined &&
                                        cartItem.quantity > 0
                                      }
                                      title={
                                        wishlistItem !== undefined
                                          ? "Added to cart"
                                          : "Add to cart"
                                      }
                                    >
                                      {cartItem !== undefined &&
                                        cartItem.quantity > 0
                                        ? "Added"
                                        : "Add to cart"}
                                    </button>
                                  ) : (
                                    <button disabled className="active">
                                      Out of stock
                                    </button>
                                  )}
                                </td>

                                <td className="product-remove">
                                  <button
                                    onClick={() =>
                                      dispatch(deleteFromWishlist(wishlistItem.id))
                                    }
                                  >
                                    <i className="fa fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="cart-shiping-update-wrapper">
                      <div className="cart-shiping-update">
                        <Link
                          to={import.meta.env.VITE_PUBLIC_URL + "/shop-grid-standard"}
                        >
                          Continue Shopping
                        </Link>
                      </div>
                      <div className="cart-clear">
                        <button onClick={() => dispatch(deleteAllFromWishlist())}>
                          Clear Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-like"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in wishlist <br />{" "}
                      <Link to={import.meta.env.VITE_PUBLIC_URL + "/shop-grid-standard"}>
                        Add Items
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Wishlist;
