import React, { Component } from "react";
import Nav from "./nav";
import LeftBar from "../containers/leftbar";
import Chart from "../containers/chart";
import List from "../containers/list";

export default class App extends Component {
	render() {
		return (
			<div className="row">
				<Nav />
				<div className="col-md-12 pt-4">
					<div className="row">
						<div className="col-md-3  d-flex flex-column">
							<LeftBar />
						</div>
						<div className="col-md-9 d-flex flex-column content-wrapper">
							<Chart />
							<List />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
