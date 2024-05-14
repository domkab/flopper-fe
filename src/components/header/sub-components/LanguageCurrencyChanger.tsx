import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { setCurrency } from "../../../store/slices/currency-slice";
import { CurrencyState } from "../../../types/RootStateTypes";

interface LanguageCurrencyChangerProps {
    currency: CurrencyState;
}

const LanguageCurrencyChanger = ({ currency }: LanguageCurrencyChangerProps) => {
    const { i18n } = useTranslation();
    const dispatch = useDispatch();

    const changeLanguageTrigger = (e: React.MouseEvent<HTMLButtonElement>) => {
        const languageCode = e.currentTarget.value;
        i18n.changeLanguage(languageCode);
    };

    const setCurrencyTrigger = (e: React.MouseEvent<HTMLButtonElement>) => {
        const currencyName = e.currentTarget.value;
        dispatch(setCurrency(currencyName));
    };

    return (
        <div className="language-currency-wrap">
            <div className="same-language-currency language-style">
                <span>
                    {i18n.resolvedLanguage === "en"
                        ? "English"
                        : i18n.resolvedLanguage === "fn"
                        ? "French"
                        : i18n.resolvedLanguage === "de"
                        ? "Germany"
                        : ""}{" "}
                    <i className="fa fa-angle-down" />
                </span>
                <div className="lang-car-dropdown">
                    <ul>
                        <li>
                            <button value="en" onClick={changeLanguageTrigger}>
                                English
                            </button>
                        </li>
                        <li>
                            <button value="fn" onClick={changeLanguageTrigger}>
                                French
                            </button>
                        </li>
                        <li>
                            <button value="de" onClick={changeLanguageTrigger}>
                                Germany
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="same-language-currency use-style">
                <span>
                    {currency.currencyName} <i className="fa fa-angle-down" />
                </span>
                <div className="lang-car-dropdown">
                    <ul>
                        <li>
                            <button value="USD" onClick={setCurrencyTrigger}>
                                USD
                            </button>
                        </li>
                        <li>
                            <button value="EUR" onClick={setCurrencyTrigger}>
                                EUR
                            </button>
                        </li>
                        <li>
                            <button value="GBP" onClick={setCurrencyTrigger}>
                                GBP
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="same-language-currency">
                <p>Call Us 3965410</p>
            </div>
        </div>
    );
};

export default LanguageCurrencyChanger;
