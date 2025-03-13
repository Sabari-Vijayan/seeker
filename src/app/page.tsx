import Image from "next/image";

export default function Home() {
  return (

    <div className="">
      <header className="flex justify-between items-center py-2 px-2 text-white gap-10 bg-cyan-300">

          <div>
            <Image
              src="/icons/options.png"
              width={40}
              height={40}
            />
          </div>
        
          <h2 className=" text-shadow font-bold">Seeker</h2>
          
          <nav className="flex gap-10 font-bold text-shadow">
            <a href="www.youtube.com">Youtube.com</a>
            <a href="www.youtube.com">Youtube.com</a>
            <a href="www.youtube.com">Youtube.com</a>
            <a href="www.youtube.com">Youtube.com</a>
          </nav>

          <div>
            <Image
              src="/icons/test-profile.png"
              width={40}
              height={40}
             />
          </div>

      </header>
    </div>

  )
}