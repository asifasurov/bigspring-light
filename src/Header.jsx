import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <header className='lg:w-[90%] mx-auto flex items-center justify-between p-5'>
       <a href="#"> <img  src="/src/assets/logo.png" alt="logo" /></a> 
      <ul className='hidden lg:flex items-center justify-center gap-5 font-bold'>
        <li className="text-[#0AA8A7]">
          <a href="#">Home</a>
        </li>
        <li className="hover:text-[#0AA8A7]">
          <a href="#">Blog</a>
        </li>
        <li className="hover:text-[#0AA8A7]">
          <a href="#">Pricing</a>
        </li>
        <li className="hover:text-[#0AA8A7]">
          <a href="#">Contact</a>
        </li>
        <li className="hover:text-[#0AA8A7]">
          <a href="#">FAQ</a>
        </li>
      </ul>
      <button className="bg-[#0AA8A7] p-3 rounded-2xl hidden lg:block">Get Started</button>
      <FaBars className="lg:hidden" />
    </header>
  );
}

export default Header;