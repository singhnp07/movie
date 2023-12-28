import { Button, Typography, Box, Grid, Container } from "@mui/material";
import MovieCard from "../Components/MovieCard";
import style from "../styles/Movielist.module.css";
import Head from "next/head";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import LoginIcon from "@mui/icons-material/Login";
import poster from "../download.jpg";
import React from "react";
import Layout from "../Components/Layout";
import Link from "next/link";
const MovieListData = [
  { title: "title1", year: "2003", src: poster },
  { title: "title1", year: "2003", src: poster },
  { title: "title1", year: "2003", src: poster },
  { title: "title1", year: "2003", src: poster },
  { title: "title1", year: "2003", src: poster },
  { title: "title1", year: "2003", src: poster },
  { title: "title1", year: "2003", src: poster },
  { title: "title1", year: "2003", src: poster },
];
const Movielist = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <Head>
        <title>Movie List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Container>
          <Box
            display={"flex"}
            style={{ margin: "2rem 10px" }}
            justifyContent={"flex-end"}
            alignItems={"center"}
            width={"100%"}
          >
            <Typography
              variant="h2"
              style={{ display: "block", width: "50%", textAlign: "left" }}
            >
              My Movies
            </Typography>
            <Box style={{ display: "block", width: "50%", textAlign: "right" }}>
              <Link href={"/signin"}>
                <Button>
                  login&nbsp; &nbsp;&nbsp; <LoginIcon />
                </Button>
              </Link>
            </Box>
          </Box>
          <Box>
            <Grid
              container
              columnSpacing={{ xs: 0 }}
              margin={"auto"}
              justifyContent={"center"}
            >
              {MovieListData.map((item) => {
                return (
                  <>
                    <Grid item lg={3} xs={6}>
                      <MovieCard
                        title={item.title}
                        src={item.src}
                        year={item.year}
                      ></MovieCard>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Box>
          <Box
            display={"flex"}
            style={{ marginTop: "20px", marginBottom: "20px" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack spacing={2}>
              <Pagination
                count={10}
                color="primary"
                page={page}
                onChange={handleChange}
                variant="text"
                style={{ color: "white" }}
              />
            </Stack>
          </Box>
        </Container>{" "}
      </Layout>
    </>
  );
};

export default Movielist;
