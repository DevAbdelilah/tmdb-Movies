"use client";

import type { Movie } from "@/core/query/movies/types";
import StarIcon from "@mui/icons-material/Star";
import { Button, Stack, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

interface Props {
  movie: Movie;
}

function MovieItem({ movie }: Props) {
  const getPosterUrl = (path: string) => {
    if (!path) return "";

    return `https://image.tmdb.org/t/p/original${path}`;
  };

  return (
    <Stack
      sx={{
        position: "relative",
        height: "480px",
        backgroundSize: "cover",

        borderRadius: "10px",
        width: "30%",
        backgroundImage: `url(${getPosterUrl(movie?.poster_path)})`,
      }}
    >
      <Stack
        sx={{
          gap: 6,
          margin: "8px",
        }}
      >
        <Stack
          p={1}
          borderRadius={1}
          width={"100%"}
          sx={{
            backgroundColor: "rgba(0,0,0,0.7)", // Semi-transparent gray
            backdropFilter: "blur(10px)",
          }}
          direction={"row"}
          gap={2}
        >
          <Typography fontSize={"20px"} fontWeight={600} color="white">
            {movie.title}
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <StarIcon sx={{ color: "warning.main" }} />

            {movie.vote_average}
          </Typography>
        </Stack>
        <Button
          startIcon={<PlayArrowIcon />}
          size="medium"
          sx={{
            width: "auto",
            color: "white",
            backgroundColor: "rgba(0,0,0,0.7)",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.7)",
              color: "white",
            },
          }}
        >
          {movie.title}
        </Button>
        <Typography sx={{ width: "auto", backgroundColor: "rgba(0,0,0,0.7)" }}>
          {movie.overview}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default MovieItem;
