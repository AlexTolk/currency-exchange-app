const EmailField = ({ value, setFormData }) => {
    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, email: e.target.value }));
    };

    return (
        <div>
            <label>Email:</label>
            <input type="email" value={value} onChange={handleChange} required />
        </div>
    );
};

export default EmailField;