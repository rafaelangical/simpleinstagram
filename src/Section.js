import React, { Component } from "react";
import "./Section.css";
import PropTypes from "prop-types";
import logo from './logo.jpg';

class Section extends Component {
	  
		state = {
      isModalOpened: false,
      position: 0,
		}

		estateModal = (index) => {
      document.documentElement.style.overflow = 'hidden';
      document.body.scroll = 'no';
      this.setState({position: index});
      this.setState({
      	isOpen: !this.state.isOpen
    	});
  	};

	render() {

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
		];

		const setImage = images.map ((src,index) => {
			return <img key={index} className="section-images" alt="" src={src} onClick={() => this.estateModal(index) }/>
    });

		return (
			<div className="images-wrapper">
					{setImage} 
          <Modal 
            show={this.state.isOpen} 
            onClose={this.estateModal}
          />
				<button className="about">Carregar Mais</button>
			</div>
		);
	}
}

class Modal extends Component {
  	
  	state = {
  		position: 0,
  	}
	
	  next = () => {
	    this.setState({position: this.state.position + 1},
	    () => {
	    	console.log("next");
	    	if(this.state.position > 11){
          this.setState({position: 0});
	    		console.log("igual a length of arrays");
	    	}
	    });
	  };

	  prev = () => {
      if(this.state.position > 0){
        this.setState({position: this.state.position - 1},  	
          () => {
          
            console.log("prev");	
          
          });
      }
	  };
  
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
    ];

    console.log(images.length);

    const mapImages = images.map((src,index) => {
      return <img key={index} className="image-modal-principal" alt="" src={src} /> 
    });

    const filterImage = mapImages.filter((src,index) =>  index === this.state.position );  

    const setImageWindow = filterImage.filter((src,index) => {
      return <img key={index} alt="" src={src} className="image-modal-principal"/>
    });


    console.log(this.next);
    console.log(this.filterImage)
    console.log(this.prev);
    console.log(this.state.position);

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


export default Section;
