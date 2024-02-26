import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css'; // Assuming you have a custom CSS file for styling

function App() {
  // Sample offers data
  const offers = [
    {
      id: 1,
      title: 'Special Offer 1',
      description: 'Description of Special Offer 1',
      image: 'offer1.jpg',
    },
    {
      id: 2,
      title: 'Special Offer 2',
      description: 'Description of Special Offer 2',
      image: 'offer2.jpg',
    },
    // Add more offer objects as needed
  ];

  // Putharekulu data
  const putharekulu = [
    {
      id: 1,
      name: 'Sugar Putharekulu',
      image: '/sugar.jpg',
      price: '₹100',
    },
    {
      id: 2,
      name: 'Bellam Putharekulu',
      image: '/bellam.jpg',
      price: '₹120',
    },
    {
      id: 3,
      name: 'Kaju Putharekulu',
      image: '/kaju.jpg',
      price: '₹150',
    },
    {
      id: 4,
      name: 'Badam Putharekulu',
      image: '/badam.jpg',
      price: '₹130',
    },
    {
      id: 5,
      name: 'Pistha Putharekulu',
      image: '/pistha.jpg',
      price: '₹140',
    },
    {
      id: 6,
      name: 'Mixed Putharekulu',
      image: '/mixed.jpg',
      price: '₹160',
    },
    {
      id: 7,
      name: 'Plain Putharekulu',
      image: '/plain.jpg',
      price: '₹110',
    },
  ];

  const settings = {
    // Slider settings, such as autoplay, arrows, etc.
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay for continuous scrolling
    autoplaySpeed: 2000, // Adjust the speed of scrolling
  };

  return (
    <div className="App">
      <header>
        <h1>Welcome to the delicious Atreyapuram Pootharekulu world</h1>
      </header>
      <main>
        <section className="offers">
          <h2>Current Offers</h2>
          <Slider {...settings}>
            {offers.map(offer => (
              <div key={offer.id}>
                <img src={offer.image} alt={offer.title} />
                <div className="offer-details">
                  <h3>{offer.title}</h3>
                  <p>{offer.description}</p>
                </div>
              </div>
            ))}
          </Slider>
          {/* Add content for 10 lines below the offers */}
          <div className="additional-content">
            <p>Content for 10 lines below the offers goes here...</p>
            {/* Add your content here */}
          </div>
        </section>
        <section className="putharekulu">
          <h2>Putharekulu</h2>
          <div className="putharekulu-container">
            {putharekulu.map(item => (
              <div key={item.id} className="putharekulu-item">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="video-container">
          <h2>How Pootharekulu is Made</h2>
          {/* Use the video element */}
          <div className="video-wrapper">
            <video autoPlay muted loop controls={false} width="400" height="225">
              <source src="/making-of-pootharekulu.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
        <section className="contact">
          <h2>Contact Seller</h2>
          <p>Reach us through WhatsApp to place your order:</p>
          <a
            href="https://wa.me/+919160329323"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/whatsapp-icon.png"
              alt="WhatsApp"
              width="50"
              height="50"
            />
          </a>
        </section>
      </main>
      <footer>
        <p>Copyright &copy; 2024 Pootharekulu Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

