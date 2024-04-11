import React from 'react';
class shivam extends React.Component {
  constructor() {
      super();
      this.state = {
          name:'shivam'
      }
      console.warn("constructor")
  }

    componentDidMount() {
        console.warn("componentDidMount")
    }
    render() {
        console.warn("render");

        return (
            <div style={{backgroundColor:"blueviolet"}}>
                <h1>Component Did Mount {this.state.name}</h1>   
                <button type="button" onClick={() => { this.setState({name:"Shivam tomar"})}}>Update Name</button>
        </div>
    )    
    }  
}
export default shivam;