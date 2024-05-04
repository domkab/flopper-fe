import { Fragment, useState, useEffect } from 'react';
import Paginator from 'react-hooks-paginator';
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSortedProducts } from '../../helpers/product';
import SEO from "../../components/seo";
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from '../../wrappers/breadcrumb/Breadcrumb';
import ShopSidebar from '../../wrappers/product/ShopSidebar';
import ShopTopbar from '../../wrappers/product/ShopTopBar';
import ShopProducts from '../../wrappers/product/ShopProducts';
import { RootState, Product } from "../../types/RootStateTypes";

const ShopGridStandard = () => {
  const [layout, setLayout] = useState<string>('grid three-column');
  const [sortType, setSortType] = useState<string>('');
  const [sortValue, setSortValue] = useState<string>('');
  const [filterSortType, setFilterSortType] = useState<string>('');
  const [filterSortValue, setFilterSortValue] = useState<string>('');
  const [offset, setOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentData, setCurrentData] = useState<Product[]>([]);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const { products } = useSelector((state: RootState) => state.product);

  const pageLimit = 15;
  const { pathname } = useLocation();

  const getLayout = (layout: string) => {
    setLayout(layout);
  };

  const getSortParams = (sortType: string, sortValue: string) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType: string, sortValue: string) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    const sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(sortedProducts, filterSortType, filterSortValue);
    setSortedProducts(filterSortedProducts);
    setCurrentData(filterSortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  return (
    <Fragment>
      <SEO
        titleTemplate="Shop Page"
        description="Shop page of flone react minimalist eCommerce template."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: import.meta.env.VITE_PUBLIC_URL + "/" },
            { label: "Shop", path: import.meta.env.VITE_PUBLIC_URL + pathname }
          ]}
        />

        <div className="shop-area pt-95 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 order-2 order-lg-1">
                {/* shop sidebar */}
                <ShopSidebar products={products} getSortParams={getSortParams} sideSpaceClass="mr-30" />
              </div>
              <div className="col-lg-9 order-1 order-lg-2">
                {/* shop topbar default */}
                <ShopTopbar getLayout={getLayout} getFilterSortParams={getFilterSortParams} productCount={products.length} sortedProductCount={currentData.length} />

                {/* shop page content default */}
                <ShopProducts layout={layout} products={currentData} />

                {/* shop product pagination */}
                <div className="pro-pagination-style text-center mt-30">
                  <Paginator
                    totalRecords={sortedProducts.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
}

export default ShopGridStandard;