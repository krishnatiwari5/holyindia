import './App.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Home from './Pages/home/Home';
import Destinations from './Pages/destinations/Destinations';
import Contact from './Pages/contact/Contact';
import Navbar from './Components/navbar/Navbar';
import Account from './Pages/account/Account';
import Signup from './Components/signup/Signup';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element = {<Destinations/>} />
      <Route path = "/contactus" element = {<Contact/>} />
      <Route path = "/signin" element = {<Account/>} />
      <Route path='/signup' element = {<Signup/>} />
      </Routes> 
      </BrowserRouter>
   
    </div>
  );
}

export default App;
