import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface IBreadcrumbLink {
  name: string;
  href?: string;
}

interface IBreadcrumb {
  links: IBreadcrumbLink[];
}

export const Breadcrumbs = ({ links }: IBreadcrumb) => {
  return (
    <nav className="text-sm font-medium text-muted/80">
      <ol className="list-none p-0 inline-flex">
        {links.map((link, index) => (
          <li key={index} className="flex items-center">
            {link.href ? (
              <Link
                href={link.href}
                className="hover:text-secondary duration-300"
              >
                {link.name}
              </Link>
            ) : (
              <span className="font-semibold text-muted">{link.name}</span>
            )}
            {index < links.length - 1 && (
              <ChevronRight className="w-3 h-3 mx-2" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
