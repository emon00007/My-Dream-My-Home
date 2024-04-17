import { useLoaderData } from "react-router-dom";
import BannerSlider from "../BannarSlider/BannerSlider";
import Home from "../Homee/Home";


const Homes = () => {
    const homes = useLoaderData()
    return (
        <div className=" mx-auto md:mx-auto lg:mx-5">
            <BannerSlider></BannerSlider>

            <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5 my-6 ">
                {homes.map(home => <Home key={home.id} homes={home}></Home>)}
            </div>

        </div>
    );
};

export default Homes;