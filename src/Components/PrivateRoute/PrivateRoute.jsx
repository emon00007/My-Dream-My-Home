import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if (user) {
        return children;
    }

    // Redirect to login page with current location as the state
    return <Navigate to="/login" state={{ from: location.pathname }} />;

};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;