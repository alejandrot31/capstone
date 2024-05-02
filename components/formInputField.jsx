const InputField = ({ value, onChange, onEnter, placeholder,accentColor,password}) => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        onEnter();
      }
    };
  
    
    console.log(accentColor && accentColor || "border-gray-600");

    return (
      <input
        className={`bg-transparent border m-2 ${accentColor && accentColor || "border-gray-600"} text-white p-2 rounded-md w-full outline-none`}
        value={value}
        type={password && "password" || "text" }
        onChange={onChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder || 'Type your message...'}
      />
    );
  };
  
  
  export default InputField;
  