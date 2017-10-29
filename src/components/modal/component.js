import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../components/modal/index';

class Modal extends React.Component {

	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		modal: PropTypes.object.isRequired
	};

	constructor(props) {
		super(props);

		this.close = this.close.bind(this);
	}

	close() {
		this.props.dispatch( closeModal() );
	}

	render() {
		const { isOpen, title, btnText, content } = this.props.modal;

		if (!isOpen)
			return null;

		return (
			<div className="modal fade in show">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">{ title }</h5>
							<button type="button" className="close" onClick={ this.close }>
								<span>&times;</span>
							</button>
						</div>
						<div className="modal-body">
							{ content }
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary">{ btnText }</button>
							<button type="button" className="btn btn-secondary" onClick={ this.close }>Close</button>
						</div>
					</div>
				</div>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {modal: state.modal};
}

export default connect(mapStateToProps)(Modal);