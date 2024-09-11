import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { registrationSchema } from '../validation';
import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';

// Tipo dos dados do formulário
type FormData = z.infer<typeof registrationSchema>;

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-gray-200 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Name"
          type="text"
          {...register('name')}
          error={errors.name?.message}
        />
        <InputField
          label="Email"
          type="email"
          {...register('email')}
          error={errors.email?.message}
        />
        <InputField
          label="Password"
          type="password"
          {...register('password')}
          error={errors.password?.message}
        />
        <SubmitButton />
      </form>
    </div>
  );
};

export default RegisterPage;
