import { Button, ButtonGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitch, FaTwitter, FaWhatsapp, FaRegFileAlt} from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary"><FaGoogle></FaGoogle> Continue with Google</Button>
                <Button variant="outline-dark" className="mt-2"><FaGithub></FaGithub> Continue with Github</Button>
            </ButtonGroup>
            <div className="mt-4">
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mt-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mt-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mt-2'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mt-2'><FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mt-2'><FaRegFileAlt></FaRegFileAlt> Trems & Conditions</ListGroup.Item>
                </ListGroup>
            </div>
            <div className="mt-4">
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;