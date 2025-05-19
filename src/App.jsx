import { useState } from 'react';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <h1>Fama Barber Shop and Beauty Salon</h1>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <h1>Fama Barber Shop and Beauty Salon</h1>
        <p>Book an appointment today!</p>
        <button onClick={() => setShowModal(true)}>Book Now</button>
      </header>

      <section id="about" className="section about">
        <h2>About Us</h2>
        <p>We are a barber shop and beauty salon located in Denton, TX.</p>
        <p>Status: Open ∙ Closes 7 pm</p>
        <p>Location: 500 N Bell Ave #109, Denton, TX 76209, United States</p>
        <p>Phone: +1 940-612-9127</p>
        <p>Directions: <a href="https://www.google.com/maps" target="_blank">Google Maps</a></p>
      </section>

      <section id="services" className="section services">
        <h2>Our Services</h2>
        <p>We offer a variety of services, including haircuts, shaves, and beauty treatments.</p>
        <p>Service Comment: “Costly compared to other barbershops with better haircuts.”</p>
      </section>

      <section id="reviews" className="section reviews">
        <h2>Reviews</h2>
        <p>We have 116+ reviews with an average rating of 4.6 stars.</p>
      </section>

      <section id="gallery" className="section gallery">
        <h2>Gallery</h2>
        <div className="gallery-images">
          <img src="https://via.placeholder.com/800x400" alt="Gallery 1" />
          <img src="https://via.placeholder.com/800x400" alt="Gallery 2" />
          <img src="https://via.placeholder.com/800x400" alt="Gallery 3" />
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
          <textarea placeholder="Message"></textarea>
        </form>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.295178139381!2d-97.13529268470138!3d33.21232148078473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2cecf4cccb6b%3A0xd6f3d4c1e1e5f16!2s500%20N%20Bell%20Ave%20%23109%2C%20Denton%2C%20TX%2076209%2C%20USA!5e0!3m2!1sen!2sin!4v1639647523412!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </section>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Book an Appointment</h2>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone" />
              <input type="date" />
              <input type="time" />
              <button type="submit">Book</button>
            </form>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>&copy; 2024 Fama Barber Shop and Beauty Salon</p>
      </footer>
    </div>
  );
}

export default App;
