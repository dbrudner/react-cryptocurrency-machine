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
				console.log(this.state.currencies[0].name)
			})
	}

	render() {

		if (this.state.currencies) {
			return (
			<div className="list">
				<ul className="list-group">
				<Currency name={this.state.currencies[0].name}/>
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