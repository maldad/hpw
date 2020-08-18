import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
  //creí que manejaríamos la inserción de 'O' desde aquí
  //con una especie de IF, sin embargo no es así
  //el estado del juego va cambiar hacia Board
// Mi idea en general es:
// Mantener en una variable el "lastState", que seria
// el último símbolo jugado, pero después de leer Lifting State Up
// viene el capítulo de Inmutabilidad, algo interesante ya que en
// react se utilizan funciones puras
// entrada -> salida
// Sin alterar cosas que estén fuera de su alcance
// En ese caso, vamos a RECIBIR un estado del Board, pasarlo a la
// función que maneja un evento de clic y DEVOLVER un nuevo estado

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null), // este será nuestro estado inicial (9 cuadros vacios)
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    // ¿cómo funciona const?
    // The value  of a constant can't be changed throught reassignment, neither can be redeclared
    // No podemos hacer: const n = [1,2,3], n = [4];
    // Pero podemos: const n = [1,2,3], n[0] = 4 => [4,2,3]
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
    // toma el estado actual, lo altera y setea uno nuevo
  }

  renderSquare(i) {
    return (
      // yo construyo un cuadro pasando estas propiedades
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
