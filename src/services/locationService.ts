import axios from 'axios';
import { allCountries } from 'country-region-data';

interface OptionType {
  label: string;
  value: string;
}

export const fetchUserCountry = async (
  setSelectedCountry: (country: OptionType | null) => void,
  setRegions: (regions: OptionType[]) => void
) => {
  try {
    const response = await axios.get('https://ipapi.co/json/');
    const countryCode = response.data.country;
    const ipAddress = response.data.ip;
    console.log("User's IP Address:", ipAddress);

    const countryData = allCountries.find((country) => country[1] === countryCode);
    if (countryData) {
      setSelectedCountry({ label: countryData[0], value: countryData[1] });
      setRegions(countryData[2].map((region: [string, string]) => {
        return { label: region[0], value: region[1] };
      }));
    }
  } catch (error) {
    console.error("Error fetching user location:", error);
    // Set a default country if fetching the user's country fails
    const defaultCountry = allCountries.find((country) => country[1] === 'US');
    if (defaultCountry) {
      setSelectedCountry({ label: defaultCountry[0], value: defaultCountry[1] });
      setRegions(defaultCountry[2].map((region: [string, string]) => {
        return { label: region[0], value: region[1] };
      }));
    }
  }
};
