import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Film } from "lucide-react";
import Image from "next/image";
import { Search } from "lucide-react";
import { Moon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "./_components/card";
import { Carousel } from "@/components/ui/carousel";
import { type } from "os";
type Information = {
  Title: string;
  Rating: string;
  Overview: string;
};

export default function Home() {
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
  fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
    options
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
    });
  // let Information = data.results;
  return (
    <div>
      <div className="bg-white w-screen h-screen">
        <div className="flex gap-5 justify-between">
          <div className="flex text-purple-500 ml-5 gap-3 mt-5">
            <Film />
            Movie Z
          </div>
          <div className="flex">
            <div className="w-[36px] h-[36px] border-[2px] rounded-lg flex justify-center items-center mr-3 mt-3">
              <Search className="w-[16px] h-[16px]" />
            </div>
            <div className="w-[36px] h-[36px] border-[2px] rounded-lg flex justify-center items-center mr-5 mt-3">
              <Moon className="w-[16px] h-[16px] " />
            </div>
          </div>
        </div>
        <div>
          <Carousel className="w-[396px] h-[]"></Carousel>
          {/* <img className="mt-5 w-[375px] h-[246px]" src="poster.png" alt="" /> */}
        </div>
        <div className="flex justify-between">
          <div>
            Now playing:
            <p className="text-purple-600">{Title}</p>
          </div>
          <div>⭐️{Rating}/10</div>
        </div>
        <div>{Overview}</div>
        <div>
          <Button />
        </div>

        <div>
          <div className="text-[24px]">
            UpcomingPlay
            <Badge className="w-[120px] h-9" />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>{" "}
          <div>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
