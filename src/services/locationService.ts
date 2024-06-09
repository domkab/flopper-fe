
import axios from 'axios';
import { allCountries } from 'country-region-data';

interface OptionType {
  label: string;
  value: string;
}

export const fetchUserCountry = async (
  setSelectedCountry: (country: OptionType) => void
) => {
  try {
    const response = await axios.get('https://ipinfo.io/json');
    const countryCode = response.data.country;
    const ipAddress = response.data.ip;
    console.log("User's IP Address:", ipAddress);

    const countryData = allCountries.find((country) => country[1] === countryCode);
    if (countryData) {
      setSelectedCountry({ label: countryData[0], value: countryData[1] });
    } else {
      console.warn("Country data not found for code:", countryCode);
      setFallbackCountry(setSelectedCountry);
    }
  } catch (error) {
    console.error("Error fetching user location:", error);
    setFallbackCountry(setSelectedCountry);
  }
};

const setFallbackCountry = (setSelectedCountry: (country: OptionType) => void) => {
  const defaultCountry = allCountries.find((country) => country[1] === 'US');
  if (defaultCountry) {
    setSelectedCountry({ label: defaultCountry[0], value: defaultCountry[1] });
  } else {
    console.error("Default country data not found");
  }
};
