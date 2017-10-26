import React,{ Component } from 'react';
import ReactDOM from 'react-dom';


class Inc extends Component{
    constructor(props){
        super(props);

        this.state={
            counter: 0
        }

    }

    increment(){
        this.setState({
            counter: this.state.counter+1
        });
    }
    
    render(){
        return <button onClick={this.increment.bind(this)}>Value is {this.state.counter}</button>
    }
}
ReactDOM.render(
    <Inc/>,
    document.getElementById('root')
);