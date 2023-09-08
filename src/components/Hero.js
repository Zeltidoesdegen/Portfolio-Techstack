import React, { useEffect } from 'react';
import Typed from 'typed.js';
import HeroImage from "../images/movingWatcher.gif"
import JavaIcon from "../images/Jscript.png"
import CSSIcon from "../images/cssgod.png"
import HTMLIcon from "../images/1532556.png"
import PythonIcon from "../images/4990671.png"
import BootstrapIcon from "../images/bootstrap-logo-vector.svg"
import ReactJSIcon from "../images/React-icon.svg.png"

const HeroPage = () => {
  useEffect(() => {
    const typed = document.querySelector('.typed');

    if (typed) {
      let typed_strings = typed.getAttribute('data-typed-items');
      typed_strings = typed_strings.split(',');
      
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2500,
        cursorChar: '',
      });
    }
  }, []);

  return ( 
    <>
      <section id="hero" className="d-flex flex-column  align-items-center">
        <h1 class="glitch-main">
          <span class="glitch" data-text="Help!">
            Hello World
          </span>
        </h1>
        <div className="hero-container" data-aos="fade-in">
          <p>I'm <span className="typed" data-typed-items="Matt, Zelti, Ivan"></span></p>
        </div>

        <div className='container d-none d-lg-block'>
          <p className='typed'>Tech Stack</p>
          <div className='row'>
            
            <div class="col-xs-6 col-sm-6 col-md-4 col-lg-2"> 
              <div className='box-type'>
                <img src={HTMLIcon} className='w-100'></img>
              </div>
            </div>

            <div class="col-xs-6 col-sm-6 col-md-4 col-lg-2"> 
              <div className='box-type'>
                <img src={CSSIcon} className='w-100'></img>
              </div>
            </div>

            <div class="col-xs-6 col-sm-6 col-md-4 col-lg-2"> 
              <div className='box-type'>
                <img src={JavaIcon} className='w-100'></img>
              </div>
            </div>

            <div class="col-xs-6 col-sm-6 col-md-4 col-lg-2"> 
              <div className='box-type'>
                <img src={PythonIcon} className='w-100'></img>
              </div>
            </div>

            <div class="col-xs-6 col-sm-6 col-md-4 col-lg-2"> 
              <div className='box-type'>
                <img src={BootstrapIcon} className='w-100'></img>
              </div>
            </div>

            <div class="col-xs-6 col-sm-6 col-md-4 col-lg-2"> 
              <div className='box-type'>
                <img src={ReactJSIcon} className='w-100'></img>
              </div>
            </div>

          </div>
        </div>
        
        <div className='container d-none d-lg-block'>
          
          <div className='row'>
            <p className='typed'>Projects</p>
            <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4"> 
              <div className='box-type'>

              </div>
            </div>

            <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4"> 
              <div className='box-type'>

              </div>
            </div>

            <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4"> 
              <div className='box-type'>

              </div>
            </div>

           

          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPage;
