import axios from 'axios';
import React, { useState } from 'react'

const Register = () => 
{
  let [signUpObj, setSignUpObj] = useState({fname: '', lname: '', email: '', phone: '', password: ''});
  let [signUpStatus, setSignUpStatus] = useState(false)


  let changeHandler = (e) =>
  {
    setSignUpObj({...signUpObj, [e.target.name]: e.target.value});
  }

  let clickHandler = async (e) =>
  {
    e.preventDefault();

    try
    {
      console.log(signUpObj);
      let resp = await axios.post('http://localhost:3002/signup', {...signUpObj});
      let data = await resp.data;
      console.log(data);

      if(data)
      {
        setSignUpStatus(true);
      }
    }
    catch(error)
    {
      console.log(error)
    }
  }

  if(!signUpStatus)
  {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <div className="login rounded p-5 mt-5">
                <h1 className="text-center"><i class="fa fa-user-circle" aria-hidden="true"></i></h1>
                <h2 className="text-center">Create an account</h2>
                <form className="mt-5">
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
                    type="email"
                    className="form-control mt-3"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => changeHandler(e)}
                  />
                  <input
                    type="text"
                    className="form-control mt-3"
                    name="phone"
                    placeholder="Phone"
                    onChange={(e) => changeHandler(e)}
                  />
                  <input
                    type="password"
                    className="form-control mt-2 mb-2"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => changeHandler(e)}
                  />
                  <button type="submit" className="btn btn-main mt-3 w-100" onClick={clickHandler}>Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  else
  {
    return(
      <div className="row mb-4">
        <div className="col-sm-6 offset-3">
          <h4>Thank you {signUpObj.fname} {signUpObj.lname}, you are now registered</h4>
        </div>
      </div>
    )
  }
  
}

export default Register