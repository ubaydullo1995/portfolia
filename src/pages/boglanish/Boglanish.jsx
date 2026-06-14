import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import '../boglanish/boglanish.css'

const Boglanish = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
  'service_abc123',
  'template_xyz789',
  form.current,
  'O9ivei1s7w9KnHq7T'
)
    .then(() => {
      alert("Xabar yuborildi ✅")
      form.current.reset()
    })
    .catch((error) => {
  console.log("EmailJS error:", error)
  alert(error.text || "Xatolik yuz berdi")
})
  }

  return (
    <section className="contact" id="contact">
      <h3 className="heading">
        Menga <span>Bog'lanish</span>
      </h3>

      <form ref={form} onSubmit={sendEmail}>
        
        <div className="input_box">
          <input type="text" name="user_name" placeholder="To'liq ism" />
          <input type="email" name="user_email" placeholder="Pochta manzil" />
        </div>

        <div className="input_box">
          <input type="number" name="phone" placeholder="Uyali aloqa raqam" />
          <input type="text" name="subject" placeholder="Mavzu" />
        </div>

        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Xabaringiz"
        ></textarea>

        <input
          type="submit"
          value="Xabar yuborish"
          className="btn"
        />

      </form>
    </section>
  )
}

export default Boglanish