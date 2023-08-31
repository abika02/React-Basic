import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);     //syntax

    this.state = {
      planet:"earth"
    };
    console.log("Constructor Here");
  }

  componentDidMount() {
    this.setState({planet: "Jupiter"}) // tells wats entire state and what value it is replaced with.
    console.log("componentDidMount Here");
  }


  shouldComponentUpdate(nextProp,nextState) {
    console.log("shouldComponent Here");
    console.log({
      nextProp,
      nextState
    });
    return true;
  }


  getSnapshotBeforeUpdate(prevProp,prevState) {
    console.log("getSnapshotBeforeUpdate Here");
    console.log({
      prevProp,
      prevState
    });
    return true;
  }

  componentDidUpdate() {
    console.log(this.state);
  }


  render() {//logic of code is written
    console.log("Rendered Here");
    return (
      <div>
      <h1>{this.props.name}</h1>
      <p>{this.props.description}</p>
      <h4>{this.state.planet}</h4>
      </div>
    );
  }
}
//State-> A set of data that an individual compnent holds.
export default User;
