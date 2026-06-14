import React from 'react'
import '../kirish/kirish.css'
import myPhoto from '../../assets/myPhoto.jpg'

import { FaGithub, FaTelegram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const Kirish = () => {
  return (
    <section className='home'>
      <div className="home_content">
                <h3>Men</h3>
                <h1>Nuriddin Ubaydullayev</h1>
                <h3><span>Va men Frontendchi</span></h3>
                <p>Men 1995-yil 19-yanvar kuni, Samarqand viloyati, Tayloq tumanida to'g'ilganman. <br />
                    Ma'lumotim: Oliy. <br />
                    Xozirda: Vaqtincha ishsizman. <br />
                    Frontend dasturlash sohasida o'z ustimda ishlayapman.
                </p>
                <div className="social_media">
                    <a
                    href="https://t.me/nurik_199503"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social_a"
                    >
                    <FaTelegram />
                    </a> 
                    <a
                    href="mailto:nurik@example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social_a" 
                    > 
                    {<IoIosMail />}
                    </a>
                    <a
                    href="https://github.com/ubaydullo1995"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social_a"
                    >
                    <FaGithub />
                    </a>
                </div>
                <a 
                href="/rezumi.pdf" 
                download className="btn">
                  Rezumini yuklab olish
                </a>
            </div>
            <div className="home_img">
              <img className='homeImg' src={myPhoto} alt=''/>
            </div>
     </section>
  )
}

export default Kirish
