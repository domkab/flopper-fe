import React, { Fragment, useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getDiscountPrice } from "../../../helpers/product";
import SEO from "../../../components/seo";
import LayoutOne from "../../../layouts/LayoutOne";
import Breadcrumb from "../../../wrappers/breadcrumb/Breadcrumb";
import { RootState } from '../../../types/RootStateTypes';
import { SingleValue } from 'react-select';
import { fetchUserCountry } from '../../../services/locationService';
import useWindowSize from '../../../hooks/useWindowSize';
import CreditCardForm from './CreditCardForm';
import BillingInfo from './BillingInfo';
interface OptionType {
  label: string;
  value: string;
}

const Checkout: React.FC = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  console.log(width);

  let cartTotalPrice = 0;

  let { pathname } = useLocation();
  const currency = useSelector((state: RootState) => state.currency);
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const [selectedCountry, setSelectedCountry] = useState<SingleValue<OptionType>>(null);
  const [selectedRegion, setSelectedRegion] = useState<SingleValue<OptionType>>(null);
  const [regions, setRegions] = useState<OptionType[]>([]);
  const stateInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selectedRegion && stateInputRef.current) {
      stateInputRef.current.value = selectedRegion.label;
    }
  }, [selectedRegion]);

  useEffect(() => {
    fetchUserCountry(setSelectedCountry, setRegions);
  }, []);

  return (
    <Fragment>
      <SEO
        titleTemplate="Checkout"
        description="Checkout page of FlipFlopper shop commerce store."
      />
      <LayoutOne headerTop="visible">
        <Breadcrumb
          pages={[
            { label: "Home", path: import.meta.env.VITE_PUBLIC_URL + "/" },
            { label: "Checkout", path: import.meta.env.VITE_PUBLIC_URL + pathname }
          ]}
        />
        <div className="checkout-area pt-20 pb-80">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <div className="row">
                <div className="col-lg-7">
                  <BillingInfo
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                    selectedRegion={selectedRegion}
                    setSelectedRegion={setSelectedRegion}
                    regions={regions}
                    setRegions={setRegions}
                  />
                  <div className="billing-info-wrap">
                    <h3>Payment Info</h3>
                    <CreditCardForm />
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="your-order-area">
                    <h3>Your order</h3>
                    <div className="your-order-wrap gray-bg-4">
                      <div className="your-order-product-info">
                        <div className="your-order-top">
                          <ul>
                            <li>Product</li>
                            <li>Total</li>
                          </ul>
                        </div>
                        <div className="your-order-middle">
                          <ul>
                            {cartItems.map((cartItem, key) => {
                              const discountedPrice = getDiscountPrice(
                                cartItem.price,
                                cartItem.discount
                              );

                              const finalProductPrice = (
                                cartItem.price * currency.currencyRate
                              ).toFixed(2);

                              const finalDiscountedPrice = discountedPrice
                                ? (discountedPrice * currency.currencyRate).toFixed(2)
                                : null;

                              if (finalDiscountedPrice) {
                                cartTotalPrice += parseFloat(finalDiscountedPrice) * cartItem.quantity;
                              } else {
                                cartTotalPrice += parseFloat(finalProductPrice) * cartItem.quantity;
                              }

                              return (
                                <li key={key}>
                                  <span className="order-middle-left">
                                    {cartItem.name} X {cartItem.quantity}
                                  </span>{" "}
                                  <span className="order-price">
                                    {finalDiscountedPrice !== null
                                      ? currency.currencySymbol +
                                      (parseFloat(finalDiscountedPrice) * cartItem.quantity).toFixed(2)
                                      : currency.currencySymbol +
                                      (parseFloat(finalProductPrice) * cartItem.quantity).toFixed(2)}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="your-order-bottom">
                          <ul>
                            <li className="your-order-shipping">Shipping</li>
                            <li>Free shipping</li>
                          </ul>
                        </div>
                        <div className="your-order-total">
                          <ul>
                            <li className="order-total">Total</li>
                            <li>
                              {currency.currencySymbol +
                                cartTotalPrice.toFixed(2)}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="payment-method">
                      </div>
                    </div>
                    <div className="place-order mt-25">
                      <button className="btn-hover">Place Order</button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cash"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in cart to checkout <br />{" "}
                      <Link to={import.meta.env.VITE_PUBLIC_URL + "/shop-grid-standard"}>
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div >
      </LayoutOne >
    </Fragment >
  );
};

export default Checkout;
