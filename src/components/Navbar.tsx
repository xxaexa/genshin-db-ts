import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="absolute w-full">
      <div className="bg-gray-700 duration-300 ease-in-out text-font-color p-2 box-border h-full">
        <div>
          <button
            className="absolute md:hidden top-0 right-1 text-2xl"
            type="button"
            onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-10 h-10 ${
                !isOpen ? 'rotate-90' : 'rotate-0 duration-300 ease-in-out'
              }`}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <div>
          {' '}
          <ul
            className={`flex flex-col md:flex-row justify-center items-center space-x-4 text-xl space-y-2 md:space-y-0`}>
            <li className="md:left-4 md:absolute  hover:text-white ">
              <Link to={'/'}>GENSHIN DB</Link>
            </li>
            <li
              className={`md:block hover:text-slate-200 cursor-pointer ${
                !isOpen ? 'hidden' : 'block'
              }`}>
              <Link to={'artifact'}>ARTIFACT</Link>
            </li>
            <li
              className={`md:block hover:text-slate-200 cursor-pointer ${
                !isOpen ? 'hidden' : 'block'
              }`}>
              <Link to={'character'}>CHARACTER</Link>
            </li>
            <li
              className={`md:block hover:text-slate-200 cursor-pointer ${
                !isOpen ? 'hidden' : 'block'
              }`}>
              <Link to={'weapon'}>WEAPON</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
