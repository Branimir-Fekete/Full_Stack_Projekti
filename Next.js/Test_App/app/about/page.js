import Link from 'next/link';
import React from 'react';

function Aboutpage() {
  return (
    <div>
      <h1 className='text-7xl'>About page</h1>

      <Link
        href='/'
        className='taxt-2xl'
      >
        about page
      </Link>
    </div>
  );
}

export default Aboutpage;
