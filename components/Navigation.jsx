import { Nav, Navbar } from "react-bootstrap";
import  Link  from "next/link";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";

const Navigation = () => {


    const productsInCart = useSelector((state)=> state.cart)

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Nav>
          <Link href="/dashboard" style={{ textDecoration: 'none', color: 'black' }}>
              <h3>eCommerce Store</h3>
            </Link>
            </Nav>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Link href="/cart" as={Link}>
                My Cart  {productsInCart.length}
              </Link>
              </Navbar.Text>
            </Navbar.Collapse>
         
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
