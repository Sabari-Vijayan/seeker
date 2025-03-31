import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="bg-white border-t border-gray-200 px-4 py-4 mt-auto">
      <div className="container-custom">
        {/* Upper footer section */}
        <div className="flex flex-col md:flex-row justify-between mb-4">
          {/* Brand section */}
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center mb-2">
              <Image
                src="/icons/options.png"
                alt="Logo"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="font-semibold text-blue-600">JobFinder</span>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs">
              Find your dream job with JobFinder - connecting talent with opportunities.
            </p>
          </div>
          
          {/* Quick links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">For Job Seekers</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-blue-600">Browse Jobs</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-blue-600">Create Resume</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-blue-600">Job Alerts</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">For Employers</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-blue-600">Post a Job</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-blue-600">Search Resumes</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-blue-600">Recruiting Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Company</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-blue-600">Help Center</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom footer - Copyright and socials */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-2 sm:mb-0">
              © {new Date().getFullYear()} JobFinder. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 6c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.8 0-3.2 1.4-3.2 3.2 0 .3 0 .5.1.7-2.7-.1-5-1.4-6.6-3.3-.3.5-.4 1-.4 1.6 0 1.1.6 2 1.4 2.6-.5 0-1-.2-1.4-.4 0 1.5 1.1 2.8 2.5 3.1-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.2 3 2.2-1.1.9-2.5 1.4-4 1.4-.3 0-.5 0-.8-.1 1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.6-.5 1.2-1 1.6-1.7z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14zM9 16H7v-7h2v7zm4 0h-2V9h2v7zm4 0h-2v-3h2v3z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zM8.9 16.3h2.5V9H8.9v7.3zM10.1 8c-.8 0-1.4-.6-1.4-1.3s.6-1.3 1.4-1.3 1.4.6 1.4 1.3-.6 1.3-1.4 1.3zm8.6 8.3h-2.5v-3.6c0-1-.4-1.7-1.3-1.7-.7 0-1.2.5-1.4 1-.1.1-.1.3-.1.5v3.8H11V9h2.4v1c.6-.8 1.3-1.2 2.2-1.2 1.7 0 2.9 1.1 2.9 3.4v4.1h.2z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 14.5c-.1.1-.1.1-.2.2-1.1.6-2.3.7-3.5.4-.2-.1-.5-.1-.7-.2-.1 0-.2-.1-.3-.2-.1-.1-.1-.1-.1-.2s.1-.1.2-.1c.9.2 1.9.3 2.9.1 1-.2 1.9-.7 2.7-1.4.1-.1.2 0 .2.1v.1c-.1.1-.1.1-.2.2-.3.3-.7.6-1 1zm.5-1.7c-.1.1-.1.1-.2.1-.2.1-.4.1-.6.1s-.4-.1-.6-.2c-.9-.4-1.8-.9-2.8-1.3-.2-.1-.3-.2-.5-.3-.7-.4-1.4-.8-2-1.3-.3-.2-.5-.5-.7-.8-.1-.1-.1-.2-.1-.3.1-.1.1-.1.2-.1.1 0 .2.1.3.1.3.2.6.4.9.6 1.2.8 2.5 1.4 3.8 2 .7.3 1.3.6 1.8 1 .3.2.6.5.6.8 0 .1 0 .3-.1.4 0 .1 0 .1 0 .2zm.5-6.3v.1c-.1.1-.1.1-.2.2-.6.5-1.2 1-1.9 1.4-.4.2-.9.4-1.4.6l-.5.2h-.1c-.3.1-.7.2-1 .2h-.7c-.3 0-.6-.1-.8-.4-.1-.2-.2-.4-.1-.6 0-.2.1-.3.3-.4.3-.1.5-.2.8-.2.9-.1 1.7-.4 2.5-.7.4-.2.8-.4 1.1-.6.3-.2.6-.5.9-.7l.2-.2c.1 0 .1-.1.2-.1.1.1.1.2.2.4.2.2.3.5.3.8h.2z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4.8v14.4c0 .88-.72 1.6-1.6 1.6H5.6c-.88 0-1.6-.72-1.6-1.6V4.8C4 3.92 4.72 3.2 5.6 3.2h12.8c.88 0 1.6.72 1.6 1.6zm-8.8 9.6c1.68 0 3.04-1.36 3.04-3.04 0-1.68-1.36-3.04-3.04-3.04-1.68 0-3.04 1.36-3.04 3.04 0 1.68 1.36 3.04 3.04 3.04zm6.4-7.84c0-.48-.4-.88-.88-.88h-1.92c-.48 0-.88.4-.88.88v1.92c0 .48.4.88.88.88h1.92c.48 0 .88-.4.88-.88V6.56zM17.12 16c.08-.64.16-1.76.16-2.4 0-2.96-.88-7.04-5.28-7.04-2.72 0-4.88 2.08-4.88 4.88 0 3.68 3.28 5.92 7.28 5.92 1.52 0 2.56-.24 2.72-.24v-1.12z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}