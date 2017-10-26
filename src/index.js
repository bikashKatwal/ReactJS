import React,{ Component } from 'react';
import ReactDOM from 'react-dom';


const cartoons=['Pikachu','Alladin','Tom'];

function ToonList(props){
    const listCartoon=props.cartoon;

    return <ul>{listCartoon.map((cartoon, index)=>
        <li key={index}>{cartoon}</li>
    )}</ul>
}


ReactDOM.render(<ToonList cartoon={cartoons}/>,
    document.getElementById('root'));