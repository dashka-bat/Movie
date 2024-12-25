import { Play } from "lucide-react";
export const Button = () => {
  return (
    <div>
      <button className="w-[145px] h-[40px] bg-[#18181B] text-white rounded-md flex gap-4 ">
        <Play className="w-4 h-4 mt-3 ml-2" />
        <div className="mt-2">Watch Trailer</div>
      </button>
    </div>
  );
};
