import React, { useEffect, useState } from "react";
import { editArticle } from "../api/editArticle";
import { ReadArticle } from "../api/ReadArticle";
import { Box, Grid, Paper } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleForm } from "../components/ArticleForm/ArticleForm";
import { TagForm } from "../components/TagForm/TagForm";

export const Edit = () => {
  const [loading, setLoading] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const slug = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({});

  const responseFormatter = (arr) => {
    return arr.map((item) => {
      return { tag: item, selected: false };
    });
  };

  useEffect(() => {
    setLoading(true);
    ReadArticle(slug.slug)
      .then((res) => {
        setArticle(res);
        const newTag = responseFormatter(res.tags);
        setTags(newTag);
        console.log(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleClickEditArticle = (body, title, description) => {
    const checkedTags = tags
      .filter((tag) => tag.selected)
      .map((tag) => tag.tag);
    setBtnLoading(true);
    editArticle(slug.slug, body, title, description, checkedTags)
      .then(() => {
        navigate("/");
      })
      .finally(() => {
        setBtnLoading(false);
      });
  };

  function checkClick(id) {
    const newTags = [...tags];
    newTags[id].selected = !newTags[id].selected;
    setTags(newTags);
  }

  return (
    <Box>
      <Grid container spacing={2} mt={2}>
        <Grid item md={8} xs={12}>
          <Paper>
            {!loading && (
              <ArticleForm
                article={article}
                title="Edit  Article"
                onClick={handleClickEditArticle}
                loading={btnLoading}
                btnText="Edit Article"
              />
            )}
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
