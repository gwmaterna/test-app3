import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';
import Comment from './comment';

let e = React.createElement;

export default class Post extends React.Component {
    render() {
        return (
            <div className="card w-75">
                <div className="card-header bg-primary text-white">
                    Username and Time
                </div>
                <div className="card-body">
                    This is where our content goes
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <ReplyButton />
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </div>
        );

    // Below was replaced w/ lines 10-26 using JSX    
    // return e('div',
    //     {class:'card w-75'},
    //     e('div',
    //     {class: 'card-header bg-success text-white'},
    //     'Username and Time'),
    //     e('div',
    //     {class:'card-body'},
    //     'Post Content'),
    //     e('div',
    //     {class: 'card-footer'},
    //         e(LikeButton, {}, null),
    //         e('span', {}, ' '),
    //         e(ReplyButton, {}, null),
    //         e('span', {}, ' '),
    //         e(Comment, {}, null),
    //         e(Comment, {}, null)
    //         )
    //     );
    }
}