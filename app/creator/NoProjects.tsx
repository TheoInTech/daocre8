import { Button } from "@/components/ui/button";
import Link from "next/link";

export const NoProjects = () => {
  return (
    <div className="h-full min-h-[24rem] w-full flex flex-col items-center justify-center gap-8 p-8">
      <p className="text-2xl">You don&apos;t have any projects yet</p>
      <Button asChild>
        <Link href={"/raise"}>Create one here</Link>
      </Button>
    </div>
  );
};
