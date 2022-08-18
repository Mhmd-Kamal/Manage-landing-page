import Link from 'next/link'
import { useState } from 'react'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  // TODO: add transition animation for navbar
  return (
    <div className="flex justify-between py-10 pr-6 text-Dark-Blue">
      <Link href="/">
        <img src="/images/logo.svg" alt="logo" className="scale-75" />
      </Link>

      <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22">
            <path
              fill="#242D52"
              fill-rule="evenodd"
              d="M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18">
            <g fill="#242D52" fill-rule="evenodd">
              <path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z" />
            </g>
          </svg>
        )}
      </button>

      <ul
        className={`${
          isOpen ? ' scale-100' : ' scale-0'
        } absolute inset-x-6 top-28 flex origin-top flex-col items-center gap-6 rounded-sm bg-white p-10 font-bold shadow-md transition-all duration-500`}
      >
        <Link href="#pricing">Pricing</Link>
        <Link href="#product">Product</Link>
        <Link href="#about_us">About Us</Link>
        <Link href="#careers">Careers</Link>
        <Link href="#community">Community</Link>
      </ul>
    </div>
  )
}

export default NavBar
