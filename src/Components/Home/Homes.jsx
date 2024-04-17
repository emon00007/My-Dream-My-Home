import { useLoaderData } from "react-router-dom";
import BannerSlider from "../BannarSlider/BannerSlider";
import Home from "../Homee/Home";


const Homes = () => {
    const homes = useLoaderData()
    return (
        <div className=" ">
            <BannerSlider></BannerSlider>

            <div className="grid mx-2 md:mx-4 lg:mx-5  md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5 my-6 ">
                {homes.map(home => <Home key={home.id} homes={home}></Home>)}
            </div>

        </div>
    );
};

export default Homes;