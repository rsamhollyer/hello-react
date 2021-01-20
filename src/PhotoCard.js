import React from "react";

function PhotoCard(props) {
	console.log(props);
	return (
		<div className="photo-card">
			<img className="image" src={props.url} alt="" />
			<div className="card-body">
				<footer className="card-footer"></footer>
				<h5 className="photo-title">{props.title} </h5>
				<p className="card-text">{props.description}</p>
			</div>
		</div>
	);
}

export default PhotoCard;
