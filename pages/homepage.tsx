import React from 'react';
import AuthForm from '../components/auth/AuthForm';

const HomePage = () => {
  return (
    <div className='flex justify-center items-center bg-primary'>
      <div className='w-full h-screen max-w-[100rem] mx-auto'>
        <AuthForm />
      </div>
    </div>
  );
};

export default HomePage;
