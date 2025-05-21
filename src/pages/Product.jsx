import React, { useRef, useEffect } from 'react';
import './product.css';
import logo from '../assets/images/logonew.png';

const photographs = [
  require('../assets/images/product_p_1.png'),
  require('../assets/images/product_p_2.png'),
  require('../assets/images/product_p_3.png'),
  require('../assets/images/product_p_4.png'),
  require('../assets/images/product_p_5.png'),
];

const books = [
  require('../assets/images/product_b_1.png'),
  require('../assets/images/product_b_2.png'),
  require('../assets/images/product_b_3.png'),
  require('../assets/images/product_b_4.png'),
];

function useDragScroll(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDownHandler = (e) => {
      isDown = true;
      el.classList.add('dragging');
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const mouseLeaveHandler = () => {
      isDown = false;
      el.classList.remove('dragging');
    };
    const mouseUpHandler = () => {
      isDown = false;
      el.classList.remove('dragging');
    };
    const mouseMoveHandler = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.2; // scroll speed
      el.scrollLeft = scrollLeft - walk;
    };
    el.addEventListener('mousedown', mouseDownHandler);
    el.addEventListener('mouseleave', mouseLeaveHandler);
    el.addEventListener('mouseup', mouseUpHandler);
    el.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      el.removeEventListener('mousedown', mouseDownHandler);
      el.removeEventListener('mouseleave', mouseLeaveHandler);
      el.removeEventListener('mouseup', mouseUpHandler);
      el.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, [ref]);
}

const Product = () => {
  const photoGridRef = useRef(null);
  const bookGridRef = useRef(null);
  useDragScroll(photoGridRef);
  useDragScroll(bookGridRef);

  return (
    <div className="product-container container">
      <img src={logo} alt="Logo" className="product-logo" />
      <h1 className="product-title">PRODUCTS</h1>
      <div className="product-section">
        <h4 className="product-section-title">PHOTOGRAPHS</h4>
        <div className="product-grid product-scroll-x" ref={photoGridRef}>
          {photographs.map((src, idx) => (
            <div
              key={idx}
              className="product-image-card"
            >
              <img src={src} alt="Photograph" className="product-image" />
            </div>
          ))}
        </div>
      </div>
      <div className="product-section">
        <h4 className="product-section-title">BOOKS</h4>
        <div className="product-grid product-scroll-x" ref={bookGridRef}>
          {books.map((src, idx) => (
            <div
              key={idx}
              className="product-image-card"
            >
              <img src={src} alt="Book" className="product-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product; 