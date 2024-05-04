import { Fragment } from "react";
import HeaderSix from "../wrappers/header/HeaderSix";
import FooterOne from "../wrappers/footer/FooterOne";
import ScrollToTop from "../components/scroll-to-top"

interface LayoutSevenProps {
  children?: React.ReactNode;
}

const LayoutSeven: React.FC<LayoutSevenProps> = ({ children }) => {
  return (
    <Fragment>
      <HeaderSix layout="container-fluid" />
      {children}
      <FooterOne spaceTopClass="pt-100" spaceBottomClass="pb-70" />
      <ScrollToTop/>
    </Fragment>
  );
};

export default LayoutSeven;
