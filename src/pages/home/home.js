import React, { PropTypes } from 'react';
import Input from '../../components/ui/input/index';
import Preloader from '../../components/ui/preloader/index.js';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import {
	addTodo,
	likeTodo,
	deleteTodo,
	getTodos
} from './actions';
import { LSManager } from '../../utils/index';
import classnames from 'classnames';
import './styles.less';

class HomePage extends React.Component {

	static path = '/';
	static propTypes = {
		home: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);

		this.state = {
			todoName: ''
		};

		bindAll(this, ['renderTodos', 'inputOnChange', 'addTodo']);

		this.props.dispatch(getTodos());
	}

	inputOnChange(value) {
		this.setState({ todoName: value });
	}

	addTodo() {
		this.props.dispatch( addTodo(this.props.home.todos, this.state.todoName) );
		this.setState({ todoName: '' });
	}

	renderTodos(item, idx) {
		const todoClasses = classnames('b-home-todo', {
			'is-liked': item.liked
		});
		const btnClasses = classnames('btn b-home-btn-glyph', {
			'active': item.liked
		});

		return (
			<li key={ idx }>
				<span className={ todoClasses }>{ item.name }</span>
				<button className='btn b-home-btn-glyph' onClick={ this.deleteTodo.bind(this, item) }><i className='glyphicon glyphicon-remove' /></button>
				<button className={ btnClasses } onClick={ this.likeTodo.bind(this, item) }><i className='glyphicon glyphicon-heart' /></button>
			</li>
		);
	}

	deleteTodo(todo) {
		this.props.dispatch( deleteTodo(todo) );
	}

	likeTodo(todo) {
		this.props.dispatch( likeTodo(todo) );
	}

	render() {
		const { todoName } = this.state;
		const { todos, error, isLoading } = this.props.home;

		LSManager.set('todos', todos);

		return (
			<div className='row-fluid b-home'>
				<div className='col-xs-12'>
					<ul>
						{
							isLoading
								? <Preloader />
								: todos.length !== 0
									? todos.map(this.renderTodos)
									: 'Элементов нет'
						}
					</ul>
					<div className='col-xs-4'>
						<Input
							onChange={ this.inputOnChange }
							value={ todoName }
							error={ error } />
						<button className='btn btn-primary b-home-submit' onClick={ this.addTodo }>Add todo</button>
					</div>
				</div>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		home: state.home
	};
}

export default connect(mapStateToProps)(HomePage);
