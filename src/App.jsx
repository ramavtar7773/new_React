import './App.css'
import Header from './Header'
import './Header.css'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home';

import About from './About';

import Count from './Count';




 function App() {
 
  return (

  <>

    <BrowserRouter>
    <Header/>
    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
       <Route path='/count' element={<Count/>}></Route> 


    </Routes>
    <Footer/>
    </BrowserRouter>

   </>

    )
  }

export default App


