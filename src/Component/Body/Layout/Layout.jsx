import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllPosts } from "Redux/Selectors/postSelectors";
import { CssBaseline } from "@mui/material";
import Landing from "Component/Pages/Landing";
import { usePostList } from "Hooks/usePostList";

const Layout = () => {
  const posts = usePostList();
  const getAllPostFromStore = useSelector((state) => getAllPosts(state));

  useEffect(() => {
    console.log(posts);
    console.log(Object.values(getAllPostFromStore));
  }, [posts, getAllPostFromStore]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Landing />
    </React.Fragment>
  );
};
export default Layout;
