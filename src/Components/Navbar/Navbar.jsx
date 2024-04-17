import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import { CgProfile } from "react-icons/cg";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const Navbar = () => {
  const auth = getAuth()
  const { user, logOut } = useContext(AuthContext)
  const handelSignOut = () => {
    logOut()
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/aboutUs'>Abouts</NavLink></li>
    <li><NavLink to='/contacts'>Contacts Us</NavLink></li>
    <li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
    <li><NavLink to='/feedback'>Feedback</NavLink></li>

  </>
  const handelUpdate = (e) => {
    e.preventDefault();
    const PhotoURL = e.target.PhotoURL.value;
    updateProfile(auth.currentUser, { photoURL: PhotoURL })
      .then(() => {
        console.log('Profile photo updated successfully');
      })
      .catch((error) => {
        console.error('Error updating profile photo:', error);
      });
  }
  return (
    <div className="navbar z-50 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 z-50 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu z-50 menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <a className=" text-2xl font-bold">My Dream <span className="text-amber-400">My Home</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">


          {links}

        </ul>
      </div>
      <div className="navbar-end">
        <div tabIndex={0} role="button" className=" text-4xl   ">
          <div className="w-10 h-10 rounded-full mr-4">
            {user ? <img className="w-16 h-10 rounded-full" alt="#" src={user.photoURL} /> : <CgProfile className="text-3xl"></CgProfile>}
          </div>
        </div>
        {
          user ?
            <Link to="/login" onClick={handelSignOut} className="btn">Sign Out</Link> : <Link to="/login" className="btn">Log in</Link>
        }

      </div>
    </div>
  );
};

export default Navbar;