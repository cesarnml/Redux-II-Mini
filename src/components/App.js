import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchChars } from "../actions";

import "../styles/App.css";
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchChars();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <div>Loading ...</div>
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return (
                <li style={{ listStyle: "none" }} key={char.name}>
                  {char.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chars: state.charsReducer.chars,
    fetching: state.charsReducer.fetching,
    fetched: state.charsReducer.fetched,
    error: state.charsReducer.error
  };
};
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, { fetchChars })(App);
