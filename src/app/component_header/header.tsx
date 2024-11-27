import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full">
      <div className="h-[64px] border-b-2 border-solid border-black bg-[#F7F7F7]">
        <div className="max-w-[1440px] mx-auto px-4 flex justify-between items-center h-full">
          <div className="flex items-center gap-[16px]">
            <div className="text-[15px] leading-[21px]">
              Phone Number: 956 742 455 678
            </div>
            <div className="border-l-[2px] border-solid border-[#676767] h-[20px]"></div>
            <div className="text-[15px] leading-[21px]">
              Email: info@ddsgnr.com
            </div>
          </div>
          <div className="flex gap-[20px]">
            <Image
              src="/images/Facebook@2x.svg"
              alt="Facebook"
              height={24}
              width={24}
            />
            <Image
              src="/images/Instagram.svg"
              alt="Instagram"
              height={24}
              width={24}
            />
            <Image
              src="/images/Twitter.svg"
              alt="Twitter"
              height={24}
              width={24}
            />
            <Image
              src="/images/LinkedIn.svg"
              alt="LinkedIn"
              height={24}
              width={24}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-6">
      <div className=" flex h-[100px] border-b-[1px] border-solid shadow-md border-[#676767] bg-[#F7F7F7] w-full  my-6 p-[30px] pl-[45px]">
        <div className="flex gap-[5px] h-full w-full items-center">
          <Image
            src="/images/Frame 1.svg"
            alt="logo"
            height={40}
            width={40}
            className="h-[40px] w-[40px]"
            />
          <h1 className="leading-[30.34px] text-[34px] font-bold">Ddsgnr</h1>
        </div>
        <div className="gap-8">
          <ol className="flex bg-white text-[22px] tracking-5 w-full gap-[60px] leading-[21px] h-full justify-center items-center pr-[50px] pl-[35px]">
            <li className="hover:underline">Home</li>
            <li className="hover:underline cursor-pointer">Courses</li>
            <li className="hover:underline cursor-pointer">Services</li>
            <li className="hover:underline cursor-pointer">Achievement</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Testimonial</li>
            <div className="flex justify-end gap-12 pl-3">
            <li className="cursor-pointer hover:scale-[1.05] pl-[20px] border border-black h-[50px] w-[100px] p-4 items-center rounded-md bg-white">Login</li>
            <li className="cursor-pointer hover:scale-[1.05] pl-[20px] p-3 border border-black h-[50px] w-[115px] p-4 items-center text-white bg-black rounded-md">SignUp</li>
            </div>
          </ol>
        </div>
            </div>
      </div>
      <div className="w-full flex justify-center items-center h-[800px] mt-[37px]">
        <div className="flex flex-col  items-center w-1/2 h-[300px] gap-[24px]">
        <div className="flex items-center justify-center flex-col w-[490px] gap-3 ">
          <h1 className="text-[56px] leading-[67.2px] font-bold w-full ">Learn new skills online with ease</h1>
          <p className="text-[19px] p-2 leading-[27px] font-normal  pr-7 ">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        </div>
          <div className="flex justify-center items-center space-x-6 pt-[10px] pr-[70px]">
          <button className="cursor-pointer hover:scale-[1.05] w-[180px] text-[15px] leading-6 h-[48px] bg-black text-white rounded-md font-semibold pl-6 pr-6">Start learning now</button>
          <button className="cursor-pointer hover:scale-[1.05] w-[170px] text-[15px] leading-6 h-[48px] bg-white text-black rounded-md font-semibold pl-6 border-2 border-black pr-6">Subscribe</button>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2"> <Image
            src="/images/Image.svg"
            alt="image"
            height={40}
            width={40}
            className="h-[900px] w-full mb-4"
            /></div>
      </div>
    </div>
  );
}
