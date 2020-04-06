import React from "react";

const TwoWayBindingChild = props => {
  return (
    <div>
      <p onClick={props.click}>
        I'm a {props.name} and i am {props.age} years old!
      </p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};
export default TwoWayBindingChild;
