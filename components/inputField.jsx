const InputField = ({ value, onChange, onEnter }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onEnter();
    }
  };

  return (
    <input
      className="bg-transparent border m-2 border-gray-800 text-white p-2 rounded-md outline-none"
      type="text"
      value={value}
      onChange={onChange}
      onKeyPress={handleKeyPress}
      placeholder="Type your message..."
    />
  );
};

export default InputField;
