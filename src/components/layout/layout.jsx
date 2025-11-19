import Header from "../header/navbar.jsx"
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <div className='w-full h-full flex flex-col grow'>
        <Header />
        <div className='flex grow overflow-y-auto'>
            <Outlet />
        </div>
    </div>
  )
}

export default layout