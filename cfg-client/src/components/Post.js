import React from 'react'

const Post = ({ post, toggleImportance }) => {
  const label = post.important
    ? 'make not important':'make important'
  return (
    <li>
      {post.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Post