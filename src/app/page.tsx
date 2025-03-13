import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from ".//components/Navbar";
import Sidebar from ".//components/Sidebar";
import JobFeed from ".//components/JobFeed";
import RightSidebar from ".//components/RightSidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-light">
      <Navbar />
      
      <main className="max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Left sidebar - Profile summary */}
          <Sidebar className="w-full md:w-1/4" />
          
          {/* Main content - Job feed */}
          <JobFeed className="w-full md:w-2/4" />
          
          {/* Right sidebar - Trending, news, etc */}
          <RightSidebar className="w-full md:w-1/4" />
        </div>
      </main>
      
      <footer className="mt-10 py-6 bg-gray-light border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-dark">© 2025 LocalGigs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}