import './App.css'
import { ImEmbed2 } from "react-icons/im";

function Hero() {
  return (
    <main>
        <section id='challange'>
            <div className="w-full max-w-[1200px] mx-auto px-4 py-10">
                <div className="flex flex-col items-center justify-center gap-6 text-center">
                    <div className='w-full max-w-[350px] md:max-w-[450px] lg:order-1'>
                        <img className="w-full h-auto object-contain" src="/banner-art.svg" alt="banner" />
                    </div>
                    <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">Let us solve your critical website development challenges</h1>
                    <p className="text-gray-500 text-sm sm:text-base max-w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque
                    totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus.</p>
                </div>
            </div>
        </section>
        <section id='cards'>
            <div className='flex flex-col justify-center items-center gap-10 py-10 bg-[#EDF6F5]'>
                <h1 className='text-[40px] lato-regular text-center'>Something You Need To Know</h1>
                <div className='grid gap-x-8 gap-y-6 max-w-[1100px] sm:grid-cols-2 lg:grid-cols-3 '>
                    <div className="card bg-white p-6 rounded-xl flex flex-col justify-center items-center text-center">
                        <ImEmbed2 className='text-[#0AA8A7] text-6xl' />
                        <h4 className='text-[20px] lato-regular'>Clean Code</h4>
                        <p className='text-gray-400 lato-regular'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
                    </div>
                    <div className="card bg-white p-6 rounded-xl flex flex-col justify-center items-center text-center">
                        <ImEmbed2 className='text-[#0AA8A7] text-6xl' />
                        <h4 className='text-[20px] lato-regular'>Clean Code</h4>
                        <p className='text-gray-400 lato-regular'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
                    </div>
                    <div className="card bg-white p-6 rounded-xl flex flex-col justify-center items-center text-center">
                        <ImEmbed2 className='text-[#0AA8A7] text-6xl' />
                        <h4 className='text-[20px] lato-regular'>Clean Code</h4>
                        <p className='text-gray-400 lato-regular'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
                    </div>
                    <div className="card bg-white p-6 rounded-xl flex flex-col justify-center items-center text-center">
                        <ImEmbed2 className='text-[#0AA8A7] text-6xl' />
                        <h4 className='text-[20px] lato-regular'>Clean Code</h4>
                        <p className='text-gray-400 lato-regular'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
                    </div>
                    <div className="card bg-white p-6 rounded-xl flex flex-col justify-center items-center text-center">
                        <ImEmbed2 className='text-[#0AA8A7] text-6xl' />
                        <h4 className='text-[20px] lato-regular'>Clean Code</h4>
                        <p className='text-gray-400 lato-regular'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
                    </div>
                    <div className="card bg-white p-6 rounded-xl flex flex-col justify-center items-center text-center">
                        <ImEmbed2 className='text-[#0AA8A7] text-6xl' />
                        <h4 className='text-[20px] lato-regular'>Clean Code</h4>
                        <p className='text-gray-400 lato-regular'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
                    </div>
                </div>
            </div>
        </section>
        <section id='digital-marketing'>
            <div>
                <div className='grid py-16 items-center max-w-[1100px] mx-auto sm:grid-cols-1 lg:grid-cols-2 gap-8'>
                    
                    <div className='mx-4 order-2 lg:order-1'>
                        <h3 className='lato-regular text-4xl font-bold'>It is the most advanced digital marketing and it company.</h3>
                        <p className='lato-regular text-gray-400 mt-[10px] mb-[4px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                        <a className='text-[#91E6FF] font-bold hover:text-gray-200' href="#">Check it out 🠒</a>
                    </div>
                    
                    <div className='order-1 lg:order-2'>
                        <img src="/service-slide-3.png" alt="" className="w-full h-auto" />
                    </div>

                </div>
            </div>
        </section>
        <section id='company-differences'>
            <div className='bg-[#EDF6F5]'>
                <div className='grid py-16 items-center max-w-[1100px] mx-auto sm:grid-cols-1 lg:grid-cols-2 gap-8 '>
                    <div className='mx-4 order-2 lg:order-2'>
                        <h3 className='lato-regular text-4xl font-bold'>A company standing different from others</h3>
                        <p className='lato-regular text-gray-400 mt-[10px] mb-[4px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                        <a className='text-[#91E6FF] font-bold hover:text-gray-200' href="#">Check it out 🠒</a>
                    </div>

                     <div className='order-1 lg:order-1'>
                        <img src="/service-slide-1.png" alt="" className="w-full h-auto" />
                    </div>
                    
                </div>
            </div>
        </section>
        <section id='experience'>
            <div className='py-16'>
                <div className='flex flex-col items-center justify-center gap-10'>
                    <h1 className='text-4xl lato-regular font-bold text-center'>Experience the best workflow with us</h1>
                    <img src="/banner.svg" alt="" />
                </div>
            </div>
        </section>
        <section id='readytoget'>
            <div className='py-16 px-4'>
                <div className='max-w-[1000px] mx-auto shadow-2xl rounded-xl overflow-hidden bg-white'>
                    
                    <div className='flex flex-col lg:flex-row items-center p-6 md:p-12 gap-8'>
                        
                        <div className='w-full lg:w-1/2 flex justify-center'>
                            <img src="/cta.svg" alt="Ready to get started" className="w-full h-auto max-h-[300px] object-contain" />
                        </div>
                        
                        <div className='w-full lg:w-1/2 flex flex-col justify-center space-y-4 text-center lg:text-left'>
                            <h2 className='text-3xl font-bold text-gray-900'>Ready to get started?</h2>
                            <p className='text-gray-500 leading-relaxed'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur.
                            </p>
                            <div>
                                <button className='bg-[#0AA8A7] text-white font-medium px-6 py-2.5 rounded-2xl hover:bg-cyan-600 transition shadow-md'>
                                    Contact us
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Hero
