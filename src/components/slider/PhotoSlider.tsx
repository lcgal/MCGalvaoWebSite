import React from "react";
import Slider from "@farbenmeer/react-spring-slider";
import PropTypes from 'prop-types'

const imageStyle = (src: string) => ({
	backgroundSize: "cover",
	backgroundImage: `url(http://192.168.0.3/MCGalvaoCMS/api/slider/image/${src})`,
	height: "100%",
	width: "100%",
});


const PhotoSlider = ({ images }) => {
	return (
		<div style={{ width: "728px", height: "307px" }}>
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
