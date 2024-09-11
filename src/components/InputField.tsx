import React, { forwardRef } from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({ label, type, error, ...rest }, ref) => (
  <div className="mb-4">
    <label className="block text-gray-700">{label}</label>
    <input
      type={type}
      className={`mt-1 block w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50`}
      ref={ref}
      {...rest}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
));

InputField.displayName = 'InputField';

export default InputField;
