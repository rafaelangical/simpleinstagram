import React, { Component } from "react";
import "./Section.css";
import logo from "./logo.jpg";

class Section extends React.Component {
	render() {
		var openModal = () => {
			let criaModal = document.getElementById("novo");
			criaModal.style.display = "block";
		};
		var closeModal = () => {
			let criaModal = document.getElementById("novo");
			criaModal.style.display = "none";
		};
		const modalStyle = {
			margin: "0 auto",
			top: 0,
			left: 0,
			width: "100vw",
			heigth: "100vh",
			position: "fixed"
		};
		const modalContent = {
			margin: "0 auto",
			position: "absolute",
			color: "red",
			margin: "0 auto"
		};

		//Transicção das Imagens

		// const changeImage = document.body.querySelectorAll("#next");
		// function prev() {
		// 	alert("Next");
		// 	var imageIndex = 0;
		// 	var imageArray = [
		// 		"http://lorempixel.com/300/200",
		// 		"http://lorempixel.com/400/200",
		// 		"http://lorempixel.com/300/300",
		// 		"http://lorempixel.com/400/300",
		// 		"http://lorempixel.com/300/200"
		// 	];

		// 	var mudar = document.getElementById("mudar");
		// 	if (mudar) {
		// 		mudar.setAttribute("src", imageArray[imageIndex]);
		// 		imageIndex++;

		// 		alert("Funcionou !");
		// 	}
		// }

		var prev = () => {
			var imageIndex = 0;
			var imageArray = document.getElementsByClassName("images-modal");

			var mudar = document.getElementById("mudar");

			mudar.setAttribute("src", imageArray[imageIndex]);
			imageIndex--;
		};

		var next = () => {
			var imageIndex = 0;
			var imageArray = document.getElementsByClassName("images-modal");

			var mudar = document.getElementById("mudar");

			mudar.setAttribute("src", imageArray[imageIndex]);
			imageIndex++;
		};

		return (
			<div className="images-wrapper">
				<img
					src="http://lorempixel.com/400/200"
					className="section-images"
					onClick={openModal}
					class="images-modal"
				/>
				<img
					src="http://lorempixel.com/300/200"
					className="section-images"
					onClick={openModal}
					class="images-modal"
				/>
				<img
					src="http://lorempixel.com/400/200"
					className="section-images"
					onClick={openModal}
					class="images-modal"
				/>
				<img
					src="http://lorempixel.com/500/200"
					className="section-images"
					onClick={openModal}
					class="images-modal"
				/>
				<img
					src="http://lorempixel.com/600/200"
					className="section-images"
					onClick={openModal}
					class="images-modal"
				/>
				<img
					src="http://lorempixel.com/700/200"
					className="section-images"
					onClick={openModal}
					class="images-modal"
				/>
				<img
					src="http://lorempixel.com/800/200"
					className="section-images"
					onClick={openModal}
					class="images-modal"
				/>
				<img
					src="http://lorempixel.com/900/200"
					className="section-images"
					onClick={openModal}
					class="images-modal"
				/>
				<img
					src="http://lorempixel.com/200/200"
					className="section-images"
					onClick={openModal}
					class="images-modal"
				/>

				<div className="modal-back" style={modalStyle} id="novo">
					<div className="modal-content" style={modalContent}>
						<span className="close cursor" onClick={closeModal}>
							&times;
						</span>
						<div className="columnOne">
							<a href="#" className="prev" onClick={prev}>
								&#10094;
							</a>
						</div>
						<div className="columnTwo">
							<img src="" className="image-modal-principal" id="mudar" />
						</div>
						<div className="columnThere">
							<div className="row1-columThere">
								<a href="#">
									<img src={logo} className="image-logo-modal" />
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
				<button className="about">Carregar Mais</button>
			</div>
		);
	}
}
export default Section;
