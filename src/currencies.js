import React from 'react'
import Currency from './currency'
import axios from 'axios'

class Currencies extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			currencies: ""
		}
	}

	componentDidMount() {
		axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10').then(
			response => {
				this.setState({currencies: response.data});

				// console.log(response.data[0].id);
				console.log(this.state.currencies[0])
			})
	}

	render() {


		if (this.state.currencies) {

			const currencyList = this.state.currencies.map((currency) => {
				return (
					<Currency 
						key={currency.name}
						name={currency.name} 
						rank={currency.rank}
						price={currency.price_usd} 
						onehour={currency.percent_change_1h} 
						oneday={currency.percent_change_24h} 
						oneweek={currency.percent_change_7d}
					/>
				)
				
			})

			return (
			<div className="list">
				<ul className="list-group">
				{currencyList}
				</ul>
			</div>
			)	
		}

		else {
			return null
		}

		
		
	}
}

export default Currencies