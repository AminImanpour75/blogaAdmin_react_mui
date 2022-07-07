import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import { ArticleForm } from "../components/ArticleForm/ArticleForm";
import { TagForm } from "../components/TagForm/TagForm";
import { useState, useEffect } from "react";
import { GetTags } from "../api/GetTags";
import { CreateArticle } from "../api/createArticle";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const [btnLoading, setBtnLoading] = useState(false);

  const navigate = useNavigate();

  const getTagData = () => {
    setLoading(true);
    GetTags()
      .then((res) => {
        setTags(res);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getTagData();
  }, []);

  function checkClick(id) {
    const newTags = [...tags];
    newTags[id].selected = !newTags[id].selected;
    setTags(newTags);
  }

  const handleClickCreateArticle = (body, title, description) => {
    setBtnLoading(true);

    const checkedTags = tags
      .filter((tag) => tag.selected)
      .map((tag) => tag.tag);

    CreateArticle(body, title, description, checkedTags)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setBtnLoading(false);
      });
  };

  return (
    <Box>
      <Grid container spacing={2} mt={2}>
        <Grid item md={8} xs={12}>
          <Paper>
            <ArticleForm
              title="Create New Article"
              onClick={handleClickCreateArticle}
              loading={btnLoading}
              btnText="Create Article"
            />
          </Paper>
        </Grid>
        <Grid item md={4} xs={12}>
          <Paper sx={{ heigth: "100%" }}>
            <TagForm
              loading={loading}
              tags={tags}
              setTags={setTags}
              onClick={checkClick}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
