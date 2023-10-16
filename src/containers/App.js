import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { searchRobots } from "../features/searchrobots/searchRobotsSlice";
import { requestedRobots } from "../features/requestrobots/requestRobotsSlice";
import MainPage from "../components/MainPage";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchingRobots.searchField,
    robots: state.requestingRobots.robots,
    isPending: state.requestingRobots.isPending,
    error: state.requestingRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(searchRobots(event.target.value)),
    onRequestRobots: () => dispatch(requestedRobots()),
  };
};

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
