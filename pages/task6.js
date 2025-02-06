import Image from "next/image";
import { useRouter } from "next/router";

export default function Task6() {
  const router = useRouter();
  return (
    <div className="bg-gray-200 w-full h-screen">
      <div className="h-1/5 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-black">Biy Daalt</h1>
      </div>
      <div className="h-4/5 flex ">
      
        <div className="w-1/3  ">
          <div className=" w-[150px] ml-60 h-[150px] mt-10 ">
            <div className="flex"><button
            className="bg-white shadow-lg  w-[60px] h-[50px] pl-1" 
            onClick={() => { router.push("/"); }}
            aria-label="Go back"
          >
            <Image
                      src="/namecard.webp"
                      height={50}
                      width={50}
                      className=""
                      
                      onClick={() => { router.push("/"); }}
                      
                    />
            
          </button>
          <p className="font-sans font-semibold text-black mt-3 ml-3">NameCard</p>
          </div>
          
           <div>
            <p className="text-gray-500 text-[10px] mt-4">Нэрийн хуудас нь компани эсвэл хувь хүний тухай бизнесийн мэдээллийг агуулсан картуудыг хэлнэ. </p>
           </div>
       </div>
       <div className=" w-[150px] ml-60 h-[150px] mt-10 ">
            <div className="flex"><button
            className="bg-white shadow-lg w-[50px] h-[50px] " 
            onClick={() => { router.push("task2"); }}
            
          >
            <Image
                      src="/cv.webp"
                      height={50}
                      width={50}
                      className=""
                      
                      onClick={() => { router.push("task2"); }}
                      
                    />
            
          </button>
          <p className="font-sans font-semibold text-black mt-3 ml-3">CV</p>
          </div>
          
           <div>
            <p className="text-gray-500 text-[10px] mt-4">
            CV or resume is an abbreviation of the Latin words 'curriculum vitae', which mean 'life course'. </p>
           </div>
       </div>
       <div className=" w-[150px] ml-60 h-[150px] mt-10 ">
            <div className="flex"><button
            className="bg-white shadow-lg w-[50px] h-[50px] pl-2" 
            onClick={() => { router.push("task4"); }}
            aria-label="Go back"
          >
            <Image
                      src="/temp.jpg"
                      height={35}
                      width={35}
                      className=""
                      
                      onClick={() => { router.push("task4"); }}
                      
                    />
            
          </button>
          <p className="font-sans font-semibold text-black mt-3 ml-3">Template</p>
          </div>
          
           <div>
            <p className="text-gray-500 text-[10px] mt-4">Iishee orvol cv giin template haragdanaa bagshaa </p>
           </div>
       </div>
       
        </div>
       <div className="w-1/3"></div>
       <div className="w-1/3  ">
          <div className=" w-[150px] ml-48 h-[150px] mt-10 ">
            <div className="flex"><button
            className="bg-white shadow-lg w-[60px] h-[50px] pl-3" 
            onClick={() => { router.push("task3"); }}
            aria-label="Go back"
          >
            <Image
                      src="/our.png"
                      height={30}
                      width={40}
                      className=""
                      
                      onClick={() => { router.push("task4"); }}
                      
                    />
            
          </button>
          <p className="font-sans font-semibold text-black mt-3 ml-3">OurBlog</p>
          </div>
          
           <div>
            <p className="text-gray-500 text-[10px] mt-4">Our blog at Newbreak Church is where you get weekly insight into the weekend's message.  </p>
           </div>
       </div>
       <div className=" w-[150px] ml-48 h-[150px] mt-10 ">
            <div className="flex"><button
            className="bg-white shadow-lg w-[50px] h-[50px] pl-1 " 
            onClick={() => { router.push("task5"); }}
            aria-label="Go back"
          >
            <Image
                      src="/ww.png"
                      height={40}
                      width={40}
                      className=""
                      
                      onClick={() => { router.push("task5"); }}
                      
                    />
            
          </button>
          <p className="font-sans font-semibold text-black mt-3 ml-3">Dashboard</p>
          </div>
          
           <div>
            <p className="text-gray-500 text-[10px] mt-4">
            A website is one or more web pages and related content that is identified by a common domain name and published on at least one web server </p>
           </div>
       </div>
      
       
        </div>
      </div>
      
    </div>
  );
}