import React, { useState } from "react";
import {
	Grid,
	GridColumn,
	GridDetailRowProps,
	GridExpandChangeEvent,
} from "@progress/kendo-react-grid";

import products from "./products.json";
import "./App.css";

const DetailChartComponent = (props: GridDetailRowProps) => {
	// Data passed as props to use for Chart/Graph
	console.log(props);
	const data = props.dataItem;

	// Display Graph/Chart here using documentation and expample from Readme
	return <div>Expanded - Units = {data.UnitsInStock}</div>;
};

// Typescript interface (typing)
interface Product {
	ProductID: number;
	ProductName: string;
	SupplierID: number;
	CategoryID: number;
	QuantityPerUnit: string;
	UnitPrice: number;
	UnitsInStock: number;
	UnitsOnOrder: number;
	ReorderLevel: number;
	Discontinued: boolean;
	Category: {
		CategoryID: number;
		CategoryName: string;
		Description: string;
	};
	expanded?: boolean;
}

const App = () => {
	// UseState == react hooks, very imported (think scoped state)
	const [data, setData] = useState<Product[]>(products);

	// callback function for click event to expand table
	const expandChange = (event: GridExpandChangeEvent) => {
		const newData = data.map((item: Product) => {
			if (item.ProductID === event.dataItem.ProductID) {
				item.expanded = !event.dataItem.expanded;
			}

			return item;
		});

		setData(newData);
	};

	// rendered table
	return (
		<div>
			<h1>VRGL Project Example</h1>
			<div>
				<h4>Data Table Example</h4>
				<Grid
					data={data}
					style={{
						height: "400px",
					}}
					detail={DetailChartComponent}
					expandField="expanded"
					onExpandChange={expandChange}
				>
					<GridColumn field="ProductID" title="ID" width="40px" />
					<GridColumn
						field="ProductName"
						title="Name"
						width="250px"
					/>
				</Grid>
			</div>
		</div>
	);
};

export default App;
