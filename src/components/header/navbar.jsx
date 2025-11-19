import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <div className='flex w-full justify-between items-center px-5 py-3 border-b'>
      <div className='text-4xl font-family-chromeslab px-10'>
        <NavLink to="/">POSTURA</NavLink>
      </div>
      <nav className="flex gap-15 px-20">
        <NavLink to="/" className="text-base font-helvetica-light underline-animation">Home</NavLink>
        <NavLink to="/prints&posters" className="text-base font-helvetica-light underline-animation">Prints & Posters</NavLink>
        <NavLink to="/frame" className="text-base font-helvetica-light underline-animation">Frame</NavLink>
        <NavLink to="/about" className="text-base font-helvetica-light underline-animation">About</NavLink>
      </nav>
    </div>
  )
}

export default navbar;