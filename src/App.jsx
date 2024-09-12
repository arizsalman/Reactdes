
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThirdTask from './Firebase_auth/Third Task';
import FourthTask from './Firebase_auth/Fourth Task';
import Login from './Firebase_auth/login'
import './App.css'
import Sigin from './Firebase_auth/Sigin';
import Hero from './components/Hero';
import Header from './components/header';
import FirstTask from './Firebase_auth/First Task';
import SecondTask from './Firebase_auth/Second Task';




function App() {


  return (
    
    

      <BrowserRouter>
      
       <Header/>
        <Routes>
          
        <Route path='/' element={<Hero/>} />

          <Route path='/firstTask' element={<FirstTask />} />
          <Route path='/secondTask' element={<SecondTask />} />
          <Route path='/thirdTask' element={<ThirdTask />} />
          <Route path='/fourthTask' element={<FourthTask />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/sigin' element={<Sigin/>} />
          
        </Routes>
      </BrowserRouter>





  

  )
}

export default App;

