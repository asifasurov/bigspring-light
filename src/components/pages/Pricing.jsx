import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <>
         <div className="bg-gray-50 py-16 px-4 font-sans min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-normal text-gray-800 mb-16 text-center">
        Pricing
      </h2>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-0 items-center">
        
        <div className="bg-white border border-gray-200 rounded-l-lg p-8 flex flex-col items-center text-center h-[420px] justify-between shadow-sm order-2 md:order-1">
          <div className="w-full flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Plan</h3>
            <div className="flex items-baseline mb-2">
              <span className="text-5xl font-medium text-gray-800">$49</span>
              <span className="text-gray-400 text-sm ml-1">/ month</span>
            </div>
            <p className="text-gray-500 text-sm mb-6">Best For Small Individuals</p>
            
            <ul className="text-gray-500 text-sm space-y-2">
              <li>Express Service</li>
              <li>Customs Clearance</li>
              <li>Time-Critical Services</li>
            </ul>
          </div>
          
          <button className="mt-6 px-6 py-2 border-2 border-teal-500 text-teal-600 font-medium rounded-full hover:bg-teal-50 transition duration-200 w-full max-w-[200px]">
            Get started for free
          </button>
        </div>

        <div className="bg-white border border-gray-100 rounded-lg p-8 flex flex-col items-center text-center h-[480px] justify-between shadow-2xl relative z-10 scale-105 border-t-4 border-t-transparent order-1 md:order-2 mb-8 md:mb-0">
          <div className="w-full flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional Plan</h3>
            <div className="flex items-baseline mb-2">
              <span className="text-5xl font-medium text-gray-800">$69</span>
              <span className="text-gray-400 text-sm ml-1">/ month</span>
            </div>
            <p className="text-gray-500 text-sm mb-6">Best For Professionals</p>
            
            <ul className="text-gray-500 text-sm space-y-2">
              <li>Express Service</li>
              <li>Customs Clearance</li>
              <li>Time-Critical Services</li>
              <li>Cloud Service</li>
              <li>Best Dashboard</li>
            </ul>
          </div>
          
          <button className="mt-6 px-6 py-2.5 bg-teal-500 text-white font-medium rounded-full hover:bg-teal-600 transition duration-200 w-full max-w-[200px] shadow-md">
            Get started
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-r-lg p-8 flex flex-col items-center text-center h-[420px] justify-between shadow-sm order-3">
          <div className="w-full flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Plan</h3>
            <div className="flex items-baseline mb-2">
              <span className="text-5xl font-medium text-gray-800">$99</span>
              <span className="text-gray-400 text-sm ml-1">/ month</span>
            </div>
            <p className="text-gray-500 text-sm mb-6">Best For Large Individuals</p>
            
            <ul className="text-gray-500 text-sm space-y-2">
              <li>Express Service</li>
              <li>Customs Clearance</li>
              <li>Time-Critical Services</li>
            </ul>
          </div>
          
          <button className="mt-6 px-6 py-2 border-2 border-teal-500 text-teal-600 font-medium rounded-full hover:bg-teal-50 transition duration-200 w-full max-w-[200px]">
            Get started
          </button>
        </div>

      </div>
          </div>
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
                                            <Link to={'/contact'} className='bg-[#0AA8A7] text-white font-medium px-6 py-2.5 rounded-2xl hover:bg-cyan-600 transition shadow-md'>
                                                Contact us
                                            </Link>
                                        </div>
                                    </div>
            
                                </div>
                            </div>
                        </div>
          </section>
    </>
   
  )
}

export default Pricing
