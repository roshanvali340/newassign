import React, { useState } from "react";
import "./App.css";
import { Modal, Button } from "react-bootstrap";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>IndigoLearn</h1>
        <nav>
          <ul>
            <li>
              <a href="#become-acca">Become ACCA</a>
            </li>
            <li>
              <a href="#why-choose-us">Why Choose Us?</a>
            </li>
            <li>
              <a href="#eligibility">Eligibility</a>
            </li>
            <li>
              <a href="#what-will-you-learn">What Will You Learn?</a>
            </li>
            <li>
              <a href="#placement-assistance">Placement Assistance</a>
            </li>
            <li>
              <a href="#kickoff">Kickoff Your Prep Journey</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="become-acca">
        <h2>Become ACCA In 18 months</h2>
        <div className="content">
          <div className="text-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              aliquet, nunc et scelerisque luctus, quam erat tincidunt magna,
              sit amet auctor nulla nulla nec justo.
            </p>
            <div className="small-cards">
              <div className="small-card">🟣 Flexibility</div>
              <div className="small-card">🟢 Global Recognition</div>
            </div>
            <div className="buttons">
              <button className="btn purple">Learn More</button>
              <button className="btn red">Get Started</button>
            </div>
          </div>
          <div className="details-card">
            <h3>Request Call Back</h3>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone" />
              <button type="button" className="btn purple" onClick={handleShow}>
                Request Call Back
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="cards">
          <div className="card">📚 Expert Faculty</div>
          <div className="card">🌐 Comprehensive Material</div>
          <div className="card">🏆 Proven Track Record</div>
        </div>
      </section>

      <section id="eligibility">
        <h2>ACCA – Eligibility</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
          justo euismod, malesuada arcu sit amet, facilisis quam.
        </p>
      </section>

      <section id="what-will-you-learn">
        <h2>What will you learn In ACCA?</h2>
        <div className="cards">
          <div className="card">
            <h3>Knowledge Level</h3>
            <p>
              Basics of accounting and finance, introducing essential principles
              and concepts.
            </p>
          </div>
          <div className="card">
            <h3>Skill Level</h3>
            <p>
              Advanced techniques and strategies, focusing on practical
              applications and case studies.
            </p>
          </div>
          <div className="card">
            <h3>Professional Level</h3>
            <p>
              In-depth understanding and mastery of specialized areas within the
              field.
            </p>
          </div>
        </div>
      </section>

      <section id="placement-assistance">
        <h2>100% Placement Assistance</h2>
        <div className="container">
          <div className="headline">Resume Building</div>
          <p>
            Get personalized assistance to craft a standout resume that
            highlights your strengths and achievements.
          </p>
          <div className="headline">Career Counseling</div>
          <p>
            Receive expert guidance to navigate your career path and make
            informed decisions about your future.
          </p>
          <div className="headline">Jobs</div>
          <p>
            Access a wide range of job opportunities tailored to your skills and
            preferences, ensuring the best fit for your career goals.
          </p>
        </div>
      </section>

      <section id="kickoff">
        <h2>Kick off your ACCA Prep journey with IndigoLearn</h2>
        <p>Sign In Free Demo</p>
        <button className="btn blue">Sign In</button>
      </section>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your request has been received!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;
