import React from 'react';
import { Link } from 'react-router-dom';
import footerImage from '../../../assets/images/footer.png'

const Footer = () => {
  return (
    <footer style={{ background: `url(${footerImage})`
  ,backgroundSize:'cover' }} className=" p-10    
   ">

      <footer
        className="footer p-10 ">


        <div>
          <span className="footer-title">SERVICES</span>
          <Link to='/' className="link link-hover">Emergency Checkup</Link>
          <Link to='/' className="link link-hover">Monthly Checkup</Link>
          <Link to='/' className="link link-hover">Weekly Monthly Checkup</Link>
          <Link to='/' className="link link-hover">Deeply Checkup</Link>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <Link to='/' className="link link-hover">Fluoride</Link>
          <Link to='/' className="link link-hover">Cavity Filling</Link>
          <Link to='/' className="link link-hover">Teath Whitening</Link>

        </div>

        <div>
          <span className="footer-title">OUR ADRESS</span>
          <h3>New York 1001010 Hudson</h3>

        </div>
      </footer>





      <div className='text-center  mt-16'>
        <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;