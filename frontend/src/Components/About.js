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

               <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
               eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
               voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
               voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
               sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
               Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
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
                        <a href="#" className="button"><i className="fa fa-download"></i>Download Resume</a>
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
