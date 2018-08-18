'use strict';
(function() {
	// global variables



	// called once on page load
	var init = function() {

	};

	// called automatically on article page resize
	window.onResize = function(width) {

	};

	// called when the graphic enters the viewport
	window.enterView = function() {

	};


	// graphic code

//Brigham and Women's
var chart = d3waffle()
						.height(78)
						.icon("");

var chart2 = d3waffle()
							.height(85)
							.icon("");

	var data = [
	  { "name": "White", "value": 11},
	  { "name": "Black", "value": 0},
	  { "name": "Asian", "value": 1},
		{"name": "Latinx", "value": 1}
	];

	d3.select("#waffle-chart-bwh-men")
	  .datum(data)
		.call(chart);


		var data2 = [
			{ "name": "White", "value": 2},
		  { "name": "Black", "value": 0},
		  { "name": "Asian", "value": 0},
			{"name": "Latinx", "value": 0}
		];


		d3.select("#waffle-chart-bwh-women")
		  .datum(data2)
			.call(chart2);


		var data3 = [
			{ "name": "White", "value": 15},
			{ "name": "Black", "value": 0},
			{ "name": "Asian", "value": 0},
			{"name": "Latinx", "value": 0}
		];

		d3.select("#waffle-chart-mgh-men")
			.datum(data3)
			.call(chart);


			var data4 = [
				{ "name": "White", "value": 5},
				{ "name": "Black", "value": 0},
				{ "name": "Asian", "value": 0},
				{"name": "Latinx", "value": 0}
			];

			d3.select("#waffle-chart-mgh-women")
				.datum(data4)
				.call(chart2);


			var data5 = [
				{ "name": "White", "value": 12},
				{ "name": "Black", "value": 1},
				{ "name": "Asian", "value": 0},
				{"name": "Latinx", "value": 1}
			];

			d3.select("#waffle-chart-bmc-men")
				.datum(data5)
				.call(chart);


				var data6 = [
					{ "name": "White", "value": 2},
					{ "name": "Black", "value": 0},
					{ "name": "Asian", "value": 2},
					{"name": "Latinx", "value": 0}
				];

				d3.select("#waffle-chart-bmc-women")
					.datum(data6)
					.call(chart2);



					var data7 = [
						{ "name": "White", "value": 13},
						{ "name": "Black", "value": 1},
						{ "name": "Asian", "value": 0},
						{"name": "Latinx", "value": 1}
					];

					d3.select("#waffle-chart-tufts-men")
						.datum(data7)
						.call(chart);


						var data8 = [
							{ "name": "White", "value": 4},
							{ "name": "Black", "value": 0},
							{ "name": "Asian", "value": 1},
							{"name": "Latinx", "value": 0}
						];

						d3.select("#waffle-chart-tufts-women")
							.datum(data8)
							.call(chart2);


							var data9 = [
								{ "name": "White", "value": 9},
								{ "name": "Black", "value": 1},
								{ "name": "Asian", "value": 0},
								{"name": "Latinx", "value": 0}
							];

							d3.select("#waffle-chart-bi-men")
								.datum(data9)
								.call(chart);


								var data10 = [
									{ "name": "White", "value": 3},
									{ "name": "Black", "value": 0},
									{ "name": "Asian", "value": 0},
									{"name": "Latinx", "value": 0}
								];

								d3.select("#waffle-chart-bi-women")
									.datum(data10)
									.call(chart2);

									var data11 = [
										{ "name": "White", "value": 14},
										{ "name": "Black", "value": 0},
										{ "name": "Asian", "value": 0},
										{"name": "Latinx", "value": 1}
									];

									d3.select("#waffle-chart-bch-men")
										.datum(data11)
										.call(chart);


										var data12 = [
											{ "name": "White", "value": 1},
											{ "name": "Black", "value": 0},
											{ "name": "Asian", "value": 1},
											{"name": "Latinx", "value": 0}
										];

										d3.select("#waffle-chart-bch-women")
											.datum(data12)
											.call(chart2);




	// run code
	init();
})();
