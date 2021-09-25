import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import postService from "./services/posts";
import WCCFeed from "./components/WCCFeed.js";
import Sidebar from "./components/Sidebar.js";
import MaterialSidebar from "./components/MaterialSidebar.js";
import axios from "axios";

const App = (props) => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    postService.getAll().then((initialPosts) => {
      setPosts(initialPosts);
    });
  }, []);

  const addPost = (event) => {
    event.preventDefault();
    const postObject = {
      content: newPost,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: posts.length + 1,
    };

    postService.create(postObject).then((returnedPost) => {
      setPosts(posts.concat(returnedPost));
      setNewPost("");
    });
  };

  const handlePostChange = (event) => {
    console.log(event.target.value);
    setNewPost(event.target.value);
  };

  const postsToShow = showAll ? posts : posts.filter((note) => note.important);

  const toggleImportanceOf = (id) => {
    const post = posts.find((n) => n.id === id);
    const changedPost = { ...post, important: !post.important };

    postService.update(id, changedPost).then((returnedPost) => {
      setPosts(posts.map((n) => (n.id !== id ? n : returnedPost)));
    });
  };

  return (
    <div>
      <h1>posts</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {postsToShow.map((post) => (
          <Post
            key={post.id}
            post={post}
            toggleImportance={() => toggleImportanceOf(post.id)}
          />
        ))}
      </ul>
      <form onSubmit={addPost}>
        <input value={newPost} onChange={handlePostChange} />
        <button type="submit">Post</button>
      </form>

      <WCCFeed />
    </div>
  );
};

export default App;
