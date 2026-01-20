import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import "./App.css";

const cardData = [
  {
    id: 1,
    title: "Artificial Intelligence & ML",
    category: "Specialization",
    description:
      "Master supervised learning, deep neural networks, and applied AI for real‑world products.",
    image:
      "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
    updated: "New batch: Feb 2026",
    action: "View syllabus",
    level: "Advanced"
  },
  {
    id: 2,
    title: "Data Science & Analytics",
    category: "Specialization",
    description:
      "Learn Python, statistics, data visualization, and machine learning for business decisions.",
    image:
      "https://images.pexels.com/photos/955392/pexels-photo-955392.jpeg?auto=compress&cs=tinysrgb&w=800",
    updated: "Seats left: 12",
    action: "Explore track",
    level: "Intermediate"
  },
  {
    id: 3,
    title: "Full‑Stack Web Development",
    category: "Professional",
    description:
      "Build responsive web apps using React, Node.js, REST APIs, and modern deployment tools.",
    image:
      "https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=800",
    updated: "Placement assistance",
    action: "Start journey",
    level: "Beginner–Friendly"
  },
  {
    id: 4,
    title: "Cybersecurity & Networks",
    category: "Specialization",
    description:
      "Understand network protocols, ethical hacking, and security best practices for modern systems.",
    image:
      "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800",
    updated: "Lab‑based learning",
    action: "View modules",
    level: "Advanced"
  },
  {
    id: 5,
    title: "Cloud & DevOps Engineering",
    category: "Professional",
    description:
      "Deploy scalable applications using AWS/Azure, containers, CI/CD pipelines, and monitoring.",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
    updated: "Multi‑cloud projects",
    action: "See curriculum",
    level: "Intermediate"
  },
  {
    id: 6,
    title: "Game Development",
    category: "Creative Tech",
    description:
      "Design and build 2D/3D games, from game physics to asset pipelines and monetization.",
    image:
      "https://images.pexels.com/photos/9071735/pexels-photo-9071735.jpeg?auto=compress&cs=tinysrgb&w=800",
    updated: "Project‑based",
    action: "Preview course",
    level: "Intermediate"
  },
  {
    id: 7,
    title: "Software Engineering",
    category: "Core CS",
    description:
      "Learn software architecture, design patterns, Agile, testing, and large‑scale system design.",
    image:
      "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800",
    updated: "Capstone project",
    action: "View roadmap",
    level: "Intermediate"
  },
  {
    id: 8,
    title: "Human–Computer Interaction",
    category: "UX & Research",
    description:
      "Study user experience, interaction design, and usability testing for modern digital products.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    updated: "Portfolio‑focused",
    action: "Explore syllabus",
    level: "Beginner–Friendly"
  }
];

function App() {
  return (
    <div className="app-wrapper">
      <Container>
        <header className="text-center mb-4">
          <h1 className="app-title">Bootstrap card‑based Layout</h1>
          <p className="app-subtitle">
            Explore industry‑ready computer science specializations with a
            modern card‑based UI built using React and Bootstrap.
          </p>
        </header>

        <section className="card-grid">
          <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
            {cardData.map((card) => (
              <Col key={card.id}>
                <Card className="custom-card h-100">
                  <Card.Img
                    variant="top"
                    src={card.image}
                    alt={card.title}
                    className="custom-card-img"
                  />
                  <Card.Body className="custom-card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <Badge bg="info" className="custom-badge">
                        {card.category}
                      </Badge>
                      <span style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
                        {card.updated}
                      </span>
                    </div>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text className="flex-grow-1">
                      {card.description}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <Button variant="primary" size="sm">
                        {card.action}
                      </Button>
                      <Button variant="outline-light" size="sm">
                        Details
                      </Button>
                    </div>
                  </Card.Body>
                  <Card.Footer className="custom-footer d-flex justify-content-between">
                    <small>Status: Enrolling</small>
                    <small>Level: {card.level}</small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default App;
