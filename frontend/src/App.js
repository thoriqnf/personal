import React, { Component } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';
import Portofolio from './Components/Portofolio';
import Resume from './Components/Resume';
import Testimonial from './Components/Testimonial';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
      <About></About>
      <Resume></Resume>
      {/* <Portofolio></Portofolio>
      <Testimonial></Testimonial>
      <Contacts></Contacts> */}
      <Footer></Footer>
      </div>
    );
  }
}

export default App;
