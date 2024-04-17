import { Link } from "react-router-dom";


const Home = ({ homes }) => {
    const { image_url, segment_name, id, estate_title } = homes;
    return (
        <div data-aos="fade-up-left">
            <div className="mt-5npm i aos">
                <div>
                    <div className="card w-full lg:w-full md:w-full glass">
                        <figure>
                            <img data-aos="fade-up" className="w-full h-48"
                                src={image_url}
                                alt="image"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 data-aos="fade-down-right" className="card-title font-bold text-3xl">{estate_title}</h2>
                            <p>{segment_name}</p>
                            <div className="card-actions justify-start">
                                <Link to={`/homedetails/${id}`}><button className="btn bg-purple-400">View Property</button></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;