import React, { useState } from "react";

function PhotoCard(props) {
	const [count, setCount] = useState(0);

	return (
		<div className="photo-card">
			<button
				onClick={(e) => {
					setCount(count + 1);
				}}
				className="like-button"
			>
				Like
			</button>

			<button
				onClick={(e) => {
					setCount(count > 0 ? count - 1 : 0);
				}}
				className="unlike-button"
			>
				UnLike
			</button>

			<p>Likes : {count}</p>
			<img className="image" src={props.url} alt={props.description} />
			<div className="card-body">
				<footer className="card-footer"></footer>
				<h5 className="photo-title">{props.title} </h5>
				<p className="card-text">{props.description}</p>
			</div>
		</div>
	);
}

export default PhotoCard;
