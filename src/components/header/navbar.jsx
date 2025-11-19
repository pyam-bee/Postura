import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <div className='flex w-full justify-between items-center px-5 py-3 border-b'>
      <div className='text-4xl font-family-chromeslab px-10'>
        POSTURA
      </div>
      <nav className="flex gap-15 px-20">
        <NavLink to="/" className="text-sm font-helvetica-light hover-underline">Home</NavLink>
        <NavLink to="/prints&posters" className="text-sm font-helvetica-light hover-underline">Prints & Posters</NavLink>
        <NavLink to="/frame" className="text-sm font-helvetica-light hover-underline">Frame</NavLink>
        <NavLink to="/about" className="text-sm font-helvetica-light hover-underline">About</NavLink>
      </nav>
    </div>
  )
}

export default navbar;