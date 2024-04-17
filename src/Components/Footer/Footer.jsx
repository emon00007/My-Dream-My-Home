import { FaFacebook } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div>
            <footer className="footer mt-10 p-10 bg-base-300 text-base-content">
                <nav>
                    <h6 className="footer-title">Rent</h6>
                    <a className="link font-medium link-hover">Sell</a>
                    <a className="link font-medium link-hover">Design</a>
                    <a className="link font-medium link-hover">Build</a>
                    <a className="link font-medium link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link className="font-medium" to='/'>Home</Link>
                    <Link className="font-medium" to='/aboutUs'>Abouts</Link>
                    <Link className="font-medium" to='/contacts'>Contacts Us</Link>
                    <Link className="font-medium" to='/updateProfile'>Update Profile</Link>
                    <Link className="font-medium" to='/feedback'>Feedback</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a><FaFacebook></FaFacebook></a>
                        <a><FaGithub></FaGithub></a>
                        <a><FaYoutube></FaYoutube></a>
                        <a><LuTwitter></LuTwitter></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;