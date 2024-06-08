import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Card, { Focused } from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from './utils';
import './CreditCardForm.scss';

interface CreditCardFormValues {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
}

const CreditCardForm: React.FC = () => {
  const { control, trigger, formState: { errors }, watch } = useFormContext<CreditCardFormValues>();
  const [issuer, setIssuer] = useState<string>('');
  const [focused, setFocused] = useState<Focused | undefined>(undefined);

  const handleCallback = ({ issuer }: { issuer: string }, isValid: boolean) => {
    if (isValid) {
      setIssuer(issuer);
    }
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(event.target.name as Focused);
  };

  const handleBlur = (field: keyof CreditCardFormValues) => {
    trigger(field);
  };

  const values = watch();

  return (
    <div className='payment-form'>
      <div className='row'>
        <div className='col-12'>
          <Card
            number={values.number}
            name={values.name}
            expiry={values.expiry}
            cvc={values.cvc}
            focused={focused}
            callback={handleCallback}
          />
        </div>
        <div className='col-12'>
          <div className='billing-info mb-20'>
            <label>Card Number</label>
            <Controller
              name="number"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className='billing-info__input'
                  placeholder='Card Number'
                  maxLength={19}
                  onChange={(e) => {
                    field.onChange(formatCreditCardNumber(e.target.value));
                  }}
                  onFocus={handleInputFocus}
                  onBlur={() => handleBlur('number')}
                />
              )}
            />
            {errors.number && <div className='billing-info__error'>{errors.number.message}</div>}
          </div>
          <div className='billing-info mb-20'>
            <label>Name on card</label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className='billing-info__input'
                  placeholder='Name'
                  onFocus={handleInputFocus}
                  onBlur={() => handleBlur('name')}
                />
              )}
            />
            {errors.name && <div className='billing-info__error'>{errors.name.message}</div>}
          </div>
          <div className='billing-info mb-20'>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12 billing-info-mjoin">
                <label>Expiration Date</label>
                <Controller
                  name="expiry"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className='billing-info__input'
                      placeholder='Valid Thru'
                      onChange={(e) => {
                        field.onChange(formatExpirationDate(e.target.value));
                      }}
                      onFocus={handleInputFocus}
                      onBlur={() => handleBlur('expiry')}
                    />
                  )}
                />
                {errors.expiry && <div className='billing-info__error'>{errors.expiry.message}</div>}
              </div>
              <div className="col-lg-6 col-md-6 col-12 billing-info-mjoin">
                <label>CVC</label>
                <Controller
                  name="cvc"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className='billing-info__input'
                      placeholder='CVC'
                      onChange={(e) => {
                        field.onChange(formatCVC(e.target.value));
                      }}
                      onFocus={handleInputFocus}
                      onBlur={() => handleBlur('cvc')}
                    />
                  )}
                />
                {errors.cvc && <div className='billing-info__error'>{errors.cvc.message}</div>}
              </div>
            </div>
          </div>
          <input type='hidden' name='issuer' value={issuer} />
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
