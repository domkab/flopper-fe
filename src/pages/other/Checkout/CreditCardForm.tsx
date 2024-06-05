import { useState } from 'react';
import Card from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from './utils';

const CreditCardForm = () => {
  const [state, setState] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null
  });

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setState(prevState => ({
       ...prevState,
        issuer
      }));
    }
  };

  const handleInputFocus = (event) => {
    setState(prevState => ({
     ...prevState,
      focused: event.target.name
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let newValue = value;

    if (name === 'number') {
      newValue = formatCreditCardNumber(newValue);
    } else if (name === 'expiry') {
      newValue = formatExpirationDate(newValue);
    } else if (name === 'cvc') {
      newValue = formatCVC(newValue);
    }

    setState(prevState => ({
     ...prevState,
      [name]: newValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('You have finished payment!');
    // Resetting form fields can be done here if needed
  };

  const { name, number, expiry, cvc, focused, issuer } = state;

  return (
    <div key='Payment'>
      <div className='App-payment'>
        <h1>Enter your payment details</h1>
        <h4>Please input your information below</h4>
        <Card
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
          callback={handleCallback}
        />
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <small>Name on card:</small>
            <input
              type='text'
              name='name'
              className='form-control'
              placeholder='Name'
              pattern='[a-z A-Z-]+'
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className='form-group'>
            <small>Card Number:</small>
            <input
              type='tel'
              name='number'
              className='form-control'
              placeholder='Card Number'
              pattern='[\d| ]{16,22}'
              maxLength='19'
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className='form-group'>
            <small>Expiration Date:</small>
            <input
              type='tel'
              name='expiry'
              className='form-control'
              placeholder='Valid Thru'
              pattern='\d\d/\d\d'
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className='form-group'>
            <small>CVC:</small>
            <input
              type='tel'
              name='cvc'
              
              className='form-control'
              placeholder='CVC'
              pattern='\d{3}'
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <input type='hidden' name='issuer' value={issuer} />
          <div className='form-actions'>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreditCardForm;