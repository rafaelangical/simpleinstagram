import React, { Component } from "react";
import "./Section.css";
import PropTypes from "prop-types";
import Modal from './Modal'

class Section extends Component {
	  constructor(props){
			super(props)
			this.state = {
				isModalOpened: false,
				position: 0,
			}
		}

		estateModal = (index) => {
			this.setState({position: index.target.value});
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
			return <img key={index} className="section-images" alt="" src={src} onClick={(e) => this.estateModal(this.index) }/>
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

export default Section;
