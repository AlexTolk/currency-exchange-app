import './MessageField.css'

const MessageField = ({ value, setFormData }) => {
    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, message: e.target.value }));
    };

    return (
        <div className='message-input'>
            <label>Message:</label>
            <textarea value={value} onChange={handleChange} required />
        </div>
    );
};

export default MessageField;