import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Typography, Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href={"/movielist"}>
          <Typography variant="h1">Moive List</Typography>
        </Link>
        <br></br>{" "}
        <Link href={"/signin"}>
          {" "}
          <Typography variant="h1">Sign in Page</Typography>{" "}
        </Link>
        <br></br>{" "}
        <Link href={"/createmovie"}>
          {" "}
          <Typography variant="h1">create Movie</Typography>{" "}
        </Link>
        <br></br>{" "}
        <Link href={"/updatemovie"}>
          {" "}
          <Typography variant="h1">Update movie</Typography>{" "}
        </Link>
        <br></br> <br></br>
      </main>

      <footer></footer>
    </div>
  );
}
