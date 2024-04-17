import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";

import LogIn from "../Components/Loggin/LogIn";
import Regester from "../Components/Regester/Regester";
import AboutUS from "../Components/About Us/AboutUS";
import Contasts from "../Components/Contact/Contasts";
import Feedback from "../Components/Feedback/Feedback";
import Homes from "../Components/Home/Homes";
import HomeDetails from "../Components/HomeDetails/HomeDetails";
import UpdateProfile from "../Components/UpdateProfile/UpdateProfile";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

const routs = createBrowserRouter([
    
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {   
                
                path:'/',
                element:<Homes></Homes>,
                loader:()=>fetch(`/fakedata.json`)
              
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Regester></Regester>
            },
            {
                path:'/aboutUs',
                element:<AboutUS></AboutUS>
            },
            {
                path:'/contacts',
                element:<Contasts></Contasts>

            },
            {
                path:'/feedback',
                element:<Feedback></Feedback>
            },
            {
                path:'/homedetails/:id',
                element:<PrivateRoute><HomeDetails></HomeDetails></PrivateRoute>,
                loader:()=>fetch(`/fakedata.json`)

            },
            {path:'/updateProfile',
            element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            }
           
        ]
    }
])
export default routs