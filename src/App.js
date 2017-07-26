import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import './src/css/lightbox.css';
//import './lightbox-plus-jquery.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section />
        <Footer />
      </div>
    );
  }
}
export default App;
