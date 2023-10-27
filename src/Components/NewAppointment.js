import { useState } from 'react'
import axios from 'axios';
import times from '../times.json'
import SuccessAppointment from './SuccessAppointment'

const NewAppointment = (props) => 
{
  // let times = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00"];
  let [apptData, setApptData] = useState({
    doctor: "",
    fname:"",
    lname:"",
    contact: "",
    apptDate: "",
    time: ""
  })

  let changeHandler = (e) =>
  {
    setApptData({ ...apptData, [e.target.name]: e.target.value });
  }
  
  let submitHandler = async (e) =>
  {
    e.preventDefault();
    console.log(apptData)
    let resp = await axios.post('http://localhost:3002/newappointment', {...apptData});
    let data = await resp.data;
    console.log(data);
  }

  if (!props.doctorinfo) 
  {
    return <p>Loading</p>
  }

  let docNames = props.doctorinfo.map((doc) => doc.doctor_name);

  return (
    <>
      <div className="container-fluid">
        <form>
          <select className="form-control" name="doctor" onChange={(e) => changeHandler(e)}>
            {
              props.doctorinfo.map((doc) => (
                <option value={doc.doctor_name} >{doc.doctor_name}</option>
              ))
            }
          </select>
          <input
            type="text"
            className="form-control"
            name="fname"
            placeholder="First Name"
            onChange={(e) => changeHandler(e)}
          />
          <input
            type="text"
            className="form-control mt-3"
            name="lname"
            placeholder="Last Name"
            onChange={(e) => changeHandler(e)}
          />
          <input
            type="text"
            className="form-control mt-3"
            name="contact"
            placeholder="Contact"
            onChange={(e) => changeHandler(e)}
          />
          <input 
            type="date"
            className="form-control mt-3"
            name="apptDate" 
            // onChange={(e) => setApptData({...apptData, date: e.target.value})}
            onChange={(e) => changeHandler(e)}
          />

          {times.map((time) =>
          {
            return(
              <div key={time.id}>
                <input type="radio" value={time.time} name="apptTime" checked={apptData.time === time.time} onChange={(e) => setApptData({...apptData, time: e.target.value})} />
                <label htmlFor={time.time}>{time.time}</label>
              </div>
            );
          })}
          <button className='btn btn-primary' onClick={submitHandler} >Submit</button>
        </form>
        
      </div>
    </>
  )
}

export default NewAppointment