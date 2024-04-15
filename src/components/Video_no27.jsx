import React from 'react';
class Fun4 extends React.Component{
    constructor() {
        super();
        console.warn("constructor")
        this.state = {
            count : 0,
        }
    }

    shouldComponentUpdate() {
        console.warn("shouldComponentUpdate", this.state.count);
        if (this.state.count > 5 && this.state.count < 10) {
            return true;
        }
    }


    render() { 
        return (
            <div>
                <h1>shouldComponentUpdate {this.state.count}</h1>
                <button onClick={() => { this.setState({count:this.state.count + 1 })}}>update count</button>
            </div>
        )
    }
}

export default Fun4;