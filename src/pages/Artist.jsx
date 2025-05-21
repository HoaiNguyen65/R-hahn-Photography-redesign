import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Artist.css";
// Import required images
import biographyRight from "../assets/images/biography_right.png";
import careerImage1 from "../assets/images/career_1.png";
import careerImage2 from "../assets/images/career_2.png";
import careerImage3 from "../assets/images/career_3.png";
import fineArt1 from "../assets/images/fineart1.png";
import fineArt2 from "../assets/images/fineart2.png";
import fineArt3 from "../assets/images/fineart3.png";
import logo from "../assets/images/artist_logo.png";
import earlifeLeft from "../assets/images/page3biography_1.png";
import earlifeRight from "../assets/images/page3biography_2.png";

const Artist = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('hidden');
            entry.target.classList.add(entry.target.dataset.animation);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    // Select all elements to animate
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      el.classList.add('hidden');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="artist-page container">
      <div className="artist-section biography">
        <div>
          <a className="artist-logo animate-on-scroll" data-animation="fade-in-up" href="/">
            <img src={logo} alt="artist logo" />
          </a>
        </div>
        <div className="artist-quote-section">
          <div className="artist-quote-container animate-on-scroll" data-animation="fade-in-left">
            <h2 className="artist-title">BIOGRAPHY</h2>
            <h3 className="artist-subtitle">THE ARTIST - ART PERIODS</h3>
            <blockquote className="artist-blockquote">
              <i className="bx bxs-quote-alt-left"></i>
              <p>
                I'm inspired by humanity in all its forms. Photography is an
                excuse to get closer to people and to hear their stories. That's
                how I got started as a photographer, simply meeting people and
                taking the time to talk to them.
              </p>
              <i className="bx bxs-quote-alt-right"></i>
            </blockquote>
          </div>
          <div className="artist-portrait-image animate-on-scroll" data-animation="fade-in-right">
            <img src={biographyRight} alt="Réhahn portrait" />
          </div>
        </div>
      </div>

      <div className="artist-section early-life">
        <h2 className="artist-title animate-on-scroll" data-animation="fade-in-up">EARLY LIFE AND CAREERER</h2>
        <div className="early-life-content animate-on-scroll" data-animation="fade-in-up">
          <p>
            Réhahn was born in Bayeux in Normandy, France. An avid traveler, he
            voyaged to more than 35 countries before he decided to settle in the
            coastal town of Hoi An, Vietnam and his culture first inspired him
            when he visited for the first time while on a humanitarian mission
            with the French NGO Les Enfants du Vietnam.
          </p>
          <p>
            Referred to as someone who "captures the souls of his models"
            (Wanderlust Travel Magazine, 2018), the French photographer is more
            than just a man behind a camera.
          </p>
          <p>
            Behind each photograph is a story. Each image is the culmination of
            an experience. The stories of the subjects as well as his passion
            for learning more about their culture, diversity and changing
            traditions are what drives the artist's work.
          </p>
        </div>
        <div className="artist-images-row">
          <img
            src={earlifeLeft}
            alt="Réhahn working"
            className="artist-early-life-img animate-on-scroll"
            data-animation="fade-in-left"
          />
          <div className="artist-quote-container-right animate-on-scroll" data-animation="scale-in">
            <blockquote className="artist-blockquote">
              <p>
                "A good connection (and photographs) must be earned. That's why
                I always put my camera away and give my full attention to the
                person I'm meeting and wait until he/she feels comfortable."
              </p>
            </blockquote>
          </div>
          <img
            src={earlifeRight}
            alt="Réhahn with children"
            className="artist-early-life-img animate-on-scroll"
            data-animation="fade-in-right"
          />
        </div>
      </div>

      <div className="artist-section career-start">
        <h2 className="artist-title">THE START OF RÉHAHN'S CAREER</h2>
        <div className="artist-career-content">
          <p>
            In 2011, the artist met the woman who would change the course of his
            life and career - Bui Thi Xong. The 72-year-old boat rowing woman
            had given him a smile like lighting up the river in Hoi An, Vietnam.
            Her portrait that he entitled "Hidden Smile" would go on to become
            one of his most significant photographs in Réhahn's career. It was
            published worldwide and eventually became one of the most iconic
            modern images of Vietnam. More importantly for the photographer, it
            also started a beautiful friendship with Xong that would span across
            the years.
          </p>
          <p>
            In 2015, the Asian House Museum in Houston, Cuba, chose "Hidden
            Smile" for its permanent collection. One year later, the Havan
            Women's Museum added it to the permanent collection for
            International Women's Day. Vietnam's President at the time, Nguyen
            Thi Minh, the current President of Vietnam, gave an edition of
            "Hidden Smile" to French President François Hollande. The
            photographer's fame grew. During this same year, his first museum in
            Vietnam opened its doors in Hoi An Historical Town, "Precious
            Heritage Museum". In 2016, the "Hidden Smile" photograph set a
            record when it became the most expensive photograph ever sold in
            Asia, after being purchased by a private collector for 15K (sold by
            the NY Weekly article).
          </p>
        </div>
        <div className="artist-quote-images">
          <div className="artist-quote-container-left">
            <blockquote className="artist-blockquote">
              <p>
                "I'm inspired by humanity in all its forms. Photography is an
                excuse to get closer to people and to hear their stories. That's
                how I got started as a photographer, simply meeting people and
                taking the time to talk to them."
              </p>
            </blockquote>
          </div>
          <div className="artist-photos-grid">
            <img src={careerImage1} alt="Hidden Smile photograph" />
            <img src={careerImage2} alt="Ethnic portrait" />
            <img src={careerImage3} alt="Ethnic portrait" />
          </div>
        </div>
      </div>

      <div className="artist-section galleries">
        <h2 className="artist-title">FINE ART GALLERIES IN VIETNAM</h2>
        <div className="artist-fineart-content">
          <p>
            Réhahn's Fine Art Photography collection are exhibited in his three
            galleries located in Hoi An and in Saigon Pass in Ho Chi Minh City.
            At home, the artist studios in Hana befriends his photographic and
            comparative work and his process for collecting books.
          </p>
          <p>
            Follow Réhahn on{" "}
            <a
              className="artist-link"
              href="https://www.instagram.com/rehahnphotographer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{" "}
            and{" "}
            <a
              className="artist-link"
              href="https://www.facebook.com/Rehahn.Photography/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </p>
        </div>
      </div>

      <div className="artist-section read-more">
        <h2
          className="artist-title"
          type="fineart"
          style={{ fontSize: "var(--font-size-md)" }}
        >
          YOU SHOULD ALSO READ
        </h2>
        <div className="artist-article-grid">
          <Link to="/interaction" className="artist-article-card">
            <div className="artist-article-img">
              <img src={fineArt1} alt="The Art of Interaction" />
            </div>
            <p className="artist-article-title">THE ART OF INTERACTION</p>
          </Link>
          <Link to="/heritage" className="artist-article-card">
            <div className="artist-article-img">
              <img src={fineArt2} alt="Precious Heritage Museum" />
            </div>
            <p className="artist-article-title">PRECIOUS HERITAGE MUSEUM</p>
          </Link>
          <Link to="/behind" className="artist-article-card">
            <div className="artist-article-img">
              <img src={fineArt3} alt="Behind The Scenes" />
            </div>
            <p className="artist-article-title">BEHIND THE SCENES</p>
          </Link>
        </div>
      </div>

      <div className="artist-footer animate-on-scroll" data-animation="fade-in-up">
        <div className="artist-footer-section">
          <div className="artist-footer-section-wrapper">
            <h3 className="artist-footer-section-title">ABOUT</h3>
            <ul className="artist-footer-list">
              <li className="artist-footer-item">
                <Link className="artist-footer-link" to="/biography">
                  BIOGRAPHY
                </Link>
              </li>
              <li className="artist-footer-item">
                <Link className="artist-footer-link" to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="artist-footer-section">
          <div className="artist-footer-section-wrapper">
            <h3 className="artist-footer-section-title">WORK</h3>
            <ul className="artist-footer-list">
              <li className="artist-footer-item">
                <Link className="artist-footer-link" to="/photographs">
                  PHOTOGRAPHS
                </Link>
              </li>
              <li className="artist-footer-item">
                <Link className="artist-footer-link" to="/books">
                  BOOKS
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="artist-footer-section">
          <div className="artist-footer-section-wrapper">
            <h3 className="artist-footer-section-title">BUYING ART</h3>
            <ul className="artist-footer-list">
              <li className="artist-footer-item">
                <Link className="artist-footer-link" to="/buy-photographs">
                  BUY PHOTOGRAPHS
                </Link>
              </li>
              <li className="artist-footer-item">
                <Link className="artist-footer-link" to="/worldwide">
                  WORLDWIDE SHIPPING
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="artist-footer-section">
          <div className="artist-footer-section-wrapper">
            <h3 className="artist-footer-section-title">NEWSLETTER</h3>
            <p>GET INFORMED ABOUT THE NEXT EXHIBITION</p>
            <form className="artist-newsletter-form" onSubmit={handleSubmit}>
              <input
                className="artist-newsletter-input"
                type="email"
                placeholder="Email"
                required
              />
              <div className="artist-newsletter-button-wrapper">
                <button className="artist-newsletter-button" type="submit">
                  SUBSCRIBE
                </button>
                <div className="artist-social-icons">
                  <a
                    className="artist-social-link"
                    href="https://www.facebook.com/Rehahn.Photography/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    className="artist-social-link"
                    href="https://www.instagram.com/rehahnphotographer/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="toast-notification">
          <div className="toast-content">
            <i className="fas fa-check-circle"></i>
            <span>Successfully subscribed to newsletter!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artist;
