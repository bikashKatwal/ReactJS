import React,{ Component } from 'react';
import ReactDOM from 'react-dom';


function Message(props){
    if(props.value){
        return  <h1>This is first message</h1>
    }else{
        return  <h1>This is second message</h1>
    }
}

class Btn extends Component{
    constructor(props){
        super(props);

        this.state={
            value:true
        }
    }

    handleClick(){

        this.setState({
           value: !this.state.value
       });
    }

    render(){
        return(
          <div>
              <button onClick={this.handleClick.bind(this)}>Change the Message</button>
                <Message value={this.state.value}/>
          </div>

        );
    }


}
ReactDOM.render(
    <Btn/>,
    document.getElementById('root')
);