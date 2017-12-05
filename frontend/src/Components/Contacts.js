import React, { Component } from "react";

class Contacts extends Component {
  render() {
    return (
      <section id="contact">
        <div class="row section-head">
          <div class="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div class="ten columns">
            <p class="lead">
              <br/>
              Feel free to contact me or leave your message here
            </p>
          </div>
        </div>

        <div class="row">
          <div class="eight columns">
            <form action="" method="post" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label for="contactName">
                    Name <span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    value=""
                    size="35"
                    id="contactName"
                    name="contactName"
                  />
                </div>

                <div>
                  <label for="contactEmail">
                    Email <span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    value=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                  />
                </div>

                <div>
                  <label for="contactSubject">Subject</label>
                  <input
                    type="text"
                    value=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                  />
                </div>

                <div>
                  <label for="contactMessage">
                    Message <span class="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                  />
                </div>

                <div>
                  <button class="submit">Submit</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> Error boy</div>

            <div id="message-success">
              <i class="fa fa-check" />Your message was sent, thank you!<br />
            </div>
          </div>

          <aside class="four columns footer-widgets">
            <div class="widget widget_contact">
              <h4>Address and Phone</h4>
              <p class="address">
                Thoriq Nur Faizal <br />
                Depok <br />
                thoriqnfaizal@gmail.com <br/>
                <span>(+62) 822-9767-7300</span>
              </p>
            </div>
          </aside>

        </div>
      </section>
    );
  }
}

export default Contacts;
