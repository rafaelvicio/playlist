import React, { Component } from "react";
import { connect } from "react-redux";
import { selectTeam } from "../actions";

class TeamList extends Component {
  renderList() {
    return this.props.teams.map(team => {
      return (
        <div className="item" key={team.id}>
          <div className="rigth floated content">
            <button
              onClick={() => this.props.selectTeam(team)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="contend">{team.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { teams: state.teams };
};

export default connect(
  mapStateToProps,
  { selectTeam }
)(TeamList);
