import React, { Component } from 'react';


class About extends Component {
  render() {
    return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src="images/thoriq.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>

               <p>
                  Hi, My name Thoriq Nur Faizal.
                  I'm a Jakarta based Junior Web Developer who learn fast and passionate to explore web programming.
                  <br/>
                  Currently, I focused develop more than 5+  application using JavaScript environment along with HTML, CSS, jQuery, and React for Frontend. Node.js, Express for Backend,  MongoDB, MySQL for Database Mocha/Chai/Jest for testing, Scrum / Kanban for Agile Software Development, also system administration with Linux tooling and Git source control.
                  <br/> <br/>
                  see my CV online http://bit.ly/CVThoriqNurFaizal
               </p>

               <div className="row">
                  <div className="columns contact-details">

                    <h2>Contact Details</h2>

                    <p className="address">
         						   <span>Thoriq Nur Faizal</span><br />
         						   <span>Depok</span><br />
       						     <span>(+62)822-9767-7300</span><br />
                       <span>thoriqnf.com</span>
         					  </p>

                  </div>

                  <div className="columns download">
                     <p>
                        <a href="http://bit.ly/CVThoriqNurFaizal" className="button"><i className="fa fa-download"></i>Download Resume</a>
                     </p>
                  </div>

               </div>

            </div>

         </div>

      </section>
    );
  }
}

export default About;
