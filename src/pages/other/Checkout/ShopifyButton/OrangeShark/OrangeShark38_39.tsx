import React, { useEffect, useRef } from 'react';

const ShopifyOrangeShark38_39: React.FC = () => {
  const shopifyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

    const loadScript = () => {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      script.onload = ShopifyBuyInit;
      (document.head || document.body).appendChild(script);
    };

    const ShopifyBuyInit = () => {
      if ((window as any).ShopifyBuy) {
        const client = (window as any).ShopifyBuy.buildClient({
          domain: '655318-d0.myshopify.com',
          storefrontAccessToken: 'b7bf5321bb725f64915cb2447dbe8f9d',
        });

        (window as any).ShopifyBuy.UI.onReady(client).then((ui: any) => {
          ui.createComponent('product', {
            id: '8995304046926',
            variantId: '48413214015822',  // Ensure this is the correct variant ID for size 38-39
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
                    'font-family': 'Poppins, sans-serif',
                    'font-weight': 'bold',
                    'line-height': '1',
                    'padding': '23px 38px',
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
                      'border': '1px solid #theme-color',
                      'background-color': '#444',
                    },
                    ':focus': {
                      'color': '#fff',
                      'border': '1px solid #theme-color',
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
                      'background': '#theme-color',
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
                    'padding': '23px 38px',
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
                      'border': '1px solid #theme-color',
                      'background-color': '#444',
                    },
                    ':focus': {
                      'color': '#fff',
                      'border': '1px solid #theme-color',
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
                      'background': '#theme-color',
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
                  button: 'Add to cart',
                },
              },
              option: {},
              cart: {
                styles: {
                  button: {
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
                      'border': '1px solid #theme-color',
                      'background-color': '#444',
                    },
                  },
                },
                text: {
                  total: 'Subtotal',
                  button: 'Checkout',
                },
                popup: false,
                googleFonts: ['Poppins'],
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
                      'border': '1px solid #theme-color',
                      'background-color': '#444',
                    },
                    ':focus': {
                      'color': '#fff',
                      'border': '1px solid #theme-color',
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
    };

    if ((window as any).ShopifyBuy) {
      if ((window as any).ShopifyBuy.UI) {
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
      <div id="product-component-1719329272973" ref={shopifyRef}></div>
    </div>
  );
};

export default ShopifyOrangeShark38_39;
