import { Box } from "@mui/material";
import style from "../styles/MovieCard.module.css";
import Image from "next/image";
//movie card
//props need props.src,props,title,props.year
const MovieCard = (props) => {
  return (
    <>
      <Box className={style.MovieCard_layout}>
        <Box className={style.MovieCard_image}>
          <Image
            src={props.src}
            alt="poster"
            layout="fill"
            objectFit="cover"
          ></Image>
        </Box>
        <Box className={style.MovieCard_title}> {props.title}</Box>
        <Box className={style.MovieCard_year}> {props.year}</Box>
      </Box>
    </>
  );
};
export default MovieCard;
