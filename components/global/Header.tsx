import React from 'react';
import companyLogo from '../../assets/images/ride_keeper_logo.png';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className='py-0 px-4 w-full absolute top-0 flex justify-between items-center bg-primary text-black z-10'>
      <Image src={companyLogo} alt='Ride Keeper Logo' width={75} height={75} />
      <div>
        <Link
          href={'/'}
          className='py-3 px-6 bg-[#A2815E] hover:bg-[#A2815E]/95 transition text-white rounded-md'>
          Login
        </Link>
      </div>
    </div>
  );
};
