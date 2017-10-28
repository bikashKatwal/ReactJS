import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

function formatDate(date){
    return date.toLocaleDateString();
}

const comment={
    date: new Date(),
    text: 'I hope you enjoy learning React !!',
    authors:{
        name:'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

function Comment(props){
    return(
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar" src={props.author.avatarUrl}
                     alt={props.author.name}/>
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
                <div className="Comment-date">
                    {formatDate(props.date)}
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<Comment
    date={comment.date}
    text = {comment.text}
    author={comment.authors}/>,
        document.getElementById('root'));


