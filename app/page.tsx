
import Spline from '@splinetool/react-spline/next';




export default function Home() {
  return (
    <main className="flex flex-col h-screen  items-center justify-start bg-black">


      <div  className=' absolute top-0 left-0 w-[80px] h-[300px] blur-[180px] bg-purple-500'/>
      <div  className=' absolute top-0 left-24 w-[400px] h-[50px] blur-[180px] bg-purple-500'/>

      <div  className=' absolute top-0 right-0 w-[80px] h-[300px] blur-[180px] bg-purple-500'/>
      <div  className=' absolute top-0 right-24 w-[400px] h-[50px] blur-[180px] bg-purple-500'/>



      <div className="w-full  flex flex-col items-center justify-center max-w-4xl lg:mt-28 space-y-4">
        <div className=" inline-flex items-center rounded-full border-[0.2px] border-zinc-100  px-4 py-1.5">
          <span className="text-sm text-purple-200 font-sans">Build with Love by mvpexperience.agency ❤️</span>
        </div>

        <h1
          className={`font-sans  text-4xl font-normal tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-8xl`}
        >
          Hey Guys, Did I <span className='text-purple-400'>Cook ?</span> 
        </h1>

      
      
        <p className="max-w-lg text-md text-zinc-400 text-center">
          Helping startups and brands to craft expressive and engaging solutions for their software needs.
        </p>
      </div>

      <div className='absolute bottom-0  '>
      <Spline
        scene="https://prod.spline.design/5irQ3UVd8EW3k9uM/scene.splinecode" 
      />
      </div>
    </main>


  );
}
