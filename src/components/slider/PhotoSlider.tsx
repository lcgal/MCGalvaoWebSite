import React from "react";
import Slider from "@farbenmeer/react-spring-slider";
import PropTypes from 'prop-types'

import componenttyles from "./photoslider.module.css"

const imageStyle = (src: string) => ({
	backgroundSize: "cover",
	backgroundImage: `url(http://192.168.0.3/MCGalvaoCMS/api/slider/image/${src})`,
	width: "100%",
	height: "100%",
});


const PhotoSlider = ({ images }) => {
	return (
		<div className={componenttyles.image}>
			<Slider hasBullets auto={4000}>
				{images.map((image) => (
					<div key={image.Id} draggable="false" style={imageStyle(image.File)} />
				))}
			</Slider>
		</div>
	);
};

PhotoSlider.propTypes = {
    images: PropTypes.shape({
        Id: PropTypes.string.isRequired,
        Name: PropTypes.string.isRequired,
        File: PropTypes.string,
        Url: PropTypes.string,
        Description: PropTypes.string,
    }).isRequired,
}

export default PhotoSlider
