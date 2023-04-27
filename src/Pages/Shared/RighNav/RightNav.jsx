import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub,FaFacebookF,FaTwitter ,FaInstagram} from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4>Login with</h4>
      <Button className="mb-3" variant="outline-primary">
        <FaGoogle />
        <span className="p-2">Login with Google</span>
      </Button>
      <Button className="mb-3" variant="outline-secondary">
        {" "}
        <FaGithub />
        <span className="p-1"> Login with Github</span>
      </Button>
      <div>
        <h4>
            find us on
        </h4>
        <ListGroup>
      <ListGroup.Item> <FaFacebookF></FaFacebookF> Facebook</ListGroup.Item>
      <ListGroup.Item> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item> <FaInstagram></FaInstagram>Instagram</ListGroup.Item>
    </ListGroup>
      </div>
      <Qzone></Qzone>
      <div>
       
       <img src={bg} alt="" />
        <h2 className="absolute t-10">Create an Amazing Newspaper</h2>
      </div>
    </div>
  );
};

export default RightNav;
