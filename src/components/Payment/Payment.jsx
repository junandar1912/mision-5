import React, { useState } from 'react';
import './Payment.css';

const paymentOptions = {
  bank: [
    { name: 'Bank BCA', logo: '../src/assets/Bank/bca.svg' },
    { name: 'Bank BNI', logo: '../src/assets/Bank/bni.svg' },
    { name: 'Bank BRI', logo: '../src/assets/Bank/bri.svg' },
    { name: 'Bank Mandiri', logo: '../src/assets/Bank/mandiri.svg' },
  ],
  ewallet: [
    { name: 'Dana', logo: '../src/assets/Bank/dana.svg' },
    { name: 'OVO', logo: '../src/assets/Bank/ovo.svg' },
    { name: 'LinkAja', logo: '../src/assets/Bank/link.svg' },
    { name: 'Shopee Pay', logo: '../src/assets/Bank/shope.svg' },
  ],
  card: [
    { name: 'Visa', logo: '../src/assets/Bank/visa.svg' },
  ],
};

const PaymentMethods = () => {

    const [expanded, setExpanded] = useState('');
    const [selected, setSelected] = useState({});
  
    const toggleExpand = (section) => {
      setExpanded(expanded === section ? '' : section);
    };
  
    const handleChange = (section, name) => {
      setSelected({ ...selected, [section]: name });
    };
  
    const renderOptions = (section) => (
      <div className="options">
        {paymentOptions[section].map((option, index) => {
          const inputId = `${section}-${index}`;
          return (
            <label key={index} className={`option-label-bank ${selected[section] === option.name ? 'selected' : ''}`}>
              <div className='logo-name'>
                <img src={option.logo} alt={option.name} />
                <span className='name-logo'>{option.name}</span>
              </div>
             <div>
              <input
                type="radio"
                className='radio-bank'
                name={section}
                id={inputId}
                checked={selected[section] === option.name}
                onChange={() => handleChange(section, option.name)}/>
              </div>
            </label>
          );
        })}
      </div>
    );
  
    return (
      <div className="payment-methods">
        <div className="section">
          <div className="section-header" onClick={() => toggleExpand('bank')}>
            Transfer Bank
          </div>
          {expanded === 'bank' && renderOptions('bank')}
        </div>
  
        <div className="section">
          <div className="section-header" onClick={() => toggleExpand('ewallet')}>
            E-Wallet
          </div>
          {expanded === 'ewallet' && renderOptions('ewallet')}
        </div>
  
        <div className="section">
          <div className="section-header" onClick={() => toggleExpand('card')}>
            Kartu Kredit/Debit
          </div>
          {expanded === 'card' && renderOptions('card')}
        </div>
      </div>
    );
  };
  
  export default PaymentMethods;