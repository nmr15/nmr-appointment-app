

const SuccessAppointment = (props) => 
{
  return (
    <>
      <div className="container-fluid">
        <h1>Thank you!</h1>
        <p>Your appointment is set, it will be on {props.formData.date}, at {props.formData.time}</p>
      </div>
    </>
  )
}

export default SuccessAppointment