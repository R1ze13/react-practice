import React, { PropTypes } from 'react';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import { closeModal } from '../../components/modal/index';
import Input from '../../components/ui/input/index';

class AddItemModal extends React.Component {

	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		lastItem: PropTypes.object.isRequired,
		onSave: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);

		this.state = {
			id: this.props.lastItem.id + 1,
			name: '',
			yb: ''
		};

		bindAll(this, ['close', 'save', 'changeName', 'changeLink']);
	}

	close() {
		this.props.dispatch( closeModal() );
	}

	save() {
		const { id, name, yb } = this.state;
		this.props.dispatch( this.props.onSave({ id, name, yb }) );
		this.close();
	}

	changeName(name) {
		this.setState({name});
	}

	changeLink(yb) {
		this.setState({yb});
	}

	render() {
		const nameId = 23;
		const codeId = 25;
		return (
			<div>
				<div className="modal-body">
					<p>
						<b>ID:</b> { this.state.id }
					</p>
					<Input id={ nameId } isLabel={ true } labelText="name" onChange={ this.changeName } value={ this.state.name } />
					<Input id={ codeId } isLabel={ true } labelText="code" onChange={ this.changeLink } value={ this.state.yb } />
				</div>
				<div className="modal-footer">
					<button className="btn btn-default" onClick={ this.close }>close</button>
					<button className="btn btn-success" onClick={ this.save }>save</button>
				</div>
			</div>
		);
	}

}


function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps)(AddItemModal);
