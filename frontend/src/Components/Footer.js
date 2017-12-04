import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
<footer>
            <div class="row">

               <div class="twelve columns">

                  <ul class="social-links">
                     <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                     <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                     <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                     <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                     <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                     <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                     <li><a href="#"><i class="fa fa-skype"></i></a></li>
                  </ul>

                  <ul class="copyright">
                     <li>&copy; Copyright 2017</li>
                     <li>Build using
                       <a title="Git" href="https://git-scm.com//"> Git + </a>
                       <a title="Github" href="http://www.github.com/">Github + </a>
                       <a title="Node.js" href="https://nodejs.org/en/">Node.js + </a>
                       <a title="React.js" href="https://reactjs.org/">React.js + </a>
                       <a title="nginx" href="https://nginx.org/">nginx + </a>
                       <a title="cloudflare" href="https://www.cloudflare.com/">cloudflare </a>
                     </li>
                  </ul>

               </div>

               <div id="go-top"><a class="smoothscroll" title="Back to Top" href="#home"><i class="icon-up-open"></i></a></div>

            </div>

         </footer>
    );
  }
}

export default Footer;
