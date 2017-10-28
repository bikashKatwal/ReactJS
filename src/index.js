import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class Toggle extends Component{
    constructor(props){
        super(props);
        this.state={
            isToggleOn:true
        }
    }
    handleEvent=()=>{
        this.setState(prevState =>({
            isToggleOn:!prevState.isToggleOn
        }));
    };

    render(){
        return(
            <div>
                <button onClick={this.handleEvent.bind(this)}>
                    {this.state.isToggleOn?'ON':'OFF'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(<Toggle />,
        document.getElementById('root'));


