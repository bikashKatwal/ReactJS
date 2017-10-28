import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

function Mailbox(props){

    const unreadMessage=props.unreadMessage;
    return(
        <div>
            <h1>Hello!</h1>
            {
                unreadMessage.length>0 &&
                    <h2>you have {unreadMessage.length} unread message</h2>
            }
        </div>
    );
}

const message=['React','Re: React', 'Re:Re: React'];

ReactDOM.render(<Mailbox unreadMessage={message}/>,
        document.getElementById('root'));


