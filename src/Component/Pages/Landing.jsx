import React, { useState } from "react";
import { createPost } from "Service/posts/postService";
import BasicButton from "Component/Custom/Button/BasicButton";
import useStyles from "./Landing.styles";
import { TextField, Container, Typography } from "@mui/material";

const Landing = () => {
  const [title, setTitle] = useState("");
  const classes = useStyles();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {};
    data.title = title;
    const res = await createPost(data);
    if (res) {
      setTitle("");
    }
  };
  return (
    <Container className={classes.root} maxWidth="true">
      <form onSubmit={handleSubmit}>
        <Typography variant="h4">Create Post</Typography>
        <TextField
          label="Title"
          onChange={(e) => setTitle(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="title"
          sx={{ mb: 6 }}
          value={title}
        />
        <BasicButton
          variant="outlined"
          color="secondary"
          type="submit"
          text="Submit"
        />
      </form>
    </Container>
  );
};
export default Landing;
