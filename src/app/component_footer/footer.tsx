import Image from 'next/image';

export default function Footer() {
  return (
    <div className=" h-[700px] items-center flex justify-center p-20  mt-[282px] gap-[80px] mb-[250px]">
      <div className="h-[600px] w-[98%] bg-white">
        <div className="flex justify-between">
          <div>
            <h1 className="font-semibold text-[20px] h-[27px] w-[500px] leading-[27px]">Subscribe to our newsletter</h1>
            <p className="pt-1 leading-[24px] text-[16px] font-normal h-[24px] w-[500px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="gap-4">
            <div className="flex justify-between h-[48px] w-[460px]">
              <input type="email" placeholder="Your Email Address" className="border-2 border-gray-300 p-4 w-[320px] h-[48px] rounded-md" />
              <button className="w-[120px] text-[16px] leading-6 h-[48px] bg-blue-600 text-white rounded-md font-semibold pl-6 pr-6">Subscribe</button>
            </div>
            <div>
              <p className="text-[14px] font-normal h-[18px] pt-4 flex justify-items-end leading-7">By subscribing you agree to our Privacy Policy</p>
            </div>
          </div>
        </div>
        <div className='flex pt-[80px] mt-4'>
          <div className='h-[40px] w-[25%]'>
            <div className="flex gap-[5px] h-[40px] w-[250px] items-center justify-center">
              <Image
                src="/images/Frame 1.svg"
                alt="logo"
                height={40}
                width={40}
                className="h-[30.38px] w-[32.58px]"
              />
              <h1 className="leading-[30.34px] text-[25.07px] font-bold">Ddsgnr</h1>
            </div>
          </div>
          <div className='h-[40px] w-[25%]'>
            <ol className='flex-col space-y-4 text-[16px] leading-6 font-normal'>
              <li className='text-[18px] font-semibold leading-6'>Courses</li>
              <li>Business</li>
              <li>Development</li>
              <li>Technology</li>
              <li>Design</li>
              <li>Programming</li>
            </ol>
          </div>
          <div className='h-[40px] w-[25%]'>
            <ol className='flex-col space-y-4'>
              <li className='text-[18px] font-semibold leading-6'>Resources</li>
              <li>Career</li>
              <li>Resume</li>
              <li>Learning</li>
              <li>Interview Preparation</li>
              <li>Jobs</li>
            </ol>
          </div>
          <div className='h-[40px] w-[25%]'>
            <ol className='flex-col space-y-4'>
              <li className='text-[18px] font-semibold leading-6'>About Us</li>
              <li>Contact</li>
              <li>Help/Support</li>
              <li>FAQ</li>
              <li>Terms and Conditions</li>
              <li>Partners</li>
            </ol>
          </div>
        </div>
        <div className='flex justify-between mt-[350px]  p-[34px] items-center border-t-2 border-black border-solid'> 
          <ol className='flex space-x-8 items-center pl-2'> 
            <li>2023 Ddsgnr. All rights reserved.</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies Settings</li>
          </ol>
          <div className="flex gap-[20px] pr-4">
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
    </div>
  )
}