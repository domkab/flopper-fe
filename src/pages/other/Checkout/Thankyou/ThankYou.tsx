import React from 'react';
import './ThankYou.scss';
const ThankYou: React.FC = () => {
  return (
    <div className="woolentor-page-template">
      <div className="woolentor woocommerce woocommerce-order">
        <div
          style={{ height: '100px' }}
          aria-hidden="true"
          className="wp-block-spacer"
        ></div>
        <div className="woolentorblock-5f4d6f79-801b-4af4-ae42-a54f267467b0 woolentor_block_thankyou_address_details"></div>
        <div className="woolentorblock-a57b2752-ca60-401e-b3fa-9d2a9dd70624 woolentor_block_thankyou_order">
          <p className="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received">
            Thank you. Your order has been received.
          </p>
          <ul className="woocommerce-order-overview woocommerce-thankyou-order-details order_details">
            <li className="woocommerce-order-overview__order order">
              Order number: <strong>1246</strong>
            </li>
            <li className="woocommerce-order-overview__date date">
              Date: <strong>May 27, 2019</strong>
            </li>
            <li className="woocommerce-order-overview__total total">
              Total: <strong><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>843.00</bdi></span></strong>
            </li>
            <li className="woocommerce-order-overview__payment-method method">
              Payment method: <strong>Cash on delivery</strong>
            </li>
          </ul>
          <div className="woocommerce-thankyou-order-payment-info-message">
            <p>Pay with cash upon delivery.</p>
          </div>
        </div>
        <div className="woolentorblock-11f5138c-0623-478a-88fc-13ce99ae7df0 woolentor_block_thankyou_order_details">
          <section className="woocommerce-order-details">
            <h2 className="woocommerce-order-details__title">Order details</h2>
            <table className="woocommerce-table woocommerce-table--order-details shop_table order_details">
              <thead>
                <tr>
                  <th className="woocommerce-table__product-name product-name">Product</th>
                  <th className="woocommerce-table__product-table product-total">Total</th>
                </tr>
              </thead>
              <tbody>
                {/* Populate with order items */}
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row">Subtotal:</th>
                  <td><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>0.00</bdi></span></td>
                </tr>
                <tr>
                  <th scope="row">Payment method:</th>
                  <td>Cash on delivery</td>
                </tr>
                <tr>
                  <th scope="row">Total:</th>
                  <td><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>843.00</bdi></span></td>
                </tr>
              </tfoot>
            </table>
          </section>
        </div>
        <div className="woolentorblock-4484893f-0558-4c13-94f9-ce0a5c90f23c woolentor_block_thankyou_address_details"></div>
      </div>
    </div>
  );
};

export default ThankYou;
