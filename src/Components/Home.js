import { Link } from "react-router-dom"

const Home = (props) => 
{
  if(!props.doctorinfo)
  {
    return <p>Loading</p>
  }

  console.log(props)
  let docNames = props.doctorinfo.map((doc) => doc.doctor_name);
  console.log(docNames)

  return (
    <>
      <div >
        <section className="section__banner">
          <div className="banner">
            {/* <img className="banner__img" src="/img/banner-3.jpg" alt="" /> */}
            <Link to="/newappointment"><button className="btn btn-primary btn-hero">Make an appointment</button></Link>
          </div>
        </section>
        <h3>Doctor Name</h3>
        <p>{docNames}</p>
      </div>
    </>
  )
}

export default Home