import AnimatedText from "@/components/ui/AnimatedText";
import Image from "next/image";

export default function AuthLayout({children} :{children: React.ReactNode}) {

    return(
        <div className="grid lg:grid-cols-2 bg-primary/20 min-h-screen max-h-screen h-full">

            <div className="hidden lg:flex flex-col p-10">
                <div className="flex gap-4 items-center">
                    <Image src='/one-logo.png' width={60} height={60} alt="logo" className="rounded-md"/>
                    <h1 className="text-4xl text-emerald-500 font-bold">09 - Editor</h1>
                </div>
                <div className="h-full flex flex-col justify-center">
                   <AnimatedText className="flex-row mx-0 lg:gap-2"/>
                </div>

            </div>

            <div className="h-full flex bg-white  flex-col pt-14 lg:mt-0 lg:justify-center p-4 lg:p-6 overflow-auto ">
                {children}

            </div>

        </div>
    )
}


