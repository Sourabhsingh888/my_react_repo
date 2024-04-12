// import React from 'react';
// class Fun3 extends React.Component{
//     constructor() {
//         super();
//         console.warn("Constructor called")
//         this.state = {
//             count: 0,
//         }
//     }
//     componentDidUpdate(preProps, preState, snapshot) {
//     console.warn("componentDidUpdate called", preState);
// }
//     render() {
//         console.warn("render called");
//         return (
//           <div>
//                 <h1>Component Did update{this.state.count}</h1> 
//                 <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update count</button>
                
//           </div>
//         );
//     }
// }
// export default Fun3;

// import React from 'react';
// class Fun3 extends React.Component{
//     constructor() {
//         super();
//         console.warn("Constructor called")
//         this.state = {
//             count: 0,
//         }
//     }
//     componentDidUpdate(preProps, preState, snapshot) {
//         console.warn("componentDidUpdate called", preState.count, this.state.count)
//         if (preState.count === this.state.count) {
//             alert("data is already same")
//         }
// }
//     render() {
//         // console.warn("render called");
//         return (
//           <div>
//                 <h1>Component Did update{this.state.count}</h1> 
//                 <button onClick={()=>{this.setState({count:1})}}>Update count</button>
                
//           </div>
//         );
//     }
// }
// export default Fun3;

import React from 'react';
class Fun3 extends React.Component{
    constructor() {
        super();
        console.warn("Constructor called")
        this.state = {
            count: 0,
        }
    }
    componentDidUpdate(preProps, preState, snapshot) {
        console.warn("componentDidUpdate called", preState.count, this.state.count)
        if (this.state.count < 10) {
          this.setState({ count: preState.count + 1 })
        }
        
    }
    
//     componentDidUpdate(preProps, preState, snapshot) {
//         console.warn(
//           "componentDidUpdate called",
//           snapshot,
//         );
//         if (this.state.count < 10) {
//           this.setState({ count: this.state.count + 1 })
//         }
        
// }
     
    render() {
        // console.warn("render called");
        return (
          <div>
                <h1>Component Did update{this.state.count}</h1> 
                <button onClick={()=>{this.setState({count:1})}}>Update count</button>
                
          </div>
        );
    }
}
export default Fun3;