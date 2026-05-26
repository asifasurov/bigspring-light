import './App.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";



function Footer() {
  return (
    <footer>
        <div className='pt-16 pb-4 bg-[#EDF6F5]'>
            <div>
                <div className='pl-4 pr-4 grid sm:grid-cols-2 lg:grid-cols-4'>
                    <div className=''>
                        <h5 className='text-2xl py-5'>Company</h5>
                        <ul className='text-gray-400'>
                            <li><a href="">Pricing</a></li>
                            <li><a href="">Quick Start</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='text-2xl py-5'>Product</h5>
                        <ul className='text-gray-400'>
                            <li><a href="">Features</a></li>
                            <li><a href="">Platform</a></li>
                            <li><a href="">Pricing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='text-2xl py-5'>Support</h5>
                        <ul className='text-gray-400'>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className='py-5 '>
                        <img src="/src/assets/logo.png" alt="" />
                        <p className='text-gray-400 py-3'>Lorem ipsum dolor sit amet, consectetur elit. Consjat tristique eget amet, tempus eu at cttur.</p>
                        <div className="media-link flex items-center gap-4  text-2xl text-[#0AA8A7] ">
                                <a href=""><FaFacebook /></a>
                                <a href=""><FaTwitter /></a>
                                <a href=""><FaLinkedin /></a>
                                <a href=""><FaSkype /></a>  
                        </div>
                    </div>
                </div>
                <div className='border-t-1 mx-4 border-gray-300'>
                    <p className='text-center text-gray-400 '>Designed and Developed By Themefisher • Distributed by ThemeWagon</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
