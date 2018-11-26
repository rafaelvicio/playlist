import React from "react";
import TeamList from "./TeamList";
import TeamDetail from "./TeamDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <TeamList />
        </div>
        <div className="column eigth wide">
          <TeamDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
