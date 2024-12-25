import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <>
      <div className="h-full flex justify-center items-center gap-2">
        <LoaderCircle className="size-10 animate-spin text-cyan-600" />
        <span className="text-lg">Loading...</span>
      </div>
    </>
  );
};

export default Loading;
