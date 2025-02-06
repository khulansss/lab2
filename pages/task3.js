import Image from "next/image";
import { useRouter } from "next/router";

export default function Task3() {
  const router = useRouter();
  return (
    <div className=" h-screen bg-white">
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
      <div className="h-5/6 w-full flex justify-center items-center"><div className="bg-rose-200 w-[800px] h-[600px]">
            <div >
                <p className="flex justify-center font-sans text-2xl mt-5">Our Blog</p>
                
            </div>
            <div className="flex justify-center space-x-10 ">
                <div className="w-[230px]">
                <Image
          src="/duu.jpg"
          height={200}
          width={200}
          className="m-4 "
        />
        <p className="flex justify-center font-bold mt-3 ">Post 1 Headline</p>
        <p className="flex justify-center text-center font-mono text-[13px] mt-3">Sample small text. Lorem Ipsum dolro sit amet.</p>
        <p className="flex justify-center font-mono text-rose-500 mt-8">Wed Jul 22 2020</p>
        <p className="bg-rose-500 font-bold text-white flex items-center p-2 justify-center m-16 ">Read more</p>
                </div>
                <div className="w-[230px]  bg-white">
                <Image
          src="/alim.webp"
          height={200}
          width={200}
          className="m-4 "
        />
         <p className="flex justify-center font-bold mt-3 ">Post 2 Headline</p>
        <p className="flex justify-center text-center font-mono text-[13px] mt-3">Sample small text. Lorem Ipsum dolro sit amet.</p>
        <p className="flex justify-center font-mono text-rose-500 mt-8">Wed Jul 22 2020</p>
        <p className="bg-rose-500 font-bold text-white flex items-center p-2 justify-center m-16 ">Read more</p>
                </div>
                <div className="w-[230px]">
                <Image
          src="/henry.avif"
          height={200}
          width={200}
          className="m-4 "
        />
         <p className="flex justify-center font-bold mt-3 ">Post 3 Headline</p>
        <p className="flex justify-center text-center font-mono text-[13px] mt-3">Sample small text. Lorem Ipsum dolro sit amet.</p>
        <p className="flex justify-center font-mono text-rose-500 mt-8">Wed Jul 22 2020</p>
        <p className="bg-rose-500 font-bold text-white flex items-center p-2 justify-center m-16 ">Read more</p>
                </div>
            </div>
        </div></div>
        
    </div>
  );
  }
