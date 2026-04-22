import React from 'react'
import '../footer/footer.css'

import { FaAngleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
            <div className="footer_text">
                <p>Copyright &copy; 2025 Nuriddin Ubaydullayev. Barcha huquqlar himoyalangan.
                </p>
            </div>
            <div className="footer_icenTop">
                <a href="#home">
                  <FaAngleUp className='footer_icen'/>
                  </a>
            </div>
        </footer>
  )
}

export default Footer
