import { useState } from 'react'
import Navbar from './component/Navbar';
import Header from './component/Header/Header'
import Service from './component/Services/Service';
import Works from "./component/Works/Works";
import Footer from './component/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Header/>
        <Service/>
        <Works/>
        <Footer/>
        
    </>
  )
}

export default App
