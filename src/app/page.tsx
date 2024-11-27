import Image from "next/image";
import Header from "./component_header/header";
import Footer from "./component_footer/footer";

export default function page() {
  return (
    <div>
      <Header />
      <div className="h-[228px] bg-[#F7F7F7;] mt-[43px] mb-[100px] flex justify-between items-center">
        <h5 className="text-[24px] w-[400px] h-[68px] leading-[34px] font-bold">
          Trusted by 2000+ companies worldwide.
        </h5>
        <ol className="flex justify-center gap-[19.12px] pt-[8.74px] pb-[8.74px] w-[880px] h-[80px]">
          <li className="h-full w-full">
            <Image
              src="/logos/Airbnb Logo1.svg"
              alt="logo1"
              height={150}
              width={150}
            />
          </li>
          <li className="h-full w-full">
            <Image
              src="/logos/Airbnb Logo2.svg"
              alt="logo2"
              height={150}
              width={150}
            />
          </li>
          <li className="h-full w-full">
            <Image
              src="/logos/Airbnb Logo (2).svg"
              alt="logo3"
              height={150}
              width={150}
            />
          </li>
          <li className="h-full w-full">
            <Image
              src="/logos/Airbnb Logo4.svg"
              alt="logo4"
              height={150}
              width={150}
            />
          </li>
          <li className="h-full w-full">
            <Image
              src="/logos/Airbnb Logo5.svg"
              alt="logo5"
              height={150}
              width={150}
            />
          </li>
          <li className="h-full w-full">
            <Image
              src="/logos/Airbnb Logo6.svg"
              alt="logo6"
              height={150}
              width={150}
            />
          </li>
        </ol>
      </div>
      <div className="items-center flex justify-center flex-col ">
        <div className="w-[700px]]">
          <h2 className=" pb-7 leading-[57.6px] text-[48px] font-bold">
            Explore Courses By Category
          </h2>
          <p className="leading-[27px] text-[18px] font-normal">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
        </div>
      </div>
      <div className="w-full h-[636px] gap-[96px] mt-[90px] flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-8">
          <div>
            <div className="flex gap-[32px] p-4 bg-[#F7F7F7;] w-[400px] h-[132px] justify-center items-center">
              <div className="items-center flex justify-center  w-[100px] h-[100px]">
                <Image
                  src="/logos/icon/Frame1.svg"
                  alt="course1"
                  height={150}
                  width={150}
                />
              </div>
              <div className="flex flex-col">
                <h3 className=" text-[20px] font-semibold leading-[30px]">
                  Design & Development
                </h3>
                <p className=" text-[18px] font-normal leading-[30px]">
                  50+ Courses Available
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-[32px] p-4 bg-[#F7F7F7;] w-[400px] h-[132px] justify-center items-center">
              <div className="items-center flex justify-center  w-[100px] h-[100px]">
                <Image
                  src="/logos/icon/Frame2.svg"
                  alt="course1"
                  height={150}
                  width={150}
                />
              </div>
              <div className="flex flex-col">
                <h3 className=" text-[20px] font-semibold leading-[30px]">
                  Marketing
                </h3>
                <p className=" text-[18px] font-normal leading-[30px]">
                  50+ Courses Available
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-[32px] p-4 bg-[#F7F7F7;] w-[400px] h-[132px] justify-center items-center">
              <div className="items-center flex justify-center  w-[100px] h-[100px] bg-white">
                <Image
                  src="/logos/icon/Frame3.svg"
                  alt="course1"
                  height={100}
                  width={100}
                  className="h-[40px] w-[40px]"
                />
              </div>
              <div className="flex flex-col">
                <h3 className=" text-[20px] font-semibold leading-[30px]">
                  Development
                </h3>
                <p className=" text-[18px] font-normal leading-[30px]">
                  50+ Courses Available
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-8">
          <div>
            <div className="flex gap-[32px] p-4 bg-[#F7F7F7;] w-[400px] h-[132px] justify-center items-center">
              <div className="items-center flex justify-center  w-[100px] h-[100px]">
                <Image
                  src="/logos/icon/Frame4.svg"
                  alt="course1"
                  height={150}
                  width={150}
                />
              </div>
              <div className="flex flex-col">
                <h3 className=" text-[20px] font-semibold leading-[30px]">
                  Communication
                </h3>
                <p className=" text-[18px] font-normal leading-[30px]">
                  50+ Courses Available
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-[32px] p-4 bg-[#F7F7F7;] w-[400px] h-[132px] justify-center items-center">
              <div className="items-center flex justify-center  w-[100px] h-[100px]">
                <Image
                  src="/logos/icon/Frame5.svg"
                  alt="course1"
                  height={150}
                  width={150}
                />
              </div>
              <div className="flex flex-col">
                <h3 className=" text-[20px] font-semibold leading-[30px]">
                  Digital Marketing
                </h3>
                <p className=" text-[18px] font-normal leading-[30px]">
                  50+ Courses Available
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-[32px] p-4 bg-[#F7F7F7;] w-[400px] h-[132px] justify-center items-center">
              <div className="items-center flex justify-center  w-[100px] h-[100px] bg-white">
                <Image
                  src="/logos/icon/Frame6.svg"
                  alt="course1"
                  height={150}
                  width={150}
                  className="h-[40px] w-[40px]"
                />
              </div>
              <div className="flex flex-col">
                <h3 className=" text-[20px] font-semibold leading-[30px]">
                  Self Development
                </h3>
                <p className=" text-[18px] font-normal leading-[30px]">
                  50+ Courses Available
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center  items-center gap-8">
          <div>
            <div className="flex gap-[32px] p-4 bg-[#F7F7F7;] w-[400px] h-[132px] justify-center items-center">
              <div className="items-center flex justify-center  w-[100px] h-[100px]">
                <Image
                  src="/logos/icon/Frame7.svg"
                  alt="course1"
                  height={150}
                  width={150}
                />
              </div>
              <div className="flex flex-col">
                <h3 className=" text-[20px] font-semibold leading-[30px]">
                  Business
                </h3>
                <p className=" text-[18px] font-normal leading-[30px]">
                  50+ Courses Available
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-[32px] p-4 bg-[#F7F7F7;] w-[400px] h-[132px] justify-center items-center">
              <div className="items-center flex justify-center  w-[100px] h-[100px]">
                <Image
                  src="/logos/icon/Frame8.svg"
                  alt="course1"
                  height={150}
                  width={150}
                />
              </div>
              <div className="flex flex-col">
                <h3 className=" text-[20px] font-semibold leading-[30px]">
                  Finance
                </h3>
                <p className=" text-[18px] font-normal leading-[30px]">
                  50+ Courses Available
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-[32px] p-4 bg-[#F7F7F7;] w-[400px] h-[132px] justify-center items-center">
              <div className="items-center flex justify-center  w-[100px] h-[100px]">
                <Image
                  src="/logos/icon/Frame9.svg"
                  alt="course1"
                  height={150}
                  width={150}
                />
              </div>
              <div className="flex flex-col">
                <h3 className=" text-[20px] font-semibold leading-[30px]">
                  Consulting
                </h3>
                <p className=" text-[18px] font-normal leading-[30px]">
                  50+ Courses Available
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[180px] h-[60px] flex justify-center items-center">
          <button className="cursor-pointer hover:scale-[1.05] text-[15px] leading-6  bg-white text-black rounded-md font-semibold border-2 border-black pr-6 pt-2 pb-2  pl-6 ">
            View All Courses
          </button>
        </div>
      </div>
      <section className="w-full h-[488px] flex flex-col justify-center items-center mt-[200px] gap-[34px]">
        <div className=" w-[1153px] h-[264px] flex justify-center items-center flex-col gap-[34px]">
          <div className="flex flex-col justify-center items-center w-[1152px] h-[136px] gap-[30px]">
            <h2 className="text-[48px] font-bold leading-[57.6px]">
              Our Achivements
            </h2>
            <p className="font-normal text-[18px] leading-[27px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
          <div className="w-[1156px] h-[96px] gap-6 flex justify-center items-center mt-[30px]">
            <div className="w-[616px] h-[96px] gap-[24px] pt-2 pb-2 flex justify-center items-center">
              <div className="flex justify-center flex-col items-center gap-2 w-[296px] h-[80px]">
                <h3 className="text-[40px] leading-[48px] font-bold">+200</h3>
                <p>Courses</p>
              </div>
              <div className="flex justify-center flex-col items-center gap-2 w-[296px] h-[80px]">
                <h3 className="text-[40px] leading-[48px] font-bold">50K</h3>
                <p>Mentors</p>
              </div>
            </div>
            <div className="w-[616px] h-[96px] gap-6 pt-2 pb-2 flex justify-center items-center">
              <div className="flex justify-center flex-col items-center gap-2 w-[296px] h-[80px]">
                <h3 className="text-[40px] leading-[48px] font-bold">370k</h3>
                <p>Students</p>
              </div>
              <div className="flex justify-center flex-col items-center gap-2 w-[296px] h-[80px]">
                <h3 className="text-[40px] leading-[48px] font-bold">100+</h3>
                <p>Recognition</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[488px] flex flex-col justify-center items-center mt-[200px] gap-[34px] pb-[30px]">
        <div className=" w-[1153px] h-[264px] flex justify-center items-center flex-col gap-[34px]">
          <div className="flex flex-col justify-center items-center w-[1152px] h-[136px] gap-[30px]">
            <h2 className="text-[48px] font-bold leading-[57.6px]">
              Our Achivements
            </h2>
            <p className="font-normal text-[18px] leading-[27px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
          <div className="w-[1156px] h-[96px] gap-6 flex justify-center items-center mt-[30px]">
            <div className="w-[616px] h-[96px] gap-[24px] pt-2 pb-2 flex justify-center items-center">
              <div className="flex justify-center flex-col items-center gap-2 w-[296px] h-[80px]">
                <h3 className="text-[40px] leading-[48px] font-bold">+200</h3>
                <p>Courses</p>
              </div>
              <div className="flex justify-center flex-col items-center gap-2 w-[296px] h-[80px]">
                <h3 className="text-[40px] leading-[48px] font-bold">50K</h3>
                <p>Mentors</p>
              </div>
            </div>
            <div className="w-[616px] h-[96px] gap-6 pt-2 pb-2 flex justify-center items-center">
              <div className="flex justify-center flex-col items-center gap-2 w-[296px] h-[80px]">
                <h3 className="text-[40px] leading-[48px] font-bold">370k</h3>
                <p>Students</p>
              </div>
              <div className="flex justify-center flex-col items-center gap-2 w-[296px] h-[80px]">
                <h3 className="text-[40px] leading-[48px] font-bold">100+</h3>
                <p>Recognition</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" w-full h-[1742px]  pt-[112px] pb-[112px] pr-[64px] pl-[64px] flex justify-center flex-col items-center gap-[64px] ">
        <div className="flex flex-col gap-6 w-[768px] h-[118px] justify-center items-center">
          <h1 className="font-bold text-[56px] leading-[67.2px]">Courses</h1>
          <p className="font-normal text-[18px] leading-[27px]">
            Your Ultimate Guide to learning
          </p>
        </div>
        <div className="gap-[64px]">
          <div className="flex justify-center items-center pb-[74px] pt-[24px]">
            <button className="text-[16px]  border-hidden bg-white text-black  border-2 border-black pr-6 pt-3 pb-3  pl-6 leading-[24px] font-normal hover:underline">
              Popular
            </button>
            <button className="text-[16px]  border-hidden bg-white text-black  border-2 border-black pr-6 pt-3 pb-3  pl-6 leading-[24px] font-normal hover:underline">
              Recommended
            </button>
            <button className="text-[16px]  border-hidden bg-white text-black  border-2 border-black pr-6 pt-3 pb-3  pl-6 leading-[24px] font-normal hover:underline">
              Best Price
            </button>
          </div>
          <div className="">
            <div id="row1" className="flex gap-[32px] pb-[64px]">
              <div
                id="card1"
                className="cursor-pointer hover:scale-[1.05] w-[416px] h-[534px] gap-6 roundrd-[5px] flex flex-col bg-slate-100 pr-0"
              >
                <div className="relative w-full h-[300px]">
                  <Image
                    src="/logos/Image1.svg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  id="frame282"
                  className="flex justify-center item center flex-col"
                >
                  <div
                    id="content"
                    className="flex justify-center itmes-center flex-col w-[382px] h-[112px] gap-2  pl-2"
                  >
                    <div className="flex justify-between w-[382px] h-24px items-center gap-2">
                      <div className="text-[14px] leading-[21px] font-semibold">
                        Design
                      </div>
                      <div className="flex">
                        <Image
                          src="/logos/Star 1.svg"
                          alt="image"
                          height={24}
                          width={24}
                        />
                        <p>5.0</p>
                      </div>
                    </div>
                    <h3 className="text-[24px] leading-[33.6px] font-bold">
                      UX/UI Design 201
                    </h3>
                    <p className="text-[16px] leading-6 font-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                  <div id="avatar" className="flex pt-8 pl-2">
                    <button className="cursor-pointer hover:scale-[1.05] text-[16px] bg-white text-black  border-2 border-black pr-6 pt-3 pb-3  pl-6 leading-[24px] font-normal h-[40px] w-[130px] rounded-md flex justify-center items-center">
                      Enroll Now
                    </button>
                    <button className="text-[16px]  border-hidden text-black  border-2 border-black pr-6 pt-3 pb-3  pl-6 leading-[24px] font-normal hover:underline bg-slate-50 flex justify-center items-center">
                      $400
                    </button>
                  </div>
                </div>
              </div>
              <div
                id="card2"
                className="cursor-pointer hover:scale-[1.05] w-[416px] h-[534px] gap-6 roundrd-[5px] flex flex-col bg-slate-100 pr-0"
              >
                <div className="relative w-full h-[300px]">
                  <Image
                    src="/logos/Image2.svg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  id="frame282"
                  className="flex justify-center item center flex-col"
                >
                  <div
                    id="content"
                    className="flex justify-center itmes-center flex-col w-[382px] h-[112px] gap-2  pl-2"
                  >
                    <div className="flex justify-between w-[382px] h-24px items-center gap-2">
                      <div className="text-[14px] leading-[21px] font-semibold">
                        Programmimg
                      </div>
                      <div className="flex">
                        <Image
                          src="/logos/Star 1.svg"
                          alt="image"
                          height={24}
                          width={24}
                        />
                        <p>5.0</p>
                      </div>
                    </div>
                    <h3 className="text-[24px] leading-[33.6px] font-bold">
                      Introduction to Python
                    </h3>
                    <p className="text-[16px] leading-6 font-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                  <div id="avatar" className="flex pt-8 pl-2">
                    <button className="cursor-pointer hover:scale-[1.05] text-[16px] bg-white text-black  border-2 border-black pr-6 pt-3 pb-3  pl-6 leading-[24px] font-normal h-[40px] w-[130px] rounded-md flex justify-center items-center">
                      Enroll Now
                    </button>
                    <button className="text-[16px]  border-hidden text-black  border-2 border-black pr-6 pt-3 pb-3  pl-6 leading-[24px] font-normal hover:underline bg-slate-50 flex justify-center items-center">
                      $400
                    </button>
                  </div>
                </div>
              </div>
              <div
                id="card3"
                className="cursor-pointer hover:scale-[1.05] w-[416px] h-[534px] gap-6 roundrd-[5px] flex flex-col bg-slate-100 pr-0"
              >
                <div className="relative w-full h-[300px]">
                  <Image
                    src="/logos/Image3.png"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  id="frame282"
                  className="flex justify-center item center flex-col"
                >
                  <div
                    id="content"
                    className="flex justify-center itmes-center flex-col w-[382px] h-[112px] gap-2  pl-2"
                  >
                    <div className="flex justify-between w-[382px] h-24px items-center gap-2">
                      <div className="text-[14px] leading-[21px] font-semibold">
                        Business
                      </div>
                      <div className="flex">
                        <Image
                          src="/logos/Star 1.svg"
                          alt="image"
                          height={24}
                          width={24}
                        />
                        <p>5.0</p>
                      </div>
                    </div>
                    <h3 className="text-[24px] leading-[33.6px] font-bold">
                      Data Analysis for Beginners
                    </h3>
                    <p className="text-[16px] leading-6 font-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                  <div id="avatar" className="flex pt-8 pl-2">
                    <button className="cursor-pointer hover:scale-[1.05] text-[16px] bg-white text-black  border-2 border-black pr-6 pt-3 pb-3  pl-6 leading-[24px] font-normal h-[40px] w-[130px] rounded-md flex justify-center items-center">
                      Enroll Now
                    </button>
                    <button className="text-[16px]  border-hidden text-black  border-2 border-black pr-6 pt-3 pb-3  pl-6 leading-[24px] font-normal hover:underline bg-slate-50 flex justify-center items-center">
                      $400
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div id="row2" className="flex gap-[32px]">
              <div
                id="card4"
                className="cursor-pointer hover:scale-[1.05] w-[416px] h-[534px] gap-6 roundrd-[5px] flex flex-col bg-slate-100 pr-0"
              >
                <div className="relative w-full h-[300px]">
                  <Image
                    src="/logos/Image4.svg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  id="frame282"
                  className="flex justify-center item center flex-col"
                >
                  <div
                    id="content"
                    className="flex justify-center itmes-center flex-col w-[382px] h-[112px] gap-2  pl-2"
                  >
                    <div className="flex justify-between w-[382px] h-24px items-center gap-2">
                      <div className="text-[14px] leading-[21px] font-semibold">
                        Art
                      </div>
                      <div className="flex">
                        <Image
                          src="/logos/Star 1.svg"
                          alt="image"
                          height={24}
                          width={24}
                        />
                        <p>5.0</p>
                      </div>
                    </div>
                    <h3 className="text-[24px] leading-[33.6px] font-bold">
                      Art Specialization
                    </h3>
                    <p className="text-[16px] leading-6 font-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                  <div id="avatar" className="flex pt-8 pl-2">
                    <button className="cursor-pointer hover:scale-[1.05] text-[16px] bg-white text-black  border-2 border-black pr-6 pt-3 pb-3  pl-6 leading-[24px] font-normal h-[40px] w-[130px] rounded-md flex justify-center items-center">
                      Enroll Now
                    </button>
                    <button className="text-[16px]  border-hidden text-black  border-2 border-black pr-6 pt-3 pb-3  pl-6 leading-[24px] font-normal hover:underline bg-slate-50 flex justify-center items-center">
                      $400
                    </button>
                  </div>
                </div>
              </div>
              <div
                id="card5"
                className="cursor-pointer hover:scale-[1.05] w-[416px] h-[534px] gap-6 roundrd-[5px] flex flex-col bg-slate-100 "
              >
                <div className="relative w-full h-[300px]">
                  <Image
                    src="/logos/Image55.svg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  id="frame5"
                  className="flex justify-center item center flex-col"
                >
                  <div
                    id="content"
                    className="flex justify-center itmes-center flex-col w-[382px] h-[112px] gap-2  pl-2"
                  >
                    <div className="flex justify-between w-[382px] h-24px items-center gap-2">
                      <div className="text-[14px] leading-[21px] font-semibold">
                        Law
                      </div>
                      <div className="flex">
                        <Image
                          src="/logos/Star 1.svg"
                          alt="image"
                          height={24}
                          width={24}
                        />
                        <p>5.0</p>
                      </div>
                    </div>
                    <h3 className="text-[24px] leading-[33.6px] font-bold">
                      Rule of Law
                    </h3>
                    <p className="text-[16px] leading-6 font-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                  <div id="avatar" className="flex pt-8 pl-2">
                    <button className="cursor-pointer hover:scale-[1.05] text-[16px] bg-white text-black  border-2 border-black pr-6 pt-3 pb-3  pl-6 leading-[24px] font-normal h-[40px] w-[130px] rounded-md flex justify-center items-center">
                      Enroll Now
                    </button>
                    <button className="text-[16px]  border-hidden text-black  border-2 border-black pr-6 pt-3 pb-3  pl-6 leading-[24px] font-normal hover:underline bg-slate-50 flex justify-center items-center">
                      $400
                    </button>
                  </div>
                </div>
              </div>
              <div
                id="card6"
                className="cursor-pointer hover:scale-[1.05] w-[416px] h-[534px] gap-6 roundrd-[5px] flex flex-col bg-slate-100 pr-0"
              >
                <div className="relative w-full h-[300px]">
                  <Image
                    src="/logos/Image6.svg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  id="frame282"
                  className="flex justify-center item center flex-col"
                >
                  <div
                    id="content"
                    className="flex justify-center itmes-center flex-col w-[382px] h-[112px] gap-2  pl-2"
                  >
                    <div className="flex justify-between w-[382px] h-24px items-center gap-2">
                      <div className="text-[14px] leading-[21px] font-semibold">
                        Tech
                      </div>
                      <div className="flex">
                        <Image
                          src="/logos/Star 1.svg"
                          alt="image"
                          height={24}
                          width={24}
                        />
                        <p>5.0</p>
                      </div>
                    </div>
                    <h3 className="text-[24px] leading-[33.6px] font-bold">
                      Introduction to webflow
                    </h3>
                    <p className="text-[16px] leading-6 font-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                  <div id="avatar" className="flex pt-8 pl-2">
                    <button className="cursor-pointer hover:scale-[1.05] text-[16px] bg-white text-black  border-2 border-black pr-6 pt-3 pb-3  pl-6 leading-[24px] font-normal h-[40px] w-[130px] rounded-md flex justify-center items-center">
                      Enroll Now
                    </button>
                    <button className=" text-[16px]  border-hidden text-black  border-2 border-black pr-6 pt-3 pb-3  pl-6 leading-[24px] font-normal hover:underline bg-slate-50 flex justify-center items-center">
                      $400
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-[64px]">
            <button className="cursor-pointer hover:scale-[1.05] text-[16px] bg-white text-black  border-2 border-black pr-6 pt-3 pb-3  pl-6 leading-[24px] font-normal h-[50px] w-[180px] rounded-md flex justify-center items-center">
              View All Courses
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center pt-[200px] pb-[300px] pr-[64px] pl-[64px] h-[900px] w-full gap-[100px] mt-[200px] bg-[#F7F7F7]">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[48px] font-bold leading-[57.6px]">Our team</h3>
            <p className="text-[18px] font-normal leading-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
          <div className="">
            <div id="row1" className="flex justify-center items-center">
              <div>
                <div className="flex flex-col justify-center items-center gap-6 w-[394.67px] h-[273px]">
                  <Image
                    src="/logos/Image7.svg"
                    alt="image"
                    height={80}
                    width={80}
                  />
                  <div className="flex justify-center items-center flex-col h-[57px] w-[394.67px]">
                  <p className="text-[20px] font-semibold leading-[30px] text-center">
                  James Nduku
                  </p>
                  <p className="text-[18px] font-normal leading-[27px] text-center">
                  Marketing Coordinator
                  </p>
                  </div>
                  <div className="flex gap-[14px] pr-4 pt-[]">
                  <Image
              src="/images/LinkedIn.svg"
              alt="LinkedIn"
              height={24}
              width={24}
            />
               <Image
              src="/images/Twitter.svg"
              alt="LinkedIn"
              height={24}
              width={24}
            />
               <Image
              src="/images/Dribble.svg"
              alt="LinkedIn"
              height={24}
              width={24}
            />
                  </div>
                </div>
              </div>
              <div>
              <div className="flex flex-col justify-center items-center gap-6 w-[394.67px] h-[273px]">
                  <Image
                    src="/logos/Image8.svg"
                    alt="image"
                    height={80}
                    width={80}
                  />
                  <div className="flex justify-center items-center flex-col h-[57px] w-[394.67px]">
                  <p className="text-[20px] font-semibold leading-[30px] text-center">
                  Joseph Munyambu
                  </p>
                  <p className="text-[18px] font-normal leading-[27px] text-center">
                  Nursing Assistant
                  </p>
                  </div>
                  <div className="flex gap-[14px] pr-4 pt-[]">
                  <Image
              src="/images/LinkedIn.svg"
              alt="LinkedIn"
              height={24}
              width={24}
            />
               <Image
              src="/images/Twitter.svg"
              alt="LinkedIn"
              height={24}
              width={24}
            />
               <Image
              src="/images/Dribble.svg"
              alt="LinkedIn"
              height={24}
              width={24}
            />
                  </div>
                </div>
              </div>
              <div>
              <div className="flex flex-col justify-center items-center gap-6 w-[394.67px] h-[273px]">
                  <Image
                    src="/logos/Image9.svg"
                    alt="image"
                    height={80}
                    width={80}
                  />
                  <div className="flex justify-center items-center flex-col h-[57px] w-[394.67px]">
                  <p className="text-[20px] font-semibold leading-[30px] text-center">
                  Joseph Ngumbau
                  </p>
                  <p className="text-[18px] font-normal leading-[27px] text-center">
                  Medical Assistant
                  </p>
                  </div>
                  <div className="flex gap-[14px] pr-4 pt-[]">
                  <Image
              src="/images/LinkedIn.svg"
              alt="LinkedIn"
              height={24}
              width={24}
            />
               <Image
              src="/images/Twitter.svg"
              alt="LinkedIn"
              height={24}
              width={24}
            />
               <Image
              src="/images/Dribble.svg"
              alt="LinkedIn"
              height={24}
              width={24}
            />
                  </div>
                </div>
              </div>
            </div>
            <div id="row2" className="flex justify-center items-center">
              <div>
              <div className="flex flex-col justify-center items-center gap-6 w-[394.67px] h-[273px]">
                  <Image
                    src="/logos/Image10.svg"
                    alt="image"
                    height={80}
                    width={80}
                  />
                  <div className="flex justify-center items-center flex-col h-[57px] w-[394.67px]">
                  <p className="text-[20px] font-semibold leading-[30px] text-center">
                  Erick Kipkemboi
                  </p>
                  <p className="text-[18px] font-normal leading-[27px] text-center">
                  Web Designer
                  </p>
                    </div>
                  <div className="flex gap-[14px] pr-4 pt-[]">
                  <Image
              src="/images/LinkedIn.svg"
              alt="LinkedIn"
              height={24}
              width={24}
            />
               <Image
              src="/images/Twitter.svg"
              alt="LinkedIn"
              height={24}
              width={24}
            />
               <Image
              src="/images/Dribble.svg"
              alt="Dribble"
              height={24}
              width={24}
            />
                  </div>
                </div>
              </div>
              <div>
              <div className="flex flex-col justify-center items-center gap-6 w-[394.67px] h-[273px]">
                  <Image
                    src="/logos/Image11.svg"
                    alt="image"
                    height={80}
                    width={80}
                  />
                  <div className="flex justify-center items-center flex-col h-[57px] w-[394.67px]">
                  <p className="text-[20px] font-semibold leading-[30px] text-center">
                  Stephen Kerubo
                  </p>
                  <p className="text-[18px] font-normal leading-[27px] text-center">
                  President of Sales
                  </p>
                    </div>
                  <div className="flex gap-[14px] pr-4 pt-[]">
                  <Image
              src="/images/LinkedIn.svg"
              alt="LinkedIn"
              height={24}
              width={24}
            />
               <Image
              src="/images/Twitter.svg"
              alt="LinkedIn"
              height={24}
              width={24}
            />
               <Image
              src="/images/Dribble.svg"
              alt="Dribble"
              height={24}
              width={24}
            />
                  </div>
                </div>
              </div>
              <div>
              <div className="flex flex-col justify-center items-center gap-6 w-[394.67px] h-[273px]">
                  <Image
                    src="/logos/Image12.svg"
                    alt="image"
                    height={80}
                    width={80}
                  />
                  <div className="flex justify-center items-center flex-col h-[57px] w-[394.67px]">
                  <p className="text-[20px] font-semibold leading-[30px] text-center">
                  John Leboo
                  </p>
                  <p className="text-[18px] font-normal leading-[27px] text-center">
                  Dog Trainer
                  </p>
                  </div>
                  <div className="flex gap-[14px] pr-4 pt-[]">
                  <Image
              src="/images/LinkedIn.svg"
              alt="LinkedIn"
              height={24}
              width={24}
            />
               <Image
              src="/images/Twitter.svg"
              alt="LinkedIn"
              height={24}
              width={24}
            />
               <Image
              src="/images/Dribble.svg"
              alt="LinkedIn"
              height={24}
              width={24}
            />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="h-[830.89px] w-full pt-[112px] pb-[300px] pr-[64px] pl-[64px] flex flex-col gap-[80px] bg-[#F7F7F7]">
          <div className="gap-6 flex flex-col">
            <h2 className="text-[48px] font-bold leading-[57.6px]">Customer testimonials</h2>
            <p className="text-[18px] font-normal leading-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <div className="flex justify-center items-center gap-[32px]">
              <div className="border-black border-[1px] border-solid w-[362.67px] h-[321.89px] flex  p-[32px] gap-6 flex-col">
                <div>
                  <Image
                    src="/logos/stars.svg"
                    alt="image"
                    height={18.89}
                    width={116}
                  />
                </div>
                <div>
                  <p className="text-[18px] font-normal leading-[27px]">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>
                  <div className="flex gap-[20px] h-14 w-[250px] p-2 mt-3">
                    <Image
                    src="/logos/Avatar Image.svg"
                    alt="image"
                    height={56}
                    width={56}
                    className="h-[56px] w-[56px] "
                    />
                    <div className="flex gap-1 flex-col">
                      <h5 className="text-[16px] font-semibold leading-[24px]">James Nduku</h5>
                      <p className="text-[16px] font-normal leading-[24px]">Software Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-black border-[1px] border-solid w-[362.67px] h-[321.89px] flex  p-[32px] gap-6 flex-col">
              <div>
                  <Image
                    src="/logos/stars.svg"
                    alt="image"
                    height={18.89}
                    width={116}
                  />
                </div>
                <div>
                  <p className="text-[18px] font-normal leading-[27px]">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>
                  <div className="flex gap-[20px] h-14 w-[250px] p-2 mt-3">
                    <Image
                    src="/logos/Avatar Image2.svg"
                    alt="image"
                    height={56}
                    width={56}
                    className="h-[56px] w-[56px] "
                    />
                    <div className="flex gap-1 flex-col">
                      <h5 className="text-[16px] font-semibold leading-[24px]">JErick Kipkemboi</h5>
                      <p className="text-[16px] font-normal leading-[24px]">Scrum Master</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-black border-[1px] border-solid w-[362.67px] h-[321.89px] flex  p-[32px] gap-6 flex-col">
              <div>
                  <Image
                    src="/logos/stars.svg"
                    alt="image"
                    height={18.89}
                    width={116}
                  />
                </div>
                <div>
                  <p className="text-[18px] font-normal leading-[27px]">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>
                  <div className="flex gap-[20px] h-14 w-[250px] p-2 mt-3">
                    <Image
                    src="/logos/Avatar Image3.svg"
                    alt="image"
                    height={56}
                    width={56}
                    className="h-[56px] w-[56px] "
                    />
                    <div className="flex gap-1 flex-col">
                      <h5 className="text-[16px] font-semibold leading-[24px]">Stephen Kerubo</h5>
                      <p className="text-[16px] font-normal leading-[24px]">UI/UX Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="flex gap-[8px] items-center justify-between mt-[60px]">
            <div>
              <Image
              src="/logos/Slider Dots.svg"
              alt="image"
              height={24}
              width={24}
              className=" w-[80px] "
              />
              </div>
              <div className="flex gap-[15px]">
              <Image
              src="/logos/Button2.svg"
              alt="image"
              height={24}
              width={24}
              className="cursor-pointer hover:scale-[1.05] h-12 w-12"
              />
              <Image
              src="/logos/Button1.svg"
              alt="image"
              height={24}
              width={24}
              className="cursor-pointer hover:scale-[1.05] h-12 w-12"
              />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
