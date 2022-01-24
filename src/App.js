import "./styles.css";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Titanic",
      isReleased: true
    };
  }

  toogleRelease = () => {
    console.log("toogleRelease");
    this.setState((prevState) => ({
      ...this.state,
      isReleased: !prevState.isReleased
    }));
  };

  render() {
    const { title, isReleased } = this.state;

    return (
      <div>
        <MemoizedMovie title={title} />
        <h1>Movie is released: {isReleased ? "yes" : "no"} </h1>
        <button onClick={this.toogleRelease}>Toogle Release</button>
      </div>
    );
  }
}

// function-based PureComponent
function MovieTitle(props) {
  console.log("MovieTitle is rendered");
  return <h1>Movie title {props.title} </h1>;
}

const MemoizedMovie = React.memo(MovieTitle);
