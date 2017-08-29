import React from "react";
import PropTypes from "prop-types";
import logo from './logo.jpg';

class Modal extends React.Component {
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
      color: "red",
    };

    //const currentImage = [images].map((src,index)  => {
      //return <img key={index} src={src} alt="" className="image-modal-principal"/>
    //})
    const prev = () => {}
    const next = () => {}

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

    const currentImage = images.map((src,index) => {
      return <img key={index} className="image-modal-principal" alt="" src={src} /> 
    })

    const novaImg = currentImage.filter((src,index) => <img src={src.src === 1} key={index.index === 1}/>)

    var ImageNew = currentImage.filter(function (src,index){
      if(index = currentImage.key === 1){
        return <img key={index.key} alt="" src={src.src}/>
      }
    })

    console.log(currentImage)
    console.log(novaImg)
    console.log(ImageNew)


    return (
        <div className="modal-back" style={modalStyle} id="novo">
          <div className="modal-content" style={modalContent}>
            <a className="close cursor" onClick={this.props.onClose}>
              &times;
            </a>
            <div className="columnOne">
              <a href="#" className="prev" onClick={prev}>
                &#10094;
              </a>
            </div>
            <div className="columnTwo">
              {novaImg}
            </div>
            <div className="columnThere">
              <div className="row1-columThere">
                <a href="#">
                  <img src={logo} className="image-logo-modal" alt="img-modal"/>
                  <a href="#">fael.s.n</a>
                  <br />
                  <a href="#">fael.s.n</a>
                </a>
              </div>
              <div className="row2-columnThere" />
              <div className="row3-columnThere" />
              <div className="row4-columnThere" />
            </div>
            <div className="columnFour">
              <a href="#" className="next" onClick={next}>
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
