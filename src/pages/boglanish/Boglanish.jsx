import React from 'react'
import '../boglanish/boglanish.css'

const Boglanish = () => {
  return (
    <section class="contact" id="contact">
            <h3 class="heading">Menga <span>Bog'lanish</span></h3>

            <form>
              <div class="input_box">
                  <input type="text" placeholder='Toliq Ism'/>
                  <input type="email" placeholder="Pochta Manzil"/>
                </div>
                <div class="input_box">
                  <input type="number" placeholder='Uyali Aloqa Raqami'/>
                  <input type="text" placeholder='Elektron pochta'/>
                </div>
                <textarea cols="30" rows="10" placeholder="Xabaringiz"></textarea>
                <input type="submit" value="Xabar yuborish" class="btn"></input>
            </form>
        </section>
  )
}

export default Boglanish
