import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location =useLocation();
    const navigate = useNavigate();



    const handleTheLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password, name, photo);
        

        // creating the user here
        
        signIn (email,password)
        .then(result=>{
            navigate(location?.state ? location.state : '/');
            console.log(result.user)

        })
        .catch(error=>{
            console.error(error)
        })

    }
    return (
       <div>
         <div>
         <h2 className="text-3xl text-state-900 font-bold text-center mb-5 mt-10">Please Login To Continue</h2>
                <form onSubmit={handleTheLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
                
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover font-semibold mt-5">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-slate-900 text-white">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Do not have an account? <Link className="text-state-900 font-bold" to="/register">Register</Link></p>
            </div>

       </div>
    );
};

export default Login;