import React from "react";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "User Name",
        location: "Somewhere on Earth"
    }
  }

  render() {
    return (
        <div className='user-card' >
            <h2>Name: Abhilash V</h2>
            <h3>Location: San Jose</h3>
            <h4>Contact: abhilashvadnala</h4>
        </div>
      )
  }
}
