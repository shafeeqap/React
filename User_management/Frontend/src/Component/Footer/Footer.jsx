import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='bg-teal-500 text-white p-5 h-20'>
            <p>
            All rights reserved &copy; {new Date().getFullYear()} USM

            </p>
        </footer>
    </>
  )
}

export default Footer