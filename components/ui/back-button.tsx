import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { ChevronLeft } from "lucide-react";
import { Link } from "nextjs13-progress";

export const BackButton = ({
  href,
  className,
}: {
  href: string;
  className?: string;
}) => {
  return (
    <Button
      asChild
      variant={"outline"}
      size={"sm"}
      className={cn("w-fit bg-background/5 text-muted", className)}
    >
      <Link href={href}>
        <ChevronLeft className="w-5 h-5 mr-2" /> Back
      </Link>
    </Button>
  );
};
