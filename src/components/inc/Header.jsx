import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Header() {
  return (
   <>
      <header className='lg:w-[90%] mx-auto flex items-center justify-between p-5'>
       <Link to={'/'}> <img  src="/logo.png" alt="logo" /></Link> 
      <ul className='hidden lg:flex items-center justify-center gap-5 font-bold'>
        <li className="text-[#0AA8A7]">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="hover:text-[#0AA8A7]">
          <Link to={'/blog'} >Blog</Link>
        </li>
        <li className="hover:text-[#0AA8A7]">
          <Link to={'/pricing'}>Pricing</Link>
        </li>
        <li className="hover:text-[#0AA8A7]">
          <Link to={'/contact'}>Contact</Link>
        </li>
        <li className="hover:text-[#0AA8A7]">
          <Link to={'/faq'}>FAQ</Link>
        </li>
      </ul>
      <button className="bg-[#0AA8A7] p-3 rounded-2xl hidden lg:block">Get Started</button>
      <FaBars className="lg:hidden" />
      </header>
   </>
  )
}

export default Header


