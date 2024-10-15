import './EmailField.css'

const EmailField = ({ value, setFormData }) => {
    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, email: e.target.value }));
    };

    return (
        <div className="email-input">
            <label>Email:</label>
            <input type="email" value={value} onChange={handleChange} required />
        </div>
    );
};

export default EmailField;