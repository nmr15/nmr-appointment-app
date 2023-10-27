import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import NewAppointment from './Components/NewAppointment';
import SuccessAppointment from './Components/SuccessAppointment';
import Login from './Components/Login';
import Register from './Components/Register';
import Footer from './Components/Footer';
import axios from 'axios';

function App() 
{
  let [doctorsData, setDoctorsData] = useState([]);

  useEffect(() =>
  {
    let fetchData = async () =>
    {
      let resp = await axios.get('http://localhost:3002/doctors');
      let data = await resp.data;
      console.log('from json')
      console.log(data);
      setDoctorsData(data);
      // console.log(doctorsData)
    };

    fetchData();
  }, []);

  console.log('from state')
  console.log(doctorsData)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home doctorinfo={doctorsData} />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='newappointment' element={<NewAppointment doctorinfo={doctorsData} />} />
        <Route path='createdappointment' element={<SuccessAppointment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
