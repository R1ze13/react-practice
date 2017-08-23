import React from 'react';
// import classnames from 'classnames';
import './styles.less';


class LocationsApp extends React.Component {
	constructor(props) {
		super(props);

		let favorites = [];
		if (localStorage.favorites) {
			favorites = JSON.parse(localStorage.favorites);
		}

		this.state = {
			favorites: favorites,
			currentAddress: 'Saint-Petersburg, Russia',
			mapCoordinates: {
				lat: 59.94383522,
				lng: 30.30406952
			}
		};
	}

	toggleFavorite(address) {

	}

	addToFavorite(address) {
		const favorites = this.state.favorites.slice();

		favorites.push({
			address: address,
			timestamp: Date.now()
		});

		this.setState({
			favorites: favorites
		});

		localStorage.favorites = JSON.stringify(favorites);
	}

	removeFromFavorites(address) {
		const favorites = this.state.favorites.slice();
		let idx = -1;

		for (let i = 0; i < favorites.length; i++) {
			if (favorites[i].address === address) {
				idx = i;
				break;
			}
		}

		if (idx !== -1) {
			favorites.splice(idx, 1);

			this.setState({
				favorites: favorites
			});

			localStorage.favorites = JSON.stringify(favorites);
		}
	}

	isAddressInFavorites(address) {
		const favorites = this.state.favorites.splice();

		for (let i = 0; i < favorites.length; i++) {
			if (favorites[i].address === address)
				return true;
		}

		return false;
	}

	searchForAddress(address) {

	}

	render() {
		return (
			<div className="loc" />
		);
	}
}


// main class of this page
export default class locationsPage extends React.Component {

	static path = '/locations';

	render() {
		return (
			<div className="locations-wrapper">
				<LocationsApp />
			</div>
		);
	}

}
