import React from 'react'
import Currency from './currency'
import axios from 'axios'

class Currencies extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			currencies: []
		}
	}

	componentDidMount() {
		axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10').then(
			data => {
				this.setState({currencies: data.data});
			})
	}

	render() {
		return (
			<div className="list">
				<ul className="list-group">
				<Currency />
				<Currency />
				<Currency />
				</ul>
			</div>
		)
		
	}
}

export default Currencies