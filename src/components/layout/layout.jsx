import ScrollToTop from "../../hooks/useScrollToTop.js"
import Header from "../header/navbar.jsx"
import Footer from "../footer/footer.jsx"
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <ScrollToTop />
      <Header />
      <div className='flex-1'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default layout