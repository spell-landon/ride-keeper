import React from 'react';
import { Header } from './Header';

type LayoutProps = {
  children?: any;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='h-screen flex flex-col'>
      <Header />
      <div className=''>{children}</div>
    </div>
  );
};
