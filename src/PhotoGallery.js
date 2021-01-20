import React from "react";
import PhotoCard from "./PhotoCard";

function PhotoGallery() {
	return (
		<div className="photo-gallery">
			<PhotoCard url="/image 1.jpg" />
			<PhotoCard url="/image 2.jpg" />
			<PhotoCard url="/image 3.jpg" />
			<PhotoCard url="/image 4.jpg" />
			<PhotoCard url="/image 5.jpg" />
		</div>
	);
}

export default PhotoGallery;
