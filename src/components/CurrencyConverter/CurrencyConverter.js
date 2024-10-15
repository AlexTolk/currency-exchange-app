import React, { useState, useEffect } from 'react';
import './CurrencyConverter.css'

const CurrencyConverter = () => {
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [targetCurrency, setTargetCurrency] = useState('EUR');
    const [amount, setAmount] = useState(1);
    const [conversionRate, setConversionRate] = useState(1);

    useEffect(() => {
        fetch(`https://api.exchangerate.host/convert?access_key=4c63606638c1cae06a418b4879f6ebbc&from=${baseCurrency}&to=${targetCurrency}&amount=${amount}`)
            .then(response => response.json())
            .then(data => {
                setConversionRate(data.info.quote)
            }).catch(error => console.error('Error fetching exchange rate', error));
    }, [baseCurrency, targetCurrency, amount]);

    return (
        <div className='converter-container'>
            <h3>Currencies</h3>
            <div className='currencies-container'>
                <label>Base Currency:</label>
                <select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
                    <option value="USD">US Dollars</option>
                    <option value="EUR">Euros</option>
                    <option value="RUB">Rubles</option>
                    <option value="CNY">Chinese Yuan</option>
                    <option value="GBP">British Pounds</option>
                </select>

                <label>Target Currency:</label>
                <select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
                <option value="USD">US Dollars</option>
                    <option value="EUR">Euros</option>
                    <option value="RUB">Rubles</option>
                    <option value="CNY">Chinese Yuan</option>
                    <option value="GBP">British Pounds</option>
                </select>

            </div>
            <label>Amount:</label>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <p>Price for 1 {baseCurrency}: {conversionRate} {targetCurrency}</p>
            <p>Converted Amount: {amount * conversionRate}</p>
        </div>
    );
};

export default CurrencyConverter;