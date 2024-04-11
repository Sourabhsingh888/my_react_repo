//  03
//  State in class component -----------------------------

import React,{Component} from 'react';
class classcompo extends Component{
    constructor(){
        super();
        this.state={
            data:"sourabh class component"
        }
    }


update(){
    this.setState({data:this.state.data = "update class component"})
}

render(){
    return(
        <div>
            <h1>{this.state.data}</h1>
            <button type="button" onClick={()=>this.update()}>Update Data</button>
        </div>
    )
}
}

export default classcompo