import React from 'react'

const Currency = (props) => {
		return (
			<li className="list-group-item">
				<div className="row">
					<div className="col-sm-6">
						<div className="currencySymbol">{props.symbol}</div>
						<div className="currencyName">{props.name}</div>
						<hr/>
						<div className="currencyPrice"><strong>Price:</strong> ${props.price}0</div>
						<div className="currencyRank"><strong>Rank:</strong> {props.rank}</div>
					</div>
					<div className="col-sm-6 prices">
						<div className="panel panel-default">
							<div className="panel-heading">
								<div className="head">Recent Price Changes</div>
							</div>
							<div className="panel-body">
								<table className="table table-bordered">
									<thead>
										<tr>
											<th>One hour</th>
											<th>24 Hours</th>
											<th>One Week</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{props.onehour}%</td>
											<td>{props.oneday}%</td>
											<td>{props.oneweek}%</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</li>
		)
}

export default Currency