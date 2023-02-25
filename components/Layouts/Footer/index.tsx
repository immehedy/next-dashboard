import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex justify-center py-2'>
        <p className='text-gray-600'>© Copyright {new Date().getFullYear()} , </p>
        <a href="https://fourbit.io" target="_blank" className='text-indigo-700 hover:text-indigo-400'>fourbit.io</a>
        <p>All Rights Reserved</p>
    </div>
  )
}

export default Footer