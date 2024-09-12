import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import About from './pages/About'
import Login from './pages/Login'
import Placeorders from './pages/Placeorders'
import Orders from './pages/Orders'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Navcomp from './Components/Navcomp'
import Artists from './pages/Artists'
import Footter from './Components/Footter'
import SearchBar from './Components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] 1g:px-[9vw]'>
      <Navcomp/>
      <ToastContainer/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/product/:productId" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/placeorders" element={<Placeorders />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footter/>
    </div>
  )
}

export default App