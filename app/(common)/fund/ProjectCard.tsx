import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ECategory } from "@/lib/schema/raise.schema";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { Link } from "nextjs13-progress";

interface ISocials {
  linkedinUrl: string;
  githubUrl: string;
  xUrl: string;
}

interface IProjectCard {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  category: ECategory | null;
  socials: ISocials;
}

export const ProjectCard = ({
  id,
  imageUrl,
  title,
  description,
  category,
  socials,
}: IProjectCard) => {
  return (
    <Card key={id} className="card-glass p-0 rounded-xl">
      <CardHeader className="p-0 rounded-xl">
        <Image
          src={imageUrl}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full rounded-t-xl"
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-4 p-4">
        <CardTitle className="flex flex-col gap-2">
          <div className="font-bold truncate text-gradient-yellow">{title}</div>{" "}
          <div className="font-medium text-sm">{category} category</div>
        </CardTitle>
        <CardDescription className="flex flex-col gap-4 justify-between">
          <div className="line-clamp-3 h-16">
            {`${description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos natus dolores a laudantium, atque, ab ex ullam error voluptatem necessitatibus laboriosam neque iure voluptate obcaecati culpa, architecto similique quam commodi!`}{" "}
          </div>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col gap-8 p-4 mb-2">
        <div className="flex gap-4 items-start w-full">
          {socials.xUrl && (
            <Link href={socials.xUrl} target="_blank">
              <Twitter className="w-6 h-6 hover:text-secondary duration-300 stroke-2" />
            </Link>
          )}
          {socials.linkedinUrl && (
            <Link href={socials.linkedinUrl} target="_blank">
              <Linkedin className="w-6 h-6 hover:text-secondary duration-300 stroke-2" />
            </Link>
          )}
          {socials.githubUrl && (
            <Link href={socials.githubUrl} target="_blank">
              <Github className="w-6 h-6 hover:text-secondary duration-300 stroke-2" />
            </Link>
          )}
        </div>
        <Button asChild size="md" className="w-full">
          <Link href={`/fund/${id}`}>View project</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
