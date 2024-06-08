import React, { useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select, { SingleValue } from "react-select";
import { allCountries } from "country-region-data";
import { fetchUserCountry } from "../../../services/locationService";
import { handleCountryChange } from "../../../services/countryService";
import useWindowSize from "../../../hooks/useWindowSize";

interface OptionType {
  label: string;
  value: string;
}

interface BillingInfoFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: OptionType | null;
  region: OptionType | null;
  streetAddress: string;
  city: string;
  postcode: string;
}

interface BillingInfoProps {
  selectedCountry: SingleValue<OptionType>;
  setSelectedCountry: (country: SingleValue<OptionType>) => void;
  selectedRegion: SingleValue<OptionType>;
  setSelectedRegion: (region: SingleValue<OptionType>) => void;
  regions: OptionType[];
  setRegions: (regions: OptionType[]) => void;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  streetAddress: Yup.string().required('Street Address is required'),
  city: Yup.string().required('Town / City is required'),
  postcode: Yup.string().required('Postcode / ZIP is required'),
  country: Yup.mixed<OptionType>().required('Country is required').nullable(),
  region: Yup.mixed<OptionType>().required('State / County is required').nullable()
});

const BillingInfo: React.FC<BillingInfoProps> = ({
  selectedCountry,
  setSelectedCountry,
  selectedRegion,
  setSelectedRegion,
  regions,
  setRegions
}) => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const stateInputRef = useRef<HTMLInputElement>(null);

  const { control, setValue, trigger, formState: { errors } } = useForm<BillingInfoFormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: selectedCountry,
      region: selectedRegion,
      streetAddress: '',
      city: '',
      postcode: ''
    }
  });

  const handleCountryChangeWrapper = (selectedOption: SingleValue<OptionType>) => {
    handleCountryChange(selectedOption, setSelectedCountry, setRegions, setSelectedRegion);
    setValue('country', selectedOption);
  };

  const handleRegionChange = (selectedOption: SingleValue<OptionType>) => {
    setSelectedRegion(selectedOption);
    if (stateInputRef.current && selectedOption) {
      stateInputRef.current.value = selectedOption.label;
    }
    setValue('region', selectedOption);
  };

  useEffect(() => {
    if (selectedRegion && stateInputRef.current) {
      stateInputRef.current.value = selectedRegion.label;
    }
  }, [selectedRegion]);

  useEffect(() => {
    fetchUserCountry(setSelectedCountry, setRegions);
  }, []);

  return (
    <div className="billing-info-wrap">
      <h3>Billing Details</h3>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12 billing-info-mjoin">
          <div className="billing-info mb-20">
            <label>First Name</label>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={`billing-info__input ${errors.firstName ? 'error' : ''}`}
                  onBlur={() => trigger('firstName')}
                />
              )}
            />
            {errors.firstName && <div className="billing-info__error">{errors.firstName.message}</div>}
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12 billing-info-mjoin">
          <div className="billing-info mb-20">
            <label>Last Name</label>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={`billing-info__input ${errors.lastName ? 'error' : ''}`}
                  onBlur={() => trigger('lastName')}
                />
              )}
            />
            {errors.lastName && <div className="billing-info__error">{errors.lastName.message}</div>}
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-12">
          <div className="billing-info mb-20">
            <label>Email Address</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={`billing-info__input ${errors.email ? 'error' : ''}`}
                  onBlur={() => trigger('email')}
                />
              )}
            />
            {errors.email && <div className="billing-info__error">{errors.email.message}</div>}
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-12">
          <div className="billing-info mb-20">
            <label>Phone</label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={`billing-info__input ${errors.phone ? 'error' : ''}`}
                  onBlur={() => trigger('phone')}
                />
              )}
            />
            {errors.phone && <div className="billing-info__error">{errors.phone.message}</div>}
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="billing-info mb-20">
            <label>Country</label>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={allCountries.map((country) => ({ label: country[0], value: country[1] }))}
                  value={selectedCountry}
                  onChange={handleCountryChangeWrapper}
                  onBlur={() => trigger('country')}
                  className={`billing-info__select ${errors.country ? 'error' : ''}`}
                />
              )}
            />
            {errors.country && <div className="billing-info__error">{errors.country?.message}</div>}
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12 ">
          <div className="billing-info mb-20">
            <label>State / County</label>
            <input
              type="text"
              ref={stateInputRef}
              style={{ display: 'none' }}
              autoComplete="address-level1"
            />
            <Controller
              name="region"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={regions}
                  value={selectedRegion}
                  onChange={handleRegionChange}
                  isDisabled={!regions.length}
                  onBlur={() => trigger('region')}
                  className={`billing-info__select ${errors.region ? 'error' : ''}`}
                />
              )}
            />
            {errors.region && <div className="billing-info__error">{errors.region?.message}</div>}
          </div>
        </div>

        {isMobile ? (
          <>
            <div className="col-lg-4 col-md-3 col-12">
              <div className="billing-info mb-20">
                <label>Street Address</label>
                <Controller
                  name="streetAddress"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className={`billing-info__input ${errors.streetAddress ? 'error' : ''}`}
                      placeholder="House number and street name"
                      onBlur={() => trigger('streetAddress')}
                    />
                  )}
                />
                {errors.streetAddress && <div className="billing-info__error">{errors.streetAddress.message}</div>}
              </div>
            </div>
            <div className="col-lg-4 col-md-3 col-12 billing-info-mjoin">
              <div className="billing-info mb-20">
                <label>Town / City</label>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className={`billing-info__input ${errors.city ? 'error' : ''}`}
                      onBlur={() => trigger('city')}
                    />
                  )}
                />
                {errors.city && <div className="billing-info__error">{errors.city.message}</div>}
              </div>
            </div>
            <div className="col-lg-4 col-md-3 col-12 billing-info-mjoin">
              <div className="billing-info mb-20">
                <label>Postcode / ZIP</label>
                <Controller
                  name="postcode"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className={`billing-info__input ${errors.postcode ? 'error' : ''}`}
                      onBlur={() => trigger('postcode')}
                    />
                  )}
                />
                {errors.postcode && <div className="billing-info__error">{errors.postcode.message}</div>}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="col-lg-4 col-md-3 col-12 billing-info-mjoin">
              <div className="billing-info mb-20">
                <label>Town / City</label>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className={`billing-info__input ${errors.city ? 'error' : ''}`}
                      onBlur={() => trigger('city')}
                    />
                  )}
                />
                {errors.city && <div className="billing-info__error">{errors.city.message}</div>}
              </div>
            </div>
            <div className="col-lg-4 col-md-3 col-12">
              <div className="billing-info mb-20">
                <label>Address</label>
                <Controller
                  name="streetAddress"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className={`billing-info__input ${errors.streetAddress ? 'error' : ''}`}
                      onBlur={() => trigger('streetAddress')}
                    />
                  )}
                />
                {errors.streetAddress && <div className="billing-info__error">{errors.streetAddress.message}</div>}
              </div>
            </div>
            <div className="col-lg-4 col-md-3 col-12 billing-info-mjoin">
              <div className="billing-info mb-20">
                <label>Postcode / ZIP</label>
                <Controller
                  name="postcode"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className={`billing-info__input ${errors.postcode ? 'error' : ''}`}
                      onBlur={() => trigger('postcode')}
                    />
                  )}
                />
                {errors.postcode && <div className="billing-info__error">{errors.postcode.message}</div>}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BillingInfo;



// const validationSchema = Yup.object().shape({
//   firstName: Yup.string().required('First Name is required'),
//   lastName: Yup.string().required('Last Name is required'),
//   email: Yup.string().email('Invalid email format').required('Email is required'),
//   phone: Yup.string().required('Phone is required'),
//   streetAddress: Yup.string().required('Street Address is required'),
//   city: Yup.string().required('Town / City is required'),
//   postcode: Yup.string().required('Postcode / ZIP is required'),
//   country: Yup.mixed<OptionType>().required('Country is required').nullable(),
//   region: Yup.string().required('State / County is required'),
// });