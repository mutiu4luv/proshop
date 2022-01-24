import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";
// import Products from "../components/Products";

const ProductScreen = ({ match }) => {
  // const Product = Products.find((P) => P._id === match.params.id);
  const [Product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);

      setProduct(data);
    };

    fetchProduct();
  }, [match]);

  return (
    <div>
      <Link className="btn btn-light my-3" to="/">
        {" "}
        Previous Page{" "}
      </Link>
      <Row>
        <Col md={6}>
          <Image src={Product.image} alt={Product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>{Product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={Product.rating}
                text={`${Product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <strong>Price:</strong> ${Product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Description:</strong> {Product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>price</Col>
                  <Col>
                    <strong>${Product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status</Col>
                  <Col>
                    {Product.countInStock > 0 ? "in stock" : "out of stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    width: "100%",
                    padding: "10px 0 ",
                  }}
                  disabled={Product.countInStock === 0}
                >
                  Add To Cart
                </button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
