import React, { useEffect } from "react";
import MobileMenuSearch from "./sub-components/MobileSearch";
import MobileNavMenu from "./sub-components/MobileNavMenu";
import MobileLangCurChange from "./sub-components/MobileLangCurrChange";
import MobileWidgets from "./sub-components/MobileWidgets";

const MobileMenu: React.FC = () => {
  useEffect(() => {
    const offCanvasNav = document.querySelector("#offcanvas-navigation") as HTMLElement | null;

    if (offCanvasNav) {
      const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");
      const anchorLinks = offCanvasNav.querySelectorAll("a");

      offCanvasNavSubMenu.forEach(subMenu => {
        subMenu.insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
      });

      const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
      menuExpand.forEach(item => {
        item.addEventListener("click", (event: Event) => {
          const mouseEvent = event as MouseEvent;
          sideMenuExpand(mouseEvent);
        });
      });

      anchorLinks.forEach(link => {
        link.addEventListener("click", () => closeMobileMenu());
      });
    }
  });

  const sideMenuExpand = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    const parent = target.parentElement;
    if (parent) {
      parent.classList.toggle("active");
    }
  };

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector("#offcanvas-mobile-menu") as HTMLElement | null;
    if (offcanvasMobileMenu) {
      offcanvasMobileMenu.classList.remove("active");
    }
  };

  return (
    <div className="offcanvas-mobile-menu" id="offcanvas-mobile-menu">
      <button
        className="offcanvas-menu-close"
        id="mobile-menu-close-trigger"
        onClick={() => closeMobileMenu()}
      >
        <i className="pe-7s-close"></i>
      </button>
      <div className="offcanvas-wrapper">
        <div className="offcanvas-inner-content">
          <MobileMenuSearch />
          <MobileNavMenu />
          <MobileLangCurChange />
          <MobileWidgets />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
