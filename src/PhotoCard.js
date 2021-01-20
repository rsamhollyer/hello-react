import React from "react";

function PhotoCard(props) {
	console.log(props);
	return (
		<div className="photo-card">
			<figure className="card-body">
				<img className="image" src={props.url} alt="" />
				{/* <figcaption className="card-text">This is an Image</figcaption> */}
			</figure>
		</div>
	);
}

export default PhotoCard;
