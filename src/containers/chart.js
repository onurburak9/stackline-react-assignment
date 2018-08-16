import React, { Component } from "react";
import { connect } from "react-redux";
import {
	ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip
} from "recharts";
class Chart extends Component {
	render() {
		const { error, loading, item, data } = this.props;
		console.log("Error : ", error);
		console.log("Loading : ", loading);
		console.log("Item : ", item);
		console.log("Data : ", data);

		if (error) {
			return <div>Error! {error.message}</div>;
		}
		if (loading) return <div>Loading...</div>;
		var height = screen.height * 0.5;
		return (
			<div className="ui-wrapper p-2">
				<ResponsiveContainer height={height}>
					<LineChart
						data={data}
						margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
					>
						<XAxis dataKey="name" tickLine={false} />
						<Tooltip />
						<Line
							type="monotone"
							dataKey="valueFirst"
							stroke="#27aae3"
							dot={false}
							name="First Value"
							unit="$"
						/>
						<Line
							type="monotone"
							dataKey="valueSecond"
							stroke="#82ca9d"
							dot={false}
							name="Second Value"
							unit="$"
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	item: state.item,
	loading: state.loading,
	error: state.error,
	data: state.groupedBySales
});

export default connect(mapStateToProps)(Chart);
