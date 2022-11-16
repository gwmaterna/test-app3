import React from 'react';
import Post from './post';

let e = React.createElement;

export default class NewsFeed extends React.Component {
    render() {
        let comments = [
        {
            content: 'This is my comment',
            username: 'Tommy',
            date: '10-30-2022'
        },
        {
            content: 'This is another comment',
            username: 'Sammy',
            date: '10-25-2022'
        },
        {
            content: 'Here\s a comment from me',
            username: 'Greg',
            date: '10-01-2022'
        }
    ];
        return (
            <div className="container">
                <Post {...{comments: comments, content: 'This is my post content!'}}/>
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