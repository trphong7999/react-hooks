import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts: PropTypes.array,
};

PostList.defaultProps = {
    posts: [],
}

export default function PostList(props) {
    const { posts } = props
    return (
        <div className="post-list">
            {
                posts.map(post => (<li key={post.id}> {post.title} </li>))
            }
        </div>
    );
}

