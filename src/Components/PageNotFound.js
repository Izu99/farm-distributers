import React from "react";
import "../Styles/PageNotFound.css";

const PageNotFound = () => {
	return (
		<div className="notfound">
			<h1>404 Not Found</h1>
			<p>Sorry, the page you requested could not be found.</p>
            <p>Goto <a href='./'> Homepage</a></p>
		</div>
	);
};

export default PageNotFound;
