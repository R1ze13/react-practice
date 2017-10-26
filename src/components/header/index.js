import React from 'react';
import { Link } from 'react-router';
import './styles.less';

export default class Header extends React.Component {

	static path = '/';

	render() {
		return (
			<nav className='navbar navbar-inverse'>
				<div className='container-fluid'>
					<div className='navbar-header'>
						<a className='navbar-brand' href='#'>r1ze13</a>
					</div>
					<ul className='nav navbar-nav'>
						<li><Link to='/'>todos</Link></li>
						<li><Link to='/contact'>contacts</Link></li>
						<li><Link to='/list'>list</Link></li>
						<li><Link to='/tic-tac-toe'>tic tac toe</Link></li>
						<li><Link to='/locations'>favorite locations</Link></li>
					</ul>
				</div>
			</nav>
		);
	}

}
