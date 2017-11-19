import React, { PropTypes } from 'react';
import { bindAll } from 'lodash';
import ListItem from './list-item';
import { connect } from 'react-redux';
import './styles.less';

class ListPage extends React.Component {

	static path = '/list';
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		list: PropTypes.object.isRequired
	};

	constructor(props) {
		super(props);

		bindAll(this, ['renderItems']);
	}

	renderItems(item, idx) {
		return (
			<ListItem
				key = { idx }
				id = { item.id }
				name = { item.name }
				yb = { item.yb }
			/>
		);
	}

	render() {
		const { items } = this.props.list;

		return (
			<div className="row">
				<div className="col-xs-8 col-xs-offset-2">
					<h3>list</h3>
					<table className="table table-bordered table-hover">
						<thead>
							<tr>
								<th>id</th>
								<th>name</th>
								<th>action</th>
							</tr>
						</thead>
						<tbody>
							{ items.map(this.renderItems) }
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		list: state.list
	};
}

export default connect(mapStateToProps)(ListPage);
