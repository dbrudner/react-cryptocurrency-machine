import React from 'react'

const Currency = (props) => {

	if (!props.name) {
		return <div> loading </div>
	}

		return (
			<li className="list-group-item">
				<div className="row">
					<div className="col-sm-6">
						<div className="currencyName">{props.name}</div>
						<hr/>
						<div className="currencyPrice">Price in USD: $50</div>
					</div>
					<div className="col-sm-6 prices">
						<div className="panel panel-default">
							<div className="panel-heading">
							Recent Price Changes
							</div>
							<div className="panel-body">
								<div className="currencyPriceChange">% Change 1 hour: 2.9%</div>
								<div className="currencyPriceChange">% Change 24 hour: 10.23%</div>
								<div className="currencyPriceChange">% Change 7 days: 5.08%</div>
							</div>
						</div>
					</div>
				</div>
			</li>
		)
}

export default Currency