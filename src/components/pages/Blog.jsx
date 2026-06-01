

function Blog() {
  return (
    <>
          <div className="bg-white py-16 px-4 font-sans max-w-6xl mx-auto">
      <h2 className="text-4xl font-normal text-center text-gray-800 mb-12">
        Latest news
      </h2>

      <div className="space-y-12">
        
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white overflow-hidden">
          <div className="w-full md:w-1/2">
            <img 
              src="/public/blog-4.jpg" 
              alt="Adversus" 
              className="w-full h-[280px] object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 leading-tight">
              Adversus is a web-based dialer and practical CRM solution
            </h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              ##### Heading example Here is an example of headings. You can use this 
              heading by the following markdown rules. For example: use # for heading 1 
              and use ###### for heading 6.# Heading 1## He
            </p>
            <button className="px-6 py-2.5 bg-teal-500 text-white font-medium text-sm rounded-full hover:bg-teal-600 transition duration-200">
              Read More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex flex-col items-start bg-white">
            <img 
              src="/public/blog-4.jpg" 
              alt="News 1" 
              className="w-full h-[200px] object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-900 mb-4 min-h-[56px] line-clamp-2">
              How to make toys from old Olarpaper
            </h4>
            <button className="px-5 py-2 bg-teal-500 text-white font-medium text-xs rounded-full hover:bg-teal-600 transition duration-200">
              Read More
            </button>
          </div>

          <div className="flex flex-col items-start bg-white">
            <img 
              src="/public/blog-3.jpg" 
              alt="News 2" 
              className="w-full h-[200px] object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-900 mb-4 min-h-[56px] line-clamp-2">
              What you need to know about Photography
            </h4>
            <button className="px-5 py-2 bg-teal-500 text-white font-medium text-xs rounded-full hover:bg-teal-600 transition duration-200">
              Read More
            </button>
          </div>

          <div className="flex flex-col items-start bg-white">
            <img 
              src="/public/blog-2.jpg" 
              alt="News 3" 
              className="w-full h-[200px] object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-900 mb-4 min-h-[56px] line-clamp-2">
              How to make toys from old Olarpaper
            </h4>
            <button className="px-5 py-2 bg-teal-500 text-white font-medium text-xs rounded-full hover:bg-teal-600 transition duration-200">
              Read More
            </button>
          </div>

        </div>

      </div>
          </div>
    </>
  )
}

export default Blog
