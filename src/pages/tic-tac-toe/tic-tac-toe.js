import React from 'react';
import classnames from 'classnames';
import './styles.less';


class Square extends React.Component {
	static propTypes = {
		isWin: React.PropTypes.bool,
		isLast: React.PropTypes.bool,
		onClick: React.PropTypes.func,
		value: React.PropTypes.string
	};

	render() {
		const squareClasses = classnames('square', {
			'is-win': this.props.isWin,
			'is-last': this.props.isLast && !this.props.isWin
		});

		return (
			<button className={ squareClasses } onClick={ this.props.onClick }>
				{ this.props.value }
			</button>
		);
	}
}

class Board extends React.Component {
	static propTypes = {
		winnerLine: React.PropTypes.array,
		lastSquare: React.PropTypes.number,
		onClick: React.PropTypes.func,
		squares: React.PropTypes.array
	};

	renderSquare(i) {
		const line = this.props.winnerLine;
		const isLast = i === this.props.lastSquare;

		return (
			<Square
				isLast={ isLast }
				isWin={ isInArray(i, line) }
				value={ this.props.squares[i] }
				onClick={ () => this.props.onClick(i) }
			/>
		);
	}

	render() {
		return (
			<div className="game-board">
				{this.renderSquare(0)}
				{this.renderSquare(1)}
				{this.renderSquare(2)}
				{this.renderSquare(3)}
				{this.renderSquare(4)}
				{this.renderSquare(5)}
				{this.renderSquare(6)}
				{this.renderSquare(7)}
				{this.renderSquare(8)}
			</div>
		);
	}
}

class Game extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			history: [
				{
					squares: Array(9).fill(null),
					lastSquare: undefined
				}
			],
			stepNumber: 0,
			xIsNext: true
		};
	}

	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();

		if (calculateWinner(squares).winner || squares[i])
			return;

		squares[i] = this.state.xIsNext === true ? 'X' : 'O';
		this.setState({
			history: history.concat([
				{
					squares: squares,
					lastSquare: i
				}
			]),
			stepNumber: history.length,
			xIsNext: !this.state.xIsNext
		});
	}

	jumpTo(step) {
		this.setState({
			stepNumber: step,
			xIsNext: (step % 2) === 0
		});
	}

	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const resultOfGame = calculateWinner(current.squares);

		const moves = history.map((step, move) => {
			const desc = move ?
				'Move #' + move :
				'Game start';
			return (
				<li key={ move }>
					<a href='#' onClick={ () => this.jumpTo(move) }>{ desc }</a>
				</li>
			);
		});

		let status;
		if (resultOfGame.winner) {
			status = 'Winner is ' + resultOfGame.winner;
		} else {
			status = 'Next player is ' + (this.state.xIsNext ? 'X' : 'O');
		}

		return (
			<div className="game">
				<h2 className="game-ttl">Tic Tac Toe</h2>
				<Board
					lastSquare={ this.state.history[this.state.stepNumber].lastSquare }
					winnerLine={ resultOfGame.winnerLine }
					squares={ current.squares }
					onClick={ (i) => this.handleClick(i) }
				/>
				<div className="game-info">
					<div>{ status }</div>
					<ol>{ moves }</ol>
				</div>
			</div>
		);
	}
}


// main class of this page
export default class ticTacToePage extends React.Component {

	static path = '/tic-tac-toe';

	render() {
		return (
			<div className="game-wrapper">
				<Game />
			</div>
		);
	}

}

// helpers
function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	let resultOfGame = {
		winner: undefined,
		winnerLine: undefined
	};

	lines.forEach((line) => {
		const [a, b, c] = line;

		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			resultOfGame = {
				winner: squares[a],
				winnerLine: line
			};
		}
	});

	return resultOfGame;
}

function isInArray(value, array = []) {
	return array.indexOf(value) > -1;
}
