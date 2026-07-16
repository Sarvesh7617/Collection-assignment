import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Marketplace from './pages/Marketplace'
import Community from './pages/Community'
import Collection from './pages/Collection'
import PostDetails from './pages/PostDetails'
import ProductDetails from './pages/ProductDetails';




function App() {

  const router=createBrowserRouter(

    createRoutesFromElements(
      <Route element={<Layout/>}>
        <Route path="/" element={<Marketplace />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/community" element={<Community />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/marketplace/:id" element={<ProductDetails />} />
        <Route path="/community/:id" element={<PostDetails />} />
        {/* <Route path="*" element={<NOTFOUND />} /> */}
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
