import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import LogIn from "../Components/Loggin/LogIn";

const routs = createBrowserRouter([
    
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            }
        ]
    }
])
export default routs