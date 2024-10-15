import NameField from '../NameField/NameField';
import EmailField from '../EmailField/EmailField';
import MessageField from '../MessageField/MessageField';
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';

import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        currencyData: null,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('message', formData.message);
        data.append('currencyData', JSON.stringify(formData.currencyData));

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: data,
        }).then(response => {
            if (response.ok) {
                alert('Form submitted successfully');
                setFormData({ name: '', email: '', message: '', currencyData: null });
            }
        }).catch(error => {
            alert('Submission failed');
            console.error(error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <NameField value={formData.name} setFormData={setFormData} />
            <EmailField value={formData.email} setFormData={setFormData} />
            <MessageField value={formData.message} setFormData={setFormData} />
            <CurrencyConverter setFormData={setFormData} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;

