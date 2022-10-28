import React from 'react';

export default class LikeButton extends React.Component {
    render() {
        return <button className= "btn btn-primary">Like</button>;
        // Above replaces line 7 (using JSX)
        // return React.createElement('button', {class: 'btn btn-primary'}, 'Like');
    }
}

