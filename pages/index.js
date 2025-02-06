import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen ">
      <div className="h-[50px] w-full "> <button
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
      <div className="h-5/6 w-full flex items-center justify-center p-10">
      <div className="bg-black w-[420px] flex border">
        <Image
          src="/zur.jpg"
          height={150}
          width={150}
          className="m-4"
          alt="Profile picture of Хулан"
        />
        <div>
          <div>
            <p className="text-4xl text-white mt-5 font-bold">Хулан</p>
          </div>
          <div>
            <p className="text-2xl mt-2 text-white">Сүхдорж</p>
          </div>
          <div className="mt-7">
            <div className="flex">
              <img src="/o.png" className="mr-2 w-4 h-4" alt="Phone icon" />
              <p className="text-1xl text-white">+976 88676567</p>
            </div>
            <div className="flex">
              <img src="/l.png" className="mr-2 w-4 h-4" alt="Email icon" />
              <p className="text-1xl text-white">khulansukhdorj@gmail.com</p>
            </div>
            <div className="flex">
              <img src="/g.png" className="mr-2 w-4 h-4" alt="School icon" />
              <p className="text-1xl text-white">Nest Education It School</p>
            </div>
          </div>
        </div>
      </div></div>
      
    </div>
  );
}