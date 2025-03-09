import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
      <header className="py-4 px-6 flex justify-between items-center border-b">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg" // You'll need to create this
            alt="LocalGigs logo"
            width={40}
            height={40}
            priority
          />
          <h1 className="text-xl font-bold">LocalGigs</h1>
        </div>
        <nav className="hidden sm:flex gap-6">
          <a href="#" className="hover:text-primary">Browse Jobs</a>
          <a href="#" className="hover:text-primary">Post a Gig</a>
          <a href="#" className="hover:text-primary">How it Works</a>
          <a href="#" className="hover:text-primary">Sign In</a>
        </nav>
        <button className="sm:hidden">
          {/* Menu icon for mobile */}
          <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-current"></span>
        </button>
      </header>

      <main className="flex flex-col items-center p-6 sm:p-12">
        <section className="w-full max-w-4xl mb-12 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Find Local Jobs & Gigs Near You</h2>
          <p className="text-lg opacity-80 mb-8">Connecting local talent with part-time opportunities in your community</p>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text" 
                placeholder="What job are you looking for?"
                className="flex-1 p-3 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input 
                type="text" 
                placeholder="Location"
                className="flex-1 p-3 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-white p-3 rounded font-semibold hover:bg-primary-dark transition-colors">
                Search
              </button>
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl mb-12">
          <h3 className="text-2xl font-bold mb-6">Popular Categories</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* Placeholder for category cards */}
            {['Delivery', 'Tutoring', 'Home Services', 'Freelance'].map((category) => (
              <div key={category} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                {category}
              </div>
            ))}
          </div>
        </section>

        <section className="w-full max-w-4xl">
          <h3 className="text-2xl font-bold mb-6">Recent Opportunities</h3>
          <div className="space-y-4">
            {/* Placeholder for job listings */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold">Weekend Delivery Driver</h4>
                    <p className="text-sm opacity-75">Downtown • $20-25/hr • Posted 2 days ago</p>
                  </div>
                  <span className="text-sm px-2 py-1 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 rounded-full">
                    Part-time
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 border-t text-center text-sm opacity-75">
        <div className="flex justify-center gap-8 mb-4">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
        <p>© {new Date().getFullYear()} LocalGigs. All rights reserved.</p>
      </footer>
    </div>
  );
}