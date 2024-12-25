import { useState } from "react";
import { useEffect } from "react";
let Title: string = "";
let Rating: string = "";
let Overview: string = "";
export default function Data() {
  // const [Information, setInformation] = useState({
  //   Title: "",
  //   Rating: "",
  //   Overview: "",
  // });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
    },
  };

  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
  //     options
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setInformation({
  //         Title: data.results[0].title,
  //         Overview: data.results[0].overview,
  //         Rating: data.results[0].vote_average,
  //       });
  //       console.log(data);
  //     });
  // }, []);
}

export const Card = () => {
  return (
    <div className="bg-gray-500 w-[157.5px] h-[309.1px]">
      <div>⭐️</div>
      <div>title</div>
    </div>
  );
};
