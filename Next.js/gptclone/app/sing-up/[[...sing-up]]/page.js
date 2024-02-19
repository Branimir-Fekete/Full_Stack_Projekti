import { SignUp } from '@clerk/nextjs';
import React from 'react';

function SignUpPage() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <SignUp />;
    </div>
  );
}

export default SignUpPage;
