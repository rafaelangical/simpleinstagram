import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from './logo.jpg';

export class Modal extends Component {
  
  state = {
    position: 5
  };

  next = (position) => {
    this.setState({position: position - 1})
  };

  prev = (position) => {
    this.setState({position: position + 1})
  };
  
  render() {

    //Não renderiza se show for false
    if (!this.props.show) {
      return null;
    }

    // The modal "window"
    const modalStyle = {
      minWidth: "50%",
      minHeight: "50%",
      margin: "0 auto",
      padding: 30,
      display: "flex",
      flexFlow: "column wrap"
    };
    const modalContent = {
      margin: "0 auto",
      position: "absolute",
    };


    //tests 
    const images  = [
      'http://lorempixel.com/400/200',
      'http://lorempixel.com/400/300',
      'http://lorempixel.com/400/400',
      'http://lorempixel.com/400/300',
      'http://lorempixel.com/400/400',
      'http://lorempixel.com/400/100',
      'http://lorempixel.com/400/200',
      'http://lorempixel.com/400/400',
      'http://lorempixel.com/400/300',
      'http://lorempixel.com/400/100',
      'http://lorempixel.com/500/200',
      'http://lorempixel.com/300/300'
    ] 


    //make map for array of images
    const mapImages = images.map((src,index) => {
      return <img key={index} className="image-modal-principal" alt="" src={src} /> 
    })

    const filterImage = mapImages.filter((src,index) =>  index === this.props.position );  

    const setImageWindow = filterImage.filter((src,index) => {
      return <img key={index} alt="" src={src} className="image-modal-principal" onClick={this.}/>
    })


    console.log(this.next)
    console.log(this.prev)
    console.log("value:"+" = "+this.position)

    return (
        <div className="modal-back" style={modalStyle} id="novo">
          <div className="modal-content" style={modalContent}>
            <a className="close cursor" onClick={this.props.onClose}>
              &times;
            </a>
            <div className="columnOne">
              <a href="#" className="prev" onClick={this.prev}>
                &#10094;
              </a>
            </div>
            <div className="columnTwo">
              {setImageWindow}
            </div>
            <div className="columnThere">
              <div className="row1-columThere">
                <a href="#">
                  <img src={logo} className="image-logo-modal" alt="img-modal"/>
                </a>
                <a href="#">fael.s.n</a>
              </div>
              <div className="row2-columnThere" />
              <div className="row3-columnThere" />
              <div className="row4-columnThere" />
            </div>
            <div className="columnFour">
              <a href="#" className="next" onClick={this.next}>
                &#10095;
              </a>
            </div>
          </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

export default Modal;
