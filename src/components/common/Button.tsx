import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  content: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({ type, content, onClick }: ButtonProps): JSX.Element => {
  return (
    <button type={type} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
