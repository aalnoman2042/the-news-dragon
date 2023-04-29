import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Editorinsights from "../Eidtorsinsights/Editorinsights";

const News = () => {
  const news = useLoaderData();
  const { _id, title, details, image_url, category_id } = news;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            {" "}
            <Button variant="danger">
              <FaArrowLeft></FaArrowLeft> all news in this categoroy
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <Editorinsights></Editorinsights>
    </div>
  );
};

export default News;
