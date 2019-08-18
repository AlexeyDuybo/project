import React from "react";
import PostItem from "../posts/postItem";
export default props=> {

    const postsList = props.posts.map( post=>{
        return(
            <li className="posts-block__item" key={post.author.id}>
                <PostItem id={post.id} text={post.text} date={post.date} author={post.author}/>
            </li>
        )
    })

    return(
        <div className="posts-block">
            <ul className="posts-block__list">
                {postsList}
            </ul>
        </div>
    )
}
