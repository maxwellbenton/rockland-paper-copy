import React from 'react'


export default function BlogPosts(props){
  return (
    <div>
        <h3>Blog</h3>
        {props.posts !== null ? props.renderPosts() : null}
    </div>
  )
}