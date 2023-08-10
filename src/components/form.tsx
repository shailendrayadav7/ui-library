import React, { useState } from 'react';

const Form: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className="border p-2 rounded"
        placeholder="Name"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Form;
