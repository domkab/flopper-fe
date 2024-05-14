declare module 'react-hooks-paginator' {
  export function usePaginator(
      totalRecords: number,
      pageLimit: number,
      currentPage: number,
      setCurrentPage: (page: number) => void
  ): {
      offset: number;
      currentPage: number;
      setCurrentPage: (page: number) => void;
  };

  export interface PaginatorProps {
      totalRecords: number;
      pageLimit: number;
      pageNeighbours?: number;
      setOffset: (offset: number) => void;
      currentPage: number;
      setCurrentPage: (page: number) => void;
      pageContainerClass?: string;
      pagePrevText?: string;
      pageNextText?: string;
  }

  export default function Paginator(props: PaginatorProps): JSX.Element;
}
