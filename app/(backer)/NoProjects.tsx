import { Button } from "@/components/ui/button";
import { Link } from "nextjs13-progress";

export const NoProjects = () => {
  return (
    <div className="h-full min-h-[24rem] w-full flex flex-col items-center justify-center gap-8 p-8">
      <p className="text-2xl">You don&apos;t have any backed projects yet</p>
      <Button asChild>
        <Link href={"/fund"}>Fund one here</Link>
      </Button>
    </div>
  );
};
