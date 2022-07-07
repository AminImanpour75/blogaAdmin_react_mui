import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReadArticle } from "../../api/ReadArticle";
export const Content = () => {
  const slug = useParams();
  const [article, setArticle] = useState({});
  useEffect(() => {
    ReadArticle(slug.slug)
      .then((res) => {
        setArticle(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(slug);
  return (
    <Box mt={2}>
      <Paper sx={{ minHeight: "400px", padding: "1rem" }}>
        <Typography variant="h6" component="h2">
          {article.title}
        </Typography>
        <Typography component="p">{article.body}</Typography>
      </Paper>
    </Box>
  );
};
