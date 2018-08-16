import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../actions/index";
import Octicon, { Home, Graph } from "@githubprimer/octicons-react";

class LeftBar extends Component {
	componentDidMount() {
		this.props.dispatch(fetchProduct());
	}
	render() {
		const { error, loading, item, groupedBySales } = this.props;

		if (error) {
			return <div>Error! {error.message}</div>;
		}
		if (loading) return <div>Loading...</div>;

		return (
			<div className="ui-wrapper">
				<div className="sidebar-group border-bottom p-3 d-flex justify-content-center flex-column">
					<img src={item.image} alt="" />
					<div className="text-center product-description">
						<h5>{item.title}</h5>
						<p>{item.subtitle}</p>
					</div>
				</div>
				<div className="sidebar-group border-bottom p-3 d-flex justify-content-between flex-wrap">
					{item.tags.map((tag, i) => (
						<span className="badge badge-primary" key={"badge" + i}>
							{tag}
						</span>
					))}
				</div>
				<div className="sidebar-group p-3">
					<a href="#">
						<Octicon icon={Home} />
						OVERVIEW
					</a>
					<a href="#">
						<Octicon icon={Graph} />
						SALES
					</a>
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	item: state.item,
	loading: state.loading,
	error: state.error
});

export default connect(mapStateToProps)(LeftBar);
