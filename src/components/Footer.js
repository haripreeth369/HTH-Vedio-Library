// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-4">
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} HARIPREETH THOTA. All rights reserved.</p>
        <p>Contact us: haripreeththota@gmail.com</p>
      </Container>
    </footer>
  );
};

export default Footer;
