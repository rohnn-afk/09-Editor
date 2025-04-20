import Navbar from "@/components/assets/Navbar";
import AnimatedText from "@/components/ui/AnimatedText";
import Image from "next/image";
// import BgGradient from "@/components/ui/BGgradient";
// import BgGradientPink from "@/components/ui/BGgradientPink";

export default function Home() {
  return (
    <div className=" min-h-screen w-full   flex flex-col overflow-hidden bg-gradient-to-b via-white from-white to-primary ">

      <div className=" mx-auto p-2 px-8 flex flex-col items-center w-full z-[600]">
        <Navbar/>  
      </div>

      <div className="w-screen  z-[600] mt-20 space-y-20 ">
         <AnimatedText HomeScreenClassName="mx-auto "/>
         <div className="mx-auto w-fit shadow-lg mt-10">
          <Image src='/banner.png' width={1000} height={400} alt='banner'/>
         </div>

        </div>

        <footer className="bg-white py-2 mt-30 text-primary">
          <p className="font-semibold w-fit px-4 mx-auto ">Copyright reserved by DB Pvt. 09-Tech. </p>
        </footer>


    </div>
  );
}
