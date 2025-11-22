import { IoSearch } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareFacebook, FaSquarePinterest } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

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
                    <NavLink to="/" className="font-helvetica-thin hover:underline">Home</NavLink>
                    <NavLink to="/prints&posters" className="font-helvetica-thin hover:underline">Prints & Posters</NavLink>
                    <NavLink to="/frame" className="font-helvetica-thin hover:underline">Frame</NavLink>
                    <NavLink to="/about" className="font-helvetica-thin hover:underline">About</NavLink>
                </div>
                <div className="flex flex-col mt-30">
                    <p className="font-helvetica-thin underline underline-offset-2">Social Media</p>
                    <div className="flex flex-row w-full h-full items-end">
                        <a href="https://www.instagram.com/postura_studios" target="_blank" rel="noopener noreferrer">
                            <FaInstagramSquare className="text-[#383D38] w-[38px] h-[38px]" />
                        </a>
                        <a href="https://www.tiktok.com/@postura.studios" target="_blank" rel="noopener noreferrer">
                            <AiFillTikTok className="text-[#383D38] w-[38px] h-[38px] object-cover" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61573086643960" target="_blank" rel="noopener noreferrer">
                            <FaSquareFacebook className="text-[#383D38] w-[38px] h-[38px]" />
                        </a>
                        <a href="https://www.instagram.com/postura_studios" target="_blank" rel="noopener noreferrer">
                            <FaSquareWhatsapp className="text-[#383D38] w-[38px] h-[38px]" />
                        </a>
                        <a href="https://www.pinterest.com/posturastudios" target="_blank" rel="noopener noreferrer">
                            <FaSquarePinterest className="text-[#383D38] w-[38px] h-[38px]" />
                        </a>
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