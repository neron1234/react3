import React from "react";
import { render } from "react-dom";

const Stars = props => {
  return (
    <div className="col-5">
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <i className="fa fa-star" />
    </div>
  );
};

const Button = props => {
  return (
    <div className="col-2">
      <button>=</button>
    </div>
  );
};

const Answer = props => {
  return <div className="col-5">...</div>;
};

const Numbers = props => {
  return (
    <div className="card text-center">
      <div>
        <span>1</span>
        <span>1</span>
        <span>1</span>
      </div>
    </div>
  );
};

class Game extends React.Component {
  render() {
    return (
      <div className="Container">
        <h3>Play ninie</h3>
        <hr />
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
        <br />
        <Numbers />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
