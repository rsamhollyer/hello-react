import React, { useState } from "react";

function PhotoCard(props) {
	const [count, setCount] = useState(0);

	return (
		<div className="photo-card">
			<img className="image" src={props.url} alt={props.description} />
			<div className="card-body">
				<h5 className="photo-title">{props.title} </h5>
				<p className="card-text">{props.description}</p>
			</div>
			{/*  */}
			{/*  */}
			{/*  */}
			<footer className="card-footer">
				<p className="card-likes">Likes : {count}</p>

				<button
					onClick={(e) => {
						setCount(count + 1);
					}}
					className="like-button"
				>
					Like
				</button>

				{/* Disable the unlike button when the count of likes is equiv to 0 w/ Cond. Rend.*/}
				{/*  */}
				{/*  */}
				{count > 0 ? (
					<button
						onClick={(e) => {
							setCount(count > 0 ? count - 1 : 0);
						}}
						className="unlike-button"
					>
						UnLike
					</button>
				) : (
					<button className="unlike-button" disabled>
						UnLike
					</button>
				)}
				{/*  */}
				{/*  */}
				{/*  */}
			</footer>
		</div>
	);
}

export default PhotoCard;
