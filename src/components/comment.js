import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';

let e = React.createElement;

export default class Comment extends React.Component {
    render() {
        return (
            <div className="card w-75">
                <div className="card-header bg-success text-white">
                    Username and Time
                </div>
                <div className="card-body">
                    Comment content
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <ReplyButton />
                </div>
            </div>
        );    

        // Below was replaced with lines 9-22 (JSX)

        // return e('div',
        // {class:'card w-75'},
        // e('div',
        // {class: 'card-header bg-success text-white'},
        // 'Username and Time and something else'),
        // e('div',
        // {class:'card-body'},
        // 'Comment Content'),
        // e('div',
        // {class: 'card-footer'},
        //     e(LikeButton, {}, null),
        //     e('span', {}, ' '),
        //     e(ReplyButton, {}, null)
        //     )
        // );
    }
}