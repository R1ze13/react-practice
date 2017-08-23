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
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/contact'>Contact</Link></li>
						<li><Link to='/tic-tac-toe'>Tic Tac Toe</Link></li>
					</ul>
				</div>
			</nav>
		);
	}

}
