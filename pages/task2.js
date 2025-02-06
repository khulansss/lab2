import Image from "next/image";
import { useRouter } from "next/router";

export default function Task2() {
  const router = useRouter();
  return (
    
    <div className="w-full flex relative h-screen">
      <div><button
                                className=" w-[50px] h-[50px] pl-1 " 
                                onClick={() => { router.push("task6"); }}
                                aria-label="Go push"
                              >
                                <Image
                                          src="/back.png"
                                          height={40}
                                          width={40}
                                          className=""
                                          
                                          onClick={() => { router.push("task6"); }}
                                          
                                        />
                                
                              </button></div>
      <div className="bg-neutral-600 h-screen w-1/3"></div>
      <div className="bg-neutral-300 h-screen w-2/3"></div>
      <div className="bg-white  w-[800px] h-[800px] absolute top-20 left-1/4">
        <div className="bg-neutral-700 w-[800px] h-[20px]"></div>
        <div className="flex">
          <div className="bg-red-200 w-[250px] h-[780px]">
            <div className="flex justify-center mt-8 mb-8 ">
            <Image src="/zur.jpg" height={100} width={100} className="rounded-full"/> 

            </div>
            <p className="bg-gray-800 font-bold text-white flex items-center p-2 justify-center m-7">Contact</p>
            <div className="flex justify-center">
            <div className="text-[14px] space-y-2 font-sans">
            <p className="">+123 456 789</p>
            <p>khulansukhdorj@gmail.com</p>
            <p>www.jhgsdssagda.com</p>
            <p>ulanbaatar</p>
            </div>
          </div>
          <p className="bg-gray-800 font-bold text-white flex items-center p-2 justify-center m-7">Education</p>
          <div className="flex justify-center">
            <div className="text-[14px] space-y-6">
              <div>
            <p className="font-bold">MASTERS IN COMPUTE ENGL</p>
            <p className="font-sans text-[12px]">2014/University/Collage Name GPA: 4.75</p>
</div>
<div>
   <p className="font-bold" >BACHELOR OF ARTS</p>
   <p className="font-sans text-[12px]">2018/University/Collage Name GPA: 5.00</p>
</div>
           <div>
             <p className="font-bold">BACHELOR OF ARTS</p>
             <p className="font-sans text-[12px]">2019/University/Collage Name GPA: 4.75</p>
           </div>
           
            
            </div>
          </div>
          </div>
          
          <div className=" bg-white w-[450px] h-[780px]">
            <div className=""> <div className="w-[450px] h-[150px] bg-slate-200"></div></div>
           
             
           
          
        </div>
      </div>
    </div>
    </div>
  );
}
