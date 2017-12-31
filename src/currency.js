import React from 'react'

const Currency = (props) => {

		return (
			<li className="list-group-item">
				<div className="row">
					<div className="col-sm-6">
						<div className="currencyName">{props.name}</div>
						<hr/>
						<div className="currencyPrice">Price in USD: ${props.price}0</div>
					</div>
					<div className="col-sm-6 prices">
						<div className="panel panel-default">
							<div className="panel-heading">
							Recent Price Changes
							</div>
							<div className="panel-body">
								<div className="currencyPriceChange">% Change 1 hour: {props.onehour}%</div>
								<div className="currencyPriceChange">% Change 24 hour: {props.oneday}%</div>
								<div className="currencyPriceChange">% Change 7 days: {props.oneweek}%</div>
							</div>
						</div>
					</div>
				</div>
			</li>
		)
}

export default Currency