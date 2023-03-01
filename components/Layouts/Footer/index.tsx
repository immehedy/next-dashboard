const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='w-full flex gap-1 justify-center py-2'>
        <p data-testid="curr-year" className='text-gray-600' >© Copyright {year} </p> 
        <a href="https://fourbit.io" target="_blank" className='text-indigo-700 hover:text-indigo-400'> fourbit.io </a>
        <p>All Rights Reserved</p>
    </div>
  )
}

export default Footer