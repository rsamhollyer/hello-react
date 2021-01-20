import React from "react";
import PhotoCard from "./PhotoCard";

const data = [
	{ url: "/image 1.jpg" },
	{ url: "/image 2.jpg" },
	{ url: "/image 3.jpg" },
	{ url: "/image 4.jpg" },
	{ url: "/image 5.jpg" },
];

function PhotoGallery() {
	return (
		<div className="photo-gallery">
			{data.map((item) => (
				<PhotoCard url={item.url} />
			))}
		</div>
	);
}

export default PhotoGallery;
