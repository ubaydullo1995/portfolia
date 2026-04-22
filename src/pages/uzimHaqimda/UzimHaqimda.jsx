import React from 'react'
import '../uzimHaqimda/uzimHaqimda.css'

import myPhoto from '../../assets/myPhoto.jpg'
import { Link } from 'react-router-dom'

const UzimHaqimda = () => {
  return (
    <section className="about" id="about">
      <div className="about_img">
        <img className='abouImg' src={myPhoto} alt="" />
        </div>
        <div className="about_content">
          <h2 className="heading">O'zim <span>Haqimda</span></h2>
          <h3>Frontendchi</h3>
          <p>Men IT soxasini 4-yildan buyon o'rganib kelmoqdaman. Asosan Frontend dasturlash bilan shug'ullanaman.
              HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js kabi texnologiyalarni bilaman.
              Hozirda o'z ustimda ishlayapman va yangi texnologiyalarni o'rganishga harakat qilaman.
              Dasturlash sohasida o'z bilimlarimni oshirishga intilaman va kelajakda yaxshi mutaxassis bo'lishni
              maqsad qilganman.</p>
              <Link href="#" className="btn">Ko'proq o'qish</Link>
              </div>
              </section>
        )
      }

export default UzimHaqimda
