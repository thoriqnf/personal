import React, { Component } from 'react';


class Headers extends Component {
  render() {
    return (
      <div className="App">
        <header id="home">
          <nav id="nav-wrap">

            <a class="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
     	      <a class="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

            <ul id="nav" class="nav">
             <li class="current"><a class="smoothscroll" href="#home">Home</a></li>
             <li><a class="smoothscroll" href="#about">About</a></li>
 	           <li><a class="smoothscroll" href="#resume">Resume</a></li>
             <li><a class="smoothscroll" href="#portfolio">Works</a></li>
             <li><a class="smoothscroll" href="#testimonials">Testimonials</a></li>
             <li><a class="smoothscroll" href="#contact">Contact</a></li>
            </ul>

          </nav>

           <div class="row banner">
              <div class="banner-text">
                 <h1 class="responsive-headline">I'm Thoriq Nur Faizal.</h1>
                 <h3>I'm a Jakarta based <span>Full stack Developer</span>, creating awesome and
                 effective visual identities for companies of all sizes around the globe. Let's <a class="smoothscroll" href="#about">start scrolling </a>
                 and learn more <a class="smoothscroll" href="#about">about me</a>.</h3>
                 <hr />
                 <ul class="social">
                    <li><a href="https://www.facebook.com/thoriqnf"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/thoriqnf"><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="https://www.instagram.com/thoriqnf"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="https://dribbble.com/thoriqnf"><i class="fa fa-dribbble"></i></a></li>
                    <li><a href="https://www.github.com/thoriqnf"><i class="fa fa-github"></i></a></li>
                 </ul>
              </div>
           </div>

           <p class="scrolldown">
              <a class="smoothscroll" href="#about"><i class="icon-down-circle"></i></a>
           </p>

        </header>

     </div>
    );
  }
}

export default Headers;
