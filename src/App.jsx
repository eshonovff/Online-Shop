import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./Layout/Layout"
import Contact from "./pages/Contact"
import About from "./pages/About"
import PageByid from "./pages/pageByid"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Card from "./pages/Card"
import Checkout from "./pages/checkout"
import Categry from "./pages/Categroy"
import Wishlist from "./pages/wishlist"


const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout />,
      children:[
        {
          index: true,
          element: <Home />
        },
        {
          path:"/contact",
          element: <Contact />
        },
        {
         path:"/about",
         element: <About />
        },
        {
          path:"*",
          element: <div>Page not found</div>
        },
        {
          path:"/productbyID/:id",
          element: <PageByid />
        },
        {
          path:"/signUp",
          element: <SignUp />
        },{
          path:"signIn",
          element: <SignIn />
        },
        {
          path:"cart",
          element: <Card />
        },
        {
          path:"/checkout",
          element: <Checkout />
        },
        {
          path:"/category",
          element: <Categry />
        },
        {
          path:'/category/:id',
          element:<Categry/>
        },
        {
          path:"/wishlist",
          element: <Wishlist />
        }



      ]
    }
  ])
  
  
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
