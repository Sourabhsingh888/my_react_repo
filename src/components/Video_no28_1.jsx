import React from 'react';
class Studdata extends React.Component{
    componentWillUnmount() {
        console.warn('componentWillUnmount called')
    }
    render() { 
        return (
          <div>
            <h3>Student Component</h3>
          </div>
        );
    }
}
export default Studdata;