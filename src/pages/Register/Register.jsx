import Lottie from "lottie-react";
import registerLottieData from '../../assets/lottie/register.json'
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
const Register = () => {
  const {createUser}=useContext(AuthContext);
  const handleRegister=(e)=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const pass=form.pass.value;

    // pass validation

    createUser(email,pass)
    .then(result=>{
      console.log(result);
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-center text-5xl font-bold mt-5">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="pass"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
