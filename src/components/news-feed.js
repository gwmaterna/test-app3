import React from 'react';
import Post from './post';

let e = React.createElement;

export default class NewsFeed extends React.Component {
    render() {
        return (
            <div className="container">
                <Post />
                <Post />
            </div>
        );

    // Below was replace w/ lines 8-13 using JSX    
    // return e('div',
    //     {class:'container'},
    //         e(Post, {}, null),
    //         e(Post, {}, null),
    //         e(Post, {}, null),
            
    //     );
    }
}