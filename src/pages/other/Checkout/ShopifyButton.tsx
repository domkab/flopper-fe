import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

interface ShopifyButtonProps {
  variant: string;
  size: string;
  onCartUpdate: (cartData: any) => void;
}

const ShopifyButton = forwardRef<any, ShopifyButtonProps>(({ variant, size, onCartUpdate }, ref) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);
  const productComponentRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    addToCart() {
      if (productComponentRef.current) {
        productComponentRef.current.addToCart();
      }
    }
  }));

  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

    const loadScript = () => {
      if (scriptLoaded.current) return;

      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      document.head.appendChild(script);
      script.onload = ShopifyBuyInit;
      scriptLoaded.current = true;
    };

    const ShopifyBuyInit = () => {
      if (!window.ShopifyBuy) return;

      const client = window.ShopifyBuy.buildClient({
        domain: '655318-d0.myshopify.com',
        storefrontAccessToken: 'b7bf5321bb725f64915cb2447dbe8f9d',
        apiVersion: '2023-04',
      });

      (window as any).ShopifyBuy.UI.onReady(client).then((ui: any) => {
        if (componentRef.current) {
          productComponentRef.current = ui.createComponent('product', {
            id: '8968302592334',
            node: componentRef.current,
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
                },
                contents: {
                  img: false,
                  title: false,
                  price: false,
                },
                text: {
                  button: 'Add to cart',
                },
                variants: variant ? [{ option1: variant, option2: size }] : undefined,
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
                },
                text: {
                  button: 'Add to cart',
                },
              },
              option: {},
              cart: {
                text: {
                  total: 'Subtotal',
                  button: 'Checkout',
                },
              },
              toggle: {},
            },
          });

          // Listen for cart updates
          productComponentRef.current.cart.on('change', () => {
            const cartData = productComponentRef.current.cart.model;
            onCartUpdate(cartData);
          });
        }
      });
    };

    if (window.ShopifyBuy) {
      if ((window as any).ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

    // Cleanup function
    return () => {
      if (componentRef.current) {
        componentRef.current.innerHTML = '';
      }
    };
  }, [variant, size, onCartUpdate]);

  return <div id="product-component-1718695204127" ref={componentRef}></div>;
});

export default ShopifyButton;
