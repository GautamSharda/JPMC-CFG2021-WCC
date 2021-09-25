import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import postService from "./services/posts";
import WCCFeed from "./components/WCCFeed.js";
import Sidebar from "./components/Sidebar.js";
import MaterialSidebar from "./components/MaterialSidebar.js";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
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
      <MaterialSidebar></MaterialSidebar>
      <h1>posts</h1>
      <div>
        <Button
          onClick={() => setShowAll(!showAll)}
          style={{
            position: "absolute",
            left: "26%",
            top: "15%",
            transform: "translate(-50%, -50%)",
          }}
        >
          show {showAll ? "important" : "all"}
        </Button>
      </div>
      <ul
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          margin: "5px",
        }}
      >
        {postsToShow.map((post) => (
          <Post
            key={post.id}
            post={post}
            toggleImportance={() => toggleImportanceOf(post.id)}
          />
        ))}
      </ul>
      <form
        onSubmit={addPost}
        style={{
          position: "absolute",
          left: "30%",
          transform: "translate(-50%, -50%)",
          margin: "5px",
        }}
      >
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          value={newPost}
          onChange={handlePostChange}
        />

        <Button type="submit" variant="contained">
          Post
        </Button>
      </form>

      <WCCFeed />
    </div>
  );
};

export default App;
