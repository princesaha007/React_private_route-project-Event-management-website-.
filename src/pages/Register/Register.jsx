import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";


const Register = () => {

    const {createUser} = useContext(AuthContext);
   
    const location =useLocation();
    const navigate = useNavigate();

    const handleTheRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password, name, photo);

        
        if (password.length < 6) {
            swal("Error!", "Password should be at least 6 characters", "error");
            
        }
        else if (!/[A-Z]/.test(password) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            swal("Error!", "Your password should have at least one upper case character and one special character.", "error");
            return;
          }
          
        

        // creating the user here

        createUser (email,password)
        .then(result=>{
            navigate(location?.state ? location.state : "/login");
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })

    }







    return (
        <div>
            <div>
         <h2 className="text-3xl text-state-900 font-bold text-center mb-5 mt-10">Please Register</h2>
                <form onSubmit={handleTheRegister}  className=" md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                
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
                        <button className="btn bg-slate-900 text-white">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account? <Link className="text-state-900 font-bold" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;