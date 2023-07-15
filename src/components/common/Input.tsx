import React from 'react';

interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input = ({ type, name, placeholder, onChange, value }: InputProps): JSX.Element => {
  return (
    <input type={type} name={name} placeholder={placeholder} onChange={onChange} value={value} />
  );
};

export default Input;
