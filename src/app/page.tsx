//import { useState, useEffect } from "react";
import Topbar from "./components/Topbar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-gray-500 flex flex-col px-5px justify-center items-center">
      <div className="px-10 py-10 flex-grow w-full bg-white">
       
        <Topbar />

        <MainPage />

        <Footer />

      </div>
    </div>
  );
}