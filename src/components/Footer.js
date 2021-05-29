import React from "react";
import "../assets/css/font.css";

const Header = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				background: "rgb(255,174,66, 0.8)",
				height: "60px",
        bottom: "0",
        width: "100%",
				alignSelf:"flex-end",
			}}
		>
			<p style={{ fontFamily: "'Pattaya', sans-serif" }}>&copy; Sankalp Rai (2021) Made with ❤️</p>
		</div>
	);
};

export default Header;
