import React, { Component } from "react";
import logo from './logo.jpg';


class Modal extends Component {
  constructor(props) {
    super()
    this.state = {
      position: 0,
    }
  }

  next = () => {
    this.setState({ position: this.state.position + 1 },
      () => {
        console.log("next");
        if (this.state.position > 11) {
          this.setState({ position: 0 });
          console.log("igual a length of arrays");
        }
      });
  };

  prev = () => {
    if (this.state.position > 0) {
      this.setState({ position: this.state.position - 1 },
        () => {

          console.log("prev");

        });
    }
  };

  setImageByTarget = (e) => {
    console.log(e);
    //this.setState({ position: key.target.value })
    //console.log("Funcionou " + key.target.value)
  }

  render() {

    //Não renderiza se show for false
    if (!this.props.show) {
      return null;
    }

    const modalStyle = {
      minWidth: "100%",
      minHeight: "100%",
      position: "fixed",
      margin: "0 auto",
      padding: 30,
      display: "flex",
    };

    const modalContent = {
      margin: "0 auto",
      position: "absolute",
      position: "fixed",
    };

    const images = [
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
    ];

    const mapImages = images.map((src, index) => {
      return <img key={index} className="image-modal-principal" alt="images-modal" src={src} />
    });

    const filterImage = mapImages.filter((src, index) => index === this.state.position);

    const setImageWindow = filterImage.filter((src, index) => {
      return <img key={index} alt="images-modal" src={src} className="image-modal-principal" onlick={(index) => console.log(index)}/>
    });


    return (
      <div className="modal-back" style={modalStyle} id="novo">
        <div className="modal-content" style={modalContent}>
          <a className="close cursor" onClick={() => this.props.onClose()}>
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
                <img src={logo} className="image-logo-modal" alt="img-modal" />
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
            <a href="#" className="next" onClick={this.next}>
              &#10095;
              </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal