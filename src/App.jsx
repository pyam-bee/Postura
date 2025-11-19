import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from "./components/layout/layout.jsx"
import Home from './pages/home/page.jsx'
import PrintPosters from './pages/prints & posters/page.jsx'
import Frame from './pages/frame/page.jsx'
import About from './pages/about/page.jsx'

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path:"/",
          element: <Home />
        },
        {
          path:"/prints&posters",
          element: <PrintPosters />
        },
        {
          path:"/frame",
          element: <Frame />
        },
        {
          path:"/about",
          element: <About />
        },
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App
