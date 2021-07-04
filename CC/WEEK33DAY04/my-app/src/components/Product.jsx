import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/userAction";
import {Card, Button} from 'react-bootstrap'


const Product = () => {
  const { products } = useSelector((store) => store.userRoot);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
    <h1>THis si or</h1>
      {products.length !== 0
        ? products.map((p) => 
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>
                  {p.description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          )
        : null}
    </>
  );
};

export default Product;
