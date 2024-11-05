import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import Spline from "@splinetool/react-spline";





export default function Home() {
  return (
    <main className="bg-black flex justify-around w-full items-center text-white min-h-screen">
      <section className="grid grid-cols-2 w-full px-10">
        <div className="flex flex-col gap-4 items-center justify-center ">
          <h2 className={`text-3xl  font-bold`}>
            The best URL shortener in the Market
          </h2>
          <p className=" text-center w-full">
            We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener
          </p>
          <div className='flex gap-3 justify-start'>
          <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
          <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
        </div>
        </div>
        
        <Spline
        scene="https://prod.spline.design/6Fc61-mHiANRL00J/scene.splinecode" 
      />
      </section>
    </main>
  );
}