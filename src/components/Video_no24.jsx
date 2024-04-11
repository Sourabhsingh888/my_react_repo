import React from 'react';
class User1 extends React.Component{
    constructor() {
        super();
        this.state = {
            email : "anil@gmail.com",
        }
    }

    render() {
        console.warn("Render method", this.state.email);
        return (
          <div>
            {/* <h1>User Component </h1> */}
            <h1>{this.state.email}</h1>
            <button
              type="button"
              onClick={() => this.setState({ email: "sidhu@gmail.com" })}
            >
              Update Email
            </button>
          </div>
        );
    }
}

export default User1;