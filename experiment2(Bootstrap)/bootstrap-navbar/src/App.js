import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Row,
  Col,
  Card,
  Badge,
} from "react-bootstrap";
import "./App.css";

const menuItems = [
  {
    id: 1,
    title: "Classic Margherita Pizza",
    category: "Vegetarian",
    description:
      "Stone‑baked pizza with fresh tomato sauce, basil, and buffalo mozzarella.",
    image:
      "https://images.pexels.com/photos/4109084/pexels-photo-4109084.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "₹399",
    tag: "Chef’s choice",
  },
  {
    id: 2,
    title: "Smoky BBQ Burger",
    category: "Non‑Veg",
    description:
      "Grilled beef patty, caramelized onions, cheddar, and BBQ sauce on brioche.",
    image:
      "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "₹349",
    tag: "Best seller",
  },
  {
    id: 3,
    title: "Paneer Tikka Platter",
    category: "Indian",
    description:
      "Char‑grilled paneer cubes with peppers, onions, and mint chutney.",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-tikka-masala-recipe-1.jpg?auto=compress&cs=tinysrgb&w=800",
    price: "₹329",
    tag: "Spicy",
  },
  {
    id: 4,
    title: "Chocolate Lava Cake",
    category: "Dessert",
    description:
      "Warm chocolate cake with gooey center, served with vanilla ice cream.",
    image:
      "https://images.pexels.com/photos/4109996/pexels-photo-4109996.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "₹199",
    tag: "New",
  },
];

function App() {
  return (
    <div className="app-root">
      {/* Responsive navbar with hamburger menu */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="shadow-sm sticky-top"
      >
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            FoodieNavbar
          </Navbar.Brand>

          {/* Hamburger icon for small screens */}
          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto" navbarScroll>
              <Nav.Link href="#menu">Menu</Nav.Link>
              <Nav.Link href="#offers">Offers</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Button variant="warning" size="sm">
              Order Now
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero section */}
      <section className="hero-section text-center text-light">
        <Container>
          <h1 className="hero-title">Discover Your Next Favorite Bite</h1>
          <p className="hero-subtitle">
            Curated dishes prepared fresh, perfect for late‑night coding or
            weekend hangouts.
          </p>
        </Container>
      </section>

      {/* Food menu cards */}
      <section id="menu" className="cards-section">
        <Container>
          <div className="section-header text-center mb-4">
            <h2 className="text-light">Today&apos;s Specials</h2>
            <p className="text-muted">Handpicked items from our kitchen.</p>
          </div>

          <Row xs={1} sm={2} lg={4} className="g-4">
            {menuItems.map((item) => (
              <Col key={item.id} className="d-flex">
                <Card className="course-card flex-fill">
                  <div className="card-image-wrapper">
                    <Card.Img
                      variant="top"
                      src={item.image}
                      alt={item.title}
                      className="course-card-img"
                      loading="lazy"
                    />
                  </div>

                  <Card.Body className="course-card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <Badge bg="warning" text="dark" className="course-badge">
                        {item.category}
                      </Badge>
                      <span className="course-price">{item.price}</span>
                    </div>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className="flex-grow-1">
                      {item.description}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <Button variant="success" size="sm">
                        Add to Cart
                      </Button>
                      <span className="course-tag">{item.tag}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer id="contact" className="app-footer text-center text-muted">
        <Container>
          <p>Serving flavor since 2026 · bootstrap-navbar food menu demo</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
