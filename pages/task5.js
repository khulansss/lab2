import Image from "next/image";
import { useRouter } from "next/router";

export default function Task5() {
  const router = useRouter();
  return (
    <div className="">
      <div className="flex justify-between w-full h-[80px] items-center">
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
        <p className="text-black font-bold text-[22px] font-sans mr-96">
          Dashboard
        </p>
        <div className="flex space-x-3">
          <div className=" flex  items-center">
            <input className="border-2 border-gray-200 rounded-lg h-[40px] p-4" placeholder="testsad"/>
          </div>
          <div className="h-10 w-20 rounded-lg flex bg-sky-400 items-center  justify-center">
            <p className="text-white font-sans">Logout</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="h-screen w-1/5">
          <p className="font-sans font-bold text-[17px] mt-5 ml-7">Menu</p>
          <p className="text-[15px] ml-7 font-sans mt-6">Home</p>
          <p className="text-[15px] ml-7 font-sans mt-3 ">Profie</p>
          <p className="text-[15px] ml-7 font-sans mt-3">Settings</p>
          <p className="text-[15px] ml-7 font-sans mt-3">Reports</p>
        </div>
        <div className="bg-slate-200 h-screen w-4/5">
          <div>
            <p className="font-sans font-bold text-[20px] mt-5 ml-7">
              Welcome to the Dashboard
            </p>
          </div>
          <div className="flex justify-around">
            <div className="w-[470px] h-[150px] bg-white rounded-lg shadow-lg  mt-5">
                <p className="mt-8 ml-5 text-[19px] font-medium">Total Users</p>
                <p className="mt-5 ml-5 text-[22px] font-semibold  text-blue-500">1,234</p>
            </div>
            <div className="w-[470px] h-[150px] bg-white shadow-lg rounded-lg  mt-5">
            <p className="mt-8 ml-5 text-[19px] font-medium">New Orders</p>
            <p className="mt-5 ml-5 text-[22px] font-semibold text-green-600">567</p>
            </div>

            <div className="w-[470px] h-[150px] bg-white shadow-lg rounded-lg  mt-5">
            <p className="mt-8 ml-5 text-[19px] font-medium">Pending Issues</p>
            <p className="mt-5 ml-5 text-[22px] font-semibold text-red-500">23</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
