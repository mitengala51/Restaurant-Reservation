import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>the only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            Experience a world of dining possibilities with our restaurant reservation platform, 
            designed to simplify the way you book tables at your favorite eateries. 
            Easily browse a curated selection of top-rated restaurants, 
            whether you're looking to indulge in fine dining, casual bites, 
            or a unique culinary experience. With our intuitive, user-friendly design, 
            find available slots, check table arrangements, and select the ideal time for your visit. 
            Booking is just the beginning; join a community of food enthusiasts by reading and sharing reviews.
            With easy mobile accessibility, secure confirmations, and real-time updates, 
            organizing memorable dining experiences has never been more convenient.
          </p>

          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="about.png" alt="about" />
        </div>
      </div>
    </section>
  );
}
