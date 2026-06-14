import React, { useState } from 'react'
import '../uzimHaqimda/uzimHaqimda.css'
import myPhoto from '../../assets/myPhoto.jpg'
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'

const UzimHaqimda = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
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
              <Link 
              className="btn"
              onClick={() => setOpenModal(true)}
              >Ko'proq o'qish</Link>
        </div>
    </section>

    {openModal && (
      <div className='openModal'>
        <div className="open">
          <p>Men IT soxasini 4-yildan buyon o'rganib kelmoqdaman. Asosan Frontend dasturlash bilan shug'ullanaman.
              HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js kabi texnologiyalarni bilaman.
              Hozirda o'z ustimda ishlayapman va yangi texnologiyalarni o'rganishga harakat qilaman.
              Dasturlash sohasida o'z bilimlarimni oshirishga intilaman va kelajakda yaxshi mutaxassis bo'lishni
              maqsad qilganman.</p>
          <button className='closeModal' onClick={() => setOpenModal(false)}>
          <IoCloseSharp />
        </button>
        </div>
      </div>
    )}
    </>

        )
      }
      

export default UzimHaqimda
