import React from 'react'
import '../kirish/kirish.css'
import myPhoto from '../../assets/myPhoto.jpg'

import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Kirish = () => {
  return (
    <section className='home'>
      <div className="home_content">
                <h3>Men</h3>
                <h1>Nuriddin Ubaydullayev</h1>
                <h3><span>Va men Frontendchi</span></h3>
                <p>Men 1995-yil 19-yanvar kuni, Samarqand viloyati, Tayloq tumanida to'g'ilganman.
                    Ma'lumotim: Oliy.
                    Xozirda vaqtincha ishsizman. Frontend dasturlash sohasida o'z ustimda ishlayapman.
                </p>
                <div className="social_media">
                    <Link className="social_a" href="#"> {<FaTelegram />}</Link> 
                    <Link className="social_a" href="#"> {<FaWhatsapp />}</Link>
                    <Link className="social_a" href="#"> {<FaInstagram/>}</Link>
                </div>
                <Link href="#" className="btn">Rezumini yuklab olish</Link>
            </div>
            <div className="home_img">
              <img className='homeImg' src={myPhoto} alt=''/>
            </div>
     </section>
  )
}

export default Kirish
