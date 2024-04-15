import React from 'react';
import Studdata from './Video_no28_1';
class fun5 extends React.Component{
    constructor() {
        super();
        this.state = {
            show: true,
        }
    }
    render() { 
        return (
          <div>
            <h1>Component Will Unmount</h1>
            {this.state.show ? (
              <Studdata />
            ) : (
              <h3>Child component Deleted</h3>
            )}
            <button onClick={() => this.setState({ show: !this.state.show })}>
              Toggle Child Component
            </button>
          </div>
        );
    }
}
export default fun5;