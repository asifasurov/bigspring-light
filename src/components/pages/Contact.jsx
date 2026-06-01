

function Contact() {
  return (
    <>
          <div className="bg-white py-16 px-4 font-sans max-w-6xl mx-auto">
        <h2 className="text-4xl font-normal text-center text-gray-800 mb-16">
          Contact Us
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
          
          <form className="w-full md:w-7/12 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full px-4 py-2 border border-gray-200 rounded text-gray-700 text-sm focus:outline-none focus:border-teal-500 placeholder-gray-400"
            />
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full px-4 py-2 border border-gray-200 rounded text-gray-700 text-sm focus:outline-none focus:border-teal-500 placeholder-gray-400"
            />
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full px-4 py-2 border border-gray-200 rounded text-gray-700 text-sm focus:outline-none focus:border-teal-500 placeholder-gray-400"
            />
            <textarea 
              placeholder="Your message" 
              rows="6" 
              className="w-full px-4 py-3 border border-gray-200 rounded text-gray-700 text-sm focus:outline-none focus:border-teal-500 placeholder-gray-400 resize-y"
            ></textarea>
            
            <div className="mt-2">
              <button 
                type="submit" 
                className="px-8 py-2.5 bg-teal-500 text-white font-medium text-sm rounded-full hover:bg-teal-600 transition duration-200 shadow-sm"
              >
                Send Now
              </button>
            </div>
          </form>

          <div className="w-full md:w-4/12 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Why you should contact us!
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit 
              recusandae voluptates doloremque veniam temporibus porro 
              culpa ipsa, nisi soluta minima saepe laboriosam debitis nesciunt.
            </p>
            
            <ul className="space-y-3 text-sm text-gray-800 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500 inline-block"></span>
                <span>phone: +88 125 256 452</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500 inline-block"></span>
                <span>Mail: info@bigspring.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500 inline-block"></span>
                <span>Address: 360 Main rd, Rio, Brazil</span>
              </li>
            </ul>
          </div>

        </div>
          </div>
    </>
  )
}

export default Contact
