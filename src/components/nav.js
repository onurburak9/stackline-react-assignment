import React from "react";

const Nav = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">
				<img
					src="https://uploads-ssl.webflow.com/5a8383550aeb2000019fea86/5a87886b0fa8530001f0e462_condensed-s.svg"
					width="30"
					height="30"
					alt=""
				/>
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
		</nav>
	);
};

export default Nav;
