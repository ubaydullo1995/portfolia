import React from 'react'
import '../xizmatim/xizmatim.css'

import { FaCode } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Xizmatim = () => {
  return (
    <section className="services" id="service">
            <h2 className="heading">Mening <span>Xizmatim</span></h2>

            <div className="services_container">
                <div className="services_box">
                  <FaCode className='services_icen'/>
                    <h3 className='services_h3'>Veb ishlab chiqarish</h3>
                    <p className='services_p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur doloremque repudiandae
                        laboriosam placeat nemo fuga sed perspiciatis, porro quasi culpa dignissimos tempora, laudantium
                        delectus, officiis dolor temporibus nihil voluptatibus.</p>
                    <Link href="#" className="btn">Ko'proq o'qish</Link> 
                </div>

                <div className="services_box">
                  <FaPalette className='services_icen'/>
                    <h3 className='services_h3'>UI/UX Dizayni</h3>
                    <p className='services_p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur doloremque repudiandae
                        laboriosam placeat nemo fuga sed perspiciatis, porro quasi culpa dignissimos tempora, laudantium
                        delectus, officiis dolor temporibus nihil voluptatibus.</p>
                     <Link href="#" className="btn">Ko'proq o'qish</Link>
                </div>

                <div className="services_box">
                  <FaAndroid className='services_icen'/>
                    <h3 className='services_h3'>Ilovalarni ishlab chiqarish</h3>
                    <p className='services_p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur doloremque repudiandae
                        laboriosam placeat nemo fuga sed perspiciatis, porro quasi culpa dignissimos tempora, laudantium
                        delectus, officiis dolor temporibus nihil voluptatibus.</p>
                     <Link href="#" className="btn">Ko'proq o'qish</Link>
                </div>
            </div>
        </section>
  )
}

export default Xizmatim
