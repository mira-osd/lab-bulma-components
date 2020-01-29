import React, { Component } from "react";

class CoolButton extends Component {
    render() {
        return (
            <div className="Buttons">
            <button className="button is-rounded my-class is-danger is-small">Submit</button>
            {/* <button className="button is-small is-success">Button 2</button> */}
            </div>
        );
    }
}

export default CoolButton;