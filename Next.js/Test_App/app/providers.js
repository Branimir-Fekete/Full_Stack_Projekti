'use client';

import { Toaster } from 'react-hot-toast';

function Providers({ children }) {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
}

export default Providers;
