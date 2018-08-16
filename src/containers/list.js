import React, { Component } from "react";
import { connect } from "react-redux";

class List extends Component {
	render() {
		const { error, loading, item } = this.props;
		console.log("Error : ", error);
		console.log("Loading : ", loading);
		console.log("Item : ", item);

		if (error) {
			return <div>Error! {error.message}</div>;
		}
		if (loading) return <div>Loading...</div>;

		return (
			<div className="ui-wrapper p-2 table-cont">
				<table className="table">
					<thead>
						<tr>
							<th scope="col">Week Ending</th>
							<th scope="col">Retail Sales</th>
							<th scope="col">Wholesale Sales</th>
							<th scope="col">Units Sold</th>
							<th scope="col">Retailer Margin</th>
						</tr>
					</thead>
					<tbody>
						{item.sales.map((sale, i) => (
							<tr key={"sale-" + i}>
								<th scope="row">{sale.weekEnding}</th>
								<td>${sale.retailSales}</td>
								<td>${sale.wholesaleSales}</td>
								<td>{sale.unitsSold}</td>
								<td>${sale.retailerMargin}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	item: state.item,
	loading: state.loading,
	error: state.error
});

export default connect(mapStateToProps)(List);
