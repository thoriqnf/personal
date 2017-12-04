import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">

           <div className="twelve columns">

              <ul className="social-links">
                <li><a href="https://www.facebook.com/thoriqnf"><i classNameName="fa fa-facebook"></i></a></li>
                <li><a href="https://www.linkedin.com/in/thoriqnf"><i classNameName="fa fa-linkedin"></i></a></li>
                <li><a href="https://www.instagram.com/thoriqnf"><i classNameName="fa fa-instagram"></i></a></li>
                <li><a href="https://dribbble.com/thoriqnf"><i classNameName="fa fa-dribbble"></i></a></li>
                <li><a href="https://www.github.com/thoriqnf"><i classNameName="fa fa-github"></i></a></li>
              </ul>

              <ul className="copyright">
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

           <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>

        </div>

      </footer>
    );
  }
}

export default Footer;
