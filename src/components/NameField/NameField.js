const NameField = ({ value, setFormData }) => {
    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, name: e.target.value }));
    };

    return (
        <div>
            <label>Name:</label>
            <input type="text" value={value} onChange={handleChange} required />
        </div>
    );
};

export default NameField;