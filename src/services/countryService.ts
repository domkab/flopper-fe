import { allCountries } from 'country-region-data';

interface OptionType {
  label: string;
  value: string;
}

export const handleCountryChange = (
  selectedOption: OptionType | null,
  setSelectedCountry: (country: OptionType | null) => void,
  setRegions: (regions: OptionType[]) => void,
  setSelectedRegion: (region: OptionType | null) => void
) => {
  setSelectedCountry(selectedOption);
  if (selectedOption) {
    const countryData = allCountries.find(
      (country) => country[1] === selectedOption.value
    );
    if (countryData) {
      setRegions(countryData[2].map((region: [string, string]) => {
        return { label: region[0], value: region[1] };
      }));
    } else {
      setRegions([]);
    }
    setSelectedRegion(null);
  }
};
