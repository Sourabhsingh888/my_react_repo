 import React from 'react'
class App1 extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Anil sidhu"
        }
        console.warn("constructor")
    }
    render() {
        console.warn("render")
        return (<div>
            <h1>Hello World {this.state.name}</h1>
        </div>)
    }
}

export default App1;