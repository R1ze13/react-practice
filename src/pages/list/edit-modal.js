import React, { PropTypes } from 'react';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import { closeModal } from '../../components/modal/index';
import Input from '../../components/ui/input/index';

class EditModal extends React.Component {

	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		id: PropTypes.any.isRequired,
		name: PropTypes.string.isRequired,
		yb: PropTypes.string.isRequired,
		onSave: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);

		this.state = {
			id: this.props.id,
			name: this.props.name,
			yb: this.props.yb,
			errors: {
				name: '',
				yb: ''
			}
		};

		bindAll(this, ['close', 'changeName', 'changeLink', 'save']);
	}

	close() {
		this.props.dispatch( closeModal() );
	}

	save() {
		const { id, name, yb } = this.state;
		const errorTitle = 'Поле не должно быть пустым';
		const errors = {
			name: '',
			yb: ''
		};

		if (name === '') {
			errors.name = errorTitle;
		}

		if (yb === '') {
			errors.yb = errorTitle;
		}

		this.setState({ errors });

		if (errors.name || errors.yb) {
			return;
		}

		this.props.dispatch( this.props.onSave({ id, name, yb }) );
		this.close();
	}

	changeName(name) {
		const errors = Object.assign({}, this.state.errors);
		errors.name = '';
		this.setState({name, errors});
	}

	changeLink(yb) {
		const errors = Object.assign({}, this.state.errors);
		errors.yb = '';
		this.setState({yb, errors});
	}

	render() {
		const nameId = `${this.props.id}-name`;
		const codeId = `${this.props.id}-code`;
		return (
			<div>
				<div className="modal-body">
					<p>
						<b>ID:</b> { this.state.id }
					</p>
					<Input id={ nameId } labelText="name" onChange={ this.changeName } value={ this.state.name } error={ this.state.errors.name } />
					<Input id={ codeId } labelText="code" onChange={ this.changeLink } value={ this.state.yb } error={ this.state.errors.yb } />
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

export default connect(mapStateToProps)(EditModal);
