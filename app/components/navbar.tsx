import Link from 'next/link';

export default function Navbar() {
    return (
      <>
        <div className='flex justify-center bg-slate-400 py-5'>
          <nav>
            <ul className='flex gap-9 h-16 text-2xl font-semibold'>
              {/* Navigation Items */}
              <li className='relative group'>
                <Link href='/' className='text-white group-hover:text-yellow-400 transition duration-300'>
                  Home
                </Link>
                <span className='absolute left-0 bottom-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-500'></span>
              </li>

              <li className='relative group'>
                <Link href='/about' className='text-white group-hover:text-yellow-400 transition duration-300'>
                  About
                </Link>
                <span className='absolute left-0 bottom-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-500'></span>
              </li>

              <li className='relative group'>
                <Link href='/service' className='text-white group-hover:text-yellow-400 transition duration-300'>
                  Services
                </Link>
                <span className='absolute left-0 bottom-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-500'></span>
              </li>

              <li className='relative group'>
                <Link href='/contact' className='text-white group-hover:text-yellow-400 transition duration-300'>
                  Contact
                </Link>
                <span className='absolute left-0 bottom-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-500'></span>
              </li>

              <li className='relative group'>
                <Link href='/login' className='text-white group-hover:text-yellow-400 transition duration-300'>
                  Login
                </Link>
                <span className='absolute left-0 bottom-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-500'></span>
              </li>
            </ul>
          </nav>
        </div>
      </>
    )
}
