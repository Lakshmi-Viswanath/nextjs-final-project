import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import { Alert, Button, Card } from "react-bootstrap";
import { addItemsinCart } from "../store/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products = [], status } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return (
      <Alert key="danger" variant="danger">
        Some error occured
      </Alert>
    );
  }

  const addToCart = (product)=>{
    dispatch(addItemsinCart(product))
  }

  const cards = products.map((product, index) => (
    <div className="col-md-3" key={index}>
      <Card style={{ width: "18em" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ height: "150px", width: "150px" }}
          ></Card.Img>
        </div>
        <Card.Body>
          <Card.Title className="text-center">
            {product.title} Title
            <Card.Text>{product.price}</Card.Text>
          </Card.Title>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "lightgrey" }}>
            <Button variant="primary" onClick={()=> addToCart(product)}>Buy Now</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h2>Products Page </h2>
      <section style={{display:"flex",flexDirection:"row", flexWrap:"wrap", justifyContent:"space-evenly"}}>
      {cards} 
      </section>
      
    </>
  );
};

export default Products;
