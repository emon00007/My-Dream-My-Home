import { useLoaderData } from "react-router-dom";
import BannerSlider from "../BannarSlider/BannerSlider";
import Home from "../Homee/Home";
import { Helmet } from "react-helmet";


const Homes = () => {
    const homes = useLoaderData()
    return (
        <div className=" text-center">
            <Helmet><title>Home</title></Helmet>
            <BannerSlider></BannerSlider>
                <h2 className="lg:my-10 my-5 font-semibold md:font-bold lg:font-bold md:text-3xl lg:text-4xl text-2xl"> Choose your home </h2>
            <div className="grid mx-2 md:mx-4 lg:mx-5  md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5 my-6 ">
                {homes.map(home => <Home key={home.id} homes={home}></Home>)}
            </div>

        </div>
    );
};

export default Homes;