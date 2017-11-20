import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { openModal } from '../../components/modal/index';
import EditModal from './edit-modal';
import { editItem, removeItem } from './actions';

class ListItem extends React.Component {

	static propTypes = {
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		yb: PropTypes.string.isRequired,
		dispatch: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);

		this.edit = this.edit.bind(this);
		this.remove = this.remove.bind(this);
	}

	edit() {
		this.props.dispatch( openModal({
			title: 'edit',
			btnText: 'save',
			content: <EditModal id={ this.props.id } name={ this.props.name } yb={ this.props.yb } onSave={ editItem } />
		}) );
	}

	remove() {
		this.props.dispatch( removeItem(this.props.id) );
	}

	render() {
		return (
			<tr>
				<td>{ this.props.id }</td>
				<td>
					<Link to={ `/list/${this.props.id}` }>
						{ this.props.name }
					</Link>
				</td>
				<td>
					<button type="button" className="btn btn-success" onClick={ this.edit }>
						<i className="glyphicon glyphicon-pencil" />
					</button>
					<button type="button" className="btn btn-danger" onClick={ this.remove }>
						<i className="glyphicon glyphicon-remove" />
					</button>
				</td>
			</tr>
		);
	}

}

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps)(ListItem);
