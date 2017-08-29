import React from "react";
import "./Header.css";
import logo from "./logo.jpg";

export default function Header() {
	return (
		<div className="header">
			<div className="row-photo">
				<a href="#" className="logo">
					<img src={logo} className="logo" alt="logo" />
				</a>
			</div>
			<div className="row-profile">
				<div className="row-one">
					<h1 className="name-profile">fael.s.n</h1>
					<button className="edit-profile">Editar Perfil</button>
				</div>
				<div className="row-two">
					<p>
						<span>108</span> publicações
					</p>
					<p>
						<span>1.181</span> seguidores
					</p>
					<p>
						seguindo <span>1.668</span>
					</p>
				</div>
				<div className="row-there">
					<p>
						<span>Rafael Souza</span> - Developer web ; - Apaixonadoo pela
						viiida - Touro
					</p>
					<div className="site">
						<a href="https://rafaelsouzza.github.io" target="_blank">
							rafaelsouzza.github.io
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
