import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";
import PropTypes from "prop-types";
import NewPostFormContainer from "./NewPostForm/NewPostFormContainer";


const Posts = (props) => {

    let postsList = props.postData.map( p =>
        <Post post={p.text} ava={props.users[0].avatar} likes={p.likeCount}/>
    );

    return <div className={s.posts}>

        <div className={s.postsHeader}>My posts</div>

        <NewPostFormContainer />

        {postsList}

    </div>


}

export default Posts;

Posts.propTypes = {
    postData: PropTypes.array,
    text: PropTypes.string,
    avatar: PropTypes.string,
    likeCount: PropTypes.number,
}