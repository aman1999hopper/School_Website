import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../assets/pngwing.com.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <header className="school-header">
        <img src={logo} alt="School Logo" className="school-logo"  />
        <h1>Springdale Public School</h1>
        <p>
        Welcome to Springdale Public School, where we nurture young minds for a brighter future
        </p>
      </header>

      <nav className="quick-links">
        <a href="/about">About Us</a>
        <a href="/academics">Academics</a>
        <a href="/admissions">Admissions</a>
        <a href="/faculty">Faculty</a>
        <a href="/students">Students</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact Us</a>
      </nav>

      <Carousel className="school-carousel">
        <div className="image1">
          <img
            src="https://images.unsplash.com/photo-1505748641491-f7ee2fd6fb4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGRyZW4lMjBzcG9ydHN8ZW58MHx8MHx8fDA%3D"
            alt="Sports day"
          />
          <p className="legend">
          Annual Sports Day - Celebrating Excellence in Sports!
          </p>
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1713628398440-9d056ad0d468?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3R1ZGVudCUyMGF3YXJkfGVufDB8fDB8fHww"
            alt="Academic Awards "
          />
          <p className="legend">
          Science Exhibition - Showcasing Student Innovations.
          </p>
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1683140893042-af3aa516ae40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NpZW5jZSUyMGZhaXJ8ZW58MHx8MHx8fDA%3D"
            alt="Event 3"
          />
          <p className="legend">
          Cultural Fest - Embracing Diversity and Creativity
          </p>
        </div>
      </Carousel>
      <div class="mwPageArea">
  <div id="wJR9U6NWK0JEQ929" class="mwPageBlock File">
    <a href="/Academic-Charter">
      <div class="grid">
        <figure class="effect-bubba">
          <img
            src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsdXIlMjBlZHVjYXRpb24lMjBwaWNzfGVufDB8fDB8fHww"
            alt="Instruction"
            title="Instruction"
          />
          <figcaption>
            <h2>Instruction</h2>
            <p>
              We believe that a rigorous academic program combined with a
              supportive social-emotional curriculum leads to scholar success.
              BCSC's academic program reflects the practices that are associated
              with high-performing urban schools.
            </p>
          </figcaption>
        </figure>
      </div>
    </a>
  </div>
  
  <div id="wJR9U6NWK0JEQ930" class="mwPageBlock File">
    <a href="/Curriculum-Details">
      <div class="grid">
        <figure class="effect-bubba">
          <img
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsdXIlMjBlZHVjYXRpb24lMjBwaWNzfGVufDB8fDB8fHww"
            alt="Curriculum"
            title="Curriculum"
          />
          <figcaption>
            <h2>Curriculum</h2>
            <p>
              Our curriculum is designed to provide a holistic education that 
              meets the needs of all students, preparing them for future success 
              in various fields.
            </p>
          </figcaption>
        </figure>
      </div>
    </a>
  </div>
  
  <div id="wJR9U6NWK0JEQ931" class="mwPageBlock File">
    <a href="/Teaching-Methods">
      <div class="grid">
        <figure class="effect-bubba">
          <img
            src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ciUyMGVkdWNhdGlvbiUyMHBpY3N8ZW58MHx8MHx8fDA%3D"
            alt="Teaching Methods"
            title="Teaching Methods"
          />
          <figcaption>
            <h2>Teaching Methods</h2>
            <p>
              Discover our innovative teaching methods that engage students 
              through interactive and practical learning experiences.
            </p>
          </figcaption>
        </figure>
      </div>
    </a>
  </div>
  
  <div class="Clear"></div>
</div>

    </div>
  );
};

export default Home;
