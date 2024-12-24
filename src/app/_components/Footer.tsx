import { Film } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
const Footer = () => {
  return (
    // <div className=" min-[375px]:max-w-full min- bg-[#4338CA] relative">
    //   <footer className="flex justify-between ">
    //     <div className="flex">
    //       <img
    //         className="w-[32px] h-[32px] ml-[80px] bg-white mt-[72px]"
    //         src="logo.png "
    //         alt=""
    //       />
    //       <div className="text-[20px] text-white ml-[15px] mt-[72px]">
    //         Movie Z
    //       </div>
    //     </div>
    //     <div className="text-white ml-[80px] absolute mt-[120px]">
    //       © 2024 Movie Z. All Rights Reserved.
    //     </div>

    //     <div className="mt-[72px] ml-[800px] text-white ">
    //       Contact Information
    //       <div className="mt-[10px] text-white">
    //         Email:
    //         <div>support@movieZ.com</div>
    //       </div>
    //       <div className="mt-[10px]">
    //         Phone:
    //         <div>+976 (11) 123-4567</div>
    //       </div>
    //     </div>
    //     <div className="mt-[72px] mr-[80px] text-white">
    //       <div>
    //         Follow us
    //         <div className="flex gap-5 mt-[20px]">
    //           {" "}
    //           <p>Facebook</p>
    //           <p>Instagram</p>
    //           <p>Twitter</p>
    //           <p>Youtube</p>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
    <div className="bg-[#4338CA] w-screen h-[308px] relative">
      <div className="text-[16px] text-white ml-[20px] flex pt-[40px] gap-4 ">
        <Film className="w-[20px] h-[20px]" />
        Movie Z
      </div>
      <div className="text-white text-[12px] ml-[20px] pt-2 ">
        © 2024 Movie Z. All Rights Reserved.
      </div>
      <div className=" text-[14px] flex justify-between text-white ml-[48px] mt-[28px] ">
        <div>
          Contact Information
          <div className="mt-[12px]">
            <Mail className="w-[18px] h-[18px] absolute left-1 bottom-[125px] ml-[20px]" />
            Email:
            <div>support@movieZ.com</div>
          </div>
          <div className="mt-[24px]">
            <Phone className="w-[18px] h-[18px] absolute left-1 bottom-14 ml-[20px]" />
            Phone:
            <div>+976 (11) 123-4567</div>
          </div>
        </div>

        <div className="text-white mr-[65px]">
          Follow Us
          <div className="mt-[12px]">Facebook</div>
          <div className="mt-[12px]">Instagram</div>
          <div className="mt-[12px]">Twitter</div>
          <div className="mt-[12px]">Youtube</div>
        </div>
      </div>
    </div>
  );
};
export { Footer };
