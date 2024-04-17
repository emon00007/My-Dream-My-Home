import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import { CgProfile } from "react-icons/cg";


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
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/aboutUs'>Abouts</Link></li>
    <li><Link to='/contacts'>Contacts Us</Link></li>
    <li><Link to='/updateProfile'>Update Profile</Link></li>
    <li><Link to='/feedback'>Feedback</Link></li>

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
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
        <div tabIndex={0} role="button" className="btn text-4xl btn-ghost btn-circle ">
          <div className="w-full rounded-full mr-4">
            {user ? <img className="w-full  rounded-full" alt="#" src={user.photoURL} /> : <CgProfile className="text-3xl"></CgProfile>}
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