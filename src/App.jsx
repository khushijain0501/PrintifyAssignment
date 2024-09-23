import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CreateSellComp from './components/CreateSellComp'
import Cards from './components/Cards'
import ProductsRange from './components/ProductsRange'
import Slider from './components/Slider'
import { Container } from 'postcss'
import ConnectStores from './components/ConnectStores'
import Reviews from './components/Reviews'
import SellingCard from './components/SellingCard'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <CreateSellComp/>
      <Cards/>
      <ProductsRange/>
      <Slider/>
      <ConnectStores/>
      <Reviews/>
      <SellingCard/>
      <Footer/>
    </>
  )
}

export default App
