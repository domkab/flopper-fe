import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrencyState } from "../../types/RootStateTypes";

const initialState: CurrencyState = {
  current: {
    code: "EUR",
    symbol: "€",
    currencyRate: 1,
    currencySymbol: "€",
  },
  currencyRate: 1,
  currencySymbol: "€",
  currencyName: "EUR",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case "USD":
          return {
            ...state,
            current: {
              code: "USD",
              symbol: "$",
              currencyRate: 1,
              currencySymbol: "$",
            },
            currencySymbol: "$",
            currencyName: "USD",
          };
        case "EUR":
          return {
            ...state,
            current: {
              code: "EUR",
              symbol: "€",
              currencyRate: 1,
              currencySymbol: "€",
            },
            currencySymbol: "€",
            currencyName: "EUR",
          };
        case "GBP":
          return {
            ...state,
            current: {
              code: "GBP",
              symbol: "£",
              currencyRate: 1,
              currencySymbol: "£",
            },
            currencySymbol: "£",
            currencyName: "GBP",
          };
        default:
          return state;
      }
    }
  }
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
