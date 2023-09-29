import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-full min-h-[24rem] w-full flex flex-col items-center justify-center gap-8 p-8">
      <p className="text-4xl">404 Page Not Found</p>
      <Button asChild>
        <Link href={"/"}>Go back home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
