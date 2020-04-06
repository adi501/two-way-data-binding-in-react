import React, { Component } from "react";
import TwoWayBindingChild from "./TwoWayBindingChild";

class TwoWayBindingParent extends Component {
  state = {
    Person: [{ name: "adi", age: 29 }]
  };
  nameChangedEvent = event => {
    this.setState({ Person: [{ name: event.target.value, age: 30 }] });
  };
  render() {
    return (
      <div>
        <p>Two Way Binding </p>
        <TwoWayBindingChild
          name={this.state.Person[0].name}
          age={this.state.Person[0].age}
          changed={this.nameChangedEvent}
        />
      </div>
    );
  }
}
export default TwoWayBindingParent;
