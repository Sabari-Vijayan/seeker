import Image from 'next/image';
import Link from 'next/link';

export default function MainPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="container-custom mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Left Sidebar - Profile Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow overflow-hidden mb-4">
              {/* Profile Card */}
              <div className="relative">
                <div className="h-24 bg-blue-500"></div>
                <div className="absolute left-4 top-12">
                  <div className="h-16 w-16 rounded-full bg-gray-200 border-4 border-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="pt-14 px-4 pb-4">
                  <h3 className="font-bold text-lg">Your Name</h3>
                  <p className="text-sm text-gray-500">Job Title</p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 px-4 py-2">
                <div className="flex justify-between items-center py-1">
                  <span className="text-xs text-gray-500">Profile views</span>
                  <span className="text-xs font-medium">210</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-xs text-gray-500">Job matches</span>
                  <span className="text-xs font-medium">18</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 px-4 py-3">
                <div className="text-xs text-gray-600 font-medium mb-2">My Items</div>
                <div className="text-xs text-blue-600 font-medium">Saved Jobs</div>
              </div>
            </div>
            
            {/* Recent Groups */}
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <h3 className="text-sm font-medium mb-3">Recent Groups</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded bg-gray-200 mr-2"></div>
                  <span className="text-sm">Group Name</span>
                </div>
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded bg-gray-200 mr-2"></div>
                  <span className="text-sm">Group Name</span>
                </div>
              </div>
              <div className="mt-3 text-blue-600 text-sm font-medium">See all groups</div>
            </div>
          </div>
          
          {/* Main Content - Feed */}
          <div className="lg:col-span-6">
            {/* Post Creation Card */}
            <div className="bg-white rounded-lg shadow mb-4 p-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 mr-2 flex-shrink-0">
                  <div className="h-full w-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder="Create a post..." 
                    className="w-full border border-gray-300 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex justify-between mt-3">
                <button className="flex items-center text-gray-500 text-sm hover:bg-gray-100 px-2 py-1 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Photo
                </button>
                <button className="flex items-center text-gray-500 text-sm hover:bg-gray-100 px-2 py-1 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                  Video
                </button>
                <button className="flex items-center text-gray-500 text-sm hover:bg-gray-100 px-2 py-1 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Event
                </button>
                <button className="flex items-center text-gray-500 text-sm hover:bg-gray-100 px-2 py-1 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Article
                </button>
              </div>
            </div>
            
            {/* Feed Posts */}
            <div className="space-y-4">
              {/* Post 1 */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-4">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-200 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium">Company Name</h4>
                      <p className="text-xs text-gray-500">500 followers</p>
                      <p className="text-xs text-gray-500">2h • <span>🌎</span></p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm">We're hiring a Senior Developer! Join our team and work on cutting-edge projects.</p>
                  </div>
                </div>
                <div className="bg-gray-200 h-60 flex items-center justify-center">
                  <span className="text-gray-500">Job Post Image</span>
                </div>
                <div className="px-4 py-2 border-t border-gray-200">
                  <div className="flex justify-between">
                    <button className="flex items-center text-gray-500 text-sm hover:bg-gray-100 px-2 py-1 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      Like
                    </button>
                    <button className="flex items-center text-gray-500 text-sm hover:bg-gray-100 px-2 py-1 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      Comment
                    </button>
                    <button className="flex items-center text-gray-500 text-sm hover:bg-gray-100 px-2 py-1 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Post 2 */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-4">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-200 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium">User Name</h4>
                      <p className="text-xs text-gray-500">Software Engineer at Company</p>
                      <p className="text-xs text-gray-500">1d • <span>🌎</span></p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm">Just finished a new project! Check out our new job portal application.</p>
                  </div>
                </div>
                <div className="bg-gray-200 h-60 flex items-center justify-center">
                  <span className="text-gray-500">Project Image</span>
                </div>
                <div className="px-4 py-2 border-t border-gray-200">
                  <div className="flex justify-between">
                    <button className="flex items-center text-gray-500 text-sm hover:bg-gray-100 px-2 py-1 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      Like
                    </button>
                    <button className="flex items-center text-gray-500 text-sm hover:bg-gray-100 px-2 py-1 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      Comment
                    </button>
                    <button className="flex items-center text-gray-500 text-sm hover:bg-gray-100 px-2 py-1 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Sidebar - News and Ads */}
          <div className="lg:col-span-3">
            {/* News Section */}
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <h3 className="font-medium mb-3">Job Finder News</h3>
              <div className="space-y-3">
                <div className="flex">
                  <div className="h-2 w-2 rounded-full bg-blue-600 mt-1.5 mr-2"></div>
                  <div>
                    <p className="text-sm font-medium">Tech industry hiring up 12% this quarter</p>
                    <p className="text-xs text-gray-500">2h ago • 1,234 readers</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="h-2 w-2 rounded-full bg-blue-600 mt-1.5 mr-2"></div>
                  <div>
                    <p className="text-sm font-medium">Remote work opportunities continue to grow</p>
                    <p className="text-xs text-gray-500">4h ago • 985 readers</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="h-2 w-2 rounded-full bg-blue-600 mt-1.5 mr-2"></div>
                  <div>
                    <p className="text-sm font-medium">Top 5 skills employers are looking for in 2025</p>
                    <p className="text-xs text-gray-500">1d ago • 2,456 readers</p>
                  </div>
                </div>
              </div>
              <Link href="#" className="inline-block mt-3 text-sm text-gray-500 hover:bg-gray-100 px-2 py-1 rounded">
                Show more
              </Link>
            </div>
            
            {/* Ad Section */}
            <div className="bg-white rounded-lg shadow overflow-hidden mb-4">
              <div className="bg-gray-200 h-40 flex items-center justify-center">
                <span className="text-gray-500">Advertisement</span>
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-500">Ad • JobFinder Premium</p>
              </div>
            </div>
            
            {/* Who to Follow */}
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <h3 className="font-medium mb-3">Companies to Follow</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded bg-gray-200 mr-2"></div>
                    <div>
                      <p className="text-sm font-medium">Company Name</p>
                      <p className="text-xs text-gray-500">Software Development</p>
                    </div>
                  </div>
                  <button className="text-sm text-blue-600 font-medium border border-blue-600 rounded-full px-3 py-1 hover:bg-blue-50">
                    Follow
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded bg-gray-200 mr-2"></div>
                    <div>
                      <p className="text-sm font-medium">Company Name</p>
                      <p className="text-xs text-gray-500">E-commerce</p>
                    </div>
                  </div>
                  <button className="text-sm text-blue-600 font-medium border border-blue-600 rounded-full px-3 py-1 hover:bg-blue-50">
                    Follow
                  </button>
                </div>
              </div>
              <Link href="#" className="inline-block mt-3 text-sm text-gray-500 hover:bg-gray-100 px-2 py-1 rounded">
                View all recommendations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}