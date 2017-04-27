import React from 'react';

// the UI component for filtering the subway entrances by subway line
export default (props) => {
  const { lines, filterUsers } = props;

  // this is the JSX that will become the Filter UI in the DOM, notice it looks pretty similar to HTML
  // notice in the select element onChange is set to the updateFilter method
  // thus when a user selects a new subway line to view, the component passes the new filter value
  // to the parent component, Map, which reloads the GeoJSON data with the current filter value
  return (
    <div className="filterUserLines">
      <hr/>
      <h3>User Search</h3>
      <p>Filter User by Name</p>
      <select defaultValue="*"
        type="select"
        name="filterUsers"
        onChange={(e) => {/*console.log(e);*/ filterUsers(e)}}>
          { /* We render the select's option elements by maping each of the values of subwayLines array to option elements */ }
          {
            lines.map((user, i) => {
              return (
                  <option value={user} key={i}>{user}</option>
                );
            }, this)
          }
      </select>
    </div>
  );
};
