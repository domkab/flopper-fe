import { useEffect, useRef } from 'react';

const ShopifySharkSmallBlue = () => {
  const shopifyRef = useRef(null);

  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

    function loadScript() {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      document.head.appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      const client = window.ShopifyBuy.buildClient({
        domain: '655318-d0.myshopify.com',
        storefrontAccessToken: 'b7bf5321bb725f64915cb2447dbe8f9d',
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent('product', {
          id: '8968302592334',
          variantId: '48346095616334',
          node: shopifyRef.current,
          moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
          options: {
            product: {
              styles: {
                product: {
                  '@media (min-width: 601px)': {
                    'max-width': 'calc(25% - 20px)',
                    'margin-left': '20px',
                    'margin-bottom': '50px',
                  },
                },
                button: {
                  'height': '60px',
                  'transition': 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  'font-family': 'Poppins, sans-serif',
                  'font-weight': 'bold',
                  'line-height': '1',
                  'padding': '23px 38px 23px',
                  'text-transform': 'uppercase',
                  'color': '#fff',
                  'border': 'none',
                  'background-color': '#343538',
                  'cursor': 'pointer',
                  'border-radius': '5px',
                  'position': 'relative',
                  'isolation': 'isolate',
                  ':hover': {
                    'color': '#fff',
                    'border': '1px solid $theme-color',
                    'background-color': '#444',
                  },
                  ':focus': {
                    'color': '#fff',
                    'border': '1px solid $theme-color',
                    'background-color': '#555',
                  },
                  ':disabled': {
                    'cursor': 'not-allowed',
                  },
                  '::before': {
                    'position': 'absolute',
                    'z-index': '-1',
                    'bottom': '0',
                    'left': '0',
                    'width': '100%',
                    'height': '100%',
                    'content': '""',
                    'transition': 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  },
                  '::after': {
                    'position': 'absolute',
                    'z-index': '-1',
                    'bottom': '0',
                    'left': 'auto',
                    'right': '0',
                    'width': '0',
                    'height': '100%',
                    'content': '""',
                    'background': '$theme-color',
                    'transition': 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  },
                  ':hover::after': {
                    'left': '0',
                    'right': 'auto',
                    'width': '100%',
                  },
                },
              },
              contents: {
                img: false,
                title: false,
                price: false,
                options: false,
              },
              text: {
                button: 'Add to cart',
              },
              googleFonts: ['Poppins'],
            },
            productSet: {
              styles: {
                products: {
                  '@media (min-width: 601px)': {
                    'margin-left': '-20px',
                  },
                },
              },
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
              },
              styles: {
                product: {
                  '@media (min-width: 601px)': {
                    'max-width': '100%',
                    'margin-left': '0px',
                    'margin-bottom': '0px',
                  },
                },
                button: {
                  'font-family': 'Poppins, sans-serif',
                  'font-weight': 'bold',
                  'line-height': '1',
                  'padding': '23px 38px 23px',
                  'text-transform': 'uppercase',
                  'height': '300px',
                  'width': '20px',
                  'color': '#fff',
                  'border': 'none',
                  'background-color': '#343538',
                  'transition': 'all 0.5s ease-in-out 0s',
                  'cursor': 'pointer',
                  'border-radius': '5px',
                  'position': 'relative',
                  'isolation': 'isolate',
                  ':hover': {
                    'color': '#fff',
                    'border': '1px solid $theme-color',
                    'background-color': '#555',
                  },
                  ':focus': {
                    'color': '#fff',
                    'border': '1px solid $theme-color',
                    'background-color': '#555',
                  },
                  ':disabled': {
                    'cursor': 'not-allowed',
                  },
                  '::before': {
                    'position': 'absolute',
                    'z-index': '-1',
                    'bottom': '0',
                    'left': '0',
                    'width': '100%',
                    'height': '100%',
                    'content': '""',
                    'transition': 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  },
                  '::after': {
                    'position': 'absolute',
                    'z-index': '-1',
                    'bottom': '0',
                    'left': 'auto',
                    'right': '0',
                    'width': '0',
                    'height': '100%',
                    'content': '""',
                    'background': '$theme-color',
                    'transition': 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  },
                  ':hover::after': {
                    'left': '0',
                    'right': 'auto',
                    'width': '100%',
                  },
                },
              },
              googleFonts: ['Poppins'],
              text: {
                button: 'ADD TO CART',
              },
            },
            option: {},
            cart: {
              styles: {
                button: {
                  'font-family': 'Poppins, sans-serif',
                  'font-weight': '700',
                  'line-height': '1',
                  'padding': '23px 38px 23px',
                  'text-transform': 'uppercase',
                  'color': '#fff',
                  'border': 'none',
                  'background-color': '#343538',
                  'transition': 'all 0.5s ease-in-out 0s',
                  'cursor': 'pointer',
                  'border-radius': '5px',
                  'position': 'relative',
                  'isolation': 'isolate',
                  ':hover': {
                    'color': '#fff',
                    'border': '1px solid $theme-color',
                    'background-color': '#555',
                  },
                },
              },
              text: {
                total: 'Subtotal',
                button: 'Checkout',
              },
              popup: false,
              googleFonts: ['Poppins Bold'],
            },
            toggle: {
              styles: {
                toggle: {
                  'font-family': 'Poppins, sans-serif',
                  'font-weight': 'bold',
                  'line-height': '1',
                  'text-transform': 'uppercase',
                  'color': '#fff',
                  'border': 'none',
                  'background-color': '#343538',
                  'transition': 'all 0.5s ease-in-out 0s',
                  'cursor': 'pointer',
                  'border-radius': '5px',
                  'position': 'relative',
                  'isolation': 'isolate',
                  ':hover': {
                    'color': '#fff',
                    'border': '1px solid $theme-color',
                    'background-color': '#555',
                  },
                  ':focus': {
                    'color': '#fff',
                    'border': '1px solid $theme-color',
                    'background-color': '#555',
                  },
                  ':disabled': {
                    'cursor': 'not-allowed',
                  },
                  ':hover::after': {
                    'left': '0',
                    'right': 'auto',
                    'width': '100%',
                  },
                },
              },
              googleFonts: ['Poppins'],
            },
          },
        });
      });
    }

    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
  }, []);

  return (
    <div className="pro-details-cart btn-hover">
      <div id='product-component-1718709545645' ref={shopifyRef}></div>
    </div>
  );
};

export default ShopifySharkSmallBlue;
