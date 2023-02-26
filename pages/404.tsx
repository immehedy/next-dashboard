import React from 'react'

const Custom404 = () => {
  return (
        <div className=' w-full h-screen grid grid-cols-1 text-center content-center'>
        <div className='w-3/4 mx-auto  p-2 rounded-lg  font-bold text-red-400'>
            <p className='text-[100px]'>Oops! 404</p>
            <p className='py-2 mb-2 text-[30px]'>The page you want to visit does not exist</p>
        </div>
    </div>
  )
}

export default Custom404