import { IoSearch } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

const footer = () => {
  return (
    <div className="w-full h-auto relative">
        <div className="flex flex-col grow border-t">
            <div className="flex flex-row p-10 justify-between">
                <div className="flex flex-col">
                    <p className="text-4xl font-family-chromeslab pb-2">POSTURA</p>
                    <div className="border p-2 w-[400px] text-sm flex flex-row justify-between">
                        <input className="w-[400px] focus:outline-none focus:ring-0 border-none" type="text" placeholder="Posters & Prints"/>
                        <div className="w-[24px] h-[24px]"><IoSearch className="w-[24px] h-[24px]"/></div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3">
                    <h2 className="text-xl font-helvetica-thin underline underline-offset-8">Navigation</h2>
                    <p className="font-helvetica-thin hover:underline">Home</p>
                    <p className="font-helvetica-thin hover:underline">Prints & Posters</p>
                    <p className="font-helvetica-thin hover:underline">Frame</p>
                    <p className="font-helvetica-thin hover:underline">About</p>
                </div>
                <div className="flex flex-col mt-30">
                    <p className="font-helvetica-thin underline underline-offset-2">Social Media</p>
                    <div className="flex flex-row w-full h-full items-end">
                        <FaInstagramSquare className="text-[#383D38] w-[38px] h-[38px]" />
                        <AiFillTikTok className="text-[#383D38] w-[38px] h-[38px] object-cover" />
                        <FaSquarePinterest className="text-[#383D38] w-[38px] h-[38px]" />
                        <FaSquareWhatsapp className="text-[#383D38] w-[38px] h-[38px]" />
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between object-center p-2 border-t">
                <p className="font-helvetica-thin">Copyright@2025 Postura</p>
                <p className="font-helvetica-thin">Terms & Conditions</p>
            </div>
        </div>
    </div>
  )
}

export default footer