import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderOne from "../wrappers/header/HeaderOne";
import FooterOne from "../wrappers/footer/FooterOne";

interface LayoutOneProps {
    children: React.ReactNode;
    headerContainerClass?: string;
    headerTop?: string;
    headerPaddingClass?: string;
    headerPositionClass?: string;
}

const LayoutOne: React.FC<LayoutOneProps> = ({
    children,
    headerContainerClass,
    headerTop,
    headerPaddingClass,
    headerPositionClass,
}) => {
    return (
        <Fragment>
            <HeaderOne
                layout={headerContainerClass}
                top={headerTop}
                headerPaddingClass={headerPaddingClass}
                headerPositionClass={headerPositionClass}
            />
            {children}
            <FooterOne
                backgroundColorClass="bg-gray"
                spaceTopClass="pt-100"
                spaceBottomClass="pb-70"
            />
        </Fragment>
    );
};

export default LayoutOne;
