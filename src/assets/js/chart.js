	CanvasJS.addColorSet("greenShades",
					[//colorSet Array

					"#4CAF50",
					"#f44336"               
					]);
	CanvasJS.addColorSet("devShades",
					[//colorSet Array

					"#5b82ff",
					"#fabe32"               
					]);
	
	// Device Status Chart
	var devStatusChart = new CanvasJS.Chart("deviceStatus", {
		
		animationEnabled: true,
		colorSet: "greenShades",
		/* title:{
			text: "Device Status",
			fontFamily:"Open Sans",
			fontSize:"20",
			fontWeight:"normal"
		}, */
		legend:{
			cursor: "pointer",
			itemclick: explodePie,
			horizontalAlign: "right",
			verticalAlign: "center"
		},
		data: [{
			type: "pie",
			showInLegend: true,
			toolTipContent: "{name}: <strong>{y}</strong>",
			indexLabel: "{name} - {y}",
			dataPoints: [
				{ y: 423, name: "Online", exploded: true },
				{ y: 164, name: "Offline" }
				
			]
		}]
	});
	
	// Device Types Chart
	var devTypesChart = new CanvasJS.Chart("deviceTypes", {
		
		animationEnabled: true,
		colorSet: "devShades",
		/* title:{
			text: "No. of Device Types",
			fontFamily:"Open Sans",
			fontSize:"20",
			fontWeight:"normal"
		}, */
		legend:{
			cursor: "pointer",
			itemclick: explodePie,
			horizontalAlign: "right",
			verticalAlign: "center"
		},
		data: [{
			type: "pie",
			showInLegend: true,
			toolTipContent: "{name}: <strong>{y}</strong>",
			indexLabel: "{name} - {y}",
			dataPoints: [
				{ y: 387, name: "Smartwatch", exploded: true },
				{ y: 200, name: "Tracker" }
				
			]
		}]
	});
	
	// Device Firmware Chart
	var devFirmwareChart = new CanvasJS.Chart("deviceFirmware", {
		
		animationEnabled: true,
		legend:{
			cursor: "pointer",
			itemclick: explodePie,
			horizontalAlign: "right",
			verticalAlign: "center"
		},
		data: [{
			type: "pie",
			showInLegend: true,
			toolTipContent: "{name}: <strong>{y}</strong>",
			indexLabel: "{name} - {y}",
			dataPoints: [
				{ y: 356, name: "V 1.05" },
				{ y: 78, name: "V 1.04" },
				{ y: 62, name: "V 1.03" },
				{ y: 58, name: "V 1.02" },
				{ y: 33, name: "V 1.01" }
				
			]
		}]
	});
	
	devStatusChart.render();
	devTypesChart.render();
	devFirmwareChart.render();

function explodePie (e) {
	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
	} else {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
	}
	e.devStatusChart.render();
	e.devTypesChart.render();

}