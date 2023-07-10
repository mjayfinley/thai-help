# VRGL Project

# Create React App and Install KendoUI

https://www.telerik.com/kendo-react-ui/components/getting-started/

This document should get you started with the basics, from here you'd want to figure out what components you'd want to put into the app for the requirements

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## File Structure

Everything you need is in the `src` directory. You'll mostly edit the `App.tsx` file - but you can poke around in the others.

# Components to use:

Data Grid (table) - to house the data for Monthly Performance, I'd make each row expandable with the chart in the expansion (for the extra credit): https://www.telerik.com/kendo-react-ui/components/grid/

Charts - obviously to display the data visually: https://www.telerik.com/kendo-react-ui/components/charts/

Each of these components should be pretty self explanatory to copy/paste the source, then plug in the data you need to display

```javascript
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
	Chart,
	ChartTitle,
	ChartSeries,
	ChartSeriesItem,
	ChartCategoryAxis,
	ChartCategoryAxisItem,
} from "@progress/kendo-react-charts";
const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const firstSeries = [123, 276, 310, 212, 240, 156, 98];
const secondSeries = [165, 210, 287, 144, 190, 167, 212];
const thirdSeries = [56, 140, 195, 46, 123, 78, 95];
const ChartContainer = () => {
	return (
		<Chart>
			<ChartTitle text="Units sold" />
			<ChartCategoryAxis>
				<ChartCategoryAxisItem
					categories={categories}
					title={{
						text: "Months",
					}}
				/>
			</ChartCategoryAxis>
			<ChartSeries>
				<ChartSeriesItem type="area" data={firstSeries} />
				<ChartSeriesItem type="area" data={secondSeries} />
				<ChartSeriesItem type="area" data={thirdSeries} />
			</ChartSeries>
		</Chart>
	);
};
ReactDOM.render(<ChartContainer />, document.querySelector("my-app"));
```
