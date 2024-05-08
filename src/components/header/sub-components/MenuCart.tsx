import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../types/RootStateTypes";
import { getDiscountPrice } from "../../../helpers/product";
import { deleteFromCart } from "../../../store/slices/cart-slice";

const MenuCart = () => {
  const dispatch = useDispatch();
  const { current: currency } = useSelector((state: RootState) => state.currency);
  const { cartItems } = useSelector((state: RootState) => state.cart);
  let cartTotalPrice = 0;

  return (
    <div className="shopping-cart-content">
      {cartItems.length > 0 ? (
        <Fragment>
          <ul>
            {cartItems.map((item) => {
              if (!item.product || typeof item.product.price === "undefined") {
                return null;
              }

              const discountedPrice = getDiscountPrice(item.product.price, item.product.discount);
              const finalProductPrice = +(item.product.price * currency.currencyRate).toFixed(2);
              const finalDiscountedPrice = discountedPrice ? +(discountedPrice * currency.currencyRate).toFixed(2) : null;

              if (finalDiscountedPrice != null) {
                cartTotalPrice += finalDiscountedPrice * item.quantity;
              } else {
                cartTotalPrice += finalProductPrice * item.quantity;
              }

              return (
                <li className="single-shopping-cart" key={item.id}>
                  <div className="shopping-cart-img">
                    <Link to={`/product/${item.product.id}`}>
                      <img
                        alt=""
                        src={`${item.product.image[0]}`}
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="shopping-cart-title">
                    <h4>
                      <Link to={`/product/${item.product.id}`}>
                        {item.product.name}
                      </Link>
                    </h4>
                    <h6>Qty: {item.quantity}</h6>
                    <span>
                      {currency.symbol}{finalDiscountedPrice != null ? finalDiscountedPrice : finalProductPrice}
                    </span>
                    {item.product.selectedProductColor && item.product.selectedProductSize && (
                      <div className="cart-item-variation">
                        <span>Color: {item.product.selectedProductColor}</span>
                        <span>Size: {item.product.selectedProductSize}</span>
                      </div>
                    )}
                  </div>
                  <div className="shopping-cart-delete">
                    <button onClick={() => dispatch(deleteFromCart(item.id))}>
                      <i className="fa fa-times-circle" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="shopping-cart-total">
            <h4>Total : <span className="shop-total">{currency.symbol}{cartTotalPrice.toFixed(2)}</span></h4>
          </div>
          <div className="shopping-cart-btn btn-hover text-center">
            <Link className="default-btn" to="/cart">view cart</Link>
            <Link className="default-btn" to="/checkout">checkout</Link>
          </div>
        </Fragment>
      ) : (
        <p className="text-center">No items added to cart</p>
      )}
    </div>
  );
};

export default MenuCart;
