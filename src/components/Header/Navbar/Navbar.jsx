import { Link, NavLink } from "react-router-dom";
import navImage from "../../../images/Screenshot 2023-10-09 011413.png"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
const Navbar = () => {

    const {user ,logOut} =useContext(AuthContext);

    const handleTheSignOut =()=>{
        logOut()
            .then()
            .catch()
    }



        const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        
        <li><NavLink to="/login">Login</NavLink></li>
        {/* <li><NavLink to= "/service ">Services</NavLink></li> */}
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
            <div className="navbar-start">
                <img className="h-[60px]" src={navImage} alt="" />

            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {/* <img src={userDefaultPic} /> */}
                    </div>
                </label>
                {
                    user?

                    <button onClick={handleTheSignOut}  className="btn">Sign Out</button>
                        :
                    <Link to= "/login">
                        <button className="btn">Login</button>
                    </Link>


                }
            

            </div>
        </div>

            
        </div>
    );
};

export default Navbar;