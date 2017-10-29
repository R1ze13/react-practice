import React, { PropTypes } from 'react';
import { bindAll } from 'lodash';
import { store } from '../../index';

export default class ItemDetails extends React.Component {

	static propTypes = {
		routeParams: PropTypes.any.isRequired
	};

	constructor(props) {
		super(props);

		bindAll(this, ['getCurrentItemFromStore']);

		const item = this.getCurrentItemFromStore();

		this.state = {
			id: item.id,
			name: item.name,
			yb: item.yb
		};
	}

	getCurrentItemFromStore() {
		const actualStore = store.getState();
		const { items } = actualStore.list;
		const idx = items.findIndex(item => item.id === parseInt(this.props.routeParams.id));

		return {
			id: items[idx].id,
			name: items[idx].name,
			yb: items[idx].yb
		};
	}

	render() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="item-panel panel panel-primary">
						<div className="panel panel-heading">
							<b>{ this.state.id }</b> { this.state.name }
						</div>
						<div className="panel panel-body">
							<iframe
								width="100%"
								height="684"
								src={ `https://www.youtube.com/embed/${this.state.yb}` }
								frameBorder="0"
								allowFullScreen
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
