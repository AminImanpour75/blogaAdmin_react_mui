import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { readArticles } from "../../api/ReadArticles";
import { Box, Button, CircularProgress, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { deleteArticle } from "../../api/deleteArticle";
export default function BasicTable() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [disable, setDisable] = useState(false);
  const handleDeleteClick = (slug) => {
    setDisable(true);
    deleteArticle(slug)
      .then(() => {
        window.location.reload();
      })
      .finally(() => {
        setDisable(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    readArticles()
      .then((response) => {
        setArticles(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        {loading && (
          <caption>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </Box>
          </caption>
        )}
        {articles.length === 0 && !loading && <caption>No Data</caption>}

        <TableHead>
          <TableRow>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Author</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Tags</TableCell>
            <TableCell align="left">Published</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!loading &&
            articles.map((article) => (
              <TableRow key={article.slug}>
                <TableCell align="left">{article.title}</TableCell>
                <TableCell align="left">{article.author.username}</TableCell>
                <TableCell align="left">{article.description}</TableCell>
                <TableCell align="left">{article.tagList}</TableCell>
                <TableCell align="left">
                  {article.createdAt.split("T")[0]}
                </TableCell>
                <TableCell align="left">
                  <Button
                    variant="contained"
                    color="success"
                    fullWidth
                    size="small"
                    disabled={disable}
                  >
                    <Link
                      to={`/article/${article.slug}`}
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      show more
                    </Link>
                  </Button>
                  <Stack direction="row" mt={1} spacing={1}>
                    <Button variant="contained" size="small" disabled={disable}>
                      <Link
                        to={`/edit/${article.slug}`}
                        style={{ color: "#fff", textDecoration: "none" }}
                      >
                        edit
                      </Link>{" "}
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => {
                        handleDeleteClick(article.slug);
                      }}
                      disabled={disable}
                    >
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
