import React,{ Component } from 'react';
import ReactDOM from 'react-dom';


class Calculator extends Component{
    constructor(props){
        super(props);
        this.state={
            scale:'c',
            temp:0
        }
    }

    handleCelsius =(e)=>{
        this.setState({
            scale:'c',
            temp:e.target.value
        });
    };

    handleFahrenheit =(e)=>{
        this.setState({
            scale:'f',
            temp:e.target.value
        });
    };

    render(){
        const temp=this.state.temp;
        const scale=this.state.scale;
        const celsius = scale==='f'? convert(temp,toCelsius): temp;
        const fahrenheit = scale==='c'? convert(temp,toFahrenheit): temp;

        return(
            <div>
                <Inputs scaleName={"Celsius"} value={celsius} func={this.handleCelsius}/>
                <Inputs scaleName={"Fahrenheit"} value={fahrenheit} func={this.handleFahrenheit}/>
            </div>

        );
    }
}

function convert(temp, convertFunction){
    convertFunction(temp);
}

function toCelsius(fahrenheit){
    return(fahrenheit - 32) * 5/9;
}

function toFahrenheit(celsius){
    return(celsius * 9/5) + 32;
};

class Inputs extends Component{
    render(){
        return(
            <fieldset>
                <legend>Scale {this.props.scaleName}</legend>
                <input value={this.props.value} onChange={this.props.func}/>
            </fieldset>
        );
    }
}


ReactDOM.render(<Calculator />,
    document.getElementById('root'));