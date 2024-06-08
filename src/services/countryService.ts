import { allCountries } from 'country-region-data';

interface OptionType {
  label: string;
  value: string;
}

export const handleCountryChange = (
  selectedOption: OptionType | null,
  setSelectedCountry: (country: OptionType | null) => void
) => {
  setSelectedCountry(selectedOption);
};
