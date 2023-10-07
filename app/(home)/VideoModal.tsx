import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";

interface IVideoModal {
  onClose: () => void;
}

export const VideoModal = ({ onClose }: IVideoModal) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-[99999999] card-glass">
      <div className="relative w-full h-full p-8 md:p-40 flex flex-col">
        <Button
          variant="secondary"
          onClick={onClose}
          className="self-end w-fit p-2"
        >
          <XIcon className="w-6 h-6" />
        </Button>
        <video
          className="w-full h-full object-contain"
          src="/assets/demo-reel.mp4"
          controls
          autoPlay
        />
      </div>
    </div>
  );
};
