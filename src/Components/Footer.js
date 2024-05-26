import React from 'react'
import Logo from '../Images/pngegg.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
<div className=' fixed bottom-0 w-full bg-stone-300'>
  <footer className="text-gray-600 body-font">
    <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
      <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img height={50} width={50} src={Logo}/>
        <span className="text-xl">Quran-Al-Qareem</span>
      </Link>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Developer —
        <a href="https://api.whatsapp.com/send/?phone=923144030224&text&type=phone_number&app_absent=0" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@Mugester</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a href='https://www.facebook.com/profile.php?id=100034876718655' target='_blank' className="text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a href='https://www.instagram.com/sohaib_aka_mugester/' target='_blank' className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
      </span>
    </div>
  </footer>
</div>

  )
}

export default Footer
