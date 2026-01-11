import { Routes, Route } from "react-router-dom"

// Pages
import NotFoundPage from "./Pages/404.tsx"
import Login from "./Pages/Login.tsx"
import Register from "./Pages/Register.tsx"
import HomePage from "./Pages/Home.tsx"
import ProductsPage from "./Pages/ProductsPage.tsx"
import Reviews from "./Pages/Reviews.tsx"
import AboutMe from "./Pages/AboutMe.tsx"
import Contact from "./Pages/Contact.tsx"

import MainLayout from "./Components/MainLayout.tsx"

function App() {
   return (
      <>
         <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route element={<MainLayout />}>
               <Route path="/" element={<HomePage />} />
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
               <Route path="/products" element={<ProductsPage />} />
               <Route path="/reviews" element={<Reviews />} />
               <Route path="/aboutme" element={<AboutMe />} />
               <Route path="/contact" element={<Contact />} />
            </Route>
         </Routes>
      </>
   )
}

export default App
