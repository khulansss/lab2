import Image from "next/image";
import { useRouter } from "next/router";

export default function Task4() {
  const router = useRouter();
  return (
    
    <div className="bg-gray-700 h-screen w-full" >
      <div className="h-[50px] w-full" >
        <button
                    className="  w-[50px] h-[50px] pl-1 " 
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
                    
                  </button>
      </div>
      <div className="h-5/6 w-full flex justify-center items-center"><div className="h-[800px] w-[600px] bg-white flex justify-center items-center">
      <div className="h-[700px] w-[500px] bg-white border border-black">
        <p className="text-[25px] font-bold ml-5 mt-10">INSERT NAME HERE</p>
        <p className="ml-5 text-[14px]">[Email ID]</p>
        <p className="ml-5 text-[14px]">[Address]</p>
        <p className="ml-5 text-[14px]">[Phone Number]</p>
        <p className="ml-5 text-[14px]">[Website]</p>
        <p className="ml-5 text-[18px] mt-5 text-gray-500 font-bold">OBJECTIVES</p>
        <p className="ml-5 text-[14px]">[Mention your objectives here]</p>
        <p className="ml-5 text-[18px] mt-5 text-gray-500 font-bold">EDUCATION</p>
        <p className="ml-5 text-[18px] mt-5 text-gray-500 font-bold">NAME OF SCHOOL</p>
        <p className="ml-5 text-[12px] text-red-600 italic font-bold">Completion date and name of degree</p>
        <p className="ml-5 mt-5 text-[14px]">[Type 1st of accomplishment]</p>
        <p className="ml-5 text-[18px] mt-5 text-gray-500 font-bold">EXPERIENCE</p>
        <p className="ml-5 text-[18px] mt-5 text-gray-500 font-bold">COMPANY NAME</p>
        <div className="flex">
        <p className="ml-5 text-[12px] text-red-600 italic font-bold">[Type your job title]</p>
        <p className="ml-5 text-[12px] italic ">[Type the start date] = [Type the end date]</p>
        </div>
        <p className="ml-5 mt-5 text-[14px]">[Type job responsibilities]</p>
        <p className="ml-5 text-[18px] mt-5 text-gray-500 font-bold">SKILLS</p>
        
          <p className="ml-10 text-[14px]">* Skill1</p>
          <p className="ml-10 text-[14px]">* Skill2</p>
      </div></div>
      
      </div>
    </div>
  );
}