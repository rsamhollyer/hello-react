import React from "react";
import PhotoCard from "./PhotoCard";

const data = [
	{
		url: "/image 1.jpg",
		title: "This is a title",
		description: "This is a description",
	},
	{
		url: "/image 2.jpg",
		title: "This is a title",
		description: "This is a description",
	},
	{
		url: "/image 3.jpg",
		title: "This is a title",
		description: "This is a description",
	},
	{
		url: "/image 4.jpg",
		title: "This is a title",
		description: "This is a description",
	},
	{
		url: "/image 5.jpg",
		title: "This is a title",
		description: "This is a description",
	},
];

function PhotoGallery() {
	return (
		<div className="photo-gallery">
			{data.map((item) => (
				<PhotoCard
					url={item.url}
					title={item.title}
					description={item.description}
				/>
			))}
		</div>
	);
}

export default PhotoGallery;
