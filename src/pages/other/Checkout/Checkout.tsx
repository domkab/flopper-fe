import React, { Fragment, useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getDiscountPrice } from "../../../helpers/product";
import SEO from "../../../components/seo";
import LayoutOne from "../../../layouts/LayoutOne";
import Breadcrumb from "../../../wrappers/breadcrumb/Breadcrumb";
import { RootState } from '../../../types/RootStateTypes';
import Select, { SingleValue } from 'react-select';
import { allCountries } from 'country-region-data';
import { fetchUserCountry } from '../../../services/locationService';
import { handleCountryChange } from '../../../services/countryService';
import useWindowSize from '../../../hooks/useWindowSize';

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

  const handleCountryChangeWrapper = (selectedOption: SingleValue<OptionType>) => {
    handleCountryChange(selectedOption, setSelectedCountry, setRegions, setSelectedRegion);
  };

  const handleRegionChange = (selectedOption: SingleValue<OptionType>) => {
    setSelectedRegion(selectedOption);
    if (stateInputRef.current && selectedOption) {
      stateInputRef.current.value = selectedOption.label;
    }
  };

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
                  <div className="billing-info-wrap">
                    <h3>Billing Details</h3>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12 billing-info-mjoin">
                        <div className="billing-info mb-20">
                          <label>First Name</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12 billing-info-mjoin">
                        <div className="billing-info mb-20">
                          <label>Last Name</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-12">
                        <div className="billing-info mb-20">
                          <label>Email Address</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-12">
                        <div className="billing-info mb-20">
                          <label>Phone</label>
                          <input type="number" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="billing-info mb-20">
                          <label>Country</label>
                          <Select
                            options={allCountries.map((country) => ({ label: country[0], value: country[1] }))}
                            value={selectedCountry}
                            onChange={handleCountryChangeWrapper}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12 ">
                        <div className="billing-info mb-20">
                          <label>State / County</label>
                          <input
                            type="text"
                            ref={stateInputRef}
                            style={{ display: 'none' }}
                            autoComplete="address-level1"
                          />
                          <Select
                            options={regions}
                            value={selectedRegion}
                            onChange={handleRegionChange}
                            isDisabled={!regions.length}
                          />
                        </div>
                      </div>

                      {isMobile ? (
                        <>
                          <div className="col-lg-4 col-md-3 col-12">
                            <div className="billing-info mb-20">
                              <label>Street Address</label>
                              <input
                                className="billing-address"
                                placeholder="House number and street name"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-3 col-12 billing-info-mjoin">
                            <div className="billing-info mb-20">
                              <label>Town / City</label>
                              <input type="text" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-3 col-12 billing-info-mjoin">
                            <div className="billing-info mb-20">
                              <label>Postcode / ZIP</label>
                              <input type="text" />
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="col-lg-4 col-md-3 col-12 billing-info-mjoin">
                            <div className="billing-info mb-20">
                              <label>Town / City</label>
                              <input type="text" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-3 col-12">
                            <div className="billing-info mb-20">
                              <label>Address</label>
                              <input
                                className="billing-address"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-3 col-12 billing-info-mjoin">
                            <div className="billing-info mb-20">
                              <label>Postcode / ZIP</label>
                              <input type="text" />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
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
                        ddd
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
