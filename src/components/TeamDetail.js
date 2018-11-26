import React from "react";
import { connect } from "react-redux";

const TeamDetail = ({ team }) => {
  if (!team) {
    return <div>Select Song</div>;
  }

  return (
    <div>
      <h3>Detail for:</h3>
      <p>
        Title: {team.title}
        <br />
        Slug: {team.slug}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { team: state.selectedTeam };
};

export default connect(mapStateToProps)(TeamDetail);
