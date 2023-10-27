
const Login = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <div className="login rounded p-5 mt-5">
              <h1 className="text-center"><i class="fa fa-user-circle" aria-hidden="true"></i></h1>
              <h2 className="text-center">Have an account?</h2>
              <form className="mt-5">
                <input type="text" className="form-control" placeholder="Username" />
                <input type="password" className="form-control mt-3 mb-2" placeholder="Password" />
                <button className="btn btn-main mt-3 w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Login