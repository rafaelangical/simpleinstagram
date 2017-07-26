import React from 'react'
import './Section.css' 
import one from './one.jpg'
import two from './two.jpg'
import there from './there.jpg'
import four from './four.jpg'
import five from './five.jpg'
import six from './six.jpg'
import seven from './seven.jpg'
import octal from './octal.jpg'
import nine from './nine.jpg'
import dec from './dec.jpg'

export default function Section(){

	return(
			<div className="images-wrapper">
				<a href="#"><img src={one} className="section-images"/></a>
				<a href="#"><img src={two} className="section-images"/></a>
				<a href="example-image-link" href={one} data-lightbox="example-set" data-title="Click the right half of the image to move forward."><img className="example-image section-images" src={one} alt="one"/></a>
				<a href="#"><img src={there} className="section-images"/></a>
				<a href="#"><img src={five} className="section-images"/></a>
				<a href="#"><img src={six} className="section-images"/></a>
				<a href="#"><img src={seven} className="section-images"/></a>
				<a href="#"><img src={octal} className="section-images"/></a>
				<a href="#"><img src={nine} className="section-images"/></a>
				<a href="#"><img src={dec} className="section-images"/></a>
				<a href="#"><img src={dec} className="section-images"/></a>
				<a href="#"><img src={dec} className="section-images"/></a>
				<button className="about">Carregar Mais</button>
			</div>
		)

}
