import React from 'react';
import Map from './Map';
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Location from "./BoxIcons/CurrentLocation"
import GmailLogo from "./BoxIcons/GmailLogo2"
import PhoneLogo from "./BoxIcons/PhoneLogo"

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8mkcubg', 'template_90l97r3', form.current, 'X96X4GlILDQ_9qeO3')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent!');
          }, (error) => {
              console.log(error.text);
          });
    };

    return ( 
        <>
        <section id="contact" class="contact">
            <div class="container">

                <div class="section-title">
                    <h2>Contact</h2>
                    <p>Contact me through the form if you need a website and quotation. I'll get back to you as early as I can. Looking forward to working with you!</p>
                </div>

                <div class="row" data-aos="fade-in">

                <div class="col-lg-5 d-flex align-items-stretch">
                    <div class="info">
                        <div class="address">
                            <Location></Location>
                            <h4>Location:</h4>
                            <p>Jaka Plaza, Parañaque</p>
                        </div>

                        <div class="email">
                            <GmailLogo></GmailLogo>
                            <h4>Email:</h4>
                            <p>zeltidoesdegen@gmail.com</p>
                        </div>

                        <div class="phone">
                            <PhoneLogo></PhoneLogo>
                            <h4>Call:</h4>
                            <p>+639978513936</p>
                        </div>

                        <Map></Map>
                    </div>

                </div>

                <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                    <form ref={form} onSubmit={sendEmail} method="post" role="form" class="php-email-form">
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="name">Your Name</label>
                                <input type="text" name="user_name" class="form-control" id="name" required/>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="name">Your Email</label>
                                <input type="email" class="form-control" name="user_email" id="email" required/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="name">Subject</label>
                            <input type="text" class="form-control" name="subject" id="subject" required/>
                        </div>
                        <div class="form-group">
                            <label for="name">Message</label>
                            <textarea class="form-control" name="message" rows="10" required></textarea>
                        </div>
                        <div class="text-center"><button type="submit" value="Send">Send Message</button></div>
                    </form>
                </div>

                </div>

            </div>
        </section>
        </>
     );
}
 
export default ContactMe;