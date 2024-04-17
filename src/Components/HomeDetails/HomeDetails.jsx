
import { Helmet } from 'react-helmet';
import { Link, useLoaderData, useParams } from 'react-router-dom';



const HomeDetails = () => {
    const homes = useLoaderData();
    const {id} = useParams();
    
    const home =homes.find(home => home.id === id);
    console.log(home);
    return (
        <div>
            <Helmet><title>HomeDetails</title></Helmet>
            <div className="hero rounded-xl bg-purple-400  ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className=" text-2xl md:text-4xl lg:text-5xl font-bold">{home.estate_title}</h1>
                        <p className="text-gray-500 pt-4"> {home.segment_name}</p>
                        <hr className="w-full py-4 mt-4" />
                        <p className="text-gray-500 ">{home.description}</p>
                        <hr className="w-full py-4 mt-4" />
                        <p ><span className="font-bold">Price: </span>{home.price} </p>
                        <p className="mt-4 font-bold"><span className="">Satus:{home.status} </span> </p>
                        <p className="mt-4 font-bold"><span className="">Area:{home.area} </span> </p>
                        <hr className="w-full py-4 mt-4" />
                        <p className="mt-4 font-bold "><span className="text-gray-500">Location: </span>{home.location} </p>
                        <p className="mt-4 font-bold "><span className="text-gray-500">Facilities: </span>{home.facilities} </p>
                        <p className="mt-4 font-bold "><span className="text-gray-500">YearOfPublishing: </span>{} </p>
                        <p className="mt-4 font-bold "><span className="text-gray-500">Rating: </span>{} </p>
                        <div className="flex gap-4 mt-4">
                           <Link to="/"> <button  className="btn bg-purple-400">View  Home</button></Link>
                           <Link to="/"> <button  className="btn bg-purple-400">{home.status}</button></Link>
                            
                        </div>
                      

                    </div>
                    <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">

                        <div className=" bg-gray-400 shadow-xl h-full w-full  rounded-xl">
                            <img  src={home.image_url} alt="Book" className="rounded-xl w-full h-full" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDetails;