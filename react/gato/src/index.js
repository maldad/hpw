import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  // Para que nuestro componente "recuerde" que se hizo
  // un click usaremos el "state"
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
      // me regresa un cuadro de acuerdo a las propiedades que le pasé
    );
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
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null) // este será nuestro estado inicial (9 cuadros vacios)
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
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
    return <Square value={this.state.squares[i]} />;
  }

  render() {
    const status = 'Next player: X';

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
