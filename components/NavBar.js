import Link from 'next/link'
import { useState } from 'react'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  // TODO: add transition animation for navbar
  return (
    <nav className="flex justify-between items-center lg:px-32 py-10 pr-6 text-Dark-Blue">
      <Link href="/">
        <img src="/images/logo.svg" alt="logo" className="scale-75" />
      </Link>

      <button
        className="cursor-pointer lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
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
          isOpen ? ' scale-100' : 'scale-0 lg:scale-100'
        } absolute lg:static  lg:flex-row inset-x-6 top-28 flex origin-top flex-col items-center gap-6 rounded-sm bg-white p-10 lg:p-0 font-bold shadow-md lg:shadow-none transition-all duration-500`}
      >
        <Link href="#pricing">
          <a className="hover:text-slate-400">Pricing</a>
        </Link>
        <Link href="#product">
          <a className="hover:text-slate-400">Product</a>
        </Link>
        <Link href="#about_us">
          <a className="hover:text-slate-400">About Us</a>
        </Link>
        <Link href="#careers">
          <a className="hover:text-slate-400">Careers</a>
        </Link>
        <Link href="#community">
          <a className="hover:text-slate-400">Community</a>
        </Link>
      </ul>
      <button className="hidden lg:block mt-8 lg:m-0 rounded-full bg-Bright-Red hover:bg-[#F98F75] w-36 py-3 text-sm font-bold text-Very-Pale-Red">
        Get Started
      </button>
    </nav>
  )
}

export default NavBar
