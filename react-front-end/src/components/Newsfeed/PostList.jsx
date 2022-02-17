import React from "react";
import "semantic-ui-css/semantic.min.css"
import { Container } from "semantic-ui-react";
//import { Feed } from 'semantic-ui-react'
import SinglePost from "./SinglePost";

export default function PostList({ posts }) {
  const renderPosts = posts.map((post) => {
      return (
      <SinglePost
        key={post.id}
        user_id={post.user_id}
        title={post.title}
        photo={post.photo}
        description={post.description}
        topic={post.topic}
        created_at={post.created_at}
      />
      )
    })
  return <Container> {renderPosts} </Container>
};