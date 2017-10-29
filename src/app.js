import React, { PropTypes } from 'react';
import { Header } from './components/index';
import { Modal } from './components/modal/index';
import { DevTools } from './utils/index';

export default class App extends React.Component {

	static path = '/';

	static propTypes = {
		children: PropTypes.any.isRequired
	};

	render() {
		return (
			<div>
				<Modal />
				<Header />
				<div className="container-fluid">
					{ this.props.children }
				</div>
				{ process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
			</div>
		);
	}

}
