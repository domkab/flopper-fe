import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import Breadcrumb from '../../wrappers/breadcrumb/Breadcrumb';

interface NavMenuProps {
  menuWhiteClass?: string,
  sidebarMenu?: boolean,
}

const NavMenu: React.FC<NavMenuProps> = ({ menuWhiteClass, sidebarMenu }) => {
  const { t } = useTranslation();
  let { pathname } = useLocation();

  return (
    <div
      className={clsx(sidebarMenu
        ? "sidebar-menu"
        : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`)}
    >

    </div>
  );
};

export default NavMenu;
