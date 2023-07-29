import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Button = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const btnStyle = {
    transform: active ? 'rotate(90deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease'
  };

  return (
    <button onClick={handleClick} className='button' style={btnStyle}>
      <AiOutlineMenu size="30px" />
    </button>
  );
};

export default Button;
