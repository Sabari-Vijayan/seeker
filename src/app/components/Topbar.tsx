import Link from 'next/link';
import Image from 'next/image';

export default function Topbar() {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-2">
      <div className="container-custom flex justify-between items-center">
        {/* Left section - Logo & Brand */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/icons/options.png" 
              alt="Logo" 
              width={24} 
              height={24} 
              className="mr-2" 
            />
            <span className="font-semibold text-blue-600 hidden sm:inline">JobFinder</span>
          </Link>
        </div>

        {/* Center section - Search */}
        <div className="hidden md:block flex-1 max-w-md mx-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search jobs..." 
              className="w-full py-1 px-3 border text-blue-500 border-gray-300 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right section - Icons/Actions */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          
          <button className="text-gray-600 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
          
          <Link href="/(auth)/login">
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}