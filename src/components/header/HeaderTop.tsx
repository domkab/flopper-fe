import clsx from "clsx";
import { useSelector } from "react-redux";
import LanguageCurrencyChanger from "./sub-components/LanguageCurrencyChanger";
import { RootState, CurrencyState } from "../../types/RootStateTypes";

interface HeaderTopProps {
  borderStyle?: string;
}

const HeaderTop: React.FC<HeaderTopProps> = ({ borderStyle = "" }: HeaderTopProps) => {
  const currency = useSelector<RootState, CurrencyState>((state) => state.currency);

  return (
    <div
      className={clsx("header-top-wap", borderStyle === "fluid-border" && "border-none")}>
      <LanguageCurrencyChanger currency={currency} />
      <div className="header-offer">
        <p>
          Free delivery on order over{" "}
          <span>
            {(currency.current?.symbol ?? "") + (200 * (currency.current?.currencyRate ?? 1)).toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default HeaderTop;
