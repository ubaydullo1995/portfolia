import React from 'react'
import '../footer/footer.css'

import { FaAngleUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
            <div className="footer_text">
                <p>Copyright &copy; 2025 Nuriddin Ubaydullayev. Barcha huquqlar himoyalangan.
                </p>
            </div>
            <div className="footer_icenTop">
                <Link to="/">
                  <FaAngleUp className='footer_icen'/>
                  </Link>
            </div>
        </footer>
  )
}

export default Footer
